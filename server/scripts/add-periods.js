// The period categories of the Biblical tree (Egypt and the Exodus, the Judges,
// David and Shlomo, the kingdoms, the exile and the return), with "The Levites"
// and "Righteous Converts". Each batch adds its pages; card colours follow the
// colour group of the name on the tree.
// Runs after add-nesiim.js. Safe to run more than once.
//
// Run from the server folder:  node scripts/add-periods.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Person = require('../models/Person');
const CHECKLIST = require('./content/tree-checklist-biblical');
const CHECKLIST2 = require('./content/tree-checklist-talmud');
const EVENT_SLUGS = new Set(require('./content/events-first-tree').map((e) => e.slug));
const { L } = require('./content/helpers');

const CATEGORIES = {
  'egypt-exodus': { order: 0.1, color: 't1-levi', name: L('מצרים ויציאת מצרים', 'Egypt and the Exodus'), description: L('מבני בני יעקב ועד ימי יהושע', 'From the children of Yaakov’s sons to the days of Yehoshua') },
  'judges-to-david': { order: 0.2, color: 't1-shvatim', name: L('מימי השופטים עד דוד', 'From the Judges to David'), description: L('מימי השופטים ועד תחילת מלכות דוד', 'From the days of the Judges to the start of David’s reign') },
  'david-shlomo': { order: 0.3, color: 't1-yehuda', name: L('ימי דוד ושלמה', 'The Days of David and Shlomo'), description: L('הממלכה המאוחדת, מתחילת מלכות דוד ועד פילוג הממלכה', 'The united kingdom, from the start of David’s reign to the division of the kingdom') },
  'kingdom-of-judah': { order: 0.4, color: 't1-yehuda', name: L('אנשי ממלכת יהודה', 'People of the Kingdom of Judah'), description: L('אנשי ממלכת יהודה שלא היו מלכים או נביאים', 'People of the Kingdom of Judah who were not kings or prophets') },
  'kingdom-of-israel': { order: 0.5, color: 't1-shvatim', name: L('אנשי ממלכת ישראל', 'People of the Kingdom of Israel'), description: L('אנשי ממלכת ישראל שלא היו מלכים או נביאים', 'People of the Kingdom of Israel who were not kings or prophets') },
  'galut-bavel': { order: 0.6, color: 't1-yehuda', name: L('גלות בבל', 'The Babylonian Exile'), description: L('הגולים לבבל, מחורבן בית ראשון ועד שיבת ציון, וראשי הגולה', 'The exiles in Bavel, from the destruction of the First Temple to the Return to Zion, and the Heads of the Exile') },
  'shivat-tzion': { order: 0.7, color: 't1-yehuda', name: L('שיבת ציון', 'The Return to Zion'), description: L('העולים מבבל ובוני הבית השני', 'Those who came up from Bavel and built the Second Temple') },
  // the Second Temple period
  'anshei-knesset-hagedola': { order: 0.8, color: 't1-yehuda', name: L('אנשי כנסת הגדולה', 'The Men of the Great Assembly'), description: L('מאה ועשרים הזקנים, ובהם נביאים, שעמדו בראש העם בתחילת ימי הבית השני', 'The hundred and twenty elders, prophets among them, who led the people at the start of the Second Temple') },
  zugot: { order: 0.81, color: 't1-yehuda', name: L('הזוגות', 'The Pairs (Zugot)'), description: L('חמשת הזוגות – נשיא ואב בית דין – מיוסי בן יועזר ויוסי בן יוחנן ועד הלל ושמאי', 'The five pairs – a Nasi and an Av Beit Din – from Yose ben Yoezer and Yose ben Yochanan to Hillel and Shammai') },
  'beit-chashmonai': { order: 0.82, color: 't1-levi', name: L('בית חשמונאי', 'The House of Chashmonai'), description: L('הכהנים שמרדו ביוונים, ובית המלוכה שיצא מהם', 'The Kohanim who rose against the Greeks, and the royal house that came from them') },
  'beit-hordos': { order: 0.83, color: 't1-hordos', name: L('בית הורדוס', 'The House of Herod'), description: L('הורדוס ומשפחתו, ששלטו בארץ בחסות רומא', 'Herod and his family, who ruled the land under Rome') },
  'ishei-bayit-sheni': { order: 0.84, color: 't1-yehuda', name: L('אישי בית שני', 'Figures of the Second Temple'), description: L('אישים בימי הבית השני שלא היו חכמים, מלכים או כהנים גדולים', 'People of the Second Temple period who were not sages, kings or High Priests') },
  'rashei-hagola': { order: 0.85, color: 't1-yehuda', name: L('ראשי הגולה', 'The Heads of the Exile'), description: L('צאצאי בית דוד שהנהיגו את יהודי בבל, ומשפחותיהם', 'Descendants of the house of David who led the Jews of Bavel, and their families') },
  'av-beit-din': { order: 5.5, color: 't1-yehuda', name: L('אבות בית הדין', 'The Heads of the Court (Av Beit Din)'), description: L('אבות בית הדין שעמדו לצד הנשיא בראש הסנהדרין', 'The heads of the court who stood beside the Nasi at the head of the Sanhedrin') },
  'kings-chashmonai': { parent: 'kings', order: 3, color: 't1-levi', sortMode: 'chrono', name: L('מלכי בית חשמונאי', 'The Hasmonean Kings'), description: L('המלכים והמלכה מבית חשמונאי', 'The kings and the queen of the house of Chashmonai') },
  'kings-hordos': { parent: 'kings', order: 4, color: 't1-hordos', sortMode: 'chrono', name: L('מלכי בית הורדוס', 'The Herodian Kings'), description: L('הורדוס וצאצאיו שנשאו תואר מלך', 'Herod and his descendants who bore the title of king') },
  // the Amoraim, by the colour groups of the Talmud tree
  'amoraim-sura': { parent: 'amoraim', order: 1, color: 't2-sura', name: L('סורא, מתא מחסיא ונרש', 'Sura, Mata Mechasya and Naresh'), description: L('אמוראי ישיבת סורא והמקומות הסמוכים לה', 'The Amoraim of the Sura yeshivah and the places near it') },
  'amoraim-nehardea': { parent: 'amoraim', order: 2, color: 't2-nehardea', name: L('נהרדעא, פומבדיתא ומחוזא', 'Nehardea, Pumbedita and Mechoza'), description: L('אמוראי ישיבות נהרדעא ופומבדיתא ומחוזא', 'The Amoraim of the yeshivot of Nehardea, Pumbedita and Mechoza') },
  'amoraim-tveria': { parent: 'amoraim', order: 3, color: 't2-tveria', name: L('טבריה', 'Tiberias'), description: L('אמוראי ישיבת טבריה, והנחותי שירדו לבבל ועלו ממנה', 'The Amoraim of the Tiberias yeshivah, and the Nechutei who travelled between it and Bavel') },
  'amoraim-eretz': { parent: 'amoraim', order: 4, color: 't2-eretz', name: L('שאר ארץ ישראל', 'The Rest of the Land of Israel'), description: L('אמוראי ציפורי, קיסריה, לוד ושאר ארץ ישראל', 'The Amoraim of Tzippori, Caesarea, Lod and the rest of the Land of Israel') },
  'amoraim-bavel': { parent: 'amoraim', order: 5, color: 't2-bavel', name: L('שאר בבל ופרס', 'The Rest of Bavel and Persia'), description: L('אמוראים מבבל ומפרס שאינם מן הישיבות הגדולות', 'Amoraim of Bavel and Persia outside the great yeshivot') },
  'amoraim-rashei-hagola': { parent: 'amoraim', order: 6, color: 't2-reshgaluta', name: L('ראשי הגולה', 'The Heads of the Exile'), description: L('ראשי הגולה ומשפחתם בימי האמוראים', 'The Heads of the Exile and their family in the days of the Amoraim') },
  'amoraim-family': { parent: 'amoraim', order: 7, color: 'marble', name: L('משפחות האמוראים', 'The Families of the Amoraim'), description: L('הורים, נשים ובני משפחה של האמוראים, הכתובים באילן בלי תיבה', 'Parents, wives and family of the Amoraim, written on the tree without a box') },
  levites: { order: 6.5, color: 't1-levi', sortMode: 'chrono', name: L('בני לוי', 'The Levites'), description: L('משפחות שבט לוי: לויים, משוררים ובני משפחות הכהנים', 'The families of the tribe of Levi: Levites, singers and the families of the Kohanim') },
  'gerei-tzedek': { order: 6.6, color: 't1-gerim', sortMode: 'chrono', name: L('גרי צדק', 'Righteous Converts'), description: L('מי שבאו מן העמים ונכנסו תחת כנפי השכינה', 'Those who came from the nations and entered under the wings of the Divine Presence') },
};

// Each batch: its pages, the existing pages that join its list, the order of
// the list, and names on existing pages that now have a page of their own.
const BATCHES = [
  {
    category: 'egypt-exodus',
    entries: require('./content/egypt'),
    order: ['osnat', 'shevet-menashe', 'shevet-efraim', 'tamar-eshet-er', 'bat-shua', 'er', 'peretz', 'zerach', 'gershon-ben-levi', 'kehat', 'merari', 'palu', 'serach-bat-asher',
      'chetzron', 'eshet-chetzron-vekenaz', 'kenaz', 'ram', 'amram', 'yocheved', 'yitzhar', 'chevron-ben-kehat', 'uziel-ben-kehat', 'eliav-ben-palu', 'aminadav', 'ammihud',
      'miriam-haneviah', 'aharon-hakohen', 'moshe-rabbeinu', 'yitro', 'tziporah', 'gershom', 'eliezer-ben-moshe', 'elisheva-bat-aminadav', 'nachshon-ben-aminadav',
      'netanel-ben-tzuar', 'eliav-ben-chelon', 'elitzur-ben-shedeur', 'shelumiel-ben-tzurishaddai', 'elyasaf-ben-deuel', 'elishama-ben-ammihud', 'gamliel-ben-pedahtzur',
      'avidan-ben-gideoni', 'achiezer-ben-ammishaddai', 'pagiel-ben-ochran', 'achira-ben-einan', 'korach', 'asir', 'elkana-ben-korach', 'aviasaf', 'datan', 'aviram',
      'nadav-ben-aharon', 'avihu', 'elazar-ben-aharon', 'itamar', 'pinchas', 'kalev-ben-yefuneh', 'otniel-ben-kenaz', 'chur', 'uri', 'betzalel', 'nun', 'yehoshua-bin-nun', 'rachav', 'salmon'],
    relink: {
      'moshe-rabbeinu': { 'עמרם': 'amram', 'יוכבד': 'yocheved', 'ציפורה': 'tziporah', 'גרשם': 'gershom', 'אליעזר': 'eliezer-ben-moshe' },
      'aharon-hakohen': { 'אלעזר': 'elazar-ben-aharon', 'עמרם': 'amram', 'יוכבד': 'yocheved', 'אלישבע בת עמינדב': 'elisheva-bat-aminadav', 'נדב': 'nadav-ben-aharon', 'אביהוא': 'avihu', 'איתמר': 'itamar' },
      'miriam-haneviah': { 'עמרם': 'amram', 'יוכבד': 'yocheved', 'חור': 'chur' },
      'yehoshua-bin-nun': { 'נון': 'nun', 'רחב': 'rachav' },
      'kalev-ben-yefuneh': { 'חצרון': 'chetzron', 'אשת חצרון וקנז': 'eshet-chetzron-vekenaz', 'חור': 'chur' },
      'otniel-ben-kenaz': { 'קנז': 'kenaz' },
      'nachshon-ben-aminadav': { 'עמינדב': 'aminadav', 'אלישבע בת עמינדב': 'elisheva-bat-aminadav', 'שלמון': 'salmon' },
      'elishama-ben-ammihud': { 'עמיהוד': 'ammihud', 'נון': 'nun' },
      'ivtzan-boaz': { 'שלמון': 'salmon' },
      'shevet-levi': { 'גרשון': 'gershon-ben-levi', 'קהת': 'kehat', 'מררי': 'merari' },
      'shevet-yehuda': { 'בת-שוע': 'bat-shua', 'ער': 'er', 'פרץ': 'peretz', 'זרח': 'zerach' },
      'shevet-asher': { 'שרח בת אשר': 'serach-bat-asher' },
      'elazar-ben-aharon': { 'אלישבע בת עמינדב': 'elisheva-bat-aminadav' },
      'betzalel': {},
      pinchas: { 'אלעזר': 'elazar-ben-aharon' },
    },
  },
  {
    category: 'judges-to-david',
    entries: require('./content/judges-era'),
    order: ['otniel-ben-kenaz', 'gera', 'ehud-ben-gera', 'anat', 'shamgar-ben-anat', 'devorah-haneviah', 'avinoam', 'barak', 'yoash-haaviezri', 'gideon', 'avimelech', 'yotam-ben-gideon',
      'puah', 'tola-ben-puah', 'yair-hagiladi', 'yiftach', 'ivtzan-boaz', 'rut', 'oved', 'elon-hazevuloni', 'hillel-hapiratoni', 'avdon-ben-hillel', 'manoach', 'tzlelponit', 'shimshon', 'delila',
      'yehonatan-ben-gershom', 'zerachya', 'merayot', 'amarya', 'achituv-ben-amarya', 'elkanah', 'chana-haneviah', 'eli-hakohen', 'chofni', 'pinchas-ben-eli', 'achituv-ben-pinchas',
      'shmuel-hanavi', 'yoel-ben-shmuel', 'aviya-ben-shmuel', 'aviel', 'kish', 'ner', 'shaul-hamelech', 'avner', 'yehonatan-ben-shaul', 'achimelech-ben-achituv', 'yishai', 'nitzevet', 'adael'],
    relink: {
      'ehud-ben-gera': { 'גרא': 'gera' },
      'shamgar-ben-anat': { 'ענת': 'anat' },
      'devorah-haneviah': { 'לפידות': 'barak' },
      gideon: { 'יואש האביעזרי': 'yoash-haaviezri', 'יותם בן גדעון': 'yotam-ben-gideon' },
      avimelech: { 'יותם בן גדעון': 'yotam-ben-gideon' },
      'tola-ben-puah': { 'פואה בן דודו': 'puah' },
      'avdon-ben-hillel': { 'הלל הפרעתוני': 'hillel-hapiratoni' },
      shimshon: { 'מנוח': 'manoach', 'צללפונית': 'tzlelponit', 'דלילה': 'delila' },
      'ivtzan-boaz': { 'רות המואביה': 'rut', 'עובד': 'oved' },
      'uzzi-ben-bukki': { 'זרחיה': 'zerachya' },
      'tzadok-hakohen': { 'אחיטוב': 'achituv-ben-amarya' },
      'eli-hakohen': { 'חפני': 'chofni', 'פינחס': 'pinchas-ben-eli' },
      'achituv-ben-pinchas': { 'פינחס בן עלי': 'pinchas-ben-eli' },
      'shmuel-hanavi': { 'אלקנה': 'elkanah', 'חנה': 'chana-haneviah' },
      'chana-haneviah': { 'אלקנה': 'elkanah' },
      'shaul-hamelech': { 'קיש': 'kish', 'יהונתן': 'yehonatan-ben-shaul' },
      david: { 'ישי': 'yishai', 'נצבת בת עדאל': 'nitzevet' },
    },
  },
  {
    category: 'david-shlomo',
    entries: require('./content/david-shlomo'),
    order: ['david', 'tzruya', 'yoav', 'avishai', 'asael', 'michal', 'avigayil-haneviah', 'ish-boshet', 'avner', 'yehonatan-ben-shaul', 'mefiboshet', 'gad-hachozeh', 'natan-hanavi', 'yigal',
      'tzadok-hakohen', 'evyatar-ben-achimelech', 'achimaatz-ben-tzadok', 'yehoyada-avi-benayahu', 'benayahu', 'berachyahu', 'asaf', 'heiman', 'yedutun', 'eliam', 'achitofel', 'uriya-hachiti',
      'bat-sheva', 'amnon', 'avshalom', 'tamar-bat-david', 'shefatya', 'adoniyahu', 'shlomo', 'naama-haamonit', 'achiyah-hashiloni'],
    relink: {
      david: { 'אמנון': 'amnon', 'אבשלום': 'avshalom', 'אדוניהו': 'adoniyahu', 'תמר': 'tamar-bat-david', 'מיכל בת שאול': 'michal', 'בת שבע': 'bat-sheva', 'אחיתופל': 'achitofel', 'צרויה': 'tzruya' },
      shlomo: { 'בת שבע': 'bat-sheva', 'אמנון': 'amnon', 'אבשלום': 'avshalom', 'אדוניהו': 'adoniyahu', 'תמר': 'tamar-bat-david', 'נעמה העמונית': 'naama-haamonit' },
      'shaul-hamelech': { 'מיכל': 'michal' },
      yishai: { 'צרויה': 'tzruya' },
      'yehonatan-ben-shaul': { 'מפיבושת': 'mefiboshet' },
      rechavam: { 'נעמה העמונית': 'naama-haamonit' },
    },
  },
  {
    category: 'kingdom-of-judah',
    entries: require('./content/judah'),
    order: ['naama-haamonit', 'maacha-bat-avishalom', 'azuva', 'oded-avi-azaryahu', 'yochanan-ben-azarya', 'azarya-ben-yochanan', 'amarya-ben-azarya', 'yehoshavat',
      'achituv-ben-amarya-2', 'chefzi-ba', 'tzadok-ben-achituv-2', 'meshulam-saba-shafan', 'atzalyahu', 'shafan', 'achikam', 'gemaryahu', 'shemayahu-avi-uriyahu', 'yigdalyahu',
      'chanan-ben-yigdalyahu', 'shalum-hanavi', 'chanamel', 'buzi', 'gedalya', 'zecharyahu-avi-yachaziel', 'dodavahu'],
    relink: {
      rechavam: { 'מעכה בת אבישלום': 'maacha-bat-avishalom' },
      abiyam: { 'מעכה בת אבישלום': 'maacha-bat-avishalom' },
      asa: { 'מעכה בת אבישלום': 'maacha-bat-avishalom', 'עזובה בת שלחי': 'azuva' },
      yehoshafat: { 'עזובה בת שלחי': 'azuva' },
      achazyahu: { 'יהושבע': 'yehoshavat' },
      'yehoyada-hakohen': { 'יהושבע בת יהורם': 'yehoshavat' },
      chizkiyahu: { 'חפצי-בה': 'chefzi-ba' },
      menashe: { 'חפצי-בה': 'chefzi-ba' },
      'azaryahu-ben-oded': { 'עודד': 'oded-avi-azaryahu' },
      'uriyahu-ben-shemayahu': { 'שמעיהו': 'shemayahu-avi-uriyahu' },
      'yechezkel-hanavi': { 'בוזי הכהן': 'buzi' },
      'azaryah-ben-achimaatz': { 'יוחנן': 'yochanan-ben-azarya' },
      'shalum-ben-tzadok': { 'צדוק': 'tzadok-ben-achituv-2' },
      'yachaziel-halevi': { 'זכריהו': 'zecharyahu-avi-yachaziel' },
      'eliezer-ben-dodavahu': { 'דודוהו': 'dodavahu' },
    },
  },
  {
    category: 'kingdom-of-israel',
    entries: require('./content/israel-exile-return').israel,
    order: ['nevat', 'aviya-ben-yeravam', 'achiya-avi-baasha', 'izevel', 'yimla', 'nimshi', 'yehoshafat-ben-nimshi'],
    relink: {
      'yeravam-ben-nevat': { 'נבט': 'nevat', 'אביה': 'aviya-ben-yeravam' },
      achav: { 'איזבל': 'izevel' },
      baasha: { 'אחיה': 'achiya-avi-baasha' },
      yehu: { 'יהושפט בן נמשי': 'yehoshafat-ben-nimshi' },
      'michayhu-ben-yimlah': { 'ימלה': 'yimla' },
    },
  },
  {
    category: 'galut-bavel',
    entries: require('./content/israel-exile-return').galut,
    order: ['daniel', 'chananya-chaver-daniel', 'mishael', 'azarya-chaver-daniel', 'yechezkel-hanavi', 'baruch-ben-neriyah', 'yehotzadak', 'pedaya-rosh-hagola', 'shaltiel',
      'shimi-avi-yair', 'yair-avi-mordechai', 'avichail', 'mordechai-hayehudi', 'esther-hamalka', 'meshulam-rosh-hagola', 'chananya-rosh-hagola', 'berechya-rosh-hagola'],
    relink: {
      'mordechai-hayehudi': { 'יאיר': 'yair-avi-mordechai' },
      'esther-hamalka': { 'אביחיל': 'avichail' },
      yehoyachin: { 'שאלתיאל': 'shaltiel', 'פדיה': 'pedaya-rosh-hagola' },
      'seraya-ben-azaryah': { 'יהוצדק': 'yehotzadak' },
    },
  },
  {
    category: 'shivat-tzion',
    entries: require('./content/israel-exile-return').shivat,
    order: ['zerubavel', 'yehoshua-ben-yehotzadak', 'chaggai-hanavi', 'zecharyah-hanavi', 'mordechai-hayehudi', 'yoyakim', 'ezra-hasofer', 'chachalya', 'nechemya', 'elyashiv', 'malachi-hanavi'],
    relink: {
      'seraya-ben-azaryah': { 'עזרא הסופר': 'ezra-hasofer' },
      'chaggai-hanavi': { 'זרובבל': 'zerubavel' },
      'zecharyah-hanavi': { 'זרובבל': 'zerubavel' },
      'malachi-hanavi': { 'עזרא הסופר': 'ezra-hasofer' },
      'baruch-ben-neriyah': { 'עזרא הסופר': 'ezra-hasofer' },
    },
  },
  // ── the Second Temple ──
  {
    category: 'anshei-knesset-hagedola',
    entries: [],
    order: ['ezra-hasofer', 'nechemya', 'mordechai-hayehudi', 'daniel', 'chananya-chaver-daniel', 'mishael', 'azarya-chaver-daniel', 'chaggai-hanavi', 'zecharyah-hanavi',
      'malachi-hanavi', 'shimon-hatzadik'],
    relink: {},
  },
  {
    category: 'kohanim-gedolim-second-temple',
    manual: true, // the order of the High Priests, not by height on the tree
    entries: require('./content/second-temple-priests'),
    order: ['yehoshua-ben-yehotzadak', 'yoyakim', 'elyashiv', 'yoyada-kg', 'yonatan-kg', 'yadua', 'choniyo-1', 'shimon-hatzadik', 'elazar-kg2', 'menashe-kg',
      'choniyo-2', 'shimon-2', 'choniyo-3', 'yason', 'menelaus', 'yehuda-hamaccabi', 'alkimus', 'yonatan-havofsi', 'shimon-hatarsi', 'yochanan-hurkanos-1',
      'yehuda-aristobulus-1', 'alexander-yanai', 'yochanan-hurkanos-2', 'yehuda-aristobulus-2', 'matityahu-antigonus-2', 'aristobulus-kg'],
    relink: { 'shimon-hatzadik': { 'חוניו א׳': 'choniyo-1', 'חוניו ב׳': 'choniyo-2' } },
  },
  {
    category: 'zugot',
    entries: require('./content/second-temple-sages').zugot,
    order: ['antigonus-ish-socho', 'yose-ben-yoezer', 'yose-ben-yochanan', 'yehoshua-ben-perachya', 'nitai-haarbeli', 'shimon-ben-shetach', 'yehuda-ben-tabai',
      'shmaya', 'avtalyon', 'hillel-hazaken', 'menachem-av-beit-din', 'shammai'],
    relink: {
      'shimon-hatzadik': { 'אנטיגנוס איש סוכו': 'antigonus-ish-socho' },
      'hillel-hazaken': { 'שמעיה': 'shmaya', 'אבטליון': 'avtalyon', 'רבן שמעון בן הלל': 'rabban-shimon-ben-hillel', 'יונתן בן עוזיאל': 'yonatan-ben-uziel',
        'רבן יוחנן בן זכאי': 'rabban-yochanan-ben-zakai', 'שמאי הזקן': 'shammai' },
    },
  },
  {
    category: 'ishei-bayit-sheni',
    entries: require('./content/second-temple-sages').families,
    order: ['tzadok-talmid-antigonus', 'baitos', 'yoezer', 'bat-yoezer', 'yakim-ish-tzerorot', 'beteira', 'bat-choni', 'ben-choni'],
    relink: {},
  },
  {
    category: 'nesiim',
    manual: true, // the order of the Nesi'im
    entries: require('./content/second-temple-sages').nesiim,
    order: ['yose-ben-yoezer', 'yehoshua-ben-perachya', 'shimon-ben-shetach', 'shmaya', 'hillel-hazaken', 'rabban-shimon-ben-hillel', 'rabban-gamliel-hazaken',
      'rabban-shimon-ben-gamliel-1', 'rabban-gamliel-deyavne', 'rabban-shimon-ben-gamliel-2', 'rabbi-yehuda-hanasi'],
    relink: {},
  },
  {
    category: 'tannaim',
    entries: require('./content/second-temple-sages').tannaim,
    order: [],
    relink: {},
  },
  {
    category: 'tannaim',
    entries: require('./content/tannaim').sages,
    order: [],
    relink: {
      'rabbi-akiva': { 'רחל': 'rachel-eshet-rabbi-akiva', 'רבי אליעזר בן הורקנוס': 'rabbi-eliezer-ben-hurkanos', 'רבי יהושע בן חנניה': 'rabbi-yehoshua-ben-chananya',
        'נחום איש גמזו': 'nachum-ish-gamzu', 'רבי מאיר': 'rabbi-meir', 'רבי יהודה בר אלעאי': 'rabbi-yehuda-bar-ilai', 'רבי יוסי בן חלפתא': 'rabbi-yose-ben-chalafta',
        'רבי שמעון בר יוחאי': 'rabbi-shimon-bar-yochai', 'רבי אלעזר בן שמוע': 'rabbi-elazar-ben-shamua' },
    },
  },
  {
    category: 'ishei-bayit-sheni',
    entries: require('./content/tannaim').families,
    order: ['harkinas', 'bat-rabban-gamliel', 'rachel-eshet-rabbi-akiva', 'bat-rabbi-pinchas-ben-yair'],
    relink: {},
  },
  {
    category: 'rashei-hagola',
    entries: require('./content/second-temple-last').rasheiHagola,
    order: ['chizkiya-rosh-hagola', 'akuv-rosh-hagola', 'nachum-rosh-hagola', 'yochanan-rosh-hagola', 'shafat-rosh-hagola', 'anan-rosh-hagola', 'natan-rosh-hagola',
      'rav-huna-kama', 'kosiva', 'shimon-ben-koziva'],
    relink: {},
  },
  {
    category: 'tannaim',
    entries: require('./content/second-temple-last').tanna,
    order: [],
    relink: {},
  },
  {
    category: 'ishei-bayit-sheni',
    entries: require('./content/second-temple-last').ishim,
    order: ['nakdimon-ben-gurion', 'ben-tzitzit-hakeset', 'kalba-savua', 'alexander-alabarch', 'philo', 'demetrius-alabarch', 'yosef-ben-matityahu'],
    relink: {},
  },
  {
    category: 'av-beit-din',
    entries: [],
    order: ['yose-ben-yochanan', 'nitai-haarbeli', 'yehuda-ben-tabai', 'avtalyon', 'menachem-av-beit-din', 'shammai', 'rabban-yochanan-ben-zakai'],
    relink: {},
  },
  // ── the Talmud tree: the Amoraim, band by band ──
  { category: null, orderBase: 0, entries: require('./content/amoraim-1'), order: [], relink: {} },
  { category: null, orderBase: 100, entries: require('./content/amoraim-2'), order: [], relink: {} },
  { category: null, orderBase: 200, entries: require('./content/amoraim-3'), order: [], relink: {} },
  {
    category: 'beit-chashmonai',
    entries: require('./content/second-temple-houses').chashmonai,
    order: ['shimon-hachashmonai', 'yochanan-hachashmonai', 'matityahu-hachashmonai', 'yochanan-ben-matityahu', 'elazar-ben-matityahu', 'yehuda-hamaccabi', 'yonatan-havofsi',
      'shimon-hatarsi', 'yochanan-hurkanos-1', 'yehuda-aristobulus-1', 'matityahu-antigonus-1', 'alexander-yanai', 'shlomtzion', 'yochanan-hurkanos-2', 'yehuda-aristobulus-2',
      'matityahu-antigonus-2', 'alexander-ben-aristobulus', 'alexandra', 'miriam-hachashmonait', 'aristobulus-kg'],
    relink: {},
  },
  {
    category: 'beit-hordos',
    entries: require('./content/second-temple-houses').hordos,
    order: ['antipater', 'hordos', 'shlomit', 'miriam-hachashmonait', 'aristobulus-ben-hordos', 'archelaus', 'hordos-antipas', 'philipus', 'agripas-1', 'agripas-2', 'miriam-bat-agripas'],
    relink: {},
  },
];

// Why names have an asterisk on the tree; and a few links from those notes.
const ASTERISKS = require('./content/asterisks');
const ASTERISK_TITLE = { he: 'הכוכבית שבאילן', en: 'The Asterisk on Our Tree' };
const EXTRA = [
  { slug: 'ovadyah-hanavi', addCategory: 'gerei-tzedek' },
  { slug: 'rav-huna-kama', addCategory: 'amoraim-rashei-hagola' },
  // Ibn Ezra: Tzefanyah descended from Chizkiyahu (the tree follows him)
  { slug: 'tzefanyah-hanavi', rels: [{ type: 'ancestor', slug: 'chizkiyahu' }] },
  // the High Priesthood of the Second Temple, before and after (black arrows)
  { slug: 'yehoshua-ben-yehotzadak', offices: [{ label: L('כהונה גדולה', 'High Priesthood'), before: [], after: ['yoyakim'] }] },
  { slug: 'yoyakim', offices: [{ label: L('כהונה גדולה', 'High Priesthood'), before: ['yehoshua-ben-yehotzadak'], after: ['elyashiv'] }] },
  { slug: 'elyashiv', offices: [{ label: L('כהונה גדולה', 'High Priesthood'), before: ['yoyakim'], after: ['yoyada-kg'] }] },
  {
    slug: 'rabbi-akiva',
    note: (() => { const m = require('./content/tannaim').MARTYR(4); return { he: [m.titleHe, m.textHe], en: [m.titleEn, m.textEn] }; })(),
  },
  { slug: 'hillel-hazaken', offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), before: ['shmaya'], after: ['rabban-shimon-ben-hillel'] }],
    rels: [{ type: 'related', slug: 'beteira' }, { type: 'plugta', slug: 'shammai' }, { type: 'plugta', slug: 'menachem-av-beit-din' }] },
  { slug: 'shimon-hatzadik', offices: [{ label: L('כהונה גדולה', 'High Priesthood'), before: ['choniyo-1'], after: ['elazar-kg2'] }],
    rels: [{ type: 'teacher', he: 'אנשי כנסת הגדולה', en: 'The Men of the Great Assembly' }] },
  // a Kohen, branch unknown; the tree joins him to Pinchas with a "?"
  {
    slug: 'natan-hanavi',
    rels: [{ type: 'ancestor', slug: 'pinchas', uncertain: true }],
    note: {
      he: ['משפחתו', 'נתן הנביא היה כהן, אך לא ידוע מאיזה ענף של הכהונה. באילן שלנו הוא משויך לפינחס בן אלעזר, הענף הבולט שבבית אלעזר, בסימן שאלה, כי הקשר אינו ידוע. מתחתיו מופיע יגאל, מגיבורי דוד, שנקרא "יגאל בן נתן", גם הוא בסימן שאלה.'],
      en: ['His Family', 'Natan the prophet was a Kohen, but it is not known from which branch of the priesthood. On our tree he is assigned to Pinchas son of Elazar, the most prominent branch of the house of Elazar, with a question mark, since the connection is not known. Below him appears Yigal, one of David’s warriors, called "Yigal son of Natan", also with a question mark.'],
    },
  },
  {
    slug: 'gad-hachozeh',
    note: {
      he: ['משפחתו', 'באילן שלנו יש מעל גד סימן שאלה, כי לא ידוע מאיזו משפחה בא.'],
      en: ['His Family', 'On our tree there is a question mark above Gad, since it is not known which family he came from.'],
    },
  },
  // Megillah 13a: Mordechai took Esther "as a daughter" – read "as a wife"
  {
    slug: 'esther-hamalka',
    spouses: [{ slug: 'mordechai-hayehudi' }, { he: 'אחשורוש', en: 'Achashverosh' }],
    note: {
      he: ['אסתר, מרדכי ואחשורוש', 'על הפסוק "לקחה מרדכי לו לבת" אמרו חז״ל: "אל תקרי לבת אלא לבית" – כלומר לאשה (מגילה יג ע״א), ולכן באילן ובאתר מרדכי ואסתר מחוברים כבעל ואשה. אחשורוש לקח אותה למלכה במקום ושתי, והיא הצילה את עם ישראל מגזרת המן.'],
      en: ['Esther, Mordechai and Achashverosh', 'On the verse "Mordechai took her as his daughter (bat)", Chazal said: "do not read bat (daughter) but bayit (house)" – that is, as a wife (Megillah 13a), so on the tree and on our site Mordechai and Esther are joined as husband and wife. Achashverosh took her as queen in place of Vashti, and she saved the people of Israel from Haman’s decree.'],
    },
  },
];

const GROUP = Object.fromEntries(CHECKLIST.map((r) => [r[0], r[1]]));
const spotOf = (name) => {
  const row = CHECKLIST.find((r) => r[0] === name);
  if (!row) throw new Error(`"${name}" is not in the tree checklist`);
  return [{ tree: 'biblical', x: row[3], y: row[4] }];
};
// a spot on the second (Talmud) tree, for a name on both posters
const spot2Of = (name) => {
  const row = CHECKLIST2.find((r) => r[0] === name);
  if (!row) throw new Error(`"${name}" is not in the Talmud tree checklist`);
  return [{ tree: 'gmara', x: row[3], y: row[4] }];
};
const html = (sections, lang) => sections.map((s) => `<h2>${lang === 'he' ? s.titleHe : s.titleEn}</h2><p>${lang === 'he' ? s.textHe : s.textEn}</p>`).join('');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const cats = {};
  for (const [slug, c] of Object.entries(CATEGORIES)) {
    // a category that exists already is left as it is (it may have been
    // renamed, moved or reordered in the admin)
    const existing = await Category.findOne({ slug });
    if (existing) { cats[slug] = existing; continue; }
    const doc = new Category({ slug, cardColor: c.color });
    const parentCat = c.parent ? await Category.findOne({ slug: c.parent }) : null;
    doc.set({ name: c.name, description: c.description, parent: parentCat ? parentCat._id : null, order: c.order, sortMode: c.sortMode || 'manual' });
    await doc.save();
    cats[slug] = doc;
  }

  // categories made elsewhere (e.g. prophets-of-israel) can be used too
  for (const c of await Category.find()) if (!cats[c.slug]) cats[c.slug] = c;

  const bySlug = new Map((await Person.find()).map((p) => [p.slug, p]));
  const link = (r, owner) => {
    if (!r.slug) return { type: r.type, person: null, name: { he: r.he, en: r.en } };
    const other = bySlug.get(r.slug);
    // an event page is made by add-events.js; until it exists the link waits
    if (!other && EVENT_SLUGS.has(r.slug)) { console.log(`  ${owner}: event "${r.slug}" not made yet`); return null; }
    if (!other) throw new Error(`${owner}: no page "${r.slug}"`);
    return { type: r.type, person: other._id, name: { he: other.name.he, en: other.name.en || '' }, uncertain: Boolean(r.uncertain) };
  };

  // all pages first, so that links between batches work
  // a link in a role: a page (by slug) or just a name
  const officeLink = (b, owner) => {
    if (typeof b !== 'string') return { person: null, name: b };
    const other = bySlug.get(b);
    if (!other) throw new Error(`${owner}: no page "${b}" (role)`);
    return { person: other._id, name: { he: other.name.he, en: other.name.en || '' } };
  };

  let count = 0;
  for (const batch of BATCHES) {
    const period = batch.category ? cats[batch.category] : null;
    for (const e of batch.entries) {
      const doc = bySlug.get(e.slug) || new Person({ slug: e.slug });
      for (const c of e.cats) if (!cats[c]) throw new Error(`${e.slug}: no category "${c}"`);
      doc.set({
        kind: 'person', gender: e.gender, categories: [...(period ? [period._id] : []), ...e.cats.map((s) => cats[s]._id)],
        name: e.name, titles: [], roles: e.roles || [], life: e.life ? { from: e.life[0], to: e.life[1] } : { from: null, to: null },
        summary: e.summary, content: { he: html(e.sections, 'he'), en: html(e.sections, 'en') },
        sources: e.sources.map((s) => s.he), sourcesEn: e.sources.map((s) => s.en),
        treeSpots: [...(e.spot ? spotOf(e.spot) : []), ...(e.spot2 ? spot2Of(e.spot2) : [])], cardColor: e.color || doc.cardColor || GROUP[e.spot] || 't1-shvatim', published: true,
        titles: e.titles || [],
      });
      if (e.offices) doc.offices = e.offices.map((o) => ({ label: o.label, from: o.from ?? null, to: o.to ?? null, note: o.note || { he: '', en: '' }, before: [], after: [] }));
      await doc.save();
      bySlug.set(e.slug, doc);
      count += 1;
    }
  }
  for (const batch of BATCHES) {
    const period = cats[batch.category];
    for (const e of batch.entries) {
      const doc = bySlug.get(e.slug);
      doc.relations = e.rel.map((r) => link(r, e.slug)).filter(Boolean);
      if (e.offices) {
        doc.offices = e.offices.map((o) => ({ label: o.label, from: o.from ?? null, to: o.to ?? null, note: o.note || { he: '', en: '' },
          before: (o.before || []).map((b) => officeLink(b, e.slug)), after: (o.after || []).map((b) => officeLink(b, e.slug)) }));
        doc.markModified('offices');
      }
      await doc.save();
    }
    // a batch without one list (the Amoraim): each page gets its place in
    // each of its own lists, in the batch's order (base + its index)
    if (!period) {
      for (const [i, e] of batch.entries.entries()) {
        const doc = bySlug.get(e.slug);
        for (const c of e.cats) {
          const cid = String(cats[c]._id);
          const has = doc.orders?.get ? doc.orders.get(cid) != null : doc.orders?.[cid] != null;
          if (!(cats[c].sortMode === 'manual' && has)) doc.set(`orders.${cid}`, (batch.orderBase || 0) + i + 1);
        }
        await doc.save();
      }
      continue;
    }
    // existing pages join the list; the list's order
    const id = String(period._id);
    // a list sorted by years becomes this list's own order; a list that
    // already has its own order (maybe arranged by hand) keeps the places it
    // has, and only pages new to it get a place
    const wasManual = period.sortMode === 'manual';
    if (batch.manual && !wasManual) { period.sortMode = 'manual'; await period.save(); }
    for (const [i, slug] of batch.order.entries()) {
      const doc = bySlug.get(slug);
      if (!doc) throw new Error(`order: no page "${slug}"`);
      if (!doc.categories.map(String).includes(id)) doc.categories.push(period._id);
      const has = doc.orders?.get ? doc.orders.get(id) != null : doc.orders?.[id] != null;
      if (!(wasManual && has)) doc.set(`orders.${id}`, i + 1);
      await doc.save();
    }
    // names on existing pages
    for (const [slug, names] of Object.entries(batch.relink)) {
      const doc = bySlug.get(slug);
      if (!doc) continue;
      for (const r of doc.relations) {
        const target = !r.person && names[r.name?.he?.trim()];
        if (target && bySlug.get(target)) r.person = bySlug.get(target)._id;
      }
      // a "related" link to someone who is now linked as family is dropped
      const familyLinks = doc.relations.filter((r) => r.type !== 'related' && r.person);
      const family = new Set(familyLinks.map((r) => String(r.person)));
      const familyNames = new Set(familyLinks.map((r) => [...bySlug.values()].find((p) => String(p._id) === String(r.person))?.name.he));
      doc.relations = doc.relations.filter((r) => !(r.type === 'related'
        && ((r.person && family.has(String(r.person))) || (!r.person && familyNames.has(r.name?.he?.trim())))));
      doc.markModified('relations');
      await doc.save();
    }
  }

  // the Tannaim: every card gets one of the site's ten colours at random (a
  // colour given once, or chosen in the admin, is kept)
  const SITE_COLORS = ['burgundy', 'blue', 'purple', 'brown', 'marble', 'emerald', 'teal', 'ink', 'olive', 'slate'];
  if (cats.tannaim) {
    const id = String(cats.tannaim._id);
    let last = '';
    for (const doc of [...bySlug.values()].filter((d) => d.categories.map(String).includes(id))) {
      if (!SITE_COLORS.includes(doc.cardColor)) {
        const choices = SITE_COLORS.filter((c) => c !== last);
        doc.cardColor = choices[Math.floor(Math.random() * choices.length)];
        await doc.save();
      }
      last = doc.cardColor;
    }
  }

  // asterisk notes, at the end of each page (replaced, not repeated)
  for (const [slug, note] of Object.entries(ASTERISKS)) {
    const doc = bySlug.get(slug);
    if (!doc) throw new Error(`asterisk: no page "${slug}"`);
    const content = { he: doc.content?.he || '', en: doc.content?.en || '' };
    for (const lang of ['he', 'en']) {
      const head = `<h2>${ASTERISK_TITLE[lang]}</h2>`;
      const cut = content[lang].indexOf(head);
      // the note goes last; anything after an old note (e.g. a list) is kept before it
      let rest = cut >= 0 ? content[lang].slice(0, cut) + content[lang].slice(content[lang].indexOf('</p>', cut) + 4) : content[lang];
      content[lang] = `${rest}${head}<p>${note[lang]}</p>`;
    }
    doc.content = content;
    doc.markModified('content');
    await doc.save();
  }
  for (const x of EXTRA) {
    const doc = bySlug.get(x.slug);
    if (!doc) continue;
    if (x.addCategory && !doc.categories.map(String).includes(String(cats[x.addCategory]._id))) doc.categories.push(cats[x.addCategory]._id);
    for (const r of x.rels || []) {
      if (!r.slug) {
        // a name without a page: added once
        doc.relations = doc.relations.filter((q) => !(q.type === r.type && !q.person && q.name?.he === r.he));
        doc.relations.push(link(r, x.slug));
        continue;
      }
      const target = bySlug.get(r.slug);
      if (!target) continue;
      // replaces any earlier link to the same person (e.g. an old "related")
      doc.relations = doc.relations.filter((q) => String(q.person) !== String(target._id));
      doc.relations.push(link(r, x.slug));
    }
    for (const s of x.spouses || []) {
      // an earlier "related" link to the same person becomes the spouse link
      const target = s.slug ? bySlug.get(s.slug) : null;
      doc.relations = doc.relations.filter((r) => !(
        (target && String(r.person) === String(target._id)) || (!s.slug && r.name?.he?.trim() === s.he)));
      doc.relations.push(link({ type: 'spouse', ...s }, x.slug));
    }
    for (const o of x.offices || []) {
      let office = doc.offices.find((q) => q.label?.he === o.label.he);
      if (!office) { doc.offices.push({ label: o.label, from: o.from ?? null, to: o.to ?? null, note: { he: '', en: '' }, before: [], after: [] }); office = doc.offices[doc.offices.length - 1]; }
      if (o.before) office.before = o.before.map((b) => officeLink(b, x.slug));
      if (o.after) office.after = o.after.map((b) => officeLink(b, x.slug));
      doc.markModified('offices');
    }
    if (x.note) {
      const content = { he: doc.content?.he || '', en: doc.content?.en || '' };
      for (const lang of ['he', 'en']) {
        const [title, text] = x.note[lang];
        const head = `<h2>${title}</h2>`;
        const cut = content[lang].indexOf(head);
        const rest = cut >= 0 ? content[lang].slice(0, cut) + content[lang].slice(content[lang].indexOf('</p>', cut) + 4) : content[lang];
        content[lang] = `${rest}${head}<p>${text}</p>`;
      }
      doc.content = content;
      doc.markModified('content');
    }
    await doc.save();
  }

  console.log(`✓ Periods: ${count} pages in ${BATCHES.length} batch(es); ${Object.keys(ASTERISKS).length} asterisk notes`);
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
