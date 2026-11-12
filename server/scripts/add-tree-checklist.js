// Loads the checklist of every name on the Biblical tree poster (admin page
// "רשימת האילן"). Safe to run more than once: hand ticks are kept.
//
// Run from the server folder:  node scripts/add-tree-checklist.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const ChecklistItem = require('../models/ChecklistItem');
const ROWS = require('./content/tree-checklist-biblical');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await ChecklistItem.init(); // build the indexes before writing
  await ChecklistItem.bulkWrite(ROWS.map(([name, group, kind, x, y], i) => ({
    updateOne: {
      filter: { tree: 'biblical', name },
      update: { $set: { group, kind, x, y, order: i + 1 }, $setOnInsert: { done: false } },
      upsert: true,
    },
  })));
  console.log(`✓ ${ROWS.length} names on the Biblical tree checklist`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
