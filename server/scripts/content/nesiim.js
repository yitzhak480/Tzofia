// The twelve princes of the tribes in the desert (Bamidbar 1, 2, 7, 10), in the
// order they brought their offerings at the dedication of the Mishkan, and
// Kalev son of Yefuneh. `spot` = the name in the tree checklist, if on the tree.
const { L, sec, to, nm } = require('./helpers');

const NOT_ON_TREE = sec('באילן', 'נשיא זה אינו מופיע באילן שלנו.', 'On the Tree', 'This prince does not appear on our tree.');
const BASE_SOURCES = [L('במדבר א, ה – טז', 'Numbers 1:5–16'), L('במדבר ב', 'Numbers 2'), L('במדבר ז', 'Numbers 7')];

const nasi = (day, slug, he, en, fatherHe, fatherEn, tribeSlug, tribeHe, tribeEn, color, text, extra = {}) => ({
  slug, day, name: L(he, en), color, spot: extra.spot || null,
  summary: L(`נשיא שבט ${tribeHe} במדבר.`, `Prince of the tribe of ${tribeEn} in the desert.`),
  rel: [nm('father', fatherHe, fatherEn), to('related', tribeSlug), ...(extra.rel || [])],
  sources: [...BASE_SOURCES, ...(extra.sources || [])],
  sections: [
    sec(`נשיא שבט ${tribeHe}`, `${he} היה נשיא שבט ${tribeHe} במדבר: הוא עמד עם משה ואהרן במפקד בני ישראל, הנהיג את מחנה שבטו, והקריב את קרבנו לחנוכת המשכן ביום ה${day} לחנוכה.${text.he ? ` ${text.he}` : ''}`,
      `Prince of ${tribeEn}`, `${en} was the prince of the tribe of ${tribeEn} in the desert: he stood with Moshe and Aharon at the census of Israel, led his tribe’s camp, and brought his offering at the dedication of the Mishkan on day ${day} of the dedication.${text.en ? ` ${text.en}` : ''}`),
    ...(extra.spot ? [] : [NOT_ON_TREE]),
  ],
});

const YEHUDA = 't1-yehuda';
const GOLD = 't1-shvatim';

module.exports = [
  nasi('ראשון', 'nachshon-ben-aminadav', 'נחשון בן עמינדב', 'Nachshon son of Aminadav', 'עמינדב', 'Aminadav', 'shevet-yehuda', 'יהודה', 'Yehudah', YEHUDA,
    { he: 'חז״ל מספרים שבקריעת ים סוף, כשכל השבטים עמדו ולא רצו לרדת לים, קפץ נחשון ראשון למים, ובזכות זה זכה שבט יהודה למלכות (סוטה לז ע״א). אחותו אלישבע הייתה אשת אהרן, ומבניו יצא דוד המלך.', en: 'Chazal relate that at the splitting of the sea, when all the tribes stood and would not go down into the sea, Nachshon jumped into the water first, and in this merit the tribe of Yehudah received the kingship (Sotah 37a). His sister Elisheva was Aharon’s wife, and King David descended from him.' },
    { spot: 'נחשון', rel: [nm('sibling', 'אלישבע בת עמינדב', 'Elisheva daughter of Aminadav'), nm('child', 'שלמון', 'Salmon')], sources: [L('שמות ו, כג', 'Exodus 6:23'), L('רות ד, כ', 'Ruth 4:20'), L('סוטה לז ע״א', 'Sotah 37a')] }),
  nasi('השני', 'netanel-ben-tzuar', 'נתנאל בן צוער', 'Netanel son of Tzuar', 'צוער', 'Tzuar', 'shevet-yissachar', 'יששכר', 'Yissachar', GOLD,
    { he: 'רש״י (במדבר ז, יח) מביא שנתנאל הוא שיעץ לנשיאים להביא את העגלות ואת קרבנות החנוכה, ובני יששכר היו "יודעי בינה לעתים".', en: 'Rashi (Numbers 7:18) brings that it was Netanel who advised the princes to bring the wagons and the dedication offerings, and the sons of Yissachar were "those who understood the times".' },
    { sources: [L('רש״י, במדבר ז, יח', 'Rashi, Numbers 7:18')] }),
  nasi('השלישי', 'eliav-ben-chelon', 'אליאב בן חלון', 'Eliav son of Chelon', 'חלון', 'Chelon', 'shevet-zevulun', 'זבולון', 'Zevulun', GOLD, {}),
  nasi('הרביעי', 'elitzur-ben-shedeur', 'אליצור בן שדיאור', 'Elitzur son of Shedeur', 'שדיאור', 'Shedeur', 'shevet-reuven', 'ראובן', 'Reuven', GOLD,
    { he: 'במדבר חנה דגל מחנה ראובן בדרום, ואליצור הוביל אותו.', en: 'In the desert the banner of the camp of Reuven encamped to the south, and Elitzur led it.' }),
  nasi('החמישי', 'shelumiel-ben-tzurishaddai', 'שלומיאל בן צורישדי', 'Shelumiel son of Tzurishaddai', 'צורישדי', 'Tzurishaddai', 'shevet-shimon', 'שמעון', 'Shimon', GOLD,
    { he: 'בגמרא (סנהדרין פב ע״ב) נאמר ששלומיאל בן צורישדי הוא זמרי בן סלוא, נשיא בית אב לשמעוני, שחטא עם המדיינית ונהרג בידי פינחס.', en: 'The Gemara (Sanhedrin 82b) says that Shelumiel son of Tzurishaddai is Zimri son of Salu, a prince of a father’s house of Shimon, who sinned with the Midianite woman and was killed by Pinchas.' },
    { sources: [L('במדבר כה, יד', 'Numbers 25:14'), L('סנהדרין פב ע״ב', 'Sanhedrin 82b')] }),
  nasi('השישי', 'elyasaf-ben-deuel', 'אליסף בן דעואל', 'Elyasaf son of Deuel', 'דעואל', 'Deuel', 'shevet-gad', 'גד', 'Gad', GOLD,
    { he: 'בפרק ב בבמדבר נקרא אביו "רעואל", ובשאר המקומות "דעואל".', en: 'In Numbers chapter 2 his father is called "Reuel", and everywhere else "Deuel".' }),
  nasi('השביעי', 'elishama-ben-ammihud', 'אלישמע בן עמיהוד', 'Elishama son of Ammihud', 'עמיהוד', 'Ammihud', 'shevet-efraim', 'אפרים', 'Efraim', GOLD,
    { he: 'יום השביעי של החנוכה חל בשבת, ואלישמע הקריב את קרבנו בשבת. לפי דברי הימים (א׳ ז, כו – כז) הוא אבי נון ואבי אביו של יהושע בן נון, וכך הוא מחובר באילן שלנו: עמיהוד, אלישמע, נון ויהושע.', en: 'The seventh day of the dedication fell on Shabbat, and Elishama brought his offering on Shabbat. According to Divrei HaYamim (I 7:26–27) he was the father of Nun and the grandfather of Yehoshua son of Nun, and so he is joined on our tree: Ammihud, Elishama, Nun and Yehoshua.' },
    { spot: 'אלישמע נשיא אפרים', rel: [nm('child', 'נון', 'Nun')], sources: [L('דברי הימים א׳ ז, כו – כז', 'I Chronicles 7:26–27')] }),
  nasi('השמיני', 'gamliel-ben-pedahtzur', 'גמליאל בן פדהצור', 'Gamliel son of Pedahtzur', 'פדהצור', 'Pedahtzur', 'shevet-menashe', 'מנשה', 'Menashe', GOLD, {}),
  nasi('התשיעי', 'avidan-ben-gideoni', 'אבידן בן גדעוני', 'Avidan son of Gideoni', 'גדעוני', 'Gideoni', 'shevet-binyamin', 'בנימין', 'Binyamin', GOLD, {}),
  nasi('העשירי', 'achiezer-ben-ammishaddai', 'אחיעזר בן עמישדי', 'Achiezer son of Ammishaddai', 'עמישדי', 'Ammishaddai', 'shevet-dan', 'דן', 'Dan', GOLD,
    { he: 'מחנה דן, שבראשו עמד אחיעזר, נסע אחרון, "מאסף לכל המחנות".', en: 'The camp of Dan, led by Achiezer, traveled last, "the rear guard of all the camps".' }),
  nasi('האחד עשר', 'pagiel-ben-ochran', 'פגעיאל בן עכרן', 'Pagiel son of Ochran', 'עכרן', 'Ochran', 'shevet-asher', 'אשר', 'Asher', GOLD, {}),
  nasi('השנים עשר', 'achira-ben-einan', 'אחירע בן עינן', 'Achira son of Einan', 'עינן', 'Einan', 'shevet-naftali', 'נפתלי', 'Naftali', GOLD,
    { he: 'אחירע הקריב אחרון מכל הנשיאים, ביום השנים עשר.', en: 'Achira brought his offering last of all the princes, on the twelfth day.' }),
];

module.exports.kalev = {
  slug: 'kalev-ben-yefuneh', name: L('כלב בן יפונה', 'Kalev son of Yefuneh (Caleb)'), color: YEHUDA, spot: 'כלב',
  summary: L('נשיא שבט יהודה בין המרגלים, שלא הצטרף לעצתם וזכה בחברון.', 'The prince of Yehudah among the spies, who did not join their counsel and received Chevron.'),
  rel: [nm('father', 'חצרון', 'Chetzron'), nm('mother', 'אשת חצרון וקנז', 'The wife of Chetzron and Kenaz'), to('sibling', 'otniel-ben-kenaz'), to('spouse', 'miriam-haneviah'),
    nm('child', 'חור', 'Chur'), nm('child', 'עכסה בת כלב', 'Achsah daughter of Kalev'), to('related', 'shevet-yehuda'), to('related', 'yehoshua-bin-nun')],
  sources: [L('במדבר יג – יד', 'Numbers 13–14'), L('יהושע יד – טו', 'Joshua 14–15'), L('דברי הימים א׳ ב, יח – יט', 'I Chronicles 2:18–19'), L('סוטה יא ע״ב – יב ע״א; לד ע״ב', 'Sotah 11b–12a; 34b'), L('תמורה טז ע״א', 'Temurah 16a')],
  sections: [
    sec('כלב בן חצרון', 'בדברי הימים נקרא כלב "כלב בן חצרון", ובתורה "כלב בן יפונה". חז״ל מסבירים שזה אותו אדם: אביו היה חצרון, ו"בן יפונה" הוא כינוי, "שפנה מעצת מרגלים" (סוטה יא ע״ב). אחרי מות חצרון נישאה אמו לקנז, וילדה לו את עתניאל – ולכן עתניאל הוא אחיו מאמו, ולכן כלב נקרא גם "הקנזי". באילן שלנו היא מופיעה כ"אשת חצרון וקנז".',
      'Kalev Son of Chetzron', 'In Divrei HaYamim Kalev is called "Kalev son of Chetzron", and in the Torah "Kalev son of Yefuneh". Chazal explain that this is one man: his father was Chetzron, and "son of Yefuneh" is a byname, "for he turned away (panah) from the counsel of the spies" (Sotah 11b). After Chetzron died his mother married Kenaz and bore him Otniel – so Otniel is his brother through his mother, and that is why Kalev is also called "the Kenizzite". On our tree she appears as "the wife of Chetzron and Kenaz".'),
    sec('עם המרגלים', 'כלב נשלח עם המרגלים כנשיא שבט יהודה. חז״ל מספרים שבדרך פירש לחברון להשתטח על קברי האבות (סוטה לד ע״ב). כשהמרגלים הוציאו דיבה על הארץ, "ויהס כלב את העם" ואמר "עלה נעלה וירשנו אתה", ועל כן נאמר עליו "ועבדי כלב עקב היתה רוח אחרת עמו". הוא ויהושע לבדם נכנסו לארץ מכל דור המדבר, וכלב קיבל את חברון בנחלה.',
      'With the Spies', 'Kalev was sent with the spies as the prince of Yehudah. Chazal relate that on the way he turned aside to Chevron to pray at the graves of the Patriarchs (Sotah 34b). When the spies slandered the land, "Kalev silenced the people" and said "Let us go up at once and possess it", and so it was said of him "My servant Kalev, because he had a different spirit with him". He and Yehoshua alone of the generation of the desert entered the land, and Kalev received Chevron as his inheritance.'),
    sec('אשתו ובניו', 'חז״ל אומרים שכלב נשא את מרים הנביאה (סוטה יא ע״ב), ומהם נולד חור, שהחזיק עם אהרן את ידי משה במלחמת עמלק, ונכדו בצלאל בנה את המשכן. בתו עכסה נישאה לעתניאל, שכבש את קרית ספר.',
      'His Wife and Children', 'Chazal say that Kalev married Miriam the prophetess (Sotah 11b), and from them was born Chur, who held up Moshe’s hands with Aharon in the war with Amalek, and his grandson Betzalel built the Mishkan. His daughter Achsah married Otniel, who captured Kiryat Sefer.'),
  ],
};
