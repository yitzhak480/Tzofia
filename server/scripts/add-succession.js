// Who held each role before / after, for everyone added so far.
// Follows the arrows on our tree posters (and the family line where a son
// succeeded his father). Only "after" is written for people who have a page:
// the matching "before" appears on the other page automatically.
// Safe to run more than once (it replaces these lists, nothing else).
//
// Run from the server folder:  node scripts/add-succession.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Person = require('../models/Person');

const chain = (...slugs) => slugs.slice(0, -1).map((s, i) => [s, [slugs[i + 1]]]);

// label used when an entry has no office yet
const NEW_OFFICE = {
  'shmuel-hanavi': ['שנות שפיטה', 'Years as judge'],
  'tzadok-hakohen': ['כהונה גדולה', 'High Priesthood'],
  'shimon-hatzadik': ['כהונה גדולה', 'High Priesthood'],
  'mishkan-bamidbar': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'mishkan-gilgal': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'mishkan-shilo': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'mishkan-nov': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'mishkan-givon': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'beit-hamikdash-harishon': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
  'beit-hamikdash-hasheni': ['מקום השראת השכינה', 'Seat of the Divine Presence'],
};

// slug -> who came after (page slugs)
const AFTER = Object.fromEntries([
  // the united kingdom and its split
  ['shaul-hamelech', ['david', 'ish-boshet']],
  ['ish-boshet', ['david']],
  ['david', ['shlomo']],
  ['shlomo', ['rechavam', 'yeravam-ben-nevat']],
  // Kingdom of Judah (son after father, and Atalyah between them)
  ...chain('rechavam', 'abiyam', 'asa', 'yehoshafat', 'yehoram', 'achazyahu', 'atalyah', 'yehoash', 'amatzyah',
    'uziyahu', 'yotam', 'achaz', 'chizkiyahu', 'menashe', 'amon', 'yoshiyahu', 'yehoachaz', 'yehoyakim',
    'yehoyachin', 'tzidkiyahu'),
  // Kingdom of Israel (the black arrows on the poster)
  ...chain('yeravam-ben-nevat', 'nadav-ben-yeravam', 'baasha', 'elah-ben-baasha', 'zimri'),
  ['zimri', ['omri', 'tivni']],
  ['tivni', ['omri']],
  ...chain('omri', 'achav', 'achazyahu-ben-achav', 'yehoram-ben-achav', 'yehu', 'yehoachaz-ben-yehu',
    'yoash-ben-yehoachaz', 'yeravam-ben-yoash', 'zecharyah-ben-yeravam', 'shalum-ben-yavesh',
    'menachem-ben-gadi', 'pekachyah', 'pekach', 'hoshea-ben-elah'),
  // the judges, by their numbers on the poster
  ...chain('otniel-ben-kenaz', 'ehud-ben-gera', 'shamgar-ben-anat', 'devorah-haneviah', 'gideon', 'avimelech',
    'tola-ben-puah', 'yair-hagiladi', 'yiftach', 'ivtzan-boaz', 'elon-hazevuloni', 'avdon-ben-hillel',
    'shimshon', 'eli-hakohen', 'shmuel-hanavi'),
  // the Mishkan and the Temples
  ...chain('mishkan-bamidbar', 'mishkan-gilgal', 'mishkan-shilo', 'mishkan-nov', 'mishkan-givon',
    'beit-hamikdash-harishon', 'beit-hamikdash-hasheni'),
]);

// people without a page yet: names only (they become links once a page exists)
const NAMES = {
  'otniel-ben-kenaz': { before: [['יהושע בן נון', 'Yehoshua son of Nun']] },
  'tzadok-hakohen': { before: [['אביתר', 'Evyatar']], after: [['אחימעץ', 'Achimaatz']] },
  'shimon-hatzadik': { before: [['חוניו א׳', 'Chonyo I']], after: [['אלעזר', 'Elazar']] },
  'hillel-hazaken': { before: [['שמעיה', 'Shemayah']], after: [['רבן שמעון בן הלל', 'Rabban Shimon son of Hillel']] },
  'rav-abba-arikha': { after: [['רב הונא', 'Rav Huna']] },
  'rabbah-yossi': { before: [['רב סמא בריה דרבא', 'Rav Sama son of Rava']] },
  'rav-saadia-gaon': { before: [['רב יום טוב כהנא', 'Rav Yom Tov Kahana']] },
};

// A second role for people who held two (each with its own before / after).
const EXTRA_OFFICES = {
  'eli-hakohen': [
    { label: ['כהונה גדולה', 'High Priesthood'], before: [['בוקי', 'Buki']], after: [['אחיטוב', 'Achituv']] },
  ],
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const slugs = new Set([...Object.keys(AFTER), ...Object.values(AFTER).flat(), ...Object.keys(NAMES), ...Object.keys(NEW_OFFICE)]);
  const people = await Person.find({ slug: { $in: [...slugs] } });
  const bySlug = new Map(people.map((p) => [p.slug, p]));
  const missing = [...slugs].filter((s) => !bySlug.has(s));
  if (missing.length) console.log('not found (skipped):', missing.join(', '));

  let n = 0;
  for (const slug of new Set([...Object.keys(AFTER), ...Object.keys(NAMES), ...Object.keys(NEW_OFFICE)])) {
    const person = bySlug.get(slug);
    if (!person) continue;
    if (!person.offices.length) {
      const [he, en] = NEW_OFFICE[slug] || ['תפקיד', 'Role'];
      person.offices = [{ label: { he, en }, from: null, to: null, note: { he: '', en: '' } }];
    }
    const office = person.offices[0];
    const after = (AFTER[slug] || []).map((s) => bySlug.get(s)).filter(Boolean)
      .map((p) => ({ person: p._id, name: { he: p.name.he, en: p.name.en || '' } }));
    const names = (list) => (list || []).map(([he, en]) => ({ person: null, name: { he, en } }));
    office.before = names(NAMES[slug]?.before);
    office.after = [...after, ...names(NAMES[slug]?.after)];
    for (const extra of EXTRA_OFFICES[slug] || []) {
      const [he, en] = extra.label;
      let o = person.offices.find((x) => x.label?.he === he);
      if (!o) {
        person.offices.push({ label: { he, en }, from: null, to: null, note: { he: '', en: '' } });
        o = person.offices[person.offices.length - 1];
      }
      o.before = names(extra.before);
      o.after = names(extra.after);
    }
    person.markModified('offices');
    await person.save();
    n += 1;
  }
  console.log(`✓ succession set for ${n} entries`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
