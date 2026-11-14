// The Talmud tree, the Savoraim – from Rabbah Yossi to the closing of the
// yeshivot and of the office of Head of the Exile in Bavel for about fifty
// years (the black bar) – with the Heads of the Exile of the house of Mar Zutra
// and the last Jewish kings of Himyar.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const S = (e) => {
  const first = [].concat(e.spot2)[0];
  const row = T2.find((r) => r[0] === first);
  if (!row) throw new Error(`"${first}" is not in the Talmud tree checklist`);
  return { gender: 'male', roles: [], ...e, color: e.color || row[1] };
};
const F = (e) => S({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const SAVORA = L('סבורא', 'Savora');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const SURA = (from, to2, before, after) => HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', from, to2, before, after);
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const KING = (from, to2, before, after) => HEAD('שנות מלוכה', 'Reign', from, to2, before, after);
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ10 = L('סדר עולם זוטא, פרק י', 'Seder Olam Zuta, chapter 10');
const STA = L('סדר תנאים ואמוראים', 'Seder Tannaim VeAmoraim');
const HIM = L('כתובות חמיריות מתימן', 'Himyarite inscriptions from Yemen');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';
const SAVORAIM = sec('הסבוראים',
  'הסבוראים הם החכמים שבאו אחרי חתימת התלמוד בפטירת רבינא (4260). הם לא חלקו על דברי האמוראים, אלא "סברו" – הסבירו, השלימו ופסקו – והוסיפו לתלמוד קטעים קצרים, ובהם כנראה כמה מן הפתיחות של הסוגיות. רוב מה שאנו יודעים עליהם בא מאיגרת רב שרירא גאון.',
  'The Savoraim',
  'The Savoraim are the sages who came after the sealing of the Talmud with the death of Ravina (4260). They did not dispute the words of the Amoraim, but "reasoned" – explained, completed and decided – and added short passages to the Talmud, apparently among them some of the openings of the sugyot. Most of what we know about them comes from the Letter of Rav Sherira Gaon.');
// the story of the house of Mar Zutra, from Seder Olam Zuta
const MAR_ZUTRA = sec('מר זוטרא ובית דוד',
  'סדר עולם זוטא מספר: אשתו של רב הונא ראש הגולה הייתה בתו של רב חנינא ריש מתיבתא. אחרי שראש הגולה פגע ברב חנינא, מתו כל בני ביתו בלילה אחד, ורק מר זוטרא נשאר במעי אמו. רב חנינא חלם שקצץ גן של ארזים ודוד המלך עצר אותו מלקצוץ את הארז האחרון, ושמר על בתו עד שילדה. בינתיים קנה רב פחדא, חתנו של בית דוד, את ראשות הגולה בשוחד. כשהיה מר זוטרא בן חמש עשרה הלך עם ראש הישיבה אל המלך והסיר את רב פחדא, ועמד בראש הגולה עשרים שנה. בימיו נהרג רב יצחק ריש מתיבתא; מר זוטרא יצא עם ארבע מאות איש למלחמה בפרסים, ועמוד אש הלך לפניהם, ומלך שבע שנים – עד שחטאו אנשיו ונתפס, והפרסים צלבו אותו ואת ראש הישיבה על גשר מחוזא.',
  'Mar Zutra and the House of David',
  'Seder Olam Zuta relates: the wife of Rav Huna the Head of the Exile was the daughter of Rav Chanina Reish Metivta. After the Head of the Exile harmed Rav Chanina, all his household died in one night, and only Mar Zutra remained in his mother’s womb. Rav Chanina dreamed that he cut down a garden of cedars and King David stopped him from cutting the last cedar, and he guarded his daughter until she gave birth. Meanwhile Rav Pachda, a son-in-law of the house of David, bought the office of Head of the Exile with a bribe. When Mar Zutra was fifteen he went with the head of the yeshivah to the king and removed Rav Pachda, and headed the Exile for twenty years. In his days Rav Yitzhak Reish Metivta was killed; Mar Zutra went out with four hundred men to war against the Persians, and a pillar of fire went before them, and he reigned for seven years – until his men sinned and he was captured, and the Persians crucified him and the head of the yeshivah on the bridge of Mechoza.');
const BITUL = 'bitul-hayeshivot-bebavel';
const BITUL_TEXT = sec('ביטול הישיבות וראשות הגולה',
  'אחרי מרד מר זוטרא וצליבתו, בימי הגזירות של מלכי פרס, בטלו הישיבות בבבל וגם ראשות הגולה, לכחמישים שנה. באילן שלנו מסומנת התקופה הזאת בפס שחור, ומתחתיו כתוב "תלמידי רב עינא, רב סימונא ורב רבאי" – התלמידים שהמשיכו את התורה בימים האלה, עד שנפתחו הישיבות מחדש. בנו של מר זוטרא, מר זוטרא הרביעי, עלה לארץ ישראל ועמד בראש הישיבה שם.',
  'The Closing of the Yeshivot and of the Office of Head of the Exile',
  'After Mar Zutra’s revolt and his crucifixion, in the days of the decrees of the kings of Persia, the yeshivot in Bavel were closed, and so was the office of Head of the Exile, for about fifty years. On our tree this period is marked by a black bar, and beneath it is written "the students of Rav Eina, Rav Simona and Rav Rabai" – the students who carried on the Torah in those days, until the yeshivot were opened again. Mar Zutra’s son, Mar Zutra IV, went up to the Land of Israel and headed the yeshivah there.');
const HIMYAR_END = 'kibush-himyar';
const DHU_NUWAS = sec('יוסף ד׳ו נואס',
  'יוסף אסאר יתאר, הנקרא בפי הערבים "ד׳ו נואס", היה המלך היהודי האחרון של חמיר. הוא עלה למלוכה אחרי שני מלכים נוצרים שהושיבה על כס חמיר ממלכת אכסום הנוצרית שבאתיופיה, ונלחם בה ובבני בריתה הנוצרים בתימן, ובמיוחד בעיר נג׳ראן. בשנת 4285 (525 למניינם) פלש לחמיר צבא אכסום בפקודת המלך כאלב, וד׳ו נואס נהרג – ולפי המסורת הערבית דהר בסוסו אל הים וטבע – ולכן באילן שלנו יש להבה ליד שמו. בזה הסתיימה המלכות היהודית בתימן.',
  'Yosef Dhu Nuwas',
  'Yosef As’ar Yath’ar, called by the Arabs "Dhu Nuwas", was the last Jewish king of Himyar. He came to the throne after two Christian kings placed on the throne of Himyar by the Christian kingdom of Aksum in Ethiopia, and fought against it and its Christian allies in Yemen, especially in the city of Najran. In 4285 (525 CE) the army of Aksum invaded Himyar at the command of King Kaleb, and Dhu Nuwas was killed – by the Arab tradition he rode his horse into the sea and drowned – so on our tree there is a flame beside his name. With this the Jewish kingdom in Yemen came to an end.');

module.exports = [
  // ── Pumbedita ──
  S({
    slug: 'rav-rechumi-3', spot2: 'רב רחומי ג׳', cats: ['savoraim'], roles: [SAVORA],
    name: L('רב רחומי ג׳', 'Rav Rechumi III'), summary: L('מראשוני הסבוראים, בר פלוגתיה של רבה יוסי.', 'One of the first Savoraim, the bar plugta of Rabbah Yossi.'),
    rel: [to('teacher', 'rav-sama-brei-drava'), to('teacher', 'rabba-tosfaa'), to('plugta', 'rabbah-yossi')], sources: [IRSG, STA],
    sections: [SAVORAIM, TS('רבותיו היו רב סמא בריה דרבא ורבה תוספאה, ורבה יוסי היה בר פלוגתיה.', 'His teachers were Rav Sama son of Rava and Rabba Tosfa’a, and Rabbah Yossi was his bar plugta.')],
  }),
  S({
    slug: 'rav-achai-mibei-chatim', spot2: 'רב אחאי מבי חתים', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב אחאי מבי חתים', 'Rav Achai of Bei Chatim'), summary: L('מגדולי הסבוראים, ראש ישיבת פומבדיתא אחרי רבה יוסי.', 'One of the great Savoraim, head of the Pumbedita yeshivah after Rabbah Yossi.'),
    rel: [to('plugta', 'rav-shmuel-brei-drav-avahu')], offices: [PUM(4275, 4275, ['rabbah-yossi'], ['rav-shmuel-brei-drav-avahu'])], sources: [IRSG, STA],
    sections: [
      SAVORAIM,
      TS('הוא עמד בראש ישיבת פומבדיתא אחרי רבה יוסי, רבו. רב שמואל בריה דרב אבהו היה בר פלוגתיה, ובא אחריו בראש הישיבה – הם היו חברים, ולא רב ותלמיד.', 'He headed the Pumbedita yeshivah after Rabbah Yossi, his teacher. Rav Shmuel son of Rav Avahu was his bar plugta, and followed him at the head of the yeshivah – they were colleagues, not teacher and student.'),
    ],
  }),
  S({
    slug: 'rav-shmuel-brei-drav-avahu', spot2: 'רב שמואל בריה דרב אבהו', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב שמואל בריה דרב אבהו', 'Rav Shmuel son of Rav Avahu'), summary: L('בנו של רב אבהו, ראש ישיבת פומבדיתא אחרי רב אחאי.', 'Rav Avahu’s son, head of the Pumbedita yeshivah after Rav Achai.'),
    rel: [to('father', 'rav-avahu-reish-kalla')], offices: [PUM(4275, 4278, ['rav-achai-mibei-chatim'], ['ravina-meamutzya'])], sources: [IRSG, STA],
    sections: [TS('אביו היה רב אבהו, ה"ריש כלה" אצל רפרם. הוא היה בר פלוגתיה של רב אחאי מבי חתים, ובא אחריו בראש ישיבת פומבדיתא – הם היו חברים, ולא רב ותלמיד. אחריו עמד בראש הישיבה רבינא מאמוציא.', 'His father was Rav Avahu, the "Reish Kallah" beside Rafram. He was the bar plugta of Rav Achai of Bei Chatim, and followed him at the head of the Pumbedita yeshivah – they were colleagues, not teacher and student. After him Ravina of Amutzya headed the yeshivah.')],
  }),
  S({
    slug: 'ravina-meamutzya', spot2: 'רבינא מאמוציא', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רבינא מאמוציא', 'Ravina of Amutzya'), summary: L('ראש ישיבת פומבדיתא אחרי רב שמואל בריה דרב אבהו.', 'Head of the Pumbedita yeshivah after Rav Shmuel son of Rav Avahu.'),
    rel: [], offices: [PUM(4279, 4279, ['rav-shmuel-brei-drav-avahu'], ['rav-tachnina'])], sources: [IRSG, STA],
    sections: [TS('הוא עמד בראש ישיבת פומבדיתא אחרי רב שמואל בריה דרב אבהו, רבו, ואחריו רב תחנינא.', 'He headed the Pumbedita yeshivah after Rav Shmuel son of Rav Avahu, his teacher, and after him came Rav Tachnina.')],
  }),
  S({
    slug: 'rav-chanina-savora', spot2: 'רב חנינא (סבורא)', cats: ['savoraim'], roles: [SAVORA],
    name: L('רב חנינא (סבורא)', 'Rav Chanina (the Savora)'), summary: L('מן הסבוראים, אביהם של רב תחנינא ומר זוטרא.', 'One of the Savoraim, the father of Rav Tachnina and Mar Zutra.'),
    rel: [], sources: [IRSG, STA],
    sections: [SAVORAIM, sec('בניו', 'באילן שלנו יורד ממנו קו משפחה אל שני בניו: רב תחנינא, שעמד בראש ישיבת פומבדיתא, ומר זוטרא בר רב חיננא.', 'His Sons', 'On our tree a family line goes down from him to his two sons: Rav Tachnina, who headed the Pumbedita yeshivah, and Mar Zutra bar Rav Chinena.')],
  }),
  S({
    slug: 'rav-tachnina', spot2: 'רב תחנינא (תחנא)', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב תחנינא (תחנא)', 'Rav Tachnina (Tachna)'), summary: L('בנו של רב חנינא, ראש ישיבת פומבדיתא אחרי רבינא מאמוציא.', 'Rav Chanina’s son, head of the Pumbedita yeshivah after Ravina of Amutzya.'),
    rel: [to('father', 'rav-chanina-savora'), to('sibling', 'mar-zutra-bar-rav-chinena')], offices: [PUM(4279, 4286, ['ravina-meamutzya'], ['rav-simona'])], sources: [IRSG, STA],
    sections: [TS('אביו היה רב חנינא הסבורא, ואחיו מר זוטרא. הוא עמד בראש ישיבת פומבדיתא אחרי רבינא מאמוציא, רבו, ואחריו רב סימונא.', 'His father was Rav Chanina the Savora, and his brother Mar Zutra. He headed the Pumbedita yeshivah after Ravina of Amutzya, his teacher, and after him came Rav Simona.')],
  }),
  S({
    slug: 'mar-zutra-bar-rav-chinena', spot2: 'מר זוטרא בן רב חיננא', cats: ['savoraim'], roles: [SAVORA],
    name: L('מר זוטרא בר רב חיננא', 'Mar Zutra bar Rav Chinena'), summary: L('בנו של רב חנינא הסבורא, אחיו של רב תחנינא.', 'Son of Rav Chanina the Savora, brother of Rav Tachnina.'),
    rel: [to('father', 'rav-chanina-savora')], sources: [IRSG, STA],
    sections: one('מר זוטרא בר רב חיננא', 'מר זוטרא, בנו של רב חנינא (חיננא) הסבורא ואחיו של רב תחנינא, היה מן הסבוראים. אין להחליפו במר זוטרא ראש הגולה, בן דורו.', 'Mar Zutra bar Rav Chinena', 'Mar Zutra, the son of Rav Chanina (Chinena) the Savora and brother of Rav Tachnina, was one of the Savoraim. He is not to be confused with Mar Zutra the Head of the Exile, his contemporary.'),
  }),
  S({
    slug: 'rav-simona', spot2: 'רב סימונא', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב סימונא', 'Rav Simona'), summary: L('ראש ישיבת פומבדיתא האחרון לפני ביטול הישיבות.', 'The last head of the Pumbedita yeshivah before the yeshivot were closed.'),
    rel: [to('plugta', 'rav-eina-savora'), to('related', BITUL)], offices: [PUM(4286, 4300, ['rav-tachnina'], [])], sources: [IRSG, STA],
    sections: [
      SAVORAIM,
      TS('הוא עמד בראש ישיבת פומבדיתא אחרי רב תחנינא, רבו, ורב עינא, ראש ישיבת סורא, היה בר פלוגתיה. תלמידיהם המשיכו את התורה בימים שבהם בטלו הישיבות.', 'He headed the Pumbedita yeshivah after Rav Tachnina, his teacher, and Rav Eina, head of the Sura yeshivah, was his bar plugta. Their students carried on the Torah in the days when the yeshivot were closed.'),
      BITUL_TEXT,
    ],
  }),

  // ── Sura ──
  S({
    slug: 'rabbana-sama', spot2: 'רבנא סמא בר רבנא יהודה', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רבנא סמא בר רבנא יהודה', 'Rabbana Sama bar Rabbana Yehudah'), summary: L('ראש ישיבת סורא אחרי רבינא, האחרון שבאמוראים.', 'Head of the Sura yeshivah after Ravina, the last of the Amoraim.'),
    rel: [], offices: [SURA(4260, 4264, ['ravina-2'], ['rav-eina-savora'])], sources: [IRSG, STA],
    sections: [SAVORAIM, TS('הוא עמד בראש ישיבת סורא אחרי רבינא, רבו, ואחריו רב עינא.', 'He headed the Sura yeshivah after Ravina, his teacher, and after him came Rav Eina.')],
  }),
  S({
    slug: 'rav-eina-savora', spot2: 'רב עינא (רב גיזא?)', cats: ['savoraim'], roles: [SAVORA, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רב עינא (רב גיזא?)', 'Rav Eina (Rav Giza?)'), summary: L('ראש ישיבת סורא האחרון לפני ביטול הישיבות.', 'The last head of the Sura yeshivah before the yeshivot were closed.'),
    rel: [to('teacher', 'ravina-2'), to('related', BITUL)], offices: [SURA(4274, 4300, ['rabbana-sama'], [])], sources: [IRSG, STA],
    sections: [
      SAVORAIM,
      sec('רב עינא או רב גיזא', 'באיגרת רב שרירא גאון הוא נקרא "רב עינא", ובמקורות אחרים "רב גיזא" – ולכן באילן שלנו כתוב לידו "רב גיזא?" בסימן שאלה: לא ברור אם שני השמות הם של אדם אחד.', 'Rav Eina or Rav Giza', 'In the Letter of Rav Sherira Gaon he is called "Rav Eina", and in other sources "Rav Giza" – so on our tree "Rav Giza?" is written beside him with a question mark: it is not clear whether the two names belong to one man.'),
      TS('רבו היה רבינא, ורבנא סמא, שאחריו עמד בראש ישיבת סורא. רב סימונא, ראש ישיבת פומבדיתא, היה בר פלוגתיה.', 'His teacher was Ravina, and Rabbana Sama, after whom he headed the Sura yeshivah. Rav Simona, head of the Pumbedita yeshivah, was his bar plugta.'),
      BITUL_TEXT,
    ],
  }),
  S({
    slug: 'rav-acha-bar-nehilai', spot2: 'רב אחא בר נהילאי', cats: ['savoraim'], roles: [SAVORA],
    name: L('רב אחא בר נהילאי', 'Rav Acha bar Nehilai'), summary: L('מן הסבוראים.', 'One of the Savoraim.'),
    rel: [], sources: [STA],
    sections: [SAVORAIM],
  }),
  S({
    slug: 'rav-achadboi', spot2: 'רב אחדבוי', cats: ['savoraim'], roles: [SAVORA],
    name: L('רב אחדבוי', 'Rav Achadboi'), summary: L('מן הסבוראים.', 'One of the Savoraim.'),
    rel: [], sources: [STA],
    sections: [SAVORAIM],
  }),
  S({
    slug: 'rav-yitzhak-reish-metivta', spot2: 'רב יצחק ריש מתיבתא', cats: ['savoraim'], roles: [L('ריש מתיבתא', 'Reish Metivta'), L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('רב יצחק ריש מתיבתא', 'Rav Yitzhak, Reish Metivta'), summary: L('ראש ישיבה, אולי במחוזא, רבו של מר זוטרא, שנהרג על קידוש השם.', 'A head of a yeshivah, perhaps in Mechoza, Mar Zutra’s teacher, who was killed for the sanctification of God’s Name.'),
    rel: [to('teacher', 'rav-chanina-reish-metivta')], sources: [SOZ10],
    sections: [
      sec('רב יצחק ריש מתיבתא', 'סדר עולם זוטא מונה את רב יצחק – יחד עם רב חנינא ורב סמא – בין החכמים של מר זוטרא ראש הגולה, ומספר ש"בימיו נהרג מר רב יצחק ריש מתיבתא" – ולכן באילן שלנו יש להבה ליד שמו.', 'Rav Yitzhak, Reish Metivta', 'Seder Olam Zuta counts Rav Yitzhak – together with Rav Chanina and Rav Sama – among the sages of Mar Zutra the Head of the Exile, and relates that "in his days Mar Rav Yitzhak Reish Metivta was killed" – so on our tree there is a flame beside his name.'),
      sec('אולי במחוזא', 'באילן שלנו כתוב שהיה ראש ישיבה "אולי במחוזא", משום שהיה מחכמיו של מר זוטרא, שמלך במחוזא ונצלב על גשר מחוזא. המקור אינו אומר במפורש היכן הייתה ישיבתו, ולכן זה אינו ודאי.', 'Perhaps in Mechoza', 'On our tree it is written that he headed a yeshivah "perhaps in Mechoza", because he was one of the sages of Mar Zutra, who reigned in Mechoza and was crucified on the bridge of Mechoza. The source does not say outright where his yeshivah was, so this is not certain.'),
      TS('רבו היה רב חנינא ריש מתיבתא, ותלמידו היה מר זוטרא ראש הגולה.', 'His teacher was Rav Chanina Reish Metivta, and his student was Mar Zutra the Head of the Exile.'),
    ],
  }),

  // ── the Heads of the Exile ──
  S({
    slug: 'rav-huna-bar-rav-kahana', spot2: 'רב הונא בר רב כהנא', cats: ['rashei-hagola', 'tekufat-hasavoraim'], roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('רב הונא בר רב כהנא', 'Rav Huna bar Rav Kahana'), summary: L('ראש הגולה, בעלה של בת רב חנינא ואביו של מר זוטרא.', 'Head of the Exile, the husband of Rav Chanina’s daughter and father of Mar Zutra.'),
    rel: [to('father', 'kahana-2'), to('spouse', 'bat-rav-chanina')], offices: [RG(['rav-huna-mar'], ['rav-pachda'], 4244, 4268)], sources: [SOZ10],
    sections: [MAR_ZUTRA, sec('ראש הגולה', 'רב הונא, בנו של כהנא השני, עמד בראש הגולה אחרי רב הונא מר. ' + RG_SOURCES, 'Head of the Exile', 'Rav Huna, the son of Kahana II, headed the Exile after Rav Huna Mar. ' + RG_SOURCES_EN)],
  }),
  F({
    slug: 'bat-rav-chanina', spot2: 'בת רב חנינא', cats: ['tekufat-hasavoraim'],
    name: L('בת רב חנינא', 'The daughter of Rav Chanina'), summary: L('בתו של רב חנינא ריש מתיבתא, אשת רב הונא ראש הגולה ואם מר זוטרא.', 'The daughter of Rav Chanina Reish Metivta, the wife of Rav Huna the Head of the Exile and mother of Mar Zutra.'),
    rel: [to('father', 'rav-chanina-reish-metivta')], sources: [SOZ10],
    sections: [MAR_ZUTRA],
  }),
  S({
    slug: 'rav-pachda', spot2: 'רב פחדא', cats: ['rashei-hagola', 'tekufat-hasavoraim'], roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('רב פחדא', 'Rav Pachda'), summary: L('חתנו של בית דוד, שקנה את ראשות הגולה בשוחד עד שהסירו מר זוטרא.', 'A son-in-law of the house of David, who bought the office of Head of the Exile with a bribe until Mar Zutra removed him.'),
    rel: [to('spouse', 'bat-rashei-hagola')], offices: [RG(['rav-huna-bar-rav-kahana'], ['mar-zutra-3'], 4268, 4283)], sources: [SOZ10],
    sections: [
      sec('רב פחדא', 'רב פחדא היה "חתנא דבי דוד" – חתנו של בית דוד, ואשתו הייתה בת למשפחת ראשי הגולה, אבל המקורות אינם אומרים של מי מהם. כשמתו כל בני ביתו של רב הונא ראש הגולה, נתן שוחד למלך וקיבל את ראשות הגולה. מר זוטרא, כשהיה בן חמש עשרה, הלך עם ראש הישיבה אל המלך והסיר אותו. לפי סדר עולם זוטא, רב פחדא מת זמן קצר אחר כך. באילן שלנו יורד אל אשתו קו מנוקד בסימן שאלה ממשפחת ראשי הגולה, משום שאין ידוע בתו של מי הייתה.', 'Rav Pachda', 'Rav Pachda was a "son-in-law of the house of David", and his wife was of the family of the Heads of the Exile, but the sources do not say whose daughter she was. When all the household of Rav Huna the Head of the Exile died, he gave a bribe to the king and received the office of Head of the Exile. Mar Zutra, when he was fifteen, went with the head of the yeshivah to the king and removed him. By Seder Olam Zuta, Rav Pachda died a short time afterwards. On our tree a dotted line with a question mark comes down to his wife from the family of the Heads of the Exile, since it is not known whose daughter she was.'),
      MAR_ZUTRA,
    ],
  }),
  F({
    slug: 'bat-rashei-hagola', spot2: 'בת ראשי הגולה', cats: ['tekufat-hasavoraim'],
    name: L('בת ראשי הגולה', 'The daughter of the Heads of the Exile'), summary: L('אשתו של רב פחדא, בת למשפחת ראשי הגולה.', 'The wife of Rav Pachda, a daughter of the family of the Heads of the Exile.'),
    rel: [], sources: [SOZ10],
    sections: one('בת ראשי הגולה', 'אשתו של רב פחדא הייתה בת למשפחת ראשי הגולה – ולכן נקרא רב פחדא "חתנא דבי דוד" – אבל המקורות אינם אומרים בתו של מי הייתה. לכן באילן שלנו יורד אליה קו מנוקד בסימן שאלה ממשפחת ראשי הגולה.', 'The Daughter of the Heads of the Exile', 'Rav Pachda’s wife was a daughter of the family of the Heads of the Exile – so Rav Pachda is called "a son-in-law of the house of David" – but the sources do not say whose daughter she was. So on our tree a dotted line with a question mark comes down to her from the family of the Heads of the Exile.'),
  }),
  S({
    slug: 'mar-zutra-3', spot2: 'מר זוטרא ג׳', cats: ['rashei-hagola', 'tekufat-hasavoraim'], roles: [L('ראש הגולה', 'Head of the Exile'), L('מלך מחוזא', 'King of Mechoza'), L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('מר זוטרא ג׳', 'Mar Zutra III'), summary: L('ראש הגולה שמרד בפרסים ומלך במחוזא שבע שנים, עד שנצלב על גשר מחוזא.', 'The Head of the Exile who rebelled against the Persians and reigned in Mechoza seven years, until he was crucified on the bridge of Mechoza.'),
    rel: [to('father', 'rav-huna-bar-rav-kahana'), to('mother', 'bat-rav-chanina'), to('teacher', 'rav-chanina-reish-metivta'), to('teacher', 'rav-yitzhak-reish-metivta'), to('related', BITUL)],
    offices: [RG(['rav-pachda'], [], 4283, 4296), KING(4296, 4303, [], [])], sources: [SOZ10, IRSG],
    sections: [
      MAR_ZUTRA,
      TS('רבותיו היו סבו רב חנינא ריש מתיבתא, שגידל אותו, ורב יצחק ריש מתיבתא. בנו, מר זוטרא הרביעי, עלה לארץ ישראל.', 'His teachers were his grandfather Rav Chanina Reish Metivta, who raised him, and Rav Yitzhak Reish Metivta. His son, Mar Zutra IV, went up to the Land of Israel.'),
      BITUL_TEXT,
    ],
  }),
  // the black bar on the poster
  S({
    slug: BITUL, kind: 'other', spot2: 'ביטול הישיבות וראשות הגולה בבבל לכחמישים שנה', cats: ['events-second-tree'], color: 'ink',
    roles: [L('אירוע', 'Event')], life: [4303, null],
    name: L('ביטול הישיבות וראשות הגולה בבבל לכחמישים שנה', 'The Closing of the Yeshivot and of the Office of Head of the Exile in Bavel for About Fifty Years'),
    summary: L('אחרי מרד מר זוטרא בטלו הישיבות וראשות הגולה בבבל לכחמישים שנה.', 'After Mar Zutra’s revolt the yeshivot and the office of Head of the Exile in Bavel were closed for about fifty years.'),
    rel: [], sources: [IRSG, SOZ10],
    sections: [BITUL_TEXT, MAR_ZUTRA],
  }),

  // ── the last kings of Himyar ──
  S({
    slug: 'lachniah-yanuf', spot2: 'לחניעה ינוף', cats: ['kings-himyar'], roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('לחניעה ינוף', 'Lahay’at Yanuf'), summary: L('מלך חמיר.', 'King of Himyar.'),
    rel: [to('father', 'sharchavil-yakkuf')], offices: [KING(4240, 4262, [], [])], sources: [HIM],
    sections: one('לחניעה ינוף', 'לחניעה ינוף מלך בחמיר בסוף המאה החמישית למניינם. באילן שלנו יורד אליו קו משרחביל יכף, וממנו קו אל מרתדאילן יוענם.', 'Lahay’at Yanuf', 'Lahay’at Yanuf reigned in Himyar at the end of the fifth century CE. On our tree a line comes down to him from Sharchavil Yakkuf, and from him a line to Martad’ilan Yu’nim.'),
  }),
  S({
    slug: 'martadilan-yunim', spot2: 'מרתדאילן יוענם', cats: ['kings-himyar'], roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('מרתדאילן יוענם', 'Martad’ilan Yu’nim'), summary: L('מלך חמיר, שאחריו מלכו שני מלכים נוצרים.', 'King of Himyar, after whom two Christian kings reigned.'),
    rel: [to('father', 'lachniah-yanuf')], offices: [KING(4262, 4264, ['lachniah-yanuf'], ['yosef-dhu-nuwas'])], sources: [HIM],
    sections: one('מרתדאילן יוענם', 'מרתדאילן יוענם מלך בחמיר שנים מעטות. אחריו הושיבה ממלכת אכסום הנוצרית שני מלכים נוצרים על כס חמיר – ולכן באילן שלנו כתוב בינו ובין יוסף ד׳ו נואס "שני מלכים נוצרים".', 'Martad’ilan Yu’nim', 'Martad’ilan Yu’nim reigned in Himyar for a few years. After him the Christian kingdom of Aksum placed two Christian kings on the throne of Himyar – so on our tree "two Christian kings" is written between him and Yosef Dhu Nuwas.'),
  }),
  S({
    slug: 'yosef-dhu-nuwas', spot2: 'יוסף ד׳ו נואס', cats: ['kings-himyar'], roles: [L('מלך חמיר היהודי האחרון', 'The last Jewish king of Himyar')],
    name: L('יוסף ד׳ו נואס', 'Yosef Dhu Nuwas'), summary: L('המלך היהודי האחרון של חמיר, שנפל במלחמה בצבא אכסום הנוצרי.', 'The last Jewish king of Himyar, who fell in the war against the Christian army of Aksum.'),
    rel: [to('related', HIMYAR_END)], offices: [KING(4282, 4287, ['martadilan-yunim'], [])],
    sources: [HIM, L('פרוקופיוס, מלחמות פרס א, כ', 'Procopius, The Persian Wars 1.20'), L('ספר החמירים', 'The Book of the Himyarites')],
    sections: [DHU_NUWAS],
  }),
  S({
    slug: HIMYAR_END, kind: 'other', spot2: 'כיבוש חמיר ע"י האתיופים הנוצרים', cats: ['events-second-tree', 'kings-himyar'], color: 'ink',
    roles: [L('אירוע', 'Event')], life: [4285, null],
    name: L('כיבוש חמיר על ידי האתיופים הנוצרים', 'The Conquest of Himyar by the Christian Ethiopians'),
    summary: L('צבא אכסום הנוצרי כבש את חמיר, ובזה הסתיימה המלכות היהודית בתימן.', 'The Christian army of Aksum conquered Himyar, ending the Jewish kingdom in Yemen.'),
    rel: [], sources: [L('פרוקופיוס, מלחמות פרס א, כ', 'Procopius, The Persian Wars 1.20'), HIM],
    sections: [DHU_NUWAS],
  }),
];
