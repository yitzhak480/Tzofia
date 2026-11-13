// The Talmud tree, seventh band: the generation after Rav Ashi – the heads
// of Sura and Pumbedita, the Heads of the Exile, the end of the Nesi'im and
// the yeshivot in the Land of Israel, and the kings of Himyar.
const { L, sec, to, muv } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

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
const GEN7 = L('אמורא, דור ז׳', 'Amora, 7th generation');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const SURA = (from, to2, before, after) => HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', from, to2, before, after);
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const KING = (from, to2, before, after) => HEAD('שנות מלוכה', 'Reign', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const HIM = L('כתובות חמיריות מתימן', 'Himyarite inscriptions from Yemen');
const BB12 = L('בבא בתרא יב ע״ב', 'Bava Batra 12b');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';
// how Mar bar Rav Ashi became head of the yeshivah (with Rav Acha of Difti)
const TAVYUMI = sec('טביומי חתים',
  'מר בר רב אשי עמד בשוק של מחוזא, ושמע שוטה אחד אומר: "ריש מתיבתא דמליך במתא מחסיא – טביומי חתים" – ראש הישיבה שימלוך במתא מחסיא, חתימתו "טביומי". אמר: "מאן חתים טביומי בר מינאי?" – מי חותם "טביומי" מלבדי? הלך למתא מחסיא, ומצא שבאותה שעה רצו החכמים למנות את רב אחא מדפתי לראש הישיבה – ומינו אותו במקומו (בבא בתרא יב ע״ב).',
  'Tavyumi Signs',
  'Mar bar Rav Ashi was standing in the market of Mechoza, and heard a fool saying: "The head of the yeshivah who will reign in Mata Mechasya – his signature is Tavyumi." He said: "Who signs Tavyumi besides me?" He went to Mata Mechasya, and found that at that very hour the sages wished to appoint Rav Acha of Difti as head of the yeshivah – and they appointed him in his place (Bava Batra 12b).');
// the decrees of King Peroz, in which these sages were killed
const PEROZ = sec('גזירות פירוז',
  'בימי פירוז מלך פרס באו גזירות קשות על יהודי בבל: בתי כנסת נסגרו, ילדים נלקחו, והחכמים נרדפו. בשנת 4228 נהרגו רב אמימר בר מר ינוקא ורב משרשיא בר פקוד, ובשנה שאחריה ראש הגולה הונא מר (איגרת רב שרירא גאון) – ולכן באילן שלנו יש להבה ליד שמם: הם נהרגו על קידוש השם.',
  'The Decrees of Peroz',
  'In the days of Peroz king of Persia harsh decrees fell on the Jews of Bavel: synagogues were closed, children were taken, and the sages were persecuted. In 4228 Rav Ameimar bar Mar Yanuka and Rav Mesharshya bar Pakod were killed, and the year after, the Head of the Exile Huna Mar (the Letter of Rav Sherira Gaon) – so on our tree there is a flame beside their names: they were killed for the sanctification of God’s Name.');
const EVENT = 'churban-hayeshivot-eretz-yisrael';
const EVENT_TEXT = sec('חורבן הישיבות בארץ ישראל',
  'בדור הזה הלכו הישיבות בארץ ישראל ונחלשו תחת שלטון רומא הנוצרית, ואחרי מותו של רבן גמליאל השישי, הנשיא האחרון, ביטלו הקיסרים את הנשיאות. באילן שלנו יורדים קווים מאחרוני חכמי ארץ ישראל – רבי מנא, רבי אבין, רבי תנחומא בר אבא, רבי יוסטא בר שונם ורבי שמואל ברבי יוסי ברבי בון – ומרבן גמליאל השישי, אל "חורבן הישיבות בארץ ישראל וביטול הנשיאות".',
  'The Destruction of the Yeshivot in the Land of Israel',
  'In this generation the yeshivot in the Land of Israel grew weaker under the rule of Christian Rome, and after the death of Rabban Gamliel VI, the last Nasi, the emperors abolished the office of Nasi. On our tree lines go down from the last sages of the Land of Israel – Rabbi Mana, Rabbi Avin, Rabbi Tanchuma bar Abba, Rabbi Yusta bar Shunam and Rabbi Shmuel son of Rabbi Yose son of Rabbi Bun – and from Rabban Gamliel VI, to "the destruction of the yeshivot in the Land of Israel and the end of the office of Nasi".');

module.exports = [
  // ── the end in the Land of Israel ──
  // the event circle is black on the poster
  ({ ...A({
    slug: EVENT, kind: 'other', spot2: 'חורבן הישיבות בארץ ישראל וביטול הנשיאות', cats: ['events-second-tree'],
    roles: [L('אירוע', 'Event')], life: [4185, null],
    name: L('חורבן הישיבות בארץ ישראל וביטול הנשיאות', 'The Destruction of the Yeshivot in the Land of Israel and the End of the Nesi’im'),
    summary: L('סוף תקופת האמוראים בארץ ישראל: הישיבות נחלשו והנשיאות בוטלה.', 'The end of the Amoraim in the Land of Israel: the yeshivot declined and the office of Nasi was abolished.'),
    rel: ['rabbi-mana', 'rabbi-avin', 'rabbi-tanchuma-bar-abba', 'rabbi-yusta-bar-shunam', 'rabbi-shmuel-berabbi-yose-berabbi-bun', 'rabban-gamliel-6'].map((s) => to('related', s)),
    sources: [L('קודקס תאודוסיאנוס טז, ח, כט', 'Codex Theodosianus 16.8.29'), TTA],
    sections: [EVENT_TEXT],
  }), color: 'ink' }),
  A({
    slug: 'rabban-gamliel-6', spot2: 'רבן גמליאל ו׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN7, L('הנשיא האחרון', 'The last Nasi')],
    name: L('רבן גמליאל ו׳', 'Rabban Gamliel VI'),
    summary: L('הנשיא האחרון, שאחריו בוטלה הנשיאות.', 'The last Nasi, after whom the office was abolished.'),
    rel: [to('father', 'rabbi-yehuda-nesia-3')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4160, to: 4185, before: ['rabbi-yehuda-nesia-3'], after: [] }],
    sources: [L('קודקס תאודוסיאנוס טז, ח, כב; טז, ח, כט', 'Codex Theodosianus 16.8.22; 16.8.29'), TTA],
    sections: [
      sec('הנשיא האחרון', 'רבן גמליאל השישי, בנו של רבי יהודה נשיאה השלישי, היה האחרון בשושלת הנשיאים מבית הלל, שעמדה בראש העם בארץ ישראל כמה מאות שנים. הקיסרים הנוצרים צמצמו את סמכויותיו, ואחרי מותו לא מינו נשיא אחר, והנשיאות בוטלה.', 'The Last Nasi', 'Rabban Gamliel VI, the son of Rabbi Yehudah Nesiah III, was the last in the line of Nesi’im of the house of Hillel, which had led the people in the Land of Israel for several hundred years. The Christian emperors limited his powers, and after his death no other Nasi was appointed, and the office came to an end.'),
      EVENT_TEXT,
    ],
  }),
  A({
    slug: 'rabbi-pinchas-baala-shel-rachel', spot2: 'רבי פנחס (בעלה של רחל)', roles: [GEN7],
    name: L('רבי פנחס (בעלה של רחל)', 'Rabbi Pinchas (Rachel’s husband)'),
    summary: L('מאחרוני חכמי ארץ ישראל, בעלה של רחל.', 'One of the last sages of the Land of Israel, Rachel’s husband.'),
    rel: [to('spouse', 'rachel-eshet-rabbi-pinchas')], sources: [TTA],
    sections: one('רבי פנחס', 'רבי פנחס היה מאחרוני חכמי ארץ ישראל. באילן שלנו רשומה לידו אשתו, רחל. אין להחליפו ברבי פנחס, תלמידו המובהק של רבי יוסי, שהיה בדור שלפניו.', 'Rabbi Pinchas', 'Rabbi Pinchas was one of the last sages of the Land of Israel. On our tree his wife, Rachel, is written beside him. He is not to be confused with Rabbi Pinchas, the talmid muvhak of Rabbi Yose, of the generation before.'),
  }),
  F({
    slug: 'rachel-eshet-rabbi-pinchas', spot2: 'רחל (אשת רבי פנחס)', roles: [],
    name: L('רחל (אשת רבי פנחס)', 'Rachel (Rabbi Pinchas’s wife)'),
    summary: L('אשתו של רבי פנחס.', 'Rabbi Pinchas’s wife.'),
    rel: [], sources: [TTA],
    sections: one('רחל', 'רחל הייתה אשתו של רבי פנחס, מאחרוני חכמי ארץ ישראל.', 'Rachel', 'Rachel was the wife of Rabbi Pinchas, one of the last sages of the Land of Israel.'),
  }),
  A({
    slug: 'moshe-mikritim', spot2: 'משה מכרתים', cats: ['false-messiahs'], roles: [L('משיח שקר', 'False messiah')],
    name: L('משה מכרתים', 'Moshe of Crete'),
    summary: L('משיח השקר שהבטיח ליהודי כרתים להעבירם בים ביבשה.', 'The false messiah who promised the Jews of Crete to lead them through the sea on dry land.'),
    rel: [], life: [4208, null], sources: [L('סוקרטס סכולסטיקוס, תולדות הכנסייה ז, לח', 'Socrates Scholasticus, Ecclesiastical History 7.38')],
    sections: one('משה מכרתים', 'בסביבות שנת 4208 (448 למניינם) קם באי כרתים אדם שקרא לעצמו משה, וטען שנשלח להוציא את היהודים מן הגלות ולהעבירם בים ביבשה, כמשה רבנו, אל ארץ ישראל. יהודים רבים עזבו את עסקיהם והלכו אחריו, וביום שקבע עלו על צוק וקפצו לים לפי מצוותו – ורבים טבעו. משה עצמו נעלם.', 'Moshe of Crete', 'Around 4208 (448 CE) a man arose on the island of Crete who called himself Moshe, and claimed that he had been sent to bring the Jews out of exile and lead them through the sea on dry land, like Moshe Rabbeinu, to the Land of Israel. Many Jews left their affairs and followed him, and on the day he set they went up on a cliff and leapt into the sea at his command – and many drowned. Moshe himself disappeared.'),
  }),

  // ── Sura ──
  A({
    slug: 'marimar', spot2: 'מרימר', cats: ['amoraim-rashei-hagola', 'rashei-hagola', 'amoraim-sura'],
    roles: [GEN7, L('ראש הגולה', 'Head of the Exile'), L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('מרימר', 'Marimar'),
    summary: L('ראש הגולה, ואחרי רב אשי גם ראש ישיבת סורא.', 'Head of the Exile, and after Rav Ashi also head of the Sura yeshivah.'),
    rel: [to('teacher', 'rav-huna-avi-ravina')],
    offices: [RG(['mar-zutra-1'], ['rav-huna-brei-drav-natan'], 4175, 4192), SURA(4187, 4192, ['rav-ashi'], ['rav-idi-bar-avin-2'])],
    sources: [IRSG, SOZ],
    sections: [
      sec('מרימר', 'מרימר עמד בראש הגולה אחרי מר זוטרא, ואחרי פטירת רב אשי עמד גם בראש ישיבת סורא – ולכן באילן שלנו תיבתו צבועה בשני צבעים, של ראשי הגולה ושל סורא.', 'Marimar', 'Marimar headed the Exile after Mar Zutra, and after Rav Ashi’s death he also headed the Sura yeshivah – so on our tree his box is in two colours, of the Heads of the Exile and of Sura.'),
      TS('רבו היה רב הונא, אביהם של רב נחמן ורבינא, ורב אשי, שאחריו עמד בראש ישיבת סורא. אחריו עמד בראש הישיבה רב אידי בר אבין, ובראש הגולה רב הונא בריה דרב נתן.', 'His teacher was Rav Huna, the father of Rav Nachman and Ravina, and Rav Ashi, after whom he headed the Sura yeshivah. After him Rav Idi bar Avin headed the yeshivah, and Rav Huna son of Rav Natan the Exile.'),
    ],
  }),
  A({
    slug: 'rav-idi-bar-avin-2', spot2: 'רב אידי בר אבין ב׳', roles: [GEN7, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רב אידי בר אבין ב׳', 'Rav Idi bar Avin II'),
    summary: L('ראש ישיבת סורא אחרי מרימר.', 'Head of the Sura yeshivah after Marimar.'),
    rel: [to('teacher', 'rav-ashi')], offices: [SURA(4192, 4212, ['marimar'], ['rav-nachman-bar-rav-huna'])], sources: [IRSG],
    sections: [TS('רבו היה רב אשי, ומרימר, שאחריו עמד בראש ישיבת סורא. אחריו עמד בראשה רב נחמן בר רב הונא.', 'His teacher was Rav Ashi, and Marimar, after whom he headed the Sura yeshivah. After him Rav Nachman bar Rav Huna headed it.')],
  }),
  A({
    slug: 'rav-nachman-bar-rav-huna', spot2: 'רב נחמן בר רב הונא', roles: [GEN7, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רב נחמן בר רב הונא', 'Rav Nachman bar Rav Huna'),
    summary: L('ראש ישיבת סורא אחרי רב אידי בר אבין, אחיו של רבינא השני.', 'Head of the Sura yeshivah after Rav Idi bar Avin, the brother of Ravina II.'),
    rel: [to('father', 'rav-huna-avi-ravina')], offices: [SURA(4212, 4215, ['rav-idi-bar-avin-2'], ['mar-bar-rav-ashi'])], sources: [IRSG],
    sections: [TS('אביו היה רב הונא, ואחיו רבינא השני. הוא עמד בראש ישיבת סורא אחרי רב אידי בר אבין, רבו, ואחריו מר בר רב אשי.', 'His father was Rav Huna, and his brother Ravina II. He headed the Sura yeshivah after Rav Idi bar Avin, his teacher, and after him came Mar bar Rav Ashi.')],
  }),
  A({
    slug: 'mar-bar-rav-ashi', spot2: 'מר בר רב אשי "טביומי"', roles: [GEN7, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('מר בר רב אשי (טביומי)', 'Mar bar Rav Ashi (Tavyumi)'),
    summary: L('בנו של רב אשי, שנקרא "טביומי", ראש ישיבת סורא.', 'Rav Ashi’s son, called "Tavyumi", head of the Sura yeshivah.'),
    rel: [to('father', 'rav-ashi')], offices: [SURA(4215, 4228, ['rav-nachman-bar-rav-huna'], [])], sources: [BB12, IRSG],
    sections: [TAVYUMI, TS('אביו היה רב אשי. הוא עמד בראש ישיבת סורא אחרי רב נחמן בר רב הונא, רבו.', 'His father was Rav Ashi. He headed the Sura yeshivah after Rav Nachman bar Rav Huna, his teacher.')],
  }),
  A({
    slug: 'rav-mesharshya-bar-pakod', spot2: 'רב משרשיא בר פקוד', roles: [GEN7, L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('רב משרשיא בר פקוד', 'Rav Mesharshya bar Pakod'),
    summary: L('נהרג על קידוש השם בגזירות פירוז.', 'Killed for the sanctification of God’s Name in the decrees of Peroz.'),
    rel: [to('teacher', 'rav-acha-brei-drav-avya')], life: [null, 4228], sources: [IRSG],
    sections: [PEROZ, TS('רבו היה רב אחא בריה דרב אויא.', 'His teacher was Rav Acha son of Rav Avya.')],
  }),
  A({
    slug: 'rav-ameimar-bar-mar-yanuka', spot2: 'רב אמימר בר מר ינוקא', roles: [GEN7, L('נהרג על קידוש השם', 'Killed for the sanctification of God’s Name')],
    name: L('רב אמימר בר מר ינוקא', 'Rav Ameimar bar Mar Yanuka'),
    summary: L('נהרג על קידוש השם בגזירות פירוז.', 'Killed for the sanctification of God’s Name in the decrees of Peroz.'),
    rel: [], life: [null, 4228], sources: [IRSG],
    sections: [PEROZ],
  }),

  // ── Pumbedita ──
  A({
    slug: 'rav-gviha-mibei-katil', spot2: 'רב גביהה מבי כתיל', roles: [GEN7, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב גביהה מבי כתיל', 'Rav Geviha of Bei Katil'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב אחא בר רבא.', 'Head of the Pumbedita yeshivah after Rav Acha bar Rava.'),
    rel: [to('teacher', 'mar-zutra-1')], offices: [PUM(4178, 4193, ['rav-acha-bar-rava'], ['rafram-2'])], sources: [IRSG],
    sections: [TS('רבו היה מר זוטרא, ורב אחא בר רבא, שאחריו עמד בראש ישיבת פומבדיתא. אחריו עמד בראשה רפרם השני.', 'His teacher was Mar Zutra, and Rav Acha bar Rava, after whom he headed the Pumbedita yeshivah. After him Rafram II headed it.')],
  }),
  A({
    slug: 'rafram-2', spot2: 'רפרם ב׳', roles: [GEN7, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רפרם ב׳', 'Rafram II'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב גביהה.', 'Head of the Pumbedita yeshivah after Rav Geviha.'),
    rel: [to('teacher', 'rav-ashi')], offices: [PUM(4193, 4203, ['rav-gviha-mibei-katil'], ['rav-rechumi-2'])], sources: [IRSG],
    sections: [TS('רבו היה רב אשי, ורב גביהה, שאחריו עמד בראש ישיבת פומבדיתא. רב אבהו היה "ריש כלה" אצלו, ואחריו עמד בראש הישיבה רב רחומי.', 'His teacher was Rav Ashi, and Rav Geviha, after whom he headed the Pumbedita yeshivah. Rav Avahu was "Reish Kallah" beside him, and after him Rav Rechumi headed the yeshivah.')],
  }),
  A({
    slug: 'rav-avahu-reish-kalla', spot2: 'רב אבהו', roles: [GEN7, L('ריש כלה', 'Reish Kallah')],
    name: L('רב אבהו', 'Rav Avahu'),
    summary: L('"ריש כלה" בישיבת רפרם בפומבדיתא.', '"Reish Kallah" in Rafram’s yeshivah in Pumbedita.'),
    rel: [to('teacher', 'rav-ashi')], sources: [IRSG],
    sections: [TS('רבו היה רב אשי, והוא היה "ריש כלה" – ראש הכלה – אצל רפרם, ראש ישיבת פומבדיתא. אין להחליפו ברבי אבהו מקיסריה.', 'His teacher was Rav Ashi, and he was "Reish Kallah" – head of the Kallah gatherings – beside Rafram, head of the Pumbedita yeshivah. He is not to be confused with Rabbi Abahu of Caesarea.')],
  }),
  A({
    slug: 'rav-rechumi-2', spot2: 'רב רחומי ב׳', roles: [GEN7, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב רחומי ב׳', 'Rav Rechumi II'),
    summary: L('ראש ישיבת פומבדיתא אחרי רפרם השני.', 'Head of the Pumbedita yeshivah after Rafram II.'),
    rel: [to('teacher', 'ravina-1')], offices: [PUM(4203, 4216, ['rafram-2'], [])], sources: [IRSG],
    sections: [TS('רבו היה רבינא, ורפרם השני, שאחריו עמד בראש ישיבת פומבדיתא.', 'His teacher was Ravina, and Rafram II, after whom he headed the Pumbedita yeshivah.')],
  }),

  // ── the Heads of the Exile ──
  A({
    slug: 'rav-huna-brei-drav-natan', spot2: 'רב הונא בריה דרב נתן', roles: [GEN7, L('ראש הגולה', 'Head of the Exile')],
    name: L('רב הונא בריה דרב נתן', 'Rav Huna son of Rav Natan'),
    summary: L('ראש הגולה אחרי מרימר, תלמידו המובהק של רב אחא בריה דרב אויא.', 'Head of the Exile after Marimar, the talmid muvhak of Rav Acha son of Rav Avya.'),
    rel: [muv('rav-acha-brei-drav-avya'), to('teacher', 'rav-ashi')],
    offices: [RG(['marimar'], ['mar-zutra-2'], 4192, 4205)], sources: [SOZ, L('זבחים יט ע״א', 'Zevachim 19a')],
    sections: [
      sec('רב הונא בר נתן', 'רב הונא בר נתן עמד בראש הגולה אחרי מרימר. הגמרא מספרת שעמד לפני המלך יזדגרד, והמלך עצמו תיקן את חגורתו ואמר: "כהונה ממלכה" – אתם ממלכת כהנים (זבחים יט ע״א).', 'Rav Huna bar Natan', 'Rav Huna bar Natan headed the Exile after Marimar. The Gemara relates that he stood before King Yazdegerd, and the king himself straightened his belt and said: "A kingdom of priests" (Zevachim 19a).'),
      sec('סימן השאלה', 'באילן שלנו יש סימן שאלה בקו שיורד ממנו. ' + RG_SOURCES, 'The Question Mark', 'On our tree there is a question mark on the line going down from him. ' + RG_SOURCES_EN),
      TS('רבותיו היו רב אחא בריה דרב אויא, שהיה תלמידו המובהק, ורב אשי.', 'His teachers were Rav Acha son of Rav Avya, whose talmid muvhak he was, and Rav Ashi.'),
    ],
  }),
  A({
    slug: 'mar-zutra-2', spot2: 'מר זוטרא ב׳', roles: [GEN7, L('ראש הגולה', 'Head of the Exile')],
    name: L('מר זוטרא ב׳', 'Mar Zutra II'), summary: L('ראש הגולה אחרי רב הונא בר נתן.', 'Head of the Exile after Rav Huna bar Natan.'),
    rel: [], offices: [RG(['rav-huna-brei-drav-natan'], [], 4205, 4215)], sources: [SOZ],
    sections: one('מר זוטרא ב׳', 'מר זוטרא עמד בראש הגולה אחרי רב הונא בר נתן. ' + RG_SOURCES, 'Mar Zutra II', 'Mar Zutra headed the Exile after Rav Huna bar Natan. ' + RG_SOURCES_EN),
  }),

  // ── the kings of Himyar ──
  A({
    slug: 'abu-karib-asad', spot2: 'אבו כרב אסעד', roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('אבו כרב אסעד', 'Abu Karib As’ad'),
    summary: L('מלך חמיר שלפי המסורת הערבית התגייר והביא חכמים יהודים לתימן.', 'King of Himyar who, by the Arab tradition, converted and brought Jewish sages to Yemen.'),
    rel: [to('father', 'malkikarib-yuhamin')], offices: [KING(4150, 4200, ['malkikarib-yuhamin'], [])],
    sources: [HIM, L('אבן אסחאק, סירת הנביא', 'Ibn Ishaq, Sirat Rasul Allah')],
    sections: one('אבו כרב אסעד', 'אבו כרב אסעד, בנו של מלכיכרב יהאמן, היה מגדולי מלכי חמיר. לפי המסורת הערבית יצא למלחמה על העיר יתרב (מדינה), ושני חכמים יהודים מן העיר שכנעו אותו לחדול ממנה; הוא קיבל את דתם, הביא אותם עמו לתימן, ועם רב הלך אחריו.', 'Abu Karib As’ad', 'Abu Karib As’ad, the son of Malkikarib Yuha’min, was one of the greatest kings of Himyar. By the Arab tradition he went to war against the city of Yathrib (Medina), and two Jewish sages from the city persuaded him to stop; he accepted their religion, brought them with him to Yemen, and many people followed him.'),
  }),
  A({
    slug: 'hassan-yuhamin', spot2: 'חסאן יהאמן', roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('חסאן יהאמן', 'Hassan Yuha’min'), summary: L('בנו של אבו כרב אסעד, מלך חמיר.', 'Son of Abu Karib As’ad, king of Himyar.'),
    rel: [to('father', 'abu-karib-asad')], offices: [KING(4200, 4210, ['abu-karib-asad'], ['sharchavil-yafur'])], sources: [HIM],
    sections: one('חסאן יהאמן', 'חסאן יהאמן, בנו של אבו כרב אסעד, מלך בחמיר אחרי אביו, ואחריו אחיו שרחביל יעפר.', 'Hassan Yuha’min', 'Hassan Yuha’min, the son of Abu Karib As’ad, reigned in Himyar after his father, and after him his brother Sharchavil Yafur.'),
  }),
  A({
    slug: 'sharchavil-yafur', spot2: 'שרחביל יעפר', roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('שרחביל יעפר', 'Sharchavil Yafur'), summary: L('בנו של אבו כרב אסעד, מלך חמיר אחרי אחיו חסאן.', 'Son of Abu Karib As’ad, king of Himyar after his brother Hassan.'),
    rel: [to('father', 'abu-karib-asad'), to('sibling', 'hassan-yuhamin')], offices: [KING(4210, 4225, ['hassan-yuhamin'], [])], sources: [HIM],
    sections: one('שרחביל יעפר', 'שרחביל יעפר, בנו של אבו כרב אסעד, מלך בחמיר אחרי אחיו חסאן. בכתובת שהשאיר הוא מתפלל ל"רחמנן", כמו אבותיו.', 'Sharchavil Yafur', 'Sharchavil Yafur, the son of Abu Karib As’ad, reigned in Himyar after his brother Hassan. In the inscription he left he prays to "Rahmanan", like his fathers.'),
  }),
];
