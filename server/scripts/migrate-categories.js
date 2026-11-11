// One-time update for people saved before a person could be in several
// categories: copies the old single `category` into the new `categories` list.
// Safe to run more than once.
//
// Run from the server folder:  node scripts/migrate-categories.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const people = mongoose.connection.db.collection('people');

  const old = await people.find({ category: { $exists: true } }).toArray();
  for (const p of old) {
    const categories = Array.isArray(p.categories) && p.categories.length ? p.categories : [p.category];
    await people.updateOne({ _id: p._id }, { $set: { categories }, $unset: { category: '' } });
  }
  console.log(`Updated ${old.length} people.`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
