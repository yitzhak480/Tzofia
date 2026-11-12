// The judges. Positions follow the Biblical tree poster (numbers 1–15 there).
// The poster gives no years for the judges; the years follow Seder Olam
// (the period of the judges begins in 2516, after Yehoshua's 28 years).
const { L, sec, article, office, judged, biblical, to, nm } = require('./helpers');

const judge = (e) => ({ categories: ['judges'], roles: [L('שופט', 'Judge')], ...e, content: article(e.sections) });

module.exports = [
  judge({
    slug: 'otniel-ben-kenaz', name: L('עתניאל בן קנז', 'Otniel son of Kenaz'),
    offices: [judged(2516, 2556)],
    summary: L('השופט הראשון, שהושיע את ישראל מיד כושן רשעתיים.', 'The first judge, who saved Israel from Kushan-Rishatayim.'),
    rel: [nm('father', 'קנז', 'Kenaz'), nm('sibling', 'כלב בן יפונה', 'Calev son of Yefuneh'), nm('spouse', 'עכסה בת כלב', 'Achsah daughter of Calev'), to('related', 'shevet-yehuda')],
    sources: [L('יהושע טו, טז – יט', 'Joshua 15:16–19'), L('שופטים א, יב – טו; ג, ז – יא', 'Judges 1:12–15; 3:7–11'), L('תמורה טז ע״א', 'Temurah 16a')],
    spots: biblical(59.99, 30.87),
    sections: [
      sec('כיבוש קרית ספר', 'עתניאל בן קנז, משבט יהודה, היה אחיו של כלב בן יפונה. כלב הבטיח את בתו עכסה למי שיכבוש את קרית ספר, ועתניאל לכדה ונשא את עכסה לאישה. חז״ל מלמדים שבימי האבל על משה נשתכחו הלכות רבות, ועתניאל החזירן בפלפולו (תמורה טז ע״א).',
        'The Capture of Kiryat Sefer', 'Otniel son of Kenaz, of the tribe of Yehudah, was the brother of Calev son of Yefuneh. Calev promised his daughter Achsah to whoever would capture Kiryat Sefer, and Otniel captured it and married Achsah. Chazal teach that during the mourning for Moshe many laws were forgotten, and Otniel restored them through his reasoning (Temurah 16a).'),
      sec('השופט הראשון', 'אחרי מות יהושע עבדו בני ישראל את הבעלים, וה׳ מכרם ביד כושן רשעתיים מלך ארם נהריים שמונה שנים. כשזעקו אל ה׳ הקים להם את עתניאל, "ותהי עליו רוח ה׳ וישפט את ישראל", והוא ניצח את כושן רשעתיים. אחריו שקטה הארץ ארבעים שנה.',
        'The First Judge', 'After Yehoshua’s death the people of Israel served the Baalim, and Hashem gave them into the hand of Kushan-Rishatayim king of Aram-Naharayim for eight years. When they cried out to Hashem, He raised up Otniel for them, "and the spirit of Hashem was upon him and he judged Israel", and he defeated Kushan-Rishatayim. After him the land was quiet for forty years.'),
    ],
  }),

  judge({
    slug: 'ehud-ben-gera', name: L('אהוד בן גרא', 'Ehud son of Gera'),
    offices: [judged(2556, 2636, 'כולל שמונה עשרה שנות שעבוד למואב', 'Including eighteen years of subjugation to Moav')],
    summary: L('שופט משבט בנימין, איטר יד ימינו, שהרג את עגלון מלך מואב.', 'A left-handed judge from Binyamin who killed Eglon king of Moav.'),
    rel: [nm('father', 'גרא', 'Gera'), to('related', 'shevet-binyamin'), to('related', 'shamgar-ben-anat')],
    sources: [L('שופטים ג, יב – ל', 'Judges 3:12–30'), L('סוטה מז ע״א', 'Sotah 47a')],
    spots: biblical(53.56, 31.18),
    sections: [
      sec('הריגת עגלון', 'אחרי שעבוד של שמונה עשרה שנים לעגלון מלך מואב, הקים ה׳ את אהוד בן גרא מבנימין, "איש אטר יד ימינו". אהוד עשה לו חרב קטנה, חגר אותה על ירכו הימנית, והביא את המנחה לעגלון. כשאמר לו "דבר אלהים לי אליך" קם עגלון מכסאו, ואהוד תקע את החרב בבטנו. חז״ל מלמדים שבזכות שקם מכסאו לכבוד דבר ה׳, זכה עגלון שתצא ממנו רות המואביה (סוטה מז ע״א).',
        'The Death of Eglon', 'After eighteen years of subjugation to Eglon king of Moav, Hashem raised up Ehud son of Gera of Binyamin, "a man left-handed". Ehud made himself a short sword, girded it on his right thigh and brought the tribute to Eglon. When he said "I have a word from God for you", Eglon rose from his seat, and Ehud thrust the sword into his belly. Chazal teach that because he rose from his seat in honor of the word of Hashem, Eglon merited that Ruth the Moabite would descend from him (Sotah 47a).'),
      sec('שמונים שנה', 'אהוד תקע בשופר בהר אפרים, ובני ישראל לכדו את מעברות הירדן והכו במואב כעשרת אלפים איש. "ותשקט הארץ שמונים שנה", התקופה הארוכה ביותר של שקט בימי השופטים.',
        'Eighty Years', 'Ehud sounded the shofar in the hill country of Ephraim, and the people of Israel seized the fords of the Jordan and struck down about ten thousand men of Moav. "And the land was quiet for eighty years", the longest period of peace in the days of the judges.'),
    ],
  }),

  judge({
    slug: 'shamgar-ben-anat', name: L('שמגר בן ענת', 'Shamgar son of Anat'),
    offices: [judged(null, null, 'בתוך שנות אהוד', 'Within the years of Ehud')],
    summary: L('שופט שהכה שש מאות פלשתים במלמד הבקר.', 'A judge who struck down six hundred Philistines with an ox goad.'),
    rel: [nm('father', 'ענת', 'Anat'), to('related', 'ehud-ben-gera')],
    sources: [L('שופטים ג, לא', 'Judges 3:31'), L('שופטים ה, ו', 'Judges 5:6')],
    spots: biblical(49.79, 31.33),
    sections: [
      sec('במלמד הבקר', 'אחרי אהוד קם שמגר בן ענת, "ויך את פלשתים שש מאות איש במלמד הבקר, ויושע גם הוא את ישראל". בשירת דבורה מתוארים ימיו כימי סכנה: "בימי שמגר בן ענת... חדלו ארחות".',
        'With an Ox Goad', 'After Ehud came Shamgar son of Anat, "who struck down six hundred Philistines with an ox goad, and he too saved Israel". The Song of Devorah describes his days as days of danger: "In the days of Shamgar son of Anat... the highways were deserted".'),
      sec('על התאריך והמשפחה', 'לפי סדר עולם שפט שמגר בתוך שנות אהוד, ולכן לא נמנו לו שנים משלו. על האילן שלנו נכתב שידוע ששמגר בן ענת היה כהן, אך לא ידוע מאיזו משפחה.',
        'His Time and Family', 'According to Seder Olam Shamgar judged within the years of Ehud, and so no years of his own are counted. Our tree notes that Shamgar son of Anat is known to have been a Kohen, but it is not known from which family.'),
    ],
  }),

  judge({
    slug: 'gideon', name: L('גדעון בן יואש', 'Gideon son of Yoash'),
    offices: [judged(2676, 2716)],
    summary: L('השופט שהושיע את ישראל ממדין בשלוש מאות איש, וסירב למלוך.', 'The judge who saved Israel from Midian with three hundred men, and refused to be king.'),
    rel: [nm('father', 'יואש האביעזרי', 'Yoash the Aviezrite'), to('child', 'avimelech'), nm('child', 'יותם', 'Yotam'), to('related', 'shevet-menashe')],
    sources: [L('שופטים ו – ח', 'Judges 6–8'), L('ראש השנה כה ע״ב', 'Rosh Hashanah 25b')],
    spots: biblical(38.52, 31.62),
    sections: [
      sec('גבור החיל', 'בימי שעבוד מדין, כשחבט גדעון חיטים בגת כדי להסתירן, נגלה אליו מלאך ה׳: "ה׳ עמך גבור החיל". גדעון, ממשפחת אביעזר שבמנשה, הרס את מזבח הבעל של אביו, ולכן נקרא ירובעל. הוא ביקש אות בגיזת הצמר, ובלילה הראשון היה הטל על הגיזה לבדה, ובשני על כל הארץ.',
        'Mighty Man of Valor', 'In the days of Midian’s oppression, as Gideon was beating out wheat in a winepress to hide it, the angel of Hashem appeared to him: "Hashem is with you, mighty man of valor". Gideon, of the family of Aviezer in Menashe, tore down his father’s altar to Baal, and so was called Yerubaal. He asked for a sign with a fleece of wool: on the first night the dew was on the fleece alone, and on the second on all the ground.'),
      sec('שלוש מאות איש', 'מתוך שלושים ושניים אלף איש הורה ה׳ לגדעון להשאיר רק שלוש מאות, "פן יתפאר עלי ישראל". בלילה הקיפו את מחנה מדין, תקעו בשופרות, שברו את הכדים וקראו "חרב לה׳ ולגדעון", ומחנה מדין נס בבהלה.',
        'Three Hundred Men', 'Out of thirty-two thousand men, Hashem told Gideon to keep only three hundred, "lest Israel boast against Me". At night they surrounded the camp of Midian, blew the shofars, broke the jars and cried "The sword of Hashem and of Gideon", and the camp of Midian fled in panic.'),
      sec('לא אמשול בכם', 'אנשי ישראל ביקשו מגדעון למלוך עליהם, אך הוא סירב: "לא אמשל אני בכם ולא ימשל בני בכם, ה׳ ימשל בכם". חז״ל מלמדים "ירובעל בדורו כמשה בדורו" (ראש השנה כה ע״ב). הארץ שקטה ארבעים שנה בימיו.',
        'I Will Not Rule over You', 'The men of Israel asked Gideon to rule over them, but he refused: "I will not rule over you, nor shall my son rule over you; Hashem shall rule over you". Chazal teach "Yerubaal in his generation was like Moshe in his generation" (Rosh Hashanah 25b). The land was quiet for forty years in his days.'),
    ],
  }),

  judge({
    slug: 'avimelech', name: L('אבימלך בן גדעון', 'Avimelech son of Gideon'),
    roles: [L('שופט', 'Judge'), L('מלך שכם', 'King of Shechem')],
    offices: [office('שנות שלטון', 'Years of rule', 2716, 2719)],
    summary: L('בן גדעון, שהרג את אחיו ומלך בשכם שלוש שנים.', 'Gideon’s son, who killed his brothers and ruled in Shechem for three years.'),
    rel: [to('father', 'gideon'), nm('sibling', 'יותם', 'Yotam')],
    sources: [L('שופטים ט', 'Judges 9')],
    spots: biblical(39.38, 32.84),
    sections: [
      sec('מלכות שכם', 'אבימלך, בנו של גדעון מפילגשו שבשכם, שכנע את בעלי שכם להמליכו, ושכר אנשים ריקים שהרגו את שבעים בני גדעון על אבן אחת. רק יותם, הצעיר שבהם, נחבא ונמלט.',
        'King of Shechem', 'Avimelech, Gideon’s son by his concubine in Shechem, persuaded the men of Shechem to make him king, and hired worthless men who killed Gideon’s seventy sons on one stone. Only Yotam, the youngest of them, hid and escaped.'),
      sec('משל יותם', 'יותם עמד על הר גריזים ונשא את משל העצים: הזית, התאנה והגפן סירבו למלוך, ורק האטד הסכים. אחרי שלוש שנים נפלה מחלוקת בין אבימלך לבעלי שכם, והוא החריב את העיר. כשצר על תבץ השליכה אישה פלח רכב על ראשו, והוא מת.',
        'Yotam’s Parable', 'Yotam stood on Mount Gerizim and told the parable of the trees: the olive, the fig and the vine refused to reign, and only the thornbush agreed. After three years strife broke out between Avimelech and the men of Shechem, and he destroyed the city. While besieging Tevetz a woman threw a millstone on his head, and he died.'),
    ],
  }),

  judge({
    slug: 'tola-ben-puah', name: L('תולע בן פואה', 'Tola son of Puah'),
    offices: [judged(2719, 2742)],
    summary: L('שופט משבט יששכר, ששפט את ישראל עשרים ושלוש שנה.', 'A judge from Yissachar who judged Israel for twenty-three years.'),
    rel: [nm('father', 'פואה בן דודו', 'Puah son of Dodo'), to('related', 'shevet-yissachar')],
    sources: [L('שופטים י, א – ב', 'Judges 10:1–2')],
    spots: biblical(35.15, 31.87),
    sections: [
      sec('אחרי אבימלך', 'אחרי אבימלך קם תולע בן פואה בן דודו, איש יששכר, "להושיע את ישראל". הוא ישב בשמיר שבהר אפרים, שפט את ישראל עשרים ושלוש שנה, ומת ונקבר בשמיר.',
        'After Avimelech', 'After Avimelech, Tola son of Puah son of Dodo, a man of Yissachar, arose "to save Israel". He lived in Shamir in the hill country of Ephraim, judged Israel twenty-three years, and died and was buried in Shamir.'),
    ],
  }),

  judge({
    slug: 'yair-hagiladi', name: L('יאיר הגלעדי', 'Yair the Giladite'),
    offices: [judged(2742, 2764)],
    summary: L('שופט מן הגלעד, שלו שלושים בנים ושלושים ערים.', 'A judge from Gilad, who had thirty sons and thirty cities.'),
    rel: [to('related', 'shevet-menashe')],
    sources: [L('שופטים י, ג – ה', 'Judges 10:3–5'), L('במדבר לב, מא', 'Numbers 32:41')],
    spots: biblical(31.99, 32.09),
    sections: [
      sec('חוות יאיר', 'אחרי תולע קם יאיר הגלעדי ושפט את ישראל עשרים ושתיים שנה. "ויהי לו שלשים בנים רכבים על שלשים עירים, ושלשים עירים להם", שנקראו "חוות יאיר" בארץ הגלעד. יאיר מת ונקבר בקמון.',
        'The Villages of Yair', 'After Tola, Yair the Giladite arose and judged Israel twenty-two years. "He had thirty sons who rode on thirty donkeys, and they had thirty cities", which were called "the villages of Yair" in the land of Gilad. Yair died and was buried in Kamon.'),
    ],
  }),

  judge({
    slug: 'yiftach', name: L('יפתח הגלעדי', 'Yiftach the Giladite (Jephthah)'),
    offices: [judged(2781, 2787)],
    summary: L('שופט מן הגלעד, שניצח את בני עמון ונדר את נדרו המפורסם.', 'A judge from Gilad who defeated Ammon and made his famous vow.'),
    rel: [nm('father', 'גלעד', 'Gilad'), to('related', 'shevet-menashe')],
    sources: [L('שופטים יא – יב, ז', 'Judges 11 – 12:7'), L('ראש השנה כה ע״ב', 'Rosh Hashanah 25b'), L('בראשית רבה ס, ג', 'Bereishit Rabbah 60:3')],
    spots: biblical(28.52, 32.14),
    sections: [
      sec('מארץ טוב לראש הגלעד', 'יפתח, גבור חיל, גורש מבית אביו בידי אחיו וישב בארץ טוב. כשבני עמון נלחמו בישראל, באו זקני גלעד וביקשו ממנו להיות להם לראש. יפתח שלח למלך עמון ופירט את תולדות הארץ, ואמר שישראל יושבים בה כבר שלוש מאות שנה.',
        'From the Land of Tov to Head of Gilad', 'Yiftach, a mighty man of valor, was driven from his father’s house by his brothers and lived in the land of Tov. When Ammon made war on Israel, the elders of Gilad came and asked him to be their head. Yiftach sent a message to the king of Ammon laying out the history of the land, saying that Israel had dwelt there for three hundred years.'),
      sec('הנדר', 'לפני המלחמה נדר יפתח שהיוצא הראשון מדלתות ביתו לקראתו יהיה לה׳. ה׳ נתן את בני עמון בידו, ובשובו יצאה לקראתו בתו היחידה בתופים ובמחולות. חז״ל מלמדים שאילו פנה לפנחס הכהן הגדול היה הנדר מותר, אך כל אחד מהם חיכה שהשני יבוא אליו (בראשית רבה ס, ג). אחר כך נלחם יפתח בבני אפרים, שזוהו באמירת "סבולת". הוא שפט את ישראל שש שנים, וחז״ל אומרים "יפתח בדורו כשמואל בדורו" (ראש השנה כה ע״ב).',
        'The Vow', 'Before the battle Yiftach vowed that whatever first came out of his house to meet him would be Hashem’s. Hashem gave Ammon into his hand, and on his return his only daughter came out to meet him with drums and dancing. Chazal teach that had he gone to Pinchas the High Priest the vow could have been annulled, but each waited for the other to come to him (Bereishit Rabbah 60:3). Afterwards Yiftach fought the men of Ephraim, who were identified by saying "Sibbolet". He judged Israel six years, and Chazal say "Yiftach in his generation was like Shmuel in his generation" (Rosh Hashanah 25b).'),
    ],
  }),

  judge({
    slug: 'ivtzan-boaz', name: L('אבצן (בועז)', 'Ivtzan (Boaz)'),
    offices: [judged(2787, 2794)],
    summary: L('שופט מבית לחם, שלפי חז״ל הוא בועז, בעלה של רות.', 'A judge from Beit Lechem who, according to Chazal, is Boaz, the husband of Ruth.'),
    rel: [nm('father', 'שלמון', 'Salmon'), nm('spouse', 'רות המואביה', 'Ruth the Moabite'), nm('child', 'עובד', 'Oved'), to('related', 'shevet-yehuda'), to('related', 'david')],
    sources: [L('שופטים יב, ח – י', 'Judges 12:8–10'), L('מגילת רות', 'The Book of Ruth'), L('בבא בתרא צא ע״א', 'Bava Batra 91a')],
    spots: biblical(62.08, 32.41),
    sections: [
      sec('אבצן הוא בועז', 'בספר שופטים נאמר: "וישפט אחריו את ישראל אבצן מבית לחם, ויהי לו שלשים בנים ושלשים בנות". חז״ל מלמדים ש"אבצן זה בועז" (בבא בתרא צא ע״א). הוא שפט את ישראל שבע שנים.',
        'Ivtzan Is Boaz', 'The Book of Judges says: "After him Ivtzan of Beit Lechem judged Israel; he had thirty sons and thirty daughters". Chazal teach that "Ivtzan is Boaz" (Bava Batra 91a). He judged Israel seven years.'),
      sec('בועז ורות', 'בועז, משבט יהודה, נהג בחסד ברות המואביה שבאה ללקט בשדהו, ופדה את נחלת אלימלך. הוא נשא את רות לאישה, ונולד להם עובד, אבי ישי, אבי דוד המלך.',
        'Boaz and Ruth', 'Boaz, of the tribe of Yehudah, showed kindness to Ruth the Moabite, who came to glean in his field, and redeemed the inheritance of Elimelech. He married Ruth, and they had Oved, the father of Yishai, the father of King David.'),
    ],
  }),

  judge({
    slug: 'elon-hazevuloni', name: L('אילון הזבולוני', 'Elon the Zevulunite'),
    offices: [judged(2794, 2804)],
    summary: L('שופט משבט זבולון, ששפט את ישראל עשר שנים.', 'A judge from Zevulun who judged Israel for ten years.'),
    rel: [to('related', 'shevet-zevulun')],
    sources: [L('שופטים יב, יא – יב', 'Judges 12:11–12')],
    spots: biblical(25.17, 32.42),
    sections: [
      sec('השופט מזבולון', 'אחרי אבצן שפט את ישראל אילון הזבולוני עשר שנים. הוא מת ונקבר באילון בארץ זבולון.',
        'The Judge from Zevulun', 'After Ivtzan, Elon the Zevulunite judged Israel for ten years. He died and was buried in Ayalon in the land of Zevulun.'),
    ],
  }),

  judge({
    slug: 'avdon-ben-hillel', name: L('עבדון בן הלל', 'Avdon son of Hillel'),
    offices: [judged(2804, 2812)],
    summary: L('שופט מפרעתון שבאפרים, ששפט את ישראל שמונה שנים.', 'A judge from Pirathon in Ephraim who judged Israel for eight years.'),
    rel: [nm('father', 'הלל הפרעתוני', 'Hillel the Pirathonite'), to('related', 'shevet-efraim')],
    sources: [L('שופטים יב, יג – טו', 'Judges 12:13–15')],
    spots: biblical(21.87, 32.62),
    sections: [
      sec('ארבעים בנים', 'אחרי אילון שפט את ישראל עבדון בן הלל הפרעתוני, "ויהי לו ארבעים בנים ושלשים בני בנים רכבים על שבעים עירים". הוא שפט שמונה שנים, ונקבר בפרעתון בארץ אפרים.',
        'Forty Sons', 'After Elon, Avdon son of Hillel the Pirathonite judged Israel, "and he had forty sons and thirty grandsons who rode on seventy donkeys". He judged for eight years and was buried in Pirathon in the land of Ephraim.'),
    ],
  }),

  judge({
    slug: 'shimshon', name: L('שמשון', 'Shimshon (Samson)'),
    roles: [L('שופט', 'Judge'), L('נזיר', 'Nazirite')],
    offices: [judged(null, null, 'עשרים שנה, בימי פלשתים (שופטים טו, כ)', 'Twenty years, in the days of the Philistines (Judges 15:20)')],
    summary: L('הנזיר הגיבור משבט דן, שנלחם בפלשתים לבדו.', 'The mighty Nazirite from Dan, who fought the Philistines alone.'),
    rel: [nm('father', 'מנוח', 'Manoach'), nm('mother', 'צללפונית', 'Tzlelponit'), nm('spouse', 'דלילה', 'Delilah'), to('related', 'shevet-dan')],
    sources: [L('שופטים יג – טז', 'Judges 13–16'), L('בבא בתרא צא ע״א', 'Bava Batra 91a'), L('סוטה ט ע״ב – י ע״א', 'Sotah 9b–10a')],
    spots: biblical(18.43, 32.76),
    sections: [
      sec('נזיר מן הבטן', 'מלאך ה׳ נגלה לאשת מנוח משבט דן, שהייתה עקרה, ובישר לה על בן ש"נזיר אלהים יהיה הנער מן הבטן, והוא יחל להושיע את ישראל מיד פלשתים". חז״ל מלמדים ששם אמו היה צללפונית (בבא בתרא צא ע״א).',
        'A Nazirite from the Womb', 'An angel of Hashem appeared to the wife of Manoach of the tribe of Dan, who was barren, and told her of a son who "shall be a Nazirite to God from the womb, and he shall begin to save Israel from the hand of the Philistines". Chazal teach that his mother’s name was Tzlelponit (Bava Batra 91a).'),
      sec('גבורתו', 'רוח ה׳ פעמה בשמשון: הוא שיסע אריה בידיו, שילח שועלים עם לפידים בשדות הפלשתים, והכה בלחי החמור אלף איש. הוא שפט את ישראל עשרים שנה.',
        'His Strength', 'The spirit of Hashem moved Shimshon: he tore apart a lion with his bare hands, sent foxes with torches into the Philistines’ fields, and struck down a thousand men with the jawbone of a donkey. He judged Israel twenty years.'),
      sec('דלילה ומותו', 'דלילה פיתתה אותו לגלות את סוד כוחו, ושערו גולח. הפלשתים ניקרו את עיניו והעבידוהו בבית האסורים בעזה. בחגם לדגון התפלל שמשון "זכרני נא וחזקני נא אך הפעם", דחף את שני העמודים, והבית נפל על הפלשתים ועליו.',
        'Delilah and His Death', 'Delilah enticed him into revealing the secret of his strength, and his hair was shaved. The Philistines gouged out his eyes and made him grind in the prison in Gaza. At their festival to Dagon Shimshon prayed "Remember me, I pray, and strengthen me just this once", pushed the two pillars, and the house fell on the Philistines and on him.'),
    ],
  }),

  judge({
    slug: 'eli-hakohen', name: L('עלי הכהן', 'Eli the Kohen'),
    categories: ['judges', 'kohanim-gedolim'],
    roles: [L('כהן גדול', 'High Priest'), L('שופט', 'Judge')],
    offices: [judged(2831, 2871)],
    summary: L('כהן גדול ושופט במשכן שילה, רבו של שמואל הנביא.', 'High Priest and judge at the Mishkan of Shiloh, teacher of Shmuel the Prophet.'),
    rel: [nm('child', 'חפני', 'Chofni'), nm('child', 'פינחס', 'Pinchas'), to('related', 'mishkan-shilo'), to('related', 'chana-haneviah'), to('related', 'shevet-levi')],
    sources: [L('שמואל א׳ א – ד', 'I Samuel 1–4'), L('ברכות לא ע״ב', 'Berachot 31b'), L('זבחים קיח ע״ב', 'Zevachim 118b')],
    spots: biblical(69.7, 33.72),
    sections: [
      sec('הכהן בשילה', 'עלי, מצאצאי איתמר בן אהרן, שימש ככהן גדול במשכן שילה ושפט את ישראל ארבעים שנה. כשראה את חנה מתפללת בשפתיים נעות חשב שהיא שיכורה, וכשהבין את צערה בירך אותה: "ואלהי ישראל יתן את שלתך". חז״ל למדו מתפילתה הלכות רבות בתפילה (ברכות לא ע״א – ע״ב).',
        'The Kohen at Shiloh', 'Eli, a descendant of Itamar son of Aharon, served as High Priest at the Mishkan of Shiloh and judged Israel forty years. When he saw Channah praying with moving lips he thought she was drunk, and when he understood her distress he blessed her: "May the God of Israel grant your request". Chazal learned many laws of prayer from her prayer (Berachot 31a–b).'),
      sec('רבו של שמואל', 'שמואל גדל אצל עלי בשילה, ועלי לימדו לענות לקול ה׳: "דבר ה׳ כי שמע עבדך". בניו חפני ופינחס חטאו בעבודת המשכן, ונביא בא להודיע לעלי שהכהונה תיטל מביתו.',
        'Shmuel’s Teacher', 'Shmuel grew up with Eli at Shiloh, and Eli taught him to answer the call of Hashem: "Speak, Hashem, for Your servant is listening". His sons Chofni and Pinchas sinned in the service of the Mishkan, and a prophet came to tell Eli that the priesthood would be taken from his house.'),
      sec('מותו', 'במלחמה באבן העזר נשבה ארון ה׳ בידי הפלשתים, וחפני ופינחס נהרגו. כששמע עלי, בן תשעים ושמונה, על לקיחת הארון, נפל מן הכסא ומת. באותו זמן חרב משכן שילה, ועבר לנוב (זבחים קיח ע״ב).',
        'His Death', 'In the battle at Even HaEzer the Ark of Hashem was captured by the Philistines, and Chofni and Pinchas were killed. When Eli, ninety-eight years old, heard that the Ark had been taken, he fell from his seat and died. At that time the Mishkan of Shiloh was destroyed, and it moved to Nov (Zevachim 118b).'),
    ],
  }),
];

