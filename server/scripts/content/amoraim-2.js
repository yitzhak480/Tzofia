// The Talmud tree, second band: the second generation of the Amoraim, with
// their families. Teachers and students follow the poster's lines, each one
// traced to its end; the pages say what each connection means.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const CAT = {
  't2-sura': 'amoraim-sura', 't2-nehardea': 'amoraim-nehardea', 't2-tveria': 'amoraim-tveria', 't2-eretz': 'amoraim-eretz',
  't2-bavel': 'amoraim-bavel', 't2-reshgaluta': 'amoraim-rashei-hagola', 't2-nesiim': 'nesiim',
};
const A = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  let cats = e.cats || (row[2] === 'name' ? ['amoraim-family'] : [CAT[row[1]]]);
  if (row[1] === 't2-reshgaluta' && row[2] === 'box' && !cats.includes('rashei-hagola')) cats = [...cats, 'rashei-hagola'];
  return { gender: 'male', roles: [], ...e, cats, color: row[1] };
};
const F = (e) => A({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const GEN2 = L('אמורא, דור ב׳', 'Amora, 2nd generation');
const KOLELET = L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);

module.exports = [
  // ── the Land of Israel ──
  A({
    slug: 'rabban-gamliel-4', spot2: 'רבן גמליאל ד׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN2, L('נשיא', 'Nasi')],
    name: L('רבן גמליאל ד׳', 'Rabban Gamliel IV'),
    summary: L('בנו של רבי יהודה נשיאה הראשון, הנשיא אחריו.', 'Son of Rabbi Yehudah Nesiah I, the Nasi after him.'),
    rel: [to('father', 'rabbi-yehuda-nesia-1')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4030, to: 4060, before: ['rabbi-yehuda-nesia-1'], after: ['rabbi-yehuda-nesia-2'] }],
    sources: [TTA],
    sections: one('רבן גמליאל הרביעי', 'רבן גמליאל, בנו של רבי יהודה נשיאה, עמד בראש הנשיאות בארץ ישראל כשלושים שנה, בימי הדור השני של האמוראים. אחריו עמד בנו, רבי יהודה נשיאה השני. בימיו נחלשה הנשיאות, ומרכז התורה עבר בהדרגה לישיבת טבריה.', 'Rabban Gamliel IV', 'Rabban Gamliel, son of Rabbi Yehudah Nesiah, headed the patriarchate in the Land of Israel for about thirty years, in the days of the second generation of the Amoraim. After him came his son, Rabbi Yehudah Nesiah II. In his days the patriarchate weakened, and the center of Torah moved gradually to the Yeshivah of Tiberias.'),
  }),
  A({
    slug: 'rabbi-yose-bar-chanina', spot2: 'רבי יוסי בר חנינא', roles: [GEN2],
    name: L('רבי יוסי בר חנינא', 'Rabbi Yose bar Chanina'),
    summary: L('תלמיד חבר של רבי יוחנן, מחכמי קיסריה.', 'Rabbi Yochanan’s talmid chaver, of the sages of Caesarea.'),
    rel: [to('teacher', 'rabbi-yochanan')], sources: [L('כתובות קיא ע״א', 'Ketubot 111a'), L('ברכות כו ע״ב', 'Berachot 26b'), TTA],
    sections: [
      sec('רבי יוסי בר חנינא', 'רבי יוסי ברבי חנינא, מחכמי קיסריה, הוא שאמר שהאבות תיקנו את התפילות: "תפילות אבות תקנום" (ברכות כו ע״ב). בכתובות (קיא ע״א) הוא דורש את השבועות שהשביע ה׳ את ישראל ואת אומות העולם בגלות.', 'Rabbi Yose bar Chanina', 'Rabbi Yose son of Rabbi Chanina, of the sages of Caesarea, is the one who said that the Patriarchs instituted the prayers (Berachot 26b). In Ketubot (111a) he expounds the oaths with which G-d bound Israel and the nations in the exile.'),
      TS('רבי יוסי בר חנינא היה תלמיד חבר של רבי יוחנן – למד ממנו, אך היה גם חברו.', 'Rabbi Yose bar Chanina was Rabbi Yochanan’s talmid chaver – he learned from him, but was also his colleague.'),
    ],
  }),
  A({
    slug: 'rabbi-yoshiya', spot2: 'רבי יאשיה', roles: [GEN2],
    name: L('רבי יאשיה', 'Rabbi Yoshiyah'), summary: L('מתלמידי רבי יוחנן.', 'One of Rabbi Yochanan’s students.'),
    rel: [to('teacher', 'rabbi-yochanan')], sources: [TTA],
    sections: [TS('רבי יאשיה, מאמוראי ארץ ישראל בדור השני, היה מתלמידי רבי יוחנן.', 'Rabbi Yoshiyah, of the Amoraim of the Land of Israel in the second generation, was one of Rabbi Yochanan’s students.')],
  }),
  A({
    slug: 'rabbi-simlai', spot2: 'רבי שמלאי בר אבא', roles: [GEN2],
    name: L('רבי שמלאי בר אבא', 'Rabbi Simlai'),
    summary: L('שדרש: "שש מאות ושלוש עשרה מצוות נאמרו לו למשה".', 'Who taught: "Six hundred and thirteen mitzvot were said to Moshe".'),
    rel: [to('teacher', 'rabbi-yehuda-nesia-1'), to('teacher', 'rabbi-yochanan')], sources: [L('מכות כג ע״ב – כד ע״א', 'Makkot 23b–24a'), L('סוטה יד ע״א', 'Sotah 14a')],
    sections: [
      sec('תרי״ג מצוות', 'רבי שמלאי דרש: "שש מאות ושלוש עשרה מצוות נאמרו לו למשה – שלוש מאות וששים וחמש לאוין כמניין ימות החמה, ומאתיים וארבעים ושמונה עשה כנגד איבריו של אדם"; ואחר כך: "בא דוד והעמידן על אחת עשרה... בא חבקוק והעמידן על אחת – וצדיק באמונתו יחיה" (מכות כג ע״ב – כד ע״א). הוא גם דרש: "תורה תחילתה גמילות חסדים וסופה גמילות חסדים" (סוטה יד ע״א).', 'The 613 Mitzvot', 'Rabbi Simlai taught: "Six hundred and thirteen mitzvot were said to Moshe – 365 prohibitions like the days of the solar year, and 248 commandments like the limbs of a person"; and then: "David came and set them on eleven... Chavakuk came and set them on one – the righteous shall live by his faith" (Makkot 23b–24a). He also taught: "The Torah begins with kindness and ends with kindness" (Sotah 14a).'),
      TS('רבותיו היו רבי יהודה נשיאה ורבי יוחנן.', 'His teachers were Rabbi Yehudah Nesiah and Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rabbi-shimon-ben-pazi', spot2: 'רבי שמעון בן פזי', roles: [GEN2],
    name: L('רבי שמעון בן פזי', 'Rabbi Shimon ben Pazi'),
    summary: L('בנו של פזי, תלמיד רבי יהושע בן לוי ורבי יוחנן, בעל אגדה.', 'Son of Pazi, student of Rabbi Yehoshua ben Levi and Rabbi Yochanan, a master of aggadah.'),
    rel: [to('father', 'pazi'), to('teacher', 'rabbi-yehoshua-ben-levi'), to('teacher', 'rabbi-yochanan')], sources: [L('חולין ס ע״ב', 'Chullin 60b'), TTA],
    sections: [
      sec('מיעוט הירח', 'רבי שמעון בן פזי דרש את הסתירה בפסוק "ויעש אלוקים את שני המאורות הגדולים... את המאור הגדול ואת המאור הקטן": הירח אמר "אי אפשר לשני מלכים שישתמשו בכתר אחד", ונאמר לו "לכי ומעטי את עצמך" (חולין ס ע״ב).', 'The Diminishing of the Moon', 'Rabbi Shimon ben Pazi expounded the contradiction in the verse "G-d made the two great lights... the great light and the small light": the moon said "two kings cannot use one crown", and was told "go and make yourself smaller" (Chullin 60b).'),
      TS('רבותיו היו רבי יהושע בן לוי ורבי יוחנן.', 'His teachers were Rabbi Yehoshua ben Levi and Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rabbi-yosef-ben-ribal', spot2: 'רבי יוסף בריה דריב"ל', roles: [GEN2],
    name: L('רבי יוסף בריה דריב״ל', 'Rabbi Yosef son of Rabbi Yehoshua ben Levi'),
    summary: L('בנו של רבי יהושע בן לוי, ש"עולם הפוך ראה".', 'Son of Rabbi Yehoshua ben Levi, who "saw an upside-down world".'),
    rel: [to('father', 'rabbi-yehoshua-ben-levi')], sources: [L('בבא בתרא י ע״ב', 'Bava Batra 10b'), L('פסחים נ ע״א', 'Pesachim 50a')],
    sections: one('עולם הפוך', 'הגמרא (בבא בתרא י ע״ב) מספרת שרבי יוסף בנו של רבי יהושע בן לוי חלה ונתעלף, וכשהתעורר שאל אותו אביו מה ראה. אמר: "עולם הפוך ראיתי – עליונים למטה ותחתונים למעלה". אמר לו אביו: "עולם ברור ראית".', 'An Upside-Down World', 'The Gemara (Bava Batra 10b) relates that Rabbi Yosef son of Rabbi Yehoshua ben Levi fell ill and fainted, and when he awoke his father asked him what he had seen. He said: "I saw an upside-down world – the high below and the low above". His father told him: "You saw a clear world".'),
  }),
  A({
    slug: 'rabbi-shmuel-bar-nachmani', spot2: 'רבי שמואל בר נחמני', roles: [GEN2],
    name: L('רבי שמואל בר נחמני', 'Rabbi Shmuel bar Nachmani'),
    summary: L('גדול בעלי האגדה, תלמיד רבי יונתן.', 'The greatest of the masters of aggadah, student of Rabbi Yonatan.'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-yonatan-ben-elazar'), to('plugta', 'rabbi-yaakov-bar-idi')],
    sources: [L('סנהדרין צז ע״ב', 'Sanhedrin 97b'), L('בבא בתרא טו ע״א', 'Bava Batra 15a'), TTA],
    sections: [
      sec('בעל אגדה', 'רבי שמואל בר נחמני מוסר בגמרא אגדות רבות בשם רבו רבי יונתן, ובהן "תיפח עצמן של מחשבי קיצין" (סנהדרין צז ע״ב), ודעתו ש"איוב לא היה ולא נברא, אלא משל היה" (בבא בתרא טו ע״א). בארץ ישראל דרש לפני הציבור, ונשלח גם למלכות בענייני הציבור.', 'A Master of Aggadah', 'Rabbi Shmuel bar Nachmani hands down in the Gemara many aggadot in the name of his teacher Rabbi Yonatan, among them "may the bones of those who calculate the end be blasted" (Sanhedrin 97b), and the view that "Iyov never existed, but was a parable" (Bava Batra 15a).'),
      TS('רבותיו היו רבי יונתן ורבי יוחנן, וחברו לתורה היה רבי יעקב בר אידי.', 'His teachers were Rabbi Yonatan and Rabbi Yochanan, and his study partner was Rabbi Yaakov bar Idi.'),
    ],
  }),
  A({
    slug: 'rabbi-yaakov-bar-idi', spot2: 'רבי יעקב בר אידי', roles: [GEN2],
    name: L('רבי יעקב בר אידי', 'Rabbi Yaakov bar Idi'),
    summary: L('תלמיד רבי יהושע בן לוי ורבי יוחנן.', 'Student of Rabbi Yehoshua ben Levi and Rabbi Yochanan.'),
    rel: [to('teacher', 'rabbi-yehoshua-ben-levi'), to('teacher', 'rabbi-yochanan'), to('plugta', 'rabbi-shmuel-bar-nachmani')], sources: [L('ברכות ד ע״א', 'Berachot 4a'), TTA],
    sections: [
      sec('שמא יגרום החטא', 'רבי יעקב בר אידי דרש את הפסוק שבו פחד יעקב מעשו אף שה׳ הבטיחו "והנה אנכי עמך": "שמא יגרום החטא" (ברכות ד ע״א).', 'Lest Sin Cause It', 'Rabbi Yaakov bar Idi expounded the verse in which Yaakov feared Esav although G-d had promised him "Behold, I am with you": "lest sin cause it" (Berachot 4a).'),
      TS('רבותיו היו רבי יהושע בן לוי ורבי יוחנן, וחברו לתורה היה רבי שמואל בר נחמני.', 'His teachers were Rabbi Yehoshua ben Levi and Rabbi Yochanan, and his study partner was Rabbi Shmuel bar Nachmani.'),
    ],
  }),
  A({
    slug: 'rabbi-chiya-bar-abba', spot2: 'רבי חייא בר אבא', roles: [GEN2],
    name: L('רבי חייא בר אבא', 'Rabbi Chiya bar Abba'),
    summary: L('כהן שעלה מבבל, מגדולי תלמידי רבי יוחנן.', 'A Kohen who came up from Bavel, one of the greatest of Rabbi Yochanan’s students.'),
    rel: [to('teacher', 'rabbi-chanina-bar-chama'), to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-yonatan-ben-elazar')], sources: [L('ברכות לח ע״ב', 'Berachot 38b'), TTA],
    sections: [
      sec('רבי חייא בר אבא', 'רבי חייא בר אבא עלה מבבל לארץ ישראל, והיה מגדולי תלמידי רבי יוחנן ומקפיד לומר את דבריו בדיוק כפי ששמע אותם (ברכות לח ע״ב). הוא התפרנס בדוחק, ונשלח בשליחויות לקהילות שבתפוצות.', 'Rabbi Chiya bar Abba', 'Rabbi Chiya bar Abba came up from Bavel to the Land of Israel, and was one of the greatest of Rabbi Yochanan’s students, careful to say his words exactly as he heard them (Berachot 38b).'),
      TS('רבותיו היו רבי חנינא בר חמא, רבי יוחנן ורבי יונתן.', 'His teachers were Rabbi Chanina bar Chama, Rabbi Yochanan and Rabbi Yonatan.'),
    ],
  }),
  // ── Tiberias ──
  A({
    slug: 'rabbi-yitzhak-nafcha', spot2: 'רבי יצחק נפחא', roles: [GEN2, L('נחותי', 'Nechuta (travelled between the Land of Israel and Bavel)')],
    name: L('רבי יצחק נפחא', 'Rabbi Yitzhak Nafcha'),
    summary: L('תלמיד רבי יוחנן, מן ה"נחותי" שהעבירו את תורת ארץ ישראל לבבל.', 'Rabbi Yochanan’s student, of the "Nechutei" who carried the Torah of the Land of Israel to Bavel.'),
    rel: [to('teacher', 'rabbi-yochanan')], sources: [L('בבא קמא ס ע״ב', 'Bava Kamma 60b'), L('תענית ה ע״ב', 'Taanit 5b')],
    sections: [
      sec('כאדם שיש לו שתי נשים', 'הגמרא (בבא קמא ס ע״ב) מספרת שרבי אמי ורבי אסי ישבו לפני רבי יצחק נפחא; זה ביקש שיאמר הלכה וזה ביקש שיאמר אגדה, ואמר להם משל לאדם שיש לו שתי נשים, אחת צעירה ואחת זקנה – הצעירה מלקטת לו שערות לבנות והזקנה שחורות, ונמצא קרח מכאן ומכאן. בתענית (ה ע״ב) הוא מברך את רב נחמן במשל האילן: "במה אברכך? ...יהי רצון שכל נטיעות שנוטעין ממך יהיו כמותך".', 'Like a Man with Two Wives', 'The Gemara (Bava Kamma 60b) relates that Rabbi Ami and Rabbi Assi sat before Rabbi Yitzhak Nafcha; one asked him to say halachah and the other to say aggadah, and he told them a parable of a man with two wives, one young and one old – the young one plucked his white hairs and the old one his black ones, and he was left bald on both sides. In Taanit (5b) he blesses Rav Nachman with the parable of the tree: "With what shall I bless you? ...May all the saplings planted from you be like you".'),
      TS('רבי יצחק נפחא היה תלמידו של רבי יוחנן, והיה מן ה"נחותי" – החכמים שהלכו ושבו בין ארץ ישראל לבבל והעבירו את תורת ארץ ישראל לבבל ולהפך.', 'Rabbi Yitzhak Nafcha was Rabbi Yochanan’s student, and was one of the "Nechutei" – the sages who went back and forth between the Land of Israel and Bavel and carried the Torah of each to the other.'),
    ],
  }),
  A({
    slug: 'rabbi-elazar-ben-pedat', spot2: 'רבי אלעזר בן פדת', roles: [GEN2, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי אלעזר בן פדת', 'Rabbi Elazar ben Pedat'),
    summary: L('הכהן שעלה מבבל, "מרא דארעא דישראל", שעמד בראש ישיבת טבריה אחרי רבי יוחנן.', 'The Kohen who came up from Bavel, "master of the Land of Israel", who headed the Yeshivah of Tiberias after Rabbi Yochanan.'),
    rel: [to('teacher', 'rabbi-chanina-bar-chama'), to('teacher', 'rabbi-yose-ben-zimra'), to('teacher', 'rabbi-yochanan')],
    offices: [HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', 4039, null, ['rabbi-yochanan'], ['rabbi-ami'])],
    sources: [L('תענית כה ע״א', 'Taanit 25a'), L('ברכות ה ע״ב', 'Berachot 5b'), L('גיטין יט ע״ב', 'Gittin 19b'), TTA],
    sections: [
      sec('רבי אלעזר', 'רבי אלעזר בן פדת, שנקרא בגמרא בפשטות "רבי אלעזר", היה כהן שעלה מבבל, ונקרא "מרא דארעא דישראל" (גיטין יט ע״ב). הוא היה עני מאוד; הגמרא (תענית כה ע״א) מספרת שלא היה לו מה לאכול, ובחלומו אמר לו הקב״ה: "ניחא לך דאפכיה לעלמא מרישא? אפשר דמתילדת בשעתא דמזוני". כשחלה, ביקר אותו רבי יוחנן, ובכו שניהם על היופי שבלה בעפר (ברכות ה ע״ב).', 'Rabbi Elazar', 'Rabbi Elazar ben Pedat, called in the Gemara simply "Rabbi Elazar", was a Kohen who came up from Bavel, and was called "master of the Land of Israel" (Gittin 19b). He was very poor; the Gemara (Taanit 25a) relates that he had nothing to eat, and in his dream G-d told him: "Would you have Me turn the world back to its beginning? Perhaps you would be born at an hour of sustenance". When he fell ill, Rabbi Yochanan visited him, and both wept over beauty that wastes in the dust (Berachot 5b).'),
      TS('רבותיו היו רבי חנינא בר חמא, רבי יוסי בן זמרא ורבי יוחנן, ואחרי פטירת רבי יוחנן בשנת 4039 עמד במקומו בראש ישיבת טבריה.', 'His teachers were Rabbi Chanina bar Chama, Rabbi Yose ben Zimra and Rabbi Yochanan, and after Rabbi Yochanan’s death in 4039 he headed the Yeshivah of Tiberias in his place.'),
    ],
  }),
  A({
    slug: 'zeiri', spot2: 'זעירי', roles: [GEN2],
    name: L('זעירי', 'Ze’iri'), summary: L('חכם בבלי שעלה לארץ ישראל ולמד מרבי חנינא ורבי יוחנן.', 'A Babylonian sage who went up to the Land of Israel and learned from Rabbi Chanina and Rabbi Yochanan.'),
    rel: [to('teacher', 'rabbi-chanina-bar-chama'), to('teacher', 'rabbi-yochanan')], sources: [L('קידושין נב ע״ב', 'Kiddushin 52b'), TTA],
    sections: [
      sec('זעירי', 'זעירי עלה מבבל לארץ ישראל. הגמרא (קידושין נב ע״ב) מספרת שרבי יוחנן הציע לו את בתו לאשה, וזעירי לא רצה, משום שהיה עתיד לחזור לבבל.', 'Ze’iri', 'Ze’iri went up from Bavel to the Land of Israel. The Gemara (Kiddushin 52b) relates that Rabbi Yochanan offered him his daughter in marriage, and Ze’iri did not want to, since he was going to return to Bavel.'),
      TS('רבותיו היו רבי חנינא בר חמא ורבי יוחנן.', 'His teachers were Rabbi Chanina bar Chama and Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rabbi-yehuda-bar-nachmani', spot2: 'רבי יהודה בר נחמני', roles: [GEN2, L('מתורגמן', 'Interpreter (meturgeman)')],
    name: L('רבי יהודה בר נחמני', 'Rabbi Yehudah bar Nachmani'),
    summary: L('המתורגמן של ריש לקיש.', 'Reish Lakish’s interpreter.'),
    rel: [to('teacher', 'reish-lakish')], sources: [L('כתובות ח ע״ב', 'Ketubot 8b'), L('גיטין ס ע״ב', 'Gittin 60b')],
    sections: [
      sec('מתורגמניה דריש לקיש', 'רבי יהודה בר נחמני היה המתורגמן של ריש לקיש – זה שהשמיע את דבריו בקול לציבור. הגמרא (כתובות ח ע״ב) מביאה את דברי הנחמה שאמר בבית אבל, ובגיטין (ס ע״ב) הוא דורש: "דברים שבכתב אי אתה רשאי לאומרן בעל פה".', 'Reish Lakish’s Interpreter', 'Rabbi Yehudah bar Nachmani was Reish Lakish’s meturgeman – the one who called out his words aloud to the public. The Gemara (Ketubot 8b) brings the words of comfort he said in a house of mourning, and in Gittin (60b) he expounds: "words that are written you may not say by heart".'),
      TS('הוא היה תלמידו של ריש לקיש, ושימש לו מתורגמן.', 'He was Reish Lakish’s student, and served as his interpreter.'),
    ],
  }),
  // ── Sura ──
  A({
    slug: 'rav-kahana-2', spot2: 'רב כהנא ב׳', roles: [GEN2],
    name: L('רב כהנא ב׳', 'Rav Kahana II'),
    summary: L('תלמיד רב ושמואל, שעלה לארץ ישראל וישב לפני רבי יוחנן.', 'Student of Rav and Shmuel, who went up to the Land of Israel and sat before Rabbi Yochanan.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('teacher', 'shmuel'), to('teacher', 'rabbi-yochanan')], sources: [L('בבא קמא קיז ע״א', 'Bava Kamma 117a'), L('ברכות סב ע״א', 'Berachot 62a')],
    sections: [
      sec('רב כהנא ורבי יוחנן', 'רב כהנא היה מתלמידי רב, ומסופר שנכנס פעם מתחת למיטתו כדי ללמוד ממנו דרך ארץ, ואמר "תורה היא וללמוד אני צריך" (ברכות סב ע״א). אחרי שהרג מוסר שעמד למסור ממון של יהודי, אמר לו רב: "עלה לארץ ישראל" (בבא קמא קיז ע״א). שם ישב בשורה הראשונה לפני רבי יוחנן, ובתחילה לא אמר דבר, ורבי יוחנן חשב שהוא לועג לו.', 'Rav Kahana and Rabbi Yochanan', 'Rav Kahana was one of Rav’s students, and it is told that he once went under his bed to learn proper conduct from him, saying "it is Torah, and I need to learn" (Berachot 62a). After he killed an informer who was about to hand over a Jew’s money, Rav told him: "Go up to the Land of Israel" (Bava Kamma 117a). There he sat in the first row before Rabbi Yochanan, at first saying nothing, and Rabbi Yochanan thought he was mocking him.'),
      TS('רבותיו היו רב, שמואל ורבי יוחנן.', 'His teachers were Rav, Shmuel and Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rav-huna', spot2: 'רב הונא (ראש ישיבת סורא)', roles: [GEN2, KOLELET, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רב הונא', 'Rav Huna'),
    summary: L('גדול תלמידי רב, שעמד אחריו בראש ישיבת סורא ארבעים שנה, עם שמונה מאות תלמידים.', 'The greatest of Rav’s students, who headed the Sura yeshivah after him for forty years, with eight hundred students.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('teacher', 'shmuel'), to('teacher', 'rabbi-yochanan'), to('spouse', 'chova')],
    offices: [HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', 4010, 4050, ['rav-abba-arikha'], ['rav-chisda'])],
    sources: [IRSG, L('תענית כ ע״ב', 'Taanit 20b'), L('כתובות קו ע״א', 'Ketubot 106a'), L('מועד קטן כה ע״א', 'Moed Katan 25a')],
    sections: [
      sec('רב הונא', 'רב הונא היה גדול תלמידיו של רב, ואחרי פטירתו עמד בראש ישיבת סורא, וכשהיו תלמידיו עומדים ומנערים את בגדיהם בצאתם מן השיעור, היה האבק מכסה את השמש (כתובות קו ע״א). בתחילה היה עני, ואחר כך התעשר; כשהיה בא לאכול, היה פותח את פתחו ואומר: "כל מאן דצריך – ייתי וליכול" (תענית כ ע״ב). כשנפטר העלו את ארונו לארץ ישראל.', 'Rav Huna', 'Rav Huna was the greatest of Rav’s students, and after his death headed the Sura yeshivah, and when his students stood and shook out their clothes as they left the lesson, the dust covered the sun (Ketubot 106a). At first he was poor, and later grew rich; when he sat down to eat, he would open his door and say: "Whoever is in need, let him come and eat" (Taanit 20b). When he died his coffin was brought up to the Land of Israel.'),
      TS('רב הונא היה ראש המתיבתא הכוללת. רבותיו היו רב, שאחריו עמד בראש ישיבת סורא, ושמואל ורבי יוחנן; שלשתם מרבותיו גם בשלשלת הקבלה שמונה הרמב״ם. אשתו הייתה חובה.', 'Rav Huna was Rosh HaMetivta HaKolelet. His teachers were Rav, whom he succeeded at the head of the Sura yeshivah, and Shmuel and Rabbi Yochanan; all three are his teachers also in the chain of tradition listed by the Rambam. His wife was Chova.'),
    ],
  }),
  F({
    slug: 'chova', spot2: 'חובה', name: L('חובה (אשת רב הונא)', 'Chova, wife of Rav Huna'),
    summary: L('אשתו של רב הונא, אם רבה בר רב הונא.', 'Rav Huna’s wife, mother of Rabba bar Rav Huna.'),
    rel: [to('spouse', 'rav-huna')], sources: [L('יבמות סד ע״ב', 'Yevamot 64b')],
    sections: one('חובה', 'חובה הייתה אשתו של רב הונא, ואמו של בנם רבה בר רב הונא, שעמד לימים בראש ישיבת סורא. היא נזכרת בגמרא (יבמות סד ע״ב) בדיון על נשים שבעליהן מתו.', 'Chova', 'Chova was Rav Huna’s wife, and the mother of their son Rabba bar Rav Huna, who later headed the Sura yeshivah. She is mentioned in the Gemara (Yevamot 64b).'),
  }),
  A({
    slug: 'rav-ada-bar-ahava', spot2: 'רב אדא בר אהבה', roles: [GEN2],
    name: L('רב אדא בר אהבה', 'Rav Ada bar Ahava'),
    summary: L('תלמיד רב, שנולד ביום שנפטר רבי; "במה הארכת ימים?".', 'Rav’s student, born on the day Rebbi died; "By what merit did you live long?".'),
    rel: [to('teacher', 'rav-abba-arikha')], sources: [L('קידושין עב ע״ב', 'Kiddushin 72b'), L('תענית כ ע״ב', 'Taanit 20b')],
    sections: [
      sec('במה הארכת ימים', 'רב אדא בר אהבה נולד ביום שנפטר רבי (קידושין עב ע״ב). תלמידיו שאלו אותו במה האריך ימים, ואמר: "מימי לא הקפדתי בתוך ביתי, ולא צעדתי בפני מי שגדול ממני, ולא הרהרתי בדברי תורה במבואות המטונפות, ולא הלכתי ארבע אמות בלא תורה ובלא תפילין, ולא ישנתי בבית המדרש... ולא שמחתי בתקלת חברי" (תענית כ ע״ב).', 'By What Merit Did You Live Long', 'Rav Ada bar Ahava was born on the day Rebbi died (Kiddushin 72b). His students asked him by what merit he lived long, and he said: "I was never strict within my house, I never walked ahead of one greater than me, I never thought words of Torah in filthy alleys, I never walked four cubits without Torah and tefillin, I never slept in the study hall... and I never rejoiced at my fellow’s downfall" (Taanit 20b).'),
      TS('הוא היה תלמידו של רב.', 'He was Rav’s student.'),
    ],
  }),
  A({
    slug: 'rav-chanan-bar-rava', spot2: 'רב חנן בר רבא', roles: [GEN2],
    name: L('רב חנן בר רבא', 'Rav Chanan bar Rava'),
    summary: L('תלמידו וחתנו של רב.', 'Rav’s student and son-in-law.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('spouse', 'eshet-rav-chanan')], sources: [TTA],
    sections: [TS('רב חנן בר רבא היה תלמידו של רב, ונשא את בתו.', 'Rav Chanan bar Rava was Rav’s student, and married his daughter.')],
  }),
  F({
    slug: 'eshet-rav-chanan', spot2: 'אשת רב חנן', name: L('אשת רב חנן', 'Daughter of Rav – wife of Rav Chanan'),
    summary: L('בתו של רב, אשת רב חנן בר רבא.', 'Rav’s daughter, wife of Rav Chanan bar Rava.'),
    rel: [to('father', 'rav-abba-arikha'), to('spouse', 'rav-chanan-bar-rava')], sources: [TTA],
    sections: one('בת רב', 'בתו של רב נישאה לתלמידו רב חנן בר רבא. שמה לא נשמר, ובאילן היא כתובה בשם "אשת רב חנן".', 'Rav’s Daughter', 'Rav’s daughter married his student Rav Chanan bar Rava. Her name has not been kept, and on our tree she is written as "the wife of Rav Chanan".'),
  }),
  // ── Nehardea, Pumbedita and Mechoza ──
  A({
    slug: 'nachmani', spot2: 'נחמני', roles: [GEN2],
    name: L('נחמני', 'Nachmani'), summary: L('אביהם של רבה ושל כייליל, סבו של אביי.', 'Father of Rabba and of Kaylil, Abaye’s grandfather.'),
    rel: [], sources: [L('גיטין לד ע״ב', 'Gittin 34b'), TTA],
    sections: one('נחמני', 'נחמני ידוע כאביו של רבה בר נחמני, ראש ישיבת פומבדיתא, וסבו של אביי, שגדל בבית דודו רבה. באילן שלנו גם רב אושעיא ורב חנינא הם בניו, בסימן שאלה. לפי הגמרא (גיטין לד ע״ב) שמו האמיתי של אביי היה נחמני, על שם סבו.', 'Nachmani', 'Nachmani is known as the father of Rabba bar Nachmani, head of the Pumbedita yeshivah, and the grandfather of Abaye, who grew up in the home of his uncle Rabba. On our tree Rav Oshaya and Rav Chanina are also his sons, with a question mark. According to the Gemara (Gittin 34b) Abaye’s real name was Nachmani, after his grandfather.'),
  }),
  A({
    slug: 'rav-eina', spot2: 'רב עינא', roles: [GEN2],
    name: L('רב עינא', 'Rav Eina'), summary: L('חברו לתורה של רב יהודה.', 'Rav Yehudah’s study partner.'),
    rel: [to('plugta', 'rav-yehuda')], sources: [L('חולין קלג ע״א', 'Chullin 133a'), TTA],
    sections: [TS('רב עינא היה חברו לתורה של רב יהודה, מייסד ישיבת פומבדיתא.', 'Rav Eina was the study partner of Rav Yehudah, founder of the Pumbedita yeshivah.')],
  }),
  A({
    slug: 'rav-yehuda', spot2: 'רב יהודה בר יחזקאל', roles: [GEN2, KOLELET, L('מייסד ישיבת פומבדיתא', 'Founder of the Pumbedita yeshivah')],
    name: L('רב יהודה בר יחזקאל', 'Rav Yehudah bar Yechezkel'),
    summary: L('תלמיד רב ושמואל, שייסד את ישיבת פומבדיתא.', 'Student of Rav and Shmuel, who founded the Pumbedita yeshivah.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('teacher', 'shmuel'), to('father', 'rav-yechezkel'), to('plugta', 'rav-eina')],
    offices: [HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', 4010, 4060, [], ['rav-huna-bar-chiya'])],
    sources: [IRSG, L('ברכות כ ע״א', 'Berachot 20a'), L('קידושין עב ע״ב', 'Kiddushin 72b'), L('ברכות כד ע״ב', 'Berachot 24b')],
    sections: [
      sec('ישיבת פומבדיתא', 'רב יהודה, שנקרא בגמרא בפשטות "רב יהודה", ייסד את ישיבת פומבדיתא בשנת 4010, ובכך פתח את מסורתה, שנמשכה כשמונה מאות שנה. דבריו בשם רבותיו – "אמר רב יהודה אמר רב" ו"אמר רב יהודה אמר שמואל" – ממלאים את התלמוד. הגמרא (ברכות כ ע״א) אומרת: "בשני דרב יהודה כולי תנויי בנזיקין הוה" – כל לימודם היה בסדר נזיקין, ובכל זאת כשהיה שולף את נעלו לתעניות היו יורדים גשמים.', 'The Pumbedita Yeshivah', 'Rav Yehudah, called in the Gemara simply "Rav Yehudah", founded the Pumbedita yeshivah in 4010, opening its tradition, which lasted about eight hundred years. His words in the name of his teachers – "Rav Yehudah said in the name of Rav" and "Rav Yehudah said in the name of Shmuel" – fill the Talmud. The Gemara (Berachot 20a) says that in Rav Yehudah’s years all their learning was in the order of Nezikin, and yet when he took off his shoe for a fast-day, rain would fall.'),
      TS('רב יהודה היה ראש המתיבתא הכוללת. רבותיו היו רב ושמואל, וחברו לתורה היה רב עינא. אביו היה רב יחזקאל, ואחיו רמי בר יחזקאל.', 'Rav Yehudah was Rosh HaMetivta HaKolelet. His teachers were Rav and Shmuel, and his study partner was Rav Eina. His father was Rav Yechezkel, and his brother Rami bar Yechezkel.'),
    ],
  }),
  A({
    slug: 'rami-bar-yechezkel', spot2: 'רמי בר יחזקאל', roles: [GEN2],
    name: L('רמי בר יחזקאל', 'Rami bar Yechezkel'), summary: L('אחיו של רב יהודה, שראה את בני ברק זבת חלב ודבש.', 'Rav Yehudah’s brother, who saw Bnei Brak flowing with milk and honey.'),
    rel: [to('father', 'rav-yechezkel'), to('sibling', 'rav-yehuda')], sources: [L('כתובות קיא ע״ב', 'Ketubot 111b')],
    sections: one('זבת חלב ודבש', 'הגמרא (כתובות קיא ע״ב) מספרת שרמי בר יחזקאל הגיע לבני ברק, וראה עזים אוכלות תחת תאנים, ודבש נוטף מן התאנים וחלב מטפטף מן העזים, ומתערבים זה בזה – ואמר: "היינו זבת חלב ודבש".', 'Flowing with Milk and Honey', 'The Gemara (Ketubot 111b) relates that Rami bar Yechezkel came to Bnei Brak, and saw goats eating under fig trees, honey dripping from the figs and milk from the goats, and mixing together – and said: "This is flowing with milk and honey".'),
  }),
  F({
    slug: 'rachel-bat-shmuel', spot2: 'רחל (אם רב מרי)', name: L('רחל (בת שמואל)', 'Rachel, daughter of Shmuel'),
    summary: L('בתו של שמואל שנשבתה, ואם רב מרי בר רחל.', 'Shmuel’s daughter who was taken captive, and the mother of Rav Mari bar Rachel.'),
    rel: [to('father', 'shmuel')], sources: [L('יבמות מה ע״ב', 'Yevamot 45b'), L('כתובות כג ע״א', 'Ketubot 23a')],
    sections: one('רחל', 'הגמרא (כתובות כג ע״א) מספרת על בנותיו של שמואל שנשבו והועלו לארץ ישראל. רחל, בתו של שמואל, נישאה לאיסור הגר, וילדה את רב מרי בר רחל, שנולד לפני שאביו התגייר ולכן נקרא על שם אמו (יבמות מה ע״ב).', 'Rachel', 'The Gemara (Ketubot 23a) tells of Shmuel’s daughters who were taken captive and brought up to the Land of Israel. Rachel, Shmuel’s daughter, married Issur the convert, and bore Rav Mari bar Rachel, who was conceived before his father converted and so was called after his mother (Yevamot 45b).'),
  }),
  A({
    slug: 'rav-anan', spot2: 'רב ענן בר תחליפא', roles: [GEN2],
    name: L('רב ענן בר תחליפא', 'Rav Anan'),
    summary: L('תלמיד שמואל, שאליהו הנביא לימד אותו את "תנא דבי אליהו".', 'Shmuel’s student, whom Eliyahu the prophet taught "Tanna DeVei Eliyahu".'),
    rel: [to('teacher', 'shmuel')], sources: [L('כתובות קו ע״א', 'Ketubot 106a')],
    sections: [
      sec('סדר אליהו', 'הגמרא (כתובות קו ע״א) מספרת שאליהו הנביא היה רגיל אצל רב ענן, ולימד אותו את "סדר אליהו רבה" ו"סדר אליהו זוטא" – הספר שנקרא "תנא דבי אליהו". כשרב ענן נכשל בעניין של דין, נסתלק ממנו אליהו, והוא ישב בתענית וביקש רחמים עד שחזר.', 'Seder Eliyahu', 'The Gemara (Ketubot 106a) relates that Eliyahu the prophet used to visit Rav Anan, and taught him "Seder Eliyahu Rabba" and "Seder Eliyahu Zuta" – the book called "Tanna DeVei Eliyahu". When Rav Anan stumbled in a matter of judgement, Eliyahu stayed away from him, and he fasted and prayed until he returned.'),
      TS('הוא היה תלמידו של שמואל.', 'He was Shmuel’s student.'),
    ],
  }),
  A({
    slug: 'rav-nachman', spot2: 'רב נחמן בר יעקב', roles: [GEN2, L('ראש ישיבת נהרדעא', 'Head of the Nehardea yeshivah'), L('דיין', 'Judge')],
    name: L('רב נחמן בר יעקב', 'Rav Nachman bar Yaakov'),
    summary: L('תלמיד שמואל ודיינו של ראש הגולה, שההלכה כמותו בדינים.', 'Shmuel’s student and the Exilarch’s judge, whom the law follows in money matters.'),
    rel: [to('teacher', 'shmuel'), to('teacher', 'rabba-bar-avuha'), to('spouse', 'yalta'), to('plugta', 'rav-sheshet')],
    offices: [
      HEAD('ראש ישיבת נהרדעא', 'Head of the Nehardea yeshivah', 4010, 4018, ['shmuel'], []),
      HEAD('מרביץ תורה במחוזא', 'Teacher of Torah in Mechoza', 4018, 4079, [], []),
    ],
    sources: [IRSG, L('ברכות נא ע״ב', 'Berachot 51b'), L('כתובות יג ע״א', 'Ketubot 13a'), L('תענית ה ע״ב', 'Taanit 5b')],
    sections: [
      sec('רב נחמן', 'רב נחמן, שנקרא בגמרא בפשטות "רב נחמן", היה דיינו של ראש הגולה, ונקבע: "הלכתא כרב נחמן בדיני". אחרי פטירת שמואל עמד בראש נהרדעא, וכשנחרבה נהרדעא בידי פפא בן נצר בשנת 4018 עבר למחוזא והרביץ שם תורה. אשתו ילתא הייתה ממשפחת ראשי הגולה.', 'Rav Nachman', 'Rav Nachman, called in the Gemara simply "Rav Nachman", was the Exilarch’s judge, and the rule was set: "the law follows Rav Nachman in money matters". After Shmuel’s death he headed Nehardea, and when Nehardea was destroyed by Papa ben Natzar in 4018 he moved to Mechoza and taught Torah there. His wife Yalta was of the family of the Heads of the Exile.'),
      TS('רבותיו היו שמואל, שאחריו עמד בראש נהרדעא, ורבה בר אבוה. בר פלוגתיה היה רב ששת.', 'His teachers were Shmuel, whom he succeeded at the head of Nehardea, and Rabba bar Avuha. His sparring partner was Rav Sheshet.'),
    ],
  }),
  // ── the family of the Heads of the Exile ──
  F({
    slug: 'yalta', spot2: 'ילתא', name: L('ילתא', 'Yalta'),
    summary: L('אשת רב נחמן, ממשפחת ראשי הגולה, ששברה ארבע מאות כדי יין.', 'Rav Nachman’s wife, of the family of the Heads of the Exile, who broke four hundred jars of wine.'),
    rel: [to('spouse', 'rav-nachman'), { ...to('ancestor', 'nechemya-rosh-hagola'), uncertain: true }], sources: [L('ברכות נא ע״ב', 'Berachot 51b'), L('חולין קט ע״ב', 'Chullin 109b')],
    sections: [
      sec('ילתא', 'ילתא, אשתו של רב נחמן, הייתה ממשפחת ראשי הגולה. כשעולא, האורח, לא שלח לה מכוס של ברכה, קמה בכעס ושברה ארבע מאות כדי יין (ברכות נא ע״ב). היא גם אמרה: "כל דאסר לן רחמנא – שרא לן כוותיה" – לכל דבר שאסרה התורה התירה דבר דומה (חולין קט ע״ב).', 'Yalta', 'Yalta, Rav Nachman’s wife, was of the family of the Heads of the Exile. When Ulla, the guest, did not send her from the cup of blessing, she rose in anger and broke four hundred jars of wine (Berachot 51b). She also said: "for everything the Torah forbade us, it permitted us something like it" (Chullin 109b).'),
      sec('סימן השאלה', 'באילן שלנו היא מצאצאי נחמיה ראש הגולה בסימן שאלה, משום שלא ידוע בוודאות בתו של מי הייתה.', 'The Question Mark', 'On our tree she is a descendant of Nechemyah, Head of the Exile, with a question mark, since it is not known for certain whose daughter she was.'),
    ],
  }),
  A({
    slug: 'rabba-bar-avuha', spot2: 'רבה בר אבוה', roles: [GEN2],
    name: L('רבה בר אבוה', 'Rabba bar Avuha'),
    summary: L('ממשפחת ראשי הגולה, תלמיד רב ורבו של רב נחמן, שפגש את אליהו.', 'Of the family of the Heads of the Exile, Rav’s student and Rav Nachman’s teacher, who met Eliyahu.'),
    rel: [to('teacher', 'rav-abba-arikha')], sources: [L('בבא מציעא קיד ע״א – ע״ב', 'Bava Metzia 114a–b'), TTA],
    sections: [
      sec('רבה בר אבוה ואליהו', 'הגמרא (בבא מציעא קיד ע״א – ע״ב) מספרת שרבה בר אבוה מצא את אליהו הנביא עומד בבית קברות של גויים, והכניס אותו אליהו לגן עדן, ואמר לו: "פשוט גלימך, שקול מהני טרפי" – ולקח עלים, ושמע קול "מי מבלה עולמו כרבה בר אבוה?".', 'Rabba bar Avuha and Eliyahu', 'The Gemara (Bava Metzia 114a–b) relates that Rabba bar Avuha found Eliyahu the prophet standing in a cemetery of gentiles, and Eliyahu brought him into Gan Eden and told him: "spread out your cloak and take of these leaves" – and he took leaves, and heard a voice: "who uses up his world like Rabba bar Avuha?".'),
      TS('הוא היה ממשפחת ראשי הגולה ותלמידו של רב, ורב נחמן היה תלמידו.', 'He was of the family of the Heads of the Exile and Rav’s student, and Rav Nachman was his student.'),
    ],
  }),
  A({
    slug: 'mar-ukva-1', spot2: 'עוקבא א׳ "מר עוקבא"', roles: [GEN2, L('ראש הגולה', 'Head of the Exile'), L('אב בית דין', 'Av Beit Din')],
    name: L('מר עוקבא (עוקבא א׳)', 'Mar Ukva'),
    summary: L('ראש הגולה ואב בית הדין, תלמיד שמואל, שנתן צדקה בסתר.', 'Head of the Exile and Av Beit Din, Shmuel’s student, who gave charity in secret.'),
    rel: [to('teacher', 'shmuel'), to('father', 'nechemya-rosh-hagola')],
    offices: [{ label: L('ראש הגולה', 'Head of the Exile'), from: 4000, to: 4030, before: ['nechemya-rosh-hagola'], after: ['mar-ukvan-detzutzita'] }],
    sources: [SOZ, L('כתובות סז ע״ב', 'Ketubot 67b'), L('שבת נה ע״א', 'Shabbat 55a'), L('חולין קה ע״א', 'Chullin 105a')],
    sections: [
      sec('צדקה בסתר', 'מר עוקבא היה נותן לעני אחד ארבעה זוזים בכל יום, מכניס אותם לחור שבדלת. פעם אחת רצה העני לדעת מי עושה לו את החסד, ומר עוקבא ואשתו ברחו וקפצו לתוך תנור לוהט, כדי שלא יתבייש – "נוח לו לאדם שיפיל עצמו לכבשן האש ואל ילבין פני חברו ברבים" (כתובות סז ע״ב). הוא אמר: "אנא להא מילתא – חלא בר חמרא לגבי אבא" – אביו היה ממתין בין בשר לחלב עשרים וארבע שעות, והוא רק מסעודה לסעודה (חולין קה ע״א).', 'Charity in Secret', 'Mar Ukva would give a poor man four zuz every day, pushing them through a hole in his door. Once the poor man wanted to know who did him this kindness, and Mar Ukva and his wife fled and jumped into a hot oven, so that he would not be shamed – "better for a person to throw himself into a fiery furnace than to shame his fellow in public" (Ketubot 67b). He said: "In this matter I am vinegar son of wine compared to my father" – his father waited twenty-four hours between meat and milk, and he only from one meal to the next (Chullin 105a).'),
      TS('מר עוקבא היה ראש הגולה ואב בית הדין, ותלמידו של שמואל. הוא בנו של נחמיה ראש הגולה ובא אחריו בתפקיד, ואחריו עמד בראש הגולה מר עוקבן דצוציתא.', 'Mar Ukva was Head of the Exile and Av Beit Din, and Shmuel’s student. He was the son of Nechemyah, Head of the Exile, and followed him in the office; after him Mar Ukvan of Tzutzita headed the Exile.'),
    ],
  }),
];
