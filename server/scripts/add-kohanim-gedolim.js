// Adds the High Priests of the Mishkan and the First Temple (the red list on
// the Biblical tree poster): 25 new pages, and Aharon, Pinchas, Eli and Tzadok
// (who already have pages) are linked into the chain of succession.
// A new sub-category "המשכן" holds the High Priests before the Temple, in the
// order of succession.
// Safe to run more than once; pictures uploaded in the admin are kept.
//
// Run from the server folder:  node scripts/add-kohanim-gedolim.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const ENTRIES = require('./content/kohanim-gedolim');

const MISHKAN = ['aharon-hakohen', 'elazar-ben-aharon', 'pinchas', 'avishua-ben-pinchas', 'bukki-ben-avishua', 'uzzi-ben-bukki', 'eli-hakohen', 'achituv-ben-pinchas', 'achimelech-ben-achituv', 'evyatar-ben-achimelech'];

// existing pages: their place in the chain, and names on them that now have a page
const EXISTING = {
  'aharon-hakohen': { after: ['elazar-ben-aharon'], names: { 'אלעזר': 'elazar-ben-aharon' } },
  pinchas: { before: ['elazar-ben-aharon'], after: ['avishua-ben-pinchas'], names: { 'אלעזר': 'elazar-ben-aharon' } },
  'eli-hakohen': { before: ['uzzi-ben-bukki'], after: ['achituv-ben-pinchas'] },
  // Tzadok's father "אחיטוב" is Achituv son of Amaryah, NOT Achituv son of Pinchas: left as a name
  'tzadok-hakohen': { before: ['evyatar-ben-achimelech'], after: ['achimaatz-ben-tzadok'], names: { 'אחימעץ': 'achimaatz-ben-tzadok' } },
  'mishkan-nov': { names: { 'אחימלך הכהן': 'achimelech-ben-achituv' } },
  // Radak (in his father's name) and Malbim on Yirmeyahu 1:1; joined on the poster
  'yirmeyahu-hanavi': { names: { 'חלקיהו': 'chilkiyahu-hakohen', 'חלקיהו הכהן הגדול': 'chilkiyahu-hakohen' } },
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // the sub-category for the Mishkan
  const parent = await Category.findOne({ slug: 'kohanim-gedolim' });
  if (!parent) throw new Error('No "kohanim-gedolim" category');
  const first = await Category.findOne({ slug: 'kohanim-gedolim-first-temple' });
  let mishkan = await Category.findOne({ slug: 'kohanim-gedolim-mishkan' });
  if (!mishkan) {
    mishkan = new Category({
      slug: 'kohanim-gedolim-mishkan',
      name: { he: 'המשכן', en: 'The Mishkan' },
      description: { he: 'הכהנים הגדולים בימי המשכן, מאהרן ועד אביתר', en: 'The High Priests in the days of the Mishkan, from Aharon to Evyatar' },
      parent: parent._id,
      order: 0,
      cardColor: first?.cardColor || '',
      sortMode: 'manual',
    });
    await mishkan.save();
  }
  const cats = { 'kohanim-gedolim-mishkan': mishkan._id, 'kohanim-gedolim-first-temple': first._id };

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const link = (s) => {
    if (typeof s !== 'string') return { person: null, name: s };
    const p = bySlug.get(s);
    if (!p) throw new Error(`no page "${s}"`);
    return { person: p._id, name: { he: p.name.he, en: p.name.en || '' } };
  };

  // 1. pages
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: 'person', gender: 'male', categories: [cats[e.cat || 'kohanim-gedolim-first-temple']],
      name: e.name, titles: [], roles: e.roles, life: { from: null, to: null },
      summary: e.summary, content: e.content,
      sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
      treeSpots: e.spots, cardColor: doc.cardColor || e.cardColor, published: true,
    });
    await doc.save();
    bySlug.set(e.slug, doc);
  }

  // 2. links and succession
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => (r.slug
      ? { type: r.type, ...link(r.slug) }
      : { type: r.type, person: null, name: { he: r.he, en: r.en } }));
    doc.offices = [{ ...e.office, before: e.office.before.map(link), after: e.office.after.map(link) }];
    await doc.save();
  }

  // 3. existing pages
  for (const [slug, x] of Object.entries(EXISTING)) {
    const doc = bySlug.get(slug);
    if (!doc) throw new Error(`no page "${slug}"`);
    const kehuna = doc.offices.find((o) => o.label?.he === 'כהונה גדולה');
    if (kehuna && x.before) kehuna.before = x.before.map(link);
    if (kehuna && x.after) kehuna.after = x.after.map(link);
    const names = x.names || {};
    for (const r of doc.relations) if (!r.person && names[r.name?.he]) r.person = bySlug.get(names[r.name.he])._id;
    doc.markModified('offices');
    doc.markModified('relations');
    await doc.save();
  }

  // 4. the Mishkan list: Aharon, Pinchas and Eli move into it, in order of succession
  const oldParentId = String(parent._id);
  for (const [i, slug] of MISHKAN.entries()) {
    const doc = bySlug.get(slug);
    const keep = doc.categories.filter((c) => String(c) !== oldParentId && String(c) !== String(mishkan._id));
    doc.categories = slug === 'aharon-hakohen' || slug === 'pinchas' || slug === 'eli-hakohen'
      ? [...keep, mishkan._id] : [mishkan._id];
    doc.set(`orders.${mishkan._id}`, i + 1);
    await doc.save();
  }

  console.log(`✓ ${ENTRIES.length} High Priests added, ${Object.keys(EXISTING).length} existing pages linked`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
