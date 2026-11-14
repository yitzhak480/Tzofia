// The yeshivah of the Land of Israel, third part: the Geonim of the Land of
// Israel from Rabbi Aharon III to Daniel ben Azaryah (the Sejelmasi family and
// the family of Rabbi Hoshana), and the last paytanim of the Land of Israel.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const E = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', roles: [], ...e, color: e.color || row[1] };
};
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const HEADS = ['roshei-yeshivat-eretz-yisrael'];
const GEY = (from, to2, before, after) => ({ label: L('גאון ארץ ישראל', 'Gaon of the Land of Israel'), from, to: to2, before, after });
const GAON = L('גאון ארץ ישראל', 'Gaon of the Land of Israel');
const GENIZA = L('גניזת קהיר', 'The Cairo Genizah');
const GIL = L('משה גיל, ארץ ישראל בתקופה המוסלמית הראשונה', 'Moshe Gil, Palestine during the First Muslim Period');
const MANN = L('יעקב מאן, היהודים במצרים ובארץ ישראל תחת הח׳ליפים הפאטמים', 'Jacob Mann, The Jews in Egypt and in Palestine under the Fatimid Caliphs');
const YESHIVA = sec('ישיבת גאון יעקב',
  'במאה העשירית והאחת עשרה ישבה ישיבת ארץ ישראל – "ישיבת גאון יעקב" – בירושלים, ובראשה עמד "גאון". הישיבה הייתה הסמכות התורנית העליונה של יהודי ארץ ישראל, סוריה ומצרים: הגאון סמך דיינים, החרים, וקבע את הלוח. לצדו עמדו "אב בית הדין" ו"השלישי", שעלו בדרך כלל בדרגות אחד אחרי השני. את סדר הגאונים האלה אנו יודעים ממאות מכתבים שנמצאו בגניזת קהיר.',
  'The Yeshivah of Ge’on Yaakov',
  'In the tenth and eleventh centuries the yeshivah of the Land of Israel – "the yeshivah of Ge’on Yaakov" – sat in Jerusalem, headed by a "Gaon". The yeshivah was the highest Torah authority for the Jews of the Land of Israel, Syria and Egypt: the Gaon ordained judges, pronounced bans, and fixed the calendar. Beside him stood the "Av Beit Din" and "the Third", who usually rose in rank one after another. We know the order of these Geonim from hundreds of letters found in the Cairo Genizah.');
const SEJELMASI = sec('משפחת סג׳למסי', 'באילן שלנו נקראת המשפחה שהעמידה כמה מגאוני ארץ ישראל במאה העשירית "משפחת סג׳למסי" – על שם העיר סג׳למאסה שבמרוקו, שממנה באה.', 'The Sejelmasi Family', 'On our tree the family that produced several of the Geonim of the Land of Israel in the tenth century is called "the Sejelmasi family" – after the city of Sijilmasa in Morocco, from which it came.');
const HOSHANA = sec('בית רבי הושענא', 'רבי הושענא, רבי שמואל בנו, רבי אברהם בנו ורבי עלי המומחה בנו – ארבעה דורות של חכמים, ממנהיגי הישיבה בארץ ישראל במאה האחת עשרה.', 'The House of Rabbi Hoshana', 'Rabbi Hoshana, Rabbi Shmuel his son, Rabbi Avraham his son and Rabbi Eli HaMumche his son – four generations of sages, among the leaders of the yeshivah in the Land of Israel in the eleventh century.');

module.exports = [
  E({
    slug: 'rabbi-aharon-3-ben-avraham', spot2: 'רבי אהרן ג׳ בן אברהם', cats: HEADS, roles: [GAON],
    name: L('רבי אהרן ג׳ בן אברהם', 'Rabbi Aharon III ben Avraham'), summary: L('גאון ארץ ישראל, אחרון בית בן מאיר.', 'Gaon of the Land of Israel, the last of the house of Ben Meir.'),
    rel: [maybe('father', 'rabbi-avraham-ben-aharon')], offices: [GEY(4693, 4716, ['rabbi-avraham-ben-aharon'], ['rabbi-yosef-2-ben-ezron'])], sources: [GIL, GENIZA],
    sections: [YESHIVA, sec('סימן השאלה', 'באילן שלנו יורד אליו קו מרבי אברהם בן אהרן בסימן שאלה, משום שאין ידוע בוודאות שהיה בנו.', 'The Question Mark', 'On our tree a line comes down to him from Rabbi Avraham ben Aharon with a question mark, since it is not known for certain that he was his son.')],
  }),
  E({
    slug: 'rabbi-yosef-2-ben-ezron', spot2: 'רבי יוסף ב׳ בן עזרון', cats: HEADS, roles: [GAON],
    name: L('רבי יוסף ב׳ בן עזרון', 'Rabbi Yosef II ben Ezron'), summary: L('גאון ארץ ישראל, ממשפחת סג׳למסי.', 'Gaon of the Land of Israel, of the Sejelmasi family.'),
    rel: [], offices: [GEY(4716, 4718, ['rabbi-aharon-3-ben-avraham'], ['rabbi-ezron-ben-yosef'])], sources: [GIL, GENIZA],
    sections: [YESHIVA, SEJELMASI],
  }),
  E({
    slug: 'rabbi-ezron-ben-yosef', spot2: 'רבי עזרון בן יוסף', cats: HEADS, roles: [GAON],
    name: L('רבי עזרון בן יוסף', 'Rabbi Ezron ben Yosef'), summary: L('בנו של רבי יוסף, גאון ארץ ישראל כשלושים שנה.', 'Rabbi Yosef’s son, Gaon of the Land of Israel for some thirty years.'),
    rel: [to('father', 'rabbi-yosef-2-ben-ezron')], offices: [GEY(4718, 4748, ['rabbi-yosef-2-ben-ezron'], ['rabbi-shmuel-ben-yosef'])], sources: [GIL, GENIZA],
    sections: [YESHIVA, SEJELMASI],
  }),
  E({
    slug: 'rabbi-shmuel-ben-yosef', spot2: 'רבי שמואל בן יוסף', cats: HEADS, roles: [GAON],
    name: L('רבי שמואל בן יוסף', 'Rabbi Shmuel ben Yosef'), summary: L('גאון ארץ ישראל אחרי רבי עזרון.', 'Gaon of the Land of Israel after Rabbi Ezron.'),
    rel: [maybe('father', 'rabbi-yosef-2-ben-ezron')], offices: [GEY(4748, 4771, ['rabbi-ezron-ben-yosef'], ['rabbi-shmaya-gaon'])], sources: [GIL, GENIZA],
    sections: [YESHIVA, SEJELMASI, sec('סימן השאלה', 'באילן שלנו יורד אליו קו משפחה בסימן שאלה, משום שאין ידוע בוודאות מי היה אביו.', 'The Question Mark', 'On our tree a family line comes down to him with a question mark, since it is not known for certain who his father was.')],
  }),
  E({
    slug: 'rabbi-shmaya-gaon', spot2: 'רבי שמעיה', cats: HEADS, roles: [GAON],
    name: L('רבי שמעיה (גאון ארץ ישראל)', 'Rabbi Shmaya (Gaon of the Land of Israel)'), summary: L('גאון ארץ ישראל אחרי רבי שמואל בן יוסף.', 'Gaon of the Land of Israel after Rabbi Shmuel ben Yosef.'),
    rel: [], offices: [GEY(4771, 4775, ['rabbi-shmuel-ben-yosef'], ['rabbi-yoshiyahu-ben-aharon'])], sources: [GIL, GENIZA],
    sections: [YESHIVA],
  }),
  E({
    slug: 'rabbi-yoshiyahu-ben-aharon', spot2: 'רבי יאשיהו בן אהרן', cats: HEADS, roles: [GAON],
    name: L('רבי יאשיהו בן אהרן', 'Rabbi Yoshiyahu ben Aharon'), summary: L('גאון ארץ ישראל אחרי רבי שמעיה.', 'Gaon of the Land of Israel after Rabbi Shmaya.'),
    rel: [], offices: [GEY(4775, 4785, ['rabbi-shmaya-gaon'], ['rabbi-shlomo-1-ben-yosef'])], sources: [GIL, GENIZA],
    sections: [YESHIVA],
  }),
  E({
    slug: 'rabbi-shlomo-1-ben-yosef', spot2: 'רבי שלמה א׳ בן יוסף', cats: HEADS, roles: [GAON],
    name: L('רבי שלמה א׳ בן יוסף', 'Rabbi Shlomo I ben Yosef'), summary: L('גאון ארץ ישראל לזמן קצר.', 'Gaon of the Land of Israel for a short time.'),
    rel: [], offices: [GEY(4785, 4785, ['rabbi-yoshiyahu-ben-aharon'], ['rav-shlomo-2-ben-yehuda'])], sources: [GIL, GENIZA],
    sections: [YESHIVA],
  }),
  E({
    slug: 'rav-shlomo-2-ben-yehuda', spot2: 'רב שלמה ב׳ בירבי יהודה', cats: [...HEADS, 'paytanei-eretz-yisrael', 'paytanim'], roles: [GAON, L('פייטן', 'Paytan')],
    name: L('רב שלמה ב׳ בירבי יהודה', 'Rav Shlomo II birabbi Yehudah'), summary: L('גאון ארץ ישראל כעשרים וחמש שנה, ופייטן.', 'Gaon of the Land of Israel for some twenty-five years, and a paytan.'),
    rel: [], offices: [GEY(4785, 4811, ['rabbi-shlomo-1-ben-yosef'], ['daniel-ben-azarya'])], sources: [GIL, MANN, GENIZA],
    sections: [
      YESHIVA,
      sec('רבי שלמה בן יהודה', 'רבי שלמה בן יהודה, שבא לארץ ישראל מפאס שבמרוקו, עמד בראש הישיבה בירושלים כעשרים וחמש שנה – מן התקופות הקשות בתולדות העיר: רעידות אדמה, מלחמות ומסים כבדים. מכתביו הרבים שנמצאו בגניזת קהיר הם מן המקורות החשובים ביותר לחיי היהודים בארץ ישראל בימיו. בשנים 4798–4802 קם נגדו רבי נתן בן אברהם, שתבע את הגאונות לעצמו, עד שנעשה ביניהם שלום. הוא גם חיבר פיוטים.', 'Rabbi Shlomo ben Yehudah', 'Rabbi Shlomo ben Yehudah, who came to the Land of Israel from Fez in Morocco, headed the yeshivah in Jerusalem for some twenty-five years – one of the hardest periods in the history of the city: earthquakes, wars and heavy taxes. His many letters found in the Cairo Genizah are among the most important sources for the life of the Jews of the Land of Israel in his days. In the years 4798–4802 Rabbi Natan ben Avraham rose against him, claiming the gaonate for himself, until peace was made between them. He also wrote piyyutim.'),
    ],
  }),
  E({
    slug: 'daniel-ben-azarya', spot2: 'דניאל בן עזריה', cats: HEADS, roles: [GAON],
    name: L('דניאל בן עזריה', 'Daniel ben Azaryah'), summary: L('גאון ארץ ישראל מבית ראשי הגולה, שאחריו יצאה הישיבה מירושלים.', 'Gaon of the Land of Israel of the house of the Heads of the Exile, after whom the yeshivah left Jerusalem.'),
    rel: [], offices: [GEY(4811, 4822, ['rav-shlomo-2-ben-yehuda'], [])], sources: [GIL, MANN, GENIZA],
    sections: [
      sec('דניאל בן עזריה', 'דניאל בן עזריה היה מבית ראשי הגולה בבבל, צאצא של דוד המלך – ולכן יורד אליו באילן שלנו קו משפחה מבית ראשי הגולה, וכן אל אחיו זכאי, "ראש הגולה" במוסול. הוא עלה לארץ ישראל ונעשה גאון בירושלים, ובכך התאחדו לזמן קצר ראשות הגולה וגאונות ארץ ישראל. אחרי פטירתו, ובעקבות כיבוש ירושלים בידי הסלג׳וקים, יצאה הישיבה מירושלים: היא המשיכה בעיר צור, ואחר כך בסוריה ובמצרים – כפי שכתוב באילן שלנו מתחת לתיבתו.', 'Daniel ben Azaryah', 'Daniel ben Azaryah was of the house of the Heads of the Exile in Bavel, a descendant of King David – so on our tree a family line comes down to him from the house of the Heads of the Exile, and also to his brother Zakkai, "Head of the Exile" in Mosul. He went up to the Land of Israel and became Gaon in Jerusalem, and so for a short time the office of Head of the Exile and the gaonate of the Land of Israel were joined. After his death, and following the conquest of Jerusalem by the Seljuks, the yeshivah left Jerusalem: it continued in the city of Tyre, and later in Syria and Egypt – as is written on our tree under his box.'),
      YESHIVA,
    ],
  }),
  E({
    slug: 'rav-natan-ben-avraham', spot2: 'רב נתן בן אברהם', cats: HEADS, roles: [GAON],
    name: L('רב נתן בן אברהם', 'Rav Natan ben Avraham'), summary: L('שתבע את גאונות ארץ ישראל לעצמו מול רבי שלמה בן יהודה.', 'Who claimed the gaonate of the Land of Israel for himself against Rabbi Shlomo ben Yehudah.'),
    rel: [to('teacher', 'rabbi-shmuel-ben-hoshana')], offices: [GEY(4800, 4811, [], [])], sources: [GIL, GENIZA],
    sections: one('רב נתן בן אברהם', 'רב נתן בן אברהם למד בקירואן, ושב לארץ ישראל. בשנת 4798 (1038 למניינם) תבע לעצמו את הגאונות מול רבי שלמה בן יהודה, וקהילות ישראל נחלקו ביניהם, עד שנעשה ביניהם שלום, ורב נתן חזר להיות אב בית הדין. רבו היה רבי שמואל בן הושענא.', 'Rav Natan ben Avraham', 'Rav Natan ben Avraham studied in Kairouan, and returned to the Land of Israel. In 4798 (1038 CE) he claimed the gaonate for himself against Rabbi Shlomo ben Yehudah, and the communities of Israel were divided between them, until peace was made between them, and Rav Natan went back to being Av Beit Din. His teacher was Rabbi Shmuel ben Hoshana.'),
  }),
  // the house of Rabbi Hoshana
  E({ slug: 'rabbi-hoshana', spot2: 'רבי הושענא', cats: ['roshei-yeshivat-eretz-yisrael'], name: L('רבי הושענא', 'Rabbi Hoshana'), summary: L('אבי משפחה של מנהיגי הישיבה בארץ ישראל.', 'The father of a family of leaders of the yeshivah in the Land of Israel.'), rel: [], sources: [GIL, GENIZA], sections: [HOSHANA] }),
  E({
    slug: 'rabbi-shmuel-ben-hoshana', spot2: 'רבי שמואל בן הושענא', cats: ['roshei-yeshivat-eretz-yisrael', 'paytanei-eretz-yisrael', 'paytanim'], roles: [L('פייטן וממנהיגי הישיבה', 'Paytan and one of the leaders of the yeshivah')],
    name: L('רבי שמואל בן הושענא', 'Rabbi Shmuel ben Hoshana'), summary: L('פייטן וממנהיגי הישיבה בארץ ישראל.', 'A paytan and one of the leaders of the yeshivah in the Land of Israel.'),
    rel: [to('father', 'rabbi-hoshana')], sources: [GIL, GENIZA],
    sections: [HOSHANA, sec('רבי שמואל השלישי', 'רבי שמואל בן הושענא נשא את התואר "השלישי" בישיבה, וחיבר פיוטים רבים שנמצאו בגניזת קהיר. תלמידו היה רב נתן בן אברהם.', 'Rabbi Shmuel the Third', 'Rabbi Shmuel ben Hoshana bore the title "the Third" in the yeshivah, and wrote many piyyutim found in the Cairo Genizah. His student was Rav Natan ben Avraham.')],
  }),
  E({ slug: 'rabbi-avraham-ben-shmuel', spot2: 'רבי אברהם בן שמואל', cats: ['roshei-yeshivat-eretz-yisrael'], roles: [L('ממנהיגי הישיבה', 'One of the leaders of the yeshivah')], name: L('רבי אברהם בן שמואל', 'Rabbi Avraham ben Shmuel'), summary: L('בנו של רבי שמואל בן הושענא, ממנהיגי הישיבה.', 'The son of Rabbi Shmuel ben Hoshana, one of the leaders of the yeshivah.'), rel: [to('father', 'rabbi-shmuel-ben-hoshana')], sources: [GIL, GENIZA], sections: [HOSHANA] }),
  E({ slug: 'rabbi-eli-hamumche', spot2: 'רבי עלי המומחה בירבי אברהם', cats: ['roshei-yeshivat-eretz-yisrael'], roles: [L('מחברי הישיבה', 'One of the members of the yeshivah')], name: L('רבי עלי המומחה בירבי אברהם', 'Rabbi Eli HaMumche birabbi Avraham'), summary: L('בנו של רבי אברהם, מחברי הישיבה.', 'Rabbi Avraham’s son, one of the members of the yeshivah.'), rel: [to('father', 'rabbi-avraham-ben-shmuel')], sources: [GIL, GENIZA], sections: [HOSHANA, sec('המומחה', '"מומחה" היה תואר שנתנה הישיבה לחכם שנסמך לדון ולהורות.', 'HaMumche', '"Mumche" was a title the yeshivah gave to a sage ordained to judge and to rule.')] }),
  E({ slug: 'rav-avraham-hakohen-gaon', spot2: 'רב אברהם הכהן גאון', cats: ['roshei-yeshivat-eretz-yisrael'], roles: [L('גאון ארץ ישראל?', 'Gaon of the Land of Israel?')], name: L('רב אברהם הכהן גאון', 'Rav Avraham HaKohen Gaon'), summary: L('חכם שנקרא "גאון", ואין ידוע בוודאות אם עמד בראש הישיבה.', 'A sage called "Gaon", of whom it is not known for certain whether he headed the yeshivah.'), rel: [], sources: [GIL, GENIZA], sections: [YESHIVA, sec('סימן השאלה', 'באילן שלנו כתוב "גאון ארץ ישראל?" בסימן שאלה: הוא נקרא "גאון" במקורות, אבל אין ידוע בוודאות אם עמד בראש הישיבה ומתי.', 'The Question Mark', 'On our tree "Gaon of the Land of Israel?" is written with a question mark: he is called "Gaon" in the sources, but it is not known for certain whether he headed the yeshivah, and when.')] }),
  // the last paytanim of the Land of Israel
  E({ slug: 'rabbi-sakan', spot2: 'רבי סכן', cats: ['paytanei-eretz-yisrael', 'paytanim'], roles: [L('פייטן', 'Paytan')], name: L('רבי סכן', 'Rabbi Sakan'), summary: L('פייטן ארץ ישראלי.', 'A paytan of the Land of Israel.'), rel: [], sources: [GENIZA], sections: one('רבי סכן', 'רבי סכן היה מפייטני ארץ ישראל בתקופה המאוחרת של הפיוט, ופיוטיו נמצאו בגניזת קהיר.', 'Rabbi Sakan', 'Rabbi Sakan was one of the paytanim of the Land of Israel in the late period of piyyut, and his piyyutim were found in the Cairo Genizah.') }),
  E({ slug: 'rabbi-yehuda-birabbi-hillel-halevi', spot2: 'רבי יהודה ברבי הלל הלוי', cats: ['paytanei-eretz-yisrael', 'paytanim'], roles: [L('פייטן', 'Paytan')], name: L('רבי יהודה ברבי הלל הלוי', 'Rabbi Yehudah birabbi Hillel HaLevi'), summary: L('פייטן ארץ ישראלי.', 'A paytan of the Land of Israel.'), rel: [], sources: [GENIZA], sections: one('רבי יהודה ברבי הלל הלוי', 'רבי יהודה ברבי הלל הלוי היה מפייטני ארץ ישראל בתקופה המאוחרת של הפיוט, ופיוטיו נמצאו בגניזת קהיר.', 'Rabbi Yehudah birabbi Hillel HaLevi', 'Rabbi Yehudah birabbi Hillel HaLevi was one of the paytanim of the Land of Israel in the late period of piyyut, and his piyyutim were found in the Cairo Genizah.') }),
];
