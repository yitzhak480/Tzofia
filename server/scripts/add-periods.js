// The period categories of the Biblical tree (Egypt and the Exodus, the Judges,
// David and Shlomo, the kingdoms, the exile and the return), with "The Levites"
// and "Righteous Converts". Each batch adds its pages; card colours follow the
// colour group of the name on the tree.
// Runs after add-nesiim.js. Safe to run more than once.
//
// Run from the server folder:  node scripts/add-periods.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const CHECKLIST = require('./content/tree-checklist-biblical');
const { L } = require('./content/helpers');

const CATEGORIES = {
  'egypt-exodus': { order: 0.1, color: 't1-levi', name: L('מצרים ויציאת מצרים', 'Egypt and the Exodus'), description: L('מבני בני יעקב ועד ימי יהושע', 'From the children of Yaakov’s sons to the days of Yehoshua') },
  levites: { order: 6.5, color: 't1-levi', sortMode: 'chrono', name: L('בני לוי', 'The Levites'), description: L('משפחות שבט לוי: לויים, משוררים ובני משפחות הכהנים', 'The families of the tribe of Levi: Levites, singers and the families of the Kohanim') },
  'gerei-tzedek': { order: 6.6, color: 't1-gerim', sortMode: 'chrono', name: L('גרי צדק', 'Righteous Converts'), description: L('מי שבאו מן העמים ונכנסו תחת כנפי השכינה', 'Those who came from the nations and entered under the wings of the Divine Presence') },
};

// Each batch: its pages, the existing pages that join its list, the order of
// the list, and names on existing pages that now have a page of their own.
const BATCHES = [
  {
    category: 'egypt-exodus',
    entries: require('./content/egypt'),
    order: ['osnat', 'shevet-menashe', 'shevet-efraim', 'tamar-eshet-er', 'bat-shua', 'er', 'peretz', 'zerach', 'gershon-ben-levi', 'kehat', 'merari', 'palu', 'serach-bat-asher',
      'chetzron', 'eshet-chetzron-vekenaz', 'kenaz', 'ram', 'amram', 'yocheved', 'yitzhar', 'chevron-ben-kehat', 'uziel-ben-kehat', 'eliav-ben-palu', 'aminadav', 'ammihud',
      'miriam-haneviah', 'aharon-hakohen', 'moshe-rabbeinu', 'yitro', 'tziporah', 'gershom', 'eliezer-ben-moshe', 'elisheva-bat-aminadav', 'nachshon-ben-aminadav',
      'netanel-ben-tzuar', 'eliav-ben-chelon', 'elitzur-ben-shedeur', 'shelumiel-ben-tzurishaddai', 'elyasaf-ben-deuel', 'elishama-ben-ammihud', 'gamliel-ben-pedahtzur',
      'avidan-ben-gideoni', 'achiezer-ben-ammishaddai', 'pagiel-ben-ochran', 'achira-ben-einan', 'korach', 'asir', 'elkana-ben-korach', 'aviasaf', 'datan', 'aviram',
      'nadav-ben-aharon', 'avihu', 'elazar-ben-aharon', 'itamar', 'pinchas', 'kalev-ben-yefuneh', 'otniel-ben-kenaz', 'chur', 'uri', 'betzalel', 'nun', 'yehoshua-bin-nun', 'rachav', 'salmon'],
    relink: {
      'moshe-rabbeinu': { 'עמרם': 'amram', 'יוכבד': 'yocheved', 'ציפורה': 'tziporah', 'גרשם': 'gershom', 'אליעזר': 'eliezer-ben-moshe' },
      'aharon-hakohen': { 'עמרם': 'amram', 'יוכבד': 'yocheved', 'אלישבע בת עמינדב': 'elisheva-bat-aminadav', 'נדב': 'nadav-ben-aharon', 'אביהוא': 'avihu', 'איתמר': 'itamar' },
      'miriam-haneviah': { 'עמרם': 'amram', 'יוכבד': 'yocheved', 'חור': 'chur' },
      'yehoshua-bin-nun': { 'נון': 'nun', 'רחב': 'rachav' },
      'kalev-ben-yefuneh': { 'חצרון': 'chetzron', 'אשת חצרון וקנז': 'eshet-chetzron-vekenaz', 'חור': 'chur' },
      'otniel-ben-kenaz': { 'קנז': 'kenaz' },
      'nachshon-ben-aminadav': { 'עמינדב': 'aminadav', 'אלישבע בת עמינדב': 'elisheva-bat-aminadav', 'שלמון': 'salmon' },
      'elishama-ben-ammihud': { 'עמיהוד': 'ammihud', 'נון': 'nun' },
      'ivtzan-boaz': { 'שלמון': 'salmon' },
      'shevet-levi': { 'גרשון': 'gershon-ben-levi', 'קהת': 'kehat', 'מררי': 'merari' },
      'shevet-yehuda': { 'בת-שוע': 'bat-shua', 'ער': 'er', 'פרץ': 'peretz', 'זרח': 'zerach' },
      'shevet-asher': { 'שרח בת אשר': 'serach-bat-asher' },
      'elazar-ben-aharon': { 'אלישבע בת עמינדב': 'elisheva-bat-aminadav' },
      'betzalel': {},
    },
  },
];

const GROUP = Object.fromEntries(CHECKLIST.map((r) => [r[0], r[1]]));
const spotOf = (name) => {
  const row = CHECKLIST.find((r) => r[0] === name);
  if (!row) throw new Error(`"${name}" is not in the tree checklist`);
  return [{ tree: 'biblical', x: row[3], y: row[4] }];
};
const html = (sections, lang) => sections.map((s) => `<h2>${lang === 'he' ? s.titleHe : s.titleEn}</h2><p>${lang === 'he' ? s.textHe : s.textEn}</p>`).join('');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const cats = {};
  for (const [slug, c] of Object.entries(CATEGORIES)) {
    const doc = (await Category.findOne({ slug })) || new Category({ slug, cardColor: c.color });
    doc.set({ name: c.name, description: c.description, parent: null, order: c.order, sortMode: c.sortMode || 'manual' });
    await doc.save();
    cats[slug] = doc;
  }

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const link = (r, owner) => {
    if (!r.slug) return { type: r.type, person: null, name: { he: r.he, en: r.en } };
    const other = bySlug.get(r.slug);
    if (!other) throw new Error(`${owner}: no page "${r.slug}"`);
    return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
  };

  let count = 0;
  for (const batch of BATCHES) {
    const period = cats[batch.category];
    // pages
    for (const e of batch.entries) {
      const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
      doc.set({
        kind: 'person', gender: e.gender, categories: [period._id, ...e.cats.map((s) => cats[s]._id)],
        name: e.name, titles: [], roles: e.roles || [], life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
        summary: e.summary, content: { he: html(e.sections, 'he'), en: html(e.sections, 'en') },
        sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
        treeSpots: spotOf(e.spot), cardColor: doc.cardColor || GROUP[e.spot] || 't1-shvatim', published: true,
      });
      await doc.save();
      bySlug.set(e.slug, doc);
      count += 1;
    }
    for (const e of batch.entries) {
      const doc = bySlug.get(e.slug);
      doc.relations = e.rel.map((r) => link(r, e.slug));
      await doc.save();
    }
    // existing pages join the list; the list's order
    const id = String(period._id);
    for (const [i, slug] of batch.order.entries()) {
      const doc = bySlug.get(slug);
      if (!doc) throw new Error(`order: no page "${slug}"`);
      if (!doc.categories.map(String).includes(id)) doc.categories.push(period._id);
      doc.set(`orders.${id}`, i + 1);
      await doc.save();
    }
    // names on existing pages
    for (const [slug, names] of Object.entries(batch.relink)) {
      const doc = bySlug.get(slug);
      if (!doc) continue;
      for (const r of doc.relations) {
        const target = !r.person && names[r.name?.he?.trim()];
        if (target && bySlug.get(target)) r.person = bySlug.get(target)._id;
      }
      doc.markModified('relations');
      await doc.save();
    }
  }

  console.log(`✓ Periods: ${count} pages in ${BATCHES.length} batch(es)`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
