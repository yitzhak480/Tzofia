const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');
const { pick } = require('../lib/pick');
const { ancestorChain, wouldCreateLoop, removedImages } = require('../lib/tree');
const { deleteImages } = require('../lib/cloudinary');

const router = express.Router();
const FIELDS = ['slug', 'name', 'description', 'image', 'parent', 'order', 'cardColor', 'icon', 'colorEntries'];
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
  const people = unsorted.sort((a, b) => pos(a) - pos(b) || String(a.createdAt).localeCompare(String(b.createdAt)));

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
