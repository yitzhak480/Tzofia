// Splits "Prophets" into three: Prophets of Israel, Prophetesses (already
// there) and Prophets of the Nations. The prophets move into "Prophets of
// Israel" with their order; Iyov gets a page under the nations.
// Also puts Aharon and Pinchas back in the Mishkan list of High Priests.
// Safe to run more than once.
//
// Run from the server folder:  node scripts/prophets-subcategories.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { L, sec, article, biblical } = require('./content/helpers');

const SUBS = [
  { slug: 'prophets-of-israel', order: 0, cardColor: 'blue', name: L('נביאי ישראל', 'Prophets of Israel'), description: L('הנביאים שקמו לישראל', 'The prophets who arose in Israel') },
  { slug: 'prophetesses', order: 1 },
  { slug: 'prophets-of-the-nations', order: 2, cardColor: 'brown', name: L('נביאי אומות העולם', 'Prophets of the Nations'), description: L('נביאים שקמו לאומות העולם', 'Prophets who arose among the nations') },
];

const IYOV = {
  slug: 'iyov', name: L('איוב', 'Iyov (Job)'), cardColor: 't1-bereshit',
  roles: [L('נביא', 'Prophet')],
  summary: L('האיש התם והישר מארץ עוץ, שעמד בייסורים קשים ולא חטא בשפתיו.', 'The blameless and upright man of the land of Utz, who bore terrible suffering and did not sin with his lips.'),
  sources: [L('ספר איוב', 'The Book of Job'), L('בבא בתרא טו ע״א – טז ע״א', 'Bava Batra 15a–16a'), L('סוטה יא ע״א', 'Sotah 11a')],
  sections: [
    sec('איש היה בארץ עוץ', '"איש היה בארץ עוץ, איוב שמו, והיה האיש ההוא תם וישר וירא אלהים וסר מרע". בספר איוב מסופר כיצד איבד את רכושו, את בניו ואת בריאותו, ובכל זאת "לא חטא איוב בשפתיו". חז״ל מונים אותו בין שבעת הנביאים שניבאו לאומות העולם (בבא בתרא טו ע״ב).',
      'There Was a Man in the Land of Utz', '"There was a man in the land of Utz whose name was Iyov, and that man was blameless and upright, fearing God and shunning evil". The Book of Iyov tells how he lost his wealth, his children and his health, and yet "Iyov did not sin with his lips". Chazal count him among the seven prophets who prophesied to the nations (Bava Batra 15b).'),
    sec('מתי חי איוב?', 'בתנ״ך לא כתוב ממי יצא איוב, ובגמרא נאמרו דעות רבות: יש אומרים שהיה בימי יעקב ובניו, ויש אומרים שהיה מיועציו של פרעה בזמן לידת משה רבנו (סוטה יא ע״א), ויש אף אומרים "איוב לא היה ולא נברא, אלא משל היה". באילן שלנו הוא מופיע ליד בני יעקב, ובהערה לידו מובאות הדעות.',
      'When Did Iyov Live?', 'Tanach does not say whom Iyov descended from, and the Gemara brings many opinions: some say he lived in the days of Yaakov and his sons, and some say he was one of Pharaoh’s advisers at the time of Moshe’s birth (Sotah 11a), and some even say "Iyov never existed and was never created, but was a parable". On our tree he appears beside the sons of Yaakov, with a note bringing the opinions.'),
  ],
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const prophets = await Category.findOne({ slug: 'prophets' });
  if (!prophets) throw new Error('No "prophets" category');

  const subs = {};
  for (const s of SUBS) {
    let c = await Category.findOne({ slug: s.slug });
    if (!c) c = new Category({ slug: s.slug, name: s.name, description: s.description, cardColor: s.cardColor, sortMode: prophets.sortMode });
    c.parent = prophets._id;
    c.order = s.order;
    await c.save();
    subs[s.slug] = c;
  }
  const israel = subs['prophets-of-israel'];

  // everyone still directly in "Prophets" moves to "Prophets of Israel", keeping their place
  const pid = String(prophets._id);
  let moved = 0;
  for (const p of await Person.find({ categories: prophets._id })) {
    p.categories = p.categories.map((c) => (String(c) === pid ? israel._id : c));
    const pos = p.orders?.get(pid);
    if (pos != null) {
      p.orders.set(String(israel._id), pos);
      p.orders.delete(pid);
    }
    await p.save();
    moved += 1;
  }

  // Iyov
  const nations = subs['prophets-of-the-nations'];
  const iyov = (await Person.findOne({ slug: IYOV.slug })) || new Person({ slug: IYOV.slug });
  iyov.set({
    kind: 'person', gender: 'male', categories: [nations._id], name: IYOV.name, titles: [], roles: IYOV.roles,
    summary: IYOV.summary, content: article(IYOV.sections),
    sources: IYOV.sources.map((s) => s.he), sourcesEn: IYOV.sources.map((s) => s.en),
    treeSpots: biblical(33.45, 19.32), cardColor: iyov.cardColor || IYOV.cardColor, published: true,
  });
  await iyov.save();

  // Aharon and Pinchas back in the Mishkan list (if it exists)
  const general = await Category.findOne({ slug: 'kohanim-gedolim' });
  const mishkan = await Category.findOne({ slug: 'kohanim-gedolim-mishkan' });
  if (general && mishkan) {
    for (const slug of ['aharon-hakohen', 'pinchas']) {
      const p = await Person.findOne({ slug });
      if (!p) continue;
      p.categories = [...p.categories.filter((c) => String(c) !== String(general._id) && String(c) !== String(mishkan._id)), mishkan._id];
      await p.save();
    }
  }

  console.log(`✓ Prophets split in three, ${moved} moved to Prophets of Israel, Iyov added`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
