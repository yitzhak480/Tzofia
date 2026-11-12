// Chumash Bereishit: a category with three sub-categories (From Adam to Noach,
// From Noach to Terach, Avraham's Family) and the green group of the Biblical
// tree. Avraham, Sarah, Yitzhak and Yaakov (who already have pages) join
// Avraham's Family, and names on their pages are linked to the new pages.
// Safe to run more than once; pictures uploaded in the admin are kept.
//
// Run from the server folder:  node scripts/add-bereishit.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const ENTRIES = require('./content/bereishit');
const CHECKLIST = require('./content/tree-checklist-biblical');
const { L } = require('./content/helpers');

const COLOR = 't1-bereshit';
const PARENT = { slug: 'chumash-bereishit', name: L('חומש בראשית', 'The Book of Bereishit'), description: L('הדמויות של ספר בראשית, מאדם הראשון ועד יוסף', 'The figures of the Book of Bereishit, from Adam to Yosef') };
const SUBS = [
  { slug: 'adam-to-noach', name: L('מאדם עד נח', 'From Adam to Noach'), description: L('עשרת הדורות מאדם עד נח, ומשפחת קין', 'The ten generations from Adam to Noach, and the family of Kayin') },
  { slug: 'noach-to-terach', name: L('מנח עד תרח', 'From Noach to Terach'), description: L('עשרת הדורות מנח עד תרח, ושבעים האומות', 'The ten generations from Noach to Terach, and the seventy nations') },
  { slug: 'avraham-family', name: L('משפחת אברהם', 'Avraham’s Family'), description: L('אברהם אבינו, משפחתו וביתו', 'Avraham our father, his family and his household') },
];

// Order in each list: by generations, each family together.
const ORDER = {
  'adam-to-noach': ['adam-harishon', 'chava', 'kayin', 'hevel', 'shet', 'enosh', 'kenan', 'mahalalel', 'yered', 'chanoch-ben-yered', 'metushelach', 'lemech-avi-noach', 'noach',
    'chanoch-ben-kayin', 'irad', 'mechuyael', 'metushael', 'lemech-ben-metushael', 'yaval', 'yuval', 'tuval-kayin', 'naama'],
  'noach-to-terach': ['noach', 'shem', 'cham', 'yefet', 'gomer', 'magog', 'madai', 'yavan', 'tuval', 'meshech', 'tiras', 'kush', 'nimrod', 'mitzrayim', 'kasluchim', 'put', 'kenaan',
    'elam', 'ashur', 'arpachshad', 'lud', 'aram', 'shelach', 'ever', 'peleg', 'yoktan', 'reu', 'serug', 'nachor-ben-serug', 'terach', 'amtelai'],
  'avraham-family': ['terach', 'avraham-avinu', 'sarah-imenu', 'haran', 'nachor-ben-terach', 'milka', 'lot', 'bechorat-lot', 'tzeirat-lot', 'moav', 'ben-ami', 'hagar', 'yishmael',
    'ketura', 'midyan', 'eliezer-eved-avraham', 'yitzchak-avinu', 'betuel', 'lavan', 'rivka-imenu', 'esav', 'basmat', 'elifaz', 'amalek', 'yaakov-avinu', 'leah-imenu',
    'rachel-imenu', 'yosef-hatzadik', 'osnat', 'dina'],
};

// Names on existing pages that now have a page of their own.
const RELINK = {
  'avraham-avinu': { 'תרח': 'terach', 'הגר': 'hagar', 'ישמעאל': 'yishmael', 'נחור': 'nachor-ben-terach', 'הרן': 'haran' },
  'sarah-imenu': { 'הרן': 'haran', 'לוט': 'lot', 'אברהם אבינו': 'avraham-avinu' },
  'yitzchak-avinu': { 'רבקה': 'rivka-imenu', 'עשו': 'esav', 'ישמעאל': 'yishmael' },
  'yaakov-avinu': { 'רבקה': 'rivka-imenu', 'עשו': 'esav', 'לאה': 'leah-imenu', 'רחל': 'rachel-imenu', 'יוסף': 'yosef-hatzadik', 'דינה': 'dina' },
  'shevet-efraim': { 'יוסף בן יעקב': 'yosef-hatzadik' },
  'shevet-menashe': { 'יוסף בן יעקב': 'yosef-hatzadik' },
};

const spotOf = (name) => {
  const row = CHECKLIST.find((r) => r[0] === name);
  if (!row) throw new Error(`"${name}" is not in the tree checklist`);
  return [{ tree: 'biblical', x: row[3], y: row[4] }];
};

const saveCategory = async (def, extra) => {
  const c = (await Category.findOne({ slug: def.slug })) || new Category({ slug: def.slug, cardColor: COLOR });
  c.set({ name: def.name, description: def.description, ...extra });
  await c.save();
  return c;
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // categories: Bereishit first among the top-level ones
  const parent = await saveCategory(PARENT, { parent: null, order: 0, sortMode: 'chrono' });
  const cats = {};
  for (const [i, s] of SUBS.entries()) cats[s.slug] = await saveCategory(s, { parent: parent._id, order: i + 1, sortMode: 'manual' });

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));

  // 1. pages
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: 'person', gender: e.gender, categories: e.cats.map((s) => cats[s]._id),
      name: e.name, titles: [], roles: [],
      life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
      summary: e.summary, content: { he: e.sections.map((s) => `<h2>${s.titleHe}</h2><p>${s.textHe}</p>`).join(''), en: e.sections.map((s) => `<h2>${s.titleEn}</h2><p>${s.textEn}</p>`).join('') },
      sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
      treeSpots: spotOf(e.spot), cardColor: doc.cardColor || COLOR, published: true,
    });
    await doc.save();
    bySlug.set(e.slug, doc);
  }

  // 2. links
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (!r.slug) return { type: r.type, person: null, name: { he: r.he, en: r.en } };
      const other = bySlug.get(r.slug);
      if (!other) throw new Error(`${e.slug}: no page "${r.slug}"`);
      return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
    });
    await doc.save();
  }

  // 3. the four existing pages join Avraham's Family
  for (const slug of ['avraham-avinu', 'sarah-imenu', 'yitzchak-avinu', 'yaakov-avinu']) {
    const doc = bySlug.get(slug);
    if (doc && !doc.categories.map(String).includes(String(cats['avraham-family']._id))) {
      doc.categories.push(cats['avraham-family']._id);
      await doc.save();
    }
  }

  // 4. names on existing pages that now have a page
  for (const [slug, names] of Object.entries(RELINK)) {
    const doc = bySlug.get(slug);
    if (!doc) continue;
    for (const r of doc.relations) {
      const target = names[r.name?.he?.trim()];
      if (target && bySlug.get(target)) r.person = bySlug.get(target)._id;
    }
    doc.markModified('relations');
    await doc.save();
  }

  // 5. order in each list
  for (const [catSlug, slugs] of Object.entries(ORDER)) {
    const id = String(cats[catSlug]._id);
    for (const [i, slug] of slugs.entries()) {
      const doc = bySlug.get(slug);
      if (!doc) continue;
      doc.set(`orders.${id}`, i + 1);
      await doc.save();
    }
  }

  console.log(`✓ Chumash Bereishit: 3 lists, ${ENTRIES.length} pages`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
