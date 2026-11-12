// One name on a tree poster, for the admin's checklist of what the
// encyclopedia already covers. An item counts as done when an entry has a
// tree spot on it, or when the admin ticks it by hand.
const mongoose = require('mongoose');
const { COLOR_KEYS } = require('./shared');

const checklistItemSchema = new mongoose.Schema(
  {
    tree: { type: String, required: true, index: true }, // 'biblical' | 'gmara'
    name: { type: String, required: true, trim: true },
    group: { type: String, enum: COLOR_KEYS, required: true }, // the poster colour
    kind: { type: String, enum: ['box', 'name'], required: true }, // in a box, or a plain name
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    order: { type: Number, default: 0 },
    done: { type: Boolean, default: false }, // ticked by hand
  },
  { timestamps: true }
);

checklistItemSchema.index({ tree: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('ChecklistItem', checklistItemSchema);
