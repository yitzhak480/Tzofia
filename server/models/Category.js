// A group of people in the encyclopedia, e.g. "Kings" or "Kings of Judah".
// Categories nest through `parent`: a category with no parent is top level.
const mongoose = require('mongoose');
const { localized, imageSchema, slugField } = require('./shared');

const categorySchema = new mongoose.Schema(
  {
    // "person" is reserved because /encyclopedia/person/... is a person's page.
    slug: { ...slugField, validate: { validator: (v) => v !== 'person', message: 'The URL name "person" is reserved' } },
    name: { type: localized(true), required: true },
    description: { type: localized(), default: () => ({}) },
    image: { type: imageSchema, default: null },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null, index: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
