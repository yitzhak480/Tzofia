const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');
const { pick } = require('../lib/pick');
const { ancestorChain, wouldCreateLoop, removedImages } = require('../lib/tree');
const { deleteImages } = require('../lib/cloudinary');
const { yearOf } = require('../lib/chrono');
const { COLOR_KEYS } = require('../models/shared');

const router = express.Router();
const FIELDS = ['slug', 'name', 'description', 'image', 'parent', 'order', 'cardColor', 'icon', 'colorEntries', 'sortMode'];
const SORT = { order: 1, createdAt: 1 };
// What a person's card needs (no full article).
const CARD_FIELDS = 'slug kind name period summary autoSummary mainImage order categories life offices treeSpots cardColor orders';

const normalizeParent = (data) => {
  if (data.parent === '' || data.parent === undefined) data.parent = null;
  return data;
};

// GET /api/categories -> every category (flat list; the site builds the tree)
router.get('/', async (req, res) => {
  const categories = await Category.find().sort(SORT).lean();
  res.json(categories);
});

// GET /api/categories/:slug -> the category, its breadcrumbs, subcategories and people
router.get('/:slug', async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug.toLowerCase() }).lean();
  if (!category) return res.status(404).json({ message: 'Category not found' });

  const [ancestors, children, unsorted] = await Promise.all([
    ancestorChain(category.parent),
    Category.find({ parent: category._id }).sort(SORT).lean(),
    Person.find({ categories: category._id, published: true }).select(CARD_FIELDS).sort(SORT).lean(),
  ]);

  // Order inside this category (falls back to the general order).
  const pos = (p) => (p.orders && p.orders[String(category._id)] != null ? p.orders[String(category._id)] : p.order);
  const byManual = (a, b) => pos(a) - pos(b) || String(a.createdAt).localeCompare(String(b.createdAt));
  // 'alpha' is sorted on the site, in the visitor's language.
  const mode = category.sortMode || 'chrono';
  const people = unsorted.sort(mode === 'chrono' ? (a, b) => yearOf(a) - yearOf(b) || byManual(a, b) : byManual);

  res.json({ category, ancestors, children, people });
});

// POST /api/categories (admin)
router.post('/', requireAdmin, async (req, res) => {
  const data = normalizeParent(pick(req.body, FIELDS));
  if (data.parent && !(await Category.exists({ _id: data.parent }))) {
    return res.status(400).json({ message: 'Parent category does not exist' });
  }
  const category = await Category.create(data);
  res.status(201).json(category);
});

// PUT /api/categories/:id (admin)
router.put('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Category not found' });
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  const data = pick(req.body, FIELDS);
  if ('parent' in data) {
    normalizeParent(data);
    if (data.parent && !(await Category.exists({ _id: data.parent }))) {
      return res.status(400).json({ message: 'Parent category does not exist' });
    }
    if (await wouldCreateLoop(category._id, data.parent)) {
      return res.status(400).json({ message: 'A category cannot be inside itself or its own subcategory' });
    }
  }

  const oldImage = category.image ? [category.image.toObject()] : [];
  category.set(data);
  await category.save();
  await deleteImages(removedImages(oldImage, [category.image]));
  res.json(category);
});

// POST /api/categories/:id/entry-colors (admin) — the card colour of every entry
// in the category (and its subcategories, unless includeSubcategories is false):
//   { mode: 'color', color }  one colour for all
//   { mode: 'random' }        a random colour for each, from the site's ten
//   { mode: 'clear' }         no colour of their own (the category decides)
const SITE_COLORS = ['burgundy', 'blue', 'purple', 'brown', 'marble', 'emerald', 'teal', 'ink', 'olive', 'slate'];
router.post('/:id/entry-colors', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Category not found' });
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  const { mode, color, includeSubcategories = true } = req.body || {};
  if (!['color', 'random', 'clear'].includes(mode)) return res.status(400).json({ message: 'Unknown mode' });
  if (mode === 'color' && !COLOR_KEYS.includes(color)) return res.status(400).json({ message: 'Unknown colour' });

  // this category and (optionally) everything under it
  const ids = [category._id];
  if (includeSubcategories) {
    const all = await Category.find().select('_id parent').lean();
    for (let i = 0; i < ids.length; i += 1) {
      for (const c of all) if (String(c.parent) === String(ids[i])) ids.push(c._id);
    }
  }
  const people = await Person.find({ categories: { $in: ids } }).select('_id');
  let last = '';
  for (const p of people) {
    let value = '';
    if (mode === 'color') value = color;
    if (mode === 'random') {
      // random, but never the same colour twice in a row
      const choices = SITE_COLORS.filter((c) => c !== last);
      value = choices[Math.floor(Math.random() * choices.length)];
      last = value;
    }
    await Person.updateOne({ _id: p._id }, { $set: { cardColor: value } });
  }
  res.json({ updated: people.length });
});

// The order of the entries in a category, as the site shows it (admin; drafts too).
const entryOrder = (category, people) => {
  const pos = (p) => (p.orders && p.orders[String(category._id)] != null ? p.orders[String(category._id)] : p.order);
  const byManual = (a, b) => pos(a) - pos(b) || String(a.createdAt).localeCompare(String(b.createdAt));
  const mode = category.sortMode || 'chrono';
  return people.sort(mode === 'chrono' ? (a, b) => yearOf(a) - yearOf(b) || byManual(a, b) : byManual);
};

// GET /api/categories/:id/entry-order (admin) → { sortMode, ids }
router.get('/:id/entry-order', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Category not found' });
  const category = await Category.findById(req.params.id).lean();
  if (!category) return res.status(404).json({ message: 'Category not found' });
  const people = await Person.find({ categories: category._id }).select(CARD_FIELDS + ' createdAt').sort(SORT).lean();
  res.json({ sortMode: category.sortMode || 'chrono', ids: entryOrder(category, people).map((p) => p._id) });
});

// POST /api/categories/:id/reorder-entries (admin) { ids } — the entries in this
// order (1, 2, 3...). The category then keeps this order (manual), and the ones
// not in the list follow them.
router.post('/:id/reorder-entries', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Category not found' });
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  const ids = Array.isArray(req.body?.ids) ? req.body.ids.filter((id) => mongoose.isValidObjectId(id)) : [];
  if (!ids.length) return res.status(400).json({ message: 'No entries' });
  const key = `orders.${category._id}`;
  await Person.bulkWrite(ids.map((id, i) => ({
    updateOne: { filter: { _id: id, categories: category._id }, update: { $set: { [key]: i + 1 } } },
  })));
  const wasSorted = category.sortMode !== 'manual';
  if (wasSorted) { category.sortMode = 'manual'; await category.save(); }
  res.json({ updated: ids.length, switchedToManual: wasSorted });
});

// POST /api/categories/reorder (admin) { ids } — categories with one parent, in this order
router.post('/reorder', requireAdmin, async (req, res) => {
  const ids = Array.isArray(req.body?.ids) ? req.body.ids.filter((id) => mongoose.isValidObjectId(id)) : [];
  if (!ids.length) return res.status(400).json({ message: 'No categories' });
  const parents = new Set((await Category.find({ _id: { $in: ids } }).select('parent').lean()).map((c) => String(c.parent || '')));
  if (parents.size > 1) return res.status(400).json({ message: 'Categories must share a parent' });
  await Category.bulkWrite(ids.map((id, i) => ({ updateOne: { filter: { _id: id }, update: { $set: { order: i + 1 } } } })));
  res.json({ updated: ids.length });
});

// DELETE /api/categories/:id (admin) — only when empty, so nothing is lost by accident
router.delete('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Category not found' });
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  const [childCount, peopleCount] = await Promise.all([
    Category.countDocuments({ parent: category._id }),
    Person.countDocuments({ categories: category._id }),
  ]);
  if (childCount || peopleCount) {
    return res.status(409).json({
      message: `Category is not empty (${childCount} subcategories, ${peopleCount} people). Move or delete them first.`,
    });
  }

  await category.deleteOne();
  await deleteImages([category.image]);
  res.json({ ok: true });
});

module.exports = router;
