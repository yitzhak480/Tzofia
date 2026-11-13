// The Talmud tree, eighth band: the last of the Amoraim – Ravina, who sealed
// the Babylonian Talmud, and his generation – with the Heads of the Exile,
// Nachman Katufa and the kings of Himyar.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');
const { YELED, NEVUA } = require('./amoraim-7');

const CAT = {
  't2-sura': 'amoraim-sura', 't2-nehardea': 'amoraim-nehardea', 't2-tveria': 'amoraim-tveria', 't2-eretz': 'amoraim-eretz',
  't2-bavel': 'amoraim-bavel', 't2-reshgaluta': 'amoraim-rashei-hagola', 't2-nesiim': 'nesiim', 't2-teiman': 'kings-himyar',
};
const A = (e) => {
  const first = [].concat(e.spot2)[0];
  const row = T2.find((r) => r[0] === first);
  if (!row) throw new Error(`"${first}" is not in the Talmud tree checklist`);
  let cats = e.cats || (row[2] === 'name' ? ['amoraim-family'] : [CAT[row[1]]]);
  if (row[1] === 't2-reshgaluta' && row[2] === 'box' && !cats.includes('rashei-hagola')) cats = [...cats, 'rashei-hagola'];
  return { gender: 'male', roles: [], ...e, cats, color: row[1] };
};
const F = (e) => A({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const GEN8 = L('אמורא, דור ח׳', 'Amora, 8th generation');
const KOLELET = L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const SURA = (from, to2, before, after) => HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', from, to2, before, after);
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const KING = (from, to2, before, after) => HEAD('שנות מלוכה', 'Reign', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const HIM = L('כתובות חמיריות מתימן', 'Himyarite inscriptions from Yemen');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';
const SOF_HORAA = sec('סוף הוראה',
  'רבינא, בן אחותו של רבינא הראשון, היה האחרון שבאמוראים. הגמרא אומרת: "רבינא ורב אשי סוף הוראה" (בבא מציעא פו ע״א) – רב אשי החל לסדר את התלמוד, ורבינא השלים את חתימתו. לפי איגרת רב שרירא גאון נפטר בשנת 4260, ובה נחתם התלמוד הבבלי; אחריו באו הסבוראים, שהוסיפו עליו הסברים קצרים בלבד.',
  'The End of Hora’ah',
  'Ravina, the son of the sister of Ravina I, was the last of the Amoraim. The Gemara says: "Ravina and Rav Ashi are the end of hora’ah" (Bava Metzia 86a) – Rav Ashi began to arrange the Talmud, and Ravina completed its sealing. By the Letter of Rav Sherira Gaon he died in 4260, and with it the Babylonian Talmud was sealed; after him came the Savoraim, who added only short explanations to it.');
const SONS = sec('בני מר זוטרא', 'כהנא ורב הונא מר היו בניו של מר זוטרא השני, ועמדו בראש הגולה זה אחר זה. ' + RG_SOURCES,
  'The Sons of Mar Zutra', 'Kahana and Rav Huna Mar were the sons of Mar Zutra II, and headed the Exile one after the other. ' + RG_SOURCES_EN);

module.exports = [
  // ── Sura ──
  A({
    slug: 'rabba-tosfaa', spot2: 'רבה תוספאה', roles: [GEN8, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רבה תוספאה', 'Rabba Tosfa’a'),
    summary: L('ראש ישיבת סורא אחרי מר בר רב אשי.', 'Head of the Sura yeshivah after Mar bar Rav Ashi.'),
    rel: [to('teacher', 'ravina-1')], offices: [SURA(4228, 4234, ['mar-bar-rav-ashi'], ['ravina-2'])],
    sources: [IRSG, L('יבמות פ ע״ב', 'Yevamot 80b')],
    sections: [
      sec('רבה תוספאה', 'רבה תוספאה עמד בראש ישיבת סורא שש שנים, אחרי מר בר רב אשי. הגמרא מביאה את פסקו המפורסם להכשיר ילד שנולד שנים עשר חודשים אחרי שיצא בעלה של אמו למדינת הים, משום שאפשר שהעובר "שהה" במעי אמו (יבמות פ ע״ב).', 'Rabba Tosfa’a', 'Rabba Tosfa’a headed the Sura yeshivah for six years, after Mar bar Rav Ashi. The Gemara brings his famous ruling declaring legitimate a child born twelve months after his mother’s husband left for overseas, since the fetus may have "tarried" in its mother’s womb (Yevamot 80b).'),
      TS('רבו היה רבינא (הראשון), ומר בר רב אשי, שאחריו עמד בראש ישיבת סורא. אחריו עמד בראשה רבינא, האחרון שבאמוראים.', 'His teacher was Ravina (the first), and Mar bar Rav Ashi, after whom he headed the Sura yeshivah. After him Ravina, the last of the Amoraim, headed it.'),
    ],
  }),
  A({
    slug: 'ravina-2', spot2: 'רב אבינא בר רב הונא "רבינא האחרון"', roles: [GEN8, KOLELET, L('ראש ישיבת סורא', 'Head of the Sura yeshivah'), L('חותם התלמוד הבבלי ואחרון האמוראים', 'Sealer of the Babylonian Talmud and last of the Amoraim')],
    name: L('רבינא (רב אבינא בר רב הונא)', 'Ravina (Rav Avina bar Rav Huna)'),
    summary: L('רבינא האחרון, ראש ישיבת סורא, שחתם את התלמוד הבבלי.', 'Ravina the last, head of the Sura yeshivah, who sealed the Babylonian Talmud.'),
    rel: [to('father', 'rav-huna-avi-ravina'), to('teacher', 'rav-ashi'), to('teacher', 'marimar')],
    offices: [SURA(4234, 4260, ['rabba-tosfaa'], [])],
    sources: [IRSG, L('בבא מציעא פו ע״א', 'Bava Metzia 86a'), TTA],
    sections: [
      SOF_HORAA,
      TS('אביו היה רב הונא, ואחיו רב נחמן בר רב הונא; את דודו רבינא הראשון, אחי אמו, ירש בשמו. רבותיו היו רב אשי ומרימר, ורבה תוספאה, שאחריו עמד בראש ישיבת סורא.', 'His father was Rav Huna, and his brother Rav Nachman bar Rav Huna; he was named after his uncle Ravina I, his mother’s brother. His teachers were Rav Ashi and Marimar, and Rabba Tosfa’a, after whom he headed the Sura yeshivah.'),
    ],
  }),
  A({
    slug: 'rav-chanina-misura', spot2: 'רב חנינא מסורא', roles: [GEN8],
    name: L('רב חנינא מסורא', 'Rav Chanina of Sura'),
    summary: L('מאחרוני האמוראים בסורא.', 'One of the last Amoraim in Sura.'),
    rel: [], sources: [TTA],
    sections: one('רב חנינא מסורא', 'רב חנינא מסורא היה מאחרוני האמוראים, בדורו של רבינא האחרון.', 'Rav Chanina of Sura', 'Rav Chanina of Sura was one of the last Amoraim, in the generation of Ravina the last.'),
  }),
  A({
    slug: 'yehuda-bar-marimar-2', spot2: 'יהודה בר מרימר ב׳', roles: [GEN8],
    name: L('יהודה בר מרימר ב׳', 'Yehudah bar Marimar II'),
    summary: L('בנו של מרימר.', 'Marimar’s son.'),
    rel: [to('father', 'marimar')], sources: [TTA],
    sections: one('יהודה בר מרימר', 'יהודה, בנו של מרימר – ראש הגולה וראש ישיבת סורא – היה מאחרוני האמוראים.', 'Yehudah bar Marimar', 'Yehudah, the son of Marimar – Head of the Exile and head of the Sura yeshivah – was one of the last Amoraim.'),
  }),

  // ── Pumbedita and Mechoza ──
  A({
    slug: 'rav-sama-brei-drava', spot2: 'רב סמא בריה דרבא', name: L('רב סמא בריה דרבא', 'Rav Sama son of Rava'),
    roles: [GEN8, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    summary: L('ראש ישיבת פומבדיתא אחרי רב רחומי.', 'Head of the Pumbedita yeshivah after Rav Rechumi.'),
    rel: [], offices: [PUM(4216, 4236, ['rav-rechumi-2'], ['rabbah-yossi'])], sources: [IRSG],
    sections: [TS('הוא עמד בראש ישיבת פומבדיתא עשרים שנה, אחרי רב רחומי, רבו, ואחריו רבה יוסי, הראשון בסבוראים.', 'He headed the Pumbedita yeshivah for twenty years, after Rav Rechumi, his teacher, and after him came Rabbah Yossi, the first of the Savoraim.')],
  }),
  A({
    slug: 'rav-chanina-reish-metivta', spot2: 'רב חנינא ריש מתיבתא', roles: [GEN8, L('ריש מתיבתא', 'Reish Metivta'), L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('רב חנינא ריש מתיבתא', 'Rav Chanina, Reish Metivta'),
    summary: L('ראש ישיבה, אולי במחוזא, שנהרג על קידוש השם.', 'A head of a yeshivah, perhaps in Mechoza, who was killed for the sanctification of God’s Name.'),
    rel: [], sources: [TTA],
    sections: one('רב חנינא ריש מתיבתא', 'רב חנינא עמד בראש ישיבה – אולי במחוזא – בימי הגזירות של מלכי פרס, ונהרג על קידוש השם; לכן באילן שלנו יש להבה ליד שמו.', 'Rav Chanina, Reish Metivta', 'Rav Chanina headed a yeshivah – perhaps in Mechoza – in the days of the decrees of the kings of Persia, and was killed for the sanctification of God’s Name; so on our tree there is a flame beside his name.'),
  }),

  // ── the Heads of the Exile ──
  A({
    slug: 'kahana-2', spot2: 'כהנא ב׳', roles: [GEN8, L('ראש הגולה', 'Head of the Exile')],
    name: L('כהנא ב׳', 'Kahana II'), summary: L('בנו של מר זוטרא השני, ראש הגולה אחריו.', 'Son of Mar Zutra II, Head of the Exile after him.'),
    rel: [to('father', 'mar-zutra-2'), to('teacher', 'ravina-1')], offices: [RG(['mar-zutra-2'], ['rav-huna-mar'], 4215, 4225)], sources: [SOZ],
    sections: [SONS, TS('רבו היה רבינא (הראשון).', 'His teacher was Ravina (the first).')],
  }),
  A({
    slug: 'rav-huna-mar', spot2: 'רב הונא מר', roles: [GEN8, L('ראש הגולה', 'Head of the Exile'), L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('רב הונא מר', 'Rav Huna Mar'), summary: L('ראש הגולה שנהרג בגזירות פירוז.', 'The Head of the Exile killed in the decrees of Peroz.'),
    rel: [to('father', 'mar-zutra-2'), to('sibling', 'kahana-2'), to('teacher', 'ravina-1')], offices: [RG(['kahana-2'], [], 4225, 4230)], sources: [SOZ, IRSG],
    sections: [
      sec('הונא מר', 'בימי פירוז מלך פרס באו גזירות קשות על יהודי בבל, ובשנת 4229 נהרג ראש הגולה הונא מר, אחרי רב אמימר בר מר ינוקא ורב משרשיא בר פקוד (איגרת רב שרירא גאון) – ולכן באילן שלנו יש להבה ליד שמו. באילן יש גם סימן שאלה בקו שיורד ממנו. ' + RG_SOURCES, 'Huna Mar', 'In the days of Peroz king of Persia harsh decrees fell on the Jews of Bavel, and in 4229 the Head of the Exile Huna Mar was killed, after Rav Ameimar bar Mar Yanuka and Rav Mesharshya bar Pakod (the Letter of Rav Sherira Gaon) – so on our tree there is a flame beside his name. On the tree there is also a question mark on the line going down from him. ' + RG_SOURCES_EN),
      SONS,
      TS('רבו היה רבינא (הראשון).', 'His teacher was Ravina (the first).'),
    ],
  }),
  F({
    slug: 'shushandukht', spot2: 'שושנדוכט', cats: ['amoraim-rashei-hagola'], roles: [L('מלכת פרס', 'Queen of Persia')],
    name: L('שושנדוכט', 'Shushandukht'),
    summary: L('אשתו של יזדגרד הראשון מלך פרס, בת ראש הגולה.', 'The wife of Yazdegerd I king of Persia, daughter of the Head of the Exile.'),
    rel: [maybe('father', 'rav-huna-brei-drav-natan')], sources: [L('שהרסתאניהא י ערן', 'Shahrestaniha-i Eran')],
    sections: one('שושנדוכט', 'לפי מסורת פרסית, שושנדוכט הייתה בתו של ראש הגולה, ונישאה ליזדגרד הראשון מלך פרס (שבמקורותינו נקרא "איזגדר"), שהיה ידוע ביחסו הטוב ליהודים. לפי אותה מסורת, לבקשתה הושיב המלך יהודים באספהאן ובערים נוספות. באילן שלנו יורד אליה קו מנוקד, בסימן שאלה, מרב הונא בר נתן ראש הגולה – בן דורו של יזדגרד, שהגמרא מספרת כיצד עמד לפניו (זבחים יט ע״א). ' + RG_SOURCES, 'Shushandukht', 'By a Persian tradition, Shushandukht was the daughter of the Head of the Exile, and married Yazdegerd I king of Persia (called "Izgadar" in our sources), who was known for his good treatment of the Jews. By the same tradition, at her request the king settled Jews in Isfahan and other cities. On our tree a dotted line comes down to her, with a question mark, from Rav Huna bar Natan the Head of the Exile – Yazdegerd’s contemporary, whom the Gemara describes standing before him (Zevachim 19a). ' + RG_SOURCES_EN),
  }),

  // ── the child of Kfar Bar'am ──
  A({
    slug: 'nachman-katufa', spot2: 'נחמן קטופא דמן כפר ברעם', cats: ['tekufat-hasavoraim'], roles: [L('בעל "נבואת הילד"', 'Author of "The Prophecy of the Child"')],
    name: L('נחמן קטופא דמן כפר ברעם', 'Nachman Katufa of Kfar Bar’am'),
    summary: L('הילד מכפר ברעם, שניבא ביום הולדתו השתים עשרה ומת.', 'The child of Kfar Bar’am, who prophesied on his twelfth birthday and died.'),
    rel: [to('father', 'rabbi-pinchas-baala-shel-rachel'), to('mother', 'rachel-eshet-rabbi-pinchas')], sources: [NEVUA],
    sections: [YELED],
  }),

  // ── the kings of Himyar ──
  A({
    slug: 'sharchavil-yakkuf', spot2: 'שרחביל יכף', roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('שרחביל יכף', 'Sharchavil Yakkuf'), summary: L('מלך חמיר אחרי שרחביל יעפר.', 'King of Himyar after Sharchavil Yafur.'),
    rel: [maybe('father', 'hassan-yuhamin')], offices: [KING(4225, 4240, ['sharchavil-yafur'], [])], sources: [HIM],
    sections: [
      sec('שרחביל יכף', 'שרחביל יכף מלך בחמיר אחרי שרחביל יעפר.', 'Sharchavil Yakkuf', 'Sharchavil Yakkuf reigned in Himyar after Sharchavil Yafur.'),
      sec('סימן השאלה', 'באילן שלנו יורד אליו קו מחסאן יהאמן בסימן שאלה: חלוקות הדעות אם היה בנו, אך כנראה היה.', 'The Question Mark', 'On our tree a line comes down to him from Hassan Yuha’min with a question mark: opinions differ on whether he was his son, but he probably was.'),
    ],
  }),
];
