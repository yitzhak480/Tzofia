const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');
const { pick } = require('../lib/pick');
const { ancestorChain, removedImages } = require('../lib/tree');
const { deleteImages } = require('../lib/cloudinary');
const { toSlug, uniqueSlug } = require('../lib/slug');
const { resolveRelations } = require('../lib/relations');
const { resolveOffices } = require('../lib/succession');

const router = express.Router();
const FIELDS = [
  'slug', 'kind', 'categories', 'name', 'gender', 'titles', 'roles', 'life', 'offices', 'period', 'summary', 'content',
  'mainImage', 'relations', 'sources', 'sourcesEn', 'treeSpots', 'order', 'orders', 'published', 'cardColor',
];
const SORT = { order: 1, createdAt: 1 };
// What a person's card needs (no full article).
const CARD_FIELDS = 'slug kind name period summary autoSummary mainImage order categories life offices treeSpots published cardColor orders';

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const imagesOf = (p) => [p.mainImage].filter(Boolean);
const badId = (res, what = 'Person') => res.status(404).json({ message: `${what} not found` });

// Checks the categories list; returns an error message or null.
const checkCategories = async (ids) => {
  if (!Array.isArray(ids) || ids.length === 0) return 'Please choose at least one category';
  if (!ids.every((id) => mongoose.isValidObjectId(id))) return 'Please choose a valid category';
  const found = await Category.countDocuments({ _id: { $in: ids } });
  return found === new Set(ids.map(String)).size ? null : 'One of the chosen categories no longer exists';
};

// Relations: drop links to ids that aren't valid.
const cleanRelations = (relations) =>
  Array.isArray(relations)
    ? relations.map((r) => ({ ...r, person: r.person && mongoose.isValidObjectId(r.person) ? r.person : null }))
    : relations;

// Offices: keep only valid links, drop empty rows.
const cleanLinks = (list) =>
  (Array.isArray(list) ? list : [])
    .map((l) => ({ person: l.person && mongoose.isValidObjectId(l.person) ? l.person : null, name: l.name || {} }))
    .filter((l) => l.person || (l.name.he && String(l.name.he).trim()));
const cleanOffices = (offices) =>
  Array.isArray(offices) ? offices.map((o) => ({ ...o, before: cleanLinks(o.before), after: cleanLinks(o.after) })) : offices;

// GET /api/people?q=david&category=<id> -> published people (cards, no article)
router.get('/', async (req, res) => {
  const filter = { published: true };
  if (req.query.category && mongoose.isValidObjectId(req.query.category)) {
    filter.categories = req.query.category;
  }
  if (req.query.q) {
    const re = new RegExp(escapeRegex(String(req.query.q).trim()), 'i');
    filter.$or = [{ 'name.he': re }, { 'name.en': re }];
  }
  const people = await Person.find(filter).select(CARD_FIELDS).sort(SORT).limit(100).lean();
  res.json(people);
});

// GET /api/people/admin/all (admin) -> everyone, including unpublished
router.get('/admin/all', requireAdmin, async (req, res) => {
  const people = await Person.find().select(CARD_FIELDS).sort(SORT).lean();
  res.json(people);
});

// GET /api/people/admin/:id (admin) -> full person for the edit form
router.get('/admin/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return badId(res);
  const person = await Person.findById(req.params.id).lean();
  if (!person) return badId(res);
  res.json(person);
});

// GET /api/people/:slug -> full person page, ready to display
router.get('/:slug', async (req, res) => {
  const person = await Person.findOne({ slug: req.params.slug.toLowerCase(), published: true }).lean();
  if (!person) return badId(res);

  const [categoryDocs, ancestors, relations, offices] = await Promise.all([
    Category.find({ _id: { $in: person.categories } }).select('slug name').lean(),
    ancestorChain(person.categories[0]),
    resolveRelations(person),
    resolveOffices(person),
  ]);
  // Keep the admin's order of categories.
  const byId = new Map(categoryDocs.map((c) => [String(c._id), c]));
  const categories = person.categories.map((id) => byId.get(String(id))).filter(Boolean);

  res.json({ person: { ...person, relations, offices }, categories, ancestors });
});

// POST /api/people (admin)
router.post('/', requireAdmin, async (req, res) => {
  const data = pick(req.body, FIELDS);
  const problem = await checkCategories(data.categories);
  if (problem) return res.status(400).json({ message: problem });

  data.relations = cleanRelations(data.relations);
  data.offices = cleanOffices(data.offices);
  data.slug = data.slug
    ? String(data.slug).toLowerCase().trim()
    : await uniqueSlug(Person, toSlug(data.name?.en) || toSlug(data.name?.he));
  if (data.order === undefined) {
    const last = await Person.findOne({ categories: data.categories[0] }).sort({ order: -1 }).select('order').lean();
    data.order = (last?.order || 0) + 1;
  }

  const person = await Person.create(data);
  res.status(201).json(person);
});

// PUT /api/people/:id (admin)
router.put('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return badId(res);
  const person = await Person.findById(req.params.id);
  if (!person) return badId(res);

  const data = pick(req.body, FIELDS);
  if ('categories' in data) {
    const problem = await checkCategories(data.categories);
    if (problem) return res.status(400).json({ message: problem });
  }
  if ('relations' in data) data.relations = cleanRelations(data.relations);
  if ('offices' in data) data.offices = cleanOffices(data.offices);
  if ('slug' in data && !data.slug) {
    data.slug = await uniqueSlug(Person, toSlug(data.name?.en || person.name.en) || toSlug(data.name?.he || person.name.he), person._id);
  }

  const oldImages = imagesOf(person.toObject());
  person.set(data);
  await person.save();
  await deleteImages(removedImages(oldImages, imagesOf(person.toObject())));
  res.json(person);
});

// DELETE /api/people/:id (admin)
router.delete('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return badId(res);
  const person = await Person.findById(req.params.id);
  if (!person) return badId(res);
  await person.deleteOne();
  await deleteImages(imagesOf(person.toObject()));
  res.json({ ok: true });
});

module.exports = router;
