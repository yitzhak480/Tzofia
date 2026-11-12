// Events: two lists inside "Events" – the first tree and the second tree – and
// the events of the first tree's time line (the boxed ones and the small ones),
// each linked to the people it relates to. Ordered as on the poster.
// Safe to run more than once; pictures uploaded in the admin are kept.
//
// Run from the server folder:  node scripts/add-events.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const EVENTS = require('./content/events-first-tree');
const { L } = require('./content/helpers');

const SUBS = [
  { slug: 'events-first-tree', order: 1, name: L('האילן הראשון', 'The First Tree'), description: L('האירועים בסרגל הזמן של האילן מאדם עד רבי יהודה הנשיא', 'The events on the time line of the tree from Adam to Rabbi Yehudah HaNasi') },
  { slug: 'events-second-tree', order: 2, name: L('האילן השני', 'The Second Tree'), description: L('האירועים בסרגל הזמן של אילן התלמוד', 'The events on the time line of the Talmud tree') },
];

const html = (sections, lang) => sections.map((s) => `<h2>${lang === 'he' ? s.titleHe : s.titleEn}</h2><p>${lang === 'he' ? s.textHe : s.textEn}</p>`).join('');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const parent = await Category.findOne({ slug: 'events' });
  if (!parent) throw new Error('No "events" category');
  const subs = {};
  for (const s of SUBS) {
    const c = (await Category.findOne({ slug: s.slug })) || new Category({ slug: s.slug, cardColor: 'blue' });
    c.set({ name: s.name, description: s.description, parent: parent._id, order: s.order, sortMode: 'manual' });
    await c.save();
    subs[s.slug] = c;
  }
  const first = subs['events-first-tree'];
  const id = String(first._id);

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const sorted = [...EVENTS].sort((a, b) => a.y - b.y);

  for (const [i, e] of sorted.entries()) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    // a page that was already on the tree (e.g. the black box of the destruction) keeps that spot too
    const oldSpots = (doc.treeSpots || []).filter((s) => !(s.tree === 'biblical' && Math.abs(s.x - e.x) < 1 && Math.abs(s.y - e.y) < 1));
    doc.set({
      kind: 'other',
      categories: [first._id],
      name: e.name, titles: [],
      roles: [e.box ? L('אירוע מרכזי', 'Major event') : L('אירוע', 'Event')],
      life: e.year ? { from: e.year[0], to: e.year[1] } : { from: null, to: null },
      summary: e.summary, content: { he: html(e.sections, 'he'), en: html(e.sections, 'en') },
      sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
      treeSpots: [{ tree: 'biblical', x: e.x, y: e.y }, ...oldSpots.map((s) => ({ tree: s.tree, x: s.x, y: s.y }))],
      cardColor: doc.cardColor || (e.box ? 'blue' : 'slate'),
      published: true,
    });
    doc.set(`orders.${id}`, i + 1);
    await doc.save();
    bySlug.set(e.slug, doc);
  }
  let missing = 0;
  for (const e of EVENTS) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (!r.slug) {
        // a name that is now exactly one page's name links to it
        const same = [...bySlug.values()].filter((p) => p.kind !== 'other' && p.name?.he === r.he);
        if (same.length === 1) return { type: r.type, person: same[0]._id, name: { he: same[0].name.he, en: same[0].name.en || '' } };
        return { type: r.type, person: null, name: { he: r.he, en: r.en } };
      }
      const other = bySlug.get(r.slug);
      if (!other) { missing += 1; console.log(`  ${e.slug}: no page "${r.slug}"`); return null; }
      return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
    }).filter(Boolean);
    await doc.save();
  }
  console.log(`✓ Events of the first tree: ${EVENTS.length} (${EVENTS.filter((e) => e.box).length} boxed), ${missing} links skipped`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
