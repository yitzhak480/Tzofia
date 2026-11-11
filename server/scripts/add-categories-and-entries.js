// Creates the main categories of לומדות האילן and a first full entry in each,
// in Hebrew and English. Years and tree positions follow our posters;
// content follows Tanach, Chazal and the Geonim.
//
// Safe to run more than once: categories and entries are matched by their
// web address (slug). A category's picture, if one was uploaded, is kept.
//
// Run from the server folder:  node scripts/add-categories-and-entries.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');

const L = (he, en) => ({ he, en });
const p = (title, text) => `<h2>${title}</h2><p>${text}</p>`;

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  { slug: 'prophets', name: L('נביאים', 'Prophets'), description: L('הנביאים שהעבירו את דבר ה׳ לעם ישראל', 'The prophets who brought the word of Hashem to the people of Israel'), color: 'blue' },
  { slug: 'tribes', name: L('שבטים', 'Tribes'), description: L('שנים עשר שבטי ישראל, בני יעקב אבינו', 'The twelve tribes of Israel, the sons of Yaakov'), color: 'brown' },
  { slug: 'judges', name: L('שופטים', 'Judges'), description: L('המנהיגים ששפטו את ישראל מימי יהושע ועד שמואל', 'The leaders who judged Israel from Yehoshua until Shmuel'), color: 'purple' },
  { slug: 'nesiim', name: L('נשיאים', 'Nesi’im'), description: L('נשיאי ישראל, ראשי הסנהדרין', 'The Nesi’im of Israel, heads of the Sanhedrin'), color: 'marble' },
  { slug: 'kohanim', name: L('כהנים', 'Kohanim'), description: L('בני אהרן הכהן, ששירתו במשכן ובמקדש', 'The descendants of Aharon, who served in the Mishkan and the Temple'), color: 'burgundy' },
  { slug: 'kohanim-gedolim', parent: 'kohanim', name: L('כהנים גדולים', 'High Priests'), description: L('הכהנים הגדולים, שנכנסו לקודש הקודשים', 'The High Priests, who entered the Holy of Holies'), color: 'blue' },
  { slug: 'kohanim-gedolim-first-temple', parent: 'kohanim-gedolim', name: L('בית ראשון', 'First Temple'), description: L('הכהנים הגדולים בימי בית המקדש הראשון', 'The High Priests in the days of the First Temple'), color: 'marble' },
  { slug: 'kohanim-gedolim-second-temple', parent: 'kohanim-gedolim', name: L('בית שני', 'Second Temple'), description: L('הכהנים הגדולים בימי בית המקדש השני', 'The High Priests in the days of the Second Temple'), color: 'brown' },
  { slug: 'events', name: L('אירועים', 'Events'), description: L('אירועים מרכזיים בתולדות עם ישראל', 'Key events in the history of the Jewish people'), color: 'purple' },
  { slug: 'temples', name: L('בתי המקדש', 'The Temples'), description: L('המשכן ובתי המקדש בירושלים', 'The Mishkan and the Temples in Jerusalem'), color: 'marble' },
  { slug: 'temple-vessels', name: L('כלי המקדש', 'Temple Vessels'), description: L('הכלים ששימשו בעבודת המשכן והמקדש', 'The vessels used in the service of the Mishkan and the Temple'), color: 'burgundy' },
  { slug: 'tannaim', name: L('תנאים', 'Tannaim'), description: L('חכמי המשנה, עד רבי יהודה הנשיא', 'The sages of the Mishnah, up to Rabbi Yehudah HaNasi'), color: 'blue' },
  { slug: 'amoraim', name: L('אמוראים', 'Amoraim'), description: L('חכמי התלמוד בבבל ובארץ ישראל', 'The sages of the Talmud in Babylon and the Land of Israel'), color: 'brown' },
  { slug: 'savoraim', name: L('סבוראים', 'Savoraim'), description: L('החכמים שהשלימו את חתימת התלמוד הבבלי', 'The sages who completed the sealing of the Babylonian Talmud'), color: 'purple' },
  { slug: 'geonim', name: L('גאונים', 'Geonim'), description: L('ראשי ישיבות סורא ופומבדיתא אחרי חתימת התלמוד', 'The heads of the Sura and Pumbedita academies after the Talmud'), color: 'burgundy' },
];

/* ------------------------------------------------------------------ */
/* Entries                                                             */
/* rel: { type, slug } links to a page; { type, he, en } is a name only */
/* ------------------------------------------------------------------ */
const office = (he, en, from, to, noteHe = '', noteEn = '') => ({ label: L(he, en), from, to, note: L(noteHe, noteEn) });
const biblical = (x, y) => [{ tree: 'biblical', x, y }];
const gmara = (x, y) => [{ tree: 'gmara', x, y }];

const ENTRIES = [
  {
    slug: 'shmuel-hanavi',
    categories: ['prophets', 'judges'],
    name: L('שמואל הנביא', 'Shmuel the Prophet (Samuel)'),
    roles: [L('נביא', 'Prophet'), L('שופט', 'Judge')],
    summary: L('נביא ושופט, שמשח את שאול ואת דוד למלכים על ישראל.', 'Prophet and judge, who anointed Shaul and David as kings over Israel.'),
    rel: [
      { type: 'father', he: 'אלקנה', en: 'Elkanah' },
      { type: 'mother', he: 'חנה', en: 'Channah' },
      { type: 'teacher', he: 'עלי הכהן', en: 'Eli the Kohen' },
      { type: 'student', slug: 'david' },
    ],
    sources: [L('שמואל א׳ א – כה', 'I Samuel 1–25'), L('תהילים צט, ו', 'Psalms 99:6'), L('בבא בתרא יד ע״ב – טו ע״א', 'Bava Batra 14b–15a'), L('תענית ה ע״ב', 'Taanit 5b')],
    spots: biblical(81.25, 35.05),
    content: L(
      p('לידתו', 'שמואל נולד לאלקנה ולחנה מהר אפרים, אחרי שחנה התפללה בשילה בדמעות ונדרה לתת את בנה לה׳ כל ימי חייו. כשנגמל הביאה אותו אל עלי הכהן במשכן שילה, ושם גדל ושירת לפני ה׳.') +
        p('הנביא והשופט', 'עוד כנער קרא לו ה׳ בלילה, "וידע כל ישראל מדן ועד באר שבע כי נאמן שמואל לנביא לה׳". שמואל שפט את ישראל כל ימי חייו, סבב בבית אל, בגלגל ובמצפה, וחזר לביתו ברמה. הוא קרא את העם לשוב אל ה׳ ולהסיר את אלוהי הנכר, ובתפילתו במצפה ניגף צבא פלשתים.') +
        p('מושח המלכים', 'כשביקש העם מלך, משח שמואל בשליחות ה׳ את שאול, ואחר כך, כשנדחה שאול, משח את דוד בבית לחם. דוד ברח אליו לרמה, ולפי חז״ל עסקו שם יחד במקום בית המקדש. שמואל חי חמישים ושתיים שנה (תענית ה ע״ב), וכל ישראל ספדו לו.') +
        p('כתביו ומעלתו', 'לפי חז״ל שמואל כתב את ספרו, את ספר שופטים ואת מגילת רות, וגד החוזה ונתן הנביא השלימו את ספרו אחרי מותו (בבא בתרא יד ע״ב – טו ע״א). הכתוב משווה אותו למשה ולאהרן: "משה ואהרן בכהניו ושמואל בקוראי שמו".'),
      p('His Birth', 'Shmuel was born to Elkanah and Channah of the hill country of Ephraim, after Channah prayed in tears at Shiloh and vowed to give her son to Hashem all the days of his life. When he was weaned she brought him to Eli the Kohen at the Mishkan in Shiloh, where he grew up and served before Hashem.') +
        p('Prophet and Judge', 'While still a boy Hashem called to him at night, "and all Israel from Dan to Be’er Sheva knew that Shmuel was established as a prophet of Hashem". Shmuel judged Israel all the days of his life, travelling to Beit El, Gilgal and Mitzpah and returning to his home in Ramah. He called on the people to return to Hashem and remove the foreign gods, and through his prayer at Mitzpah the Philistine army was defeated.') +
        p('Anointer of Kings', 'When the people asked for a king, Shmuel, at Hashem’s command, anointed Shaul, and later, when Shaul was rejected, anointed David in Beit Lechem. David fled to him in Ramah, and according to Chazal they studied there together the place of the Holy Temple. Shmuel lived fifty-two years (Taanit 5b), and all Israel mourned him.') +
        p('His Writings and Greatness', 'According to Chazal, Shmuel wrote his own book, the Book of Judges and the Book of Ruth, and Gad the Seer and Natan the Prophet completed his book after his death (Bava Batra 14b–15a). Scripture compares him to Moshe and Aharon: "Moshe and Aharon among His Kohanim, and Shmuel among those who call upon His name".'),
    ),
  },
  {
    slug: 'devorah-haneviah',
    categories: ['judges', 'prophets'],
    gender: 'female',
    name: L('דבורה הנביאה', 'Devorah the Prophetess (Deborah)'),
    roles: [L('נביאה', 'Prophetess'), L('שופטת', 'Judge')],
    summary: L('נביאה ושופטת, שהנהיגה את ישראל לניצחון על סיסרא ושרה את שירת דבורה.', 'Prophetess and judge who led Israel to victory over Sisera and sang the Song of Devorah.'),
    rel: [
      { type: 'spouse', he: 'לפידות', en: 'Lapidot' },
      { type: 'related', he: 'ברק בן אבינועם', en: 'Barak son of Avinoam' },
    ],
    sources: [L('שופטים ד – ה', 'Judges 4–5'), L('מגילה יד ע״א', 'Megillah 14a')],
    spots: biblical(46.0, 31.55),
    content: L(
      p('נביאה ושופטת', 'דבורה, אשת לפידות, הייתה נביאה ושפטה את ישראל. היא ישבה תחת תומר דבורה בין הרמה ובין בית אל בהר אפרים, ובני ישראל עלו אליה למשפט. חז״ל מונים אותה בין שבע הנביאות שקמו לישראל (מגילה יד ע״א).') +
        p('המלחמה בסיסרא', 'בימיה לחץ יבין מלך כנען את ישראל עשרים שנה, ושר צבאו סיסרא עמד בראש תשע מאות רכב ברזל. דבורה קראה לברק בן אבינועם ואמרה לו בשם ה׳ לעלות להר תבור עם עשרת אלפים איש. ברק אמר שילך רק אם היא תלך איתו, ודבורה הלכה. ה׳ הביך את סיסרא ואת כל מחנהו בנחל קישון, וסיסרא נמלט ונהרג בידי יעל אשת חבר הקיני.') +
        p('שירת דבורה', 'אחרי הניצחון שרו דבורה וברק את שירת דבורה, מן השירות הגדולות שבתנ״ך: "אנכי לה׳ אנכי אשירה". אחרי המלחמה שקטה הארץ ארבעים שנה.'),
      p('Prophetess and Judge', 'Devorah, the wife of Lapidot, was a prophetess and judged Israel. She sat under the palm tree of Devorah between Ramah and Beit El in the hill country of Ephraim, and the people of Israel came up to her for judgment. Chazal count her among the seven prophetesses of Israel (Megillah 14a).') +
        p('The War against Sisera', 'In her days Yavin king of Canaan oppressed Israel for twenty years, and his general Sisera commanded nine hundred iron chariots. Devorah summoned Barak son of Avinoam and told him in Hashem’s name to go up to Mount Tavor with ten thousand men. Barak said he would go only if she went with him, and Devorah went. Hashem threw Sisera and his whole camp into confusion at the brook of Kishon, and Sisera fled and was killed by Yael, the wife of Chever the Kenite.') +
        p('The Song of Devorah', 'After the victory Devorah and Barak sang the Song of Devorah, one of the great songs of Tanach: "I will sing to Hashem, I will sing". After the war the land was quiet for forty years.'),
    ),
  },
  {
    slug: 'shevet-yehuda',
    categories: ['tribes'],
    kind: 'other',
    name: L('שבט יהודה', 'The Tribe of Yehudah (Judah)'),
    roles: [L('שבט', 'Tribe')],
    summary: L('שבט המלכות, צאצאי יהודה בן יעקב ולאה, שממנו יצא בית דוד.', 'The tribe of kingship, descendants of Yehudah son of Yaakov and Leah, from which the House of David came.'),
    rel: [
      { type: 'related', he: 'יהודה בן יעקב', en: 'Yehudah son of Yaakov' },
      { type: 'related', he: 'נחשון בן עמינדב', en: 'Nachshon son of Aminadav' },
      { type: 'related', slug: 'david' },
    ],
    sources: [L('בראשית כט, לה; לז – לח; מד', 'Genesis 29:35; 37–38; 44'), L('בראשית מט, ח – יב', 'Genesis 49:8–12'), L('במדבר ב, ג', 'Numbers 2:3'), L('יהושע טו', 'Joshua 15'), L('סוטה לז ע״א', 'Sotah 37a')],
    spots: biblical(67.25, 23.6),
    content: L(
      p('יהודה בן יעקב', 'יהודה היה בנו הרביעי של יעקב מלאה, וכשנולד אמרה לאה "הפעם אודה את ה׳". הוא הציע למכור את יוסף במקום להורגו, הודה במעשה תמר ואמר "צדקה ממני", ונעשה ערב לבנימין לפני יוסף במצרים: "כי עבדך ערב את הנער". מבניו פרץ וזרח, שנולדו לו מתמר.') +
        p('שבט המלכות', 'יעקב בירך את יהודה בברכת המלכות: "יהודה אתה יודוך אחיך... לא יסור שבט מיהודה". במדבר חנה מחנה יהודה במזרח ונסע ראשון, ונשיאו נחשון בן עמינדב. לפי חז״ל נחשון קפץ ראשון לים סוף, ובזכות זה זכה יהודה למלכות (סוטה לז ע״א).') +
        p('נחלתו ותולדותיו', 'יהודה נחל את דרום הארץ, מחברון ועד מדבר יהודה, ומשבטו יצאו עתניאל בן קנז, השופט הראשון, ובית דוד. אחרי חלוקת הממלכה נקראה ממלכת הדרום על שמו, ממלכת יהודה, ומשמו נקרא כל העם "יהודים".'),
      p('Yehudah Son of Yaakov', 'Yehudah was the fourth son of Yaakov and Leah, and when he was born Leah said "This time I will thank Hashem". He proposed selling Yosef instead of killing him, admitted the truth about Tamar saying "She is more righteous than I", and became guarantor for Binyamin before Yosef in Egypt: "for your servant became surety for the lad". His sons Peretz and Zerach were born to him from Tamar.') +
        p('The Tribe of Kingship', 'Yaakov blessed Yehudah with the blessing of kingship: "Yehudah, your brothers shall praise you... the scepter shall not depart from Yehudah". In the desert the camp of Yehudah encamped to the east and travelled first, and its prince was Nachshon son of Aminadav. According to Chazal Nachshon was the first to jump into the Sea of Reeds, and in this merit Yehudah received the kingship (Sotah 37a).') +
        p('Its Land and History', 'Yehudah inherited the south of the land, from Hebron to the Judean Desert, and from this tribe came Otniel son of Kenaz, the first judge, and the House of David. After the kingdom was divided, the southern kingdom was named after it, the Kingdom of Judah, and from its name the whole people came to be called "Jews".'),
    ),
  },
  {
    slug: 'hillel-hazaken',
    categories: ['nesiim'],
    name: L('הלל הזקן', 'Hillel the Elder'),
    roles: [L('נשיא', 'Nasi'), L('ראש בית הלל', 'Head of Beit Hillel')],
    summary: L('נשיא ישראל, ענו ואוהב שלום, שמבית מדרשו יצאו רוב ההלכות.', 'Nasi of Israel, humble and peace-loving, whose school is followed in most of halachah.'),
    rel: [
      { type: 'teacher', he: 'שמעיה', en: 'Shemayah' },
      { type: 'teacher', he: 'אבטליון', en: 'Avtalyon' },
      { type: 'child', he: 'רבן שמעון בן הלל', en: 'Rabban Shimon son of Hillel' },
      { type: 'student', he: 'יונתן בן עוזיאל', en: 'Yonatan son of Uziel' },
      { type: 'student', he: 'רבן יוחנן בן זכאי', en: 'Rabban Yochanan son of Zakkai' },
      { type: 'related', he: 'שמאי הזקן', en: 'Shammai the Elder' },
    ],
    sources: [L('אבות א, יב – יד', 'Avot 1:12–14'), L('יומא לה ע״ב', 'Yoma 35b'), L('פסחים סו ע״א', 'Pesachim 66a'), L('שבת לא ע״א', 'Shabbat 31a'), L('סוכה כח ע״א', 'Sukkah 28a'), L('שבת טו ע״א', 'Shabbat 15a'), L('ספרי דברים שנז', 'Sifrei Devarim 357')],
    spots: biblical(59.9, 85.55),
    content: L(
      p('עלייתו מבבל', 'הלל עלה מבבל לארץ ישראל בגיל ארבעים, ולמד תורה מפי שמעיה ואבטליון בעוני גדול. חז״ל מספרים שיום אחד לא היה לו כסף להיכנס לבית המדרש, ועלה ושכב על פתח הגג בערב שבת בחורף כדי לשמוע, עד שכיסה אותו השלג (יומא לה ע״ב).') +
        p('נשיא ישראל', 'כשחל ערב פסח בשבת ובני בתירא לא ידעו אם הפסח דוחה את השבת, הוכיח הלל שהוא דוחה, ובני בתירא מינו אותו לנשיא (פסחים סו ע״א). הוא ושמאי היו הזוג האחרון, ובית הלל ובית שמאי נחלקו בהלכות רבות; ברוב המקרים ההלכה כבית הלל, משום שהיו נוחים ועלובים ושנו דברי בית שמאי לפני דבריהם. מבית הלל יצאה שושלת הנשיאים, שהנהיגו את ישראל עד ימי רבי יהודה הנשיא ואחריו.') +
        p('ענוותנותו', 'משנתו באבות: "הוי מתלמידיו של אהרן, אוהב שלום ורודף שלום, אוהב את הבריות ומקרבן לתורה". לגר שביקש ללמוד את כל התורה על רגל אחת אמר: "דעלך סני לחברך לא תעביד, זו היא כל התורה כולה, ואידך פירושה הוא, זיל גמור" (שבת לא ע״א).') +
        p('תלמידיו', 'שמונים תלמידים היו להלל הזקן; גדול שבהם יונתן בן עוזיאל, והקטן שבהם רבן יוחנן בן זכאי (סוכה כח ע״א). לפי הספרי, הלל חי מאה ועשרים שנה: ארבעים בבבל, ארבעים שימש חכמים, וארבעים פרנס את ישראל.'),
      p('Coming up from Babylon', 'Hillel came up from Babylon to the Land of Israel at the age of forty and learned Torah from Shemayah and Avtalyon in great poverty. Chazal relate that one day he had no money to enter the study hall, so he climbed onto the roof and lay by the skylight on a wintry Friday to listen, until he was covered by snow (Yoma 35b).') +
        p('Nasi of Israel', 'When the eve of Pesach fell on Shabbat and the Bnei Beteira did not know whether the Pesach offering overrides Shabbat, Hillel proved that it does, and the Bnei Beteira appointed him Nasi (Pesachim 66a). He and Shammai were the last of the Pairs, and Beit Hillel and Beit Shammai disagreed in many laws; in most cases the halachah follows Beit Hillel, because they were gentle and humble and taught the words of Beit Shammai before their own. From Hillel came the dynasty of the Nesi’im, who led Israel until the days of Rabbi Yehudah HaNasi and beyond.') +
        p('His Humility', 'His teaching in Avot: "Be among the disciples of Aharon, loving peace and pursuing peace, loving people and bringing them close to Torah". To the convert who asked to learn the whole Torah on one foot he said: "What is hateful to you, do not do to your fellow; that is the whole Torah, and the rest is its explanation; go and learn" (Shabbat 31a).') +
        p('His Students', 'Hillel the Elder had eighty students; the greatest of them was Yonatan son of Uziel, and the least was Rabban Yochanan son of Zakkai (Sukkah 28a). According to the Sifrei, Hillel lived a hundred and twenty years: forty in Babylon, forty serving the sages, and forty leading Israel.'),
    ),
  },
  {
    slug: 'tzadok-hakohen',
    categories: ['kohanim-gedolim-first-temple'],
    name: L('צדוק הכהן', 'Tzadok the Kohen'),
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('הכהן הגדול הראשון בבית המקדש הראשון, שמשח את שלמה למלך.', 'The first High Priest of the First Temple, who anointed Shlomo king.'),
    rel: [
      { type: 'father', he: 'אחיטוב', en: 'Achituv' },
      { type: 'child', he: 'אחימעץ', en: 'Achimaatz' },
      { type: 'related', slug: 'david' },
      { type: 'related', slug: 'shlomo' },
      { type: 'related', slug: 'beit-hamikdash-harishon' },
    ],
    sources: [L('שמואל ב׳ ח, יז; טו, כד – כט', 'II Samuel 8:17; 15:24–29'), L('מלכים א׳ א, לב – מה; ב, לה', 'I Kings 1:32–45; 2:35'), L('דברי הימים א׳ ה, כט – לד; יב, כט', 'I Chronicles 5:29–34; 12:29'), L('יחזקאל מד, טו', 'Ezekiel 44:15')],
    spots: biblical(73.3, 39.7),
    content: L(
      p('ממשפחת אלעזר', 'צדוק בן אחיטוב היה מצאצאי אלעזר בן אהרן. כבר בחברון הצטרף לדוד, "וצדוק נער גבור חיל", ובימי מלכות דוד שירת ככהן יחד עם אביתר.') +
        p('נאמן לבית דוד', 'כשמרד אבשלום ודוד ברח מירושלים, יצא צדוק עם הלויים ונשא את ארון ה׳, אך דוד ביקש להשיבו לעיר. צדוק נשאר בירושלים ושלח לדוד ידיעות דרך בנו אחימעץ. כשניסה אדוניהו לתפוס את המלוכה, משח צדוק יחד עם נתן הנביא את שלמה למלך בגיחון.') +
        p('כהן גדול בבית ראשון', 'שלמה המלך נתן את צדוק לכהן תחת אביתר, ובכך התקיימה הנבואה על בית עלי. צדוק היה הכהן הגדול הראשון בבית המקדש שבנה שלמה, וצאצאיו שירתו בכהונה גדולה לאורך ימי הבית. יחזקאל מכנה את הכהנים הנאמנים "הכהנים הלוים בני צדוק".'),
      p('Of the Family of Elazar', 'Tzadok son of Achituv was a descendant of Elazar son of Aharon. Already in Hebron he joined David, "and Tzadok, a young man mighty in valor", and during David’s reign he served as Kohen together with Evyatar.') +
        p('Loyal to the House of David', 'When Avshalom rebelled and David fled Jerusalem, Tzadok came out with the Levites carrying the Ark of Hashem, but David asked him to bring it back to the city. Tzadok remained in Jerusalem and sent David news through his son Achimaatz. When Adoniyahu tried to seize the throne, Tzadok, together with Natan the Prophet, anointed Shlomo king at the Gichon.') +
        p('High Priest in the First Temple', 'King Shlomo appointed Tzadok as Kohen in place of Evyatar, fulfilling the prophecy about the house of Eli. Tzadok was the first High Priest of the Temple built by Shlomo, and his descendants served as High Priests throughout the days of the First Temple. Yechezkel calls the faithful Kohanim "the Kohanim, the Levites, the sons of Tzadok".'),
    ),
  },
  {
    slug: 'shimon-hatzadik',
    categories: ['kohanim-gedolim-second-temple'],
    name: L('שמעון הצדיק', 'Shimon HaTzadik (Simeon the Just)'),
    roles: [L('כהן גדול', 'High Priest'), L('משיירי כנסת הגדולה', 'Of the last of the Men of the Great Assembly')],
    summary: L('כהן גדול בבית שני, משיירי כנסת הגדולה: "על שלשה דברים העולם עומד".', 'High Priest of the Second Temple, of the last of the Great Assembly: "The world stands on three things".'),
    rel: [
      { type: 'father', he: 'חוניו א׳', en: 'Chonyo I' },
      { type: 'child', he: 'חוניו ב׳', en: 'Chonyo II' },
      { type: 'student', he: 'אנטיגנוס איש סוכו', en: 'Antigonus of Socho' },
    ],
    sources: [L('אבות א, ב – ג', 'Avot 1:2–3'), L('יומא לט ע״א – ע״ב', 'Yoma 39a–b'), L('יומא סט ע״א', 'Yoma 69a'), L('מנחות קט ע״ב', 'Menachot 109b')],
    spots: biblical(52.4, 74.95),
    content: L(
      p('משיירי כנסת הגדולה', 'שמעון הצדיק היה כהן גדול בבית המקדש השני, "משירי כנסת הגדולה". משנתו פותחת את פרקי אבות: "על שלשה דברים העולם עומד: על התורה ועל העבודה ועל גמילות חסדים". תלמידו אנטיגנוס איש סוכו קיבל ממנו את התורה.') +
        p('מול אלכסנדר מוקדון', 'חז״ל מספרים שכאשר ביקשו הכותים מאלכסנדר מוקדון להחריב את בית המקדש, לבש שמעון הצדיק את בגדי הכהונה ויצא לקראתו עם גדולי ישראל. כשראה אותו אלכסנדר ירד ממרכבתו והשתחווה לפניו, ואמר שדמות פניו מנצחת לפניו במלחמותיו, והמקדש ניצל (יומא סט ע״א).') +
        p('ניסים בימיו', 'ארבעים שנה שימש שמעון הצדיק בכהונה גדולה, ובכל השנים האלה עלה בידו הימנית גורל לשם, לשון של זהורית הלבינה, נר המערבי דלק, והייתה ברכה בלחם הפנים ובשתי הלחם. בשנה האחרונה אמר שבה ימות, ואכן נפטר אחרי החג (יומא לט ע״א – ע״ב).'),
      p('Of the Last of the Great Assembly', 'Shimon HaTzadik was High Priest in the Second Temple, "of the last of the Men of the Great Assembly". His teaching opens Pirkei Avot: "The world stands on three things: on Torah, on the Temple service and on acts of kindness". His student Antigonus of Socho received the Torah from him.') +
        p('Before Alexander the Great', 'Chazal relate that when the Kutim asked Alexander the Great to destroy the Temple, Shimon HaTzadik put on the priestly garments and went out to meet him with the leaders of Israel. When Alexander saw him he got down from his chariot and bowed before him, saying that this man’s image led him to victory in his battles, and the Temple was saved (Yoma 69a).') +
        p('Miracles in His Days', 'For forty years Shimon HaTzadik served as High Priest, and in all those years the lot "for Hashem" came up in his right hand, the crimson thread turned white, the western lamp stayed lit, and there was blessing in the showbread and the two loaves. In the last year he said he would die that year, and indeed he passed away after the festival (Yoma 39a–b).'),
    ),
  },
  {
    slug: 'churban-bayit-rishon',
    categories: ['events'],
    kind: 'other',
    name: L('חורבן בית ראשון', 'The Destruction of the First Temple'),
    roles: [L('אירוע', 'Event')],
    life: [3338, 3338],
    summary: L('חורבן ירושלים ובית המקדש הראשון בידי נבוכדנצר מלך בבל, בתשעה באב.', 'The destruction of Jerusalem and the First Temple by Nevuchadnetzar king of Babylon, on the ninth of Av.'),
    rel: [
      { type: 'related', slug: 'tzidkiyahu' },
      { type: 'related', slug: 'beit-hamikdash-harishon' },
      { type: 'related', he: 'ירמיהו הנביא', en: 'Yirmeyahu the Prophet (Jeremiah)' },
      { type: 'related', he: 'נבוכדנצר', en: 'Nevuchadnetzar (Nebuchadnezzar)' },
    ],
    sources: [L('מלכים ב׳ כה', 'II Kings 25'), L('ירמיהו לט; נב', 'Jeremiah 39; 52'), L('דברי הימים ב׳ לו', 'II Chronicles 36'), L('מגילת איכה', 'Lamentations'), L('יומא ט ע״ב', 'Yoma 9b'), L('תענית כט ע״א', 'Taanit 29a')],
    spots: biblical(45.75, 65.85),
    content: L(
      p('המצור', 'בעשרה בטבת, בשנה התשיעית לצדקיהו, בא נבוכדנצר מלך בבל עם כל חילו על ירושלים וצר עליה. ירמיהו הנביא קרא שוב ושוב להיכנע למלך בבל כדי להציל את העיר, אך דבריו לא נשמעו. במצור גבר הרעב בעיר.') +
        p('החורבן', 'בתשעה בתמוז, בשנה האחת עשרה לצדקיהו, הובקעה העיר. צדקיהו נתפס בערבות יריחו, בניו נשחטו לעיניו והוא הובל עיוור לבבל. נבוזראדן רב טבחים שרף את בית ה׳, את בית המלך ואת כל בתי ירושלים, ונתץ את חומותיה. חז״ל מלמדים שבתשיעי באב לעת ערב הציתו בו את האש, והוא דלק כל יום העשירי (תענית כט ע״א).') +
        p('הסיבות והגלות', 'לפי חז״ל חרב בית ראשון בשל שלושה דברים: עבודה זרה, גילוי עריות ושפיכות דמים (יומא ט ע״ב). רוב העם הוגלה לבבל, ובעקבות רצח גדליה בן אחיקם ירדו הנשארים למצרים. ירמיהו קונן על החורבן במגילת איכה, ובישר שאחרי שבעים שנה ישובו הגולים לארצם.'),
      p('The Siege', 'On the tenth of Tevet, in the ninth year of Tzidkiyahu, Nevuchadnetzar king of Babylon came with his whole army against Jerusalem and besieged it. Yirmeyahu the Prophet called again and again to surrender to the king of Babylon in order to save the city, but he was not heeded. During the siege the famine in the city grew severe.') +
        p('The Destruction', 'On the ninth of Tammuz, in the eleventh year of Tzidkiyahu, the city was breached. Tzidkiyahu was captured in the plains of Yericho, his sons were slaughtered before his eyes and he was led blinded to Babylon. Nevuzaradan, the chief of the guard, burned the House of Hashem, the king’s palace and all the houses of Jerusalem, and tore down its walls. Chazal teach that on the ninth of Av towards evening they set it on fire, and it burned through the whole of the tenth (Taanit 29a).') +
        p('The Causes and the Exile', 'According to Chazal the First Temple was destroyed because of three sins: idolatry, immorality and bloodshed (Yoma 9b). Most of the people were exiled to Babylon, and after the murder of Gedalyah son of Achikam the remnant went down to Egypt. Yirmeyahu lamented the destruction in the Book of Lamentations, and foretold that after seventy years the exiles would return to their land.'),
    ),
  },
  {
    slug: 'beit-hamikdash-harishon',
    categories: ['temples'],
    kind: 'other',
    name: L('בית המקדש הראשון', 'The First Temple'),
    roles: [L('בית מקדש', 'Temple')],
    summary: L('בית המקדש שבנה שלמה המלך בירושלים, ועמד ארבע מאות ועשר שנים.', 'The Temple built by King Shlomo in Jerusalem, which stood for four hundred and ten years.'),
    rel: [
      { type: 'related', slug: 'shlomo' },
      { type: 'related', slug: 'david' },
      { type: 'related', slug: 'aron-habrit' },
      { type: 'related', slug: 'churban-bayit-rishon' },
    ],
    sources: [L('שמואל ב׳ כד, יח – כה', 'II Samuel 24:18–25'), L('דברי הימים א׳ כב; כח – כט', 'I Chronicles 22; 28–29'), L('מלכים א׳ ו – ח', 'I Kings 6–8'), L('דברי הימים ב׳ ג – ז', 'II Chronicles 3–7'), L('יומא ט ע״א', 'Yoma 9a')],
    spots: biblical(49.6, 40.6),
    content: L(
      p('ההכנות בימי דוד', 'דוד המלך רצה לבנות בית לה׳, אך נתן הנביא הודיע לו שבנו יבנה אותו. דוד קנה מארונה היבוסי את הגורן בהר המוריה, הקים שם מזבח, הכין זהב, כסף, נחושת ועצים לרוב, ומסר לשלמה את תבנית הבית.') +
        p('הבנייה והחנוכה', 'בשנה הארבע מאות ושמונים ליציאת מצרים החל שלמה לבנות את הבית, והבנייה נמשכה שבע שנים. בקודש הקודשים הוצב ארון הברית תחת כנפי הכרובים. בחנוכת הבית התפלל שלמה תפילה ארוכה, ירדה אש מן השמים ואכלה את העולה, "וכבוד ה׳ מלא את הבית".') +
        p('ארבע מאות ועשר שנים', 'בית ראשון עמד ארבע מאות ועשר שנים, ושימשו בו שמונה עשר כהנים גדולים (יומא ט ע״א). מלכי יהודה הצדיקים, כמו יהואש, חזקיהו ויאשיהו, חיזקו את בדק הבית וחידשו את העבודה בו. בתשעה באב חרב הבית בידי צבא נבוכדנצר מלך בבל.'),
      p('Preparations in David’s Days', 'King David wished to build a house for Hashem, but Natan the Prophet told him that his son would build it. David bought the threshing floor on Mount Moriah from Aravnah the Jebusite, set up an altar there, prepared gold, silver, copper and wood in abundance, and gave Shlomo the plan of the House.') +
        p('Building and Dedication', 'In the four hundred and eightieth year after the Exodus, Shlomo began building the House, and the building took seven years. In the Holy of Holies the Ark of the Covenant was placed under the wings of the Keruvim. At the dedication Shlomo offered a long prayer, fire came down from heaven and consumed the offering, "and the glory of Hashem filled the House".') +
        p('Four Hundred and Ten Years', 'The First Temple stood for four hundred and ten years, and eighteen High Priests served in it (Yoma 9a). Righteous kings of Judah, such as Yehoash, Hizkiyahu and Yoshiyahu, repaired the House and renewed its service. On the ninth of Av the House was destroyed by the army of Nevuchadnetzar king of Babylon.'),
    ),
  },
  {
    slug: 'aron-habrit',
    categories: ['temple-vessels'],
    kind: 'other',
    name: L('ארון הברית', 'The Ark of the Covenant'),
    roles: [L('כלי המקדש', 'Temple vessel')],
    summary: L('הארון שבו היו מונחים לוחות הברית, ועמד בקודש הקודשים.', 'The Ark that held the Tablets of the Covenant and stood in the Holy of Holies.'),
    rel: [
      { type: 'related', slug: 'beit-hamikdash-harishon' },
      { type: 'related', slug: 'david' },
      { type: 'related', slug: 'yoshiyahu' },
      { type: 'related', he: 'בצלאל בן אורי', en: 'Betzalel son of Uri' },
    ],
    sources: [L('שמות כה, י – כב; לז, א – ט', 'Exodus 25:10–22; 37:1–9'), L('במדבר י, לג – לו', 'Numbers 10:33–36'), L('יהושע ג', 'Joshua 3'), L('שמואל א׳ ד – ו', 'I Samuel 4–6'), L('שמואל ב׳ ו', 'II Samuel 6'), L('מלכים א׳ ח', 'I Kings 8'), L('בבא בתרא יד ע״ב; צט ע״א', 'Bava Batra 14b; 99a'), L('יומא נב ע״ב – נג ע״ב', 'Yoma 52b–53b')],
    content: L(
      p('עשייתו', 'ארון הברית נעשה במדבר בידי בצלאל בן אורי, כפי שנצטווה משה: ארון מעצי שיטים, אמתיים וחצי אורכו, אמה וחצי רוחבו ואמה וחצי קומתו, מצופה זהב טהור מבית ומחוץ. על הארון הייתה הכפורת, ועליה שני כרובים של זהב פרושי כנפיים, "ונועדתי לך שם ודברתי אתך מעל הכפורת".') +
        p('מה היה בו', 'בארון היו מונחים לוחות הברית, וחז״ל מלמדים שגם שברי הלוחות הראשונים היו מונחים בו (בבא בתרא יד ע״ב). חז״ל מספרים גם שמקום הארון אינו מן המידה: הארון עמד בקודש הקודשים ולא תפס מקום (בבא בתרא צט ע״א).') +
        p('במסעות ובירושלים', 'הארון נסע לפני העם במדבר, ובכניסה לארץ נעצרו מי הירדן כשנגעו בהם רגלי הכהנים נושאי הארון. בימי עלי נשבה בידי פלשתים, ואחר כך הושב. דוד העלה אותו לירושלים בשמחה גדולה, ושלמה הכניס אותו לקודש הקודשים בבית המקדש.') +
        p('גניזתו', 'חז״ל מספרים שיאשיהו המלך גנז את הארון, כשראה שהגלות קרובה, כדי שלא יגלה לבבל (יומא נב ע״ב). יש מן התנאים הסוברים שהארון גלה לבבל, ויש הסוברים שנגנז במקומו (יומא נג ע״ב). בבית השני לא היה ארון בקודש הקודשים, ובמקומו עמדה "אבן השתייה".'),
      p('Its Making', 'The Ark of the Covenant was made in the desert by Betzalel son of Uri, as Moshe had been commanded: an ark of acacia wood, two and a half cubits long, a cubit and a half wide and a cubit and a half high, overlaid with pure gold inside and out. On the Ark was the cover, and on it two golden Keruvim with outspread wings: "There I will meet with you and speak with you from above the cover".') +
        p('What It Held', 'The Tablets of the Covenant lay in the Ark, and Chazal teach that the fragments of the first Tablets lay in it as well (Bava Batra 14b). Chazal also relate that the place of the Ark was not part of the measurement: the Ark stood in the Holy of Holies yet took up no space (Bava Batra 99a).') +
        p('In the Journeys and in Jerusalem', 'The Ark travelled before the people in the desert, and on entering the land the waters of the Jordan stopped when the feet of the Kohanim carrying the Ark touched them. In the days of Eli it was captured by the Philistines and later returned. David brought it up to Jerusalem with great joy, and Shlomo placed it in the Holy of Holies of the Temple.') +
        p('Its Hiding', 'Chazal relate that King Yoshiyahu hid the Ark when he saw that the exile was near, so that it would not be carried off to Babylon (Yoma 52b). Some Tannaim hold that the Ark was exiled to Babylon, and others that it was hidden in its place (Yoma 53b). In the Second Temple there was no Ark in the Holy of Holies, and in its place stood the Foundation Stone.'),
    ),
  },
  {
    slug: 'rabbi-akiva',
    categories: ['tannaim'],
    name: L('רבי עקיבא', 'Rabbi Akiva'),
    roles: [L('תנא', 'Tanna'), L('מעשרה הרוגי מלכות', 'One of the Ten Martyrs')],
    summary: L('מגדולי התנאים, שהחל ללמוד בגיל ארבעים ונעשה רבם של חכמי המשנה.', 'One of the greatest Tannaim, who began learning at forty and became the teacher of the sages of the Mishnah.'),
    rel: [
      { type: 'spouse', he: 'רחל', en: 'Rachel' },
      { type: 'teacher', he: 'רבי אליעזר בן הורקנוס', en: 'Rabbi Eliezer son of Hyrcanus' },
      { type: 'teacher', he: 'רבי יהושע בן חנניה', en: 'Rabbi Yehoshua son of Chananyah' },
      { type: 'teacher', he: 'נחום איש גם זו', en: 'Nachum Ish Gamzu' },
      { type: 'student', he: 'רבי מאיר', en: 'Rabbi Meir' },
      { type: 'student', he: 'רבי יהודה בר אלעאי', en: 'Rabbi Yehudah son of Ilai' },
      { type: 'student', he: 'רבי יוסי בן חלפתא', en: 'Rabbi Yossi son of Chalafta' },
      { type: 'student', he: 'רבי שמעון בר יוחאי', en: 'Rabbi Shimon bar Yochai' },
      { type: 'student', he: 'רבי אלעזר בן שמוע', en: 'Rabbi Elazar son of Shamua' },
    ],
    sources: [L('אבות דרבי נתן ו', 'Avot DeRabbi Natan 6'), L('כתובות סב ע״ב – סג ע״א', 'Ketubot 62b–63a'), L('חגיגה יב ע״א', 'Chagigah 12a'), L('יבמות סב ע״ב', 'Yevamot 62b'), L('ברכות סא ע״ב', 'Berachot 61b'), L('ספרא קדושים ד, יב', 'Sifra Kedoshim 4:12')],
    spots: biblical(64.05, 92.85),
    content: L(
      p('מרועה לחכם', 'עקיבא בן יוסף היה רועה צאן עם הארץ עד גיל ארבעים. רחל, בת כלבא שבוע, ראתה בו את גדולתו ונישאה לו בתנאי שילך ללמוד תורה. חז״ל מספרים שראה אבן שנחקקה מטיפות מים, ואמר: אם מים רכים חקקו אבן, דברי תורה שקשים כברזל על אחת כמה וכמה (אבות דרבי נתן ו). הוא למד עשרים וארבע שנים, וכשחזר עם אלפי תלמידים אמר עליה: "שלי ושלכם שלה הוא" (כתובות סג ע״א).') +
        p('רבם של חכמי המשנה', 'רבי עקיבא למד מרבי אליעזר ומרבי יהושע, ושימש את נחום איש גם זו עשרים ושתיים שנה (חגיגה יב ע״א). עשרים וארבעה אלף תלמידים היו לו, וכולם מתו בין פסח לעצרת. אחר כך לימד חמישה תלמידים בדרום: רבי מאיר, רבי יהודה, רבי יוסי, רבי שמעון ורבי אלעזר בן שמוע, והם העמידו את התורה (יבמות סב ע״ב).') +
        p('מסירות נפשו', 'רבי עקיבא אמר: "ואהבת לרעך כמוך, זה כלל גדול בתורה". כשגזרו הרומאים שלא לעסוק בתורה, המשיך ללמד ברבים. הוא נתפס, וסרקו את בשרו במסרקות של ברזל, והוא קרא קריאת שמע והאריך ב"אחד" עד שיצאה נשמתו (ברכות סא ע״ב). הוא נמנה עם עשרה הרוגי מלכות.'),
      p('From Shepherd to Sage', 'Akiva son of Yosef was an unlearned shepherd until the age of forty. Rachel, the daughter of Kalba Savua, saw his greatness and married him on condition that he go to learn Torah. Chazal relate that he saw a stone hollowed out by drops of water, and said: if soft water could carve stone, how much more can words of Torah, which are hard as iron, carve my heart (Avot DeRabbi Natan 6). He learned for twenty-four years, and when he returned with thousands of students he said of her: "What is mine and what is yours is hers" (Ketubot 63a).') +
        p('Teacher of the Sages of the Mishnah', 'Rabbi Akiva learned from Rabbi Eliezer and Rabbi Yehoshua, and served Nachum Ish Gamzu for twenty-two years (Chagigah 12a). He had twenty-four thousand students, and they all died between Pesach and Shavuot. Afterwards he taught five students in the south: Rabbi Meir, Rabbi Yehudah, Rabbi Yossi, Rabbi Shimon and Rabbi Elazar son of Shamua, and they upheld the Torah (Yevamot 62b).') +
        p('His Self-Sacrifice', 'Rabbi Akiva said: "Love your fellow as yourself — this is a great principle of the Torah". When the Romans decreed against studying Torah, he continued to teach in public. He was arrested, and they tore his flesh with iron combs, while he recited the Shema and prolonged the word "Echad" until his soul departed (Berachot 61b). He is counted among the Ten Martyrs.'),
    ),
  },
  {
    slug: 'rav-abba-arikha',
    categories: ['amoraim'],
    name: L('רב (אבא בר איבו)', 'Rav (Abba bar Ibo)'),
    roles: [L('אמורא', 'Amora'), L('מייסד ישיבת סורא', 'Founder of the Sura academy')],
    offices: [office('ראש ישיבת סורא', 'Head of the Sura academy', 3979, 4003, 'לפי איגרת רב שרירא גאון', 'According to the Letter of Rav Sherira Gaon')],
    summary: L('מגדולי האמוראים, תלמיד רבי יהודה הנשיא ומייסד ישיבת סורא בבבל.', 'One of the greatest Amoraim, a student of Rabbi Yehudah HaNasi and founder of the Sura academy in Babylon.'),
    rel: [
      { type: 'teacher', he: 'רבי יהודה הנשיא', en: 'Rabbi Yehudah HaNasi' },
      { type: 'teacher', he: 'רבי חייא', en: 'Rabbi Chiya' },
      { type: 'student', he: 'רב הונא', en: 'Rav Huna' },
      { type: 'student', he: 'רב יהודה', en: 'Rav Yehudah' },
      { type: 'related', he: 'שמואל', en: 'Shmuel (the Amora)' },
    ],
    sources: [L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon'), L('סנהדרין ה ע״א', 'Sanhedrin 5a'), L('עירובין נ ע״ב', 'Eruvin 50b'), L('בכורות מט ע״ב', 'Bechorot 49b'), L('ירושלמי ראש השנה א, ג', 'Jerusalem Talmud Rosh Hashanah 1:3')],
    spots: gmara(43.3, 11.9),
    content: L(
      p('בבית מדרשו של רבי', 'רב, ששמו אבא בר איבו, נולד בבבל ועלה לארץ ישראל עם דודו רבי חייא, ולמד תורה מפי רבי יהודה הנשיא. בשל גדולתו נקרא בפי כל "רב" סתם, כרבן של כל בני הגולה. חז״ל אומרים עליו "רב תנא הוא ופליג": מעמדו כמעמד תנא, ולכן הוא רשאי לחלוק על דברי תנאים (עירובין נ ע״ב).') +
        p('ישיבת סורא', 'בשנת ג׳תתקע״ט ירד רב לבבל, ולפי איגרת רב שרירא גאון ייסד את ישיבת סורא, שהייתה במשך מאות שנים, יחד עם פומבדיתא, מרכז התורה של העם היהודי. הוא עמד בראשה עד פטירתו בשנת ד׳ג׳. תלמידיו רב הונא ורב יהודה היו מגדולי הדור הבא.') +
        p('רב ושמואל', 'רב וחברו שמואל, ראש ישיבת נהרדעא, נחלקו בהלכות רבות, ומחלוקותיהם ממלאות את התלמוד הבבלי. נקבע: "הלכתא כרב באיסורי, וכשמואל בדיני" (בכורות מט ע״ב). לפי המסורת רב חיבר את נוסח "עלינו לשבח" ואת ברכות מלכויות, זכרונות ושופרות של ראש השנה, הנקראות בירושלמי "תקיעתא דבי רב".'),
      p('In the Study Hall of Rabbi', 'Rav, whose name was Abba bar Ibo, was born in Babylon and went up to the Land of Israel with his uncle Rabbi Chiya, where he learned Torah from Rabbi Yehudah HaNasi. Because of his greatness he was called simply "Rav", the teacher of all the Diaspora. Chazal say of him "Rav is a Tanna and may disagree": his standing was like that of a Tanna, so he could disagree with Tannaim (Eruvin 50b).') +
        p('The Sura Academy', 'In the year 3979 Rav went down to Babylon, and according to the Letter of Rav Sherira Gaon he founded the Sura academy, which for hundreds of years, together with Pumbedita, was the center of Torah for the Jewish people. He headed it until his passing in 4003. His students Rav Huna and Rav Yehudah were among the greatest of the next generation.') +
        p('Rav and Shmuel', 'Rav and his colleague Shmuel, head of the Nehardea academy, disagreed in many laws, and their disputes fill the Babylonian Talmud. The rule was set: "The halachah follows Rav in matters of prohibition, and Shmuel in monetary law" (Bechorot 49b). According to tradition Rav composed the prayer "Aleinu LeShabeach" and the blessings of Kingship, Remembrance and Shofar of Rosh Hashanah, which the Jerusalem Talmud calls "the shofar blessings of the school of Rav".'),
    ),
  },
  {
    slug: 'rabbah-yossi',
    categories: ['savoraim'],
    name: L('רבה יוסי', 'Rabbah Yossi'),
    roles: [L('סבורא', 'Savora'), L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita academy')],
    offices: [office('ראש ישיבת פומבדיתא', 'Head of the Pumbedita academy', 4236, 4274)],
    summary: L('ראש ישיבת פומבדיתא, שבימיו הייתה "סוף הוראה" והתלמוד נחתם.', 'Head of the Pumbedita academy, in whose days came the "end of instruction" and the Talmud was sealed.'),
    rel: [{ type: 'related', he: 'רב סמא בריה דרבא', en: 'Rav Sama son of Rava' }],
    sources: [L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon'), L('ספר הקבלה לראב״ד', 'Sefer HaKabbalah of the Ra’avad'), L('סדר הדורות', 'Seder HaDorot')],
    spots: gmara(30.65, 41.4),
    content: L(
      p('ראש ישיבת פומבדיתא', 'רבה יוסי עמד בראש ישיבת פומבדיתא אחרי פטירת רב סמא בריה דרבא בשנת ד׳רל״ו, ועד פטירתו בשנת ד׳רע״ד. בימיו עבר מרכז התורה בבבל מסורא, שנחלשה בשל רדיפות מלכי פרס, לפומבדיתא.') +
        p('סוף הוראה', 'לפי איגרת רב שרירא גאון, בימיו של רב יוסי הייתה "סוף הוראה" ונחתם התלמוד. רבה יוסי עומד אפוא על התפר שבין תקופת האמוראים לתקופת הסבוראים, והוא נחשב לראש הדור הראשון של הסבוראים.') +
        p('תקופת הסבוראים', 'הסבוראים, שנקראו כך על שם ה"סברא", השלימו את עריכת התלמוד הבבלי: הוסיפו ביאורים וקטעים, הכריעו בשאלות שנשארו פתוחות, וקבעו כללים לפסיקת ההלכה. בזכותם הגיע אלינו התלמוד בצורתו השלמה.'),
      p('Head of the Pumbedita Academy', 'Rabbah Yossi headed the Pumbedita academy after the passing of Rav Sama son of Rava in 4236, until his own passing in 4274. In his days the center of Torah in Babylon moved from Sura, which had been weakened by the persecutions of the Persian kings, to Pumbedita.') +
        p('The End of Instruction', 'According to the Letter of Rav Sherira Gaon, in the days of Rav Yossi came the "end of instruction" and the Talmud was sealed. Rabbah Yossi thus stands at the seam between the era of the Amoraim and the era of the Savoraim, and he is considered the head of the first generation of the Savoraim.') +
        p('The Era of the Savoraim', 'The Savoraim, named after "sevara" (reasoning), completed the editing of the Babylonian Talmud: they added explanations and passages, decided questions that had remained open, and set rules for deciding halachah. Thanks to them the Talmud reached us in its complete form.'),
    ),
  },
  {
    slug: 'rav-saadia-gaon',
    categories: ['geonim'],
    name: L('רב סעדיה גאון', 'Rav Saadia Gaon'),
    roles: [L('גאון', 'Gaon'), L('ראש ישיבת סורא', 'Head of the Sura academy')],
    offices: [office('גאון ישיבת סורא', 'Gaon of the Sura academy', 4688, 4702)],
    summary: L('גאון סורא, מגדולי חכמי ישראל, שלחם בקראים וחיבר את "האמונות והדעות".', 'Gaon of Sura, one of the greatest Jewish sages, who fought the Karaites and wrote "Emunot VeDeot".'),
    rel: [
      { type: 'father', he: 'רבי יוסף', en: 'Rabbi Yosef' },
      { type: 'child', he: 'דוסא', en: 'Dosa' },
      { type: 'child', he: 'שארית', en: 'She’erit' },
      { type: 'related', he: 'אהרן בן מאיר', en: 'Aharon ben Meir' },
      { type: 'related', he: 'דוד בן זכאי', en: 'David ben Zakkai' },
      { type: 'related', he: 'רב יוסף בר יעקב', en: 'Rav Yosef bar Yaakov' },
    ],
    sources: [L('ספר האמונות והדעות, הקדמה', 'Emunot VeDeot, introduction'), L('ספר הקבלה לראב״ד', 'Sefer HaKabbalah of the Ra’avad'), L('איגרת תימן לרמב״ם', 'The Rambam’s Letter to Yemen')],
    spots: gmara(65.55, 88.45),
    content: L(
      p('ממצרים לבבל', 'רב סעדיה בן יוסף נולד בשנת ד׳תרמ״ב בפיום שבמצרים, ולכן נקרא "הפיומי". כבר בצעירותו חיבר את "האגרון", מילון ללשון הקודש, ויצא למלחמה בקראים, שכפרו בתורה שבעל פה. הוא עבר לארץ ישראל ומשם לבבל.') +
        p('מחלוקת הלוח', 'בשנים ד׳תרפ״א–ד׳תרפ״ג קבע אהרן בן מאיר, מחכמי ארץ ישראל, לוח שנה שונה מן המקובל, כך שהחגים היו נופלים בימים אחרים. רב סעדיה עמד בראש חכמי בבל נגדו, כתב את "ספר המועדים", ובסופו של דבר נשמר הלוח המקובל עד היום.') +
        p('גאון סורא', 'בשנת ד׳תרפ״ח מינה אותו ראש הגולה דוד בן זכאי לגאון ישיבת סורא, אף שלא היה מבני בבל, והוא החזיר לישיבה את כבודה. כשסירב לחתום על פסק דין שראה בו עוול, הדיח אותו ראש הגולה ומינה תחתיו את רב יוסף בר יעקב; רק אחרי שנים אחדות השלימו ביניהם, ורב סעדיה שב לגאונותו עד פטירתו בשנת ד׳תש״ב.') +
        p('חיבוריו', 'רב סעדיה חיבר את "ספר האמונות והדעות", החיבור הגדול הראשון בהגות היהודית, תרגם את התורה לערבית ("התפסיר") ופירש אותה, חיבר סידור תפילה, ספרי הלכה ושירה. הרמב״ם כתב עליו באיגרת תימן שאלמלא רב סעדיה כמעט נשתכחה התורה.'),
      p('From Egypt to Babylon', 'Rav Saadia son of Yosef was born in 4642 in Fayum in Egypt, and was therefore called "HaPayumi". Already as a young man he wrote "HaAgron", a dictionary of the Holy Tongue, and went out to fight the Karaites, who denied the Oral Torah. He moved to the Land of Israel and from there to Babylon.') +
        p('The Calendar Dispute', 'In the years 4681–4683 Aharon ben Meir, one of the sages of the Land of Israel, set a calendar different from the accepted one, so that the festivals would fall on other days. Rav Saadia led the sages of Babylon against him, wrote "Sefer HaMoadim", and in the end the accepted calendar was kept, as it is to this day.') +
        p('Gaon of Sura', 'In 4688 the Exilarch David ben Zakkai appointed him Gaon of the Sura academy, even though he was not a native of Babylon, and he restored the academy’s glory. When he refused to sign a ruling he considered unjust, the Exilarch deposed him and appointed Rav Yosef bar Yaakov in his place; only after several years were they reconciled, and Rav Saadia returned to his position until his passing in 4702.') +
        p('His Works', 'Rav Saadia wrote "Emunot VeDeot", the first great work of Jewish thought, translated the Torah into Arabic (the "Tafsir") with a commentary, and composed a prayer book, works of halachah and poetry. The Rambam wrote of him in his Letter to Yemen that were it not for Rav Saadia, the Torah would almost have been forgotten.'),
    ),
  },
];

/* ------------------------------------------------------------------ */

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // 1. categories (parents first; order continues after existing top-level ones)
  const existingTop = await Category.find({ parent: null }).sort({ order: -1 }).limit(1).lean();
  let nextOrder = (existingTop[0]?.order || 0) + 1;
  const catId = {};
  const childOrder = {};
  for (const c of CATEGORIES) {
    const parent = c.parent ? catId[c.parent] : null;
    const found = await Category.findOne({ slug: c.slug });
    const order = found ? found.order : parent ? (childOrder[c.parent] = (childOrder[c.parent] || 0) + 1) : nextOrder++;
    const doc = found || new Category({ slug: c.slug });
    doc.set({ name: c.name, description: c.description, parent, order, cardColor: c.color });
    await doc.save();
    catId[c.slug] = doc._id;
    console.log(`${found ? '↻' : '+'} קטגוריה: ${c.name.he}`);
  }

  // 2. entries without links first, so every page exists before linking
  const slugs = ENTRIES.map((e) => e.slug);
  const linkTargets = new Set(ENTRIES.flatMap((e) => e.rel.filter((r) => r.slug).map((r) => r.slug)));
  const existingPeople = await Person.find({ slug: { $in: [...slugs, ...linkTargets] } });
  const bySlug = new Map(existingPeople.map((p) => [p.slug, p]));

  for (const [i, e] of ENTRIES.entries()) {
    const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
    doc.set({
      kind: e.kind || 'person',
      gender: e.gender || 'male',
      categories: e.categories.map((s) => catId[s]),
      name: e.name,
      roles: e.roles,
      life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
      offices: e.offices || [],
      summary: e.summary,
      content: e.content,
      sources: e.sources.map((s) => s.he),
      sourcesEn: e.sources.map((s) => s.en),
      treeSpots: e.spots || [],
      published: true,
      order: doc.order || i + 1,
    });
    await doc.save();
    bySlug.set(e.slug, doc);
  }

  // 3. links (relations)
  for (const e of ENTRIES) {
    const doc = bySlug.get(e.slug);
    doc.relations = e.rel.map((r) => {
      if (r.slug) {
        const other = bySlug.get(r.slug);
        if (!other) throw new Error(`${e.slug}: no page "${r.slug}" to link to`);
        return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
      }
      return { type: r.type, person: null, name: { he: r.he, en: r.en } };
    });
    await doc.save();
    console.log(`✓ ${doc.name.he}`);
  }

  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
