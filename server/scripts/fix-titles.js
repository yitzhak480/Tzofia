// Moves era titles (תנא, אמורא, סבורא, גאון...) from "roles" to "titles", and
// removes roles that repeat the person's post (the post is the role with years).
// Safe to run more than once.
//
// Run from the server folder:  node scripts/fix-titles.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Person = require('../models/Person');

const TITLES = { 'תנא': 'Tanna', 'אמורא': 'Amora', 'סבורא': 'Savora', 'גאון': 'Gaon', 'ראשון': 'Rishon', 'אחרון': 'Acharon' };

// roles that only repeat the post, and posts to rename
const DROP_ROLES = {
  'rav-saadia-gaon': ['ראש ישיבת סורא'],
  'rabbah-yossi': ['ראש ישיבת פומבדיתא'],
};
const RENAME_OFFICE = {
  'rav-saadia-gaon': { from: 'גאון ישיבת סורא', to: { he: 'גאון סורא', en: 'Gaon of Sura' } },
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  let changed = 0;
  for (const p of await Person.find()) {
    const before = JSON.stringify([p.roles, p.titles, p.offices]);
    const moved = p.roles.filter((r) => TITLES[r.he?.trim()]);
    const titles = [...(p.titles || [])];
    for (const r of moved) {
      if (!titles.some((t) => t.he === r.he)) titles.push({ he: r.he, en: r.en || TITLES[r.he.trim()] });
    }
    p.titles = titles;
    p.roles = p.roles.filter((r) => !TITLES[r.he?.trim()] && !(DROP_ROLES[p.slug] || []).includes(r.he?.trim()));
    const rename = RENAME_OFFICE[p.slug];
    if (rename) {
      for (const o of p.offices) if (o.label?.he === rename.from) o.label = rename.to;
      p.markModified('offices');
    }
    if (JSON.stringify([p.roles, p.titles, p.offices]) !== before) {
      await p.save();
      changed += 1;
      console.log(`✓ ${p.name.he}: תואר ${p.titles.map((t) => t.he).join(', ') || '-'} | תפקידים ${p.roles.map((r) => r.he).join(', ') || '-'}`);
    }
  }
  console.log(`${changed} entries updated`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
