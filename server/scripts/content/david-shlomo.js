// The days of David and Shlomo (the united kingdom). Same shape as egypt.js.
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const LV = ['levites'];

module.exports = [
  // ── David's sister and her sons ──
  w({
    slug: 'tzruya', name: L('צרויה', 'Tzeruyah'), spot: 'צרויה',
    summary: L('אחות דוד, אם יואב, אבישי ועשהאל.', 'David’s sister, mother of Yoav, Avishai and Asahel.'),
    rel: [to('father', 'yishai'), to('sibling', 'david'), to('child', 'yoav'), to('child', 'avishai'), to('child', 'asael')],
    sources: [L('דברי הימים א׳ ב, טז', 'I Chronicles 2:16'), L('שמואל ב׳ ב, יח', 'II Samuel 2:18')],
    sections: one('בני צרויה', 'צרויה הייתה אחותו של דוד, ובניה – יואב, אבישי ועשהאל – היו גיבוריו ושרי צבאו. הם נקראים תמיד על שם אמם, "בני צרויה", ודוד אמר עליהם "ואנכי היום רך ומשוח מלך, והאנשים האלה בני צרויה קשים ממני".', 'The Sons of Tzeruyah', 'Tzeruyah was David’s sister, and her sons – Yoav, Avishai and Asahel – were his warriors and army commanders. They are always called after their mother, "the sons of Tzeruyah", and David said of them "I am weak today though anointed king, and these men, the sons of Tzeruyah, are too hard for me".'),
  }),
  p({
    slug: 'yoav', name: L('יואב בן צרויה', 'Yoav son of Tzeruyah'), spot: 'יואב',
    summary: L('שר צבא דוד, שכבש את ירושלים, ונהרג בימי שלמה.', 'David’s army commander, who captured Jerusalem, and was killed in Shlomo’s days.'),
    rel: [to('mother', 'tzruya'), to('sibling', 'avishai'), to('sibling', 'asael'), to('related', 'david'), to('related', 'avner'), to('related', 'avshalom')],
    sources: [L('שמואל ב׳ ב – כ', 'II Samuel 2–20'), L('דברי הימים א׳ יא, ו', 'I Chronicles 11:6'), L('מלכים א׳ ב, כח – לד', 'I Kings 2:28–34'), L('סנהדרין מט ע״א', 'Sanhedrin 49a')],
    sections: one('שר הצבא', 'יואב עלה ראשון ביבוס ונעשה לראש ושר (דברי הימים א׳ יא, ו), והוביל את מלחמות דוד. הוא הרג את אבנר ואת עמשא, והרג את אבשלום בניגוד לבקשת דוד. בסוף ימי דוד תמך באדניהו, ושלמה ציווה את בניהו להרוג אותו, ונהרג כשאחז בקרנות המזבח. חז״ל משבחים את ביתו, ש"היה כמדבר" – פתוח לעניים, ומופקר מגזל ועריות (סנהדרין מט ע״א).', 'The Commander', 'Yoav went up first in Yevus and became chief and commander (I Chronicles 11:6), and led David’s wars. He killed Avner and Amasa, and killed Avshalom against David’s wish. At the end of David’s days he supported Adoniyahu, and Shlomo commanded Benayahu to kill him; he was killed holding the horns of the altar. Chazal praise his house, which "was like a desert" – open to the poor, and free of robbery and immorality (Sanhedrin 49a).'),
  }),
  p({
    slug: 'avishai', name: L('אבישי בן צרויה', 'Avishai son of Tzeruyah'), spot: 'אבישי',
    summary: L('מגיבורי דוד ומשרי צבאו, שהציל את דוד מיד ישבי בנוב.', 'One of David’s warriors and commanders, who saved David from Yishbi of Nov.'),
    rel: [to('mother', 'tzruya'), to('sibling', 'yoav'), to('sibling', 'asael'), to('related', 'david')],
    sources: [L('שמואל א׳ כו, ו – יב', 'I Samuel 26:6–12'), L('שמואל ב׳ טז, ט; כא, טז – יז', 'II Samuel 16:9; 21:16–17'), L('סנהדרין צה ע״א', 'Sanhedrin 95a')],
    sections: one('אבישי', 'אבישי ירד עם דוד אל מחנה שאול, וביקש להרוג את שאול הישן, ודוד מנע ממנו: "מי שלח ידו במשיח ה׳ ונקה". הוא הציל את דוד מישבי בנוב הענק (שמואל ב׳ כא; סנהדרין צה ע״א), וביקש להרוג את שמעי שקילל את דוד.', 'Avishai', 'Avishai went down with David into Shaul’s camp, and wanted to kill the sleeping Shaul, but David stopped him: "Who can lay his hand on Hashem’s anointed and be guiltless". He saved David from the giant Yishbi of Nov (II Samuel 21; Sanhedrin 95a), and wanted to kill Shimi who cursed David.'),
  }),
  p({
    slug: 'asael', name: L('עשהאל בן צרויה', 'Asahel son of Tzeruyah'), spot: 'עשהאל',
    summary: L('אחי יואב, "קל ברגליו כאחד הצבאים", שנהרג בידי אבנר.', 'Yoav’s brother, "swift of foot as a gazelle", killed by Avner.'),
    rel: [to('mother', 'tzruya'), to('sibling', 'yoav'), to('sibling', 'avishai'), to('related', 'avner')],
    sources: [L('שמואל ב׳ ב, יח – כג', 'II Samuel 2:18–23')],
    sections: one('קל ברגליו', 'עשהאל רדף אחרי אבנר בקרב בגבעון ולא סר מאחריו, אף שאבנר הזהיר אותו. אבנר הכה אותו באחרי החנית, ומותו הוא שגרם ליואב להרוג את אבנר.', 'Swift of Foot', 'Asahel pursued Avner in the battle at Givon and did not turn aside, though Avner warned him. Avner struck him with the butt of his spear, and his death is what led Yoav to kill Avner.'),
  }),
  // ── David's wives and children ──
  w({
    slug: 'michal', name: L('מיכל בת שאול', 'Michal daughter of Shaul'), spot: 'מיכל',
    summary: L('בת שאול ואשת דוד, שהצילה אותו מאביה.', 'Shaul’s daughter and David’s wife, who saved him from her father.'),
    rel: [to('father', 'shaul-hamelech'), to('sibling', 'yehonatan-ben-shaul'), to('spouse', 'david'), nm('spouse', 'פלטיאל בן ליש', 'Paltiel son of Laish')],
    sources: [L('שמואל א׳ יח – יט; כה, מד', 'I Samuel 18–19; 25:44'), L('שמואל ב׳ ג, יג – טז; ו, טז – כג', 'II Samuel 3:13–16; 6:16–23'), L('עירובין צו ע״א', 'Eruvin 96a')],
    sections: one('מיכל', '"ותאהב מיכל בת שאול את דוד". כששלח שאול להרוג את דוד הורידה אותו בעד החלון ושמה את התרפים במיטתו. שאול נתן אותה לפלטיאל בן ליש, ודוד החזיר אותה אליו. כשראתה את דוד מפזז ומכרכר לפני ארון ה׳ בזתה לו, "ולמיכל בת שאול לא היה לה ילד עד יום מותה". חז״ל מספרים שהייתה מניחה תפילין (עירובין צו ע״א).', 'Michal', '"And Michal daughter of Shaul loved David". When Shaul sent men to kill David she let him down through the window and put the household image in his bed. Shaul gave her to Paltiel son of Laish, and David took her back. When she saw David leaping and dancing before the Ark of Hashem she despised him, "and Michal daughter of Shaul had no child until the day of her death". Chazal relate that she wore tefillin (Eruvin 96a).'),
  }),
  w({
    slug: 'bat-sheva', name: L('בת-שבע', 'Bat-Sheva'), spot: 'בת-שבע',
    summary: L('אשת דוד ואם שלמה המלך, שהבטיחה את המלוכה לבנה.', 'David’s wife and the mother of King Shlomo, who secured the throne for her son.'),
    rel: [to('father', 'eliam'), to('spouse', 'uriya-hachiti'), to('spouse', 'david'), to('child', 'shlomo')],
    sources: [L('שמואל ב׳ יא – יב', 'II Samuel 11–12'), L('מלכים א׳ א – ב', 'I Kings 1–2'), L('סנהדרין סט ע״ב', 'Sanhedrin 69b'), L('שבת נו ע״א', 'Shabbat 56a')],
    sections: one('אם שלמה', 'בת-שבע בת אליעם הייתה אשת אוריה החיתי, ודוד לקח אותה. נתן הנביא הוכיח את דוד במשל כבשת הרש, ודוד אמר "חטאתי לה׳". בנם הראשון מת, והשני היה שלמה. בסוף ימי דוד, כשאדניהו המליך את עצמו, באה בת-שבע עם נתן אל דוד, ושלמה נמשח למלך. לפי חז״ל הייתה נכדתו של אחיתופל (סנהדרין סט ע״ב).', 'Mother of Shlomo', 'Bat-Sheva daughter of Eliam was the wife of Uriyah the Hittite, and David took her. Natan the prophet rebuked David with the parable of the poor man’s lamb, and David said "I have sinned against Hashem". Their first son died, and the second was Shlomo. At the end of David’s days, when Adoniyahu made himself king, Bat-Sheva came with Natan to David, and Shlomo was anointed king. According to Chazal she was Achitofel’s granddaughter (Sanhedrin 69b).'),
  }),
  p({
    slug: 'uriya-hachiti', name: L('אוריה החיתי', 'Uriyah the Hittite'), spot: 'אוריה החיתי',
    summary: L('מגיבורי דוד ובעלה הראשון של בת-שבע.', 'One of David’s warriors and Bat-Sheva’s first husband.'),
    rel: [to('spouse', 'bat-sheva'), to('related', 'david'), to('related', 'yoav')],
    sources: [L('שמואל ב׳ יא', 'II Samuel 11'), L('שמואל ב׳ כג, לט', 'II Samuel 23:39'), L('שבת נו ע״א', 'Shabbat 56a')],
    sections: one('אוריה', 'אוריה סירב לרדת לביתו בזמן שהארון וישראל במלחמה: "האני אבוא אל ביתי לאכל ולשתות ולשכב עם אשתי". דוד כתב ליואב לשים אותו מול פני המלחמה, והוא נהרג ברבת בני עמון. חז״ל אומרים שכל היוצא למלחמת בית דוד היה כותב גט לאשתו, ושאוריה נחשב מורד במלכות (שבת נו ע״א).', 'Uriyah', 'Uriyah refused to go down to his house while the Ark and Israel were at war: "Shall I go to my house to eat and drink and lie with my wife". David wrote to Yoav to place him at the front of the battle, and he was killed at Rabbah of the Ammonites. Chazal say that everyone who went out to David’s wars would write a bill of divorce for his wife, and that Uriyah was considered a rebel against the king (Shabbat 56a).'),
  }),
  p({
    slug: 'eliam', name: L('אליעם בן אחיתופל', 'Eliam son of Achitofel'), spot: 'אליעם',
    summary: L('מגיבורי דוד, אבי בת-שבע.', 'One of David’s warriors, father of Bat-Sheva.'),
    rel: [to('father', 'achitofel'), to('child', 'bat-sheva')],
    sources: [L('שמואל ב׳ יא, ג; כג, לד', 'II Samuel 11:3; 23:34')],
    sections: one('אליעם', 'אליעם בן אחיתופל הגילוני נמנה בין שלושים הגיבורים של דוד, והיה אביה של בת-שבע.', 'Eliam', 'Eliam son of Achitofel the Gilonite was counted among David’s thirty warriors, and was the father of Bat-Sheva.'),
  }),
  p({
    slug: 'achitofel', name: L('אחיתופל הגילוני', 'Achitofel the Gilonite'), spot: 'אחיתופל',
    summary: L('יועץ דוד, שעצתו הייתה "כאשר ישאל בדבר האלהים", ומרד עם אבשלום.', 'David’s counsellor, whose advice was "as if one inquired of the word of God", and who rebelled with Avshalom.'),
    rel: [to('child', 'eliam'), to('student', 'david'), to('related', 'avshalom')],
    sources: [L('שמואל ב׳ טו – יז', 'II Samuel 15–17'), L('אבות ו, ג', 'Avot 6:3'), L('סנהדרין קו ע״ב', 'Sanhedrin 106b')],
    sections: one('עצת אחיתופל', 'עצת אחיתופל הייתה "כאשר ישאל איש בדבר האלהים". במרד אבשלום הצטרף לאבשלום, ודוד התפלל "סכל נא את עצת אחיתופל". כשראה שלא נעשתה עצתו, הלך לביתו וחנק את עצמו. המשנה (אבות ו, ג) מביאה שדוד למד ממנו שני דברים בלבד וקרא לו "רבו, אלופו ומיודעו".', 'The Counsel of Achitofel', 'Achitofel’s counsel was "as if a man inquired of the word of God". In Avshalom’s rebellion he joined Avshalom, and David prayed "frustrate the counsel of Achitofel". When he saw his advice was not followed, he went home and hanged himself. The Mishnah (Avot 6:3) brings that David learned only two things from him and called him "his teacher, his guide and his intimate".'),
  }),
  p({
    slug: 'avshalom', name: L('אבשלום בן דוד', 'Avshalom son of David'), spot: 'אבשלום',
    summary: L('בן דוד שמרד באביו ונהרג כששערו נאחז באלה.', 'David’s son who rebelled against his father and was killed when his hair caught in a terebinth.'),
    rel: [to('father', 'david'), nm('mother', 'מעכה בת תלמי', 'Maachah daughter of Talmai'), to('sibling', 'tamar-bat-david'), to('sibling', 'amnon'), to('related', 'achitofel'), to('related', 'yoav')],
    sources: [L('שמואל ב׳ יג – יט', 'II Samuel 13–19'), L('סוטה ט ע״ב', 'Sotah 9b')],
    sections: one('בני אבשלום', 'אבשלום, "אין איש יפה כאבשלום", הרג את אמנון שענה את תמר אחותו. הוא גנב את לב אנשי ישראל ומרד בדוד, ודוד ברח מירושלים. בקרב ביער אפרים נאחז ראשו – ולפי חז״ל שערו, שבו התגאה (סוטה ט ע״ב) – באלה, ויואב הרגו. דוד קונן: "בני אבשלום, בני בני אבשלום, מי יתן מותי אני תחתיך".', 'My Son Avshalom', 'Avshalom – "there was no man as handsome as Avshalom" – killed Amnon, who had violated his sister Tamar. He stole the hearts of the men of Israel and rebelled against David, and David fled Jerusalem. In the battle in the forest of Efraim his head – according to Chazal his hair, in which he took pride (Sotah 9b) – caught in a terebinth, and Yoav killed him. David lamented: "My son Avshalom, my son, my son Avshalom, would that I had died instead of you".'),
  }),
  p({
    slug: 'amnon', name: L('אמנון בן דוד', 'Amnon son of David'), spot: 'אמנון',
    summary: L('בכור דוד, שענה את תמר ונהרג בידי אבשלום.', 'David’s firstborn, who violated Tamar and was killed by Avshalom.'),
    rel: [to('father', 'david'), nm('mother', 'אחינעם היזרעאלית', 'Achinoam of Yizre’el'), to('sibling', 'avshalom'), to('sibling', 'tamar-bat-david')],
    sources: [L('שמואל ב׳ ג, ב; יג', 'II Samuel 3:2; 13'), L('אבות ה, טז', 'Avot 5:16')],
    sections: one('אמנון ותמר', 'אמנון ענה את תמר אחותו, ואחר כך "וישנאה אמנון שנאה גדולה מאד". שנתיים אחר כך הרג אותו אבשלום. המשנה מביאה את אהבת אמנון ותמר כדוגמה ל"אהבה התלויה בדבר", שבטל הדבר – בטלה האהבה.', 'Amnon and Tamar', 'Amnon violated his sister Tamar, and afterwards "Amnon hated her with a very great hatred". Two years later Avshalom killed him. The Mishnah brings Amnon’s love for Tamar as the example of "love that depends on something", which ends when that thing ends.'),
  }),
  w({
    slug: 'tamar-bat-david', name: L('תמר בת דוד', 'Tamar daughter of David'), spot: 'תמר בת דוד',
    summary: L('בת דוד ואחות אבשלום.', 'David’s daughter and Avshalom’s sister.'),
    rel: [to('father', 'david'), nm('mother', 'מעכה בת תלמי', 'Maachah daughter of Talmai'), to('sibling', 'avshalom'), to('sibling', 'amnon')],
    sources: [L('שמואל ב׳ יג', 'II Samuel 13'), L('סנהדרין כא ע״א', 'Sanhedrin 21a')],
    sections: one('תמר', 'אחרי שאמנון ענה אותה, שמה תמר אפר על ראשה וקרעה את כתונת הפסים, וישבה "שוממה בבית אבשלום אחיה". חז״ל (סנהדרין כא ע״א) מסבירים שאמנון לא היה אחיה הגמור, כי היא נולדה לפני שאמה התגיירה. יש להבחין בינה לבין תמר כלת יהודה.', 'Tamar', 'After Amnon violated her, Tamar put ashes on her head and tore her coat of many colours, and remained "desolate in the house of Avshalom her brother". Chazal (Sanhedrin 21a) explain that Amnon was not fully her brother, since she was born before her mother converted. She should be distinguished from Tamar, Yehudah’s daughter-in-law.'),
  }),
  p({
    slug: 'adoniyahu', name: L('אדוניהו בן חגית', 'Adoniyahu son of Chagit'), spot: 'אדוניהו',
    summary: L('בן דוד שניסה למלוך בסוף ימי אביו, ונהרג בימי שלמה.', 'David’s son who tried to reign at the end of his father’s days, and was killed in Shlomo’s days.'),
    rel: [to('father', 'david'), nm('mother', 'חגית', 'Chagit'), to('sibling', 'shlomo'), to('related', 'yoav')],
    sources: [L('מלכים א׳ א – ב', 'I Kings 1–2')],
    sections: one('אני אמלוך', 'כשדוד זקן "אדניה בן חגית מתנשא לאמר אני אמלך", ויואב ואביתר הכהן תמכו בו. נתן ובת-שבע באו אל דוד, ושלמה נמשח בגיחון. אחרי מות דוד ביקש אדוניהו לשאת את אבישג השונמית, ושלמה ראה בכך ניסיון לתבוע את המלוכה וציווה להורגו.', 'I Will Be King', 'When David was old, "Adoniyahu son of Chagit exalted himself, saying, I will be king", and Yoav and Evyatar the Kohen supported him. Natan and Bat-Sheva came to David, and Shlomo was anointed at the Gichon. After David’s death Adoniyahu asked to marry Avishag the Shunamite, and Shlomo saw this as an attempt to claim the throne and ordered his death.'),
  }),
  p({
    slug: 'shefatya', name: L('שפטיה בן דוד', 'Shefatyah son of David'), spot: 'שפטיה',
    summary: L('בנו החמישי של דוד, שנולד בחברון.', 'David’s fifth son, born in Chevron.'),
    rel: [to('father', 'david'), nm('mother', 'אביטל', 'Avital')], sources: [L('שמואל ב׳ ג, ד', 'II Samuel 3:4'), L('דברי הימים א׳ ג, ג', 'I Chronicles 3:3')],
    sections: one('שפטיה', 'שפטיה בן אביטל נמנה בין ששת בני דוד שנולדו לו בחברון.', 'Shefatyah', 'Shefatyah son of Avital is counted among the six sons born to David in Chevron.'),
  }),
  p({
    slug: 'mefiboshet', name: L('מפיבושת בן יהונתן', 'Mefiboshet son of Yehonatan'), spot: 'מפיבושת',
    summary: L('בן יהונתן, נכה רגליים, שאכל על שולחן דוד.', 'Yehonatan’s son, lame in both feet, who ate at David’s table.'),
    rel: [to('father', 'yehonatan-ben-shaul'), to('related', 'david')],
    sources: [L('שמואל ב׳ ד, ד; ט; טז, א – ד; יט, כה – לא', 'II Samuel 4:4; 9; 16:1–4; 19:25–31'), L('ברכות ד ע״א', 'Berachot 4a')],
    sections: one('על שולחן המלך', 'כשהגיעה שמועת מות שאול ויהונתן, נפל מפיבושת מידי אומנתו ונעשה נכה. דוד חיפש "היש עוד אשר נותר לבית שאול ואעשה עמו חסד בעבור יהונתן", החזיר לו את שדות שאול, והוא אכל על שולחן המלך תמיד. חז״ל אומרים שהיה גדול בתורה, ושדוד היה מתייעץ עמו (ברכות ד ע״א).', 'At the King’s Table', 'When news came of the deaths of Shaul and Yehonatan, Mefiboshet fell from his nurse’s arms and became lame. David sought "is there anyone left of the house of Shaul, that I may show him kindness for Yehonatan’s sake", restored Shaul’s fields to him, and he ate at the king’s table always. Chazal say he was great in Torah, and David would consult him (Berachot 4a).'),
  }),
  // ── Benayahu ──
  p({
    slug: 'yehoyada-avi-benayahu', cats: LV, name: L('יהוידע אבי בניהו', 'Yehoyada, Father of Benayahu'), spot: 'יהוידע אבי בניהו',
    summary: L('אבי בניהו, הנגיד לבית אהרן שהצטרף לדוד בחברון.', 'Benayahu’s father, the leader of the house of Aharon who joined David at Chevron.'),
    rel: [to('child', 'benayahu')], sources: [L('דברי הימים א׳ יב, כח; כז, ה', 'I Chronicles 12:28; 27:5')],
    sections: one('יהוידע', 'בדברי הימים נזכר "יהוידע הנגיד לאהרן" בין הבאים אל דוד חברונה, ובנו בניהו נקרא "בן יהוידע הכהן ראש". באילן שלנו נכתב שידוע שבניהו היה כהן, אבל לא ידוע מאיזו משפחה. יש להבחין בינו לבין יהוידע הכהן הגדול, שהציל את יואש.', 'Yehoyada', 'Divrei HaYamim mentions "Yehoyada, the leader of the house of Aharon" among those who came to David at Chevron, and his son Benayahu is called "son of Yehoyada the chief priest". On our tree it is noted that Benayahu is known to have been a Kohen, but his family is not known. He should be distinguished from Yehoyada the High Priest, who saved Yoash.'),
  }),
  p({
    slug: 'benayahu', cats: LV, name: L('בניהו בן יהוידע', 'Benayahu son of Yehoyada'), spot: 'בניהו',
    summary: L('גיבור דוד, שר הכרתי והפלתי, ושר צבא שלמה.', 'David’s warrior, over the Kerethites and Pelethites, and Shlomo’s army commander.'),
    rel: [to('father', 'yehoyada-avi-benayahu'), to('related', 'david'), to('related', 'shlomo')],
    sources: [L('שמואל ב׳ כג, כ – כג', 'II Samuel 23:20–23'), L('מלכים א׳ א – ב', 'I Kings 1–2'), L('ברכות ד ע״א; יח ע״ב', 'Berachot 4a; 18b')],
    sections: one('רב פעלים', 'בניהו "רב פעלים מקבצאל" הכה את שני אריאל מואב, "והוא ירד והכה את הארי בתוך הבור ביום השלג". הוא היה על הכרתי והפלתי, משמר המלך, ותמך במשיחת שלמה. שלמה מינה אותו לשר צבאו במקום יואב. חז״ל דורשים את גבורותיו על גדולתו בתורה, ואומרים שעמד בראש הסנהדרין (ברכות ד ע״א).', 'Mighty in Deeds', 'Benayahu, "mighty in deeds, of Kavtze’el", struck down the two champions of Moav, "and he went down and killed a lion in a pit on a snowy day". He was over the Kerethites and Pelethites, the king’s guard, and supported the anointing of Shlomo. Shlomo appointed him army commander in place of Yoav. Chazal expound his feats as his greatness in Torah, and say he headed the Sanhedrin (Berachot 4a).'),
  }),
  w({
    slug: 'naama-haamonit', name: L('נעמה העמונית', 'Naama the Ammonite'), spot: 'נעמה העמונית',
    summary: L('אשת שלמה ואם רחבעם, מבנות עמון.', 'Shlomo’s wife and the mother of Rechavam, of the daughters of Ammon.'),
    rel: [to('spouse', 'shlomo'), to('child', 'rechavam')],
    sources: [L('מלכים א׳ יד, כא', 'I Kings 14:21'), L('בבא קמא לח ע״ב', 'Bava Kamma 38b'), L('יבמות עז ע״א', 'Yevamot 77a')],
    sections: one('עמוני ולא עמונית', 'נעמה הייתה מבנות עמון, ובנה רחבעם מלך אחרי שלמה. התורה אוסרת עמוני לבוא בקהל, וחז״ל למדו "עמוני ולא עמונית" (יבמות עז ע״א). הגמרא (בבא קמא לח ע״ב) מספרת שבזכות שתי "פרידות טובות" – רות המואביה ונעמה העמונית – חס ה׳ על מואב ועמון. יש להבחין בינה לבין נעמה אחות תובל-קין.', 'An Ammonite Man, Not Woman', 'Naama was of the daughters of Ammon, and her son Rechavam reigned after Shlomo. The Torah forbids an Ammonite to enter the congregation, and Chazal learned "an Ammonite man, not an Ammonite woman" (Yevamot 77a). The Gemara (Bava Kamma 38b) relates that because of two "good doves" – Rut the Moabite and Naama the Ammonite – Hashem spared Moav and Ammon. She should be distinguished from Naama the sister of Tuval-Kayin.'),
  }),
  // ── the singers ──
  p({
    slug: 'berachyahu', cats: LV, name: L('ברכיהו', 'Berachyahu'), spot: 'ברכיהו',
    summary: L('אבי אסף המשורר, מבני גרשון.', 'Father of Asaf the singer, of the sons of Gershon.'),
    rel: [to('child', 'asaf')], sources: [L('דברי הימים א׳ ו, כד; טו, יז', 'I Chronicles 6:24; 15:17')],
    sections: one('ברכיהו', 'ברכיהו בן שמעא, מבני גרשון, נזכר בדברי הימים כאביו של אסף המשורר.', 'Berachyahu', 'Berachyahu son of Shimea, of the sons of Gershon, is mentioned in Divrei HaYamim as the father of Asaf the singer.'),
  }),
  p({
    slug: 'asaf', cats: LV, name: L('אסף בן ברכיהו', 'Asaf son of Berachyahu'), spot: 'אסף',
    roles: [L('משורר', 'Singer')],
    summary: L('ראש המשוררים בימי דוד, שמזמוריו בספר תהילים.', 'Head of the singers in David’s days, whose psalms are in the Book of Tehillim.'),
    rel: [to('father', 'berachyahu'), to('related', 'david'), to('related', 'shevet-levi')],
    sources: [L('דברי הימים א׳ טו, יז – יט; טז, ה – ז; כה, א – ב', 'I Chronicles 15:17–19; 16:5–7; 25:1–2'), L('תהילים נ; עג – פג', 'Psalms 50; 73–83')],
    sections: one('מזמור לאסף', 'כשהעלה דוד את ארון ה׳ לירושלים מינה את אסף לראש המשוררים, "ואסף במצלתים משמיע". לאסף מיוחסים שנים עשר מזמורים בתהילים. משבט לוי, מבני גרשון.', 'A Psalm of Asaf', 'When David brought the Ark of Hashem up to Jerusalem he appointed Asaf head of the singers, "and Asaf sounding the cymbals". Twelve psalms are attributed to Asaf. Of the tribe of Levi, of the sons of Gershon.'),
  }),
  p({
    slug: 'heiman', cats: LV, name: L('הימן בן יואל', 'Heiman son of Yoel'), spot: 'הימן',
    roles: [L('משורר', 'Singer')],
    summary: L('נכד שמואל הנביא, ממשוררי דוד.', 'Grandson of Shmuel the prophet, one of David’s singers.'),
    rel: [to('father', 'yoel-ben-shmuel'), to('related', 'david'), to('related', 'shevet-levi')],
    sources: [L('דברי הימים א׳ ו, יח; טו, יז – יט; כה, ד – ו', 'I Chronicles 6:18; 15:17–19; 25:4–6'), L('תהילים פח', 'Psalm 88')],
    sections: one('הימן המשורר', 'הימן בן יואל בן שמואל, מבני קהת ומבני קרח, היה מראשי המשוררים בימי דוד, ונקרא "חוזה המלך בדברי האלהים". היו לו ארבעה עשר בנים ושלוש בנות, שכולם שוררו בבית ה׳. לו מיוחס מזמור פח בתהילים.', 'Heiman the Singer', 'Heiman son of Yoel son of Shmuel, of the sons of Kehat and of Korach, was one of the heads of the singers in David’s days, and was called "the king’s seer in the words of God". He had fourteen sons and three daughters, all of whom sang in the House of Hashem. Psalm 88 is attributed to him.'),
  }),
  p({
    slug: 'yedutun', cats: LV, name: L('ידותון', 'Yedutun'), spot: 'ידותון',
    roles: [L('משורר', 'Singer')],
    summary: L('ממשוררי דוד, משבט לוי.', 'One of David’s singers, of the tribe of Levi.'),
    rel: [to('related', 'shevet-levi'), to('related', 'david')],
    sources: [L('דברי הימים א׳ טז, מא – מב; כה, א – ג', 'I Chronicles 16:41–42; 25:1–3'), L('תהילים לט; סב; עז', 'Psalms 39; 62; 77')],
    sections: one('ידותון', 'ידותון נזכר בדברי הימים עם אסף והימן בין המשוררים שמינה דוד "להדות ולהלל לה׳". בניו ניבאו בכינור, ושלושה מזמורים בתהילים נקראים "לידותון". הוא מבני לוי, אך לא ידוע מאיזו משפחה, ולכן באילן שלנו הוא מחובר לשבט לוי בלבד.', 'Yedutun', 'Yedutun is mentioned in Divrei HaYamim with Asaf and Heiman among the singers David appointed "to give thanks and praise to Hashem". His sons prophesied with the harp, and three psalms are headed "to Yedutun". He was of the Levites, but his family is not known, so on our tree he is joined only to the tribe of Levi.'),
  }),
  p({
    slug: 'yigal', name: L('יגאל', 'Yigal'), spot: 'יגאל',
    summary: L('מגיבורי דוד.', 'One of David’s warriors.'),
    rel: [to('related', 'david')], sources: [L('שמואל ב׳ כג, לו', 'II Samuel 23:36')],
    sections: one('יגאל', 'יגאל נמנה בין גיבורי דוד, ובשמואל נקרא "יגאל בן נתן מצבה". באילן שלנו יש קו עם סימן שאלה בינו לבין נתן הנביא, כי לא ברור שנתן אביו הוא נתן הנביא.', 'Yigal', 'Yigal is counted among David’s warriors, and in Shmuel he is called "Yigal son of Natan of Tzovah". On our tree there is a line with a question mark between him and Natan the prophet, since it is not clear that his father Natan was Natan the prophet.'),
  }),
];
