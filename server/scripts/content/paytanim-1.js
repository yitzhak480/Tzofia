// The classical paytanim of the Land of Israel on the Talmud tree – from Yose
// ben Yose to Yochanan HaKohen – and Shmuel ben Adaya, the Jewish poet of
// Arabia. Each is in "the classical paytanim" (in the period of the Savoraim)
// and in the main list of all the paytanim.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const CATS = ['paytanim-classiim', 'paytanim', 'paytanei-eretz-yisrael'];
const P = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', roles: [L('פייטן', 'Paytan')], cats: CATS, ...e, color: row[1] };
};
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const FLEISCHER = L('עזרא פליישר, שירת הקודש העברית בימי הביניים', 'Ezra Fleischer, Hebrew Liturgical Poetry in the Middle Ages');
const GENIZA = L('גניזת קהיר', 'The Cairo Genizah');
// what a kedushta is, said once on the pages that need it
const KEDUSHTA = 'קדושתא היא שרשרת פיוטים שנאמרה בחזרת הש״ץ של שבת או חג, ושיאה בקדושה.';
const KEDUSHTA_EN = 'A kedushta is a chain of piyyutim said in the cantor’s repetition of the Amidah on Shabbat or a festival, reaching its height at the Kedushah.';

module.exports = [
  P({
    slug: 'yose-ben-yose', spot2: 'יוסי בן יוסי',
    name: L('יוסי בן יוסי', 'Yose ben Yose'),
    summary: L('הפייטן הקדום ביותר הידוע בשמו, בעל ה"תקיעתות" לראש השנה וסדר העבודה ליום הכיפורים.', 'The earliest paytan known by name, author of the "Teki’atot" for Rosh Hashanah and an Avodah for Yom Kippur.'),
    rel: [], sources: [L('אהרן מירסקי, פיוטי יוסי בן יוסי', 'Aharon Mirsky, The Piyyutim of Yose ben Yose'), FLEISCHER],
    sections: [
      sec('הפייטן הראשון', 'יוסי בן יוסי חי בארץ ישראל, כנראה במאה החמישית או השישית, והוא הפייטן הקדום ביותר – והיחיד מתקופתו – שאנו יודעים את שמו. פיוטיו כתובים בשפה עשירה אך פשוטה, במשקל אך בלי חריזה, ויש בהם רמזים קדומים למדרשי חז״ל. רוב יצירתו אבדה.', 'The First Paytan', 'Yose ben Yose lived in the Land of Israel, probably in the fifth or sixth century, and he is the earliest paytan – and the only one of his period – whose name we know. His piyyutim are written in rich yet simple language, in metre but without rhyme, and contain early allusions to the Midrashim of the Sages. Most of his work is lost.'),
      sec('התקיעתות', 'המפורסמים בפיוטיו הם ה"תקיעתות" לראש השנה – פיוטים למלכויות, זכרונות ושופרות. הם נכנסו לסידור רב סעדיה גאון, הגיעו לאשכנז ונאמרו ביום השני של ראש השנה, ופייטנים מאוחרים – ובהם רבי אלעזר בירבי קליר ורבי שלמה אבן גבירול – חיקו את מבנם. הוא חיבר גם סדרי עבודה ליום הכיפורים.', 'The Teki’atot', 'The most famous of his piyyutim are the "Teki’atot" for Rosh Hashanah – piyyutim for Malchuyot, Zichronot and Shofarot. They entered the prayer book of Rav Saadia Gaon, reached Ashkenaz and were said on the second day of Rosh Hashanah, and later paytanim – among them Rabbi Elazar birabbi Kallir and Rabbi Shlomo ibn Gabirol – imitated their structure. He also wrote Avodah poems for Yom Kippur.'),
      sec('היתום והכהן הגדול', 'יהודי אירופה כינו אותו "יוסי בן יוסי היתום": מאחר שלא היה נהוג לקרוא לבן בשם אביו בחייו, שיערו שאביו נפטר לפני שנולד. בחלק מן המקורות הוא נקרא גם "כהן גדול".', 'The Orphan and the High Priest', 'The Jews of Europe called him "Yose ben Yose the orphan": since it was not the custom to name a son after his living father, they supposed that his father had died before he was born. In some sources he is also called "High Priest".'),
    ],
  }),
  P({
    slug: 'yehuda-hapaytan', spot2: 'יהודה',
    name: L('יהודה (הפייטן)', 'Yehudah (the paytan)'),
    summary: L('מן הפייטנים הקדומים של ארץ ישראל, הידוע רק בשמו.', 'One of the early paytanim of the Land of Israel, known only by his name.'),
    rel: [], sources: [GENIZA, FLEISCHER],
    sections: one('יהודה', 'יהודה היה מן הפייטנים הקדומים של ארץ ישראל, בדורות שבין יוסי בן יוסי לינאי. אנו מכירים אותו רק משמו, שחתם בראשי השורות של פיוטים מעטים שנמצאו בגניזת קהיר, ואין אנו יודעים עליו דבר מעבר לכך.', 'Yehudah', 'Yehudah was one of the early paytanim of the Land of Israel, in the generations between Yose ben Yose and Yannai. We know him only by his name, which he signed at the heads of the lines of a few piyyutim found in the Cairo Genizah, and we know nothing more about him.'),
  }),
  P({
    slug: 'yannai-hapaytan', spot2: 'יניי (ינאי)',
    name: L('יניי (ינאי)', 'Yannai'),
    summary: L('גדול הפייטנים הקלאסיים, שחיבר קדושתא לכל פרשה בתורה והכניס את החריזה לשירה העברית.', 'The great classical paytan, who wrote a kedushta for every Torah portion and brought rhyme into Hebrew poetry.'),
    rel: [], sources: [L('מנחם זולאי, פיוטי ינאי', 'Menachem Zulay, The Piyyutim of Yannai'), L('צבי מאיר רבינוביץ, מחזור פיוטי רבי יניי', 'Zvi Meir Rabinovitz, The Liturgical Poems of Rabbi Yannai'), GENIZA],
    sections: [
      sec('יניי', 'יניי חי בגליל, כנראה במאה החמישית או השישית, תחת שלטון ביזנטיון. הוא חיבר מחזור של קדושתאות לכל פרשות התורה, לפי מחזור הקריאה התלת־שנתי של ארץ ישראל, ופיוטים רבים לחגים – יותר מאלף פיוטים. ' + KEDUSHTA + ' הוא נחשב למי שהכניס את החריזה לשירה העברית, והוא הפייטן הקדום ביותר שחתם את שמו בראשי החרוזים. רוב יצירתו נשכחה, עד שנמצא בגניזת קהיר כתב יד גדול של פיוטיו – שנכתב על גבי כתב יד מחוק של תרגום עקילס לתורה.', 'Yannai', 'Yannai lived in the Galilee, probably in the fifth or sixth century, under Byzantine rule. He wrote a cycle of kedushtaot for all the portions of the Torah, following the three-year reading cycle of the Land of Israel, and many piyyutim for the festivals – more than a thousand piyyutim. ' + KEDUSHTA_EN + ' He is considered the one who brought rhyme into Hebrew poetry, and he is the earliest paytan who signed his name at the heads of the verses. Most of his work was forgotten, until a large manuscript of his piyyutim was found in the Cairo Genizah – written over an erased manuscript of Aquila’s translation of the Torah.'),
      sec('אז רוב ניסים', 'מכל פיוטיו נשאר בתפילה רק מעט: הפיוט "אז רוב ניסים הפלאת בלילה", שאומרים בסוף ליל הסדר בהגדה של פסח ("ויהי בחצי הלילה"), הוא חלק מן הקדושתא שלו "אוני פטרי רחמתים", שנאמרה בשבת הגדול.', 'Az Rov Nissim', 'Of all his piyyutim only a little remained in the prayers: the piyyut "Az rov nissim hifleta balaylah", said at the end of the Seder night in the Pesach Haggadah ("Vayehi bachatzi halaylah"), is part of his kedushta "Oni petrei rechamatayim", said on Shabbat HaGadol.'),
      sec('האגדה על יניי והקליר', 'רבי אפרים מבון מביא אגדה, שהקליר היה תלמידו של יניי, ויניי קינא בו והמית אותו בעקרב ששם בנעלו – אבל רבי אפרים עצמו מפקפק בה, והחוקרים דוחים אותה, משום שהקליר חי כנראה זמן רב אחרי יניי.', 'The Legend of Yannai and Kallir', 'Rabbi Ephraim of Bonn brings a legend that Kallir was Yannai’s student, and Yannai was jealous of him and killed him with a scorpion he put in his shoe – but Rabbi Ephraim himself doubts it, and scholars reject it, since Kallir apparently lived long after Yannai.'),
      sec('שמעון בן מגס', 'באילן שלנו יורד מיניי חץ אל שמעון בן מגס, בסימן שאלה: יוסף יהלום ראה בשמעון בן מגס את תלמידו של יניי, ואילו מנחם זולאי ראה בו את "בן זוגו" – בן דורו או מאוחר לו מעט – ולכן הקשר אינו ודאי.', 'Shimon ben Megas', 'On our tree an arrow goes down from Yannai to Shimon ben Megas, with a question mark: Yosef Yahalom saw Shimon ben Megas as Yannai’s student, while Menachem Zulay saw him as his "companion" – his contemporary or a little later – so the connection is not certain.'),
    ],
  }),
  P({
    slug: 'shimon-ben-megas', spot2: 'שמעון בן מגס',
    name: L('שמעון בן מגס', 'Shimon ben Megas'),
    summary: L('פייטן כהן, שחיבר כיניי קדושתאות לפרשות התורה.', 'A paytan and kohen who, like Yannai, wrote kedushtaot for the Torah portions.'),
    rel: [maybe('teacher', 'yannai-hapaytan')], sources: [L('יוסף יהלום, פיוטי שמעון בר מגס', 'Yosef Yahalom, The Piyyutim of Shimon bar Megas'), GENIZA],
    sections: [
      sec('שמעון בן מגס הכהן', 'שמעון בן מגס הכהן חי בארץ ישראל, כנראה במאה השישית או השביעית. הוא הפייטן היחיד מלבד יניי שאנו יודעים שחיבר מחזור קדושתאות לכל פרשות התורה, וסגנונו קרוב מאוד לשל יניי. מיצירתו הגדולה נשארו רק שרידים בגניזת קהיר – כמאתיים פיוטים שפרסם יוסף יהלום.', 'Shimon ben Megas HaKohen', 'Shimon ben Megas HaKohen lived in the Land of Israel, probably in the sixth or seventh century. He is the only paytan besides Yannai whom we know to have written a cycle of kedushtaot for all the portions of the Torah, and his style is very close to Yannai’s. Of his great work only remnants are left in the Cairo Genizah – some two hundred piyyutim published by Yosef Yahalom.'),
      sec('סימן השאלה', 'באילן שלנו יורד אליו חץ מיניי בסימן שאלה: יוסף יהלום ראה בו את תלמידו של יניי, משום שפיוטיו מקבילים לפיוטי יניי ומשתמשים בהם, ואילו מנחם זולאי ראה בו את "בן זוגו" – בן דורו של יניי או מאוחר לו מעט.', 'The Question Mark', 'On our tree an arrow comes down to him from Yannai with a question mark: Yosef Yahalom saw him as Yannai’s student, since his piyyutim parallel Yannai’s and make use of them, while Menachem Zulay saw him as his "companion" – Yannai’s contemporary or a little later.'),
    ],
  }),
  P({
    slug: 'haduthahu', spot2: 'הדותהו',
    name: L('הדותהו', 'Haduthahu'),
    summary: L('פייטן שחיבר קדושתא לכל אחת מעשרים וארבע משמרות הכהונה.', 'A paytan who wrote a kedushta for each of the twenty-four priestly courses.'),
    rel: [], sources: [GENIZA, FLEISCHER],
    sections: one('הדותהו', 'הדותהו חי בארץ ישראל במאה השישית, תחת שלטון ביזנטיון – לפי עזרא פליישר בין יניי לקליר. הוא חיבר מחזור של עשרים וארבע קדושתאות, אחת לכל משמרת ממשמרות הכהונה, ששמותיהן ומקומות מושבן נזכרו בבתי הכנסת שבת אחר שבת, לזכר המקדש. ' + KEDUSHTA + ' שרידים ממנו נמצאו בגניזת קהיר, ובהם חתם את שמו "הדותהו".', 'Haduthahu', 'Haduthahu lived in the Land of Israel in the sixth century, under Byzantine rule – by Ezra Fleischer, between Yannai and Kallir. He wrote a cycle of twenty-four kedushtaot, one for each of the priestly courses, whose names and places of settlement were recalled in the synagogues Shabbat after Shabbat, in memory of the Temple. ' + KEDUSHTA_EN + ' Remnants of it were found in the Cairo Genizah, and in them he signed his name "Haduthahu".'),
  }),
  P({
    slug: 'rabbi-elazar-birabbi-kallir', spot2: 'רבי אלעזר בירבי קליר',
    name: L('רבי אלעזר בירבי קליר', 'Rabbi Elazar birabbi Kallir'),
    summary: L('הפייטן הגדול והפורה מכולם, שפיוטיו – ובהם קינות תשעה באב – נאמרים עד היום.', 'The greatest and most prolific of the paytanim, whose piyyutim – among them the kinot of Tishah B’Av – are said to this day.'),
    rel: [], sources: [L('תוספות, חגיגה יג ע״א', 'Tosafot, Chagigah 13a'), L('שו״ת הרשב״א', 'Responsa of the Rashba'), L('שער הכוונות לרבי חיים ויטאל', 'Sha’ar HaKavanot of Rabbi Chaim Vital'), L('מור וקציעה ליעב״ץ, סימן קיב', 'Mor uKetziah of the Ya’avetz, siman 112'), L('מחזיק ברכה לחיד״א, סימן קיב', 'Machazik Berachah of the Chida, siman 112'), L('שולמית אליצור, רבי אלעזר בירבי קליר', 'Shulamit Elizur, Rabbi Elazar birabbi Kallir'), FLEISCHER],
    sections: [
      sec('הקליר', 'רבי אלעזר בירבי קליר חי בארץ ישראל, כנראה במאה השישית או השביעית, בסוף התקופה הביזנטית. בחלק מפיוטיו חתם גם את שם עירו, "קריית ספר", ויש המזהים אותה עם טבריה. הוא חיבר מספר עצום של פיוטים – קדושתאות, שבעתות ומספר רב מאוד של קינות לתשעה באב – ורבים מהם נאמרים עד היום בבתי הכנסת, בעיקר במנהג אשכנז.', 'Kallir', 'Rabbi Elazar birabbi Kallir lived in the Land of Israel, probably in the sixth or seventh century, at the end of the Byzantine period. In some of his piyyutim he also signed the name of his town, "Kiryat Sefer", which some identify with Tiberias. He wrote an enormous number of piyyutim – kedushtaot, shiv’atot and a very great number of kinot for Tishah B’Av – and many of them are said to this day in the synagogues, mostly in the Ashkenazi rite.'),
      sec('סגנונו', 'שירתו מלאה חריזה, צירופי אותיות, רמזים ומדרשים, ושפתה מורכבת – עברית מקראית ולשון חכמים, ארמית ומילים יווניות. היו שמתחו עליה ביקורת חריפה, כמו רבי אברהם אבן עזרא, והיו שהעריצו אותה.', 'His Style', 'His poetry is full of rhyme, letter-play, allusions and midrashim, and its language is complex – Biblical and Rabbinic Hebrew, Aramaic and Greek words. Some criticised it sharply, like Rabbi Avraham ibn Ezra, and some admired it.'),
      sec('מיהו הקליר?', 'על זהותו וזמנו של הקליר נחלקו הדעות. בתוספות (חגיגה יג ע״א), בשם רבינו תם, וכן ברא״ש, הוא מזוהה עם התנא רבי אלעזר ברבי שמעון בר יוחאי, שעליו נאמר במדרש שהיה "קרייא, ותנייא, ופייטן, ודרשן" (ויקרא רבה ל, א). בשו״ת הרשב״א מובא שיש אומרים שהוא רבי אלעזר בן ערך. רבי חיים ויטאל כתב בשער הכוונות ששמע בשם האר״י שהקליר שסידר את הקרובץ הוא רבי אלעזר ברבי שמעון – והוסיף שהוא עצמו לא שמע זאת מרבו. היעב״ץ (רבי יעקב עמדן, בספרו מור וקציעה, סימן קיב), ואחריו החיד״א (מחזיק ברכה, סימן קיב), פירשו שכוונת האר״י היא שהיה בקליר ניצוץ מנשמתו של רבי אלעזר ברבי שמעון – כלומר שהקליר היה פייטן מאוחר, ולא התנא עצמו. החוקרים מאחרים אותו לסוף התקופה הביזנטית, במאה השישית או השביעית, ועזרא פליישר אף מצא בקינותיו רמזים למאורעות השנים 629–634. אנו הולכים באילן שלנו בדעת היעב״ץ: הקליר הוא פייטן מאוחר, שהיה בו ניצוץ מנשמת רבי אלעזר ברבי שמעון.', 'Who Was Kallir?', 'Opinions differ on Kallir’s identity and time. In Tosafot (Chagigah 13a), in the name of Rabbeinu Tam, and also in the Rosh, he is identified with the Tanna Rabbi Elazar son of Rabbi Shimon bar Yochai, of whom the Midrash says that he was "a reader of Scripture, a teacher of Mishnah, a paytan and a preacher" (Vayikra Rabbah 30:1). The responsa of the Rashba bring that some say he is Rabbi Elazar ben Arach. Rabbi Chaim Vital wrote in Sha’ar HaKavanot that he heard in the name of the Ari that the Kallir who arranged the kerovetz is Rabbi Elazar son of Rabbi Shimon – and added that he himself did not hear this from his teacher. The Ya’avetz (Rabbi Yaakov Emden, in his book Mor uKetziah, siman 112), and after him the Chida (Machazik Berachah, siman 112), explained that the Ari meant that there was in Kallir a spark of the soul of Rabbi Elazar son of Rabbi Shimon – that is, that Kallir was a later paytan, and not the Tanna himself. Scholars place him at the end of the Byzantine period, in the sixth or seventh century, and Ezra Fleischer even found in his kinot allusions to the events of the years 629–634. On our tree we follow the opinion of the Ya’avetz: Kallir is a later paytan, in whom there was a spark of the soul of Rabbi Elazar son of Rabbi Shimon.'),
      sec('האגדה על יניי והקליר', 'רבי אפרים מבון מביא אגדה, שהקליר היה תלמידו של יניי, ויניי קינא בו והמית אותו – אבל רבי אפרים עצמו מפקפק בה, והחוקרים דוחים אותה.', 'The Legend of Yannai and Kallir', 'Rabbi Ephraim of Bonn brings a legend that Kallir was Yannai’s student, and Yannai was jealous of him and killed him – but Rabbi Ephraim himself doubts it, and scholars reject it.'),
    ],
  }),
  P({
    slug: 'yosef-birabbi-nissan', spot2: 'יוסף ברבי ניסן',
    name: L('יוסף ברבי ניסן', 'Yosef birabbi Nissan'),
    summary: L('פייטן מ"נוה" שבגולן, שלשונו קשה ומלאה חידות.', 'A paytan from "Naveh" in the Golan, whose language is hard and full of riddles.'),
    rel: [], sources: [GENIZA, FLEISCHER],
    sections: one('יוסף ברבי ניסן', 'יוסף ברבי ניסן חי בארץ ישראל בתקופת הפייטנים הקלאסיים, כנראה במאה השביעית או השמינית, וסגנונו מושפע מאוד מיניי ומהקליר. הוא חתם את שמו "יוסף ברבי ניסן משוה קריתים", ומקובל לזהות את עירו עם נוה שבגולן. בין פיוטיו קדושתא לשביעי של פסח ושבעתא לתפילת טל. לשונו קשה ונוקשה, ויש הסוברים שכתב כך בכוונה, בדרך של חידה, כדי לאתגר את שומעיו.', 'Yosef birabbi Nissan', 'Yosef birabbi Nissan lived in the Land of Israel in the period of the classical paytanim, probably in the seventh or eighth century, and his style is much influenced by Yannai and Kallir. He signed his name "Yosef birabbi Nissan of Shaveh Kiryatayim", and his town is usually identified with Naveh in the Golan. Among his piyyutim are a kedushta for the seventh day of Pesach and a shiv’ata for the prayer for dew. His language is hard and harsh, and some hold that he wrote so on purpose, as a riddle, to challenge his listeners.'),
  }),
  P({
    slug: 'rabbi-yehoshua-hakohen-hapaytan', spot2: 'רבי יהושע הכהן',
    name: L('רבי יהושע הכהן', 'Rabbi Yehoshua HaKohen'),
    summary: L('פייטן כהן, שיש המשערים שהיה אביו של יוחנן הכהן.', 'A paytan and kohen, who some suppose was the father of Yochanan HaKohen.'),
    rel: [], sources: [GENIZA, FLEISCHER],
    sections: [
      sec('רבי יהושע הכהן', 'רבי יהושע הכהן היה פייטן בתקופת הפייטנים הקלאסיים בארץ ישראל, וכמה מפיוטיו נמצאו בגניזת קהיר.', 'Rabbi Yehoshua HaKohen', 'Rabbi Yehoshua HaKohen was a paytan in the period of the classical paytanim in the Land of Israel, and some of his piyyutim were found in the Cairo Genizah.'),
      sec('סימן השאלה', 'הפייטן יוחנן הכהן חתם את עצמו "בירבי יהושע" – בנו של יהושע, ויש המשערים שאביו הוא רבי יהושע הכהן הפייטן. זו השערה בלבד, ולכן באילן שלנו יורד ממנו הקו אל יוחנן הכהן בסימן שאלה.', 'The Question Mark', 'The paytan Yochanan HaKohen signed himself "birabbi Yehoshua" – the son of Yehoshua, and some suppose that his father is Rabbi Yehoshua HaKohen the paytan. This is only a guess, so on our tree the line from him to Yochanan HaKohen has a question mark.'),
    ],
  }),
  P({
    slug: 'yochanan-hakohen-birabbi-yehoshua', spot2: 'יוחנן הכהן ברבי יהושע',
    name: L('יוחנן הכהן ברבי יהושע', 'Yochanan HaKohen birabbi Yehoshua'),
    summary: L('פייטן כהן, שפיוטיו הגיעו לאיטליה ולאשכנז.', 'A paytan and kohen, whose piyyutim reached Italy and Ashkenaz.'),
    rel: [maybe('father', 'rabbi-yehoshua-hakohen-hapaytan')], sources: [L('נחום ויסנשטרן, פיוטי יוחנן הכהן ברבי יהושע', 'Nachum Weissenstern, The Piyyutim of Yochanan HaKohen birabbi Yehoshua'), GENIZA],
    sections: [
      sec('יוחנן הכהן', 'יוחנן הכהן ברבי יהושע חי בארץ ישראל, כנראה במאה השביעית או השמינית. בעבר חשבו שהיה מאירופה, אבל פיוטיו הרבים שנמצאו בגניזת קהיר חיזקו את הדעה שהיה ארץ־ישראלי. מחתימותיו למדים שהיה כהן ושאביו נקרא יהושע. הוא חיבר פיוטים רבים לחגים ולשבתות מיוחדות, וחלקם הגיעו לאירופה: קדושתא ליום הכיפורים עם סדר העבודה נדפסה במחזור בני רומא, קדושתא לשבועות נשמרה במנהג הרומניוטים, ופיוטו "סדר עולם" נאמר באשכנז.', 'Yochanan HaKohen', 'Yochanan HaKohen birabbi Yehoshua lived in the Land of Israel, probably in the seventh or eighth century. In the past he was thought to be from Europe, but his many piyyutim found in the Cairo Genizah strengthened the view that he was of the Land of Israel. From his signatures we learn that he was a kohen and that his father was called Yehoshua. He wrote many piyyutim for festivals and special Sabbaths, and some reached Europe: a kedushta for Yom Kippur with the Avodah was printed in the Roman mahzor, a kedushta for Shavuot was kept in the Romaniote rite, and his piyyut "Seder Olam" was said in Ashkenaz.'),
      sec('סימן השאלה', 'יש המשערים שאביו הוא רבי יהושע הכהן הפייטן. זו השערה בלבד, ולכן באילן שלנו יורד אליו הקו מרבי יהושע הכהן בסימן שאלה.', 'The Question Mark', 'Some suppose that his father is Rabbi Yehoshua HaKohen the paytan. This is only a guess, so on our tree the line coming down to him from Rabbi Yehoshua HaKohen has a question mark.'),
    ],
  }),
  P({
    slug: 'shmuel-ben-adaya', spot2: 'שמואל בן עדיה', cats: ['paytanim-classiim', 'paytanim'],
    name: L('שמואל בן עדיה', 'Shmuel ben Adaya (al-Samaw’al)'),
    summary: L('המשורר היהודי של ערב, שנאמנותו הייתה למשל.', 'The Jewish poet of Arabia, whose loyalty became a proverb.'),
    rel: [], life: [null, 4320], sources: [L('ויקיפדיה העברית, שמואל בן עדיה', 'Hebrew Wikipedia, Samaw’al ibn Adiya'), L('האנציקלופדיה היהודית (1906), Samuel ibn Adiya', 'The Jewish Encyclopedia (1906), Samuel ibn Adiya'), L('ספר השירים (כתאב אל־אע׳אני)', 'The Book of Songs (Kitab al-Aghani)')],
    sections: [
      sec('שמואל בן עדיה', 'שמואל בן עדיה (בערבית: אל־סמואל) היה משורר ולוחם יהודי בצפון חצי האי ערב במאה השישית, בעיר תימא. הוא בנה מבצר גדול בשם אל־אבלק, ששמר על משפחתו ועל אנשי העיר, ושבו הפקידו אנשים את אוצרותיהם. נאמר עליו שנפטר בסביבות שנת 4320 (560 למניינם). לו מיוחס ספר שירים בערבית, שחשוב לחקר הלשון והתרבות של יהודי ערב לפני האסלאם.', 'Shmuel ben Adaya', 'Shmuel ben Adaya (in Arabic: al-Samaw’al) was a Jewish poet and warrior in the north of the Arabian Peninsula in the sixth century, in the town of Tayma. He built a great fortress called al-Ablaq, which protected his family and the people of the town, and in which people deposited their treasures. He is said to have died around 4320 (560 CE). A book of poems in Arabic is attributed to him, important for the study of the language and culture of the Jews of Arabia before Islam.'),
      sec('נאמן כשמואל', 'המשורר הערבי אמרו אל־קיס הפקיד אצלו את שריונותיו. כשבא שליח של מלך אל־חירה ודרש אותם, שמואל סירב; האויב שם מצור על המבצר, תפס את בנו ואיים להרוג אותו אם לא ימסור את הפיקדון – ושמואל לא מסר, ובנו נהרג לעיניו. מאז אומרים בערבית "נאמן יותר משמואל". רבים רואים בסיפור אגדה המלמדת על נאמנות, יותר מאשר מאורע מתועד.', 'As Loyal as Shmuel', 'The Arab poet Imru’ al-Qais deposited his armour with him. When an envoy of the king of al-Hira came and demanded it, Shmuel refused; the enemy laid siege to the fortress, seized his son and threatened to kill him if he did not hand over the deposit – and Shmuel did not, and his son was killed before his eyes. Since then they say in Arabic "more loyal than al-Samaw’al". Many see the story as a legend teaching loyalty, more than a recorded event.'),
      sec('בתו ונכדתו', 'לפי המסורת, בתו של שמואל נישאה לחֻיַי בן אחטב, ראש שבט בני נצ׳יר היהודי בחג׳אז. כשכבש מוחמד את ח׳ייבר, נלקחה בתם צפייה – נכדתו של שמואל – בשבי, והייתה לאחת מנשותיו.', 'His Daughter and Granddaughter', 'By the tradition, Shmuel’s daughter married Huyayy ibn Akhtab, the head of the Jewish tribe of Banu Nadir in the Hijaz. When Muhammad conquered Khaybar, their daughter Safiyya – Shmuel’s granddaughter – was taken captive, and became one of his wives.'),
    ],
  }),
];
