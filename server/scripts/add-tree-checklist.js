// Loads the checklist of every name on both tree posters (admin page
// "רשימת האילן"). Safe to run more than once: hand ticks are kept.
//
// Run from the server folder:  node scripts/add-tree-checklist.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const ChecklistItem = require('../models/ChecklistItem');

const TREES = [
  { tree: 'biblical', title: 'the Biblical tree', rows: require('./content/tree-checklist-biblical') },
  { tree: 'gmara', title: 'the Talmud tree', rows: require('./content/tree-checklist-talmud') },
];

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await ChecklistItem.init(); // build the indexes before writing
  for (const { tree, title, rows } of TREES) {
    await ChecklistItem.bulkWrite(rows.map(([name, group, kind, x, y, sub = '', note = ''], i) => ({
      updateOne: {
        filter: { tree, name },
        update: { $set: { group, kind, x, y, sub, note, order: i + 1 }, $setOnInsert: { done: false } },
        upsert: true,
      },
    })));
    console.log(`✓ ${rows.length} names on ${title} checklist`);
  }
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
