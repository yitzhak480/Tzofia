// Nesi'im: the old "Nesi'im" category becomes "Nesi'ei HaSanhedrin"; a new
// "Nesi'ei HaShvatim" holds the twelve princes of the tribes and Kalev son of
// Yefuneh. Each tribe page gets a section listing people of that tribe.
// Runs after sons-of-yaakov.js. Safe to run more than once.
//
// Run from the server folder:  node scripts/add-nesiim.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const NESIIM = require('./content/nesiim');
const MEMBERS = require('./content/tribe-members');
const CHECKLIST = require('./content/tree-checklist-biblical');
const { L } = require('./content/helpers');

const spotOf = (name) => {
  if (!name) return [];
  const row = CHECKLIST.find((r) => r[0] === name);
  if (!row) throw new Error(`"${name}" is not in the tree checklist`);
  return [{ tree: 'biblical', x: row[3], y: row[4] }];
};
const html = (sections, lang) => sections.map((s) => `<h2>${lang === 'he' ? s.titleHe : s.titleEn}</h2><p>${lang === 'he' ? s.textHe : s.textEn}</p>`).join('');
const MEMBERS_TITLE = { he: 'מבני השבט', en: 'Of This Tribe' };

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // categories
  const sanhedrin = await Category.findOne({ slug: 'nesiim' });
  if (sanhedrin) {
    sanhedrin.set({ name: L('נשיאי הסנהדרין', 'Nesi’ei HaSanhedrin'), description: L('נשיאי ישראל שעמדו בראש הסנהדרין', 'The Nesi’im of Israel who headed the Sanhedrin') });
    await sanhedrin.save();
  }
  let shvatim = await Category.findOne({ slug: 'nesiei-hashvatim' });
  if (!shvatim) shvatim = new Category({ slug: 'nesiei-hashvatim', cardColor: 't1-shvatim' });
  shvatim.set({
    name: L('נשיאי השבטים', 'Nesi’ei HaShvatim'),
    description: L('שנים עשר נשיאי השבטים במדבר, וכלב בן יפונה', 'The twelve princes of the tribes in the desert, and Kalev son of Yefuneh'),
    parent: null, order: 3.5, sortMode: 'manual',
  });
  await shvatim.save();
  const catId = String(shvatim._id);

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const entries = [...NESIIM, NESIIM.kalev];

  // pages
  for (const e of entries) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: 'person', gender: 'male', categories: [shvatim._id], name: e.name, titles: [],
      roles: [L('נשיא', 'Prince')], life: { from: null, to: null }, summary: e.summary,
      content: { he: html(e.sections, 'he'), en: html(e.sections, 'en') },
      sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
      treeSpots: spotOf(e.spot), cardColor: doc.cardColor || e.color, published: true,
    });
    await doc.save();
    bySlug.set(e.slug, doc);
  }
  for (const [i, e] of entries.entries()) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (!r.slug) return { type: r.type, person: null, name: { he: r.he, en: r.en } };
      const other = bySlug.get(r.slug);
      if (!other) throw new Error(`${e.slug}: no page "${r.slug}"`);
      return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
    });
    doc.set(`orders.${catId}`, i + 1);
    await doc.save();
  }

  // "Of this tribe" on each tribe page; names with a page become links
  const byName = new Map([...bySlug.values()].filter((p) => p.published !== false).map((p) => [p.name.he, p]));
  const missing = [];
  for (const [slug, list] of Object.entries(MEMBERS)) {
    const doc = bySlug.get(slug);
    if (!doc) throw new Error(`no page "${slug}"`);
    const section = (lang) => {
      const items = list.map(([he, en, noteHe, noteEn, pageName]) => {
        const page = byName.get(pageName || he);
        const label = lang === 'he' ? he : en;
        const note = lang === 'he' ? noteHe : noteEn;
        const name = page ? `<a href="/encyclopedia/person/${page.slug}">${label}</a>` : label;
        return `<li>${name}${note ? ` – ${note}` : ''}</li>`;
      });
      return `<h2>${MEMBERS_TITLE[lang]}</h2><ul>${items.join('')}</ul>`;
    };
    list.forEach(([he, , , , pageName]) => { if (!byName.get(pageName || he)) missing.push(he); });
    const content = { he: doc.content?.he || '', en: doc.content?.en || '' };
    for (const lang of ['he', 'en']) {
      const cut = content[lang].indexOf(`<h2>${MEMBERS_TITLE[lang]}</h2>`);
      content[lang] = (cut >= 0 ? content[lang].slice(0, cut) : content[lang]) + section(lang);
    }
    doc.content = content;
    doc.markModified('content');
    await doc.save();
  }

  console.log(`✓ Nesi'ei HaShvatim: ${entries.length} pages; tribe lists added (no page yet: ${missing.length})`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
