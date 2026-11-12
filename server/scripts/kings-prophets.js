// "Prophets in his days" for every king (the reverse, "kings in his days",
// appears on the prophet's page automatically). From Tanach and Seder Olam,
// together with the time line on the right of our poster.
// Also: every category is set to chronological order, and Shmuel and Shimshon
// get their years as judges (Seder Olam) so they sort into the right place.
// Safe to run more than once.
//
// Run from the server folder:  node scripts/kings-prophets.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');

const PROPHETS = {
  // the united kingdom
  'shaul-hamelech': ['shmuel-hanavi'],
  'ish-boshet': ['gad-hachozeh', 'natan-hanavi'],
  david: ['shmuel-hanavi', 'gad-hachozeh', 'natan-hanavi'],
  shlomo: ['natan-hanavi', 'achiyah-hashiloni', 'ido-hachozeh'],
  // the Kingdom of Judah
  rechavam: ['shemayah-ish-haelokim', 'ido-hachozeh', 'achiyah-hashiloni'],
  abiyam: ['ido-hachozeh'],
  asa: ['azaryahu-ben-oded', 'chanani-haroeh'],
  yehoshafat: ['yehu-ben-chanani', 'yachaziel-halevi', 'eliezer-ben-dodavahu', 'michayhu-ben-yimlah', 'eliyahu-hanavi', 'elisha-hanavi'],
  yehoram: ['eliyahu-hanavi', 'elisha-hanavi'],
  achazyahu: ['elisha-hanavi'],
  atalyah: ['elisha-hanavi'],
  yehoash: ['zecharyah-ben-yehoyada', 'elisha-hanavi'],
  amatzyah: ['yonah-ben-amitai'],
  uziyahu: ['zecharyahu-hamevin', 'hoshea-ben-beeri', 'amos-hanavi', 'yeshayahu-hanavi', 'amotz'],
  yotam: ['hoshea-ben-beeri', 'yeshayahu-hanavi', 'michah-hamorashti'],
  achaz: ['hoshea-ben-beeri', 'yeshayahu-hanavi', 'michah-hamorashti', 'oded'],
  chizkiyahu: ['hoshea-ben-beeri', 'yeshayahu-hanavi', 'michah-hamorashti'],
  menashe: ['yeshayahu-hanavi', 'yoel-ben-petuel', 'nachum-haelkoshi', 'chavakuk-hanavi'],
  amon: [],
  yoshiyahu: ['tzefanyah-hanavi', 'yirmeyahu-hanavi', 'chulda-haneviah'],
  yehoachaz: ['yirmeyahu-hanavi'],
  yehoyakim: ['yirmeyahu-hanavi', 'uriyahu-ben-shemayahu', 'baruch-ben-neriyah'],
  yehoyachin: ['yirmeyahu-hanavi', 'yechezkel-hanavi'],
  tzidkiyahu: ['yirmeyahu-hanavi', 'yechezkel-hanavi', 'baruch-ben-neriyah', 'seraiah-ben-neriyah'],
  // the Kingdom of Israel
  'yeravam-ben-nevat': ['achiyah-hashiloni', 'ido-hachozeh'],
  'nadav-ben-yeravam': [],
  baasha: ['yehu-ben-chanani'],
  'elah-ben-baasha': ['yehu-ben-chanani'],
  zimri: [],
  tivni: [],
  omri: [],
  achav: ['eliyahu-hanavi', 'ovadyah-hanavi', 'michayhu-ben-yimlah', 'elisha-hanavi'],
  'achazyahu-ben-achav': ['eliyahu-hanavi', 'elisha-hanavi'],
  'yehoram-ben-achav': ['elisha-hanavi', 'eliyahu-hanavi'],
  yehu: ['elisha-hanavi', 'yonah-ben-amitai'],
  'yehoachaz-ben-yehu': ['elisha-hanavi'],
  'yoash-ben-yehoachaz': ['elisha-hanavi'],
  'yeravam-ben-yoash': ['yonah-ben-amitai', 'hoshea-ben-beeri', 'amos-hanavi'],
  'zecharyah-ben-yeravam': ['hoshea-ben-beeri'],
  'shalum-ben-yavesh': ['hoshea-ben-beeri'],
  'menachem-ben-gadi': ['hoshea-ben-beeri'],
  pekachyah: ['hoshea-ben-beeri'],
  pekach: ['hoshea-ben-beeri', 'oded'],
  'hoshea-ben-elah': ['hoshea-ben-beeri', 'michah-hamorashti'],
};

// judges' years from Seder Olam (the poster's judges boxes have no years)
const JUDGE_YEARS = {
  shimshon: { from: 2811, to: 2831, he: 'לפי סדר עולם; עשרים שנה בימי פלשתים', en: 'According to Seder Olam; twenty years in the days of the Philistines' },
  'shmuel-hanavi': { from: 2871, to: 2881, he: 'לפי סדר עולם', en: 'According to Seder Olam' },
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const sorted = await Category.updateMany({}, { $set: { sortMode: 'chrono' } });
  console.log(`✓ ${sorted.modifiedCount} categories set to chronological order`);

  const slugs = new Set([...Object.keys(PROPHETS), ...Object.values(PROPHETS).flat(), ...Object.keys(JUDGE_YEARS)]);
  const bySlug = new Map((await Person.find({ slug: { $in: [...slugs] } })).map((p) => [p.slug, p]));
  const missing = [...slugs].filter((s) => !bySlug.has(s));
  if (missing.length) console.log('not found (skipped):', missing.join(', '));

  let n = 0;
  for (const [king, prophets] of Object.entries(PROPHETS)) {
    const doc = bySlug.get(king);
    if (!doc) continue;
    doc.relations = [
      ...doc.relations.filter((r) => r.type !== 'prophet'),
      ...prophets.map((s) => bySlug.get(s)).filter(Boolean)
        .map((p) => ({ type: 'prophet', person: p._id, name: { he: p.name.he, en: p.name.en || '' } })),
    ];
    await doc.save();
    n += 1;
  }
  console.log(`✓ prophets in the days of ${n} kings`);

  for (const [slug, y] of Object.entries(JUDGE_YEARS)) {
    const doc = bySlug.get(slug);
    if (!doc) continue;
    const office = doc.offices.find((o) => o.label?.he === 'שנות שפיטה');
    if (!office) continue;
    office.from = y.from;
    office.to = y.to;
    office.note = { he: y.he, en: y.en };
    doc.markModified('offices');
    await doc.save();
  }
  console.log('✓ years for Shmuel and Shimshon');
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
