const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');
const { pick } = require('../lib/pick');
const { ancestorChain, removedImages } = require('../lib/tree');
const { deleteImages } = require('../lib/cloudinary');

const router = express.Router();
const FIELDS = [
  'slug', 'category', 'name', 'period', 'summary', 'content',
  'mainImage', 'gallery', 'wikiLink', 'order', 'published',
];
const SORT = { order: 1, createdAt: 1 };
const CARD_FIELDS = 'slug name period summary mainImage order category published';

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const imagesOf = (p) => [p.mainImage, ...(p.gallery || [])].filter(Boolean);

// GET /api/people?q=david&category=<id> -> published people (cards, no article)
router.get('/', async (req, res) => {
  const filter = { published: true };
  if (req.query.category && mongoose.isValidObjectId(req.query.category)) {
    filter.category = req.query.category;
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
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Person not found' });
  const person = await Person.findById(req.params.id).lean();
  if (!person) return res.status(404).json({ message: 'Person not found' });
  res.json(person);
});

// GET /api/people/:slug -> full person page with breadcrumbs
router.get('/:slug', async (req, res) => {
  const person = await Person.findOne({ slug: req.params.slug.toLowerCase(), published: true }).lean();
  if (!person) return res.status(404).json({ message: 'Person not found' });
  const ancestors = await ancestorChain(person.category);
  res.json({ person, ancestors });
});

// POST /api/people (admin)
router.post('/', requireAdmin, async (req, res) => {
  const data = pick(req.body, FIELDS);
  if (!data.category || !mongoose.isValidObjectId(data.category) || !(await Category.exists({ _id: data.category }))) {
    return res.status(400).json({ message: 'Please choose a valid category' });
  }
  const person = await Person.create(data);
  res.status(201).json(person);
});

// PUT /api/people/:id (admin)
router.put('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Person not found' });
  const person = await Person.findById(req.params.id);
  if (!person) return res.status(404).json({ message: 'Person not found' });

  const data = pick(req.body, FIELDS);
  if ('category' in data &&
      (!mongoose.isValidObjectId(data.category) || !(await Category.exists({ _id: data.category })))) {
    return res.status(400).json({ message: 'Please choose a valid category' });
  }

  const oldImages = imagesOf(person.toObject());
  person.set(data);
  await person.save();
  await deleteImages(removedImages(oldImages, imagesOf(person.toObject())));
  res.json(person);
});

// DELETE /api/people/:id (admin)
router.delete('/:id', requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: 'Person not found' });
  const person = await Person.findById(req.params.id);
  if (!person) return res.status(404).json({ message: 'Person not found' });
  await person.deleteOne();
  await deleteImages(imagesOf(person.toObject()));
  res.json({ ok: true });
});

module.exports = router;
