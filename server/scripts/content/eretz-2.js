// The yeshivah of the Land of Israel, second part: the Geonim of Tiberias from
// Rav Pinchas to Rabbi Avraham ben Aharon (the families of Yoshiyahu and of Ben
// Meir), the Masoretes (the families of Ben Asher and Ben Naftali), and the
// paytanim and scribes of their days.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const E = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', roles: [], ...e, color: e.color || row[1] };
};
const F = (e) => E({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const HEADS = ['roshei-yeshivat-eretz-yisrael', 'roshei-yeshivat-tveria'];
const MASORA = ['baalei-hamasora'];
const TVE = (from, to2, before, after) => ({ label: L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias'), from, to: to2, before, after });
const GAON = L('גאון טבריה', 'Gaon of Tiberias');
const MASORETE = L('בעל מסורה', 'Masorete');
const SOZ10 = L('סדר עולם זוטא, פרק י', 'Seder Olam Zuta, chapter 10');
const GENIZA = L('גניזת קהיר', 'The Cairo Genizah');
const GIL = L('משה גיל, ארץ ישראל בתקופה המוסלמית הראשונה', 'Moshe Gil, Palestine during the First Muslim Period');
const DIKDUKEI = L('ספר דקדוקי הטעמים לאהרן בן אשר', 'Sefer Dikdukei HaTe’amim of Aharon ben Asher');
const MASORA_TEXT = sec('בעלי המסורה',
  'בעלי המסורה היו חכמי טבריה ששמרו על נוסח המקרא המדויק, אות באות. הם קבעו את הניקוד ואת הטעמים, ורשמו בשולי הספרים את ה"מסורה" – הערות על כתיב, מספר הפסוקים והמילים ושינויים בין המקומות. כתבי היד שלהם, ובראשם כתר ארם צובא, הם היסוד לנוסח התנ״ך שבידינו. באילן שלנו יורדים קווים מן הכיתוב "בעלי המסורה" אל ראשוני בעלי המסורה הידועים בשמם: רב פנחס ראש הישיבה, אחיהו הכהן החבר, צמח בן צוארה, אברהם בן ריקאט ואשר הזקן הגדול – אבי משפחת בן אשר – ואל משפחת בן נפתלי.',
  'The Masoretes',
  'The Masoretes were the sages of Tiberias who preserved the exact text of the Bible, letter by letter. They fixed the vowels and the accents, and wrote in the margins of the books the "Masorah" – notes on spelling, the number of verses and words, and differences between places. Their manuscripts, first among them the Aleppo Codex, are the foundation of the text of the Tanach we have. On our tree lines go down from the label "the Masoretes" to the first Masoretes known by name: Rav Pinchas Rosh HaYeshivah, Achiyahu HaKohen HeChaver, Tzemach ben Tzu’arah, Avraham ben Rikat and Asher the Great Elder – the father of the Ben Asher family – and to the Ben Naftali family.');
const BEN_ASHER = sec('משפחת בן אשר',
  'שישה דורות של בעלי מסורה ממשפחה אחת: אשר הזקן הגדול, נחמיה בנו, משה בנו, אשר בנו, משה בנו ואהרן בנו – כך מונה אהרן בן אשר את אבותיו. משה בן אשר כתב את כתר הנביאים הנקרא "מצחף קהיר" (4655, 895 למניינם), ואהרן בנו – גדול בעלי המסורה – ניקד והגיה את כתר ארם צובא.',
  'The Ben Asher Family',
  'Six generations of Masoretes of one family: Asher the Great Elder, Nechemiah his son, Moshe his son, Asher his son, Moshe his son and Aharon his son – so Aharon ben Asher lists his forefathers. Moshe ben Asher wrote the codex of the Prophets called "the Cairo Codex" (4655, 895 CE), and Aharon his son – the greatest of the Masoretes – vocalised and corrected the Aleppo Codex.');
const BEN_NAFTALI = sec('בן אשר ובן נפתלי',
  'משה בן נפתלי ואהרן בן אשר היו בני פלוגתא: ביניהם יש מאות מחלוקות קטנות בניקוד ובטעמים, שנאספו בספר "החילופים" של מישאל בן עוזיאל. ברוב המקומות נהגו כבן אשר – ובעקבות הרמב״ם, שהעיד שסמך על כתר ארם צובא שהגיה בן אשר, נעשה נוסחו לנוסח המקובל.',
  'Ben Asher and Ben Naftali',
  'Moshe ben Naftali and Aharon ben Asher were bar plugta: between them there are hundreds of small disputes in vowels and accents, gathered in the "Book of Differences" of Mishael ben Uzziel. In most places the practice followed Ben Asher – and following the Rambam, who testified that he relied on the Aleppo Codex corrected by Ben Asher, his text became the accepted one.');
const BEN_MEIR = sec('משפחת בן מאיר',
  'אחרי צמח בן יאשיהו עברה ראשות הישיבה בארץ ישראל למשפחת בן מאיר, משפחת כהנים מיוחסת, שהעמידה כמה דורות של גאונים: רבי אהרן בן משה, רבי מאיר בנו, ורבי אהרן בן מאיר בנו, ואחריו רבי אברהם בנו. ביניהם עמדו בראש הישיבה גם רבי יצחק ורבי יוסף, בן בתו של משה בן מאיר. את סדר הגאונים האלה אנו יודעים בעיקר ממכתבים וממגילות שנמצאו בגניזת קהיר.',
  'The Ben Meir Family',
  'After Tzemach ben Yoshiyahu the headship of the yeshivah in the Land of Israel passed to the Ben Meir family, a family of noble lineage, which produced several generations of Geonim: Rabbi Aharon son of Moshe, Rabbi Meir his son, and Rabbi Aharon ben Meir his son, and after him Rabbi Avraham his son. Between them Rabbi Yitzhak and Rabbi Yosef, the grandson of Moshe ben Meir’s daughter, also headed the yeshivah. We know the order of these Geonim mainly from letters and scrolls found in the Cairo Genizah.');
const YOSHIYAHU = sec('בני יאשיהו',
  'יהושפט וצמח, בניו של יאשיהו, היו מצאצאי ענן בן דוד, ממשפחת ראשי הגולה – ולכן יורד באילן שלנו קו מנוקד מבית ראשי הגולה אל אביהם יאשיהו. שניהם עמדו בראש הישיבה בארץ ישראל זה אחר זה, וצמח עמד בראשה כשלושים ואחת שנה; אחריו עברה הגאונות למשפחת בן מאיר.',
  'The Sons of Yoshiyahu',
  'Yehoshafat and Tzemach, the sons of Yoshiyahu, were descendants of Anan ben David, of the family of the Heads of the Exile – so on our tree a dotted line comes down from the house of the Heads of the Exile to their father Yoshiyahu. Both headed the yeshivah in the Land of Israel one after the other, and Tzemach headed it for some thirty-one years; after him the gaonate passed to the Ben Meir family.');

module.exports = [
  // ── the Geonim of Tiberias ──
  E({
    slug: 'rav-pinchas-rosh-hayeshiva', spot2: 'רב פנחס', cats: [...HEADS, ...MASORA], roles: [GAON, MASORETE],
    name: L('רב פנחס (ראש הישיבה)', 'Rav Pinchas (Rosh HaYeshivah)'), summary: L('בנו של רב אבדימי, גאון טבריה ומראשוני בעלי המסורה.', 'Rav Avdimi’s son, Gaon of Tiberias and one of the first Masoretes.'),
    rel: [to('father', 'rav-avdimi')], offices: [TVE(4490, 4510, ['rav-avdimi'], ['rav-chatzuv'])], sources: [SOZ10, L('רשימת בעלי המסורה מן הגניזה', 'The list of Masoretes from the Genizah')],
    sections: [
      sec('רב פנחס', 'רב פנחס, בנו של רב אבדימי, עמד בראש הישיבה בטבריה, ובנו רב חצוב עמד בה אחריו (סדר עולם זוטא). ברשימות בעלי המסורה הוא נזכר בשם "רבי פנחס ראש הישיבה", מראשוני בעלי המסורה הידועים בשמם.', 'Rav Pinchas', 'Rav Pinchas, the son of Rav Avdimi, headed the yeshivah in Tiberias, and his son Rav Chatzuv headed it after him (Seder Olam Zuta). In the lists of the Masoretes he is named "Rabbi Pinchas Rosh HaYeshivah", one of the first Masoretes known by name.'),
      MASORA_TEXT,
    ],
  }),
  E({
    slug: 'rav-chatzuv', spot2: 'רב חצוב', cats: HEADS, roles: [GAON],
    name: L('רב חצוב', 'Rav Chatzuv'), summary: L('בנו של רב פנחס, גאון טבריה.', 'Rav Pinchas’s son, Gaon of Tiberias.'),
    rel: [to('father', 'rav-pinchas-rosh-hayeshiva')], offices: [TVE(4510, 4540, ['rav-pinchas-rosh-hayeshiva'], ['rabbi-pinchas-hakohen'])], sources: [SOZ10],
    sections: one('רב חצוב', 'רב חצוב, בנו של רב פנחס, עמד בראש הישיבה בטבריה אחרי אביו. הוא האחרון בשושלת בית מר זוטרא שמונה סדר עולם זוטא.', 'Rav Chatzuv', 'Rav Chatzuv, the son of Rav Pinchas, headed the yeshivah in Tiberias after his father. He is the last in the line of the house of Mar Zutra that Seder Olam Zuta lists.'),
  }),
  E({
    slug: 'rabbi-pinchas-hakohen', spot2: 'רבי פנחס הכהן (ברבי יעקב?)', cats: [...HEADS, 'paytanei-eretz-yisrael', 'paytanim'], roles: [GAON, L('פייטן?', 'Paytan?')],
    name: L('רבי פנחס הכהן (ברבי יעקב?)', 'Rabbi Pinchas HaKohen (birabbi Yaakov?)'), summary: L('גאון טבריה, שאולי הוא הפייטן רבי פנחס ברבי יעקב הכהן.', 'Gaon of Tiberias, who is perhaps the paytan Rabbi Pinchas birabbi Yaakov HaKohen.'),
    rel: [], offices: [TVE(4540, null, ['rav-chatzuv'], [])], sources: [L('שולמית אליצור, פיוטי רבי פינחס הכהן', 'Shulamit Elizur, The Piyyutim of Rabbi Pinchas HaKohen'), GENIZA],
    sections: [
      sec('רבי פנחס הכהן', 'רבי פנחס הכהן עמד בראש הישיבה בטבריה אחרי רב חצוב.', 'Rabbi Pinchas HaKohen', 'Rabbi Pinchas HaKohen headed the yeshivah in Tiberias after Rav Chatzuv.'),
      sec('סימני השאלה', 'יש מזהים אותו עם הפייטן רבי פנחס ברבי יעקב הכהן מכפרא שליד טבריה, שחי במחצית השנייה של המאה השמינית, ונחשב ל"חותמה של התקופה הקלאסית" של הפיוט: בגניזת קהיר נמצאו יותר ממאה וארבעים מפיוטיו, ובהם סדרה על עשרים וארבע משמרות הכהונה, ורב סעדיה גאון מונה אותו בין המשוררים הקדמונים. הזיהוי אינו ודאי – ולכן באילן שלנו כתוב "ברבי יעקב?" ו"ופייטן?" בסימני שאלה.', 'The Question Marks', 'Some identify him with the paytan Rabbi Pinchas birabbi Yaakov HaKohen of Kafra near Tiberias, who lived in the second half of the eighth century, and is considered "the seal of the classical period" of piyyut: more than a hundred and forty of his piyyutim were found in the Cairo Genizah, among them a series on the twenty-four priestly courses, and Rav Saadia Gaon counts him among the ancient poets. The identification is not certain – so on our tree "birabbi Yaakov?" and "and paytan?" are written with question marks.'),
      sec('הקו המנוקד', 'מתחתיו יורד באילן שלנו קו מנוקד אל יהושפט בן יאשיהו: קו כזה מסמן כמה דורות, ובהם ראשי ישיבה שאין אנו יודעים את שמותיהם.', 'The Dotted Line', 'Below him on our tree a dotted line goes down to Yehoshafat ben Yoshiyahu: such a line marks several generations, among them heads of the yeshivah whose names we do not know.'),
    ],
  }),
  E({
    slug: 'yoshiyahu-avi-yehoshafat', spot2: 'יאשיהו', cats: ['roshei-yeshivat-eretz-yisrael'],
    name: L('יאשיהו', 'Yoshiyahu'), summary: L('אביהם של יהושפט וצמח, גאוני ארץ ישראל, מצאצאי ענן בן דוד.', 'The father of Yehoshafat and Tzemach, Geonim of the Land of Israel, a descendant of Anan ben David.'),
    rel: [], sources: [GIL, GENIZA],
    sections: [YOSHIYAHU],
  }),
  E({
    slug: 'yehoshafat-ben-yoshiyahu', spot2: 'יהושפט בן יאשיהו', cats: HEADS, roles: [GAON],
    name: L('יהושפט בן יאשיהו', 'Yehoshafat ben Yoshiyahu'), summary: L('גאון ארץ ישראל, מצאצאי ענן בן דוד.', 'Gaon of the Land of Israel, a descendant of Anan ben David.'),
    rel: [to('father', 'yoshiyahu-avi-yehoshafat'), to('sibling', 'tzemach-ben-yoshiyahu')], offices: [TVE(null, 4622, [], ['tzemach-ben-yoshiyahu'])], sources: [GIL, GENIZA],
    sections: [YOSHIYAHU, sec('הקו המנוקד', 'באילן שלנו יורד אליו קו מנוקד מרבי פנחס הכהן, גאון טבריה: קו כזה מסמן כמה דורות, ובהם ראשי ישיבה שאין אנו יודעים את שמותיהם.', 'The Dotted Line', 'On our tree a dotted line comes down to him from Rabbi Pinchas HaKohen, Gaon of Tiberias: such a line marks several generations, among them heads of the yeshivah whose names we do not know.')],
  }),
  E({
    slug: 'tzemach-ben-yoshiyahu', spot2: 'צמח בן יאשיהו', cats: HEADS, roles: [GAON],
    name: L('צמח בן יאשיהו', 'Tzemach ben Yoshiyahu'), summary: L('גאון ארץ ישראל כשלושים ואחת שנה, אחרי אחיו יהושפט.', 'Gaon of the Land of Israel for some thirty-one years, after his brother Yehoshafat.'),
    rel: [to('father', 'yoshiyahu-avi-yehoshafat')], offices: [TVE(4622, 4653, ['yehoshafat-ben-yoshiyahu'], ['rabbi-aharon-1-ben-moshe'])], sources: [GIL, GENIZA],
    sections: [YOSHIYAHU],
  }),
  // the Ben Meir family
  E({
    slug: 'moshe-ben-meir', spot2: 'משה בן מאיר', cats: ['roshei-yeshivat-eretz-yisrael'],
    name: L('משה בן מאיר', 'Moshe ben Meir'), summary: L('אבי משפחת בן מאיר, גאוני ארץ ישראל.', 'The father of the Ben Meir family, Geonim of the Land of Israel.'),
    rel: [], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'rabbi-aharon-1-ben-moshe', spot2: 'רבי אהרן א׳ בן משה', cats: HEADS, roles: [GAON],
    name: L('רבי אהרן א׳ בן משה', 'Rabbi Aharon I ben Moshe'), summary: L('בנו של משה בן מאיר, גאון טבריה אחרי צמח בן יאשיהו.', 'Moshe ben Meir’s son, Gaon of Tiberias after Tzemach ben Yoshiyahu.'),
    rel: [to('father', 'moshe-ben-meir')], offices: [TVE(4653, 4670, ['tzemach-ben-yoshiyahu'], ['rabbi-yitzhak-gaon-tveria'])], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'rabbi-yitzhak-gaon-tveria', spot2: 'רבי יצחק (גאון טבריה)', cats: HEADS, roles: [GAON],
    name: L('רבי יצחק (גאון טבריה)', 'Rabbi Yitzhak (Gaon of Tiberias)'), summary: L('גאון טבריה אחרי רבי אהרן בן משה.', 'Gaon of Tiberias after Rabbi Aharon ben Moshe.'),
    rel: [], offices: [TVE(4670, 4672, ['rabbi-aharon-1-ben-moshe'], ['rabbi-meir-gaon'])], sources: [GIL, GENIZA],
    sections: [BEN_MEIR, sec('סימן השאלה', 'באילן שלנו יורד אליו קו מנוקד, בסימן שאלה, ממשפחת בן מאיר: לא ידוע בוודאות אם היה מבני המשפחה.', 'The Question Mark', 'On our tree a dotted line, with a question mark, comes down to him from the Ben Meir family: it is not known for certain whether he was of the family.')],
  }),
  E({
    slug: 'rabbi-meir-gaon', spot2: 'רבי מאיר', cats: HEADS, roles: [GAON],
    name: L('רבי מאיר (גאון טבריה)', 'Rabbi Meir (Gaon of Tiberias)'), summary: L('בנו של רבי אהרן בן משה, גאון טבריה, אביו של רבי אהרן בן מאיר.', 'Rabbi Aharon ben Moshe’s son, Gaon of Tiberias, the father of Rabbi Aharon ben Meir.'),
    rel: [to('father', 'rabbi-aharon-1-ben-moshe')], offices: [TVE(4672, null, ['rabbi-yitzhak-gaon-tveria'], ['rabbi-yosef-1-gaon'])], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  F({
    slug: 'bat-moshe-ben-meir', spot2: 'בת משה', cats: ['roshei-yeshivat-eretz-yisrael'],
    name: L('בת משה', 'The daughter of Moshe'), summary: L('בתו של משה בן מאיר, סבתו של רבי יוסף גאון.', 'The daughter of Moshe ben Meir, the grandmother of Rabbi Yosef Gaon.'),
    rel: [to('father', 'moshe-ben-meir')], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'yochai-ben-bat-moshe', spot2: 'יוחי', cats: ['roshei-yeshivat-eretz-yisrael'],
    name: L('יוחי', 'Yochai'), summary: L('בנה של בת משה בן מאיר, אביו של רבי יוסף גאון.', 'The son of Moshe ben Meir’s daughter, the father of Rabbi Yosef Gaon.'),
    rel: [to('mother', 'bat-moshe-ben-meir')], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'rabbi-yosef-1-gaon', spot2: 'רבי יוסף א׳', cats: HEADS, roles: [GAON],
    name: L('רבי יוסף א׳', 'Rabbi Yosef I'), summary: L('גאון טבריה, נכדה של בת משה בן מאיר.', 'Gaon of Tiberias, the grandson of Moshe ben Meir’s daughter.'),
    rel: [to('father', 'yochai-ben-bat-moshe')], offices: [TVE(null, null, ['rabbi-meir-gaon'], ['rabbi-aharon-2-ben-meir'])], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'rabbi-aharon-2-ben-meir', spot2: 'רבי אהרן ב׳ בן מאיר', cats: HEADS, roles: [GAON],
    name: L('רבי אהרן ב׳ בן מאיר', 'Rabbi Aharon II ben Meir'), summary: L('גאון ארץ ישראל, שחלק על חכמי בבל ורב סעדיה גאון בקביעת הלוח.', 'Gaon of the Land of Israel, who disputed with the sages of Bavel and Rav Saadia Gaon over fixing the calendar.'),
    rel: [to('father', 'rabbi-meir-gaon')], offices: [TVE(null, 4686, ['rabbi-yosef-1-gaon'], ['rabbi-avraham-ben-aharon'])],
    sources: [GIL, GENIZA, L('ספר הזכרון לרב סעדיה גאון', 'The Sefer HaZikaron of Rav Saadia Gaon')],
    sections: [
      BEN_MEIR,
      sec('מחלוקת הלוח', 'בשנת 4682 (921–922 למניינם) הודיע רבי אהרן בן מאיר, בתוקף סמכותה של ארץ ישראל לקבוע את המועדים, שפסח של השנה יחול יומיים לפני הזמן שחישבו בבבל. רב סעדיה גאון, שהיה אז צעיר, וחכמי בבל וראש הגולה התנגדו לו בתוקף, ובאותה שנה חגגו קהילות ישראל את החגים בימים שונים. לבסוף גבר החשבון של בבל, והוא הלוח שבידינו – והמחלוקת חיזקה את מעמדו של רב סעדיה, שזמן קצר אחר כך נעשה גאון סורא.', 'The Calendar Dispute', 'In 4682 (921–922 CE) Rabbi Aharon ben Meir announced, by the authority of the Land of Israel to fix the festivals, that Pesach that year would fall two days before the time calculated in Bavel. Rav Saadia Gaon, then young, and the sages of Bavel and the Head of the Exile opposed him strongly, and that year the communities of Israel kept the festivals on different days. In the end the calculation of Bavel prevailed, and it is the calendar we have – and the dispute strengthened the standing of Rav Saadia, who a short time later became Gaon of Sura.'),
    ],
  }),
  E({
    slug: 'rabbi-avraham-ben-aharon', spot2: 'רבי אברהם בן אהרן', cats: HEADS, roles: [GAON],
    name: L('רבי אברהם בן אהרן', 'Rabbi Avraham ben Aharon'), summary: L('בנו של רבי אהרן בן מאיר, גאון טבריה.', 'Rabbi Aharon ben Meir’s son, Gaon of Tiberias.'),
    rel: [to('father', 'rabbi-aharon-2-ben-meir')], offices: [TVE(4686, 4693, ['rabbi-aharon-2-ben-meir'], [])], sources: [GIL, GENIZA],
    sections: [BEN_MEIR],
  }),
  E({
    slug: 'eli-ben-yehuda-hanazir', spot2: 'עלי בן יהודה הנזיר', cats: ['ishei-eretz-yisrael'], roles: [L('מדקדק', 'Grammarian')],
    name: L('עלי בן יהודה הנזיר', 'Eli ben Yehudah HaNazir'), summary: L('מדקדק מטבריה, שיש אומרים שהיה רבו של רב סעדיה גאון בדקדוק.', 'A grammarian of Tiberias, who some say was Rav Saadia Gaon’s teacher in grammar.'),
    rel: [{ ...to('student', 'rav-saadia-gaon'), uncertain: true }], sources: [GIL, L('אל־מסעודי, ספר ההתראה וההשגחה', 'al-Mas’udi, Kitab al-Tanbih wa-l-Ishraf')],
    sections: one('עלי בן יהודה הנזיר', 'עלי בן יהודה, שנקרא "הנזיר", היה מדקדק בטבריה בסוף המאה התשיעית ובתחילת העשירית, בימים שבהם הייתה טבריה מרכז חכמת הלשון והמסורה. חכמי ארץ ישראל ובבל העריכו את ידיעתו בלשון העברית. בשנים 4675–4680 (915–920 למניינם) שהה רב סעדיה גאון, בצעירותו, בטבריה, והשתלם שם בדקדוק, במסורה ובשירה. ההיסטוריון הערבי אל־מסעודי כותב שרב סעדיה למד אצל חכם טברייני בשם אבו כת׳יר יחיא בן זכריא, ויש חוקרים המזהים אותו עם עלי בן יהודה הנזיר – ולפי זה היה רבו של רב סעדיה בדקדוק. הזיהוי אינו מוכח, ולכן באילן שלנו יורד ממנו הקו אל רב סעדיה בסימן שאלה.', 'Eli ben Yehudah HaNazir', 'Eli ben Yehudah, called "the Nazirite", was a grammarian in Tiberias at the end of the ninth century and the start of the tenth, in the days when Tiberias was the centre of the study of language and the Masorah. The sages of the Land of Israel and of Bavel prized his knowledge of the Hebrew language. In the years 4675–4680 (915–920 CE) Rav Saadia Gaon, in his youth, stayed in Tiberias, and studied grammar, the Masorah and poetry there. The Arab historian al-Mas’udi writes that Rav Saadia learned from a sage of Tiberias named Abu Kathir Yahya ibn Zakariya, and some scholars identify him with Eli ben Yehudah HaNazir – by which he was Rav Saadia’s teacher in grammar. The identification is not proven, so on our tree the line from him to Rav Saadia has a question mark.'),
  }),

  // ── the Masoretes ──
  ...[
    ['avraham-ben-rikat', 'אברהם בן ריקאט', 'Avraham ben Rikat'],
    ['tzemach-ben-tzuara', 'צמח בן צוארה', 'Tzemach ben Tzu’arah'],
    ['achiyahu-hakohen-hechaver', 'אחיהו הכהן החבר', 'Achiyahu HaKohen HeChaver'],
  ].map(([slug, he, en]) => E({
    slug, spot2: he, cats: MASORA, roles: [MASORETE],
    name: L(he, en), summary: L('מראשוני בעלי המסורה בטבריה.', 'One of the first Masoretes in Tiberias.'),
    rel: [], sources: [L('רשימת בעלי המסורה מן הגניזה', 'The list of Masoretes from the Genizah')],
    sections: [MASORA_TEXT],
  })),
  E({
    slug: 'asher-hazaken-hagadol', spot2: 'אשר א׳ הזקן הגדול', cats: MASORA, roles: [MASORETE],
    name: L('אשר הזקן הגדול', 'Asher the Great Elder'), summary: L('אבי משפחת בן אשר, בעלי המסורה.', 'The father of the Ben Asher family of Masoretes.'),
    rel: [], sources: [DIKDUKEI],
    sections: [MASORA_TEXT, BEN_ASHER],
  }),
  E({ slug: 'nechemia-ben-asher', spot2: 'נחמיה בן אשר', cats: MASORA, roles: [MASORETE], name: L('נחמיה בן אשר', 'Nechemiah ben Asher'), summary: L('בעל מסורה ממשפחת בן אשר.', 'A Masorete of the Ben Asher family.'), rel: [to('father', 'asher-hazaken-hagadol')], sources: [DIKDUKEI], sections: [BEN_ASHER] }),
  E({ slug: 'moshe-1-ben-nechemia', spot2: 'משה א׳ בן נחמיה', cats: MASORA, roles: [MASORETE], name: L('משה א׳ בן נחמיה', 'Moshe I ben Nechemiah'), summary: L('בעל מסורה ממשפחת בן אשר.', 'A Masorete of the Ben Asher family.'), rel: [to('father', 'nechemia-ben-asher')], sources: [DIKDUKEI], sections: [BEN_ASHER] }),
  E({ slug: 'asher-2-ben-moshe', spot2: 'אשר ב׳ בן משה', cats: MASORA, roles: [MASORETE], name: L('אשר ב׳ בן משה', 'Asher II ben Moshe'), summary: L('בעל מסורה ממשפחת בן אשר.', 'A Masorete of the Ben Asher family.'), rel: [to('father', 'moshe-1-ben-nechemia')], sources: [DIKDUKEI], sections: [BEN_ASHER] }),
  E({
    slug: 'moshe-2-ben-asher', spot2: 'משה ב׳ בן אשר', cats: MASORA, roles: [MASORETE],
    name: L('משה ב׳ בן אשר', 'Moshe II ben Asher'), summary: L('בעל מסורה, כותב "מצחף קהיר" ואביו של אהרן בן אשר.', 'A Masorete, the writer of "the Cairo Codex" and the father of Aharon ben Asher.'),
    rel: [to('father', 'asher-2-ben-moshe')], sources: [DIKDUKEI, L('מצחף קהיר של הנביאים', 'The Cairo Codex of the Prophets')], sections: [BEN_ASHER],
  }),
  E({
    slug: 'aharon-ben-asher', spot2: 'אהרן בן אשר', cats: MASORA, roles: [L('גדול בעלי המסורה', 'The greatest of the Masoretes'), L('מחבר ספר "דקדוקי הטעמים"', 'Author of "Dikdukei HaTe’amim"')],
    name: L('אהרן בן אשר', 'Aharon ben Asher'), summary: L('גדול בעלי המסורה, שניקד והגיה את כתר ארם צובא.', 'The greatest of the Masoretes, who vocalised and corrected the Aleppo Codex.'),
    rel: [to('father', 'moshe-2-ben-asher'), to('plugta', 'moshe-ben-naftali')], sources: [DIKDUKEI, L('רמב״ם, הלכות ספר תורה ח, ד', 'Rambam, Laws of the Torah Scroll 8:4'), L('ספר החילופים למישאל בן עוזיאל', 'The Book of Differences of Mishael ben Uzziel')],
    sections: [
      sec('אהרן בן אשר', 'אהרן בן משה בן אשר, האחרון והגדול בשושלת בן אשר, חי בטבריה במחצית הראשונה של המאה העשירית. הוא ניקד, הטעים והוסיף מסורה לכתר ארם צובא, שכתב הסופר שלמה בן בויאעא – והרמב״ם כתב שעליו סמך בהלכות ספר תורה, "שהיו הכל סומכין עליו, לפי שהגיהו בן אשר ודקדק בו שנים הרבה". הוא חיבר את "דקדוקי הטעמים", ספר על כללי הניקוד והטעמים.', 'Aharon ben Asher', 'Aharon son of Moshe ben Asher, the last and greatest of the Ben Asher line, lived in Tiberias in the first half of the tenth century. He vocalised, accented and added the Masorah to the Aleppo Codex, written by the scribe Shlomo ben Buya’a – and the Rambam wrote that he relied on it in the laws of the Torah scroll, "for everyone relied on it, since Ben Asher corrected it and studied it closely for many years". He wrote "Dikdukei HaTe’amim", a book on the rules of the vowels and accents.'),
      BEN_ASHER,
      BEN_NAFTALI,
    ],
  }),
  E({ slug: 'naftali-baal-masora', spot2: 'נפתלי', cats: MASORA, roles: [MASORETE], name: L('נפתלי', 'Naftali'), summary: L('אבי משפחת בן נפתלי, בעלי המסורה.', 'The father of the Ben Naftali family of Masoretes.'), rel: [], sources: [L('ספר החילופים למישאל בן עוזיאל', 'The Book of Differences of Mishael ben Uzziel')], sections: [MASORA_TEXT] }),
  E({ slug: 'david-ben-naftali', spot2: 'דוד בן נפתלי', cats: MASORA, roles: [MASORETE], name: L('דוד בן נפתלי', 'David ben Naftali'), summary: L('בעל מסורה ממשפחת בן נפתלי.', 'A Masorete of the Ben Naftali family.'), rel: [to('father', 'naftali-baal-masora')], sources: [L('ספר החילופים למישאל בן עוזיאל', 'The Book of Differences of Mishael ben Uzziel')], sections: [BEN_NAFTALI] }),
  E({
    slug: 'moshe-ben-naftali', spot2: 'משה בן נפתלי', cats: MASORA, roles: [MASORETE],
    name: L('משה בן נפתלי', 'Moshe ben Naftali'), summary: L('בעל המסורה בר פלוגתיה של אהרן בן אשר.', 'The Masorete who was the bar plugta of Aharon ben Asher.'),
    rel: [to('father', 'david-ben-naftali')], sources: [L('ספר החילופים למישאל בן עוזיאל', 'The Book of Differences of Mishael ben Uzziel')], sections: [BEN_NAFTALI],
  }),
  E({
    slug: 'shlomo-ben-buyaa', spot2: 'שלמה בן בויאעא', cats: ['ishei-eretz-yisrael', ...MASORA], roles: [L('כותבו של כתר ארם צובא', 'The scribe of the Aleppo Codex')],
    name: L('שלמה בן בויאעא', 'Shlomo ben Buya’a'), summary: L('הסופר שכתב את אותיות כתר ארם צובא.', 'The scribe who wrote the letters of the Aleppo Codex.'),
    rel: [], sources: [L('כתר ארם צובא, הקולופון', 'The Aleppo Codex, the colophon')],
    sections: one('שלמה בן בויאעא', 'שלמה בן בויאעא היה הסופר שכתב את אותיות כתר ארם צובא, בסביבות שנת 4690 (930 למניינם); אהרן בן אשר ניקד אותו, הטעים אותו והוסיף לו את המסורה. הכתר נשמר דורות רבים בקהילת ארם צובא (חלב), ונחשב לכתב היד המדויק ביותר של התנ״ך.', 'Shlomo ben Buya’a', 'Shlomo ben Buya’a was the scribe who wrote the letters of the Aleppo Codex, around 4690 (930 CE); Aharon ben Asher vocalised it, accented it and added the Masorah. The codex was kept for many generations in the community of Aram Tzova (Aleppo), and is considered the most accurate manuscript of the Tanach.'),
  }),

  // ── the paytanim ──
  E({
    slug: 'shlomo-suleiman-al-sinjari', spot2: 'רבי שלמה סולימן אלסנג׳ארי', cats: ['paytanei-eretz-yisrael', 'paytanim'], roles: [L('פייטן', 'Paytan')],
    name: L('רבי שלמה סולימן אלסנג׳ארי', 'Rabbi Shlomo Suleiman al-Sinjari'), summary: L('פייטן פורה, שחיבר את מחזור היוצרות הקדום ביותר לפרשות התורה.', 'A prolific paytan, who wrote the earliest cycle of yotzerot for the Torah portions.'),
    rel: [], sources: [GENIZA, L('עזרא פליישר, שירת הקודש העברית בימי הביניים', 'Ezra Fleischer, Hebrew Liturgical Poetry in the Middle Ages')],
    sections: one('אלסנג׳ארי', 'רבי שלמה סולימן בן עמר אלסנג׳ארי חי כנראה במאה התשיעית ובתחילת העשירית. שמו מעיד שמשפחתו באה מאזור סנג׳אר שבצפון עיראק, אבל פיוטיו מראים שפעל בארץ ישראל או בקהילה שנהגה כמנהג ארץ ישראל. הוא חיבר מאות פיוטים, ובראשם מחזור יוצרות לכל פרשות התורה – הקדום והגדול שנשמר – שהיה לדגם ליוצרות שאחריו; כתבי יד רבים שלו נמצאו בגניזת קהיר. רב סעדיה גאון ופייטנים אחרים הושפעו ממנו.', 'Al-Sinjari', 'Rabbi Shlomo Suleiman ben Amr al-Sinjari lived apparently in the ninth century and the start of the tenth. His name shows that his family came from the Sinjar region in northern Iraq, but his piyyutim show that he worked in the Land of Israel or in a community that followed the custom of the Land of Israel. He wrote hundreds of piyyutim, first among them a cycle of yotzerot for all the Torah portions – the earliest and largest preserved – which became the model for the yotzerot after it; many manuscripts of his were found in the Cairo Genizah. Rav Saadia Gaon and other paytanim were influenced by him.'),
  }),
  E({
    slug: 'mevorach-ben-natan', spot2: 'מבורך בן נתן', cats: ['paytanei-eretz-yisrael', 'paytanim'], roles: [L('פייטן', 'Paytan')],
    name: L('מבורך בן נתן', 'Mevorach ben Natan'), summary: L('פייטן ירושלמי בתחילת המאה העשירית.', 'A paytan of Jerusalem at the start of the tenth century.'),
    rel: [], sources: [GENIZA],
    sections: one('מבורך בן נתן', 'מבורך בן נתן היה פייטן בירושלים בסביבות תחילת המאה העשירית. פיוטיו מובאים בפירושים ובספרים החל מאמצע המאה העשירית, וקינה שבראשי שורותיה חתום שמו נשתמרה בסידור הקראים. לכן יש שחשבו שהיה קראי, אבל זה אינו ודאי.', 'Mevorach ben Natan', 'Mevorach ben Natan was a paytan in Jerusalem around the start of the tenth century. His piyyutim are quoted in commentaries and books from the middle of the tenth century on, and a kinah with his name signed at the heads of its lines was preserved in the Karaite prayer book. So some thought he was a Karaite, but this is not certain.'),
  }),
];
