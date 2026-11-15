// The Talmud tree, the Savoraim after the closing of the yeshivot: the students
// of Rav Eina, Rav Simona and Rav Rabai who opened the yeshivot again, and the
// heads of Sura, Pumbedita and Piruz-Shabur down to Rav Sheshna and Rav Bosai.
// (The Heads of the Exile of these years come in a batch of their own.)
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const S = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', ...e, color: e.color || row[1] };
};
const SAVORA = L('סבורא', 'Savora');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const SURA = (from, to2, before, after) => HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', from, to2, before, after);
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const PIRUZ = (from, to2, before, after) => HEAD('ראש ישיבת פירוז שבור', 'Head of the Piruz-Shabur yeshivah', from, to2, before, after);
const R_SURA = L('ראש ישיבת סורא', 'Head of the Sura yeshivah');
const R_PUM = L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah');
const R_PIRUZ = L('ראש ישיבת פירוז שבור', 'Head of the Piruz-Shabur yeshivah');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const PILL = [to('teacher', 'rav-eina-savora'), to('teacher', 'rav-simona'), to('teacher', 'rav-rabai-mirov')];
const STUDENTS = sec('תלמידי רב עינא, רב סימונא ורב רבאי',
  'בשנים שבהן היו הישיבות בבבל סגורות המשיכו תלמידיהם של רב עינא, רב סימונא ורב רבאי את לימוד התורה. מתוכם קמו החכמים שפתחו את הישיבות מחדש בסוף המאה השישית למניינם – רב חנן מאשקיא בפומבדיתא, רב מר בר רב הונא ואחריו רב חנינא בסורא, ורב מרי בר רב דימי ורב חנינאי בפירוז שבור. באילן שלנו יורדים קווים מן הכיתוב "תלמידי רב עינא, רב סימונא ורב רבאי" אל כל אחד מהם – וגם אל רב יצחק, ראש ישיבת פירוז שבור בדור שאחריהם, שלמד מהם.',
  'The Students of Rav Eina, Rav Simona and Rav Rabai',
  'In the years when the yeshivot in Bavel were closed, the students of Rav Eina, Rav Simona and Rav Rabai carried on the study of Torah. From among them rose the sages who opened the yeshivot again at the end of the sixth century CE – Rav Chanan of Ashkaya in Pumbedita, Rav Mar bar Rav Huna and after him Rav Chanina in Sura, and Rav Mari bar Rav Dimi and Rav Chaninai in Piruz-Shabur. On our tree lines go down from the label "the students of Rav Eina, Rav Simona and Rav Rabai" to each of them – and also to Rav Yitzhak, head of the Piruz-Shabur yeshivah in the generation after them, who learned from them.');
const PIRUZ_TEXT = sec('ישיבת פירוז שבור',
  'פירוז שבור הייתה עיר על הפרת, סמוך לנהרדעא. בימי הסבוראים ובתחילת ימי הגאונים עמדה בה ישיבה, ובה ישבו חכמים שנמנו עם ישיבת פומבדיתא.',
  'The Yeshivah of Piruz-Shabur',
  'Piruz-Shabur was a city on the Euphrates, near Nehardea. In the days of the Savoraim and the start of the days of the Geonim a yeshivah stood there, whose sages were counted with the yeshivah of Pumbedita.');
const ALI = sec('רב יצחק ועלי בן אבי טאלב',
  'בימיו כבשו הערבים את בבל. רב שרירא גאון מספר באיגרתו שכאשר כבש עלי בן אבי טאלב את פירוז שבור, יצא לקראתו רב יצחק, ראש הישיבה, ועמו תשעים אלף יהודים, וקיבל אותו בכבוד, והח׳ליף נהג ביהודים בכבוד.',
  'Rav Yitzhak and Ali ibn Abi Talib',
  'In his days the Arabs conquered Bavel. Rav Sherira Gaon relates in his Letter that when Ali ibn Abi Talib conquered Piruz-Shabur, Rav Yitzhak, the head of the yeshivah, went out to meet him with ninety thousand Jews, and received him with honour, and the Caliph treated the Jews with honour.');

module.exports = [
  S({
    slug: 'rav-rabai-mirov', spot2: 'רב רבאי מרוב', cats: ['savoraim', 'roshei-yeshivat-piruz-shabur'], roles: [SAVORA, R_PIRUZ],
    name: L('רב רבאי מרוב', 'Rav Rabai of Rov'), summary: L('מאחרוני הסבוראים, שתלמידיו המשיכו את התורה בימים שבהם היו הישיבות סגורות.', 'One of the last Savoraim, whose students carried on the Torah in the days when the yeshivot were closed.'),
    rel: [], offices: [PIRUZ(4300, 4349, [], [])], sources: [IRSG],
    sections: [sec('רב רבאי', 'רב רבאי, מן העיר רוב, עמד בראש הישיבה בפירוז שבור בימים שבהם היו הישיבות בבבל סגורות. באילן שלנו יורד ממנו קו אל הכיתוב "תלמידי רב עינא, רב סימונא ורב רבאי".', 'Rav Rabai', 'Rav Rabai, of the town of Rov, headed the yeshivah in Piruz-Shabur in the days when the yeshivot in Bavel were closed. On our tree a line goes down from him to the label "the students of Rav Eina, Rav Simona and Rav Rabai".'), STUDENTS, PIRUZ_TEXT],
  }),
  // ── Pumbedita ──
  S({
    slug: 'rav-chanan-meashkaya', spot2: 'רב חנן מאשקיא', cats: ['savoraim', 'roshei-yeshivat-pumbedita'], roles: [SAVORA, R_PUM],
    name: L('רב חנן מאשקיא', 'Rav Chanan of Ashkaya'), summary: L('שפתח מחדש את ישיבת פומבדיתא אחרי שנות הסגירה.', 'Who opened the Pumbedita yeshivah again after the years it was closed.'),
    rel: PILL, offices: [PUM(4349, 4368, [], ['rav-mari-bar-rav-dimi'])], sources: [IRSG],
    sections: [sec('רב חנן מאשקיא', 'רב חנן, מן העיר אשקיא, פתח מחדש את ישיבת פומבדיתא בסביבות שנת 4349 (589 למניינם), אחרי שנות הסגירה. לפי איגרת רב שרירא גאון, מימיו ואילך נקראו ראשי הישיבות "גאונים".', 'Rav Chanan of Ashkaya', 'Rav Chanan, of the town of Ashkaya, opened the Pumbedita yeshivah again around 4349 (589 CE), after the years it was closed. By the Letter of Rav Sherira Gaon, from his days on the heads of the yeshivot were called "Geonim".'), STUDENTS, TS('הוא היה מתלמידי רב עינא, רב סימונא ורב רבאי. אחריו עמד בראש ישיבת פומבדיתא רב מרי בר רב דימי, ותלמידו היה רב יצחק, ראש ישיבת פירוז שבור.', 'He was one of the students of Rav Eina, Rav Simona and Rav Rabai. After him Rav Mari bar Rav Dimi headed the Pumbedita yeshivah, and his student was Rav Yitzhak, head of the Piruz-Shabur yeshivah.')],
  }),
  S({
    slug: 'rav-mari-bar-rav-dimi', spot2: 'רב מרי בר רב דימי', cats: ['savoraim', 'roshei-yeshivat-pumbedita', 'roshei-yeshivat-piruz-shabur'], roles: [SAVORA, R_PIRUZ, R_PUM],
    name: L('רב מרי בר רב דימי', 'Rav Mari bar Rav Dimi'), summary: L('ראש ישיבת פירוז שבור ואחר כך ראש ישיבת פומבדיתא, מאבותיו של רב שרירא גאון.', 'Head of the Piruz-Shabur yeshivah and then of the Pumbedita yeshivah, one of the forefathers of Rav Sherira Gaon.'),
    rel: [...PILL, to('ancestor', 'rabba-bar-avuha')],
    offices: [PIRUZ(4349, 4368, [], ['rav-chaninai-mibei-gihara']), PUM(4368, 4380, ['rav-chanan-meashkaya'], ['rav-chana-pumbedita'])], sources: [IRSG],
    sections: [
      sec('רב מרי בר רב דימי', 'רב מרי בר רב דימי עמד תחילה בראש הישיבה בפירוז שבור, ואחר כך עבר לעמוד בראש ישיבת פומבדיתא, אחרי רב חנן מאשקיא – ולכן באילן שלנו תיבתו צבועה בשני צבעים.', 'Rav Mari bar Rav Dimi', 'Rav Mari bar Rav Dimi first headed the yeshivah in Piruz-Shabur, and afterwards went on to head the Pumbedita yeshivah, after Rav Chanan of Ashkaya – so on our tree his box is in two colours.'),
      sec('מאבותיו של רב שרירא גאון', 'רב שרירא גאון מונה אותו באיגרתו בין אבותיו, צאצאי רבה בר אבוה. באילן שלנו עובר בו הקו המנוקד היורד מרבה בר אבוה, לצד שושלת ראשי הגולה, אל משפחתו של רב שרירא גאון.', 'One of the Forefathers of Rav Sherira Gaon', 'Rav Sherira Gaon counts him in his Letter among his forefathers, the descendants of Rabba bar Avuha. On our tree the dotted line going down from Rabba bar Avuha, beside the line of the Heads of the Exile, to the family of Rav Sherira Gaon passes through him.'),
      STUDENTS, PIRUZ_TEXT,
    ],
  }),
  S({
    slug: 'rav-chana-pumbedita', spot2: 'רב חנא (הונא)', cats: ['savoraim', 'roshei-yeshivat-pumbedita'], roles: [SAVORA, R_PUM],
    name: L('רב חנא (הונא)', 'Rav Chana (Huna)'), summary: L('ראש ישיבת פומבדיתא אחרי רב מרי בר רב דימי.', 'Head of the Pumbedita yeshivah after Rav Mari bar Rav Dimi.'),
    rel: [], offices: [PUM(4380, 4411, ['rav-mari-bar-rav-dimi'], ['rav-rava-pumbedita'])], sources: [IRSG],
    sections: [sec('רב חנא', 'רב חנא – ובנוסחאות אחרות "רב הונא" – עמד בראש ישיבת פומבדיתא כשלושים שנה, אחרי רב מרי בר רב דימי, רבו, ואחריו רב רבא.', 'Rav Chana', 'Rav Chana – in other versions "Rav Huna" – headed the Pumbedita yeshivah for some thirty years, after Rav Mari bar Rav Dimi, his teacher, and after him came Rav Rava.')],
  }),
  S({
    slug: 'rav-rava-pumbedita', spot2: 'רב רבא', cats: ['savoraim', 'roshei-yeshivat-pumbedita'], roles: [SAVORA, R_PUM],
    name: L('רב רבא (ראש ישיבת פומבדיתא)', 'Rav Rava (head of the Pumbedita yeshivah)'), summary: L('ראש ישיבת פומבדיתא אחרי רב חנא.', 'Head of the Pumbedita yeshivah after Rav Chana.'),
    rel: [to('ancestor', 'ameimar')], offices: [PUM(4411, 4420, ['rav-chana-pumbedita'], ['rav-bosai'])], sources: [IRSG],
    sections: [sec('מצאצאי אמימר', 'באילן שלנו יורד אל רב רבא קו מנוקד מאמימר, ראש ישיבת נהרדעא בדור החמישי של האמוראים: קו כזה מסמן כמה דורות, ורב רבא היה מצאצאיו של אמימר, שישבו בנהרדעא ובפומבדיתא.', 'Of the Descendants of Ameimar', 'On our tree a dotted line comes down to Rav Rava from Ameimar, head of the Nehardea yeshivah in the fifth generation of the Amoraim: such a line marks several generations, and Rav Rava was one of the descendants of Ameimar, who lived in Nehardea and Pumbedita.'), TS('הוא עמד בראש ישיבת פומבדיתא אחרי רב חנא, רבו, ואחריו רב בוסאי. אין להחליפו ברבא האמורא.', 'He headed the Pumbedita yeshivah after Rav Chana, his teacher, and after him came Rav Bosai. He is not to be confused with Rava the Amora.')],
  }),
  S({
    slug: 'rav-bosai', spot2: 'רב בוסאי (בוסתנאי)', cats: ['savoraim', 'roshei-yeshivat-pumbedita'], roles: [SAVORA, R_PUM],
    name: L('רב בוסאי (בוסתנאי)', 'Rav Bosai (Bustenai)'), summary: L('ראש ישיבת פומבדיתא, מאחרוני הסבוראים.', 'Head of the Pumbedita yeshivah, one of the last Savoraim.'),
    rel: [], offices: [PUM(4420, 4449, ['rav-rava-pumbedita'], [])], sources: [IRSG],
    sections: [sec('רב בוסאי', 'רב בוסאי – ובנוסחאות אחרות "רב בוסתנאי" – עמד בראש ישיבת פומבדיתא כשלושים שנה, אחרי רב רבא, רבו. אין להחליפו בבוסתנאי ראש הגולה, בן דורו.', 'Rav Bosai', 'Rav Bosai – in other versions "Rav Bustenai" – headed the Pumbedita yeshivah for some thirty years, after Rav Rava, his teacher. He is not to be confused with Bustenai the Head of the Exile, his contemporary.')],
  }),
  // ── Piruz-Shabur ──
  S({
    slug: 'rav-chaninai-mibei-gihara', spot2: 'רב חנינאי מבי גיהרא', cats: ['savoraim', 'roshei-yeshivat-piruz-shabur'], roles: [SAVORA, R_PIRUZ],
    name: L('רב חנינאי מבי גיהרא', 'Rav Chaninai of Bei Gihara'), summary: L('ראש ישיבת פירוז שבור אחרי רב מרי בר רב דימי.', 'Head of the Piruz-Shabur yeshivah after Rav Mari bar Rav Dimi.'),
    rel: PILL, offices: [PIRUZ(4368, 4396, ['rav-mari-bar-rav-dimi'], ['rav-yitzhak-piruz-shabur'])], sources: [IRSG],
    sections: [STUDENTS, PIRUZ_TEXT, TS('הוא היה מתלמידי רב עינא, רב סימונא ורב רבאי, ועמד בראש הישיבה בפירוז שבור אחרי רב מרי בר רב דימי. אחריו עמד בראשה רב יצחק.', 'He was one of the students of Rav Eina, Rav Simona and Rav Rabai, and headed the yeshivah in Piruz-Shabur after Rav Mari bar Rav Dimi. After him Rav Yitzhak headed it.')],
  }),
  S({
    slug: 'rav-yitzhak-piruz-shabur', spot2: 'רב יצחק', cats: ['savoraim', 'roshei-yeshivat-piruz-shabur'], roles: [SAVORA, R_PIRUZ],
    name: L('רב יצחק (ראש ישיבת פירוז שבור)', 'Rav Yitzhak (head of the Piruz-Shabur yeshivah)'), summary: L('ראש ישיבת פירוז שבור, שיצא לקראת עלי בן אבי טאלב.', 'Head of the Piruz-Shabur yeshivah, who went out to meet Ali ibn Abi Talib.'),
    rel: [to('teacher', 'rav-chanan-meashkaya'), { type: 'teacher', he: 'תלמידי רב עינא, רב סימונא ורב רבאי', en: 'The students of Rav Eina, Rav Simona and Rav Rabai' }], offices: [PIRUZ(4396, 4420, ['rav-chaninai-mibei-gihara'], [])], sources: [IRSG],
    sections: [ALI, STUDENTS, PIRUZ_TEXT, TS('רבותיו היו רב חנן מאשקיא, "תלמידי רב עינא, רב סימונא ורב רבאי" – חכמי הדור שלפניו – ורב חנינאי, שאחריו עמד בראש הישיבה בפירוז שבור.', 'His teachers were Rav Chanan of Ashkaya, "the students of Rav Eina, Rav Simona and Rav Rabai" – the sages of the generation before him – and Rav Chaninai, after whom he headed the yeshivah in Piruz-Shabur.')],
  }),
  // ── Sura ──
  S({
    slug: 'rav-mar-bar-rav-huna', spot2: 'רב מר בר רב הונא', cats: ['savoraim', 'roshei-yeshivat-sura'], roles: [SAVORA, R_SURA],
    name: L('רב מר בר רב הונא', 'Rav Mar bar Rav Huna'), summary: L('שפתח מחדש את ישיבת סורא אחרי שנות הסגירה.', 'Who opened the Sura yeshivah again after the years it was closed.'),
    rel: PILL, offices: [SURA(4351, 4380, [], ['rav-chanina-gaon'])], sources: [IRSG],
    sections: [sec('רב מר בר רב הונא', 'רב מר בר רב הונא פתח מחדש את ישיבת סורא בסביבות שנת 4351 (591 למניינם), אחרי שנות הסגירה, ועמד בראשה כשלושים שנה.', 'Rav Mar bar Rav Huna', 'Rav Mar bar Rav Huna opened the Sura yeshivah again around 4351 (591 CE), after the years it was closed, and headed it for some thirty years.'), STUDENTS],
  }),
  S({
    slug: 'rav-chanina-gaon', spot2: 'רב חנינא גאון', cats: ['savoraim', 'roshei-yeshivat-sura'], roles: [SAVORA, R_SURA],
    name: L('רב חנינא גאון', 'Rav Chanina Gaon'), summary: L('ראש ישיבת סורא אחרי רב מר בר רב הונא.', 'Head of the Sura yeshivah after Rav Mar bar Rav Huna.'),
    rel: PILL, offices: [SURA(4380, 4410, ['rav-mar-bar-rav-huna'], ['rav-huna-gaon'])], sources: [IRSG],
    sections: [STUDENTS, TS('הוא היה מתלמידי רב עינא, רב סימונא ורב רבאי, ועמד בראש ישיבת סורא אחרי רב מר בר רב הונא. אחריו עמד בראשה רב הונא גאון.', 'He was one of the students of Rav Eina, Rav Simona and Rav Rabai, and headed the Sura yeshivah after Rav Mar bar Rav Huna. After him Rav Huna Gaon headed it.')],
  }),
  S({
    slug: 'rav-huna-gaon', spot2: 'רב הונא גאון', cats: ['savoraim', 'roshei-yeshivat-sura'], roles: [SAVORA, R_SURA],
    name: L('רב הונא גאון', 'Rav Huna Gaon'), summary: L('ראש ישיבת סורא אחרי רב חנינא גאון.', 'Head of the Sura yeshivah after Rav Chanina Gaon.'),
    rel: [], offices: [SURA(4410, 4420, ['rav-chanina-gaon'], ['rav-sheshna-gaon'])], sources: [IRSG],
    sections: [TS('הוא עמד בראש ישיבת סורא אחרי רב חנינא גאון, רבו, ואחריו רב ששנא.', 'He headed the Sura yeshivah after Rav Chanina Gaon, his teacher, and after him came Rav Sheshna.')],
  }),
  S({
    slug: 'rav-sheshna-gaon', spot2: 'משרשיא בר תחליפא "רב ששנא גאון"', cats: ['savoraim', 'roshei-yeshivat-sura'], roles: [L('אחרון הסבוראים', 'The last of the Savoraim'), R_SURA],
    name: L('רב ששנא גאון (משרשיא בר תחליפא)', 'Rav Sheshna Gaon (Mesharshya bar Tachlifa)'), summary: L('ראש ישיבת סורא ואחרון הסבוראים.', 'Head of the Sura yeshivah and the last of the Savoraim.'),
    rel: [], offices: [SURA(4420, 4449, ['rav-huna-gaon'], [])], sources: [IRSG],
    sections: [
      sec('רב ששנא', 'רב ששנא, ששמו המלא משרשיא בר תחליפא, עמד בראש ישיבת סורא כשלושים שנה, אחרי רב הונא גאון, רבו. בימיו נכבשה בבל בידי הערבים.', 'Rav Sheshna', 'Rav Sheshna, whose full name was Mesharshya bar Tachlifa, headed the Sura yeshivah for some thirty years, after Rav Huna Gaon, his teacher. In his days Bavel was conquered by the Arabs.'),
      sec('אחרון הסבוראים', 'באילן שלנו הוא נקרא "אחרון הסבוראים", ואחריו מתחילים הגאונים. הגבול בין תקופת הסבוראים לתקופת הגאונים שנוי במחלוקת: לפי איגרת רב שרירא גאון התואר "גאון" התחיל כבר בימי רב חנן מאשקיא ורב מר בר רב הונא, שפתחו מחדש את הישיבות, ויש המאריכים את תקופת הסבוראים עד ימי רב ששנא ורב בוסאי.', 'The Last of the Savoraim', 'On our tree he is called "the last of the Savoraim", and after him begin the Geonim. The border between the period of the Savoraim and that of the Geonim is debated: by the Letter of Rav Sherira Gaon the title "Gaon" began already in the days of Rav Chanan of Ashkaya and Rav Mar bar Rav Huna, who opened the yeshivot again, and some extend the period of the Savoraim to the days of Rav Sheshna and Rav Bosai.'),
    ],
  }),
];
