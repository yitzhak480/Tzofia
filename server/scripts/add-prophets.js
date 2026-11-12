// Adds the 48 prophets (Megillah 14a, Rashi's list) to the Prophets category:
// 44 new pages, and Eli, Shmuel, David and Shlomo (who already have pages).
// Positions and card colours follow the Biblical tree poster.
// Safe to run more than once; pictures uploaded in the admin are kept.
//
// Run from the server folder:  node scripts/add-prophets.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { entries: partA } = require('./content/prophets-a');
const partB = require('./content/prophets-b');
const partC = require('./content/prophets-c');
const partD = require('./content/prophets-d');

const ENTRIES = [...partA, ...partB, ...partC, ...partD];

// Rashi's order of the 48 prophets.
const ORDER = [
  'avraham-avinu', 'yitzchak-avinu', 'yaakov-avinu', 'moshe-rabbeinu', 'aharon-hakohen', 'yehoshua-bin-nun',
  'pinchas', 'elkanah', 'eli-hakohen', 'shmuel-hanavi', 'gad-hachozeh', 'natan-hanavi', 'david', 'shlomo',
  'ido-hachozeh', 'michayhu-ben-yimlah', 'ovadyah-hanavi', 'achiyah-hashiloni', 'chanani-haroeh', 'yehu-ben-chanani',
  'oded', 'azaryahu-ben-oded', 'yachaziel-halevi', 'eliezer-ben-dodavahu', 'hoshea-ben-beeri', 'amos-hanavi',
  'michah-hamorashti', 'amotz', 'eliyahu-hanavi', 'elisha-hanavi', 'yonah-ben-amitai', 'yeshayahu-hanavi',
  'yoel-ben-petuel', 'nachum-haelkoshi', 'chavakuk-hanavi', 'tzefanyah-hanavi', 'uriyahu-ben-shemayahu',
  'yirmeyahu-hanavi', 'yechezkel-hanavi', 'shemayah-ish-haelokim', 'baruch-ben-neriyah', 'neriyah-ben-machseyah',
  'seraiah-ben-neriyah', 'machseyah', 'chaggai-hanavi', 'zecharyah-hanavi', 'malachi-hanavi', 'mordechai-hayehudi',
];

// Existing pages that join the list, with the colour of their box on the poster.
const EXISTING = { 'eli-hakohen': 't1-levi', 'shmuel-hanavi': 't1-levi', david: 't1-yehuda', shlomo: 't1-yehuda' };

// Names on other pages that should now link to the new pages.
const ALIASES = { 'מרדכי': 'mordechai-hayehudi', 'יהוא בן חנני הנביא': 'yehu-ben-chanani' };

const linkName = ([he, en]) => ({ person: null, name: { he, en } });

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const cats = Object.fromEntries((await Category.find().lean()).map((c) => [c.slug, c._id]));
  if (!cats.prophets) throw new Error('No "prophets" category');
  // Categories made later (scripts/prophets-subcategories.js, add-kohanim-gedolim.js):
  // when they exist, entries go there instead of the general category.
  const LATER = { prophets: 'prophets-of-israel', 'kohanim-gedolim': 'kohanim-gedolim-mishkan' };
  for (const [from, to] of Object.entries(LATER)) if (cats[to]) cats[from] = cats[to];
  const prophetsId = String(cats.prophets);

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const pos = Object.fromEntries(ORDER.map((s, i) => [s, i + 1]));
  partD.forEach((e, i) => { pos[e.slug] = ORDER.length + i + 1; });
  if (ORDER.length !== 48) throw new Error(`Expected 48 prophets, got ${ORDER.length}`);
  const missingContent = ORDER.filter((s) => !ENTRIES.some((e) => e.slug === s) && !EXISTING[s]);
  if (missingContent.length) throw new Error(`No content for: ${missingContent.join(', ')}`);

  // 1. pages without links
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: 'person',
      gender: 'male',
      categories: e.categories.map((s) => {
        if (!cats[s]) throw new Error(`${e.slug}: no category "${s}"`);
        return cats[s];
      }),
      name: e.name,
      titles: [],
      roles: e.roles || [],
      life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
      offices: (e.offices || []).map((o) => ({
        ...o,
        before: (o.before || []).map((n) => linkName([n.he, n.en])),
        after: (o.after || []).map((n) => linkName([n.he, n.en])),
      })),
      summary: e.summary,
      content: e.content,
      sources: e.sources.map((s) => s.he),
      sourcesEn: e.sources.map((s) => s.en),
      treeSpots: e.spots || [],
      cardColor: e.cardColor || '',
      published: true,
      order: doc.order || pos[e.slug],
    });
    doc.set(`orders.${prophetsId}`, pos[e.slug]);
    await doc.save();
    bySlug.set(e.slug, doc);
  }

  // 2. links
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (r.slug) {
        const other = bySlug.get(r.slug);
        if (!other) throw new Error(`${e.slug}: no page "${r.slug}" to link to`);
        return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' }, uncertain: Boolean(r.uncertain) };
      }
      return { type: r.type, person: null, name: { he: r.he, en: r.en }, uncertain: Boolean(r.uncertain) };
    });
    await doc.save();
  }

  // Moshe -> Yehoshua in the leadership of Israel
  const moshe = bySlug.get('moshe-rabbeinu');
  const yehoshua = bySlug.get('yehoshua-bin-nun');
  moshe.offices[0].after = [{ person: yehoshua._id, name: { he: yehoshua.name.he, en: yehoshua.name.en } }];
  moshe.markModified('offices');
  await moshe.save();

  // 3. the four existing pages join the list
  for (const [slug, color] of Object.entries(EXISTING)) {
    const doc = bySlug.get(slug);
    if (!doc) continue;
    if (!doc.categories.map(String).includes(prophetsId)) doc.categories.push(cats.prophets);
    if (!doc.mainImage?.url && !doc.cardColor) doc.cardColor = color;
    doc.set(`orders.${prophetsId}`, pos[slug]);
    await doc.save();
  }

  // 4. names elsewhere that now have a page
  let linked = 0;
  for (const doc of bySlug.values()) {
    let changed = false;
    for (const r of doc.relations) {
      const target = !r.person && ALIASES[r.name?.he?.trim()] && bySlug.get(ALIASES[r.name.he.trim()]);
      if (target && String(target._id) !== String(doc._id)) {
        r.person = target._id;
        changed = true;
      }
    }
    if (changed) {
      doc.markModified('relations');
      await doc.save();
      linked += 1;
    }
  }

  console.log(`✓ ${ENTRIES.length} new prophets, ${Object.keys(EXISTING).length} existing added, ${linked} pages relinked`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
