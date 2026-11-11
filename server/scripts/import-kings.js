// One-time import: copies the Kings of Judah from src/data.json into the
// database, under Kings > Kings of Judah. Safe to run more than once: it
// updates entries with the same slug instead of creating duplicates, and it
// never overwrites an article (content) that was already written in the admin.
//
// Run from the server folder:  node scripts/import-kings.js
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');

const kings = require(path.join(__dirname, '..', '..', 'src', 'data.json'));

const upsertCategory = (slug, fields) =>
  Category.findOneAndUpdate({ slug }, { $set: fields, $setOnInsert: { slug } }, {
    upsert: true, returnDocument: 'after', runValidators: true,
  });

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const kingsCat = await upsertCategory('kings', {
    name: { he: 'מלכים', en: 'Kings' },
    parent: null,
    order: 1,
  });
  const judah = await upsertCategory('kings-of-judah', {
    name: { he: 'מלכי בית דוד', en: 'Kings of the House of David' },
    parent: kingsCat._id,
    order: 1,
  });

  for (const [index, king] of kings.entries()) {
    // "/images/david.jpg" -> "david"
    const slug = path.basename(king.image, path.extname(king.image)).toLowerCase();
    await Person.findOneAndUpdate(
      { slug },
      {
        $set: {
          name: { he: king.he.title, en: king.en.title },
          period: { he: king.he.reign_display, en: king.en.reign_display },
          summary: { he: king.he.description, en: king.en.description },
          mainImage: { url: king.image, publicId: '' },
          order: index + 1,
        },
        $setOnInsert: { slug, categories: [judah._id], content: { he: '', en: '' }, published: true },
      },
      { upsert: true, returnDocument: 'after', runValidators: true }
    );
    console.log(`✓ ${king.en.title} -> /encyclopedia/person/${slug}`);
  }

  console.log(`Done: ${kings.length} kings imported into "Kings of Judah".`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
