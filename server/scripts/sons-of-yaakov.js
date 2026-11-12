// "The Sons of Yaakov and the Tribes of Israel": the tribe pages become the
// pages of the sons themselves and the tribes that came from them. Yosef joins
// the list (and stays in Avraham's Family). Gold cards, apart from Yehuda
// (blue), Levi (red) and Yosef (green), as on the poster.
// Runs after add-tribes-kings-judges-temples.js and add-bereishit.js.
// Safe to run more than once.
//
// Run from the server folder:  node scripts/sons-of-yaakov.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { L, to, nm } = require('./content/helpers');

const LEAH = to('mother', 'leah-imenu');
const RACHEL = to('mother', 'rachel-imenu');
const BILHA = nm('mother', 'בלהה', 'Bilhah');
const ZILPA = nm('mother', 'זלפה', 'Zilpah');
const YAAKOV = to('father', 'yaakov-avinu');

// in order of birth; Yosef's sons after him
const SONS = [
  { slug: 'shevet-reuven', he: 'ראובן', en: 'Reuven', gloss: 'Reuben', rel: [YAAKOV, LEAH],
    sum: ['בכורו של יעקב מלאה, ושבט ראובן שיצא ממנו ונחל בעבר הירדן המזרחי.', 'Yaakov’s firstborn by Leah, and the tribe of Reuven that came from him, which settled east of the Jordan.'] },
  { slug: 'shevet-shimon', he: 'שמעון', en: 'Shimon', gloss: 'Simeon', rel: [YAAKOV, LEAH],
    sum: ['בנו השני של יעקב מלאה, ושבט שמעון שיצא ממנו ונחל בתוך נחלת יהודה.', 'Yaakov’s second son by Leah, and the tribe of Shimon that came from him, which settled within Yehudah’s land.'] },
  { slug: 'shevet-levi', he: 'לוי', en: 'Levi', color: 't1-levi', rel: [YAAKOV, LEAH, nm('child', 'גרשון', 'Gershon'), nm('child', 'קהת', 'Kehat'), nm('child', 'מררי', 'Merari')],
    sum: ['בנו השלישי של יעקב מלאה, ושבט לוי שיצא ממנו ונבחר לעבודת המשכן והמקדש.', 'Yaakov’s third son by Leah, and the tribe of Levi that came from him, chosen for the service of the Mishkan and the Temple.'] },
  { slug: 'shevet-yehuda', he: 'יהודה', en: 'Yehudah', gloss: 'Judah', color: 't1-yehuda',
    rel: [YAAKOV, LEAH, nm('spouse', 'בת-שוע', 'Bat-Shua'), nm('child', 'ער', 'Er'), nm('child', 'אונן', 'Onan'), nm('child', 'שלה', 'Shelah'), nm('child', 'פרץ', 'Peretz'), nm('child', 'זרח', 'Zerach')],
    sum: ['בנו הרביעי של יעקב מלאה, ושבט יהודה שיצא ממנו – שבט המלכות.', 'Yaakov’s fourth son by Leah, and the tribe of Yehudah that came from him – the tribe of kingship.'] },
  { slug: 'shevet-dan', he: 'דן', en: 'Dan', rel: [YAAKOV, BILHA],
    sum: ['בנו של יעקב מבלהה, ושבט דן שיצא ממנו, שממנו יצא שמשון.', 'Yaakov’s son by Bilhah, and the tribe of Dan that came from him, from which came Shimshon.'] },
  { slug: 'shevet-naftali', he: 'נפתלי', en: 'Naftali', gloss: 'Naphtali', rel: [YAAKOV, BILHA],
    sum: ['בנו של יעקב מבלהה, ושבט נפתלי שיצא ממנו ונחל בגליל.', 'Yaakov’s son by Bilhah, and the tribe of Naftali that came from him, which settled the Galilee.'] },
  { slug: 'shevet-gad', he: 'גד', en: 'Gad', rel: [YAAKOV, ZILPA],
    sum: ['בנו של יעקב מזלפה, ושבט גד שיצא ממנו – שבט לוחמים בעבר הירדן.', 'Yaakov’s son by Zilpah, and the tribe of Gad that came from him – a warrior tribe east of the Jordan.'] },
  { slug: 'shevet-asher', he: 'אשר', en: 'Asher', rel: [YAAKOV, ZILPA, nm('child', 'שרח בת אשר', 'Serach daughter of Asher')], drop: ['שרח בת אשר'],
    sum: ['בנו של יעקב מזלפה, ושבט אשר שיצא ממנו, שנחלתו ברוכה בשמן זית.', 'Yaakov’s son by Zilpah, and the tribe of Asher that came from him, whose land was blessed with olive oil.'] },
  { slug: 'shevet-yissachar', he: 'יששכר', en: 'Yissachar', gloss: 'Issachar', rel: [YAAKOV, LEAH],
    sum: ['בנו החמישי של יעקב מלאה, ושבט יששכר שיצא ממנו – שבט לומדי התורה.', 'Yaakov’s fifth son by Leah, and the tribe of Yissachar that came from him – the tribe of Torah scholars.'] },
  { slug: 'shevet-zevulun', he: 'זבולון', en: 'Zevulun', gloss: 'Zebulun', rel: [YAAKOV, LEAH],
    sum: ['בנו השישי של יעקב מלאה, ושבט זבולון שיצא ממנו וישב לחוף הים.', 'Yaakov’s sixth son by Leah, and the tribe of Zevulun that came from him, which dwelt by the sea.'] },
  { slug: 'yosef-hatzadik' }, // his own page; joins the list
  { slug: 'shevet-binyamin', he: 'בנימין', en: 'Binyamin', gloss: 'Benjamin', rel: [YAAKOV, RACHEL],
    sum: ['בנו הצעיר של יעקב מרחל, ושבט בנימין שיצא ממנו, שבנחלתו עמד בית המקדש.', 'Yaakov’s youngest son by Rachel, and the tribe of Binyamin that came from him, in whose land the Temple stood.'] },
  { slug: 'shevet-menashe', he: 'מנשה', en: 'Menashe', gloss: 'Manasseh', father: 'יוסף', rel: [to('father', 'yosef-hatzadik'), to('mother', 'osnat'), to('sibling', 'shevet-efraim')],
    sum: ['בכורו של יוסף, ושבט מנשה שיצא ממנו ונחל משני עברי הירדן.', 'Yosef’s firstborn, and the tribe of Menashe that came from him, which settled on both sides of the Jordan.'] },
  { slug: 'shevet-efraim', he: 'אפרים', en: 'Efraim', gloss: 'Ephraim', father: 'יוסף', rel: [to('father', 'yosef-hatzadik'), to('mother', 'osnat'), to('sibling', 'shevet-menashe')],
    sum: ['בנו השני של יוסף, ושבט אפרים שיצא ממנו – שבט יהושע וירבעם.', 'Yosef’s second son, and the tribe of Efraim that came from him – the tribe of Yehoshua and Yeravam.'] },
];

// the names on Yaakov's page that now open these pages
const ON_YAAKOV = { 'ראובן': 'shevet-reuven', 'שמעון': 'shevet-shimon', 'לוי': 'shevet-levi', 'יהודה': 'shevet-yehuda', 'יששכר': 'shevet-yissachar', 'זבולון': 'shevet-zevulun', 'דן': 'shevet-dan', 'נפתלי': 'shevet-naftali', 'גד': 'shevet-gad', 'אשר': 'shevet-asher', 'בנימין': 'shevet-binyamin' };

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const cat = await Category.findOne({ slug: 'tribes' });
  if (!cat) throw new Error('No "tribes" category');
  cat.set({
    name: L('בני יעקב ושבטי ישראל', 'The Sons of Yaakov and the Tribes of Israel'),
    description: L('בני יעקב, ושבטי ישראל שיצאו מהם', 'The sons of Yaakov, and the tribes of Israel that came from them'),
    parent: null,
    sortMode: 'manual',
    cardColor: 't1-shvatim',
  });
  await cat.save();
  const catId = String(cat._id);

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const link = (r) => {
    if (!r.slug) return { type: r.type, person: null, name: { he: r.he, en: r.en } };
    const p = bySlug.get(r.slug);
    if (!p) throw new Error(`no page "${r.slug}"`);
    return { type: r.type, person: p._id, name: { he: p.name.he, en: p.name.en || '' } };
  };

  for (const [i, s] of SONS.entries()) {
    const doc = bySlug.get(s.slug);
    if (!doc) throw new Error(`no page "${s.slug}"`);
    if (!doc.categories.map(String).includes(catId)) doc.categories.push(cat._id);
    doc.set(`orders.${catId}`, i + 1);
    if (s.he) {
      const fatherHe = s.father || 'יעקב';
      const fatherEn = s.father ? 'Yosef' : 'Yaakov';
      // old links to "X son of Yaakov" and to Yosef were the son himself / his father
      const drop = new Set([`${s.he} בן ${fatherHe}`, 'יוסף בן יעקב', ...(s.drop || [])]);
      // ...and a "related" link to a brother is now a sibling link
      const brothers = new Set(s.rel.filter((r) => r.type === 'sibling').map((r) => String(bySlug.get(r.slug)?._id)));
      const keep = doc.relations.filter((r) => !(r.type === 'related' && (drop.has(r.name?.he?.trim()) || brothers.has(String(r.person)))));
      doc.set({
        kind: 'person',
        gender: 'male',
        name: L(`${s.he} בן ${fatherHe}`, `${s.en} son of ${fatherEn}${s.gloss ? ` (${s.gloss})` : ''}`),
        roles: [L(`בן ${fatherHe}`, `Son of ${fatherEn}`), L(`אבי שבט ${s.he}`, `Father of the tribe of ${s.en}`)],
        summary: L(...s.sum),
        cardColor: s.color || 't1-shvatim',
        relations: [...s.rel.map(link), ...keep.filter((r) => r.type === 'related')],
      });
    }
    await doc.save();
  }

  // Yaakov's children
  const yaakov = bySlug.get('yaakov-avinu');
  if (yaakov) {
    for (const r of yaakov.relations) {
      const slug = ON_YAAKOV[r.name?.he?.trim()];
      if (r.type === 'child' && slug && bySlug.get(slug)) r.person = bySlug.get(slug)._id;
    }
    yaakov.markModified('relations');
    await yaakov.save();
  }

  console.log(`✓ The Sons of Yaakov and the Tribes of Israel: ${SONS.length} entries`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
