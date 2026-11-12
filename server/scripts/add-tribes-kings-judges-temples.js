// Adds the tribes, the kings of Israel (and Shaul and Ish-Boshet), the
// judges, the prophetesses and the Mishkan / Temples, in Hebrew and English.
// The content is in scripts/content/. Safe to run more than once: entries
// are matched by their web address, and pictures uploaded in the admin are kept.
//
// Run from the server folder:  node scripts/add-tribes-kings-judges-temples.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { L, judged } = require('./content/helpers');
const tribes = require('./content/tribes');
const judges = require('./content/judges');
const kingsOfIsrael = require('./content/kings-of-israel');
const { prophetesses, temples } = require('./content/prophetesses-and-temples');

const ENTRIES = [...tribes, ...judges, ...kingsOfIsrael, ...prophetesses, ...temples];

// Display order: judges by their number on the poster, the Mishkan and
// Temples in time order, the tribes by the birth order of their founders,
// the prophetesses in time order (Devorah is 4, from the judges' list).
const ORDER = Object.fromEntries([
  ['otniel-ben-kenaz', 1], ['ehud-ben-gera', 2], ['shamgar-ben-anat', 3], ['devorah-haneviah', 4], ['gideon', 5], ['avimelech', 6],
  ['tola-ben-puah', 7], ['yair-hagiladi', 8], ['yiftach', 9], ['ivtzan-boaz', 10], ['elon-hazevuloni', 11], ['avdon-ben-hillel', 12],
  ['shimshon', 13], ['eli-hakohen', 14], ['shmuel-hanavi', 15],
  ['mishkan-bamidbar', 1], ['mishkan-gilgal', 2], ['mishkan-shilo', 3], ['mishkan-nov', 4], ['mishkan-givon', 5], ['beit-hamikdash-harishon', 6], ['beit-hamikdash-hasheni', 7],
  ['shevet-reuven', 1], ['shevet-shimon', 2], ['shevet-levi', 3], ['shevet-yehuda', 4], ['shevet-dan', 5], ['shevet-naftali', 6], ['shevet-gad', 7],
  ['shevet-asher', 8], ['shevet-yissachar', 9], ['shevet-zevulun', 10], ['shevet-binyamin', 11], ['shevet-efraim', 12], ['shevet-menashe', 13],
  ['sarah-imenu', 1], ['miriam-haneviah', 2], ['chana-haneviah', 5], ['avigayil-haneviah', 6], ['chulda-haneviah', 7], ['esther-hamalka', 8],
]);

const NEW_CATEGORIES = [
  { slug: 'kings-of-israel', parent: 'kings', name: L('מלכי ישראל', 'Kings of Israel'), description: L('מלכי ממלכת ישראל לאחר מות שלמה', 'The kings of the Kingdom of Israel after Shlomo'), color: 'purple' },
  { slug: 'prophetesses', parent: 'prophets', name: L('נביאות', 'Prophetesses'), description: L('שבע הנביאות שקמו לישראל', 'The seven prophetesses of Israel'), color: 'purple' },
];

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // 1. categories
  const catId = {};
  for (const c of await Category.find().lean()) catId[c.slug] = c._id;
  for (const c of NEW_CATEGORIES) {
    if (catId[c.slug]) continue; // already exists (keeps the admin's name, picture and colour)
    const siblings = await Category.countDocuments({ parent: catId[c.parent] });
    const doc = await Category.create({
      slug: c.slug, name: c.name, description: c.description, parent: catId[c.parent], order: siblings + 1, cardColor: c.color,
    });
    catId[c.slug] = doc._id;
    console.log(`+ קטגוריה: ${c.name.he}`);
  }
  const needCats = new Set(ENTRIES.flatMap((e) => e.categories));
  for (const s of needCats) if (!catId[s]) throw new Error(`Missing category "${s}" — run add-categories-and-entries.js first`);

  // 2. entries (without links), keeping existing pictures and order
  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const orderIn = {};
  for (const e of ENTRIES) {
    const main = e.categories[0];
    orderIn[main] = (orderIn[main] || 0) + 1;
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: e.kind || 'person',
      gender: e.gender || 'male',
      categories: e.categories.map((s) => catId[s]),
      name: e.name,
      roles: e.roles || [],
      life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
      offices: e.offices || [],
      period: e.period || { he: '', en: '' },
      summary: e.summary,
      content: e.content,
      sources: e.sources.map((s) => s.he),
      sourcesEn: e.sources.map((s) => s.en),
      treeSpots: e.spots || [],
      published: true,
      order: ORDER[e.slug] ?? (doc.order || orderIn[main]),
    });
    await doc.save();
    bySlug.set(e.slug, doc);
  }

  // 3. links
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (r.slug) {
        const other = bySlug.get(r.slug);
        if (!other) throw new Error(`${e.slug}: no page "${r.slug}" to link to`);
        return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
      }
      return { type: r.type, person: null, name: { he: r.he, en: r.en } };
    });
    await doc.save();
  }
  console.log(`✓ ${ENTRIES.length} entries`);

  // existing entries that join these lists
  for (const slug of ['shmuel-hanavi', 'shevet-yehuda', 'beit-hamikdash-harishon', 'devorah-haneviah']) {
    const doc = bySlug.get(slug);
    if (doc && doc.order !== ORDER[slug]) {
      doc.order = ORDER[slug];
      await doc.save();
    }
  }

  // 4. Devorah: a judge and a prophetess (no longer in the main prophets list)
  const devorah = bySlug.get('devorah-haneviah');
  if (devorah) {
    devorah.categories = [catId.judges, catId.prophetesses];
    if (!devorah.offices.length) devorah.offices = [judged(2636, 2676)];
    await devorah.save();
    console.log('✓ דבורה: שופטים + נביאות');
  }

  // 5. David's wife Avigayil now has a page (his sister Avigayil stays a name)
  const david = bySlug.get('david');
  const avigayil = bySlug.get('avigayil-haneviah');
  if (david && avigayil) {
    let changed = false;
    david.relations = david.relations.map((r) => {
      if (r.type === 'spouse' && !r.person && r.name.he === 'אביגיל') {
        changed = true;
        return { type: 'spouse', person: avigayil._id, name: { he: avigayil.name.he, en: avigayil.name.en } };
      }
      return r;
    });
    if (changed) {
      await david.save();
      console.log('✓ דוד: אביגיל אשתו מקושרת');
    }
  }

  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
