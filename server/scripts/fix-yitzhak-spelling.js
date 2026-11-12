// English spelling of the name יצחק on the site: "Yitzhak" (not "Yitzchak").
// Changes only English text (fields named "en", and sourcesEn). Safe to run
// more than once.
//
// Run from the server folder:  node scripts/fix-yitzhak-spelling.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');

const fix = (s) => s.replace(/Yitzchak/g, 'Yitzhak');

// Walks a document; returns true if anything changed.
const walk = (node, inEnglish = false) => {
  let changed = false;
  if (Array.isArray(node)) {
    node.forEach((v, i) => {
      if (typeof v === 'string' && inEnglish && fix(v) !== v) { node[i] = fix(v); changed = true; }
      else if (v && typeof v === 'object' && walk(v, inEnglish)) changed = true;
    });
  } else if (node && typeof node === 'object' && !(node instanceof mongoose.Types.ObjectId) && !(node instanceof Date)) {
    for (const [k, v] of Object.entries(node)) {
      const english = inEnglish || k === 'en' || k === 'sourcesEn';
      if (typeof v === 'string' && english && fix(v) !== v) { node[k] = fix(v); changed = true; }
      else if (v && typeof v === 'object' && walk(v, english)) changed = true;
    }
  }
  return changed;
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection.db;
  for (const name of ['people', 'categories']) {
    let n = 0;
    for (const doc of await db.collection(name).find().toArray()) {
      if (walk(doc)) {
        await db.collection(name).replaceOne({ _id: doc._id }, doc);
        n += 1;
      }
    }
    console.log(`✓ ${name}: ${n} updated`);
  }
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
