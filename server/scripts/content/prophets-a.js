// The 48 prophets (Megillah 14a, as listed by Rashi) — part 1: from the Avot
// to the days of the first kings. Positions and colours follow the Biblical
// tree poster; teacher → student follows its brown arrows (and the chain of
// tradition in the Rambam's introduction to Mishneh Torah).
const { L, sec, article, office, biblical, to, nm } = require('./helpers');

const unsure = (type, he, en) => ({ type, he, en, uncertain: true });
const prophet = (e) => ({ categories: ['prophets'], roles: [L('נביא', 'Prophet')], ...e, content: article(e.sections) });
const GREEN = 't1-bereshit';
const RED = 't1-levi';
const BLUE = 't1-yehuda';
const GOLD = 't1-shvatim';
const MINT = 't1-gerim';

module.exports = {
  unsure,
  GREEN, RED, BLUE, GOLD, MINT,
  entries: [
    prophet({
      slug: 'avraham-avinu', name: L('אברהם אבינו', 'Avraham Avinu (Abraham)'), cardColor: GREEN,
      roles: [L('אבי האומה', 'Father of the nation'), L('נביא', 'Prophet')], life: [1948, 2123],
      summary: L('הראשון מן האבות, שהכיר את בוראו ויצא בציווי ה׳ לארץ כנען.', 'The first of the Avot, who recognized his Creator and went to the land of Canaan at Hashem’s command.'),
      rel: [nm('father', 'תרח', 'Terach'), to('spouse', 'sarah-imenu'), nm('spouse', 'הגר', 'Hagar'), to('child', 'yitzchak-avinu'), nm('child', 'ישמעאל', 'Yishmael'), nm('sibling', 'נחור', 'Nachor'), nm('sibling', 'הרן', 'Haran')],
      sources: [L('בראשית יא, כו – כה, יא', 'Genesis 11:26 – 25:11'), L('בראשית כ, ז', 'Genesis 20:7'), L('אבות ה, ג', 'Avot 5:3'), L('רמב״ם, הלכות עבודה זרה א, ג', 'Rambam, Laws of Idolatry 1:3')],
      spots: biblical(58.3, 16.5),
      sections: [
        sec('הכרת הבורא', 'אברם בן תרח נולד באור כשדים. לפי הרמב״ם, כבר בילדותו התבונן בעולם עד שהכיר את בורא העולם, ונלחם בעבודה הזרה של בני דורו. ה׳ אמר לו "לך לך מארצך", ואברהם יצא עם שרה אשתו ולוט בן אחיו לארץ כנען.',
          'Recognizing the Creator', 'Avram son of Terach was born in Ur Kasdim. According to the Rambam, already as a child he contemplated the world until he recognized its Creator, and fought the idolatry of his generation. Hashem told him "Go forth from your land", and Avraham went with his wife Sarah and his nephew Lot to the land of Canaan.'),
        sec('עשרה ניסיונות', 'אברהם נתנסה בעשרה ניסיונות ועמד בכולם (אבות ה, ג), ובאחרונם, עקדת יצחק, עקד את בנו על המזבח בהר המוריה. ה׳ כרת איתו ברית בין הבתרים והבטיח את הארץ לזרעו. הכתוב קורא לו נביא: "כי נביא הוא ויתפלל בעדך".',
          'Ten Trials', 'Avraham was tested with ten trials and withstood them all (Avot 5:3), the last being the Binding of Yitzchak on Mount Moriah. Hashem made the Covenant between the Pieces with him and promised the land to his descendants. Scripture calls him a prophet: "for he is a prophet, and he will pray for you".'),
      ],
    }),
    prophet({
      slug: 'yitzchak-avinu', name: L('יצחק אבינו', 'Yitzchak Avinu (Isaac)'), cardColor: GREEN,
      roles: [L('אבי האומה', 'Father of the nation'), L('נביא', 'Prophet')], life: [2048, 2228],
      summary: L('השני מן האבות, שנעקד על המזבח והמשיך את דרכו של אברהם.', 'The second of the Avot, who was bound on the altar and continued Avraham’s path.'),
      rel: [to('father', 'avraham-avinu'), to('mother', 'sarah-imenu'), nm('spouse', 'רבקה', 'Rivkah'), to('child', 'yaakov-avinu'), nm('child', 'עשו', 'Esav'), nm('sibling', 'ישמעאל', 'Yishmael')],
      sources: [L('בראשית כא – כח; לה, כח – כט', 'Genesis 21–28; 35:28–29'), L('תהילים קה, טו', 'Psalms 105:15')],
      spots: biblical(55.9, 18.0),
      sections: [
        sec('העקדה', 'יצחק נולד לאברהם ולשרה לעת זקנתם, כפי שבישרו המלאכים. כשציווה ה׳ את אברהם לעקוד אותו, הלך עמו יצחק "וילכו שניהם יחדיו", ונעקד על המזבח עד שקרא המלאך "אל תשלח ידך אל הנער".',
          'The Binding', 'Yitzchak was born to Avraham and Sarah in their old age, as the angels had foretold. When Hashem commanded Avraham to bind him, Yitzchak went with him, "and the two of them walked together", and was bound on the altar until the angel called "Do not lay your hand on the boy".'),
        sec('בארות וברכות', 'יצחק נשא את רבקה, חפר מחדש את בארות אביו בארץ פלשתים, וזרע בארץ ומצא מאה שערים. בזקנתו בירך את יעקב בברכת אברהם. תהילים מכנה את האבות נביאים: "ובנביאי אל תרעו".',
          'Wells and Blessings', 'Yitzchak married Rivkah, re-dug his father’s wells in the land of the Philistines, and sowed the land and reaped a hundredfold. In his old age he blessed Yaakov with the blessing of Avraham. Psalms calls the Avot prophets: "and do My prophets no harm".'),
      ],
    }),
    prophet({
      slug: 'yaakov-avinu', name: L('יעקב אבינו', 'Yaakov Avinu (Jacob)'), cardColor: GREEN,
      roles: [L('אבי האומה', 'Father of the nation'), L('נביא', 'Prophet')], life: [2108, 2255],
      summary: L('השלישי מן האבות, הוא ישראל, אבי שנים עשר השבטים.', 'The third of the Avot, also called Yisrael, father of the twelve tribes.'),
      rel: [to('father', 'yitzchak-avinu'), nm('mother', 'רבקה', 'Rivkah'), nm('sibling', 'עשו', 'Esav'), nm('spouse', 'לאה', 'Leah'), nm('spouse', 'רחל', 'Rachel'), nm('spouse', 'בלהה', 'Bilhah'), nm('spouse', 'זלפה', 'Zilpah'),
        ...['ראובן', 'שמעון', 'לוי', 'יהודה', 'יששכר', 'זבולון', 'דן', 'נפתלי', 'גד', 'אשר', 'יוסף', 'בנימין', 'דינה'].map((n) => nm('child', n, ({ 'ראובן': 'Reuven', 'שמעון': 'Shimon', 'לוי': 'Levi', 'יהודה': 'Yehudah', 'יששכר': 'Yissachar', 'זבולון': 'Zevulun', 'דן': 'Dan', 'נפתלי': 'Naftali', 'גד': 'Gad', 'אשר': 'Asher', 'יוסף': 'Yosef', 'בנימין': 'Binyamin', 'דינה': 'Dinah' })[n]))],
      sources: [L('בראשית כה, יט – נ, יג', 'Genesis 25:19 – 50:13'), L('בראשית מט', 'Genesis 49')],
      spots: biblical(50.2, 21.0),
      sections: [
        sec('סולם יעקב', 'יעקב, בנו של יצחק, קיבל את ברכת אביו ונאלץ לברוח מפני עשו אחיו. בדרך לחרן חלם על סולם מוצב ארצה וראשו מגיע השמימה, וה׳ הבטיח לו את הארץ ושמירה בדרכו. בחרן נשא את לאה ואת רחל.',
          'Yaakov’s Ladder', 'Yaakov son of Yitzchak received his father’s blessing and had to flee from his brother Esav. On the way to Charan he dreamed of a ladder set on the earth with its top reaching heaven, and Hashem promised him the land and protection on his way. In Charan he married Leah and Rachel.'),
        sec('ישראל', 'בשובו לארץ נאבק עם המלאך, ושמו נקרא ישראל. ממנו יצאו שנים עשר השבטים. לעת זקנתו ירד למצרים אל יוסף, ולפני מותו בירך את בניו ברוח הנבואה, ואמר להם את אשר יקרא אותם באחרית הימים.',
          'Yisrael', 'On his return to the land he wrestled with the angel, and his name was called Yisrael. From him came the twelve tribes. In his old age he went down to Egypt to Yosef, and before his death he blessed his sons in the spirit of prophecy, telling them what would befall them at the end of days.'),
      ],
    }),
    prophet({
      slug: 'moshe-rabbeinu', name: L('משה רבנו', 'Moshe Rabbeinu (Moses)'), cardColor: RED,
      roles: [L('אבי הנביאים', 'Father of the prophets'), L('מנהיג ישראל', 'Leader of Israel')], life: [2368, 2488],
      offices: [office('הנהגת ישראל', 'Leadership of Israel', 2448, 2488)],
      summary: L('גדול הנביאים, שהוציא את ישראל ממצרים ונתן להם את התורה.', 'The greatest of the prophets, who brought Israel out of Egypt and gave them the Torah.'),
      rel: [nm('father', 'עמרם', 'Amram'), nm('mother', 'יוכבד', 'Yocheved'), to('sibling', 'aharon-hakohen'), to('sibling', 'miriam-haneviah'), nm('spouse', 'ציפורה', 'Tzipporah'), nm('child', 'גרשם', 'Gershom'), nm('child', 'אליעזר', 'Eliezer'), to('student', 'yehoshua-bin-nun'), to('related', 'shevet-levi')],
      sources: [L('שמות – דברים', 'Exodus – Deuteronomy'), L('דברים לד, י', 'Deuteronomy 34:10'), L('אבות א, א', 'Avot 1:1'), L('רמב״ם, יסודי התורה ז, ו', 'Rambam, Foundations of the Torah 7:6')],
      spots: biblical(68.6, 29.8),
      sections: [
        sec('יציאת מצרים', 'משה בן עמרם משבט לוי ניצל בתיבה על היאור וגדל בבית פרעה. בסנה הבוער שלח אותו ה׳ להוציא את ישראל ממצרים. בעשר המכות ובקריעת ים סוף יצאו בני ישראל לחירות בשנת ב׳תמ״ח.',
          'The Exodus', 'Moshe son of Amram, of the tribe of Levi, was saved in a basket on the river and grew up in Pharaoh’s house. At the burning bush Hashem sent him to bring Israel out of Egypt. Through the ten plagues and the splitting of the sea the people of Israel went out to freedom in the year 2448.'),
        sec('מתן תורה', 'משה עלה להר סיני וקיבל את התורה, "משה קבל תורה מסיני ומסרה ליהושע" (אבות א, א). ארבעים שנה הנהיג את העם במדבר, והקים את המשכן. "ולא קם נביא עוד בישראל כמשה, אשר ידעו ה׳ פנים אל פנים"; הרמב״ם מונה את נבואתו כאחד מיסודות האמונה.',
          'The Giving of the Torah', 'Moshe went up Mount Sinai and received the Torah: "Moshe received the Torah at Sinai and passed it to Yehoshua" (Avot 1:1). For forty years he led the people in the desert and set up the Mishkan. "Never again has a prophet arisen in Israel like Moshe, whom Hashem knew face to face"; the Rambam counts his prophecy among the foundations of faith.'),
      ],
    }),
    prophet({
      slug: 'aharon-hakohen', name: L('אהרן הכהן', 'Aharon the Kohen (Aaron)'), cardColor: RED, categories: ['prophets', 'kohanim-gedolim'],
      roles: [L('הכהן הגדול הראשון', 'The first High Priest'), L('נביא', 'Prophet')], life: [2365, 2487],
      offices: [{ ...office('כהונה גדולה', 'High Priesthood', 2449, 2487), after: [{ he: 'אלעזר', en: 'Elazar' }] }],
      summary: L('אחי משה, הכהן הגדול הראשון, אוהב שלום ורודף שלום.', 'Moshe’s brother, the first High Priest, who loved peace and pursued peace.'),
      rel: [nm('father', 'עמרם', 'Amram'), nm('mother', 'יוכבד', 'Yocheved'), to('sibling', 'moshe-rabbeinu'), to('sibling', 'miriam-haneviah'), nm('spouse', 'אלישבע בת עמינדב', 'Elisheva daughter of Aminadav'), nm('child', 'נדב', 'Nadav'), nm('child', 'אביהוא', 'Avihu'), nm('child', 'אלעזר', 'Elazar'), nm('child', 'איתמר', 'Itamar')],
      sources: [L('שמות ד; כח – כט', 'Exodus 4; 28–29'), L('ויקרא ח – י', 'Leviticus 8–10'), L('במדבר יז; כ', 'Numbers 17; 20'), L('אבות א, יב', 'Avot 1:12')],
      spots: biblical(74.6, 29.9),
      sections: [
        sec('פה למשה', 'אהרן, אחיו הגדול של משה, יצא עמו אל פרעה והיה "לו לפה". ה׳ דיבר אל שניהם, ואהרן ניבא לישראל במצרים עוד לפני שבא משה. במדבר נבחר הוא ובניו לכהונה, ומטהו פרח ויצא פרח כאות לבחירתו.',
          'A Mouth for Moshe', 'Aharon, Moshe’s older brother, went with him to Pharaoh and was "a mouth for him". Hashem spoke to both of them, and Aharon prophesied to Israel in Egypt even before Moshe came. In the desert he and his sons were chosen for the priesthood, and his staff blossomed as a sign of his election.'),
        sec('אוהב שלום', 'הלל הזקן לימד: "הוי מתלמידיו של אהרן, אוהב שלום ורודף שלום" (אבות א, יב). אהרן נפטר בהר ההר בשנה הארבעים במדבר, "ויבכו את אהרן שלשים יום כל בית ישראל", ואלעזר בנו כיהן תחתיו.',
          'Lover of Peace', 'Hillel the Elder taught: "Be among the disciples of Aharon, loving peace and pursuing peace" (Avot 1:12). Aharon died on Mount Hor in the fortieth year in the desert, "and the whole house of Israel wept for Aharon thirty days", and his son Elazar served in his place.'),
      ],
    }),
    prophet({
      slug: 'yehoshua-bin-nun', name: L('יהושע בן נון', 'Yehoshua son of Nun (Joshua)'), cardColor: GOLD,
      roles: [L('נביא', 'Prophet'), L('מנהיג הכיבוש', 'Leader of the conquest')],
      offices: [office('הנהגת ישראל', 'Leadership of Israel', 2488, 2516)],
      summary: L('תלמידו של משה, שהנהיג את ישראל בכניסה לארץ ובכיבושה.', 'Moshe’s student, who led Israel into the land and conquered it.'),
      rel: [nm('father', 'נון', 'Nun'), to('teacher', 'moshe-rabbeinu'), to('student', 'pinchas'), to('related', 'shevet-efraim'), to('related', 'mishkan-gilgal')],
      sources: [L('שמות יז; לג, יא', 'Exodus 17; 33:11'), L('במדבר יג – יד; כז, טו – כג', 'Numbers 13–14; 27:15–23'), L('ספר יהושע', 'The Book of Joshua'), L('אבות א, א', 'Avot 1:1'), L('בבא בתרא יד ע״ב', 'Bava Batra 14b')],
      spots: biblical(56.2, 30.3),
      sections: [
        sec('משרת משה', 'יהושע בן נון משבט אפרים היה משרתו של משה ו"לא ימיש מתוך האהל". הוא נלחם בעמלק ברפידים, ובין שנים עשר המרגלים היה הוא וכלב היחידים שאמרו שהארץ טובה מאוד. משה סמך את ידיו עליו לפני מותו.',
          'Moshe’s Attendant', 'Yehoshua son of Nun, of the tribe of Ephraim, was Moshe’s attendant and "did not depart from the tent". He fought Amalek at Refidim, and among the twelve spies he and Calev were the only ones who said the land was very good. Moshe laid his hands on him before his death.'),
        sec('כיבוש הארץ', 'יהושע העביר את העם בירדן בחרבה, כבש את יריחו וחילק את הארץ לשבטים. "משה קבל תורה מסיני ומסרה ליהושע, ויהושע לזקנים". חז״ל מלמדים שהוא כתב את ספרו ושמונה פסוקים שבסוף התורה (בבא בתרא יד ע״ב).',
          'The Conquest of the Land', 'Yehoshua led the people across the Jordan on dry land, conquered Yericho and divided the land among the tribes. "Moshe received the Torah at Sinai and passed it to Yehoshua, and Yehoshua to the elders". Chazal teach that he wrote his book and the last eight verses of the Torah (Bava Batra 14b).'),
      ],
    }),
    prophet({
      slug: 'pinchas', name: L('פינחס בן אלעזר', 'Pinchas son of Elazar'), cardColor: RED, categories: ['prophets', 'kohanim-gedolim'],
      roles: [L('כהן גדול', 'High Priest'), L('נביא', 'Prophet')],
      offices: [{ ...office('כהונה גדולה', 'High Priesthood', null, null), before: [{ he: 'אלעזר', en: 'Elazar' }], after: [{ he: 'אבישוע', en: 'Avishua' }] }],
      summary: L('נכדו של אהרן, שקנא לה׳ וזכה לברית כהונת עולם.', 'Aharon’s grandson, who was zealous for Hashem and received the covenant of eternal priesthood.'),
      rel: [nm('father', 'אלעזר', 'Elazar'), to('teacher', 'yehoshua-bin-nun'), to('student', 'eli-hakohen'), to('related', 'aharon-hakohen')],
      sources: [L('במדבר כה; לא, ו', 'Numbers 25; 31:6'), L('יהושע כב', 'Joshua 22'), L('שופטים כ, כח', 'Judges 20:28'), L('ויקרא רבה א, א', 'Vayikra Rabbah 1:1')],
      spots: biblical(73.2, 33.3),
      sections: [
        sec('ברית שלום', 'פינחס בן אלעזר בן אהרן קנא את קנאת ה׳ בחטא בעל פעור, ועצר את המגפה. ה׳ נתן לו "את בריתי שלום" ו"ברית כהונת עולם" לו ולזרעו אחריו.',
          'A Covenant of Peace', 'Pinchas son of Elazar son of Aharon was zealous for Hashem at the sin of Baal Peor, and stopped the plague. Hashem gave him "My covenant of peace" and "a covenant of eternal priesthood" for him and his descendants after him.'),
        sec('הכהן והנביא', 'פינחס יצא עם הצבא למלחמת מדין, ובימי יהושע שליחותו מנעה מלחמת אחים עם שבטי עבר הירדן. הוא שימש ככהן גדול בימי השופטים. חז״ל מלמדים ש"מלאך ה׳" שעלה מן הגלגל אל הבוכים הוא פינחס, שפניו בוערות כלפידים כשרוח הקודש שורה עליו (ויקרא רבה א, א).',
          'Kohen and Prophet', 'Pinchas went out with the army to the war against Midian, and in the days of Yehoshua his mission prevented a civil war with the tribes east of the Jordan. He served as High Priest in the days of the judges. Chazal teach that "the angel of Hashem" who went up from Gilgal to Bochim was Pinchas, whose face burned like torches when the holy spirit rested on him (Vayikra Rabbah 1:1).'),
      ],
    }),
    prophet({
      slug: 'elkanah', name: L('אלקנה', 'Elkanah'), cardColor: RED,
      summary: L('אבי שמואל הנביא, שהיה עולה לשילה מדי שנה ומעלה עמו את ישראל.', 'Father of Shmuel the Prophet, who went up to Shiloh every year and brought Israel up with him.'),
      rel: [nm('father', 'ירחם', 'Yerocham'), to('spouse', 'chana-haneviah'), nm('spouse', 'פנינה', 'Peninah'), to('child', 'shmuel-hanavi'), to('related', 'mishkan-shilo'), to('related', 'shevet-levi')],
      sources: [L('שמואל א׳ א – ב', 'I Samuel 1–2'), L('דברי הימים א׳ ו, יט – כג', 'I Chronicles 6:19–23'), L('מגילה יד ע״א (רש״י)', 'Megillah 14a (Rashi)')],
      spots: biblical(83.5, 33.6),
      sections: [
        sec('איש מן הרמתים', 'אלקנה בן ירחם, מצאצאי קרח בן יצהר משבט לוי, ישב ברמתים צופים בהר אפרים. היו לו שתי נשים, חנה ופנינה, ומדי שנה עלה להשתחוות ולזבוח לה׳ בשילה.',
          'A Man from Ramatayim', 'Elkanah son of Yerocham, a descendant of Korach son of Yitzhar of the tribe of Levi, lived in Ramatayim Tzofim in the hill country of Ephraim. He had two wives, Channah and Peninah, and every year he went up to bow down and sacrifice to Hashem at Shiloh.'),
        sec('נביא', 'חז״ל מונים את אלקנה בין ארבעים ושמונה הנביאים שעמדו לישראל. במדרש מסופר שבכל שנה היה עולה לשילה בדרך אחרת, ומעורר את העם לעלות עמו לרגל. מחנה אשתו נולד לו שמואל הנביא.',
          'A Prophet', 'Chazal count Elkanah among the forty-eight prophets of Israel. The Midrash relates that each year he went up to Shiloh by a different route, encouraging the people to come up with him on pilgrimage. From his wife Channah was born Shmuel the Prophet.'),
      ],
    }),
    prophet({
      slug: 'gad-hachozeh', name: L('גד החוזה', 'Gad the Seer'), cardColor: BLUE,
      roles: [L('נביא', 'Prophet'), L('חוזה דוד', 'David’s seer')],
      summary: L('נביאו של דוד, שליווה אותו מימי בריחתו ועד סוף ימיו.', 'David’s prophet, who accompanied him from the days of his flight to the end of his life.'),
      rel: [to('related', 'david'), to('related', 'natan-hanavi')],
      sources: [L('שמואל א׳ כב, ה', 'I Samuel 22:5'), L('שמואל ב׳ כד', 'II Samuel 24'), L('דברי הימים ב׳ כט, כה', 'II Chronicles 29:25'), L('בבא בתרא טו ע״א', 'Bava Batra 15a')],
      spots: biblical(67.3, 37.2),
      sections: [
        sec('חוזה דוד', 'גד הנביא הורה לדוד, בעודו בורח מפני שאול, לשוב לארץ יהודה. אחרי מניין העם בא אליו בשליחות ה׳ והציע לו לבחור אחד משלושה עונשים, ואחר כך ציווה אותו להקים מזבח בגורן ארונה היבוסי, הוא מקום בית המקדש.',
          'David’s Seer', 'Gad the Prophet instructed David, while he was fleeing from Shaul, to return to the land of Judah. After the census of the people he came to him on Hashem’s mission and offered him a choice of three punishments, and afterwards told him to build an altar on the threshing floor of Aravnah the Jebusite, the site of the Temple.'),
        sec('כתיבת ספר שמואל', 'לפי חז״ל, גד החוזה ונתן הנביא השלימו את ספר שמואל אחרי מות שמואל (בבא בתרא טו ע״א). בדברי הימים נאמר שסדרי השירה והלויים בבית המקדש נקבעו "במצות דוד וגד חוזה המלך ונתן הנביא".',
          'Writing the Book of Shmuel', 'According to Chazal, Gad the Seer and Natan the Prophet completed the Book of Shmuel after Shmuel’s death (Bava Batra 15a). Chronicles says that the order of the music and the Levites in the Temple was set "by the command of David and Gad the king’s seer and Natan the prophet".'),
      ],
    }),
    prophet({
      slug: 'natan-hanavi', name: L('נתן הנביא', 'Natan the Prophet'), cardColor: RED,
      summary: L('נביא בימי דוד ושלמה, שהוכיח את דוד במשל כבשת הרש.', 'A prophet in the days of David and Shlomo, who rebuked David with the parable of the poor man’s lamb.'),
      rel: [to('related', 'david'), to('related', 'shlomo'), to('related', 'gad-hachozeh'), to('related', 'tzadok-hakohen')],
      sources: [L('שמואל ב׳ ז; יב', 'II Samuel 7; 12'), L('מלכים א׳ א', 'I Kings 1'), L('דברי הימים ב׳ ט, כט', 'II Chronicles 9:29'), L('בבא בתרא טו ע״א', 'Bava Batra 15a')],
      spots: biblical(76.5, 37.3),
      sections: [
        sec('בית לדוד', 'כשרצה דוד לבנות בית לה׳, בא אליו נתן הנביא והודיע לו שבנו יבנה את הבית, וה׳ יבנה לדוד בית ומלכות עד עולם. אחרי מעשה בת שבע הוכיח אותו במשל כבשת הרש, ודוד הודה "חטאתי לה׳".',
          'A House for David', 'When David wished to build a house for Hashem, Natan the Prophet came to him and told him that his son would build it, and that Hashem would build David a house and a kingdom forever. After the incident of Bat-Sheva he rebuked him with the parable of the poor man’s lamb, and David admitted "I have sinned against Hashem".'),
        sec('המלכת שלמה', 'כשניסה אדוניהו לתפוס את המלוכה, פעל נתן יחד עם בת שבע להזכיר לדוד את שבועתו, ומשח יחד עם צדוק הכהן את שלמה למלך בגיחון. הוא קרא לשלמה ידידיה, וכתב את דברי דוד ושלמה.',
          'The Anointing of Shlomo', 'When Adoniyahu tried to seize the throne, Natan worked with Bat-Sheva to remind David of his oath, and together with Tzadok the Kohen anointed Shlomo king at the Gichon. He named Shlomo Yedidyah, and wrote the chronicles of David and Shlomo.'),
      ],
    }),
    prophet({
      slug: 'ido-hachozeh', name: L('עדו החוזה', 'Ido the Seer'), cardColor: BLUE,
      summary: L('נביא בימי שלמה, רחבעם ואביה, שכתב את דבריהם.', 'A prophet in the days of Shlomo, Rechavam and Aviyah, who wrote their chronicles.'),
      rel: [to('related', 'shlomo'), to('related', 'rechavam'), to('related', 'abiyam'), to('related', 'yeravam-ben-nevat')],
      sources: [L('דברי הימים ב׳ ט, כט; יב, טו; יג, כב', 'II Chronicles 9:29; 12:15; 13:22'), L('מלכים א׳ יג (ותרגום יונתן)', 'I Kings 13 (and Targum Yonatan)'), L('סנהדרין קג ע״ב', 'Sanhedrin 103b')],
      spots: biblical(74.6, 41.85),
      sections: [
        sec('חוזה ומחבר', 'עדו החוזה ניבא בימי שלמה, רחבעם ואביה. בספר דברי הימים נזכרים "חזות יעדי החוזה על ירבעם בן נבט", "דברי שמעיה הנביא ועדו החוזה" על רחבעם, ו"מדרש הנביא עדו" על אביה.',
          'Seer and Writer', 'Ido the Seer prophesied in the days of Shlomo, Rechavam and Aviyah. Chronicles mentions "the visions of Ido the seer concerning Yeravam son of Nevat", "the words of Shemayah the prophet and Ido the seer" about Rechavam, and "the commentary of the prophet Ido" about Aviyah.'),
        sec('איש האלוהים מיהודה', 'לפי תרגום יונתן ומדרשי חז״ל, עדו הוא "איש האלהים" שבא מיהודה לבית אל, ניבא על המזבח של ירבעם שיבוא יאשיהו וישרוף עליו עצמות, ויד ירבעם יבשה. בשובו בדרך, בניגוד לציווי, נהרג בידי אריה.',
          'The Man of God from Judah', 'According to Targum Yonatan and the Midrash, Ido is the "man of God" who came from Judah to Beit El and prophesied against Yeravam’s altar that Yoshiyahu would come and burn bones on it, and Yeravam’s hand withered. On his way back, against his instructions, he was killed by a lion.'),
      ],
    }),
    prophet({
      slug: 'shemayah-ish-haelokim', name: L('שמעיה איש האלהים', 'Shemayah the Man of God'), cardColor: BLUE,
      summary: L('נביא בימי רחבעם, שמנע מלחמת אחים בין יהודה לישראל.', 'A prophet in the days of Rechavam, who prevented a war between Judah and Israel.'),
      rel: [to('related', 'rechavam'), to('related', 'ido-hachozeh')],
      sources: [L('מלכים א׳ יב, כא – כד', 'I Kings 12:21–24'), L('דברי הימים ב׳ יא, ב – ד; יב, ה – ח; יב, טו', 'II Chronicles 11:2–4; 12:5–8; 12:15')],
      spots: biblical(78.4, 41.85),
      sections: [
        sec('לא תלחמון עם אחיכם', 'כשקיבץ רחבעם מאה ושמונים אלף איש להילחם בבית ישראל אחרי פילוג הממלכה, בא אליו שמעיה איש האלהים בדבר ה׳: "לא תעלו ולא תלחמון עם אחיכם בני ישראל", ושמעו בקולו ושבו.',
          'Do Not Fight Your Brothers', 'When Rechavam gathered a hundred and eighty thousand men to fight the house of Israel after the division of the kingdom, Shemayah the man of God came to him with the word of Hashem: "Do not go up and do not fight your brothers, the people of Israel", and they listened and returned.'),
        sec('בימי שישק', 'כשעלה שישק מלך מצרים על ירושלים, אמר שמעיה לרחבעם ולשרי יהודה: "אתם עזבתם אתי, ואף אני עזבתי אתכם ביד שישק". הם נכנעו לפני ה׳, וה׳ הבטיח שלא ישחיתם עד כלה. שמעיה כתב את דברי רחבעם יחד עם עדו החוזה.',
          'In the Days of Shishak', 'When Shishak king of Egypt came up against Jerusalem, Shemayah told Rechavam and the princes of Judah: "You have abandoned Me, so I have abandoned you to Shishak". They humbled themselves before Hashem, and Hashem promised not to destroy them completely. Shemayah wrote the chronicles of Rechavam together with Ido the Seer.'),
      ],
    }),
  ],
};
