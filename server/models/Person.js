// A person in the encyclopedia, e.g. King David.
const mongoose = require('mongoose');
const { localized, imageSchema, slugField } = require('./shared');

const personSchema = new mongoose.Schema(
  {
    slug: slugField,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true, index: true },
    name: { type: localized(true), required: true },
    // Short line under the name, e.g. "reigned 40 years" or "c. 1000 BCE".
    period: { type: localized(), default: () => ({}) },
    // One or two sentences, shown on the person's card in the category list.
    summary: { type: localized(), default: () => ({}) },
    // The full article, written in the admin's rich text editor (HTML).
    content: { type: localized(), default: () => ({}) },
    mainImage: { type: imageSchema, default: null },
    gallery: { type: [imageSchema], default: [] },
    wikiLink: { type: localized(), default: () => ({}) },
    order: { type: Number, default: 0 },
    // Unpublished people are visible only in the admin.
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Person', personSchema);
