// From the Judges to the start of David's reign. Same shape as egypt.js.
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const LV = ['levites'];

module.exports = [
  // ── the judges' families ──
  p({
    slug: 'gera', name: L('גרא', 'Gera'), spot: 'גרא',
    summary: L('אבי אהוד השופט, משבט בנימין.', 'Father of Ehud the judge, of the tribe of Binyamin.'),
    rel: [to('child', 'ehud-ben-gera')], sources: [L('שופטים ג, טו', 'Judges 3:15')],
    sections: one('גרא', 'גרא נזכר כאביו של אהוד, "איש אטר יד ימינו", שהושיע את ישראל מעגלון מלך מואב.', 'Gera', 'Gera is mentioned as the father of Ehud, "a left-handed man", who saved Israel from Eglon king of Moav.'),
  }),
  p({
    slug: 'anat', name: L('ענת', 'Anat'), spot: 'ענת',
    summary: L('אבי שמגר השופט.', 'Father of Shamgar the judge.'),
    rel: [to('child', 'shamgar-ben-anat')], sources: [L('שופטים ג, לא; ה, ו', 'Judges 3:31; 5:6')],
    sections: one('ענת', 'ענת נזכר רק כאביו של שמגר, שהכה שש מאות פלשתים במלמד הבקר. באילן שלנו נכתב ליד שמגר שידוע שהיה כהן, אבל לא ידוע מאיזו משפחה.', 'Anat', 'Anat is mentioned only as the father of Shamgar, who struck down six hundred Philistines with an ox-goad. On our tree it is noted beside Shamgar that he is known to have been a Kohen, but his family is not known.'),
  }),
  p({
    slug: 'barak', name: L('ברק בן אבינועם', 'Barak son of Avinoam'), spot: 'ברק',
    roles: [L('שופט', 'Judge')],
    summary: L('השופט משבט נפתלי שנלחם בסיסרא עם דבורה הנביאה.', 'The judge from Naftali who fought Sisera with Devorah the prophetess.'),
    rel: [to('father', 'avinoam'), to('spouse', 'devorah-haneviah'), to('related', 'shevet-naftali')],
    sources: [L('שופטים ד – ה', 'Judges 4–5'), L('מגילה יד ע״א (רש״י)', 'Megillah 14a (Rashi)'), L('תנא דבי אליהו רבה ט', 'Tanna DeVei Eliyahu Rabbah 9')],
    sections: [
      sec('הר תבור', 'דבורה קראה לברק מקדש נפתלי ואמרה לו לצאת עם עשרת אלפים איש להר תבור. ברק השיב "אם תלכי עמי והלכתי", והם ניצחו את צבא סיסרא בנחל קישון. ברק נמנה בין השופטים.', 'Mount Tavor', 'Devorah called Barak from Kedesh-Naftali and told him to go out with ten thousand men to Mount Tavor. Barak answered "If you go with me, I will go", and they defeated Sisera’s army at the brook of Kishon. Barak is counted among the judges.'),
      sec('ברק הוא לפידות', 'דבורה נקראת "אשת לפידות". חז״ל אומרים שלפידות הוא ברק, שנקרא כך כי דבורה הכינה פתילות (לפידים) למשכן שבשילה, ופניו היו מאירות כברק. לכן באילן שלנו ברק מחובר לדבורה כבעלה.', 'Barak Is Lapidot', 'Devorah is called "the wife of Lapidot". Chazal say that Lapidot is Barak, so called because Devorah prepared wicks (lapidim) for the Mishkan at Shiloh, and his face shone like lightning (barak). That is why on our tree Barak is joined to Devorah as her husband.'),
    ],
  }),
  p({
    slug: 'avinoam', name: L('אבינועם', 'Avinoam'), spot: 'אבינועם',
    summary: L('אבי ברק, משבט נפתלי.', 'Father of Barak, of the tribe of Naftali.'),
    rel: [to('child', 'barak')], sources: [L('שופטים ד, ו', 'Judges 4:6')],
    sections: one('אבינועם', 'אבינועם נזכר כאביו של ברק מקדש נפתלי.', 'Avinoam', 'Avinoam is mentioned as the father of Barak of Kedesh-Naftali.'),
  }),
  p({
    slug: 'yoash-haaviezri', name: L('יואש האביעזרי', 'Yoash the Aviezrite'), spot: 'יואש אבי גדעון',
    summary: L('אבי גדעון, שאמר "הבעל אם אלהים הוא ירב לו".', 'Gideon’s father, who said "If Baal is a god, let him contend for himself".'),
    rel: [to('child', 'gideon')], sources: [L('שופטים ו, יא – לב', 'Judges 6:11–32')],
    sections: one('ירב לו הבעל', 'גדעון הרס את מזבח הבעל של אביו, ואנשי העיר דרשו להמיתו. יואש עמד לצד בנו ואמר "הבעל אם אלהים הוא ירב לו, כי נתץ את מזבחו", ומכאן נקרא גדעון "ירובעל".', 'Let Baal Contend', 'Gideon tore down his father’s altar of Baal, and the men of the city demanded his death. Yoash stood by his son and said "If Baal is a god, let him contend for himself, because his altar has been torn down", and from this Gideon was called "Yerubaal".'),
  }),
  p({
    slug: 'yotam-ben-gideon', name: L('יותם בן גדעון', 'Yotam son of Gideon'), spot: 'יותם בן גדעון',
    summary: L('בנו הצעיר של גדעון, שנשא את משל העצים מהר גריזים.', 'Gideon’s youngest son, who spoke the parable of the trees from Mount Gerizim.'),
    rel: [to('father', 'gideon'), to('sibling', 'avimelech')], sources: [L('שופטים ט', 'Judges 9')],
    sections: one('משל העצים', 'כשאבימלך הרג את שבעים אחיו, ניצל רק יותם הצעיר. הוא עמד בראש הר גריזים ונשא את משל העצים שבקשו למלוך עליהם: הזית, התאנה והגפן סירבו, ורק האטד הסכים – משל לאבימלך. דבריו התקיימו כשאבימלך ובעלי שכם השמידו זה את זה.', 'The Parable of the Trees', 'When Avimelech killed his seventy brothers, only the young Yotam escaped. He stood on the top of Mount Gerizim and told the parable of the trees who sought a king: the olive, the fig and the vine refused, and only the bramble agreed – a parable for Avimelech. His words came true when Avimelech and the men of Shechem destroyed each other.'),
  }),
  p({
    slug: 'puah', name: L('פואה בן דודו', 'Puah son of Dodo'), spot: 'פואה',
    summary: L('אבי תולע השופט, משבט יששכר.', 'Father of Tola the judge, of the tribe of Yissachar.'),
    rel: [to('child', 'tola-ben-puah')], sources: [L('שופטים י, א', 'Judges 10:1')],
    sections: one('פואה', 'פואה בן דודו משבט יששכר נזכר כאביו של תולע, ששפט את ישראל עשרים ושלוש שנה.', 'Puah', 'Puah son of Dodo of the tribe of Yissachar is mentioned as the father of Tola, who judged Israel twenty-three years.'),
  }),
  p({
    slug: 'hillel-hapiratoni', name: L('הלל הפרעתוני', 'Hillel the Piratonite'), spot: 'הלל אבי עבדון',
    summary: L('אבי עבדון השופט, משבט אפרים.', 'Father of Avdon the judge, of the tribe of Efraim.'),
    rel: [to('child', 'avdon-ben-hillel')], sources: [L('שופטים יב, יג – טו', 'Judges 12:13–15')],
    sections: one('הלל', 'הלל מפרעתון שבארץ אפרים נזכר כאביו של עבדון השופט, שהיו לו ארבעים בנים ושלושים בני בנים. יש להבחין בינו לבין הלל הזקן.', 'Hillel', 'Hillel of Piraton in the land of Efraim is mentioned as the father of Avdon the judge, who had forty sons and thirty grandsons. He should be distinguished from Hillel HaZaken.'),
  }),
  p({
    slug: 'manoach', name: L('מנוח', 'Manoach'), spot: 'מנוח',
    summary: L('אבי שמשון, משבט דן, שהמלאך בישר לו ולאשתו על הולדת בנם.', 'Shimshon’s father, of the tribe of Dan, to whom with his wife the angel announced their son’s birth.'),
    rel: [to('spouse', 'tzlelponit'), to('child', 'shimshon')], sources: [L('שופטים יג', 'Judges 13')],
    sections: one('מה שמך', 'המלאך נראה לאשת מנוח ובישר לה שתלד בן נזיר. מנוח התפלל שיחזור המלאך ויורה להם מה לעשות לנער, ושאל אותו "מי שמך", והמלאך השיב "למה זה תשאל לשמי והוא פלאי". כשעלה המלאך בלהב המזבח, אמר מנוח "מות נמות כי אלהים ראינו".', 'What Is Your Name', 'The angel appeared to Manoach’s wife and told her she would bear a son who would be a Nazirite. Manoach prayed that the angel return and teach them what to do for the boy, and asked him "What is your name", and the angel answered "Why do you ask my name, seeing it is wondrous". When the angel went up in the altar’s flame, Manoach said "We shall surely die, for we have seen God".'),
  }),
  w({
    slug: 'tzlelponit', name: L('צללפונית', 'Tzlelponit'), spot: 'צללפונית',
    summary: L('אם שמשון, שהמלאך נגלה אליה.', 'Shimshon’s mother, to whom the angel appeared.'),
    rel: [to('spouse', 'manoach'), to('child', 'shimshon')], sources: [L('שופטים יג', 'Judges 13'), L('בבא בתרא צא ע״א', 'Bava Batra 91a')],
    sections: one('אשת מנוח', 'בתנ״ך היא נקראת רק "אשת מנוח". הגמרא (בבא בתרא צא ע״א) מוסרת את שמה: צללפונית. המלאך נגלה אליה פעמיים, וציווה שהבן יהיה נזיר מן הבטן.', 'Manoach’s Wife', 'In Tanach she is called only "Manoach’s wife". The Gemara (Bava Batra 91a) gives her name: Tzlelponit. The angel appeared to her twice, and commanded that the son be a Nazirite from the womb.'),
  }),
  w({
    slug: 'delila', name: L('דלילה', 'Delilah'), spot: 'דלילה',
    summary: L('האשה מנחל שורק שגילתה לפלשתים את סוד כוחו של שמשון.', 'The woman of the valley of Sorek who revealed the secret of Shimshon’s strength to the Philistines.'),
    rel: [to('spouse', 'shimshon')], sources: [L('שופטים טז, ד – כא', 'Judges 16:4–21'), L('סוטה ט ע״ב', 'Sotah 9b')],
    sections: one('סוד כוחו', 'סרני פלשתים הבטיחו לדלילה אלף ומאה כסף כל אחד אם תגלה במה כוחו של שמשון גדול. אחרי שלוש פעמים שהטעה אותה, גילה לה שמשון שכוחו בשערו, ובעודו ישן גילחו את ראשו ותפסו אותו. חז״ל אומרים ששמה רומז שדלדלה את כוחו (סוטה ט ע״ב).', 'The Secret of His Strength', 'The lords of the Philistines promised Delilah eleven hundred pieces of silver each if she discovered the source of Shimshon’s great strength. After he misled her three times, Shimshon told her that his strength was in his hair, and while he slept they shaved his head and seized him. Chazal say her name hints that she weakened (dildelah) his strength (Sotah 9b).'),
  }),
  p({
    slug: 'yehonatan-ben-gershom', cats: LV, name: L('יהונתן בן גרשם', 'Yehonatan son of Gershom'), spot: 'יהונתן בן גרשם',
    summary: L('נכד משה, שהיה כהן לפסל מיכה ולשבט דן, ולפי חז״ל חזר בתשובה.', 'Moshe’s grandson, who served as priest of Michah’s idol and of the tribe of Dan, and according to Chazal repented.'),
    rel: [to('father', 'gershom'), to('related', 'shevet-dan')],
    sources: [L('שופטים יז – יח', 'Judges 17–18'), L('בבא בתרא קט ע״ב – קי ע״א', 'Bava Batra 109b–110a')],
    sections: one('הנון התלויה', 'הלוי שהיה כהן לפסל מיכה, ואחר כך לשבט דן בליש, הוא "יהונתן בן גרשם בן מנשה". חז״ל אומרים שהוא נכדו של משה, ושהאות נ׳ נכתבה תלויה כדי שלא יתבזה משה. עוד אומרים שחזר בתשובה, נקרא "שבואל" – ששב לאל – ודוד מינה אותו על האוצרות (בבא בתרא קי ע״א).', 'The Suspended Nun', 'The Levite who was priest to Michah’s idol, and later to the tribe of Dan at Laish, is "Yehonatan son of Gershom son of Menashe". Chazal say he was Moshe’s grandson, and that the letter nun was written suspended so that Moshe would not be shamed. They also say he repented, was called "Shevuel" – who returned (shav) to God – and David appointed him over the treasuries (Bava Batra 110a).'),
  }),
  // ── Pinchas's line to Tzadok ──
  p({
    slug: 'zerachya', cats: LV, name: L('זרחיה בן עזי', 'Zerachyah son of Uzzi'), spot: 'זרחיה',
    summary: L('בשושלת הכהנים מפינחס עד צדוק.', 'In the line of the Kohanim from Pinchas to Tzadok.'),
    rel: [to('father', 'uzzi-ben-bukki'), to('child', 'merayot')], sources: [L('דברי הימים א׳ ה, לב', 'I Chronicles 5:32'), L('עזרא ז, ד', 'Ezra 7:4')],
    sections: one('זרחיה', 'זרחיה נמנה בדברי הימים ובספר עזרא בשושלת בית אלעזר, בימים שבהם הכהונה הגדולה הייתה בבית עלי.', 'Zerachyah', 'Zerachyah is counted in Divrei HaYamim and in the Book of Ezra in the line of the house of Elazar, in the days when the High Priesthood was in the house of Eli.'),
  }),
  p({
    slug: 'merayot', cats: LV, name: L('מריות בן זרחיה', 'Merayot son of Zerachyah'), spot: 'מריות',
    summary: L('בשושלת הכהנים מפינחס עד צדוק.', 'In the line of the Kohanim from Pinchas to Tzadok.'),
    rel: [to('father', 'zerachya'), to('child', 'amarya')], sources: [L('דברי הימים א׳ ה, לב – לג', 'I Chronicles 5:32–33'), L('עזרא ז, ג', 'Ezra 7:3')],
    sections: one('מריות', 'מריות נמנה בשושלת בית אלעזר בין זרחיה אביו ואמריה בנו.', 'Merayot', 'Merayot is counted in the line of the house of Elazar between his father Zerachyah and his son Amaryah.'),
  }),
  p({
    slug: 'amarya', cats: LV, name: L('אמריה בן מריות', 'Amaryah son of Merayot'), spot: 'אמריה',
    summary: L('בשושלת הכהנים מפינחס עד צדוק, סבו של צדוק.', 'In the line of the Kohanim from Pinchas to Tzadok, Tzadok’s grandfather.'),
    rel: [to('father', 'merayot'), to('child', 'achituv-ben-amarya')], sources: [L('דברי הימים א׳ ה, לג', 'I Chronicles 5:33')],
    sections: one('אמריה', 'אמריה בן מריות היה אבי אחיטוב וסבו של צדוק הכהן. יש להבחין בינו לבין אמריה המאוחר, מבית צדוק.', 'Amaryah', 'Amaryah son of Merayot was the father of Achituv and the grandfather of Tzadok the Kohen. He should be distinguished from the later Amaryah, of the house of Tzadok.'),
  }),
  p({
    slug: 'achituv-ben-amarya', cats: LV, name: L('אחיטוב בן אמריה', 'Achituv son of Amaryah'), spot: 'אחיטוב בן אמריה',
    summary: L('אבי צדוק הכהן.', 'Father of Tzadok the Kohen.'),
    rel: [to('father', 'amarya'), to('child', 'tzadok-hakohen')], sources: [L('שמואל ב׳ ח, יז', 'II Samuel 8:17'), L('דברי הימים א׳ ה, לג – לד', 'I Chronicles 5:33–34')],
    sections: one('אבי צדוק', 'אחיטוב בן אמריה היה אבי צדוק הכהן, מבית אלעזר. יש להבחין בינו לבין אחיטוב בן פינחס, נכדו של עלי מבית איתמר.', 'Father of Tzadok', 'Achituv son of Amaryah was the father of Tzadok the Kohen, of the house of Elazar. He should be distinguished from Achituv son of Pinchas, Eli’s grandson of the house of Itamar.'),
  }),
  // ── Eli's and Shmuel's sons ──
  p({
    slug: 'chofni', cats: LV, name: L('חפני בן עלי', 'Chofni son of Eli'), spot: 'חפני',
    summary: L('בנו של עלי הכהן, שמת בקרב אבן העזר כשנשבה הארון.', 'Son of Eli the Kohen, who died at the battle of Even HaEzer when the Ark was captured.'),
    rel: [to('father', 'eli-hakohen'), to('sibling', 'pinchas-ben-eli')], sources: [L('שמואל א׳ ב, יב – לו; ד', 'I Samuel 2:12–36; 4')],
    sections: one('בני עלי', 'חפני ופינחס, בני עלי, היו כהנים בשילה, ו"לא ידעו את ה׳": לקחו מן הקרבנות בחזקה. איש אלהים בא אל עלי וניבא ששני בניו ימותו ביום אחד. הם הוליכו את ארון ה׳ אל המלחמה באבן העזר, הארון נשבה ושניהם נהרגו.', 'The Sons of Eli', 'Chofni and Pinchas, Eli’s sons, were Kohanim at Shiloh, and "did not know Hashem": they took from the offerings by force. A man of God came to Eli and prophesied that his two sons would die on one day. They brought the Ark of Hashem to the battle at Even HaEzer; the Ark was captured and both were killed.'),
  }),
  p({
    slug: 'pinchas-ben-eli', cats: LV, name: L('פינחס בן עלי', 'Pinchas son of Eli'), spot: 'פינחס בן עלי',
    summary: L('בנו של עלי הכהן, אבי אחיטוב ואי־כבוד.', 'Son of Eli the Kohen, father of Achituv and I-Chavod.'),
    rel: [to('father', 'eli-hakohen'), to('sibling', 'chofni'), to('child', 'achituv-ben-pinchas'), nm('child', 'אי־כבוד', 'I-Chavod')],
    sources: [L('שמואל א׳ ד, יא – כב', 'I Samuel 4:11–22'), L('שמואל א׳ יד, ג', 'I Samuel 14:3')],
    sections: one('אי־כבוד', 'פינחס נהרג עם חפני אחיו כשנשבה הארון. כשאשתו שמעה על כך כרעה וילדה, וקראה לבנה אי־כבוד, "גלה כבוד מישראל". בנו השני אחיטוב היה הכהן הגדול אחרי עלי. יש להבחין בינו לבין פינחס בן אלעזר.', 'I-Chavod', 'Pinchas was killed with his brother Chofni when the Ark was captured. When his wife heard, she went into labour and named her son I-Chavod, "the glory has departed from Israel". His other son Achituv was High Priest after Eli. He should be distinguished from Pinchas son of Elazar.'),
  }),
  p({
    slug: 'yoel-ben-shmuel', cats: LV, name: L('יואל בן שמואל', 'Yoel son of Shmuel'), spot: 'יואל בן שמואל',
    summary: L('בכור שמואל, שופט בבאר שבע, אבי הימן המשורר.', 'Shmuel’s firstborn, a judge in Be’er Sheva, father of Heiman the singer.'),
    rel: [to('father', 'shmuel-hanavi'), to('sibling', 'aviya-ben-shmuel')],
    sources: [L('שמואל א׳ ח, א – ה', 'I Samuel 8:1–5'), L('דברי הימים א׳ ו, יג, יח', 'I Chronicles 6:13, 18'), L('שבת נה ע״ב', 'Shabbat 55b')],
    sections: one('ויטו אחרי הבצע', 'כשזקן שמואל שם את בניו יואל ואביה שופטים בבאר שבע, "ולא הלכו בניו בדרכיו ויטו אחרי הבצע", ובעקבות כך ביקשו הזקנים מלך. חז״ל (שבת נה ע״ב) מלמדים שלא חטאו ממש, אלא לא נהגו כאביהם שסבב בעצמו בכל הערים. בנו של יואל היה הימן המשורר.', 'They Turned Aside After Gain', 'When Shmuel grew old he made his sons Yoel and Aviyah judges in Be’er Sheva, "but his sons did not walk in his ways and turned aside after gain", and so the elders asked for a king. Chazal (Shabbat 55b) teach that they did not truly sin, but did not act like their father, who travelled to all the towns himself. Yoel’s son was Heiman the singer.'),
  }),
  p({
    slug: 'aviya-ben-shmuel', cats: LV, name: L('אביה בן שמואל', 'Aviyah son of Shmuel'), spot: 'אביה בן שמואל',
    summary: L('בנו השני של שמואל, שופט בבאר שבע.', 'Shmuel’s second son, a judge in Be’er Sheva.'),
    rel: [to('father', 'shmuel-hanavi'), to('sibling', 'yoel-ben-shmuel')], sources: [L('שמואל א׳ ח, א – ה', 'I Samuel 8:1–5')],
    sections: one('אביה', 'אביה שפט עם יואל אחיו בבאר שבע.', 'Aviyah', 'Aviyah judged with his brother Yoel in Be’er Sheva.'),
  }),
  // ── Shaul's family ──
  p({
    slug: 'aviel', name: L('אביאל', 'Aviel'), spot: 'אביאל',
    summary: L('אבי קיש ונר, סבו של שאול המלך.', 'Father of Kish and Ner, grandfather of King Shaul.'),
    rel: [to('child', 'kish'), to('child', 'ner')], sources: [L('שמואל א׳ ט, א; יד, נא', 'I Samuel 9:1; 14:51')],
    sections: one('אביאל', 'אביאל משבט בנימין היה אביהם של קיש, אבי שאול, ושל נר, אבי אבנר.', 'Aviel', 'Aviel of the tribe of Binyamin was the father of Kish, Shaul’s father, and of Ner, Avner’s father.'),
  }),
  p({
    slug: 'kish', name: L('קיש', 'Kish'), spot: 'קיש',
    summary: L('אבי שאול המלך, "גבור חיל" משבט בנימין.', 'King Shaul’s father, "a mighty man of valour" of the tribe of Binyamin.'),
    rel: [to('father', 'aviel'), to('sibling', 'ner'), to('child', 'shaul-hamelech')], sources: [L('שמואל א׳ ט, א – ג', 'I Samuel 9:1–3')],
    sections: one('האתונות', 'אתונות קיש אבדו, והוא שלח את שאול בנו לחפש אותן. בחיפושיו הגיע שאול אל שמואל הנביא, ששמח אותו למלך.', 'The Donkeys', 'Kish’s donkeys were lost, and he sent his son Shaul to look for them. In his search Shaul came to Shmuel the prophet, who anointed him king.'),
  }),
  p({
    slug: 'ner', name: L('נר', 'Ner'), spot: 'נר',
    summary: L('אחי קיש ואבי אבנר.', 'Brother of Kish and father of Avner.'),
    rel: [to('father', 'aviel'), to('sibling', 'kish'), to('child', 'avner')], sources: [L('שמואל א׳ יד, נ – נא', 'I Samuel 14:50–51')],
    sections: one('נר', 'נר היה דודו של שאול, ובנו אבנר היה שר צבאו.', 'Ner', 'Ner was Shaul’s uncle, and his son Avner was Shaul’s army commander.'),
  }),
  p({
    slug: 'avner', name: L('אבנר בן נר', 'Avner son of Ner'), spot: 'אבנר',
    summary: L('שר צבא שאול, שהמליך את איש בושת ונהרג בידי יואב.', 'Shaul’s army commander, who made Ish-Boshet king and was killed by Yoav.'),
    rel: [to('father', 'ner'), to('related', 'shaul-hamelech'), to('related', 'ish-boshet')],
    sources: [L('שמואל א׳ יד, נ; יז, נה', 'I Samuel 14:50; 17:55'), L('שמואל ב׳ ב – ג', 'II Samuel 2–3')],
    sections: one('שר צבא שאול', 'אבנר הביא את דוד לפני שאול אחרי מלחמת גלית. אחרי מות שאול המליך את איש בושת על ישראל, ונלחם בצבא דוד. כשנפרד מאיש בושת בא להביא את כל ישראל אל דוד, אך יואב הרגו בחברון לנקום את דם עשהאל אחיו, ודוד הספיד אותו: "הלוא תדעו כי שר וגדול נפל היום בישראל".', 'Shaul’s Commander', 'Avner brought David before Shaul after the battle with Golyat. After Shaul’s death he made Ish-Boshet king over Israel and fought David’s army. When he broke with Ish-Boshet he came to bring all Israel to David, but Yoav killed him in Chevron to avenge his brother Asahel, and David eulogized him: "Do you not know that a prince and a great man has fallen this day in Israel".'),
  }),
  p({
    slug: 'yehonatan-ben-shaul', name: L('יהונתן בן שאול', 'Yehonatan son of Shaul'), spot: 'יהונתן בן שאול',
    summary: L('בנו של שאול ורעו הנאמן של דוד, שנפל בגלבוע.', 'Shaul’s son and David’s faithful friend, who fell at Gilboa.'),
    rel: [to('father', 'shaul-hamelech'), nm('child', 'מפיבושת', 'Mefiboshet'), to('related', 'david')],
    sources: [L('שמואל א׳ יד; יח – כ', 'I Samuel 14; 18–20'), L('שמואל ב׳ א', 'II Samuel 1'), L('אבות ה, טז', 'Avot 5:16')],
    sections: one('אהבת דוד ויהונתן', 'יהונתן ונושא כליו לבדם הכו במחנה פלשתים במכמש. "ונפש יהונתן נקשרה בנפש דוד", והוא הזהיר את דוד מפני שאול אביו. המשנה מביאה את אהבתם כדוגמה ל"אהבה שאינה תלויה בדבר". הוא נפל עם אביו בהר הגלבוע, ודוד קונן: "צר לי עליך אחי יהונתן".', 'The Love of David and Yehonatan', 'Yehonatan and his armour-bearer alone struck the Philistine camp at Michmash. "The soul of Yehonatan was bound to the soul of David", and he warned David against his father Shaul. The Mishnah brings their love as the example of "love that does not depend on anything". He fell with his father on Mount Gilboa, and David lamented: "I grieve for you, my brother Yehonatan".'),
  }),
  // ── David's family ──
  w({
    slug: 'rut', cats: ['gerei-tzedek'], name: L('רות המואביה', 'Rut the Moabite (Ruth)'), spot: 'רות',
    summary: L('המואביה שדבקה בנעמי ובעם ישראל, ונעשתה אם המלכות.', 'The Moabite who clung to Naomi and to Israel, and became the mother of royalty.'),
    rel: [nm('spouse', 'מחלון', 'Machlon'), to('spouse', 'ivtzan-boaz'), to('child', 'oved'), nm('related', 'נעמי', 'Naomi')],
    sources: [L('מגילת רות', 'The Book of Ruth'), L('נזיר כג ע״ב', 'Nazir 23b'), L('בבא בתרא צא ע״ב', 'Bava Batra 91b')],
    sections: one('עמך עמי', 'רות, אשת מחלון בן נעמי, לא עזבה את חמותה אחרי מות בעלה, ואמרה: "באשר תלכי אלך... עמך עמי ואלהיך אלהי". היא ליקטה בשדה בועז, ובועז נשא אותה וילדה את עובד, סבו של דוד. חז״ל אומרים שהייתה בת עגלון מלך מואב (נזיר כג ע״ב), ושזכתה לראות את מלכות שלמה (בבא בתרא צא ע״ב).', 'Your People Are My People', 'Rut, the wife of Machlon son of Naomi, did not leave her mother-in-law after her husband’s death, saying: "Wherever you go I will go... your people shall be my people and your God my God". She gleaned in Boaz’s field, and Boaz married her and she bore Oved, David’s grandfather. Chazal say she was the daughter of Eglon king of Moav (Nazir 23b), and that she lived to see the kingdom of Shlomo (Bava Batra 91b).'),
  }),
  p({
    slug: 'oved', name: L('עובד', 'Oved'), spot: 'עובד',
    summary: L('בן בועז ורות, אבי ישי.', 'Son of Boaz and Rut, father of Yishai.'),
    rel: [to('father', 'ivtzan-boaz'), to('mother', 'rut'), to('child', 'yishai')], sources: [L('רות ד, יג – כב', 'Ruth 4:13–22')],
    sections: one('ילד בן לנעמי', 'כשנולד עובד אמרו השכנות "ילד בן לנעמי", ונעמי הייתה לו לאומנת. "הוא אבי ישי אבי דוד".', 'A Son Is Born to Naomi', 'When Oved was born the neighbours said "a son is born to Naomi", and Naomi became his nurse. "He is the father of Yishai, the father of David".'),
  }),
  p({
    slug: 'yishai', name: L('ישי', 'Yishai (Jesse)'), spot: 'ישי',
    summary: L('אבי דוד המלך, מבית לחם.', 'King David’s father, of Beit Lechem.'),
    rel: [to('father', 'oved'), to('spouse', 'nitzevet'), to('child', 'david'), nm('child', 'צרויה', 'Tzeruyah')],
    sources: [L('שמואל א׳ טז – יז', 'I Samuel 16–17'), L('שבת נה ע״ב', 'Shabbat 55b'), L('בבא בתרא יז ע״א', 'Bava Batra 17a')],
    sections: one('ישי בית הלחמי', 'שמואל בא אל ביתו של ישי למשוח את אחד מבניו, ואחרי שעברו לפניו שבעה בניו נמשח דוד הצעיר, שהיה רועה את הצאן. חז״ל מונים את ישי בין ארבעה שמתו "בעטיו של נחש" בלבד, בלי חטא משלהם (שבת נה ע״ב).', 'Yishai of Beit Lechem', 'Shmuel came to Yishai’s house to anoint one of his sons, and after seven of his sons passed before him, the youngest, David, who was tending the sheep, was anointed. Chazal count Yishai among four who died only "through the counsel of the serpent", without sin of their own (Shabbat 55b).'),
  }),
  w({
    slug: 'nitzevet', name: L('נצבת בת עדאל', 'Nitzevet daughter of Adael'), spot: 'נצבת',
    summary: L('אשת ישי ואם דוד המלך.', 'Yishai’s wife and King David’s mother.'),
    rel: [to('father', 'adael'), to('spouse', 'yishai'), to('child', 'david')], sources: [L('בבא בתרא צא ע״א', 'Bava Batra 91a')],
    sections: one('אם דוד', 'התנ״ך אינו מזכיר את שם אמו של דוד. הגמרא (בבא בתרא צא ע״א) מוסרת: "אמו של דוד – נצבת בת עדאל".', 'David’s Mother', 'Tanach does not give the name of David’s mother. The Gemara (Bava Batra 91a) relates: "David’s mother was Nitzevet daughter of Adael".'),
  }),
  p({
    slug: 'adael', name: L('עדאל', 'Adael'), spot: 'עדאל',
    summary: L('אבי נצבת, סבו של דוד המלך מצד אמו.', 'Father of Nitzevet, King David’s maternal grandfather.'),
    rel: [to('child', 'nitzevet')], sources: [L('בבא בתרא צא ע״א', 'Bava Batra 91a')],
    sections: one('עדאל', 'עדאל נזכר בגמרא כאביה של נצבת, אמו של דוד.', 'Adael', 'Adael is mentioned in the Gemara as the father of Nitzevet, David’s mother.'),
  }),
];
