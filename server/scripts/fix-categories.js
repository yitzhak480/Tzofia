// Makes sure every entry is in all its relevant categories, not just one:
// the tribe of Levi, the Kohanim, the period lists, the judges and so on.
// Only adds; never removes a category. Runs last (after add-periods.js).
// Safe to run more than once.
//
// Run from the server folder:  node scripts/fix-categories.js           (shows what's missing)
//                              node scripts/fix-categories.js --apply   (adds it)
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');

const HIGH_PRIESTS_JUDAH = ['achimaatz-ben-tzadok', 'azaryah-ben-achimaatz', 'yehoram-hakohen', 'yehoachaz-hakohen', 'yehoyariv-hakohen', 'yehoshafat-hakohen',
  'yehoyada-hakohen', 'pedayah-hakohen', 'tzidkiyahu-hakohen', 'yoel-hakohen', 'yotam-hakohen', 'uriyah-hakohen', 'neriyah-hakohen', 'hoshayah-hakohen',
  'shalum-ben-tzadok', 'chilkiyahu-hakohen', 'azaryah-ben-chilkiyahu', 'seraya-ben-azaryah'];
const HIGH_PRIESTS_EARLY = ['aharon-hakohen', 'elazar-ben-aharon', 'pinchas', 'avishua-ben-pinchas', 'bukki-ben-avishua', 'uzzi-ben-bukki', 'eli-hakohen',
  'achituv-ben-pinchas', 'achimelech-ben-achituv', 'evyatar-ben-achimelech', 'tzadok-hakohen'];
const HIGH_PRIESTS_SECOND = ['yehoshua-ben-yehotzadak', 'yoyakim', 'elyashiv', 'shimon-hatzadik'];

// Kohanim who were not High Priests (the High Priests have their own lists inside "Kohanim")
const KOHANIM = ['nadav-ben-aharon', 'avihu', 'itamar', 'chofni', 'pinchas-ben-eli', 'zerachya', 'merayot', 'amarya', 'achituv-ben-amarya',
  'yochanan-ben-azarya', 'azarya-ben-yochanan', 'amarya-ben-azarya', 'achituv-ben-amarya-2', 'tzadok-ben-achituv-2', 'yehoyada-avi-benayahu', 'benayahu',
  'zecharyah-ben-yehoyada', 'yirmeyahu-hanavi', 'shalum-hanavi', 'chanamel', 'buzi', 'yechezkel-hanavi', 'yehotzadak', 'ezra-hasofer',
  'natan-hanavi', // a Kohen, branch unknown (the tree joins him to Pinchas with a "?")
  'shamgar-ben-anat', 'anat']; // "it is known that Shamgar son of Anat was a Kohen" – note on the tree

// The tribe of Levi: everyone, prophets and Kohanim included
const LEVI = ['shevet-levi', 'moshe-rabbeinu', 'aharon-hakohen', 'miriam-haneviah', 'shmuel-hanavi', 'elkanah', 'yachaziel-halevi', 'achiyah-hashiloni',
  ...HIGH_PRIESTS_EARLY, ...HIGH_PRIESTS_JUDAH, ...HIGH_PRIESTS_SECOND, ...KOHANIM];

const ADD = {
  levites: LEVI,
  kohanim: KOHANIM,
  judges: ['barak'], // his box on the tree says "judge"
  'kingdom-of-judah': HIGH_PRIESTS_JUDAH, // not kings, not prophets – people of the Kingdom of Judah
  'david-shlomo': ['ido-hachozeh'], // prophesied in Shlomo's days (II Chronicles 9:29)
  'galut-bavel': ['yehoyachin'], // exiled to Bavel; his sons were the first Heads of the Exile
};

const main = async () => {
  const apply = process.argv.includes('--apply');
  await mongoose.connect(process.env.MONGO_URI);
  const cats = Object.fromEntries((await Category.find()).map((c) => [c.slug, c]));
  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  let n = 0;
  for (const [catSlug, slugs] of Object.entries(ADD)) {
    const cat = cats[catSlug];
    if (!cat) throw new Error(`no category "${catSlug}"`);
    for (const slug of new Set(slugs)) {
      const doc = bySlug.get(slug);
      if (!doc) throw new Error(`no page "${slug}"`);
      if (doc.categories.map(String).includes(String(cat._id))) continue;
      console.log(`+ ${doc.name.he}  →  ${cat.name.he}`);
      n += 1;
      if (apply) {
        doc.categories.push(cat._id);
        await doc.save();
      }
    }
  }
  console.log(`${apply ? '✓ added' : 'missing'}: ${n}`);

  // Lists in manual order that just got new entries: order them as on the
  // tree, top to bottom (and right to left on the same row).
  if (apply) {
    for (const catSlug of ['kingdom-of-judah', 'david-shlomo', 'galut-bavel']) {
      const id = String(cats[catSlug]._id);
      const members = [...bySlug.values()].filter((p) => p.categories.map(String).includes(id));
      const spot = (p) => (p.treeSpots || []).find((s) => s.tree === 'biblical') || { x: 0, y: 999 };
      members.sort((a, b) => Math.round(spot(a).y / 0.4) - Math.round(spot(b).y / 0.4) || spot(b).x - spot(a).x);
      for (const [i, p] of members.entries()) {
        p.set(`orders.${id}`, i + 1);
        await p.save();
      }
    }
    console.log('✓ ordered as on the tree: Judah, David and Shlomo, the Exile');
  }
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
