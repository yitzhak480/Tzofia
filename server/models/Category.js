// A group of people in the encyclopedia, e.g. "Kings" or "Kings of Judah".
// Categories nest through `parent`: a category with no parent is top level.
const mongoose = require('mongoose');
const { localized, imageSchema, slugField } = require('./shared');

const categorySchema = new mongoose.Schema(
  {
    slug: slugField,
    name: { type: localized(true), required: true },
    description: { type: localized(), default: () => ({}) },
    image: { type: imageSchema, default: null },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null, index: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
