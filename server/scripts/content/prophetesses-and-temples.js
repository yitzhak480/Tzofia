// The seven prophetesses (Megillah 14a) and the Mishkan / Temples.
// Positions follow the Biblical tree poster; the places of the Mishkan are
// marked on the poster's timeline on the right.
const { L, sec, article, biblical, to, nm } = require('./helpers');

const prophetess = (e) => ({ categories: ['prophetesses'], gender: 'female', ...e, content: article(e.sections) });
const temple = (e) => ({ categories: ['temples'], kind: 'other', roles: [L('מקום השראת השכינה', 'Place of the Divine Presence')], ...e, content: article(e.sections) });
const zevachim = L('זבחים קיח ע״ב', 'Zevachim 118b');

const prophetesses = [
  prophetess({
    slug: 'sarah-imenu', name: L('שרה אמנו', 'Sarah Imenu (Sarah)'),
    roles: [L('אם האומה', 'Mother of the nation'), L('נביאה', 'Prophetess')],
    life: [1958, 2085],
    summary: L('אשת אברהם אבינו ואם יצחק, שנבואתה הייתה גדולה מנבואת אברהם.', 'Wife of Avraham and mother of Yitzhak, whose prophecy was greater than Avraham’s.'),
    rel: [nm('father', 'הרן', 'Haran'), nm('spouse', 'אברהם אבינו', 'Avraham Avinu'), nm('child', 'יצחק אבינו', 'Yitzhak Avinu'), nm('sibling', 'לוט', 'Lot')],
    sources: [L('בראשית יא, כט – כג, כ', 'Genesis 11:29 – 23:20'), L('מגילה יד ע״א', 'Megillah 14a'), L('רש״י בראשית כא, יב', 'Rashi on Genesis 21:12')],
    spots: biblical(52.19, 16.37),
    sections: [
      sec('שרה היא יסכה', 'שרי, אשת אברהם, יצאה איתו מחרן לארץ כנען. חז״ל מלמדים ש"יסכה" הנזכרת בתורה היא שרה, ונקראה כך "שסוכה ברוח הקודש" (מגילה יד ע״א). היא אחת משבע הנביאות שקמו לישראל.',
        'Sarah Is Yiskah', 'Sarai, the wife of Avraham, went out with him from Charan to the land of Canaan. Chazal teach that "Yiskah" mentioned in the Torah is Sarah, so called "because she saw with divine inspiration" (Megillah 14a). She is one of the seven prophetesses of Israel.'),
      sec('שמע בקולה', 'שרה הייתה עקרה, ונתנה את הגר שפחתה לאברהם. בגיל תשעים נולד לה יצחק, כפי שבישרו המלאכים. כשביקשה לגרש את ישמעאל אמר ה׳ לאברהם: "כל אשר תאמר אליך שרה שמע בקלה", ורש״י מבאר מכאן שנבואתה הייתה גדולה משל אברהם.',
        'Listen to Her Voice', 'Sarah was barren, and gave Hagar her maidservant to Avraham. At ninety she gave birth to Yitzhak, as the angels had foretold. When she asked to send Yishmael away, Hashem told Avraham: "Whatever Sarah tells you, listen to her voice", and Rashi explains from this that her prophecy was greater than Avraham’s.'),
      sec('מערת המכפלה', 'שרה מתה בקרית ארבע היא חברון, בת מאה עשרים ושבע שנים. אברהם קנה את מערת המכפלה מעפרון החתי וקבר אותה שם.',
        'The Cave of Machpelah', 'Sarah died in Kiryat Arba, which is Hebron, at the age of one hundred and twenty-seven. Avraham bought the Cave of Machpelah from Efron the Hittite and buried her there.'),
    ],
  }),

  prophetess({
    slug: 'miriam-haneviah', name: L('מרים הנביאה', 'Miriam the Prophetess'),
    life: [null, 2487],
    summary: L('אחות משה ואהרן, שניבאה על לידת משה ושרה עם הנשים בים סוף.', 'Sister of Moshe and Aharon, who prophesied Moshe’s birth and sang with the women at the sea.'),
    rel: [nm('father', 'עמרם', 'Amram'), nm('mother', 'יוכבד', 'Yocheved'), nm('sibling', 'משה רבנו', 'Moshe Rabbeinu'), nm('sibling', 'אהרן הכהן', 'Aharon the Kohen'), nm('spouse', 'כלב בן יפונה', 'Calev son of Yefuneh'), nm('child', 'חור', 'Chur'), to('related', 'shevet-levi')],
    sources: [L('שמות ב, ד – ח; טו, כ – כא', 'Exodus 2:4–8; 15:20–21'), L('במדבר יב; כ, א – ב', 'Numbers 12; 20:1–2'), L('מגילה יד ע״א', 'Megillah 14a'), L('סוטה יא ע״ב – יב ע״א', 'Sotah 11b–12a'), L('תענית ט ע״א', 'Taanit 9a')],
    spots: biblical(81.16, 29.91),
    sections: [
      sec('הנבואה על משה', 'מרים, בת עמרם ויוכבד, ניבאה עוד לפני לידת משה: "עתידה אמי שתלד בן שיושיע את ישראל" (מגילה יד ע״א). כשהושם משה בתיבה ביאור, "ותתצב אחתו מרחק לדעה מה יעשה לו", והיא שהביאה את אמו להיניקו.',
        'The Prophecy about Moshe', 'Miriam, daughter of Amram and Yocheved, prophesied even before Moshe was born: "My mother is destined to bear a son who will save Israel" (Megillah 14a). When Moshe was placed in the basket in the river, "his sister stood at a distance to know what would be done to him", and she brought his mother to nurse him.'),
      sec('שירת הים', 'אחרי קריעת ים סוף "ותקח מרים הנביאה אחות אהרן את התף בידה, ותצאן כל הנשים אחריה בתפים ובמחלת". חז״ל מספרים שבזכותה ירדה הבאר שליוותה את ישראל במדבר (תענית ט ע״א), ושנישאה לכלב בן יפונה ומבניה היה חור (סוטה יא ע״ב).',
        'The Song at the Sea', 'After the splitting of the Sea, "Miriam the Prophetess, the sister of Aharon, took the drum in her hand, and all the women went out after her with drums and dancing". Chazal relate that in her merit the well accompanied Israel in the desert (Taanit 9a), and that she married Calev son of Yefuneh and Chur was among her sons (Sotah 11b).'),
      sec('מותה', 'כשדיברה מרים במשה נצטרעה, והעם חיכה לה שבעה ימים עד שנרפאה. היא מתה בקדש, בחודש הראשון של השנה הארבעים במדבר, ומיד "ולא היה מים לעדה", כי הבאר נסתלקה.',
        'Her Death', 'When Miriam spoke against Moshe she was struck with tzara’at, and the people waited seven days for her until she was healed. She died at Kadesh, in the first month of the fortieth year in the desert, and immediately "there was no water for the congregation", because the well was gone.'),
    ],
  }),

  prophetess({
    slug: 'chana-haneviah', name: L('חנה', 'Channah (Hannah)'),
    roles: [L('נביאה', 'Prophetess')],
    summary: L('אם שמואל הנביא, שתפילתה בשילה היא דוגמה לתפילה לדורות.', 'Mother of Shmuel the Prophet, whose prayer at Shiloh is a model of prayer for all generations.'),
    rel: [nm('spouse', 'אלקנה', 'Elkanah'), to('child', 'shmuel-hanavi'), to('related', 'eli-hakohen'), to('related', 'mishkan-shilo')],
    sources: [L('שמואל א׳ א – ב, כא', 'I Samuel 1 – 2:21'), L('מגילה יד ע״א', 'Megillah 14a'), L('ברכות לא ע״א – ע״ב', 'Berachot 31a–b')],
    spots: biblical(79.35, 33.86),
    sections: [
      sec('התפילה בשילה', 'חנה, אשת אלקנה מהר אפרים, הייתה עקרה. בעלייתם לשילה עמדה והתפללה בבכי, "רק שפתיה נעות וקולה לא ישמע", ונדרה שאם יינתן לה בן תיתנהו לה׳ כל ימי חייו. חז״ל למדו מתפילתה הלכות תפילה רבות, ובהן שהמתפלל צריך שיכוון את לבו ויתפלל בלחש (ברכות לא ע״א).',
        'The Prayer at Shiloh', 'Channah, the wife of Elkanah of the hill country of Ephraim, was barren. On their pilgrimage to Shiloh she stood and prayed in tears, "only her lips moved, and her voice was not heard", and vowed that if she were given a son she would give him to Hashem all the days of his life. Chazal learned many laws of prayer from hers, among them that one who prays must focus his heart and pray quietly (Berachot 31a).'),
      sec('שירת חנה', 'נולד לה שמואל, וכשנגמל הביאה אותו אל עלי הכהן בשילה. אז התפללה את שירת חנה: "עלץ לבי בה׳, רמה קרני בה׳". חז״ל מונים אותה בין שבע הנביאות, ולומדים מדבריה "רמה קרני" שניבאה על מלכות בית דוד (מגילה יד ע״א). אחר כך ילדה עוד שלושה בנים ושתי בנות.',
        'The Song of Channah', 'Shmuel was born to her, and when he was weaned she brought him to Eli the Kohen at Shiloh. Then she prayed the Song of Channah: "My heart rejoices in Hashem, my horn is exalted in Hashem". Chazal count her among the seven prophetesses, and learn from her words "my horn is exalted" that she prophesied the kingdom of the House of David (Megillah 14a). Afterwards she bore three more sons and two daughters.'),
    ],
  }),

  prophetess({
    slug: 'avigayil-haneviah', name: L('אביגיל הנביאה', 'Avigayil the Prophetess (Abigail)'),
    roles: [L('נביאה', 'Prophetess')],
    summary: L('אשת דוד המלך, שמנעה ממנו לשפוך דם בחכמתה.', 'Wife of King David, who wisely kept him from shedding blood.'),
    rel: [nm('spouse', 'נבל הכרמלי', 'Naval the Carmelite'), to('spouse', 'david'), nm('child', 'כלאב (דניאל)', 'Kilav (Daniel)')],
    sources: [L('שמואל א׳ כה', 'I Samuel 25'), L('שמואל ב׳ ג, ג', 'II Samuel 3:3'), L('מגילה יד ע״א – ע״ב', 'Megillah 14a–b')],
    spots: biblical(58.92, 36.6),
    sections: [
      sec('מול דוד', 'אביגיל, "טובת שכל ויפת תאר", הייתה אשת נבל הכרמלי, שסירב בגסות לתת מזון לאנשי דוד. כשיצא דוד לנקום בו, יצאה אביגיל לקראתו עם מנחה גדולה, ובדבריה מנעה ממנו לשפוך דם: "ולא תהיה זאת לך לפוקה".',
        'Before David', 'Avigayil, "of good understanding and beautiful", was the wife of Naval the Carmelite, who rudely refused to give food to David’s men. When David set out to take revenge, Avigayil went to meet him with a large gift, and with her words kept him from shedding blood: "Let this not be a stumbling block for you".'),
      sec('הנבואה', 'אביגיל אמרה לדוד: "והיתה נפש אדני צרורה בצרור החיים את ה׳ אלהיך", ובכך ניבאה על מלכותו. חז״ל מונים אותה בין שבע הנביאות (מגילה יד ע״א). אחרי מות נבל לקח אותה דוד לאישה, ונולד להם כלאב, הנקרא בדברי הימים דניאל.',
        'The Prophecy', 'Avigayil told David: "May the soul of my lord be bound in the bundle of life with Hashem your God", and so prophesied his kingdom. Chazal count her among the seven prophetesses (Megillah 14a). After Naval’s death David took her as his wife, and they had Kilav, who is called Daniel in Chronicles.'),
    ],
  }),

  prophetess({
    slug: 'chulda-haneviah', name: L('חולדה הנביאה', 'Chuldah the Prophetess (Huldah)'),
    summary: L('נביאה בימי יאשיהו, שהעם דרש בה את דבר ה׳ על ספר התורה שנמצא.', 'A prophetess in the days of Yoshiyahu, through whom the word of Hashem was sought about the Torah scroll that was found.'),
    rel: [nm('spouse', 'שלום בן תקוה', 'Shalum son of Tikvah'), to('related', 'yoshiyahu'), nm('related', 'ירמיהו הנביא', 'Yirmeyahu the Prophet')],
    sources: [L('מלכים ב׳ כב, יד – כ', 'II Kings 22:14–20'), L('דברי הימים ב׳ לד, כב – כח', 'II Chronicles 34:22–28'), L('מגילה יד ע״ב', 'Megillah 14b'), L('משנה מידות א, ג', 'Mishnah Middot 1:3')],
    spots: biblical(46.46, 62.85),
    sections: [
      sec('ספר התורה', 'כשנמצא ספר התורה בבית ה׳ בימי יאשיהו, שלח המלך את חלקיהו הכהן ואת שריו "לדרוש את ה׳" אצל חולדה הנביאה, אשת שלום בן תקוה שומר הבגדים, שישבה בירושלים "במשנה". היא הודיעה שהרעה הכתובה בספר תבוא על ירושלים, אך יאשיהו, שנכנע לפני ה׳, ייאסף אל קברותיו בשלום.',
        'The Torah Scroll', 'When the Torah scroll was found in the House of Hashem in the days of Yoshiyahu, the king sent Chilkiyahu the Kohen and his officers "to inquire of Hashem" with Chuldah the Prophetess, the wife of Shalum son of Tikvah, keeper of the wardrobe, who lived in Jerusalem "in the Mishneh". She declared that the evil written in the book would come upon Jerusalem, but that Yoshiyahu, who had humbled himself before Hashem, would be gathered to his grave in peace.'),
      sec('בדברי חז״ל', 'חז״ל שואלים מדוע פנו לחולדה כשירמיהו היה בדור, ומשיבים שנשים רחמניות הן, או שירמיהו לא הקפיד משום שהייתה קרובתו (מגילה יד ע״ב). חולדה נמנית עם שבע הנביאות, ו"שערי חולדה" שבהר הבית נקראו על שמה.',
        'In the Words of Chazal', 'Chazal ask why they went to Chuldah when Yirmeyahu was alive, and answer that women are compassionate, or that Yirmeyahu did not mind because she was his relative (Megillah 14b). Chuldah is counted among the seven prophetesses, and the "Chuldah Gates" of the Temple Mount were named after her.'),
    ],
  }),

  prophetess({
    slug: 'esther-hamalka', name: L('אסתר המלכה', 'Queen Esther'),
    roles: [L('נביאה', 'Prophetess'), L('מלכת פרס', 'Queen of Persia')],
    summary: L('הדסה, נביאה ומלכת פרס, שהצילה את היהודים מגזירת המן.', 'Hadassah, prophetess and queen of Persia, who saved the Jews from Haman’s decree.'),
    rel: [nm('father', 'אביחיל', 'Avichayil'), nm('related', 'מרדכי', 'Mordechai'), nm('related', 'אחשורוש', 'Achashverosh'), to('related', 'shevet-binyamin')],
    sources: [L('מגילת אסתר', 'The Book of Esther'), L('מגילה יג ע״א; יד ע״ב; ז ע״א', 'Megillah 13a; 14b; 7a')],
    spots: biblical(25.69, 69.48),
    sections: [
      sec('הדסה', 'אסתר, ששמה הדסה, בת אביחיל משבט בנימין, גדלה בבית מרדכי בן דודה בשושן אחרי מות הוריה. כשחיפש אחשורוש מלכה במקום ושתי, נלקחה אל בית המלך, ולפי עצת מרדכי לא הגידה את עמה ואת מולדתה. היא מצאה חן בעיני כל רואיה, והמלך שם כתר מלכות בראשה.',
        'Hadassah', 'Esther, whose name was Hadassah, daughter of Avichayil of the tribe of Binyamin, grew up in the home of her cousin Mordechai in Shushan after her parents died. When Achashverosh sought a queen in place of Vashti, she was taken to the king’s palace, and on Mordechai’s advice did not reveal her people or her family. She found favor in the eyes of all who saw her, and the king placed the royal crown on her head.'),
      sec('ומי יודע', 'כשגזר המן להשמיד את היהודים, אמר לה מרדכי: "ומי יודע אם לעת כזאת הגעת למלכות". אסתר ביקשה מכל היהודים לצום שלושה ימים, ונכנסה אל המלך שלא ברשות: "וכאשר אבדתי אבדתי". במשתה היין גילתה למלך את מזימת המן, המן נתלה, והיהודים ניצלו.',
        'Who Knows', 'When Haman decreed the destruction of the Jews, Mordechai told her: "Who knows whether you have come to the kingdom for such a time as this". Esther asked all the Jews to fast three days, and went in to the king unsummoned: "And if I perish, I perish". At the wine feast she revealed Haman’s plot to the king, Haman was hanged, and the Jews were saved.'),
      sec('נביאה', 'חז״ל לומדים מן הפסוק "ותלבש אסתר מלכות" שלבשה רוח הקודש, והיא אחת משבע הנביאות (מגילה יד ע״ב). אסתר ומרדכי קבעו את ימי הפורים לדורות, ומגילת אסתר נכתבה ברוח הקודש (מגילה ז ע״א).',
        'A Prophetess', 'Chazal learn from the verse "Esther clothed herself in royalty" that she was clothed in divine inspiration, and she is one of the seven prophetesses (Megillah 14b). Esther and Mordechai established the days of Purim for all generations, and the Book of Esther was written with divine inspiration (Megillah 7a).'),
    ],
  }),
];

const temples = [
  temple({
    slug: 'mishkan-bamidbar', name: L('המשכן במדבר', 'The Mishkan in the Desert'),
    roles: [L('משכן', 'Mishkan')], life: [2449, 2488],
    summary: L('המשכן שבנו בני ישראל במדבר, ונסע איתם ארבעים שנה.', 'The Mishkan the people of Israel built in the desert, which travelled with them for forty years.'),
    rel: [nm('related', 'בצלאל בן אורי', 'Betzalel son of Uri'), nm('related', 'משה רבנו', 'Moshe Rabbeinu'), to('related', 'aron-habrit'), to('related', 'mishkan-gilgal')],
    sources: [L('שמות כה – מ', 'Exodus 25–40'), L('במדבר ז; ט, טו – כג', 'Numbers 7; 9:15–23'), zevachim],
    spots: biblical(89.93, 29.0),
    sections: [
      sec('ועשו לי מקדש', 'אחרי מתן תורה ציווה ה׳: "ועשו לי מקדש ושכנתי בתוכם". העם הביא תרומה בנדיבות לב, עד שהוצרך משה לעצור את הנדבה. בצלאל בן אורי משבט יהודה ואהליאב בן אחיסמך משבט דן עשו את המשכן ואת כליו: הארון, השולחן, המנורה, מזבח הקטורת ומזבח העולה.',
        'Make Me a Sanctuary', 'After the giving of the Torah Hashem commanded: "Make Me a sanctuary and I will dwell among them". The people brought their contributions so generously that Moshe had to stop the donations. Betzalel son of Uri of the tribe of Yehudah and Oholiav son of Achisamach of the tribe of Dan made the Mishkan and its vessels: the Ark, the Table, the Menorah, the incense altar and the altar of offerings.'),
      sec('ארבעים שנה במדבר', 'המשכן הוקם בראש חודש ניסן בשנה השנית ליציאת מצרים, והענן כיסה אותו. במשך ארבעים השנים במדבר פירקו אותו הלויים והקימו אותו בכל מסע, "על פי ה׳ יחנו ועל פי ה׳ יסעו" (זבחים קיח ע״ב).',
        'Forty Years in the Desert', 'The Mishkan was erected on the first of Nisan in the second year after the Exodus, and the cloud covered it. Throughout the forty years in the desert the Levites took it apart and set it up at every journey, "at the word of Hashem they camped and at the word of Hashem they travelled" (Zevachim 118b).'),
    ],
  }),

  temple({
    slug: 'mishkan-gilgal', name: L('המשכן בגלגל', 'The Mishkan at Gilgal'),
    roles: [L('משכן', 'Mishkan')], life: [2488, 2502],
    summary: L('מקום המשכן בארבע עשרה שנות כיבוש הארץ וחלוקתה.', 'The place of the Mishkan during the fourteen years of conquering and dividing the land.'),
    rel: [nm('related', 'יהושע בן נון', 'Yehoshua son of Nun'), to('related', 'mishkan-bamidbar'), to('related', 'mishkan-shilo')],
    sources: [L('יהושע ד – ה', 'Joshua 4–5'), zevachim],
    spots: biblical(89.93, 30.62),
    sections: [
      sec('אחרי מעבר הירדן', 'אחרי שעברו בני ישראל את הירדן בחרבה, חנו בגלגל שבערבות יריחו. שם הקים יהושע את שתים עשרה האבנים שנלקחו מן הירדן, שם מל את העם, ושם עשו את הפסח הראשון בארץ ופסק המן.',
        'After Crossing the Jordan', 'After the people of Israel crossed the Jordan on dry land, they camped at Gilgal in the plains of Yericho. There Yehoshua set up the twelve stones taken from the Jordan, there he circumcised the people, and there they kept the first Pesach in the land and the manna stopped.'),
      sec('ארבע עשרה שנה', 'בגלגל עמד המשכן ארבע עשרה שנה: שבע שנים שכבשו ושבע שחילקו את הארץ (זבחים קיח ע״ב). אחר כך הועבר לשילה.',
        'Fourteen Years', 'The Mishkan stood at Gilgal for fourteen years: seven during which they conquered the land and seven during which they divided it (Zevachim 118b). Afterwards it was moved to Shiloh.'),
    ],
  }),

  temple({
    slug: 'mishkan-shilo', name: L('משכן שילה', 'The Mishkan at Shiloh'),
    roles: [L('משכן', 'Mishkan')], life: [2502, 2871],
    summary: L('המשכן שעמד בשילה שבנחלת אפרים שלוש מאות שישים ותשע שנים.', 'The Mishkan that stood at Shiloh in the land of Ephraim for three hundred and sixty-nine years.'),
    rel: [to('related', 'eli-hakohen'), to('related', 'chana-haneviah'), to('related', 'shmuel-hanavi'), to('related', 'shevet-efraim'), to('related', 'mishkan-gilgal'), to('related', 'mishkan-nov')],
    sources: [L('יהושע יח, א', 'Joshua 18:1'), L('שמואל א׳ א – ד', 'I Samuel 1–4'), L('ירמיהו ז, יב', 'Jeremiah 7:12'), L('תהילים עח, ס', 'Psalms 78:60'), L('זבחים קיח ע״א – ע״ב', 'Zevachim 118a–b')],
    spots: biblical(89.93, 32.36),
    sections: [
      sec('שלוש מאות שישים ותשע שנים', 'אחרי כיבוש הארץ "ויקהלו כל עדת בני ישראל שילה וישכינו שם את אהל מועד". המשכן עמד בשילה שלוש מאות שישים ותשע שנים, לאורך כל ימי השופטים. חז״ל מתארים אותו כבית של אבנים מלמטה ויריעות מלמעלה (זבחים קיח ע״א).',
        'Three Hundred and Sixty-Nine Years', 'After the conquest of the land "the whole congregation of Israel assembled at Shiloh and set up the Tent of Meeting there". The Mishkan stood at Shiloh for three hundred and sixty-nine years, throughout the days of the judges. Chazal describe it as a building of stone below with curtains above (Zevachim 118a).'),
      sec('חנה, עלי ושמואל', 'לשילה עלו בני ישראל לרגל. שם התפללה חנה, שם שימש עלי הכהן, ושם גדל שמואל הנביא ונגלה אליו ה׳.',
        'Channah, Eli and Shmuel', 'The people of Israel went up to Shiloh on pilgrimage. There Channah prayed, there Eli the Kohen served, and there Shmuel the Prophet grew up and Hashem was revealed to him.'),
      sec('חורבן שילה', 'אחרי שנשבה הארון בידי פלשתים במלחמת אבן העזר, ומת עלי, חרב משכן שילה. ירמיהו הזכיר את חורבנו כאזהרה לירושלים: "כי לכו נא אל מקומי אשר בשילו... וראו את אשר עשיתי לו".',
        'The Destruction of Shiloh', 'After the Ark was captured by the Philistines in the battle of Even HaEzer, and Eli died, the Mishkan at Shiloh was destroyed. Yirmeyahu recalled its destruction as a warning to Jerusalem: "Go now to My place that was in Shiloh... and see what I did to it".'),
    ],
  }),

  temple({
    slug: 'mishkan-nov', name: L('המשכן בנוב', 'The Mishkan at Nov'),
    roles: [L('משכן', 'Mishkan')], life: [2871, 2884],
    summary: L('עיר הכהנים, שבה עמד המשכן אחרי חורבן שילה.', 'The city of the Kohanim, where the Mishkan stood after the destruction of Shiloh.'),
    rel: [nm('related', 'אחימלך הכהן', 'Achimelech the Kohen'), to('related', 'david'), to('related', 'shaul-hamelech'), to('related', 'mishkan-shilo'), to('related', 'mishkan-givon')],
    sources: [L('שמואל א׳ כא – כב', 'I Samuel 21–22'), zevachim],
    spots: biblical(89.93, 34.54),
    sections: [
      sec('עיר הכהנים', 'אחרי חורבן שילה הועבר המשכן לנוב, עיר הכהנים. דוד, שברח מפני שאול, בא לנוב אל אחימלך הכהן, וקיבל ממנו את לחם הפנים ואת חרב גלית הפלשתי.',
        'The City of the Kohanim', 'After the destruction of Shiloh the Mishkan was moved to Nov, the city of the Kohanim. David, fleeing from Shaul, came to Nov to Achimelech the Kohen, and received from him the showbread and the sword of Golyat the Philistine.'),
      sec('הריגת כהני נוב', 'דואג האדומי הלשין לשאול, ושאול ציווה להרוג את כהני נוב. דואג הרג שמונים וחמישה כהנים והכה את העיר לפי חרב. רק אביתר בן אחימלך נמלט אל דוד. לפי חז״ל, המשכן עמד בנוב ובגבעון יחד חמישים ושבע שנים (זבחים קיח ע״ב).',
        'The Slaughter of the Kohanim of Nov', 'Doeg the Edomite informed Shaul, and Shaul ordered the Kohanim of Nov killed. Doeg killed eighty-five Kohanim and struck the city with the sword. Only Evyatar son of Achimelech escaped to David. According to Chazal, the Mishkan stood at Nov and Givon together for fifty-seven years (Zevachim 118b).'),
    ],
  }),

  temple({
    slug: 'mishkan-givon', name: L('המשכן בגבעון', 'The Mishkan at Givon'),
    roles: [L('משכן', 'Mishkan'), L('הבמה הגדולה', 'The great altar')], life: [2884, 2928],
    summary: L('מקום הבמה הגדולה עד בניין בית המקדש, שבו נגלה ה׳ לשלמה בחלום.', 'The place of the great altar until the Temple was built, where Hashem appeared to Shlomo in a dream.'),
    rel: [to('related', 'shlomo'), to('related', 'tzadok-hakohen'), to('related', 'mishkan-nov'), to('related', 'beit-hamikdash-harishon')],
    sources: [L('מלכים א׳ ג, ד – טו', 'I Kings 3:4–15'), L('דברי הימים א׳ טז, לט; כא, כט', 'I Chronicles 16:39; 21:29'), L('דברי הימים ב׳ א, ג – יג', 'II Chronicles 1:3–13'), zevachim],
    spots: biblical(89.93, 36.43),
    sections: [
      sec('הבמה הגדולה', 'מנוב עבר המשכן לגבעון, ושם עמדו אהל מועד ומזבח הנחושת שעשה בצלאל, בזמן שארון הברית היה בקרית יערים ואחר כך בעיר דוד. בימי דוד שירת צדוק הכהן לפני משכן ה׳ בבמה אשר בגבעון.',
        'The Great Altar', 'From Nov the Mishkan moved to Givon, where the Tent of Meeting and the copper altar made by Betzalel stood, while the Ark of the Covenant was at Kiryat Yearim and later in the City of David. In David’s days Tzadok the Kohen served before the Mishkan of Hashem at the altar in Givon.'),
      sec('חלום שלמה', 'בתחילת מלכותו הלך שלמה לגבעון, "כי היא הבמה הגדולה", והעלה אלף עולות על המזבח. שם נראה אליו ה׳ בחלום ושאל "מה אתן לך", ושלמה ביקש לב שומע לשפוט את העם. המשכן עמד בגבעון עד שנבנה בית המקדש בירושלים.',
        'Shlomo’s Dream', 'At the start of his reign Shlomo went to Givon, "for that was the great altar", and offered a thousand burnt offerings on the altar. There Hashem appeared to him in a dream and asked "What shall I give you", and Shlomo asked for an understanding heart to judge the people. The Mishkan stood at Givon until the Temple was built in Jerusalem.'),
    ],
  }),

  temple({
    slug: 'beit-hamikdash-hasheni', name: L('בית המקדש השני', 'The Second Temple'),
    roles: [L('בית מקדש', 'Temple')], life: [3408, 3828],
    summary: L('בית המקדש שנבנה בימי שיבת ציון ועמד ארבע מאות ועשרים שנה.', 'The Temple built in the days of the Return to Zion, which stood for four hundred and twenty years.'),
    rel: [nm('related', 'זרובבל', 'Zerubavel'), nm('related', 'יהושע בן יהוצדק', 'Yehoshua son of Yehotzadak'), nm('related', 'חגי הנביא', 'Chaggai the Prophet'), nm('related', 'זכריה הנביא', 'Zecharyah the Prophet'), to('related', 'shimon-hatzadik'), to('related', 'beit-hamikdash-harishon')],
    sources: [L('עזרא א – ו', 'Ezra 1–6'), L('חגי א – ב', 'Haggai 1–2'), L('זכריה ד', 'Zechariah 4'), L('יומא ט ע״א – ע״ב; כא ע״ב', 'Yoma 9a–b; 21b'), L('בבא בתרא ד ע״א', 'Bava Batra 4a')],
    spots: biblical(49.94, 68.48),
    sections: [
      sec('שיבת ציון', 'בשנה הראשונה לכורש מלך פרס יצאה הכרזה שהיהודים רשאים לשוב ולבנות את בית ה׳. זרובבל ויהושע בן יהוצדק הכהן הגדול עלו עם הגולים והניחו את היסוד, אך הבנייה נעצרה בשל הצרים. בעידוד הנביאים חגי וזכריה חודשה הבנייה בימי דריוש, והבית הושלם בשנת 3408, כפי שמצוין על האילן שלנו.',
        'The Return to Zion', 'In the first year of Koresh king of Persia a declaration went out that the Jews could return and build the House of Hashem. Zerubavel and Yehoshua son of Yehotzadak the High Priest went up with the exiles and laid the foundation, but the building was halted by the enemies. Encouraged by the prophets Chaggai and Zecharyah, building resumed in the days of Daryavesh, and the House was completed in 3408, as noted on our tree.'),
      sec('ארבע מאות ועשרים שנה', 'בית שני עמד ארבע מאות ועשרים שנה. חז״ל מלמדים שחסרו בו חמישה דברים שהיו בבית ראשון, ובהם הארון והכפורת, אש מן השמים ורוח הקודש (יומא כא ע״ב). הורדוס שיפץ אותו והגדיל אותו מאוד, ואמרו חז״ל: "מי שלא ראה בניין הורדוס לא ראה בניין נאה מימיו" (בבא בתרא ד ע״א).',
        'Four Hundred and Twenty Years', 'The Second Temple stood for four hundred and twenty years. Chazal teach that it lacked five things that were in the First Temple, among them the Ark and its cover, fire from heaven and divine inspiration (Yoma 21b). Herod renovated it and greatly enlarged it, and Chazal said: "Whoever has not seen Herod’s building has never seen a beautiful building" (Bava Batra 4a).'),
      sec('החורבן', 'בתשעה באב חרב בית שני בידי צבא רומא. חז״ל מלמדים שבית שני, שהיו בו תורה ומצוות וגמילות חסדים, חרב בגלל שנאת חינם, "ללמדך ששקולה שנאת חינם כנגד שלש עבירות" (יומא ט ע״ב).',
        'The Destruction', 'On the ninth of Av the Second Temple was destroyed by the army of Rome. Chazal teach that the Second Temple, in which there were Torah, mitzvot and acts of kindness, was destroyed because of baseless hatred, "to teach you that baseless hatred is equal to the three cardinal sins" (Yoma 9b).'),
    ],
  }),
];

module.exports = { prophetesses, temples };
