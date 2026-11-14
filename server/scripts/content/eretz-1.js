// The yeshivah of the Land of Israel, first part: Mar Zutra bar Mar Zutra and
// the heads of the yeshivah in Tiberias after him, the revolt against
// Heraclius, Asaf HaRofe and Seria.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const E = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', roles: [], ...e, color: e.color || row[1] };
};
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const HEADS = ['roshei-yeshivat-eretz-yisrael', 'roshei-yeshivat-tveria'];
const TVE = (from, to2, before, after) => ({ label: L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias'), from, to: to2, before, after });
const SOZ10 = L('סדר עולם זוטא, פרק י', 'Seder Olam Zuta, chapter 10');
const HEAD_ROLE = L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias');
// the line of Mar Zutra in the Land of Israel, by Seder Olam Zuta
const LINE = sec('בית מר זוטרא בארץ ישראל',
  'סדר עולם זוטא מונה את ראשי הישיבה בארץ ישראל מבית מר זוטרא, כל אחד אחרי קודמו: "ואחריו רב גוריא, ואחריו מר זוטרא בנו, ואחריו רב יעקב בנו, ואחריו רב מיגס בנו, ואחריו רב נחמיה בנו, ואחריו רב אבדימי בנו" – ואחריו בניו של רב אבדימי, ובהם רבי פנחס, ובנו רבי חצוב. באילן שלנו הם עומדים על קו משפחה אחד, היורד ממר זוטרא בר מר זוטרא. ביניהם עמדו בראש הישיבה גם רב שמעיה, רב הונא ורב איסא, שאינם נזכרים ברשימה זו.',
  'The House of Mar Zutra in the Land of Israel',
  'Seder Olam Zuta lists the heads of the yeshivah in the Land of Israel of the house of Mar Zutra, each after the one before: "and after him Rav Gurya, and after him Mar Zutra his son, and after him Rav Yaakov his son, and after him Rav Migas his son, and after him Rav Nechemiah his son, and after him Rav Avdimi his son" – and after him the sons of Rav Avdimi, among them Rabbi Pinchas, and his son Rabbi Chatzuv. On our tree they stand on one family line, going down from Mar Zutra bar Mar Zutra. Between them Rav Shmaya, Rav Huna and Rav Isa also headed the yeshivah, who are not named in this list.');
const DOTTED = sec('הקו המנוקד', 'באילן שלנו יורד ממר זוטרא בר מר זוטרא קו מנוקד, בסימן שאלה, אל רב הונא ואל רב איסא, שעמדו בראש הישיבה בין בני משפחתו.', 'The Dotted Line', 'On our tree a dotted line, with a question mark, goes down from Mar Zutra bar Mar Zutra to Rav Huna and to Rav Isa, who headed the yeshivah between the members of his family.');
const HERACLIUS = sec('המרד נגד הרקליוס',
  'בשנת 4374 (614 למניינם) כבשו הפרסים, בימי המלך כוסרו השני, את ארץ ישראל מידי ביזנטיון, ויהודים רבים הצטרפו אליהם בתקווה לגאולה – ובהם בנימין מטבריה, שגייס להם צבא, ונחמיה בן חושיאל, שהפרסים הפקידו אותו על ירושלים. כעבור זמן קצר הפרו הפרסים את הבטחותיהם, ונחמיה נהרג. בשנת 4389 (629) החזיר הקיסר הביזנטי הרקליוס את הארץ לשלטונו, ובשנים שאחר כך גזר על היהודים גזירות קשות.',
  'The Revolt against Heraclius',
  'In 4374 (614 CE) the Persians, in the days of King Khosrow II, conquered the Land of Israel from Byzantium, and many Jews joined them in hope of redemption – among them Binyamin of Tiberias, who raised an army for them, and Nechemiah ben Chushiel, whom the Persians placed over Jerusalem. A short time later the Persians broke their promises, and Nechemiah was killed. In 4389 (629) the Byzantine emperor Heraclius returned the land to his rule, and in the years after he decreed harsh decrees on the Jews.');

module.exports = [
  E({
    slug: 'mar-zutra-4', spot2: 'מר זוטרא ד׳ בר מר זוטרא', cats: HEADS, roles: [L('מייסד ישיבת גאון יעקב בארץ ישראל', 'Founder of the "Ge’on Yaakov" yeshivah in the Land of Israel')],
    name: L('מר זוטרא ד׳ בר מר זוטרא', 'Mar Zutra IV bar Mar Zutra'),
    summary: L('בנו של מר זוטרא ראש הגולה, שעלה לארץ ישראל ועמד בראש הישיבה שם.', 'The son of Mar Zutra the Head of the Exile, who went up to the Land of Israel and headed the yeshivah there.'),
    rel: [to('father', 'mar-zutra-3')], offices: [TVE(4280, 4320, [], ['rav-gurya'])], sources: [SOZ10],
    sections: [
      sec('מר זוטרא בר מר זוטרא', 'מר זוטרא, בנו של מר זוטרא ראש הגולה שנצלב על גשר מחוזא, עלה לארץ ישראל בשנת 4280 – ארבע מאות חמישים ושתיים שנה אחרי החורבן – והושיבו אותו "בריש פירקא", בראש הישיבה (סדר עולם זוטא). בזה עברה הנהגת התורה בארץ ישראל לבית דוד. הישיבה בארץ ישראל נקראה בימי הגאונים "ישיבת גאון יעקב" – ולכן כתוב שם זה מעל תיבתו באילן שלנו.', 'Mar Zutra bar Mar Zutra', 'Mar Zutra, the son of Mar Zutra the Head of the Exile who was crucified on the bridge of Mechoza, went up to the Land of Israel in 4280 – four hundred and fifty-two years after the destruction – and they seated him "at the head of the pirka", at the head of the yeshivah (Seder Olam Zuta). With this the leadership of the Torah in the Land of Israel passed to the house of David. The yeshivah in the Land of Israel was called in the days of the Geonim "the yeshivah of Ge’on Yaakov" – so this name is written above his box on our tree.'),
      LINE,
      DOTTED,
    ],
  }),
  E({
    slug: 'rav-gurya', spot2: 'רב גוריא', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב גוריא', 'Rav Gurya'), summary: L('ראש ישיבת טבריה אחרי מר זוטרא.', 'Head of the Tiberias yeshivah after Mar Zutra.'),
    rel: [to('father', 'mar-zutra-4')], offices: [TVE(4320, 4330, ['mar-zutra-4'], ['mar-zutra-5'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'mar-zutra-5', spot2: 'מר זוטרא ה׳', cats: HEADS, roles: [HEAD_ROLE],
    name: L('מר זוטרא ה׳', 'Mar Zutra V'), summary: L('בנו של רב גוריא, ראש ישיבת טבריה אחריו.', 'Rav Gurya’s son, head of the Tiberias yeshivah after him.'),
    rel: [to('father', 'rav-gurya')], offices: [TVE(4330, 4350, ['rav-gurya'], ['rav-yaakov-tveria'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'rav-yaakov-tveria', spot2: 'רב יעקב', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב יעקב (ראש ישיבת טבריה)', 'Rav Yaakov (head of the Tiberias yeshivah)'), summary: L('בנו של מר זוטרא, ראש ישיבת טבריה.', 'Mar Zutra’s son, head of the Tiberias yeshivah.'),
    rel: [to('father', 'mar-zutra-5')], offices: [TVE(4350, 4370, ['mar-zutra-5'], ['rav-shmaya-tveria'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'rav-shmaya-tveria', spot2: 'רב שמעיה', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב שמעיה (ראש ישיבת טבריה)', 'Rav Shmaya (head of the Tiberias yeshivah)'), summary: L('ראש ישיבת טבריה אחרי רב יעקב.', 'Head of the Tiberias yeshivah after Rav Yaakov.'),
    rel: [], offices: [TVE(4370, 4390, ['rav-yaakov-tveria'], ['rav-huna-tveria'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'rav-huna-tveria', spot2: 'רב הונא (ראש ישיבת טבריה)', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב הונא (ראש ישיבת טבריה)', 'Rav Huna (head of the Tiberias yeshivah)'), summary: L('ראש ישיבת טבריה אחרי רב שמעיה.', 'Head of the Tiberias yeshivah after Rav Shmaya.'),
    rel: [], offices: [TVE(4390, 4410, ['rav-shmaya-tveria'], ['rav-migas'])], sources: [SOZ10],
    sections: [LINE, DOTTED],
  }),
  E({
    slug: 'rav-migas', spot2: 'רב מיגס', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב מיגס', 'Rav Migas'), summary: L('בנו של רב יעקב, ראש ישיבת טבריה.', 'Rav Yaakov’s son, head of the Tiberias yeshivah.'),
    rel: [to('father', 'rav-yaakov-tveria')], offices: [TVE(4410, 4430, ['rav-huna-tveria'], ['rav-isa'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'rav-isa', spot2: 'רב איסא', cats: HEADS, roles: [HEAD_ROLE],
    name: L('רב איסא', 'Rav Isa'), summary: L('ראש ישיבת טבריה אחרי רב מיגס.', 'Head of the Tiberias yeshivah after Rav Migas.'),
    rel: [], offices: [TVE(4430, 4450, ['rav-migas'], ['rav-nechemia-tveria'])], sources: [SOZ10],
    sections: [LINE, DOTTED],
  }),
  E({
    slug: 'rav-nechemia-tveria', spot2: 'רב נחמיה', cats: HEADS, roles: [L('גאון טבריה', 'Gaon of Tiberias')],
    name: L('רב נחמיה (גאון טבריה)', 'Rav Nechemiah (Gaon of Tiberias)'), summary: L('בנו של רב מיגס, גאון טבריה.', 'Rav Migas’s son, Gaon of Tiberias.'),
    rel: [to('father', 'rav-migas')], offices: [TVE(4450, 4470, ['rav-isa'], ['rav-avdimi'])], sources: [SOZ10],
    sections: [LINE],
  }),
  E({
    slug: 'rav-avdimi', spot2: 'רב אבדימי (אביי)', cats: HEADS, roles: [L('גאון טבריה', 'Gaon of Tiberias')],
    name: L('רב אבדימי (אביי)', 'Rav Avdimi (Abaye)'), summary: L('בנו של רב נחמיה, גאון טבריה.', 'Rav Nechemiah’s son, Gaon of Tiberias.'),
    rel: [to('father', 'rav-nechemia-tveria')], offices: [TVE(4470, 4490, ['rav-nechemia-tveria'], [])], sources: [SOZ10],
    sections: [LINE, sec('אבדימי או אביי', 'בסדר עולם זוטא הוא נקרא פעם "רב אבדימי" ופעם "רב אביי" – ולכן באילן שלנו כתובים שני השמות.', 'Avdimi or Abaye', 'In Seder Olam Zuta he is called once "Rav Avdimi" and once "Rav Abaye" – so both names are written on our tree.')],
  }),

  // ── the revolt against Heraclius ──
  E({
    slug: 'nechemia-ben-chushiel', spot2: 'נחמיה בן חושיאל', cats: ['ishei-eretz-yisrael'], roles: [L('מנהיג המרד נגד הרקליוס', 'Leader of the revolt against Heraclius')],
    name: L('נחמיה בן חושיאל', 'Nechemiah ben Chushiel'), summary: L('מנהיג יהודי ירושלים בימי הכיבוש הפרסי, שנהרג.', 'The leader of the Jews of Jerusalem in the days of the Persian conquest, who was killed.'),
    rel: [], life: [null, 4377], sources: [L('ספר זרובבל', 'Sefer Zerubavel'), L('אנטיוכוס סטרטגוס, על נפילת ירושלים', 'Antiochus Strategos, The Capture of Jerusalem')],
    sections: [
      HERACLIUS,
      sec('נחמיה בן חושיאל', 'אחרי שכבשו הפרסים את ירושלים (614), הפקידו בה את נחמיה בן חושיאל, וחידשו היהודים לזמן קצר את הישיבה בעיר, ואולי אף את עבודת הקרבנות. בספר זרובבל, חיבור של חזון אחרית הימים מאותם ימים, הוא מתואר כמשיח בן יוסף, הנהרג לפני הגאולה השלמה. לאחר כשלוש שנים פנו הפרסים נגד היהודים, ונחמיה נהרג – ולכן באילן שלנו הוא נקרא "מנהיג המרד נגד הרקליוס", הקיסר הביזנטי שנגדו קמו.', 'Nechemiah ben Chushiel', 'After the Persians conquered Jerusalem (614), they placed Nechemiah ben Chushiel over it, and for a short time the Jews renewed their settlement in the city, and perhaps even the offering of sacrifices. In Sefer Zerubavel, a work of visions of the end of days from those times, he is described as the Messiah son of Joseph, who is killed before the full redemption. After about three years the Persians turned against the Jews, and Nechemiah was killed – so on our tree he is called "the leader of the revolt against Heraclius", the Byzantine emperor against whom they rose.'),
    ],
  }),
  E({
    slug: 'binyamin-mitveria', spot2: 'בנימין מטבריה', cats: ['ishei-eretz-yisrael'], roles: [L('מקים הצבא', 'Raiser of the army')],
    name: L('בנימין מטבריה', 'Binyamin of Tiberias'), summary: L('היהודי העשיר מטבריה, שגייס צבא לעזרת הפרסים נגד ביזנטיון.', 'The wealthy Jew of Tiberias who raised an army to help the Persians against Byzantium.'),
    rel: [], sources: [L('תאופנס, כרונוגרפיה', 'Theophanes, Chronographia')],
    sections: [
      HERACLIUS,
      sec('בנימין מטבריה', 'בנימין, יהודי עשיר מאוד מטבריה, גייס ממון ולוחמים יהודים מן הגליל, והצטרף אליהם לצבא הפרסי שעלה על ירושלים (614). כשחזר הקיסר הרקליוס לארץ (629) התארח בביתו של בנימין בטבריה, ולפי הכרוניקה של תאופנס שכנע אותו להתנצר.', 'Binyamin of Tiberias', 'Binyamin, a very wealthy Jew of Tiberias, raised money and Jewish fighters from the Galilee, and joined them to the Persian army that went up against Jerusalem (614). When the emperor Heraclius returned to the land (629) he stayed in Binyamin’s house in Tiberias, and by the chronicle of Theophanes persuaded him to convert to Christianity.'),
    ],
  }),
  E({
    slug: 'asaf-harofe', spot2: 'אסף הרופא בן ברכיהו', cats: ['ishei-eretz-yisrael'], roles: [L('מחבר "ספר רפואות"', 'Author of "Sefer Refuot"')],
    name: L('אסף הרופא בן ברכיהו', 'Asaf HaRofe son of Berechyahu'), summary: L('מחבר ספר הרפואה העברי הקדום ביותר.', 'The author of the earliest Hebrew book of medicine.'),
    rel: [], sources: [L('ספר אסף הרופא', 'Sefer Asaf HaRofe')],
    sections: one('אסף הרופא', 'אסף הרופא, בן ברכיהו, חיבר את "ספר רפואות" – ספר הרפואה הקדום ביותר שנכתב בעברית, ובו תיאורי מחלות, תרופות וצמחי מרפא, ובסופו "שבועת אסף", שבה מושבעים תלמידי הרפואה לנהוג ביושר ולרפא גם את העני. זמנו המדויק אינו ידוע – יש מקדימים אותו למאה השישית ויש מאחרים אותו למאה העשירית – ולכן כתוב באילן שלנו "זמנו המדויק לא ידוע".', 'Asaf HaRofe', 'Asaf HaRofe, son of Berechyahu, wrote "Sefer Refuot" – the earliest book of medicine written in Hebrew, with descriptions of illnesses, remedies and healing plants, and at its end "the Oath of Asaf", in which the students of medicine swear to act honestly and to heal the poor too. His exact time is not known – some place him in the sixth century and some as late as the tenth – so it is written on our tree "his exact time is not known".'),
  }),
  E({
    slug: 'seria', spot2: 'שריע', cats: ['ishei-eretz-yisrael'], roles: [L('משיח שקר', 'False messiah')],
    name: L('שריע', 'Seria (Serene)'), summary: L('משיח השקר שקם בסוריה בתחילת השלטון המוסלמי.', 'The false messiah who arose in Syria at the start of Muslim rule.'),
    rel: [], life: [4480, null], sources: [L('תשובות הגאונים (שערי צדק), תשובת רב נטרונאי גאון', 'Responsa of the Geonim (Sha’arei Tzedek), responsum of Rav Natronai Gaon'), L('תאופנס, כרונוגרפיה', 'Theophanes, Chronographia')],
    sections: one('שריע', 'בסביבות שנת 4480 (720 למניינם) קם בסוריה אדם בשם שריע, וטען שהוא המשיח שיגרש את המוסלמים מארץ ישראל ויחזיר אליה את עם ישראל. יהודים רבים, גם מארצות רחוקות, הלכו אחריו, והוא התיר להם דברים רבים שאסרה התורה. לבסוף נתפס ונחקר לפני הח׳ליף יזיד, והודה שכל דבריו היו שקר. רב נטרונאי גאון נשאל איך לקבל בחזרה את מי שהלכו אחריו, והורה לקבלם בתשובה.', 'Seria', 'Around 4480 (720 CE) a man named Seria arose in Syria, and claimed that he was the Messiah who would drive the Muslims out of the Land of Israel and bring the people of Israel back to it. Many Jews, even from distant lands, followed him, and he permitted them many things the Torah forbade. In the end he was caught and questioned before the Caliph Yazid, and admitted that all his words were false. Rav Natronai Gaon was asked how to take back those who had followed him, and ruled to accept them in repentance.'),
  }),
];
