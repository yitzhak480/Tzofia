// The Talmud tree, fifth band: the fifth generation of the Amoraim, with
// their families. Teachers and students follow the poster's lines.
const { L, sec, to, nm, muv } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const CAT = {
  't2-sura': 'amoraim-sura', 't2-nehardea': 'amoraim-nehardea', 't2-tveria': 'amoraim-tveria', 't2-eretz': 'amoraim-eretz',
  't2-bavel': 'amoraim-bavel', 't2-reshgaluta': 'amoraim-rashei-hagola', 't2-nesiim': 'nesiim',
};
const A = (e) => {
  const first = [].concat(e.spot2)[0];
  const row = T2.find((r) => r[0] === first);
  if (!row) throw new Error(`"${first}" is not in the Talmud tree checklist`);
  let cats = e.cats || (row[2] === 'name' ? ['amoraim-family'] : [CAT[row[1]]]);
  if (row[1] === 't2-reshgaluta' && row[2] === 'box' && !cats.includes('rashei-hagola')) cats = [...cats, 'rashei-hagola'];
  return { gender: 'male', roles: [], ...e, cats, color: row[1] };
};
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const GEN5 = L('אמורא, דור ה׳', 'Amora, 5th generation');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const TVE = (from, to2, before, after) => HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', from, to2, before, after);
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const SDH = L('סדר הדורות', 'Seder HaDorot');
const BB22 = L('בבא בתרא כב ע״א', 'Bava Batra 22a');
const URS = L('ירושלמי שביעית ד, ב', 'Yerushalmi Sheviit 4:2');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';
// the story of Rav Ada bar Abba, told on the pages of the sages in it
const ADA = sec('רב אדא בר אבא',
  'רב אדא בר אבא, תלמידו של רבא, פגש את רב פפא ואת רב הונא בריה דרב יהושע כשיצאו מבית המדרש, ושאל אותם שאלות בשמועות של רבא. הם לא ידעו להשיב, והוא אמר להם: "בהא קיימיתו?" – במה עסקתם? הם נעלבו, ורב אדא בר אבא נפטר זמן קצר אחר כך. רבא אמר: "אני ענשתיו", ורב פפא ורב הונא בריה דרב יהושע חשבו כל אחד שהוא הסיבה לכך (בבא בתרא כב ע״א).',
  'Rav Ada bar Abba',
  'Rav Ada bar Abba, Rava’s student, met Rav Papa and Rav Huna son of Rav Yehoshua as they came out of the study hall, and asked them questions on Rava’s teachings. They could not answer, and he said to them: "Is this where you stand?" They were offended, and Rav Ada bar Abba died a short time later. Rava said: "I punished him", and Rav Papa and Rav Huna son of Rav Yehoshua each thought that he was the cause (Bava Batra 22a).');
// Rabbi Yonah and Rabbi Yose, heads of the Tiberias yeshivah together
const URSICINUS = sec('רבי יונה ורבי יוסי',
  'רבי יונה ורבי יוסי עמדו יחד בראש ישיבת טבריה, והתלמוד הירושלמי מביא את דבריהם פעמים רבות זה לצד זה – הם היו "בני פלוגתא" זה של זה. בימיהם, אחרי מרד גאלוס, ישב המצביא הרומי אורסיקינוס בארץ, ורבי יונה ורבי יוסי התירו לאפות לחיילי צבאו פת בשבת, משום שלא עשו זאת כדי להעביר את ישראל על דתם אלא לצורך הצבא (ירושלמי שביעית ד, ב).',
  'Rabbi Yonah and Rabbi Yose',
  'Rabbi Yonah and Rabbi Yose stood together at the head of the Tiberias yeshivah, and the Jerusalem Talmud brings their words many times side by side – they were each other’s "bar plugta". In their days, after the Gallus revolt, the Roman general Ursicinus stayed in the land, and Rabbi Yonah and Rabbi Yose permitted baking bread for his soldiers on Shabbat, since this was not done to make Jews abandon their religion but for the army’s needs (Yerushalmi Sheviit 4:2).');

module.exports = [
  // ── the Land of Israel ──
  A({
    slug: 'rabban-gamliel-5', spot2: 'רבן גמליאל ה׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN5, L('נשיא', 'Nasi')],
    name: L('רבן גמליאל ה׳', 'Rabban Gamliel V'),
    summary: L('בנו של הלל נשיאה, שעמד אחריו בנשיאות.', 'Son of Hillel Nesiah, who followed him as Nasi.'),
    rel: [to('father', 'hillel-nesia'), to('teacher', 'rabbi-abahu')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4125, to: 4140, before: ['hillel-nesia'], after: [] }],
    sources: [SDH, TTA],
    sections: [
      sec('רבן גמליאל ה׳', 'רבן גמליאל, בנו של הלל נשיאה, עמד בנשיאות אחרי אביו, בימים שבהם הלכה הנשיאות ונחלשה תחת שלטון רומא הנוצרית.', 'Rabban Gamliel V', 'Rabban Gamliel, the son of Hillel Nesiah, held the office of Nasi after his father, in the days when the office was growing weaker under the rule of Christian Rome.'),
      TS('רבו היה רבי אבהו.', 'His teacher was Rabbi Abahu.'),
    ],
  }),
  A({
    slug: 'rabbi-yona', spot2: 'רבי יונה', roles: [GEN5, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי יונה', 'Rabbi Yonah'),
    summary: L('ראש ישיבת טבריה אחרי רבי ירמיה, יחד עם רבי יוסי.', 'Head of the Tiberias yeshivah after Rabbi Yirmeyah, together with Rabbi Yose.'),
    rel: [to('teacher', 'rabbi-zeira'), to('teacher', 'rabbi-shmuel-bar-rav-yitzhak'), to('plugta', 'rabbi-yose-ben-zevida')],
    offices: [TVE(4100, 4130, ['rabbi-yirmeya'], ['rabbi-yose-ben-zevida', 'rabbi-mana'])],
    sources: [L('תענית כג ע״ב', 'Taanit 23b'), URS, TTA],
    sections: [
      sec('רבי יונה', 'רבי יונה היה צדיק נסתר. כשהיה העולם צריך לגשמים, היה אומר לבני ביתו: "אלך ואביא בזוזא חיטין", יוצא למקום סתר, לובש שק ומתפלל – ובאו הגשמים. כשחזר שאלו אותו אם הביא חיטים, והוא השיב: "אמרתי, הואיל ואתא מטרא – ירווח עלמא" (תענית כג ע״ב). בנו היה רבי מנא.', 'Rabbi Yonah', 'Rabbi Yonah was a hidden tzaddik. When the world needed rain, he would say to his household: "I will go and buy wheat for a zuz", go out to a hidden place, put on sackcloth and pray – and the rain came. When he returned they asked him if he had brought wheat, and he answered: "I said, since the rain has come, the world will have relief" (Taanit 23b). His son was Rabbi Mana.'),
      URSICINUS,
      TS('רבותיו היו רבי זירא, רבי שמואל בר רב יצחק ורבי ירמיה, שאחריו עמד בראש ישיבת טבריה. אחריו עמדו בראשה יחד רבי יוסי, בר פלוגתיה, ורבי מנא בנו, עד שנפטר רבי יוסי.', 'His teachers were Rabbi Zeira, Rabbi Shmuel bar Rav Yitzhak and Rabbi Yirmeyah, after whom he headed the Tiberias yeshivah. After him Rabbi Yose, his bar plugta, and his son Rabbi Mana headed it together, until Rabbi Yose died.'),
    ],
  }),
  A({
    slug: 'rabbi-yose-ben-zevida', spot2: 'רבי יוסי בן זבידא', roles: [GEN5, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי יוסי בן זבידא', 'Rabbi Yose ben Zevida'),
    summary: L('ראש ישיבת טבריה אחרי רבי יונה, בר פלוגתיה.', 'Head of the Tiberias yeshivah after Rabbi Yonah, his bar plugta.'),
    rel: [muv('rabbi-zeira'), to('teacher', 'rabbi-shmuel-bar-rav-yitzhak')],
    offices: [TVE(4130, null, ['rabbi-yona'], [])],
    sources: [URS, TTA],
    sections: [
      sec('רבי יוסי', 'רבי יוסי – בתלמוד הירושלמי הוא נקרא פשוט "רבי יוסי" – היה מגדולי חכמי ארץ ישראל בדורו, ועמד בראש ישיבת טבריה אחרי רבי יונה.', 'Rabbi Yose', 'Rabbi Yose – in the Jerusalem Talmud he is simply called "Rabbi Yose" – was one of the greatest sages of the Land of Israel in his generation, and headed the Tiberias yeshivah after Rabbi Yonah.'),
      URSICINUS,
      TS('רבותיו היו רבי זירא ורבי שמואל בר רב יצחק. הוא עמד בראש ישיבת טבריה אחרי רבי יונה, בר פלוגתיה – הם היו חברים, ולא רב ותלמיד, ורבי יוסי בא אחריו משום שרבי יונה נפטר לפניו. תלמידו המובהק היה רבי פנחס.', 'His teachers were Rabbi Zeira and Rabbi Shmuel bar Rav Yitzhak. He headed the Tiberias yeshivah after Rabbi Yonah, his bar plugta – they were colleagues, not teacher and student, and Rabbi Yose followed him because Rabbi Yonah died first. His talmid muvhak was Rabbi Pinchas.'),
    ],
  }),
  A({
    slug: 'rabbi-pinchas', spot2: 'רבי פנחס (בן דורו של רבי יונה)', roles: [GEN5],
    name: L('רבי פנחס', 'Rabbi Pinchas'),
    summary: L('בן דורו של רבי יונה, ותלמידו המובהק של רבי יוסי.', 'A contemporary of Rabbi Yonah, and the talmid muvhak of Rabbi Yose.'),
    rel: [muv('rabbi-yose-ben-zevida')], sources: [TTA],
    sections: one('רבי פנחס', 'רבי פנחס היה בן דורם של רבי יונה ורבי יוסי, ודבריו מובאים בתלמוד הירושלמי ובמדרשים.', 'Rabbi Pinchas', 'Rabbi Pinchas was a contemporary of Rabbi Yonah and Rabbi Yose, and his words are brought in the Jerusalem Talmud and the Midrashim.'),
  }),
  A({
    slug: 'rabbi-yose-berabbi-bun', spot2: 'רבי יוסי ברבי בון', roles: [GEN5],
    name: L('רבי יוסי ברבי בון', 'Rabbi Yose son of Rabbi Bun'),
    summary: L('מאחרוני חכמי התלמוד הירושלמי.', 'One of the last sages of the Jerusalem Talmud.'),
    rel: [maybe('father', 'ravin'), to('teacher', 'rabbi-yirmeya'), to('teacher', 'rabbi-chanina-berei-derabbi-abahu')], sources: [TTA],
    sections: [
      sec('רבי יוסי ברבי בון', 'רבי יוסי ברבי בון היה מאחרוני החכמים שדבריהם נכנסו לתלמוד הירושלמי, ושמו מופיע בו פעמים רבות.', 'Rabbi Yose son of Rabbi Bun', 'Rabbi Yose son of Rabbi Bun was one of the last sages whose words entered the Jerusalem Talmud, and his name appears in it many times.'),
      sec('סימן השאלה', 'הרב אהרן היימן, בספרו "תולדות תנאים ואמוראים", מזהה את רבין עם רבי בון, אביו של רבי יוסי. לכן באילן שלנו יורד קו מרבין אל רבי יוסי ברבי בון – בסימן שאלה, משום שזיהוי זה אינו ודאי.', 'The Question Mark', 'Rabbi Aharon Hyman, in his book "Toldot Tannaim VeAmoraim", identifies Ravin with Rabbi Bun, Rabbi Yose’s father. So on our tree a line goes down from Ravin to Rabbi Yose son of Rabbi Bun – with a question mark, since this identification is not certain.'),
      TS('רבותיו היו רבי ירמיה ורבי חנינא בריה דרבי אבהו.', 'His teachers were Rabbi Yirmeyah and Rabbi Chanina son of Rabbi Abahu.'),
    ],
  }),
  A({
    slug: 'rabbi-yehuda-bar-titus', spot2: 'רבי יהודה בר טיטס', roles: [GEN5],
    name: L('רבי יהודה בר טיטס', 'Rabbi Yehudah bar Titus'),
    summary: L('מחכמי ארץ ישראל, תלמיד רבי יהודה בן פזי.', 'One of the sages of the Land of Israel, Rabbi Yehudah ben Pazi’s student.'),
    rel: [to('teacher', 'rabbi-yehuda-ben-pazi')], sources: [TTA],
    sections: one('רבי יהודה בר טיטס', 'רבי יהודה בר טיטס היה מחכמי ארץ ישראל בדור החמישי של האמוראים, ודבריו מובאים בתלמוד הירושלמי ובמדרשים. רבו היה רבי יהודה בן פזי.', 'Rabbi Yehudah bar Titus', 'Rabbi Yehudah bar Titus was one of the sages of the Land of Israel in the fifth generation of the Amoraim, and his words are brought in the Jerusalem Talmud and the Midrashim. His teacher was Rabbi Yehudah ben Pazi.'),
  }),
  A({
    slug: 'rabbi-yehuda-bar-shalom', spot2: 'רבי יהודה בר שלום', roles: [GEN5],
    name: L('רבי יהודה בר שלום', 'Rabbi Yehudah bar Shalom'),
    summary: L('בעל אגדה, תלמיד רבי יונה.', 'A master of aggadah, Rabbi Yonah’s student.'),
    rel: [to('teacher', 'rabbi-yona'), to('plugta', 'rabbi-matanya-ben-rabbi-yudan')], sources: [TTA],
    sections: [
      sec('רבי יהודה בר שלום', 'רבי יהודה בר שלום היה מבעלי האגדה בארץ ישראל, ודבריו מובאים פעמים רבות במדרשים.', 'Rabbi Yehudah bar Shalom', 'Rabbi Yehudah bar Shalom was one of the masters of aggadah in the Land of Israel, and his words are brought many times in the Midrashim.'),
      TS('רבו היה רבי יונה, ורבי מתניה היה בר פלוגתיה.', 'His teacher was Rabbi Yonah, and Rabbi Matanyah was his bar plugta.'),
    ],
  }),
  A({
    slug: 'rabbi-matanya-ben-rabbi-yudan', spot2: 'רבי מתניה בן רבי יודן', roles: [GEN5],
    name: L('רבי מתניה בן רבי יודן', 'Rabbi Matanyah son of Rabbi Yudan'),
    summary: L('בר פלוגתיה של רבי יהודה בר שלום.', 'The bar plugta of Rabbi Yehudah bar Shalom.'),
    rel: [], sources: [TTA],
    sections: one('רבי מתניה', 'רבי מתניה בן רבי יודן היה מחכמי ארץ ישראל בדור החמישי, ובר פלוגתיה של רבי יהודה בר שלום.', 'Rabbi Matanyah', 'Rabbi Matanyah son of Rabbi Yudan was one of the sages of the Land of Israel in the fifth generation, and the bar plugta of Rabbi Yehudah bar Shalom.'),
  }),
  A({
    slug: 'rabbi-abba-mari-ben-abba', spot2: 'רבי אבא מרי בן אבא', roles: [GEN5],
    name: L('רבי אבא מרי בן אבא', 'Rabbi Abba Mari ben Abba'),
    summary: L('מחכמי טבריה, תלמיד רבי חזקיה.', 'One of the sages of Tiberias, Rabbi Chizkiyah’s student.'),
    rel: [to('teacher', 'rabbi-chizkiya')], sources: [TTA],
    sections: [TS('רבו היה רבי חזקיה.', 'His teacher was Rabbi Chizkiyah.')],
  }),
  A({
    slug: 'rabbi-shimon-bar-karsana', spot2: 'רבי שמעון בר כרסנא', roles: [GEN5],
    name: L('רבי שמעון בר כרסנא', 'Rabbi Shimon bar Karsana'),
    summary: L('מחכמי ארץ ישראל, תלמיד רבי אחא.', 'One of the sages of the Land of Israel, Rabbi Acha’s student.'),
    rel: [to('teacher', 'rabbi-acha')], sources: [TTA],
    sections: [TS('רבו היה רבי אחא.', 'His teacher was Rabbi Acha.')],
  }),
  A({
    slug: 'rabbi-abba-2', spot2: 'רבי אבא ב׳', roles: [GEN5],
    name: L('רבי אבא ב׳', 'Rabbi Abba II'),
    summary: L('תלמיד רבי זירא, רבי אבא ורבי ירמיה.', 'Student of Rabbi Zeira, Rabbi Abba and Rabbi Yirmeyah.'),
    rel: [to('teacher', 'rabbi-zeira'), to('teacher', 'rabbi-abba-1'), to('teacher', 'rabbi-yirmeya')], sources: [TTA],
    sections: [TS('רבותיו היו רבי זירא, רבי אבא (הראשון) ורבי ירמיה.', 'His teachers were Rabbi Zeira, Rabbi Abba (the first) and Rabbi Yirmeyah.')],
  }),

  // ── Sura and Naresh ──
  A({
    slug: 'rav-papa', spot2: 'רב פפא', roles: [GEN5, L('ראש ישיבת נרש', 'Head of the Naresh yeshivah')],
    name: L('רב פפא', 'Rav Papa'),
    summary: L('ראש ישיבת נרש שליד סורא אחרי רבא, שעשרת בניו נזכרים בהדרן.', 'Head of the Naresh yeshivah near Sura after Rava, whose ten sons are named in the Hadran.'),
    rel: [to('teacher', 'abaye'), to('teacher', 'rav-idi-bar-avin-1'), to('plugta', 'rav-huna-brei-drav-yehoshua'), to('plugta', 'rav-papi')],
    offices: [HEAD('ראש ישיבת נרש', 'Head of the Naresh yeshivah', 4113, 4132, ['rava'], [])],
    sources: [IRSG, L('פסחים קיג ע״א', 'Pesachim 113a'), BB22, L('נוסח ההדרן', 'The text of the Hadran')],
    sections: [
      sec('רב פפא', 'אחרי פטירת רבא ייסד רב פפא ישיבה בנרש, ליד סורא, ורב הונא בריה דרב יהושע היה "ריש כלה" אצלו (איגרת רב שרירא גאון). בימי רבא הייתה ישיבה אחת בלבד, ורבא עמד בראשה; אחרי פטירתו נחלקה שוב לשתיים – פומבדיתא, שבראשה רב נחמן בר יצחק, ונרש, שהיא חלק משושלת ישיבת סורא, ולכן אחרי רב פפא בא רב אשי. רב פפא התעשר מעשיית שכר, ואמר: "אי לאו דשכרי – לא איעתרי" – אילו לא עשיתי שכר, לא הייתי מתעשר (פסחים קיג ע״א). בנוסח ה"הדרן" שאומרים בסיום מסכת נזכרים "עשרה בני רב פפא".', 'Rav Papa', 'After Rava’s death Rav Papa founded a yeshivah in Naresh, near Sura, and Rav Huna son of Rav Yehoshua was "Reish Kallah" beside him (the Letter of Rav Sherira Gaon). In Rava’s days there was only one yeshivah, headed by Rava; after his death it split again in two – Pumbedita, headed by Rav Nachman bar Yitzhak, and Naresh, which is part of the line of the Sura yeshivah, and so after Rav Papa came Rav Ashi. Rav Papa grew rich from brewing beer, and said: "Had I not brewed beer, I would not have grown rich" (Pesachim 113a). In the text of the "Hadran" said at the completion of a tractate, the "ten sons of Rav Papa" are named.'),
      ADA,
      TS('רבותיו היו אביי, רב אידי בר אבין ורבא, שאחריו עמד בראש הישיבה. רב הונא בריה דרב יהושע ורב פפי היו בני פלוגתיה.', 'His teachers were Abaye, Rav Idi bar Avin and Rava, after whom he headed the yeshivah. Rav Huna son of Rav Yehoshua and Rav Papi were his study partners (bar plugta).'),
    ],
  }),
  A({
    slug: 'rav-huna-brei-drav-yehoshua', spot2: 'רב הונא בריה דרב יהושע', roles: [GEN5, L('ריש כלה', 'Reish Kallah')],
    name: L('רב הונא בריה דרב יהושע', 'Rav Huna son of Rav Yehoshua'),
    summary: L('ה"ריש כלה" בישיבת רב פפא, ובר פלוגתיה.', 'The "Reish Kallah" in Rav Papa’s yeshivah, and his bar plugta.'),
    rel: [to('teacher', 'rava'), to('teacher', 'rav-idi-bar-avin-1'), to('teacher', 'abaye'), to('plugta', 'rav-papa')],
    sources: [IRSG, L('שבת קיח ע״ב', 'Shabbat 118b'), BB22],
    sections: [
      sec('רב הונא בריה דרב יהושע', 'רב הונא בריה דרב יהושע היה "ריש כלה" – ראש הכלה – בישיבת רב פפא, ושניהם נזכרים יחד פעמים רבות בתלמוד. הוא אמר על עצמו: "תיתי לי דלא סגינא ארבע אמות בגילוי הראש" – יבוא עליי שכר, שלא הלכתי ארבע אמות בגילוי ראש (שבת קיח ע״ב).', 'Rav Huna son of Rav Yehoshua', 'Rav Huna son of Rav Yehoshua was the "Reish Kallah" – head of the Kallah gatherings – in Rav Papa’s yeshivah, and the two are named together many times in the Talmud. He said of himself: "May I be rewarded, for I never walked four cubits with my head uncovered" (Shabbat 118b).'),
      ADA,
      TS('רבותיו היו רבא, רב אידי בר אבין ואביי, והוא היה בר פלוגתיה של רב פפא.', 'His teachers were Rava, Rav Idi bar Avin and Abaye, and he was the bar plugta of Rav Papa.'),
    ],
  }),
  A({
    slug: 'rav-papi', spot2: 'רב פפי', roles: [GEN5],
    name: L('רב פפי', 'Rav Papi'),
    summary: L('תלמיד רבא ובר פלוגתיה של רב פפא.', 'Rava’s student and the bar plugta of Rav Papa.'),
    rel: [to('teacher', 'rava'), to('plugta', 'rav-papa')], sources: [TTA],
    sections: [TS('רבו היה רבא, והוא היה בר פלוגתיה של רב פפא.', 'His teacher was Rava, and he was the bar plugta of Rav Papa.')],
  }),

  // ── Pumbedita, Nehardea and Mechoza ──
  A({
    slug: 'rav-nachman-bar-yitzhak', spot2: 'רב נחמן בר יצחק', roles: [GEN5, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב נחמן בר יצחק', 'Rav Nachman bar Yitzhak'),
    summary: L('ראש ישיבת פומבדיתא אחרי רבא, שאמו כיסתה את ראשו כדי שיהיה בו יראת שמים.', 'Head of the Pumbedita yeshivah after Rava, whose mother covered his head so that he would have fear of Heaven.'),
    rel: [to('teacher', 'rav-nachman'), to('teacher', 'rav-chisda')],
    offices: [PUM(4113, 4117, ['rava'], ['rav-chama'])],
    sources: [IRSG, L('שבת קנו ע״ב', 'Shabbat 156b')],
    sections: [
      sec('אחרי רבא', 'בימי רבא הייתה ישיבה אחת בלבד, ורבא עמד בראשה. אחרי פטירתו נחלקה הישיבה שוב לשתיים: רב נחמן בר יצחק עמד בראש ישיבת פומבדיתא, ורב פפא בראש ישיבת נרש, שהיא חלק משושלת ישיבת סורא.', 'After Rava', 'In Rava’s days there was only one yeshivah, headed by Rava. After his death the yeshivah split again in two: Rav Nachman bar Yitzhak headed the Pumbedita yeshivah, and Rav Papa the Naresh yeshivah, which is part of the line of the Sura yeshivah.'),
      sec('כסי רישיך', 'החוזים בכוכבים אמרו לאמו של רב נחמן בר יצחק: "בריך גנבא הוי" – בנך יהיה גנב. היא לא הניחה לו לגלות את ראשו, ואמרה לו: "כסי רישיך, כי היכי דתיהוי עלך אימתא דשמיא" – כסה את ראשך, כדי שתהיה עליך יראת שמים. פעם אחת נפל הכיסוי מעל ראשו כשישב תחת דקל של אחר, ותקף אותו יצרו ועלה וגזם אשכול בשיניו (שבת קנו ע״ב).', 'Cover Your Head', 'The astrologers told Rav Nachman bar Yitzhak’s mother: "Your son will be a thief." She did not let him uncover his head, and said to him: "Cover your head, so that the fear of Heaven will be upon you." Once the covering fell from his head as he sat under someone else’s palm tree, and his desire overcame him and he climbed up and bit off a cluster with his teeth (Shabbat 156b).'),
      TS('רבותיו היו רב נחמן, רב חסדא ורבא, שאחריו עמד בראש ישיבת פומבדיתא. אחריו עמד בראשה רב חמא, תלמידו.', 'His teachers were Rav Nachman, Rav Chisda and Rava, after whom he headed the Pumbedita yeshivah. After him his student Rav Chama headed it.'),
    ],
  }),
  A({
    slug: 'rav-chama', spot2: 'רב חמא', roles: [GEN5, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב חמא', 'Rav Chama'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב נחמן בר יצחק.', 'Head of the Pumbedita yeshivah after Rav Nachman bar Yitzhak.'),
    rel: [to('teacher', 'rav-chisda'), to('teacher', 'rava')],
    offices: [PUM(4117, 4132, ['rav-nachman-bar-yitzhak'], ['rav-zvid'])],
    sources: [IRSG, TTA],
    sections: one('רב חמא', 'רב חמא, מנהרדעא, עמד בראש ישיבת פומבדיתא כחמש עשרה שנה, אחרי רב נחמן בר יצחק, ואחריו רב זביד (איגרת רב שרירא גאון). רבותיו היו רב חסדא, רבא ורב נחמן בר יצחק, שאחריו עמד בראש הישיבה.', 'Rav Chama', 'Rav Chama, of Nehardea, headed the Pumbedita yeshivah for some fifteen years, after Rav Nachman bar Yitzhak, and after him came Rav Zvid (the Letter of Rav Sherira Gaon). His teachers were Rav Chisda, Rava and Rav Nachman bar Yitzhak, after whom he headed the yeshivah.'),
  }),
  A({
    slug: 'rav-zvid', spot2: 'רב זביד', roles: [GEN5, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב זביד', 'Rav Zvid'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב חמא, תלמיד אביי ורבא.', 'Head of the Pumbedita yeshivah after Rav Chama, a student of Abaye and Rava.'),
    rel: [to('teacher', 'abaye'), to('teacher', 'rava')],
    offices: [PUM(4132, 4140, ['rav-chama'], [])],
    sources: [IRSG, TTA],
    sections: one('רב זביד', 'רב זביד עמד בראש ישיבת פומבדיתא אחרי רב חמא (איגרת רב שרירא גאון). רבותיו היו אביי, רבא ורב חמא, שאחריו עמד בראש הישיבה. אין להחליפו ברב זביד מנהרדעא, שהיה בדור שלפניו.', 'Rav Zvid', 'Rav Zvid headed the Pumbedita yeshivah after Rav Chama (the Letter of Rav Sherira Gaon). His teachers were Abaye, Rava and Rav Chama, after whom he headed the yeshivah. He is not to be confused with Rav Zvid of Nehardea, of the generation before.'),
  }),
  A({
    slug: 'ameimar', spot2: 'אמימר', roles: [GEN5, L('ראש ישיבת נהרדעא', 'Head of the Nehardea yeshivah')],
    name: L('אמימר', 'Ameimar'),
    summary: L('ראש ישיבת נהרדעא, שישב עם מר זוטרא ורב אשי בשער המלך.', 'Head of the Nehardea yeshivah, who sat with Mar Zutra and Rav Ashi at the king’s gate.'),
    rel: [to('teacher', 'rava'), to('teacher', 'rav-zvid-minehardea')], sources: [L('כתובות סא ע״א', 'Ketubot 61a'), TTA],
    sections: [
      sec('אמימר', 'אמימר עמד בראש הישיבה בנהרדעא, ופסקיו מובאים פעמים רבות בתלמוד. הגמרא מספרת שאמימר, מר זוטרא ורב אשי ישבו יחד בשער ביתו של המלך יזדגרד (כתובות סא ע״א). בנו היה מר בר אמימר.', 'Ameimar', 'Ameimar headed the yeshivah in Nehardea, and his rulings are brought many times in the Talmud. The Gemara relates that Ameimar, Mar Zutra and Rav Ashi sat together at the gate of King Yazdegerd’s palace (Ketubot 61a). His son was Mar bar Ameimar.'),
      TS('רבותיו היו רבא ורב זביד מנהרדעא.', 'His teachers were Rava and Rav Zvid of Nehardea.'),
    ],
  }),
  A({
    slug: 'rav-mesharshya', spot2: 'רב משרשיא', roles: [GEN5],
    name: L('רב משרשיא', 'Rav Mesharshya'),
    summary: L('תלמיד רבא, שהדריך את בניו כיצד ללמוד.', 'Rava’s student, who taught his sons how to learn.'),
    rel: [to('teacher', 'rava')], sources: [L('הוריות יב ע״א', 'Horayot 12a'), TTA],
    sections: one('עצה לבניו', 'רב משרשיא אמר לבניו: "כי בעיתו למיעל ולמיגמר קמי רבייכו – גרסו מתניתא ועולו לקמי רבייכו" – כשאתם רוצים להיכנס ללמוד לפני רבכם, חזרו תחילה על המשנה; וכשאתם יושבים לפני רבכם, הביטו אל פיו, שנאמר "והיו עיניך רואות את מוריך" (הוריות יב ע״א). רבו היה רבא.', 'Advice to His Sons', 'Rav Mesharshya said to his sons: "When you wish to go in and learn before your teacher, first review the Mishnah, and then go in before your teacher"; and when you sit before your teacher, look at his mouth, as it says, "and your eyes shall see your teachers" (Horayot 12a). His teacher was Rava.'),
  }),
  A({
    slug: 'yehuda-bar-marimar-1', spot2: 'יהודה בר מרימר א׳', roles: [GEN5],
    name: L('יהודה בר מרימר א׳', 'Yehudah bar Marimar I'),
    summary: L('תלמיד רבא.', 'Rava’s student.'),
    rel: [to('teacher', 'rava')], sources: [TTA],
    sections: [TS('רבו היה רבא.', 'His teacher was Rava.')],
  }),
  A({
    slug: 'ifa', spot2: 'עיפא', roles: [GEN5],
    name: L('עיפא', 'Ifa'),
    summary: L('בנו של רחבא דפומבדיתא ואחיו של אבימי, תלמיד רבה.', 'Son of Rechava of Pumbedita and brother of Avimi, Rabba’s student.'),
    rel: [to('father', 'rechava'), to('sibling', 'avimi'), to('teacher', 'rabba')], sources: [TTA],
    sections: one('עיפא ואבימי', 'עיפא ואבימי היו אחים, בניו של רחבא דפומבדיתא, ושניהם למדו לפני רבה.', 'Ifa and Avimi', 'Ifa and Avimi were brothers, the sons of Rechava of Pumbedita, and both learned before Rabba.'),
  }),
  A({
    slug: 'avimi', spot2: 'אבימי', roles: [GEN5],
    name: L('אבימי', 'Avimi'),
    summary: L('בנו של רחבא דפומבדיתא ואחיו של עיפא, תלמיד רבה.', 'Son of Rechava of Pumbedita and brother of Ifa, Rabba’s student.'),
    rel: [to('father', 'rechava'), to('teacher', 'rabba')], sources: [TTA],
    sections: one('עיפא ואבימי', 'עיפא ואבימי היו אחים, בניו של רחבא דפומבדיתא, ושניהם למדו לפני רבה. אין להחליפו באבימי שבדור השני, רבו של רב חסדא.', 'Ifa and Avimi', 'Ifa and Avimi were brothers, the sons of Rechava of Pumbedita, and both learned before Rabba. He is not to be confused with the Avimi of the second generation, Rav Chisda’s teacher.'),
  }),
  A({
    slug: 'rav-bivi-bar-abaye', spot2: 'רב ביבי בר אביי', roles: [GEN5],
    name: L('רב ביבי בר אביי', 'Rav Bivi bar Abaye'),
    summary: L('בנו של אביי, שמלאך המות היה מצוי אצלו.', 'Abaye’s son, whom the Angel of Death used to visit.'),
    rel: [to('father', 'abaye'), to('teacher', 'rav-yosef')], sources: [L('חגיגה ד ע״ב', 'Chagigah 4b'), TTA],
    sections: [
      sec('רב ביבי ומלאך המות', 'הגמרא מספרת: "רב ביבי בר אביי הוה שכיח גביה מלאך המות" – מלאך המות היה מצוי אצל רב ביבי בר אביי, וסיפר לו על אנשים שמתו שלא בזמנם (חגיגה ד ע״ב).', 'Rav Bivi and the Angel of Death', 'The Gemara relates: "The Angel of Death used to be found with Rav Bivi bar Abaye", and told him of people who died before their time (Chagigah 4b).'),
      TS('אביו היה אביי, ורבו היה רב יוסף.', 'His father was Abaye, and his teacher was Rav Yosef.'),
    ],
  }),
  A({
    slug: 'rav-ada-bar-abba', spot2: 'רב אדא בר אבא', roles: [GEN5],
    name: L('רב אדא בר אבא', 'Rav Ada bar Abba'),
    summary: L('תלמיד רבא, שהקשה לרב פפא ולרב הונא בריה דרב יהושע.', 'Rava’s student, who challenged Rav Papa and Rav Huna son of Rav Yehoshua.'),
    rel: [to('teacher', 'rava')], sources: [BB22],
    sections: [ADA, TS('רבו היה רבא.', 'His teacher was Rava.')],
  }),
  A({
    slug: 'rav-rechumi-1', spot2: 'רב רחומי א׳', roles: [GEN5],
    name: L('רב רחומי א׳', 'Rav Rechumi I'),
    summary: L('תלמיד רבא במחוזא, שנפטר בערב יום הכיפורים.', 'Rava’s student in Mechoza, who died on the eve of Yom Kippur.'),
    rel: [to('teacher', 'abaye'), to('teacher', 'rava')], sources: [L('כתובות סב ע״ב', 'Ketubot 62b')],
    sections: [
      sec('רב רחומי', 'רב רחומי למד לפני רבא במחוזא, ובכל שנה היה חוזר לביתו בערב יום הכיפורים. פעם אחת משכה אותו השמועה ולא בא. אשתו ציפתה לו ואמרה: "השתא אתי, השתא אתי", וכשלא בא – ירדה דמעה מעיניה. באותה שעה ישב על הגג, ונפל הגג תחתיו ונפטר (כתובות סב ע״ב).', 'Rav Rechumi', 'Rav Rechumi learned before Rava in Mechoza, and every year he would return home on the eve of Yom Kippur. Once his learning drew him in and he did not come. His wife waited for him, saying: "Now he is coming, now he is coming", and when he did not come – a tear fell from her eye. At that moment he was sitting on a roof, and the roof collapsed under him and he died (Ketubot 62b).'),
      TS('רבותיו היו אביי ורבא.', 'His teachers were Abaye and Rava.'),
    ],
  }),

  // ── the Heads of the Exile ──
  A({
    slug: 'natan-3', spot2: 'נתן ג׳', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('נתן ג׳', 'Natan III'), summary: L('ראש הגולה אחרי הונא בר מר עוקבן.', 'Head of the Exile after Huna son of Mar Ukvan.'),
    rel: [maybe('father', 'huna-bar-mar-ukvan')], offices: [RG(['huna-bar-mar-ukvan'], ['kahana-1'], 4120, 4140)], sources: [SOZ],
    sections: [
      sec('נתן ג׳', 'נתן עמד בראש הגולה אחרי הונא בר מר עוקבן, ואחריו כהנא.', 'Natan III', 'Natan headed the Exile after Huna son of Mar Ukvan, and after him came Kahana.'),
      sec('סימן השאלה', 'באילן שלנו יש סימן שאלה בקו שיורד אליו מהונא בר מר עוקבן. ' + RG_SOURCES + ' הקו שממשיך מתחתיו אינו שלו, אלא קו הצאצאים של רבה בר אבוה, שעובר לידו בדרכו אל משפחת רב שרירא גאון.', 'The Question Mark', 'On our tree there is a question mark on the line coming down to him from Huna son of Mar Ukvan. ' + RG_SOURCES_EN + ' The line that continues below him is not his, but the line of Rabba bar Avuha’s descendants, which passes beside him on its way to the family of Rav Sherira Gaon.'),
    ],
  }),
  A({
    slug: 'kahana-1', spot2: 'כהנא א׳', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('כהנא א׳', 'Kahana I'), summary: L('ראש הגולה אחרי נתן.', 'Head of the Exile after Natan.'),
    rel: [], offices: [RG(['natan-3'], [], 4140, 4160)], sources: [SOZ],
    sections: one('כהנא א׳', 'כהנא עמד בראש הגולה אחרי נתן. ' + RG_SOURCES, 'Kahana I', 'Kahana headed the Exile after Natan. ' + RG_SOURCES_EN),
  }),
];
