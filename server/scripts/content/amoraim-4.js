// The Talmud tree, fourth band: the fourth generation of the Amoraim, with
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
const F = (e) => A({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const GEN4 = L('אמורא, דור ד׳', 'Amora, 4th generation');
const KOLELET = L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)');
const NECHUTA = L('נחותי', 'Nechuta (travelled between the Land of Israel and Bavel)');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const Y64 = L('יבמות סד ע״ב', 'Yevamot 64b');
const K65 = L('כתובות סה ע״א', 'Ketubot 65a');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
// the story of Chuma, told on every page connected to her
const CHUMA = sec('חומא',
  'חומא, בתו של איסי בן רב יצחק בריה דרב יהודה, נישאה שלוש פעמים, ושלושת בעליה מתו: תחילה לרחבא דפומבדיתא, אחר כך לרב יצחק בנו של רבה בר בר חנה, ולבסוף לאביי (יבמות סד ע״ב) – ולכן באילן שלנו נישואיה ממוספרים 1, 2 ו־3. אחרי פטירת אביי באה לפני רבא ותבעה מזונות, וכשחשפה את זרועה, נשבתה עיניו של רבא. אשתו של רבא, בת רב חסדא, יצאה אחריה ורדפה אותה מן העיר, ואמרה לה: "קטלתיה לתלתא, ואתית למקטל אחרינא?" – הרגת שלושה, ובאת להרוג עוד אחד? (כתובות סה ע״א).',
  'Chuma',
  'Chuma, the daughter of Isi son of Rav Yitzhak son of Rav Yehudah, married three times, and all three of her husbands died: first Rechava of Pumbedita, then Rav Yitzhak son of Rabba bar bar Chana, and finally Abaye (Yevamot 64b) – so on our tree her marriages are numbered 1, 2 and 3. After Abaye’s death she came before Rava to claim support, and when she uncovered her arm, Rava was taken by her. Rava’s wife, Rav Chisda’s daughter, went out after her and chased her from the town, saying to her: "You have killed three, and you come to kill another?" (Ketubot 65a).');
const RG_SOURCES = 'שושלת ראשי הגולה נמסרה בכעשרים מקורות שונים, שאינם מסכימים זה עם זה, וסימני השאלה באילן נמצאים במקומות שבהם הדבר אינו ברור בגלל ריבוי הדעות.';
const RG_SOURCES_EN = 'The line of the Heads of the Exile is handed down in some twenty different sources, which do not agree with one another, and the question marks on our tree are in the places that are not clear because of the many opinions.';

module.exports = [
  // ── the Land of Israel ──
  A({
    slug: 'hillel-nesia', spot2: 'הלל נשיאה', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN4, L('נשיא', 'Nasi'), L('מסדר הלוח העברי', 'Arranger of the Hebrew calendar')],
    name: L('הלל נשיאה', 'Hillel Nesiah'),
    summary: L('הנשיא שקבע את הלוח העברי הקבוע, שבו אנו משתמשים עד היום.', 'The Nasi who fixed the permanent Hebrew calendar, which we use to this day.'),
    rel: [to('father', 'rabbi-yehuda-nesia-2')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4090, to: 4125, before: ['rabbi-yehuda-nesia-2'], after: ['rabban-gamliel-5'] }],
    sources: [L('רמב״ן, ספר הזכות, גיטין', 'Ramban, Sefer HaZechut, Gittin'), L('ספר העיבור לר׳ אברהם בר חייא', 'Sefer HaIbbur of Rabbi Avraham bar Chiya')],
    sections: [
      sec('הלוח העברי', 'עד ימי הלל נשיאה קידשו את החודש בבית הדין על פי עדים שראו את הירח החדש, ועיברו את השנים לפי הצורך. כשגברו גזירות הרומאים ונפוצו קהילות ישראל, קבע הלל נשיאה ובית דינו את חשבון הלוח לכל השנים הבאות – והלוח הזה הוא הלוח העברי שבו אנו משתמשים עד היום. באילן שלנו כתוב לידו "פירוק הסנהדרין".', 'The Hebrew Calendar', 'Until the days of Hillel Nesiah the court sanctified the month by witnesses who saw the new moon, and added leap months as needed. When the Roman decrees grew harsher and the communities of Israel were scattered, Hillel Nesiah and his court fixed the calculation of the calendar for all the years to come – and that calendar is the Hebrew calendar we use to this day. On our tree "the dissolution of the Sanhedrin" is written beside him.'),
    ],
  }),
  A({
    slug: 'natrona-patricius', spot2: 'נטרונא (פטריקיוס)', roles: [L('מנהיג המרד', 'Leader of the revolt')],
    name: L('נטרונא (פטריקיוס)', 'Natrona (Patricius)'),
    summary: L('מנהיג מרד גאלוס בארץ ישראל.', 'Leader of the Gallus revolt in the Land of Israel.'),
    rel: [to('related', 'yitzhak-mitzipori')], sources: [L('אורליוס ויקטור, על הקיסרים מב', 'Aurelius Victor, De Caesaribus 42'), TTA],
    sections: one('מרד גאלוס', 'בשנת 4111 (351 למניינם) פרץ בארץ ישראל מרד נגד שלטונו של הקיסר הרומי גאלוס. בראש המורדים עמד אדם שהמקורות הרומיים קוראים לו פטריקיוס, ובמקורות היהודיים נטרונא, ולצדו יצחק מציפורי. המרד דוכא תוך שנה בידי המצביא אורסיקינוס, וערים רבות, ובהן ציפורי, נפגעו.', 'The Gallus Revolt', 'In 4111 (351 CE) a revolt broke out in the Land of Israel against the rule of the Roman Caesar Gallus. At the head of the rebels stood a man the Roman sources call Patricius, and the Jewish sources Natrona, and beside him Yitzhak of Tzippori. The revolt was crushed within a year by the general Ursicinus, and many towns, Tzippori among them, were damaged.'),
  }),
  A({
    slug: 'yitzhak-mitzipori', spot2: 'יצחק מציפורי', roles: [L('ממנהיגי המרד', 'One of the leaders of the revolt')],
    name: L('יצחק מציפורי', 'Yitzhak of Tzippori'),
    summary: L('ממנהיגי מרד גאלוס, לצד נטרונא.', 'One of the leaders of the Gallus revolt, beside Natrona.'),
    rel: [to('related', 'natrona-patricius')], sources: [TTA],
    sections: one('יצחק מציפורי', 'יצחק מציפורי עמד עם נטרונא בראש המרד נגד גאלוס בשנת 4111. אחרי דיכוי המרד נפגעה ציפורי, שהייתה מרכז של תורה מימי רבי.', 'Yitzhak of Tzippori', 'Yitzhak of Tzippori stood with Natrona at the head of the revolt against Gallus in 4111. After the revolt was crushed Tzippori, a center of Torah since Rebbi’s days, was damaged.'),
  }),
  A({
    slug: 'rabbi-chanina-berei-derabbi-abahu', spot2: 'רבי חנינא בריה דרבי אבהו', roles: [GEN4],
    name: L('רבי חנינא בריה דרבי אבהו', 'Rabbi Chanina son of Rabbi Abahu'),
    summary: L('בנו של רבי אבהו, ששלחו אביו ללמוד בטבריה.', 'Rabbi Abahu’s son, whom his father sent to learn in Tiberias.'),
    rel: [to('father', 'rabbi-abahu')], sources: [L('ירושלמי פסחים ג, ז', 'Yerushalmi Pesachim 3:7')],
    sections: one('רבי חנינא', 'הירושלמי (פסחים ג, ז) מספר שרבי אבהו שלח את בנו רבי חנינא ללמוד תורה בטבריה, והוא עסק בגמילות חסדים בקבורת מתים; שלח לו אביו: "המבלי אין קברים בקיסרין שלחתיך לטבריה?".', 'Rabbi Chanina', 'The Yerushalmi (Pesachim 3:7) relates that Rabbi Abahu sent his son Rabbi Chanina to learn Torah in Tiberias, and he busied himself with the kindness of burying the dead; his father sent to him: "Is it because there are no graves in Caesarea that I sent you to Tiberias?".'),
  }),
  A({
    slug: 'rabbi-acha', spot2: 'רבי אחא', roles: [GEN4],
    name: L('רבי אחא', 'Rabbi Acha'), summary: L('מחכמי ארץ ישראל, רבו של רבי יהודה בן פזי.', 'Of the sages of the Land of Israel, teacher of Rabbi Yehudah ben Pazi.'),
    rel: [to('teacher', 'rabbi-yose-bar-chanina'), to('teacher', 'rabbi-abahu'), to('student', 'rabbi-yehuda-ben-pazi')], sources: [TTA],
    sections: [TS('רבותיו היו רבי יוסי בר חנינא ורבי אבהו, ותלמידו היה רבי יהודה בן פזי.', 'His teachers were Rabbi Yose bar Chanina and Rabbi Abahu, and his student was Rabbi Yehudah ben Pazi.')],
  }),
  A({
    slug: 'rabbi-yehuda-ben-pazi', spot2: 'רבי יהודה בן פזי', roles: [GEN4],
    name: L('רבי יהודה בן פזי', 'Rabbi Yehudah ben Pazi'), summary: L('בנו של רבי שמעון בן פזי, בעל אגדה.', 'Son of Rabbi Shimon ben Pazi, a master of aggadah.'),
    rel: [to('father', 'rabbi-shimon-ben-pazi'), to('teacher', 'rabbi-yoshiya'), to('teacher', 'rabbi-yose-bar-chanina'), to('student', 'ravin')], sources: [TTA],
    sections: [TS('הוא בנו של רבי שמעון בן פזי. רבותיו היו רבי יאשיה, רבי יוסי בר חנינא ורבי אחא, ותלמידו היה רבין.', 'He was the son of Rabbi Shimon ben Pazi. His teachers were Rabbi Yoshiyah, Rabbi Yose bar Chanina and Rabbi Acha, and his student was Ravin.')],
  }),
  A({
    slug: 'ravin', spot2: 'רבין', roles: [GEN4, NECHUTA],
    name: L('רבין', 'Ravin'), summary: L('מן ה"נחותי", שהעביר את תורת ארץ ישראל לבבל.', 'One of the "Nechutei", who carried the Torah of the Land of Israel to Bavel.'),
    rel: [to('teacher', 'rabbi-yehuda-ben-pazi'), to('teacher', 'rabbi-abahu')], sources: [TTA, L('שבת קח ע״ב', 'Shabbat 108b')],
    sections: [
      sec('רבין', 'רבין היה מן ה"נחותי" – החכמים שהלכו ושבו בין ארץ ישראל לבבל. בבבלי מובאות פעמים רבות הלכות בשמו: "כי אתא רבין אמר..." – כשבא רבין מארץ ישראל, מסר כך.', 'Ravin', 'Ravin was one of the "Nechutei" – the sages who went back and forth between the Land of Israel and Bavel. In the Bavli laws are brought many times in his name: "When Ravin came, he said..." – when Ravin came from the Land of Israel, he handed down so.'),
      sec('סימן השאלה', 'הרב אהרן היימן, בספרו "תולדות תנאים ואמוראים", מזהה את רבין עם רבי בון, מחכמי ארץ ישראל. לכן באילן שלנו יורד ממנו קו אל בנו של רבי בון, רבי יוסי ברבי בון – בסימן שאלה, משום שזיהוי זה אינו ודאי.', 'The Question Mark', 'Rabbi Aharon Hyman, in his book "Toldot Tannaim VeAmoraim", identifies Ravin with Rabbi Bun, of the sages of the Land of Israel. So on our tree a line goes down from him to Rabbi Bun’s son, Rabbi Yose son of Rabbi Bun – with a question mark, since this identification is not certain.'),
      TS('רבותיו היו רבי יהודה בן פזי ורבי אבהו.', 'His teachers were Rabbi Yehudah ben Pazi and Rabbi Abahu.'),
    ],
  }),
  A({
    slug: 'rabbi-zerika', spot2: 'רבי זריקא', roles: [GEN4],
    name: L('רבי זריקא', 'Rabbi Zerika'), summary: L('תלמיד רבי אמי, רבי אלעזר ורבי אבהו.', 'Student of Rabbi Ami, Rabbi Elazar and Rabbi Abahu.'),
    rel: [muv('rabbi-ami'), to('teacher', 'rabbi-elazar-ben-pedat'), to('teacher', 'rabbi-abahu')], sources: [TTA],
    sections: [TS('רבותיו היו רבי אמי, רבי אלעזר בן פדת ורבי אבהו.', 'His teachers were Rabbi Ami, Rabbi Elazar ben Pedat and Rabbi Abahu.')],
  }),
  A({
    slug: 'rabbi-chizkiya', spot2: 'רבי חזקיה', roles: [GEN4],
    name: L('רבי חזקיה', 'Rabbi Chizkiyah'), summary: L('תלמידו של רבי ירמיה.', 'Rabbi Yirmeyah’s student.'),
    rel: [muv('rabbi-yirmeya'), to('teacher', 'rabbi-abahu')], sources: [TTA],
    sections: [TS('רבותיו היו רבי ירמיה ורבי אבהו.', 'His teachers were Rabbi Yirmeyah and Rabbi Abahu.')],
  }),
  A({
    slug: 'rabbi-yirmeya', spot2: 'רבי ירמיה', roles: [GEN4, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי ירמיה', 'Rabbi Yirmeyah'), summary: L('תלמיד רבי זירא, שעמד בראש ישיבת טבריה אחרי רבי אמי.', 'Rabbi Zeira’s student, who headed the Yeshivah of Tiberias after Rabbi Ami.'),
    rel: [muv('rabbi-zeira'), to('teacher', 'rabbi-abahu')],
    offices: [HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', 4070, 4100, ['rabbi-ami'], ['rabbi-yona'])],
    sources: [L('ירושלמי שבת יט, א', 'Yerushalmi Shabbat 19:1'), L('בבא בתרא כג ע״ב', 'Bava Batra 23b'), TTA],
    sections: [
      sec('רבי ירמיה', 'רבי ירמיה עלה מבבל לארץ ישראל ולמד לפני רבי זירא. הוא נודע בשאלותיו החריפות; הגמרא (בבא בתרא כג ע״ב) מספרת ששאל שאלה שנראתה לחכמים כמתריסה, והוציאוהו מבית המדרש.', 'Rabbi Yirmeyah', 'Rabbi Yirmeyah came up from Bavel to the Land of Israel and learned before Rabbi Zeira. He was known for his sharp questions; the Gemara (Bava Batra 23b) relates that he asked a question which seemed to the sages provocative, and they put him out of the study hall.'),
      sec('ראש הישיבה?', 'באילן שלנו כתוב לידו "ראש ישיבת טבריה?": מקובל שעמד בראש הישיבה אחרי רבי אמי, אבל הדבר אינו כתוב במפורש. המקור לכך הוא הירושלמי: "בימי ר׳ ירמיה אינשון מפתחייא דסדרא רובא, אתון ושאלון ליה, אמר לון: כד תחמון..." – בימי רבי ירמיה שכחו את מפתחות הסדר הגדול, ובאו ושאלו אותו.', 'Head of the Yeshivah?', 'On our tree it says beside him "head of the Yeshivah of Tiberias?": it is generally accepted that he headed the yeshivah after Rabbi Ami, but it is not written explicitly. The source for this is the Yerushalmi: "In the days of Rabbi Yirmeyah they forgot the keys of the great hall (sidra rabba), and they came and asked him, and he told them..." – which shows that he was the one people turned to.'),
      TS('רבותיו היו רבי זירא ורבי אבהו, ותלמידו רבי חזקיה. אחרי רבי אמי עמד, כנראה, בראש ישיבת טבריה.', 'His teachers were Rabbi Zeira and Rabbi Abahu, and his student Rabbi Chizkiyah. After Rabbi Ami he apparently headed the Yeshivah of Tiberias.'),
    ],
  }),
  A({
    slug: 'rabbi-chilkiya', spot2: 'רבי חלקיה', roles: [GEN4],
    name: L('רבי חלקיה', 'Rabbi Chilkiyah'), summary: L('מחכמי טבריה, תלמיד רבי שמעון בן פזי.', 'Of the sages of Tiberias, student of Rabbi Shimon ben Pazi.'),
    rel: [to('teacher', 'rabbi-shimon-ben-pazi')], sources: [TTA],
    sections: [TS('רבו היה רבי שמעון בן פזי.', 'His teacher was Rabbi Shimon ben Pazi.')],
  }),
  A({
    slug: 'rav-yitzhak-bar-rabba-bar-bar-chana', spot2: 'רבי יצחק (אמורא ארץ ישראל)', roles: [GEN4],
    name: L('רבי יצחק (בן רבה בר בר חנה)', 'Rabbi Yitzhak (son of Rabba bar bar Chana)'),
    summary: L('בנו של רבה בר בר חנה, בעלה השני של חומא.', 'Son of Rabba bar bar Chana, Chuma’s second husband.'),
    rel: [to('father', 'rabba-bar-bar-chana'), to('spouse', 'chuma')], sources: [Y64, TTA], sections: [CHUMA],
  }),
  // ── Nehardea, Pumbedita and Mechoza ──
  A({
    slug: 'rav-avya', spot2: 'רב אויא', roles: [GEN4],
    name: L('רב אויא', 'Rav Avya'), summary: L('תלמיד רב יוסף ורבי אמי.', 'Student of Rav Yosef and Rabbi Ami.'),
    rel: [to('teacher', 'rav-yosef'), to('teacher', 'rabbi-ami')], sources: [L('ברכות כח ע״ב', 'Berachot 28b'), TTA],
    sections: [TS('רבותיו היו רב יוסף ורבי אמי.', 'His teachers were Rav Yosef and Rabbi Ami.')],
  }),
  A({
    slug: 'rav-safra', spot2: 'רב ספרא', roles: [GEN4],
    name: L('רב ספרא', 'Rav Safra'), summary: L('תלמיד רבי אבא, שנודע כאיש אמת – "ודובר אמת בלבבו".', 'Rabbi Abba’s student, known as a man of truth – "and speaks truth in his heart".'),
    rel: [to('teacher', 'rabbi-abba-1')], sources: [L('מכות כד ע״א', 'Makkot 24a'), L('בבא בתרא פח ע״א', 'Bava Batra 88a')],
    sections: [
      sec('ודובר אמת בלבבו', 'רש״י (מכות כד ע״א) מביא את מעשה רב ספרא: אדם בא לקנות ממנו חפץ בזמן שקרא קריאת שמע, והציע מחיר; רב ספרא לא ענה, והקונה חשב שאינו מסכים והעלה את המחיר. כשסיים, אמר רב ספרא שימכור במחיר הראשון, משום שבלבו כבר הסכים לו.', 'Speaking Truth in His Heart', 'Rashi (Makkot 24a) brings the story of Rav Safra: a man came to buy an item from him while he was reciting the Shema, and offered a price; Rav Safra did not answer, and the buyer thought he did not agree and raised the price. When he finished, Rav Safra said he would sell at the first price, since in his heart he had already agreed to it.'),
      TS('רבו היה רבי אבא.', 'His teacher was Rabbi Abba.'),
    ],
  }),
  A({
    slug: 'rav-bivi', spot2: 'רב ביבי', roles: [GEN4],
    name: L('רב ביבי', 'Rav Bivi'), summary: L('תלמיד רב נחמן, רבי אמי ורב אדא בר אהבה.', 'Student of Rav Nachman, Rabbi Ami and Rav Ada bar Ahava.'),
    rel: [to('teacher', 'rav-nachman'), to('teacher', 'rabbi-ami'), to('teacher', 'rav-ada-bar-ahava')], sources: [TTA],
    sections: [TS('רבותיו היו רב נחמן, רבי אמי ורב אדא בר אהבה.', 'His teachers were Rav Nachman, Rabbi Ami and Rav Ada bar Ahava.')],
  }),
  A({
    slug: 'rav-idi-bar-avin-1', spot2: 'רב אידי בר אבין א׳', roles: [GEN4],
    name: L('רב אידי בר אבין א׳', 'Rav Idi bar Avin I'), summary: L('תלמיד רב חסדא, שבניו היו חכמים גדולים.', 'Rav Chisda’s student, whose sons were great sages.'),
    rel: [to('teacher', 'rav-chisda')], sources: [L('שבת כג ע״ב', 'Shabbat 23b'), TTA],
    sections: [
      sec('נר שבת', 'הגמרא (שבת כג ע״ב) מספרת שרב חסדא ראה את אביו של רב אידי בר אבין מקפיד להדליק נרות שבת, ואמר: "גברא רבה נפיק מהכא" – אדם גדול ייצא מכאן; ויצאו ממנו רב אידי בר אבין ורב חייא בר אבין.', 'The Shabbat Light', 'The Gemara (Shabbat 23b) relates that Rav Chisda saw the father of Rav Idi bar Avin careful to light Shabbat candles, and said: "A great man will come from here"; and from him came Rav Idi bar Avin and Rav Chiya bar Avin.'),
      TS('רבו היה רב חסדא.', 'His teacher was Rav Chisda.'),
    ],
  }),
  A({
    slug: 'rav-kahana-3', spot2: 'רב כהנא ג׳', roles: [GEN4, L('ראש ישיבת פום נהרא', 'Head of the yeshivah of Pum Nahara')],
    name: L('רב כהנא ג׳', 'Rav Kahana III'), summary: L('ראש ישיבת פום נהרא, רבו של רב אשי.', 'Head of the yeshivah of Pum Nahara, Rav Ashi’s teacher.'),
    rel: [to('teacher', 'rabba'), to('teacher', 'rabbi-zeira'), to('teacher', 'rav-yehuda'), to('teacher', 'rav-zvid-minehardea')],
    sources: [L('זבחים ב ע״ב', 'Zevachim 2b'), TTA],
    sections: [TS('רבותיו היו רבה, רבי זירא, רב יהודה ורב זביד מנהרדעא. הוא עמד בראש הישיבה בפום נהרא, ומתלמידיו היה רב אשי.', 'His teachers were Rabba, Rabbi Zeira, Rav Yehudah and Rav Zvid of Nehardea. He headed the yeshivah in Pum Nahara, and one of his students was Rav Ashi.')],
  }),
  A({
    slug: 'rav-zvid-minehardea', spot2: 'רב זביד מנהרדעא', roles: [GEN4],
    name: L('רב זביד מנהרדעא', 'Rav Zvid of Nehardea'), summary: L('מחכמי נהרדעא, רבו של רב כהנא.', 'Of the sages of Nehardea, Rav Kahana’s teacher.'),
    rel: [to('student', 'rav-kahana-3')], sources: [TTA],
    sections: [TS('תלמידו היה רב כהנא ג׳, ראש ישיבת פום נהרא.', 'His student was Rav Kahana III, head of the yeshivah of Pum Nahara.')],
  }),
  A({
    slug: 'rechava', spot2: 'רחבא דפומבדיתא', roles: [GEN4],
    name: L('רחבא דפומבדיתא', 'Rechava of Pumbedita'), summary: L('תלמיד רב יהודה, בעלה הראשון של חומא.', 'Student of Rav Yehudah, Chuma’s first husband.'),
    rel: [to('teacher', 'rav-yehuda'), to('spouse', 'chuma')], sources: [Y64, TTA],
    sections: [TS('רבו היה רב יהודה בר יחזקאל.', 'His teacher was Rav Yehudah bar Yechezkel.'), CHUMA],
  }),
  A({
    slug: 'isi', spot2: 'איסי', name: L('איסי (אבי חומא)', 'Isi (father of Chuma)'),
    summary: L('בנו של רב יצחק בריה דרב יהודה, ואביה של חומא.', 'Son of Rav Yitzhak son of Rav Yehudah, and Chuma’s father.'),
    rel: [to('father', 'rav-yitzhak-berei-derav-yehuda')], sources: [Y64], sections: [CHUMA],
  }),
  F({
    slug: 'chuma', spot2: 'חומא', name: L('חומא', 'Chuma'),
    summary: L('בת איסי, שנישאה לרחבא, לרב יצחק בן רבה בר בר חנה ולאביי.', 'Daughter of Isi, who married Rechava, Rav Yitzhak son of Rabba bar bar Chana, and Abaye.'),
    rel: [to('father', 'isi'), to('spouse', 'rechava'), to('spouse', 'rav-yitzhak-bar-rabba-bar-bar-chana'), to('spouse', 'abaye')], sources: [Y64, K65], sections: [CHUMA],
  }),
  A({
    slug: 'abaye', spot2: 'נחמני בן כיילל "אביי"', roles: [GEN4, KOLELET, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('אביי (נחמני בן כייליל)', 'Abaye (Nachmani son of Kaylil)'),
    summary: L('ראש ישיבת פומבדיתא, שגדל בבית דודו רבה; בר פלוגתיה של רבא.', 'Head of the Pumbedita yeshivah, raised in the home of his uncle Rabba; Rava’s sparring partner.'),
    rel: [to('father', 'kaylil'), to('teacher', 'rabba'), to('teacher', 'rav-yosef'), to('spouse', 'chuma'), to('plugta', 'rava')],
    offices: [HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', 4085, 4099, ['rav-yosef'], ['rava'])],
    sources: [IRSG, L('קידושין לא ע״ב', 'Kiddushin 31b'), L('בבא מציעא כב ע״ב', 'Bava Metzia 22b'), L('ברכות מה ע״ב', 'Berachot 45b'), Y64, K65],
    sections: [
      sec('אביי', 'שמו של אביי היה נחמני, על שם סבו, ונקרא "אביי". אביו כייליל מת לפני שנולד, ואמו מתה בלידתו, וגידל אותו דודו רבה; את האומנת שגידלה אותו הוא מכנה "אמר לי אם". אחרי פטירת רב יוסף עמד בראש ישיבת פומבדיתא. הוא ורבא נחלקו במאות סוגיות – "הוויות דאביי ורבא" – ונפסק שההלכה כרבא, חוץ משש סוגיות, שסימנן יע״ל קג״ם (בבא מציעא כב ע״ב).', 'Abaye', 'Abaye’s name was Nachmani, after his grandfather, and he was called "Abaye". His father Kaylil died before he was born, and his mother died at his birth, and his uncle Rabba raised him; he calls the nurse who raised him "Mother told me". After Rav Yosef’s death he headed the Pumbedita yeshivah. He and Rava disagreed in hundreds of discussions – "the debates of Abaye and Rava" – and the law follows Rava, except in six discussions, whose mnemonic is YA’AL KGAM (Bava Metzia 22b).'),
      TS('אביי היה ראש המתיבתא הכוללת. רבותיו היו דודו רבה ורב יוסף, שאחריו עמד בראש ישיבת פומבדיתא, ואחריו עמד רבא. בר פלוגתיה היה רבא.', 'Abaye was Rosh HaMetivta HaKolelet. His teachers were his uncle Rabba and Rav Yosef, whom he succeeded at the head of the Pumbedita yeshivah, and after him came Rava. His sparring partner was Rava.'),
      CHUMA,
    ],
  }),
  A({
    slug: 'rava', spot2: 'רבא בר רב יוסף בר חמא', roles: [GEN4, KOLELET, L('ראש ישיבת פומבדיתא במחוזא', 'Head of the Pumbedita yeshivah in Mechoza')],
    name: L('רבא (בר רב יוסף בר חמא)', 'Rava (son of Rav Yosef bar Chama)'),
    summary: L('ראש הישיבה במחוזא, שההלכה כמותו נגד אביי.', 'Head of the yeshivah in Mechoza, whom the law follows against Abaye.'),
    rel: [to('father', 'rav-yosef-bar-chama'), to('teacher', 'rav-nachman'), to('teacher', 'rabba'), to('spouse', 'bat-rav-chisda'), to('plugta', 'abaye'), to('sibling', 'rav-sheorim')],
    offices: [HEAD('ראש ישיבת פומבדיתא במחוזא', 'Head of the Pumbedita yeshivah in Mechoza', 4099, 4113, ['abaye'], [])],
    sources: [IRSG, L('בבא מציעא כב ע״ב', 'Bava Metzia 22b'), L('בבא בתרא יב ע״ב', 'Bava Batra 12b'), L('שבת קנו ע״א', 'Shabbat 156a'), K65],
    sections: [
      sec('רבא', 'רבא, בנו של רב יוסף בר חמא, נולד ביום שבו נפטר רב יהודה (קידושין עב ע״ב). אחרי פטירת אביי עברה הישיבה הכוללת אליו, למחוזא, וכל התלמידים באו ללמוד אצלו. ההלכה כמותו נגד אביי בכל מקום, חוץ משש סוגיות. בילדותו, כשישב עם בת רב חסדא לפני אביה, שאלה אותו מי תבחר, והיא אמרה "תרווייהו" – ואכן נישאה תחילה לרמי בר חמא ואחר כך לרבא (בבא בתרא יב ע״ב).', 'Rava', 'Rava, the son of Rav Yosef bar Chama, was born on the day Rav Yehudah died (Kiddushin 72b). After Abaye’s death the general yeshivah passed to him, to Mechoza, and all the students came to learn with him. The law follows him against Abaye everywhere, except in six discussions. As a child, when he sat with Rav Chisda’s daughter before her father, she was asked whom she would choose, and she said "both" – and indeed she married first Rami bar Chama and afterwards Rava (Bava Batra 12b).'),
      TS('רבא היה ראש המתיבתא הכוללת. רבותיו היו רב נחמן ורבה – רבה מרבותיו גם בשלשלת הקבלה שמונה הרמב״ם. בר פלוגתיה היה אביי, ואחריו עמד בראש הישיבה.', 'Rava was Rosh HaMetivta HaKolelet. His teachers were Rav Nachman and Rabba – Rabba is his teacher also in the chain of tradition listed by the Rambam. His sparring partner was Abaye, whom he succeeded at the head of the yeshivah.'),
      CHUMA,
    ],
  }),
  // ── Sura ──
  F({
    slug: 'bat-rav-chisda', spot2: 'בת רב חסדא (2)', name: L('בת רב חסדא (אשת רמי בר חמא ורבא)', 'Daughter of Rav Chisda (wife of Rami bar Chama and Rava)'),
    summary: L('בתו של רב חסדא, שנישאה לרמי בר חמא ואחר כך לרבא.', 'Rav Chisda’s daughter, who married Rami bar Chama and afterwards Rava.'),
    rel: [to('father', 'rav-chisda'), to('mother', 'eshet-rav-chisda'), to('spouse', 'rami-bar-chama'), to('spouse', 'rava')], sources: [L('בבא בתרא יב ע״ב', 'Bava Batra 12b'), K65],
    sections: [
      sec('"תרווייהו"', 'כשהייתה ילדה, ישבה לפני אביה רב חסדא, ולפניו ישבו רבא ורמי בר חמא. שאל אותה אביה: "מאן מינייהו בעית?" – את מי מהם את רוצה? אמרה: "תרווייהו" – את שניהם. אמר רבא: "ואנא בתרא" – ואני האחרון (בבא בתרא יב ע״ב). ואכן נישאה תחילה לרמי בר חמא, ואחרי מותו לרבא – ולכן באילן שלנו נישואיה ממוספרים 1 ו־2.', '"Both"', 'As a girl she sat before her father Rav Chisda, and before him sat Rava and Rami bar Chama. Her father asked her: "Which of them do you want?" She said: "Both". Rava said: "And I shall be the last" (Bava Batra 12b). And indeed she married first Rami bar Chama, and after his death Rava – so on our tree her marriages are numbered 1 and 2.'),
      sec('שתי בנות רב חסדא', 'לרב חסדא היו שתי בנות שנישאו לשני אחים, בני חמא: האחת לרמי בר חמא (ואחריו לרבא), והאחרת לרב עוקבא בר חמא.', 'Two Daughters of Rav Chisda', 'Rav Chisda had two daughters who married two brothers, the sons of Chama: one married Rami bar Chama (and after him Rava), and the other Rav Ukva bar Chama.'),
      CHUMA,
    ],
  }),
  F({
    slug: 'bat-rav-chisda-2', spot2: 'בת רב חסדא', name: L('בת רב חסדא (אשת רב עוקבא בר חמא)', 'Daughter of Rav Chisda (wife of Rav Ukva bar Chama)'),
    summary: L('בתו של רב חסדא, אשת רב עוקבא בר חמא.', 'Rav Chisda’s daughter, wife of Rav Ukva bar Chama.'),
    rel: [to('father', 'rav-chisda'), to('mother', 'eshet-rav-chisda'), to('spouse', 'rav-ukva-bar-chama'), to('sibling', 'bat-rav-chisda')], sources: [TTA],
    sections: one('שתי בנות רב חסדא', 'לרב חסדא היו שתי בנות שנישאו לשני אחים, בני חמא: האחת לרמי בר חמא (ואחריו לרבא), וזו – לרב עוקבא בר חמא. שמה לא נשמר.', 'Two Daughters of Rav Chisda', 'Rav Chisda had two daughters who married two brothers, the sons of Chama: one married Rami bar Chama (and after him Rava), and this one Rav Ukva bar Chama. Her name has not been kept.'),
  }),
  A({
    slug: 'rami-bar-chama', spot2: 'רמי בר חמא', roles: [GEN4],
    name: L('רמי בר חמא', 'Rami bar Chama'), summary: L('תלמיד רב נחמן ורב חסדא, בעלה הראשון של בת רב חסדא.', 'Student of Rav Nachman and Rav Chisda, the first husband of Rav Chisda’s daughter.'),
    rel: [to('father', 'chama-avi-rami'), to('teacher', 'rav-nachman'), to('teacher', 'rav-chisda'), to('spouse', 'bat-rav-chisda')], sources: [L('בבא בתרא יב ע״ב', 'Bava Batra 12b'), L('ברכות מז ע״ב', 'Berachot 47b'), TTA],
    sections: [TS('רבותיו היו רב נחמן ורב חסדא, חותנו. אשתו הייתה בת רב חסדא, ואחרי מותו נישאה לרבא; ואחיו רב עוקבא בר חמא נשא את אחותה.', 'His teachers were Rav Nachman and Rav Chisda, his father-in-law. His wife was Rav Chisda’s daughter, and after his death she married Rava; and his brother Rav Ukva bar Chama married her sister.')],
  }),
  F({
    slug: 'bat-rami', spot2: 'בת רמי', name: L('בת רמי (בר חמא)', 'Daughter of Rami (bar Chama)'),
    summary: L('בתם של רמי בר חמא ובת רב חסדא.', 'Daughter of Rami bar Chama and Rav Chisda’s daughter.'),
    rel: [to('father', 'rami-bar-chama'), to('mother', 'bat-rav-chisda')], sources: [TTA],
    sections: one('בת רמי', 'בתם של רמי בר חמא ושל בת רב חסדא. שמה לא נשמר.', 'Rami’s Daughter', 'The daughter of Rami bar Chama and Rav Chisda’s daughter. Her name has not been kept.'),
  }),
  // ── Nehardea and Mechoza ──
  A({
    slug: 'rav-ukva-bar-chama', spot2: 'רב עוקבא בר חמא', roles: [GEN4],
    name: L('רב עוקבא בר חמא', 'Rav Ukva bar Chama'), summary: L('אחיו של רמי בר חמא, תלמיד רב נחמן.', 'Rami bar Chama’s brother, Rav Nachman’s student.'),
    rel: [to('father', 'chama-avi-rami'), to('sibling', 'rami-bar-chama'), to('teacher', 'rav-nachman'), to('spouse', 'bat-rav-chisda-2')], sources: [TTA],
    sections: [TS('רבו היה רב נחמן, ואחיו רמי בר חמא. הוא ואחיו נשאו שתי אחיות, בנותיו של רב חסדא.', 'His teacher was Rav Nachman, and his brother Rami bar Chama. He and his brother married two sisters, daughters of Rav Chisda.')],
  }),
  A({
    slug: 'rav-mari-bar-rachel', spot2: 'רב מרי בר רחל', roles: [GEN4],
    name: L('רב מרי בר רחל', 'Rav Mari bar Rachel'),
    summary: L('בנם של רחל בת שמואל ואיסור גיורא, גוי שהתגייר אחר כך; רבא מינהו לממונה בבבל.', 'Son of Rachel daughter of Shmuel and Issur Giyora, a gentile who later converted; Rava appointed him an official in Bavel.'),
    rel: [to('mother', 'rachel-bat-shmuel'), nm('father', 'איסור גיורא', 'Issur Giyora')], sources: [L('כתובות כג ע״א', 'Ketubot 23a'), L('יבמות מה ע״ב', 'Yevamot 45b'), L('בבא בתרא קמט ע״א', 'Bava Batra 149a')],
    sections: [
      sec('בן רחל', 'רחל, בתו של שמואל, נשבתה (כתובות כג ע״א), ואיסור – גוי באותה עת – חי עמה, ורב מרי נולד להם. איסור התגייר כשרחל הייתה מעוברת: "הורתו שלא בקדושה ולידתו בקדושה" (בבא בתרא קמט ע״א). לכן נקרא רב מרי על שם אמו – "בר רחל".', 'Son of Rachel', 'Rachel, Shmuel’s daughter, was taken captive (Ketubot 23a), and Issur – then a gentile – lived with her, and Rav Mari was born to them. Issur converted while Rachel was pregnant: "his conception was not in holiness and his birth was in holiness" (Bava Batra 149a). So Rav Mari was called after his mother – "bar Rachel".'),
      sec('הממון של איסור', 'לאיסור גיורא היו שנים עשר אלף זוז מופקדים אצל רבא. רב מרי, שנולד אחרי הגיור, לא יכול היה לרשת את אביו, ורבא עיין איך יוכל לזכות בהם – בירושה, במתנה, במשיכה, בחליפין או אגב קרקע – ולא מצא דרך. רב איקא בריה דרב אמי הציע שאיסור יודה שהכסף שייך לרב מרי, וכך עשה (בבא בתרא קמט ע״א).', 'Issur’s Money', 'Issur Giyora had twelve thousand zuz deposited with Rava. Rav Mari, born after the conversion, could not inherit his father, and Rava considered how he might acquire them – by inheritance, gift, pulling, exchange or along with land – and found no way. Rav Ika son of Rav Ami suggested that Issur admit the money belonged to Rav Mari, and so he did (Bava Batra 149a).'),
      sec('ממונה בבבל', 'רבא מינה את רב מרי בר רחל לממונה על פורסי דבבל, ואף שנאמר "מקרב אחיך תשים עליך מלך", כיוון שאמו מישראל – "מקרב אחיך" קרינן ביה (יבמות מה ע״ב).', 'An Official in Bavel', 'Rava appointed Rav Mari bar Rachel an official over the districts of Bavel, and although it says "from among your brothers you shall set a king over you", since his mother was of Israel – he is considered "from among your brothers" (Yevamot 45b).'),
    ],
  }),
  A({
    slug: 'rav-sheorim', spot2: 'רב שעורים', roles: [GEN4],
    name: L('רב שעורים', 'Rav Sheorim'), summary: L('אחיו של רבא.', 'Rava’s brother.'),
    rel: [to('father', 'rav-yosef-bar-chama'), to('sibling', 'rava')], sources: [L('מועד קטן כח ע״א', 'Moed Katan 28a')],
    sections: one('רב שעורים', 'רב שעורים, אחיו של רבא, ישב לפני רבא בשעת פטירתו. הגמרא (מועד קטן כח ע״א) מספרת שביקש רבא מאחיו: "לימא ליה מר למלאך המוות דלא לצערן", ואחרי פטירתו נראה לו בחלום ואמר: "כמשיחא מחלבא" – כהוצאת שערה מן החלב.', 'Rav Sheorim', 'Rav Sheorim, Rava’s brother, sat before Rava at the time of his death. The Gemara (Moed Katan 28a) relates that Rava asked his brother to tell the angel of death not to cause him pain, and after his death he appeared to him in a dream and said: "like drawing a hair out of milk".'),
  }),
  // ── the Heads of the Exile ──
  A({
    slug: 'rabbana-ukva-2', spot2: 'רבנא עוקבא ב׳', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('רבנא עוקבא ב׳', 'Rabbana Ukva II'), summary: L('ראש הגולה אחרי אבא מרי.', 'Head of the Exile after Abba Mari.'),
    rel: [], offices: [RG(['abba-mari-huna-mar'], ['huna-bar-mar-ukvan'], 4080, 4100)], sources: [SOZ],
    sections: one('רבנא עוקבא ב׳', 'לפי סדר עולם זוטא עמד רבנא עוקבא בראש הגולה אחרי אבא מרי, בימיהם של אביי ורבא. ' + RG_SOURCES, 'Rabbana Ukva II', 'According to Seder Olam Zuta, Rabbana Ukva headed the Exile after Abba Mari, in the days of Abaye and Rava. ' + RG_SOURCES_EN),
  }),
  A({
    slug: 'huna-bar-mar-ukvan', spot2: 'הונא בר מר עוקבן', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('הונא בר מר עוקבן', 'Huna son of Mar Ukvan'), summary: L('בנו של מר עוקבן, ראש הגולה אחרי רבנא עוקבא.', 'Son of Mar Ukvan, Head of the Exile after Rabbana Ukva.'),
    rel: [to('father', 'mar-ukvan-detzutzita')], offices: [RG(['rabbana-ukva-2'], [], 4100, 4120)], sources: [SOZ],
    sections: [
      sec('הונא בר מר עוקבן', 'הונא, בנו של מר עוקבן דצוציתא, עמד בראש הגולה אחרי רבנא עוקבא.', 'Huna son of Mar Ukvan', 'Huna, the son of Mar Ukvan of Tzutzita, headed the Exile after Rabbana Ukva.'),
      sec('סימן השאלה', 'באילן שלנו יש סימן שאלה בקו שיורד ממנו אל ראש הגולה שאחריו. ' + RG_SOURCES, 'The Question Mark', 'On our tree there is a question mark on the line going down from him to the next Head of the Exile. ' + RG_SOURCES_EN),
    ],
  }),
];
module.exports.CHUMA = CHUMA;
