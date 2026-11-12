// Gives every category a card colour from the full palette, so categories
// next to each other (and a category and its subcategories) differ.
// Run from the server folder:  node scripts/recolor-categories.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');

// A pleasant order that keeps neighbours different.
const PALETTE = ['burgundy', 'blue', 'emerald', 'purple', 'marble', 'brown', 'teal', 'ink', 'olive', 'slate'];

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const all = await Category.find().sort({ order: 1, createdAt: 1 });
  const children = new Map();
  for (const c of all) {
    const key = String(c.parent || 'root');
    if (!children.has(key)) children.set(key, []);
    children.get(key).push(c);
  }

  let next = 0;
  const paint = async (parentKey, parentColor) => {
    for (const c of children.get(parentKey) || []) {
      let color = PALETTE[next % PALETTE.length];
      if (color === parentColor) color = PALETTE[++next % PALETTE.length];
      next += 1;
      c.cardColor = color;
      await c.save();
      console.log(`${c.name.he.padEnd(16)} ${color}`);
      await paint(String(c._id), color);
    }
  };
  await paint('root', null);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
