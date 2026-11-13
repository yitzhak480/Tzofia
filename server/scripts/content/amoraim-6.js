// The Talmud tree, sixth band: the sixth generation of the Amoraim (Rav Ashi
// and Ravina), with their families. Teachers and students follow the poster's lines.
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
const GEN6 = L('אמורא, דור ו׳', 'Amora, 6th generation');
const KOLELET = L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const PUM = (from, to2, before, after) => HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', from, to2, before, after);
const TVE = (from, to2, before, after) => HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', from, to2, before, after);
const TZI = (from, to2, before, after) => HEAD('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori', from, to2, before, after);
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const SDH = L('סדר הדורות', 'Seder HaDorot');
const RAMBAM = L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to the Mishneh Torah');
const K61 = L('כתובות סא ע״א', 'Ketubot 61a');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';
// Ravina's family: his sister married Rav Huna, and their son was Ravina II
const RAVINA_FAMILY = sec('משפחת רבינא',
  'אחותו של רבינא נישאה לרב הונא, ובנם נקרא על שם דודו – רבינא השני, אחרון האמוראים, שאביו נפטר כשהיה קטן ודודו רבינא גידל אותו.',
  'Ravina’s Family',
  'Ravina’s sister married Rav Huna, and their son was named after his uncle – Ravina II, the last of the Amoraim, whose father died when he was small and whose uncle Ravina raised him.');
const KING_GATE = sec('בשער המלך',
  'הגמרא מספרת שאמימר, מר זוטרא ורב אשי ישבו יחד בשער ביתו של המלך יזדגרד (כתובות סא ע״א) – שלושת גדולי הדור, ראש ישיבת נהרדעא, ראש הגולה וראש ישיבת סורא.',
  'At the King’s Gate',
  'The Gemara relates that Ameimar, Mar Zutra and Rav Ashi sat together at the gate of King Yazdegerd’s palace (Ketubot 61a) – the three great men of the generation: the head of the Nehardea yeshivah, the Head of the Exile and the head of the Sura yeshivah.');

module.exports = [
  // ── the Land of Israel ──
  A({
    slug: 'rabbi-yehuda-nesia-3', spot2: 'רבי יהודה נשיאה ג׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN6, L('נשיא', 'Nasi')],
    name: L('רבי יהודה נשיאה ג׳', 'Rabbi Yehudah Nesiah III'),
    summary: L('בנו של רבן גמליאל ה׳, שעמד אחריו בנשיאות.', 'Son of Rabban Gamliel V, who followed him as Nasi.'),
    rel: [to('father', 'rabban-gamliel-5')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4140, to: 4160, before: ['rabban-gamliel-5'], after: [] }],
    sources: [SDH],
    sections: one('רבי יהודה נשיאה ג׳', 'רבי יהודה, בנו של רבן גמליאל ה׳, עמד בנשיאות אחרי אביו, מן הנשיאים האחרונים מבית הלל.', 'Rabbi Yehudah Nesiah III', 'Rabbi Yehudah, the son of Rabban Gamliel V, held the office of Nasi after his father, one of the last Nesi’im of the house of Hillel.'),
  }),
  A({
    slug: 'rabbi-shmuel-berabbi-yose-berabbi-bun', spot2: 'רבי שמואל ברבי יוסי ברבי בון', roles: [GEN6],
    name: L('רבי שמואל ברבי יוסי ברבי בון', 'Rabbi Shmuel son of Rabbi Yose son of Rabbi Bun'),
    summary: L('בנו של רבי יוסי ברבי בון.', 'Son of Rabbi Yose son of Rabbi Bun.'),
    rel: [to('father', 'rabbi-yose-berabbi-bun')], sources: [TTA],
    sections: one('רבי שמואל ברבי יוסי ברבי בון', 'רבי שמואל, בנו של רבי יוסי ברבי בון, היה מאחרוני החכמים הנזכרים בתלמוד הירושלמי.', 'Rabbi Shmuel son of Rabbi Yose son of Rabbi Bun', 'Rabbi Shmuel, the son of Rabbi Yose son of Rabbi Bun, was one of the last sages named in the Jerusalem Talmud.'),
  }),
  A({
    slug: 'rabbi-yusta-bar-shunam', spot2: 'רבי יוסטא בר שונם', roles: [GEN6],
    name: L('רבי יוסטא בר שונם', 'Rabbi Yusta bar Shunam'),
    summary: L('מחכמי ארץ ישראל בדור השישי.', 'One of the sages of the Land of Israel in the sixth generation.'),
    rel: [], sources: [TTA],
    sections: one('רבי יוסטא בר שונם', 'רבי יוסטא בר שונם היה מחכמי ארץ ישראל בדור השישי של האמוראים, בן דורו של רבי מנא.', 'Rabbi Yusta bar Shunam', 'Rabbi Yusta bar Shunam was one of the sages of the Land of Israel in the sixth generation of the Amoraim, a contemporary of Rabbi Mana.'),
  }),
  A({
    slug: 'rabbi-chanania-detziporin', spot2: 'רבי חנניה דציפורין', roles: [GEN6, L('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori')],
    name: L('רבי חנניה דציפורין', 'Rabbi Chananyah of Tzippori'),
    summary: L('ראש ישיבת ציפורי, תלמידו המובהק של רבי פנחס.', 'Head of the Tzippori yeshivah, the talmid muvhak of Rabbi Pinchas.'),
    rel: [muv('rabbi-pinchas'), to('teacher', 'rabbi-abahu'), to('plugta', 'rabbi-mana')],
    offices: [TZI(null, 4160, [], ['rabbi-mana'])],
    sources: [TTA],
    sections: [
      sec('רבי חנניה דציפורין', 'רבי חנניה עמד בראש הישיבה בציפורי. כשעזב רבי מנא את טבריה בגלל הגזירות ובא לציפורי, מסר לו רבי חנניה את ראשות הישיבה. הם היו בני פלוגתא – חברים, ולא רב ותלמיד.', 'Rabbi Chananyah of Tzippori', 'Rabbi Chananyah headed the yeshivah in Tzippori. When Rabbi Mana left Tiberias because of the decrees and came to Tzippori, Rabbi Chananyah handed the headship of the yeshivah over to him. They were bar plugta – colleagues, not teacher and student.'),
      TS('רבותיו היו רבי פנחס, שהיה תלמידו המובהק, ורבי אבהו.', 'His teachers were Rabbi Pinchas, whose talmid muvhak he was, and Rabbi Abahu.'),
    ],
  }),
  A({
    slug: 'rabbi-mana', spot2: 'רבי מנא', cats: ['amoraim-tveria', 'amoraim-eretz'], roles: [GEN6, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias'), L('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori')],
    name: L('רבי מנא', 'Rabbi Mana'),
    summary: L('בנו של רבי יונה, ראש ישיבת טבריה ואחר כך ראש ישיבת ציפורי.', 'Son of Rabbi Yonah, head of the Tiberias yeshivah and then of the Tzippori yeshivah.'),
    rel: [to('father', 'rabbi-yona'), to('teacher', 'rabbi-yose-ben-zevida')],
    offices: [TVE(4130, 4160, ['rabbi-yona'], ['rabbi-avin']), TZI(4160, null, ['rabbi-chanania-detziporin'], [])],
    sources: [TTA],
    sections: [
      sec('רבי מנא', 'רבי מנא, בנו של רבי יונה, היה מגדולי חכמי התלמוד הירושלמי. אחרי אביו עמד בראש ישיבת טבריה יחד עם רבי יוסי, עד שנפטר רבי יוסי. בגלל הגזירות עזב את טבריה, ורבי אבין בא במקומו בראש הישיבה שם. כשהגיע לציפורי, מסר לו רבי חנניה דציפורין את ראשות הישיבה – ולכן באילן שלנו תיבתו צבועה בשני צבעים, של טבריה ושל ציפורי.', 'Rabbi Mana', 'Rabbi Mana, the son of Rabbi Yonah, was one of the greatest sages of the Jerusalem Talmud. After his father he headed the Tiberias yeshivah together with Rabbi Yose, until Rabbi Yose died. Because of the decrees he left Tiberias, and Rabbi Avin took his place at the head of the yeshivah there. When he reached Tzippori, Rabbi Chananyah of Tzippori handed the headship of the yeshivah over to him – so on our tree his box is in two colours, of Tiberias and of Tzippori.'),
      TS('רבותיו היו אביו רבי יונה, שאחריו עמד בראש ישיבת טבריה, ורבי יוסי. רבי חנניה דציפורין היה בר פלוגתיה, ומסר לו את ראשות ישיבת ציפורי. אחריו עמד בראש ישיבת טבריה רבי אבין.', 'His teachers were his father Rabbi Yonah, after whom he headed the Tiberias yeshivah, and Rabbi Yose. Rabbi Chananyah of Tzippori was his bar plugta, and handed the headship of the Tzippori yeshivah over to him. After him Rabbi Avin headed the Tiberias yeshivah.'),
    ],
  }),
  A({
    slug: 'rabbi-tanchuma-bar-abba', spot2: 'רבי תנחומא בר אבא', roles: [GEN6, L('בעל מדרש תנחומא', 'Master of Midrash Tanchuma')],
    name: L('רבי תנחומא בר אבא', 'Rabbi Tanchuma bar Abba'),
    summary: L('גדול בעלי האגדה בדורו, שעל שמו נקרא מדרש תנחומא.', 'The greatest master of aggadah in his generation, after whom Midrash Tanchuma is named.'),
    rel: [to('teacher', 'rabbi-yehuda-bar-shalom'), to('teacher', 'rabbi-pinchas')], sources: [L('מדרש תנחומא', 'Midrash Tanchuma'), TTA],
    sections: [
      sec('מדרש תנחומא', 'רבי תנחומא בר אבא היה מגדולי הדרשנים בארץ ישראל, ודרשותיו פותחות פעמים רבות ב"ילמדנו רבנו" – שאלה בהלכה שממנה עובר הדרשן לאגדה. על שמו נקרא מדרש תנחומא על התורה.', 'Midrash Tanchuma', 'Rabbi Tanchuma bar Abba was one of the great preachers of the Land of Israel, and his sermons often open with "Yelamdenu Rabbenu" – a question of halachah from which the preacher moves on to aggadah. Midrash Tanchuma on the Torah is named after him.'),
      TS('רבותיו היו רבי יהודה בר שלום ורבי פנחס.', 'His teachers were Rabbi Yehudah bar Shalom and Rabbi Pinchas.'),
    ],
  }),
  A({
    slug: 'rabbi-abba-3', spot2: 'רבי אבא ג׳', roles: [GEN6],
    name: L('רבי אבא ג׳', 'Rabbi Abba III'),
    summary: L('מחכמי ארץ ישראל בדור השישי.', 'One of the sages of the Land of Israel in the sixth generation.'),
    rel: [], sources: [TTA],
    sections: one('רבי אבא ג׳', 'רבי אבא היה מחכמי ארץ ישראל בדור השישי של האמוראים.', 'Rabbi Abba III', 'Rabbi Abba was one of the sages of the Land of Israel in the sixth generation of the Amoraim.'),
  }),
  A({
    slug: 'rabbi-avin', spot2: 'רבי אבין', roles: [GEN6, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי אבין', 'Rabbi Avin'),
    summary: L('ראש ישיבת טבריה אחרי רבי מנא.', 'Head of the Tiberias yeshivah after Rabbi Mana.'),
    rel: [to('teacher', 'rabbi-acha'), to('teacher', 'rabbi-chilkiya'), to('teacher', 'rabbi-zeira')],
    offices: [TVE(4160, null, ['rabbi-mana'], [])],
    sources: [TTA],
    sections: [
      sec('רבי אבין', 'כשעזב רבי מנא את טבריה בגלל הגזירות ועבר לציפורי, בא רבי אבין במקומו בראש ישיבת טבריה.', 'Rabbi Avin', 'When Rabbi Mana left Tiberias because of the decrees and moved to Tzippori, Rabbi Avin took his place at the head of the Tiberias yeshivah.'),
      TS('רבותיו היו רבי אחא, רבי חלקיה ורבי זירא, ורבי מנא, שבמקומו עמד בראש ישיבת טבריה.', 'His teachers were Rabbi Acha, Rabbi Chilkiyah and Rabbi Zeira, and Rabbi Mana, in whose place he headed the Tiberias yeshivah.'),
    ],
  }),

  // ── Sura ──
  A({
    slug: 'rav-ashi', spot2: 'רב אשי', roles: [GEN6, KOLELET, L('ראש ישיבת סורא', 'Head of the Sura yeshivah'), L('מסדר התלמוד הבבלי', 'Compiler of the Babylonian Talmud')],
    name: L('רב אשי', 'Rav Ashi'),
    summary: L('ראש ישיבת סורא כשישים שנה ומסדר התלמוד הבבלי.', 'Head of the Sura yeshivah for some sixty years and compiler of the Babylonian Talmud.'),
    rel: [to('teacher', 'rava'), to('teacher', 'rav-kahana-3')],
    offices: [HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', 4127, 4187, ['rav-papa'], [])],
    sources: [IRSG, RAMBAM, L('בבא מציעא פו ע״א', 'Bava Metzia 86a'), L('גיטין נט ע״א', 'Gittin 59a'), L('בבא בתרא ג ע״ב', 'Bava Batra 3b'), K61],
    sections: [
      sec('מסדר התלמוד', 'רב אשי עמד בראש ישיבת סורא, במתא מחסיא, כשישים שנה, ובימיו סודר התלמוד הבבלי. הגמרא אומרת: "רבינא ורב אשי סוף הוראה" (בבא מציעא פו ע״א). הוא בנה מחדש את בית המדרש של מתא מחסיא (בבא בתרא ג ע״ב), ועליו נאמר שמימות רבי ועד רב אשי לא נמצאו "תורה וגדולה במקום אחד" (גיטין נט ע״א).', 'Compiler of the Talmud', 'Rav Ashi headed the Sura yeshivah, in Mata Mechasya, for some sixty years, and in his days the Babylonian Talmud was arranged. The Gemara says: "Ravina and Rav Ashi are the end of hora’ah" (Bava Metzia 86a). He rebuilt the study hall of Mata Mechasya (Bava Batra 3b), and of him it was said that from the days of Rebbi until Rav Ashi, "Torah and greatness in one place" were not found together (Gittin 59a).'),
      KING_GATE,
      TS('רב אשי היה ראש המתיבתא הכוללת. רבותיו היו רבא – והוא חוליה בשלשלת הקבלה שמונה הרמב״ם – ורב כהנא (השלישי). הוא עמד בראש ישיבת סורא אחרי רב פפא, רבו – ישיבת נרש של רב פפא היא חלק משושלת ישיבת סורא. רבינא ורב אחא בריה דרב אויא היו תלמידים־חברים שלו – למדו ממנו, אך היו גם חבריו.', 'Rav Ashi was Rosh HaMetivta HaKolelet. His teachers were Rava – and he is a link in the chain of tradition listed by the Rambam – and Rav Kahana (the third). He headed the Sura yeshivah after Rav Papa, his teacher – Rav Papa’s Naresh yeshivah is part of the line of the Sura yeshivah. Ravina and Rav Acha son of Rav Avya were his talmidim chaverim – they learned from him, but were also his colleagues.'),
    ],
  }),
  A({
    slug: 'ravina-1', spot2: 'רבינא א׳', roles: [GEN6],
    name: L('רבינא א׳', 'Ravina I'),
    summary: L('תלמידו המובהק של רבא ותלמיד חבר של רב אשי, שסידר עמו את התלמוד.', 'Rava’s talmid muvhak and Rav Ashi’s talmid chaver, who arranged the Talmud with him.'),
    rel: [to('father', 'avi-ravina'), muv('rava'), to('teacher', 'rav-ashi')],
    sources: [L('בבא מציעא פו ע״א', 'Bava Metzia 86a'), TTA],
    sections: [
      sec('רבינא', 'רבינא היה שותפו של רב אשי בסידור התלמוד, ושמותיהם נזכרים יחד: "רבינא ורב אשי סוף הוראה" (בבא מציעא פו ע״א). יש הסוברים שהכוונה שם לרבינא השני, בן אחותו.', 'Ravina', 'Ravina was Rav Ashi’s partner in arranging the Talmud, and their names are mentioned together: "Ravina and Rav Ashi are the end of hora’ah" (Bava Metzia 86a). Some hold that the reference there is to Ravina II, his sister’s son.'),
      RAVINA_FAMILY,
      TS('רבינא היה תלמידו המובהק של רבא, ותלמיד חבר של רב אשי – למד ממנו, אך היה גם חברו. תלמידו היה רב אחא מדפתי.', 'Ravina was Rava’s talmid muvhak, and Rav Ashi’s talmid chaver – he learned from him, but was also his colleague. His student was Rav Acha of Difti.'),
    ],
  }),
  A({
    slug: 'avi-ravina', spot2: 'אבי רבינא', roles: [],
    name: L('אבי רבינא', 'Ravina’s father'),
    summary: L('אביו של רבינא הראשון.', 'The father of Ravina I.'),
    rel: [], sources: [TTA],
    sections: one('אבי רבינא', 'באילן שלנו כתוב "אבי רבינא" מעל רבינא הראשון, וקו יורד ממנו אל בנו. שמו אינו ידוע.', 'Ravina’s Father', 'On our tree "Ravina’s father" is written above Ravina I, and a line goes down from him to his son. His name is not known.'),
  }),
  F({
    slug: 'achot-ravina', spot2: 'אחות רבינא', roles: [],
    name: L('אחות רבינא', 'Ravina’s sister'),
    summary: L('אחותו של רבינא, אשת רב הונא ואם רבינא השני.', 'Ravina’s sister, the wife of Rav Huna and mother of Ravina II.'),
    rel: [to('sibling', 'ravina-1'), to('spouse', 'rav-huna-avi-ravina')], sources: [TTA],
    sections: [RAVINA_FAMILY],
  }),
  A({
    slug: 'rav-huna-avi-ravina', spot2: 'רב הונא ((אבי רב נחמן ורבינא))', roles: [GEN6],
    name: L('רב הונא (אבי רב נחמן ורבינא)', 'Rav Huna (father of Rav Nachman and Ravina)'),
    summary: L('אביהם של רב נחמן ושל רבינא השני, ובעלה של אחות רבינא.', 'The father of Rav Nachman and of Ravina II, and the husband of Ravina’s sister.'),
    rel: [], sources: [TTA],
    sections: [RAVINA_FAMILY],
  }),
  A({
    slug: 'rav-acha-midifti', spot2: 'רב אחא מדפתי', roles: [GEN6],
    name: L('רב אחא מדפתי', 'Rav Acha of Difti'),
    summary: L('תלמיד רבינא.', 'Ravina’s student.'),
    rel: [to('teacher', 'ravina-1')], sources: [L('בבא בתרא יב ע״ב', 'Bava Batra 12b'), TTA],
    sections: [
      sec('רב אחא מדפתי', 'אחרי פטירת רב אשי רצו החכמים למנות את רב אחא מדפתי לראש ישיבת סורא, אבל באותה שעה הגיע מר בר רב אשי, ומינו אותו במקומו (בבא בתרא יב ע״ב).', 'Rav Acha of Difti', 'After Rav Ashi’s death the sages wished to appoint Rav Acha of Difti as head of the Sura yeshivah, but at that very hour Mar bar Rav Ashi arrived, and they appointed him in his place (Bava Batra 12b).'),
      TS('רבו היה רבינא.', 'His teacher was Ravina.'),
    ],
  }),
  A({
    slug: 'rav-acha-brei-drav-avya', spot2: 'רב אחא בריה דרב אויא', roles: [GEN6],
    name: L('רב אחא בריה דרב אויא', 'Rav Acha son of Rav Avya'),
    summary: L('בנו של רב אויא ותלמיד חבר של רב אשי.', 'Son of Rav Avya and Rav Ashi’s talmid chaver.'),
    rel: [to('father', 'rav-avya'), to('teacher', 'rav-ashi')], sources: [TTA],
    sections: [TS('אביו היה רב אויא, והוא היה תלמיד חבר של רב אשי – למד ממנו, אך היה גם חברו.', 'His father was Rav Avya, and he was Rav Ashi’s talmid chaver – he learned from him, but was also his colleague.')],
  }),
  A({
    slug: 'rav-acha-bar-abaye', spot2: 'רב אחא בר אביי', roles: [GEN6],
    name: L('רב אחא בר אביי', 'Rav Acha bar Abaye'),
    summary: L('מחכמי בבל בדור השישי.', 'One of the sages of Bavel in the sixth generation.'),
    rel: [], sources: [TTA],
    sections: one('רב אחא בר אביי', 'רב אחא בר אביי היה מחכמי בבל בדורם של רב אשי ורבינא.', 'Rav Acha bar Abaye', 'Rav Acha bar Abaye was one of the sages of Bavel in the generation of Rav Ashi and Ravina.'),
  }),
  A({
    slug: 'rav-yeimar', spot2: 'רב יימר', roles: [GEN6],
    name: L('רב יימר', 'Rav Yeimar'),
    summary: L('תלמיד אמימר ורב כהנא.', 'Student of Ameimar and Rav Kahana.'),
    rel: [to('teacher', 'ameimar'), to('teacher', 'rav-kahana-3')], sources: [TTA],
    sections: [TS('רבותיו היו אמימר ורב כהנא (השלישי).', 'His teachers were Ameimar and Rav Kahana (the third).')],
  }),
  A({
    slug: 'rami-bar-abba', spot2: 'רמי בר אבא', roles: [GEN6],
    name: L('רמי בר אבא', 'Rami bar Abba'),
    summary: L('תלמיד רב פפא.', 'Rav Papa’s student.'),
    rel: [to('teacher', 'rav-papa')], sources: [TTA],
    sections: [TS('רבו היה רב פפא.', 'His teacher was Rav Papa.')],
  }),

  // ── Pumbedita and Nehardea ──
  A({
    slug: 'rav-huna-bar-manoach', spot2: 'רב הונא בר מנוח', roles: [GEN6],
    name: L('רב הונא בר מנוח', 'Rav Huna bar Manoach'),
    summary: L('תלמיד רבא.', 'Rava’s student.'),
    rel: [to('teacher', 'rava')], sources: [TTA],
    sections: [TS('רבו היה רבא.', 'His teacher was Rava.')],
  }),
  A({
    slug: 'rav-gamda', spot2: 'רב גמדא', roles: [GEN6],
    name: L('רב גמדא', 'Rav Gamda'),
    summary: L('תלמיד רבא, שהקוף שקנה מצא לו מרגלית.', 'Rava’s student, whose monkey found him a pearl.'),
    rel: [to('teacher', 'rava')], sources: [L('נדרים נ ע״א', 'Nedarim 50a'), TTA],
    sections: [
      sec('הקוף והמרגלית', 'רב גמדא נתן ארבעה זוזים למלחים שיביאו לו דבר מן הים. הם לא מצאו דבר והביאו לו קוף; הקוף ברח ונכנס לחור, וכשחפרו אחריו מצאו אותו רובץ על מרגליות, והביאו את כולן לרב גמדא (נדרים נ ע״א).', 'The Monkey and the Pearls', 'Rav Gamda gave four zuz to sailors to bring him something from the sea. They found nothing and brought him a monkey; the monkey ran off into a hole, and when they dug after it they found it lying on pearls, and brought them all to Rav Gamda (Nedarim 50a).'),
      TS('רבו היה רבא.', 'His teacher was Rava.'),
    ],
  }),
  A({
    slug: 'mar-bar-ameimar', spot2: 'מר בר אמימר', roles: [GEN6],
    name: L('מר בר אמימר', 'Mar bar Ameimar'),
    summary: L('בנו של אמימר.', 'Ameimar’s son.'),
    rel: [to('father', 'ameimar')], sources: [TTA],
    sections: one('מר בר אמימר', 'מר, בנו של אמימר, היה מחכמי בבל בדורו של רב אשי, ושאל אותו שאלות רבות.', 'Mar bar Ameimar', 'Mar, the son of Ameimar, was one of the sages of Bavel in Rav Ashi’s generation, and asked him many questions.'),
  }),
  A({
    slug: 'rav-dimi-minehardea', spot2: 'רב דימי מנהרדעא', roles: [GEN6, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב דימי מנהרדעא', 'Rav Dimi of Nehardea'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב זביד.', 'Head of the Pumbedita yeshivah after Rav Zvid.'),
    rel: [], offices: [PUM(4140, 4143, ['rav-zvid'], ['rafram-1'])],
    sources: [IRSG, L('בבא בתרא כב ע״א', 'Bava Batra 22a')],
    sections: [
      sec('ספינת הגרוגרות', 'רב דימי מנהרדעא הביא ספינה מלאה גרוגרות (תאנים מיובשות) למכור. ראש הגולה אמר לרבא: צא ובדוק אותו – אם הוא תלמיד חכם, תפוס לו את השוק, שיוכל למכור לפני כולם, כדין תלמידי חכמים (בבא בתרא כב ע״א).', 'The Boat of Figs', 'Rav Dimi of Nehardea brought a boat full of dried figs to sell. The Head of the Exile said to Rava: go and test him – if he is a Torah scholar, hold the market for him, so that he may sell before everyone, as is the law for Torah scholars (Bava Batra 22a).'),
      TS('הוא עמד בראש ישיבת פומבדיתא אחרי רב זביד, רבו, ואחריו רפרם.', 'He headed the Pumbedita yeshivah after Rav Zvid, his teacher, and after him came Rafram.'),
    ],
  }),
  A({
    slug: 'rafram-1', spot2: 'רפרם א׳ בר פפא', roles: [GEN6, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רפרם א׳ בר פפא', 'Rafram I bar Papa'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב דימי.', 'Head of the Pumbedita yeshivah after Rav Dimi.'),
    rel: [], offices: [PUM(4143, 4143, ['rav-dimi-minehardea'], ['rav-kahana-4'])],
    sources: [IRSG],
    sections: [TS('הוא עמד בראש ישיבת פומבדיתא אחרי רב דימי מנהרדעא, רבו, ואחריו רב כהנא. אביו, פפא, אינו רב פפא ראש ישיבת נרש.', 'He headed the Pumbedita yeshivah after Rav Dimi of Nehardea, his teacher, and after him came Rav Kahana. His father, Papa, is not Rav Papa the head of the Naresh yeshivah.')],
  }),
  A({
    slug: 'rav-kahana-4', spot2: 'רב כהנא ד׳', roles: [GEN6, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב כהנא ד׳', 'Rav Kahana IV'),
    summary: L('ראש ישיבת פומבדיתא כשלושים שנה, אחרי רפרם.', 'Head of the Pumbedita yeshivah for some thirty years, after Rafram.'),
    rel: [to('teacher', 'rav-papa'), to('teacher', 'rav-zvid')],
    offices: [PUM(4143, 4173, ['rafram-1'], ['rav-acha-bar-rava'])],
    sources: [IRSG, TTA],
    sections: [TS('רבותיו היו רב פפא ורב זביד, ורפרם, שאחריו עמד בראש ישיבת פומבדיתא. אחריו עמד בראשה רב אחא בר רבא.', 'His teachers were Rav Papa and Rav Zvid, and Rafram, after whom he headed the Pumbedita yeshivah. After him Rav Acha bar Rava headed it.')],
  }),
  A({
    slug: 'rav-acha-bar-rava', spot2: 'רב אחא בר רבא', roles: [GEN6, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב אחא בר רבא', 'Rav Acha bar Rava'),
    summary: L('ראש ישיבת פומבדיתא אחרי רב כהנא.', 'Head of the Pumbedita yeshivah after Rav Kahana.'),
    rel: [to('teacher', 'ameimar'), to('teacher', 'rav-kahana-3'), to('teacher', 'mar-zutra-1')],
    offices: [PUM(4173, 4178, ['rav-kahana-4'], [])],
    sources: [IRSG, TTA],
    sections: [TS('רבותיו היו אמימר, רב כהנא (השלישי) ומר זוטרא, ורב כהנא (הרביעי), שאחריו עמד בראש ישיבת פומבדיתא.', 'His teachers were Ameimar, Rav Kahana (the third) and Mar Zutra, and Rav Kahana (the fourth), after whom he headed the Pumbedita yeshivah.')],
  }),

  // ── the Head of the Exile ──
  A({
    slug: 'mar-zutra-1', spot2: 'מר זוטרא א׳', roles: [GEN6, L('ראש הגולה', 'Head of the Exile')],
    name: L('מר זוטרא א׳', 'Mar Zutra I'), summary: L('ראש הגולה אחרי כהנא, מגדולי הדור.', 'Head of the Exile after Kahana, one of the great men of the generation.'),
    rel: [to('teacher', 'rav-papa'), to('teacher', 'ameimar')],
    offices: [RG(['kahana-1'], [], 4160, 4175)], sources: [SOZ, K61],
    sections: [
      sec('מר זוטרא', 'מר זוטרא עמד בראש הגולה אחרי כהנא. ' + RG_SOURCES, 'Mar Zutra', 'Mar Zutra headed the Exile after Kahana. ' + RG_SOURCES_EN),
      KING_GATE,
      TS('רבותיו היו רב פפא ואמימר, ותלמידו היה רב אחא בר רבא.', 'His teachers were Rav Papa and Ameimar, and his student was Rav Acha bar Rava.'),
    ],
  }),

  // ── the kings of Himyar ──
  A({
    slug: 'malkikarib-yuhamin', spot2: 'מלכיכרב יהאמן', roles: [L('מלך חמיר', 'King of Himyar')],
    name: L('מלכיכרב יהאמן', 'Malkikarib Yuha’min'),
    summary: L('מלך חמיר שבדרום ערב, שבימיו עזבו מלכי חמיר את עבודת האלילים.', 'King of Himyar in southern Arabia, in whose days the kings of Himyar left idol worship.'),
    rel: [], offices: [{ label: L('שנות מלוכה', 'Reign'), from: 4135, to: 4160, before: [], after: [] }],
    sources: [L('כתובות חמיריות מתימן', 'Himyarite inscriptions from Yemen')],
    sections: one('מלכי חמיר הגרים', 'ממלכת חמיר שלטה בדרום חצי האי ערב, בתימן של היום. בימי מלכיכרב יהאמן, בסוף המאה הרביעית למניינם, עזבו מלכי חמיר את עבודת האלילים, ובכתובות שהשאירו הם מתפללים ל"רחמנן", "אדון השמים והארץ" – וחוקרים רבים סוברים שהתגיירו או התקרבו מאוד ליהדות. לכן באילן שלנו הם נקראים "מלכי חמיר הגרים".', 'The Converted Kings of Himyar', 'The kingdom of Himyar ruled the south of the Arabian Peninsula, today’s Yemen. In the days of Malkikarib Yuha’min, at the end of the fourth century CE, the kings of Himyar left idol worship, and in the inscriptions they left they pray to "Rahmanan", "Lord of heaven and earth" – and many scholars hold that they converted to Judaism or came very close to it. So on our tree they are called "the converted kings of Himyar".'),
  }),
];
