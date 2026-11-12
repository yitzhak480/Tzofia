// The kings of the Kingdom of Israel, and Shaul and Ish-Boshet.
// Reign years and positions follow the Biblical tree poster. Where Tanach
// counts the reign differently, the note says so.
const { L, sec, article, reign, biblical, yearsCount, to, nm } = require('./helpers');

const king = (e) => ({
  categories: ['kings-of-israel'],
  roles: [L('מלך ישראל', 'King of Israel')],
  period: e.period || yearsCount(e.offices[0].to - e.offices[0].from),
  ...e,
  content: article(e.sections),
});

module.exports = [
  king({
    slug: 'shaul-hamelech', categories: ['kings'], name: L('שאול המלך', 'King Shaul (Saul)'),
    roles: [L('מלך ישראל', 'King of Israel'), L('המלך הראשון', 'The first king')],
    offices: [reign(2881, 2883)],
    summary: L('המלך הראשון של ישראל, שנמשח בידי שמואל הנביא.', 'The first king of Israel, anointed by Shmuel the Prophet.'),
    rel: [nm('father', 'קיש', 'Kish'), nm('child', 'יהונתן', 'Yehonatan'), to('child', 'ish-boshet'), nm('child', 'מיכל', 'Michal'), nm('child', 'מרב', 'Merav'), to('related', 'shmuel-hanavi'), to('related', 'david'), to('related', 'shevet-binyamin')],
    sources: [L('שמואל א׳ ט – לא', 'I Samuel 9–31'), L('יומא כב ע״ב', 'Yoma 22b'), L('ברכות יב ע״ב', 'Berachot 12b')],
    spots: biblical(38.96, 35.26),
    sections: [
      sec('נמשח למלך', 'שאול בן קיש, משבט בנימין, יצא לחפש את אתונות אביו והגיע אל שמואל הנביא, שמשח אותו בציווי ה׳ למלך הראשון על ישראל. "משכמו ומעלה גבה מכל העם". בתחילת מלכותו הושיע את יבש גלעד מיד נחש העמוני, והעם חידש את המלוכה בגלגל.',
        'Anointed King', 'Shaul son of Kish, of the tribe of Binyamin, went out to look for his father’s donkeys and came to Shmuel the Prophet, who at Hashem’s command anointed him the first king over Israel. "From his shoulders upward he was taller than all the people". At the start of his reign he saved Yavesh-Gilad from Nachash the Ammonite, and the people renewed the kingship at Gilgal.'),
      sec('עמלק ודוד', 'שאול נצטווה למחות את עמלק, אך חמל על אגג המלך ועל מיטב הצאן, ושמואל הודיעו: "קרע ה׳ את ממלכות ישראל מעליך היום". אחר כך גבר בו רוח רעה, ודוד ניגן לפניו. קנאתו בדוד הביאה אותו לרדוף אחריו שנים.',
        'Amalek and David', 'Shaul was commanded to wipe out Amalek, but he spared King Agag and the best of the flocks, and Shmuel told him: "Hashem has torn the kingdom of Israel from you today". Afterwards an evil spirit troubled him, and David played music before him. His jealousy of David led him to pursue him for years.'),
      sec('מותו בגלבוע', 'לפני המלחמה האחרונה בפלשתים פנה שאול לבעלת האוב בעין דור. בהר הגלבוע נהרגו בניו יהונתן, אבינדב ומלכישוע, ושאול נפל על חרבו. דוד קונן עליו ועל יהונתן: "איך נפלו גבורים". על האילן שלנו מצוינות שנות מלכותו 2881–2883; התנ״ך אומר "ושתי שנים מלך על ישראל".',
        'His Death on Gilboa', 'Before the last battle against the Philistines Shaul turned to the woman who consulted spirits at Ein Dor. On Mount Gilboa his sons Yehonatan, Avinadav and Malki-Shua were killed, and Shaul fell on his sword. David lamented him and Yehonatan: "How the mighty have fallen". Our tree gives his reign as 2881–2883; Tanach says "and he reigned two years over Israel".'),
    ],
  }),

  king({
    slug: 'ish-boshet', categories: ['kings'], name: L('איש בושת', 'Ish-Boshet'),
    offices: [reign(2883, 2885)],
    summary: L('בנו של שאול, שמלך על ישראל במחנים בזמן שדוד מלך ביהודה.', 'Shaul’s son, who reigned over Israel at Machanayim while David reigned in Yehudah.'),
    rel: [to('father', 'shaul-hamelech'), nm('related', 'אבנר בן נר', 'Avner son of Ner')],
    sources: [L('שמואל ב׳ ב – ד', 'II Samuel 2–4'), L('דברי הימים א׳ ח, לג', 'I Chronicles 8:33')],
    spots: biblical(37.05, 37.25),
    sections: [
      sec('מלך במחנים', 'אחרי מות שאול המליך אבנר בן נר, שר צבא שאול, את איש בושת בנו במחנים על הגלעד ועל כל ישראל, בזמן ששבט יהודה המליך את דוד בחברון. בדברי הימים הוא נקרא אשבעל.',
        'King at Machanayim', 'After Shaul’s death Avner son of Ner, Shaul’s general, made his son Ish-Boshet king at Machanayim over Gilad and all Israel, while the tribe of Yehudah made David king in Hebron. In Chronicles he is called Eshbaal.'),
      sec('סוף מלכותו', 'המלחמה בין בית שאול לבית דוד נמשכה, "ודוד הלך וחזק ובית שאול הלכים ודלים". אחרי שאבנר עבר לצד דוד, נרצח איש בושת במיטתו בידי רכב ובענה. דוד הוקיע את הרוצחים, ואחר כך מלך על כל ישראל.',
        'The End of His Reign', 'The war between the house of Shaul and the house of David went on, "and David grew stronger, while the house of Shaul grew weaker". After Avner went over to David, Ish-Boshet was murdered in his bed by Rechav and Baanah. David put the murderers to death, and then reigned over all Israel.'),
    ],
  }),

  king({
    slug: 'yeravam-ben-nevat', name: L('ירבעם בן נבט', 'Yeravam son of Nevat (Jeroboam I)'),
    roles: [L('מלך ישראל', 'King of Israel'), L('המלך הראשון של ממלכת ישראל', 'First king of the Kingdom of Israel')],
    offices: [reign(2964, 2985, 'בתנ״ך: 22 שנה (מלכים א׳ יד, כ)', 'In Tanach: 22 years (I Kings 14:20)')],
    summary: L('המלך הראשון של ממלכת ישראל, שהעמיד את עגלי הזהב בבית אל ובדן.', 'The first king of the Kingdom of Israel, who set up the golden calves in Beit El and Dan.'),
    rel: [nm('father', 'נבט', 'Nevat'), nm('mother', 'צרועה', 'Tzeruah'), to('child', 'nadav-ben-yeravam'), nm('child', 'אביה', 'Aviyah'), nm('related', 'אחיה השילוני', 'Achiyah the Shilonite'), to('related', 'shevet-efraim'), to('related', 'rechavam')],
    sources: [L('מלכים א׳ יא, כו – יד, כ', 'I Kings 11:26 – 14:20'), L('דברי הימים ב׳ י; יג', 'II Chronicles 10; 13'), L('סנהדרין קא ע״ב – קב ע״א', 'Sanhedrin 101b–102a'), L('משנה סנהדרין י, ב', 'Mishnah Sanhedrin 10:2')],
    spots: biblical(39.06, 41.87),
    sections: [
      sec('הנבואה והמרד', 'ירבעם בן נבט, משבט אפרים, היה ממונה על עבודות שלמה. אחיה השילוני קרע את שלמתו לשנים עשר קרעים ונתן לו עשרה, לסמל את עשרת השבטים שיימסרו בידו. אחרי מות שלמה, כשרחבעם דחה את בקשת העם, המליכו עשרת השבטים את ירבעם.',
        'The Prophecy and the Revolt', 'Yeravam son of Nevat, of the tribe of Ephraim, was in charge of Shlomo’s labor force. Achiyah the Shilonite tore his cloak into twelve pieces and gave him ten, a sign of the ten tribes that would be given to him. After Shlomo’s death, when Rechavam rejected the people’s request, the ten tribes made Yeravam king.'),
      sec('עגלי הזהב', 'כדי שהעם לא יעלה לירושלים ויחזור לבית דוד, עשה ירבעם שני עגלי זהב, הציב אחד בבית אל ואחד בדן, ואמר "הנה אלהיך ישראל". הוא מינה כהנים שלא מבני לוי וקבע חג בחודש השמיני. מכאן הביטוי "ירבעם בן נבט שחטא והחטיא את ישראל".',
        'The Golden Calves', 'So that the people would not go up to Jerusalem and return to the House of David, Yeravam made two golden calves, set one in Beit El and one in Dan, and said "Here are your gods, Israel". He appointed priests not from the sons of Levi and set a festival in the eighth month. From here comes the phrase "Yeravam son of Nevat, who sinned and caused Israel to sin".'),
      sec('דברי חז״ל', 'חז״ל מספרים שהקב״ה תפס את ירבעם בבגדו ואמר לו "חזור בך, ואני ואתה ובן ישי נטייל בגן עדן", וירבעם שאל "מי בראש?", וכששמע שבן ישי בראש, סירב (סנהדרין קב ע״א). במשנה הוא נמנה עם שלושת המלכים שאין להם חלק לעולם הבא. על האילן שלנו מצוינות שנות מלכותו 2964–2985.',
        'The Words of Chazal', 'Chazal relate that the Holy One seized Yeravam by his garment and said "Repent, and I, you and the son of Yishai will walk together in the Garden of Eden"; Yeravam asked "Who will be at the head?", and when he heard the son of Yishai would be, he refused (Sanhedrin 102a). In the Mishnah he is counted among the three kings who have no share in the World to Come. Our tree gives his reign as 2964–2985.'),
    ],
  }),

  king({
    slug: 'nadav-ben-yeravam', name: L('נדב בן ירבעם', 'Nadav son of Yeravam'),
    offices: [reign(2985, 2986, 'בתנ״ך: שנתיים (מלכים א׳ טו, כה)', 'In Tanach: 2 years (I Kings 15:25)')],
    summary: L('בנו של ירבעם, שנהרג בידי בעשא וכל בית ירבעם הוכרת.', 'Yeravam’s son, killed by Baasha, after which the whole house of Yeravam was cut off.'),
    rel: [to('father', 'yeravam-ben-nevat')],
    sources: [L('מלכים א׳ טו, כה – לא', 'I Kings 15:25–31')],
    spots: biblical(38.75, 43.22),
    sections: [
      sec('מלכותו ומותו', 'נדב בן ירבעם מלך על ישראל אחרי אביו, ועשה הרע בעיני ה׳ "וילך בדרך אביו". כשצר על גבתון אשר לפלשתים, קשר עליו בעשא בן אחיה מבית יששכר, הרג אותו ומלך תחתיו. בעשא הכה את כל בית ירבעם, כדבר ה׳ ביד אחיה השילוני.',
        'His Reign and Death', 'Nadav son of Yeravam reigned over Israel after his father and did evil in the eyes of Hashem, "walking in the way of his father". While he was besieging Gibbeton of the Philistines, Baasha son of Achiyah of the house of Yissachar conspired against him, killed him and reigned in his place. Baasha struck down the whole house of Yeravam, as Hashem had said through Achiyah the Shilonite.'),
    ],
  }),

  king({
    slug: 'baasha', name: L('בעשא בן אחיה', 'Baasha son of Achiyah'),
    offices: [reign(2986, 3009, 'בתנ״ך: 24 שנה (מלכים א׳ טו, לג)', 'In Tanach: 24 years (I Kings 15:33)')],
    summary: L('מלך ישראל משבט יששכר, שנלחם באסא מלך יהודה.', 'King of Israel from Yissachar, who fought Asa king of Judah.'),
    rel: [nm('father', 'אחיה', 'Achiyah'), to('child', 'elah-ben-baasha'), nm('related', 'יהוא בן חנני הנביא', 'Yehu son of Chanani the Prophet'), to('related', 'asa'), to('related', 'shevet-yissachar')],
    sources: [L('מלכים א׳ טו, כז – טז, ז', 'I Kings 15:27 – 16:7'), L('דברי הימים ב׳ טז, א – ו', 'II Chronicles 16:1–6')],
    spots: biblical(35.6, 43.22),
    sections: [
      sec('מלכותו', 'בעשא, משבט יששכר, הרג את נדב בן ירבעם ומלך בתרצה. הוא המשיך בחטאי ירבעם. הוא נלחם באסא מלך יהודה ובנה את הרמה כדי לחסום את הדרך לירושלים, אך אסא שכנע את בן הדד מלך ארם להפר את בריתו עם בעשא, ובעשא נאלץ לחדול.',
        'His Reign', 'Baasha, of the tribe of Yissachar, killed Nadav son of Yeravam and reigned in Tirtzah. He continued in the sins of Yeravam. He fought Asa king of Judah and built up Ramah to block the way to Jerusalem, but Asa persuaded Ben-Hadad king of Aram to break his treaty with Baasha, and Baasha was forced to stop.'),
      sec('נבואת יהוא בן חנני', 'יהוא בן חנני הנביא אמר לבעשא בשם ה׳: "יען אשר הרימתיך מן העפר ואתנך נגיד על עמי ישראל ותלך בדרך ירבעם", ולכן יבוער ביתו כבית ירבעם. על האילן שלנו מצוינות שנות מלכותו 2986–3009.',
        'The Prophecy of Yehu son of Chanani', 'Yehu son of Chanani the Prophet told Baasha in Hashem’s name: "Since I raised you up from the dust and made you ruler over My people Israel, and you walked in the way of Yeravam", his house would be swept away like the house of Yeravam. Our tree gives his reign as 2986–3009.'),
    ],
  }),

  king({
    slug: 'elah-ben-baasha', name: L('אלה בן בעשא', 'Elah son of Baasha'),
    offices: [reign(3009, 3010, 'בתנ״ך: שנתיים (מלכים א׳ טז, ח)', 'In Tanach: 2 years (I Kings 16:8)')],
    summary: L('בנו של בעשא, שנרצח בידי זמרי בעת שהיה שיכור.', 'Baasha’s son, murdered by Zimri while he was drunk.'),
    rel: [to('father', 'baasha')],
    sources: [L('מלכים א׳ טז, ח – יד', 'I Kings 16:8–14')],
    spots: biblical(35.6, 44.41),
    sections: [
      sec('מלכותו ומותו', 'אלה בן בעשא מלך בתרצה. בעוד הוא "שתה שכור" בבית ארצא, אשר על הבית בתרצה, קשר עליו זמרי, שר מחצית הרכב, הרג אותו ומלך תחתיו. זמרי הכרית את כל בית בעשא, כדבר יהוא בן חנני הנביא.',
        'His Reign and Death', 'Elah son of Baasha reigned in Tirtzah. While he was "drinking himself drunk" in the house of Artza, who was over the household in Tirtzah, Zimri, commander of half the chariots, conspired against him, killed him and reigned in his place. Zimri cut off the whole house of Baasha, as Yehu son of Chanani the Prophet had said.'),
    ],
  }),

  king({
    slug: 'zimri', name: L('זמרי', 'Zimri'),
    offices: [reign(3010, 3010, 'שבעה ימים', 'Seven days')], period: L('7 ימים', '7 days'),
    summary: L('מלך שבעה ימים בתרצה, ושרף את בית המלך על עצמו.', 'Reigned seven days in Tirtzah, and burned the palace over himself.'),
    rel: [to('related', 'elah-ben-baasha'), to('related', 'omri')],
    sources: [L('מלכים א׳ טז, ט – כ', 'I Kings 16:9–20')],
    spots: biblical(40.3, 44.41),
    sections: [
      sec('שבעה ימים', 'זמרי, שר מחצית הרכב, הרג את אלה בן בעשא ומלך בתרצה שבעה ימים בלבד. כששמע העם החונה על גבתון, המליכו את עמרי שר הצבא, והוא עלה וצר על תרצה. כשראה זמרי שהעיר נלכדה, נכנס לארמון בית המלך, שרף אותו עליו באש ומת.',
        'Seven Days', 'Zimri, commander of half the chariots, killed Elah son of Baasha and reigned in Tirtzah for only seven days. When the army camped at Gibbeton heard, they made Omri, the general, king, and he came up and besieged Tirtzah. When Zimri saw that the city was taken, he went into the citadel of the palace, set it on fire over himself and died.'),
    ],
  }),

  king({
    slug: 'tivni', name: L('תבני בן גינת', 'Tivni son of Ginat'),
    offices: [reign(3010, 3014)],
    summary: L('מלך על חצי העם בתקופת המחלוקת עם עמרי.', 'Reigned over half the people during the struggle with Omri.'),
    rel: [nm('father', 'גינת', 'Ginat'), to('related', 'omri')],
    sources: [L('מלכים א׳ טז, כא – כב', 'I Kings 16:21–22')],
    spots: biblical(43.32, 44.41),
    sections: [
      sec('העם נחלק', 'אחרי מות זמרי נחלק העם לשניים: "חצי העם היה אחרי תבני בן גינת להמליכו, והחצי אחרי עמרי". המחלוקת נמשכה כארבע שנים, עד ש"ויחזק העם אשר אחרי עמרי... וימת תבני וימלך עמרי".',
        'The People Divided', 'After Zimri’s death the people split in two: "half the people followed Tivni son of Ginat to make him king, and half followed Omri". The struggle lasted about four years, until "the people who followed Omri prevailed... and Tivni died and Omri reigned".'),
    ],
  }),

  king({
    slug: 'omri', name: L('עמרי', 'Omri'),
    offices: [reign(3010, 3021, 'בתנ״ך: 12 שנה (מלכים א׳ טז, כג)', 'In Tanach: 12 years (I Kings 16:23)')],
    summary: L('מייסד בית עמרי, שבנה את העיר שומרון.', 'Founder of the house of Omri, who built the city of Shomron.'),
    rel: [to('child', 'achav')],
    sources: [L('מלכים א׳ טז, טו – כח', 'I Kings 16:15–28'), L('סנהדרין קב ע״ב', 'Sanhedrin 102b')],
    spots: biblical(32.34, 44.41),
    sections: [
      sec('בונה שומרון', 'עמרי, שר צבא ישראל, הומלך בידי העם אחרי זמרי. שש שנים מלך בתרצה, ואחר כך קנה את הר שומרון משמר בכיכרים כסף, בנה עליו עיר וקרא לה שומרון, שהייתה לבירת ממלכת ישראל עד חורבנה.',
        'Builder of Shomron', 'Omri, the general of Israel, was made king by the people after Zimri. He reigned six years in Tirtzah, and then bought the hill of Shomron from Shemer for two talents of silver, built a city on it and named it Shomron, which remained the capital of the Kingdom of Israel until its destruction.'),
      sec('בית עמרי', 'עמרי הרע לעשות מכל אשר לפניו. חז״ל מלמדים שזכה למלכות לו ולבניו, משום שהוסיף כרך אחד בארץ ישראל (סנהדרין קב ע״ב). בית עמרי מלך שלושה דורות: עמרי, אחאב, ובניו אחזיהו ויהורם.',
        'The House of Omri', 'Omri did more evil than all who came before him. Chazal teach that he merited the kingship for himself and his sons because he added a city to the Land of Israel (Sanhedrin 102b). The house of Omri reigned three generations: Omri, Achav, and his sons Achazyahu and Yehoram.'),
    ],
  }),

  king({
    slug: 'achav', name: L('אחאב', 'Achav (Ahab)'),
    offices: [reign(3021, 3041, 'בתנ״ך: 22 שנה (מלכים א׳ טז, כט)', 'In Tanach: 22 years (I Kings 16:29)')],
    summary: L('מלך ישראל ובעלה של איזבל, שבימיו פעל אליהו הנביא.', 'King of Israel and husband of Izevel, in whose days Eliyahu the Prophet was active.'),
    rel: [to('father', 'omri'), nm('spouse', 'איזבל', 'Izevel (Jezebel)'), to('child', 'achazyahu-ben-achav'), to('child', 'yehoram-ben-achav'), to('child', 'atalyah'), nm('related', 'אליהו הנביא', 'Eliyahu the Prophet'), nm('related', 'מיכיהו בן ימלה', 'Michayhu son of Yimlah'), to('related', 'yehoshafat')],
    sources: [L('מלכים א׳ טז, כט – כב, מ', 'I Kings 16:29 – 22:40'), L('דברי הימים ב׳ יח', 'II Chronicles 18'), L('סנהדרין קב ע״ב', 'Sanhedrin 102b')],
    spots: biblical(43.63, 46.11),
    sections: [
      sec('אחאב ואיזבל', 'אחאב בן עמרי נשא את איזבל בת אתבעל מלך צידונים, בנה מקדש לבעל בשומרון והעמיד אשרה. איזבל רדפה את נביאי ה׳, ועובדיהו, אשר על הבית, החביא מאה נביאים במערות. "ויוסף אחאב לעשות להכעיס את ה׳ מכל מלכי ישראל".',
        'Achav and Izevel', 'Achav son of Omri married Izevel daughter of Etbaal king of the Sidonians, built a temple to Baal in Shomron and set up an Asherah. Izevel persecuted the prophets of Hashem, and Ovadyahu, who was over the household, hid a hundred prophets in caves. "Achav did more to provoke Hashem than all the kings of Israel".'),
      sec('אליהו והר הכרמל', 'אליהו הנביא גזר בצורת שנמשכה שלוש שנים. בהר הכרמל עמד מול נביאי הבעל, ירדה אש ה׳ ואכלה את העולה, והעם קרא "ה׳ הוא האלהים". אחר כך, כשרצח אחאב את נבות היזרעאלי בעצת איזבל ולקח את כרמו, אמר לו אליהו: "הרצחת וגם ירשת?"',
        'Eliyahu and Mount Carmel', 'Eliyahu the Prophet decreed a drought that lasted three years. On Mount Carmel he stood against the prophets of Baal, the fire of Hashem came down and consumed the offering, and the people cried "Hashem is God". Later, when Achav murdered Navot of Yizre’el on Izevel’s advice and took his vineyard, Eliyahu said to him: "Have you murdered and also inherited?"'),
      sec('מלחמותיו ומותו', 'אחאב ניצח פעמיים את בן הדד מלך ארם. חז״ל מספרים שהיה ותרן בממונו ונהנה ממנו תלמידי חכמים (סנהדרין קב ע״ב). הוא יצא עם יהושפט מלך יהודה להילחם ברמות גלעד, אף שמיכיהו בן ימלה ניבא את מפלתו, ונהרג מחץ שנורה "לתומו". על האילן שלנו מצוינות שנות מלכותו 3021–3041.',
        'His Wars and Death', 'Achav twice defeated Ben-Hadad king of Aram. Chazal relate that he was generous with his wealth and Torah scholars benefited from it (Sanhedrin 102b). He went out with Yehoshafat king of Judah to fight at Ramot Gilad, even though Michayhu son of Yimlah prophesied his defeat, and was killed by an arrow shot "at random". Our tree gives his reign as 3021–3041.'),
    ],
  }),

  king({
    slug: 'achazyahu-ben-achav', name: L('אחזיהו בן אחאב', 'Achazyahu son of Achav (Ahaziah)'),
    offices: [reign(3041, 3043)],
    summary: L('בנו של אחאב, שנפל מן החלון ודרש בבעל זבוב.', 'Achav’s son, who fell through a window and inquired of Baal-Zevuv.'),
    rel: [to('father', 'achav'), nm('mother', 'איזבל', 'Izevel (Jezebel)'), to('sibling', 'yehoram-ben-achav'), nm('related', 'אליהו הנביא', 'Eliyahu the Prophet')],
    sources: [L('מלכים א׳ כב, נב – נד', 'I Kings 22:52–54'), L('מלכים ב׳ א', 'II Kings 1'), L('דברי הימים ב׳ כ, לה – לז', 'II Chronicles 20:35–37')],
    spots: biblical(43.24, 47.64),
    sections: [
      sec('מלכותו', 'אחזיהו בן אחאב מלך בשומרון שנתיים, והלך בדרך אביו ואמו. הוא נפל בעד השבכה בעליית ביתו ונחלה, ושלח לדרוש בבעל זבוב אלהי עקרון אם יחיה.',
        'His Reign', 'Achazyahu son of Achav reigned two years in Shomron, and walked in the way of his father and mother. He fell through the lattice of his upper chamber and was injured, and sent to inquire of Baal-Zevuv, the god of Ekron, whether he would recover.'),
      sec('אליהו', 'אליהו הנביא יצא לקראת השליחים ואמר: "המבלי אין אלהים בישראל אתם הלכים לדרש בבעל זבוב?" אחזיהו שלח שרי חמישים לתפוס את אליהו, ושניים מהם נאכלו באש מן השמים. אליהו בא אל המלך והודיע לו שימות, וכך היה. מכיוון שלא היו לו בנים, מלך אחיו יהורם תחתיו.',
        'Eliyahu', 'Eliyahu the Prophet went to meet the messengers and said: "Is there no God in Israel, that you go to inquire of Baal-Zevuv?" Achazyahu sent captains of fifty to seize Eliyahu, and two of them were consumed by fire from heaven. Eliyahu came to the king and told him he would die, and so it was. Since he had no sons, his brother Yehoram reigned in his place.'),
    ],
  }),

  king({
    slug: 'yehoram-ben-achav', name: L('יהורם בן אחאב', 'Yehoram son of Achav (Jehoram)'),
    offices: [reign(3043, 3055)],
    summary: L('האחרון לבית עמרי, שבימיו פעל אלישע הנביא.', 'The last of the house of Omri, in whose days Elisha the Prophet was active.'),
    rel: [to('father', 'achav'), nm('mother', 'איזבל', 'Izevel (Jezebel)'), to('sibling', 'achazyahu-ben-achav'), nm('related', 'אלישע הנביא', 'Elisha the Prophet'), to('related', 'yehu'), to('related', 'yehoshafat')],
    sources: [L('מלכים ב׳ ג; ה – ט', 'II Kings 3; 5–9')],
    spots: biblical(37.79, 47.64),
    sections: [
      sec('מלכותו', 'יהורם, הנקרא גם יורם, מלך בשומרון שתים עשרה שנה. הוא הסיר את מצבת הבעל שעשה אביו, אך דבק בחטאי ירבעם. יחד עם יהושפט מלך יהודה ומלך אדום יצא למלחמה במואב, וכשלא היו מים במדבר, אמר אלישע הנביא "עשה הנחל הזה גבים גבים", והנחל התמלא מים.',
        'His Reign', 'Yehoram, also called Yoram, reigned twelve years in Shomron. He removed the pillar of Baal that his father had made, but clung to the sins of Yeravam. Together with Yehoshafat king of Judah and the king of Edom he went to war against Moav, and when there was no water in the desert Elisha the Prophet said "Make this valley full of ditches", and the valley filled with water.'),
      sec('בימי אלישע', 'בימיו ריפא אלישע את נעמן שר צבא ארם מצרעתו, ובמצור הקשה על שומרון בישר על שובע למחרת, כשארבעה המצורעים גילו שמחנה ארם נס. יהורם נפצע במלחמה ברמות גלעד, ונהרג בידי יהוא בשדה נבות היזרעאלי, וכך תם בית אחאב.',
        'In the Days of Elisha', 'In his days Elisha healed Naaman, the general of Aram, of his tzara’at, and during the hard siege of Shomron foretold plenty for the next day, when four men with tzara’at discovered that the army of Aram had fled. Yehoram was wounded in battle at Ramot Gilad, and was killed by Yehu in the field of Navot of Yizre’el, and so the house of Achav came to an end.'),
    ],
  }),

  king({
    slug: 'yehu', name: L('יהוא בן נמשי', 'Yehu son of Nimshi (Jehu)'),
    offices: [reign(3055, 3083)],
    summary: L('מייסד בית יהוא, שהכרית את בית אחאב ואת עבודת הבעל.', 'Founder of the house of Yehu, who cut off the house of Achav and the worship of Baal.'),
    rel: [nm('father', 'יהושפט בן נמשי', 'Yehoshafat son of Nimshi'), to('child', 'yehoachaz-ben-yehu'), nm('related', 'אלישע הנביא', 'Elisha the Prophet'), to('related', 'yehoram-ben-achav'), to('related', 'achazyahu')],
    sources: [L('מלכים א׳ יט, טז', 'I Kings 19:16'), L('מלכים ב׳ ט – י', 'II Kings 9–10'), L('סדר עולם רבה יט', 'Seder Olam Rabbah 19')],
    spots: biblical(40.04, 50.42),
    sections: [
      sec('נמשח למלך', 'יהוא בן יהושפט בן נמשי, משרי צבא ישראל, נמשח למלך בשליחות אלישע הנביא, כדבר ה׳ לאליהו בחורב. לפי סדר עולם, הנער ששלח אלישע למשוח אותו היה יונה בן אמיתי. יהוא "ינהג בשגעון", דהר ליזרעאל, הרג את יהורם מלך ישראל ואת אחזיהו מלך יהודה, ואיזבל הושלכה מן החלון.',
        'Anointed King', 'Yehu son of Yehoshafat son of Nimshi, one of the commanders of Israel, was anointed king by the messenger of Elisha the Prophet, as Hashem had told Eliyahu at Chorev. According to Seder Olam, the young man Elisha sent to anoint him was Yonah son of Amitai. Yehu "drove furiously", raced to Yizre’el, killed Yehoram king of Israel and Achazyahu king of Judah, and Izevel was thrown from the window.'),
      sec('השמדת הבעל', 'יהוא הכרית את כל בית אחאב, כינס את כל עובדי הבעל לבית הבעל והשמידם, ונתץ את הבית. ה׳ הבטיח לו שבניו ישבו על כסא ישראל ארבעה דורות. אך את עגלי הזהב בבית אל ובדן לא הסיר. הוא מלך עשרים ושמונה שנה בשומרון.',
        'The End of Baal Worship', 'Yehu cut off the whole house of Achav, gathered all the worshippers of Baal into the temple of Baal and destroyed them, and tore down the temple. Hashem promised him that his sons would sit on the throne of Israel for four generations. But he did not remove the golden calves in Beit El and Dan. He reigned twenty-eight years in Shomron.'),
    ],
  }),

  king({
    slug: 'yehoachaz-ben-yehu', name: L('יהואחז בן יהוא', 'Yehoachaz son of Yehu (Jehoahaz)'),
    offices: [reign(3083, 3098, 'בתנ״ך: 17 שנה (מלכים ב׳ יג, א)', 'In Tanach: 17 years (II Kings 13:1)')],
    summary: L('בנו של יהוא, שבימיו לחץ ארם את ישראל.', 'Yehu’s son, in whose days Aram oppressed Israel.'),
    rel: [to('father', 'yehu'), to('child', 'yoash-ben-yehoachaz')],
    sources: [L('מלכים ב׳ יג, א – ט', 'II Kings 13:1–9')],
    spots: biblical(40.04, 52.16),
    sections: [
      sec('בלחץ ארם', 'יהואחז בן יהוא מלך בשומרון, וה׳ נתן את ישראל ביד חזאל מלך ארם ובן הדד בנו. יהואחז חילה את פני ה׳, וה׳ נתן לישראל מושיע. צבאו הצטמצם עד שנשארו לו רק חמישים פרשים, עשרה רכב ועשרת אלפים רגלי. על האילן שלנו מצוינות שנות מלכותו 3083–3098.',
        'Under the Pressure of Aram', 'Yehoachaz son of Yehu reigned in Shomron, and Hashem gave Israel into the hand of Chazael king of Aram and Ben-Hadad his son. Yehoachaz entreated Hashem, and Hashem gave Israel a savior. His army shrank until he had only fifty horsemen, ten chariots and ten thousand foot soldiers. Our tree gives his reign as 3083–3098.'),
    ],
  }),

  king({
    slug: 'yoash-ben-yehoachaz', name: L('יואש בן יהואחז', 'Yoash son of Yehoachaz (Joash)'),
    offices: [reign(3098, 3114)],
    summary: L('מלך ישראל שביקר את אלישע לפני מותו וניצח את ארם ואת אמציה.', 'King of Israel who visited Elisha before his death and defeated Aram and Amatzyah.'),
    rel: [to('father', 'yehoachaz-ben-yehu'), to('child', 'yeravam-ben-yoash'), nm('related', 'אלישע הנביא', 'Elisha the Prophet'), to('related', 'amatzyah')],
    sources: [L('מלכים ב׳ יג, י – כה; יד, ח – טז', 'II Kings 13:10–25; 14:8–16'), L('דברי הימים ב׳ כה, יז – כד', 'II Chronicles 25:17–24')],
    spots: biblical(40.04, 53.39),
    sections: [
      sec('אבי אבי', 'כשחלה אלישע את חוליו אשר ימות בו, ירד אליו יואש ובכה: "אבי אבי, רכב ישראל ופרשיו". אלישע ציווה עליו לירות בחץ ולהכות בחצים בארץ; יואש הכה שלוש פעמים ועמד, ואלישע אמר שלכן ינצח את ארם רק שלוש פעמים. וכך היה.',
        'My Father, My Father', 'When Elisha fell ill with the illness from which he would die, Yoash went down to him and wept: "My father, my father, the chariot of Israel and its horsemen". Elisha told him to shoot an arrow and strike the ground with the arrows; Yoash struck three times and stopped, and Elisha said that therefore he would defeat Aram only three times. And so it was.'),
      sec('מול אמציה', 'אמציה מלך יהודה הזמין את יואש להתמודד מולו. יואש השיב במשל החוח והארז, ובמלחמה בבית שמש ניצח את יהודה, תפס את אמציה, פרץ בחומת ירושלים ולקח את אוצרות בית ה׳. הוא מלך שש עשרה שנה בשומרון.',
        'Against Amatzyah', 'Amatzyah king of Judah challenged Yoash to face him. Yoash replied with the parable of the thistle and the cedar, and in the battle at Beit Shemesh he defeated Judah, captured Amatzyah, broke through the wall of Jerusalem and took the treasures of the House of Hashem. He reigned sixteen years in Shomron.'),
    ],
  }),

  king({
    slug: 'yeravam-ben-yoash', name: L('ירבעם בן יואש', 'Yeravam son of Yoash (Jeroboam II)'),
    offices: [reign(3114, 3153, 'בתנ״ך: 41 שנה (מלכים ב׳ יד, כג)', 'In Tanach: 41 years (II Kings 14:23)')],
    summary: L('מלך ישראל שהשיב את גבולות הממלכה, ובימיו ניבאו יונה, עמוס והושע.', 'King of Israel who restored the kingdom’s borders, in whose days Yonah, Amos and Hoshea prophesied.'),
    rel: [to('father', 'yoash-ben-yehoachaz'), to('child', 'zecharyah-ben-yeravam'), nm('related', 'יונה בן אמיתי', 'Yonah son of Amitai'), nm('related', 'עמוס הנביא', 'Amos the Prophet'), nm('related', 'הושע בן בארי', 'Hoshea son of Beeri')],
    sources: [L('מלכים ב׳ יד, כג – כט', 'II Kings 14:23–29'), L('עמוס א, א; ז, י – יז', 'Amos 1:1; 7:10–17'), L('הושע א, א', 'Hosea 1:1'), L('פסחים פז ע״ב', 'Pesachim 87b')],
    spots: biblical(40.04, 54.71),
    sections: [
      sec('השבת הגבולות', 'ירבעם בן יואש מלך בשומרון ארבעים ואחת שנה. "הוא השיב את גבול ישראל מלבוא חמת עד ים הערבה", כדבר ה׳ ביד יונה בן אמיתי הנביא. בימיו שגשגה ממלכת ישראל, אף שהמשיך בחטאי ירבעם בן נבט.',
        'Restoring the Borders', 'Yeravam son of Yoash reigned forty-one years in Shomron. "He restored the border of Israel from Levo-Chamat to the Sea of the Aravah", as Hashem had said through Yonah son of Amitai the Prophet. In his days the Kingdom of Israel prospered, even though he continued in the sins of Yeravam son of Nevat.'),
      sec('בימי הנביאים', 'בימיו ניבאו הושע ועמוס. כשאמציה כהן בית אל הלשין על עמוס לפני המלך, לא קיבל ירבעם את הלשון הרע, ואמר: "חס ושלום, אם אמר נביא זה, מה אעשה לו, שכינה אמרה לו" (פסחים פז ע״ב). על האילן שלנו מצוינות שנות מלכותו 3114–3153.',
        'In the Days of the Prophets', 'In his days Hoshea and Amos prophesied. When Amatzyah the priest of Beit El informed on Amos to the king, Yeravam did not accept the slander, saying: "Heaven forbid; if that prophet said so, what can I do to him? The Divine Presence told him" (Pesachim 87b). Our tree gives his reign as 3114–3153.'),
    ],
  }),

  king({
    slug: 'zecharyah-ben-yeravam', name: L('זכריה בן ירבעם', 'Zecharyah son of Yeravam (Zechariah)'),
    offices: [reign(3153, 3153, 'שישה חודשים', 'Six months')], period: L('6 חודשים', '6 months'),
    summary: L('האחרון לבית יהוא, שמלך שישה חודשים.', 'The last of the house of Yehu, who reigned six months.'),
    rel: [to('father', 'yeravam-ben-yoash'), to('related', 'shalum-ben-yavesh')],
    sources: [L('מלכים ב׳ טו, ח – יב', 'II Kings 15:8–12')],
    spots: biblical(40.04, 56.0),
    sections: [
      sec('הדור הרביעי', 'זכריה בן ירבעם מלך בשומרון שישה חודשים. שלום בן יבש קשר עליו והרג אותו לעיני העם, ומלך תחתיו. בכך נתקיים דבר ה׳ ליהוא: "בני רביעים ישבו לך על כסא ישראל", וזכריה היה הדור הרביעי.',
        'The Fourth Generation', 'Zecharyah son of Yeravam reigned six months in Shomron. Shalum son of Yavesh conspired against him and killed him before the people, and reigned in his place. So the word of Hashem to Yehu was fulfilled: "Your sons to the fourth generation shall sit on the throne of Israel", and Zecharyah was the fourth generation.'),
    ],
  }),

  king({
    slug: 'shalum-ben-yavesh', name: L('שלום בן יבש', 'Shalum son of Yavesh (Shallum)'),
    offices: [reign(3153, 3153, 'חודש ימים', 'One month')], period: L('חודש אחד', '1 month'),
    summary: L('מלך חודש ימים בשומרון, עד שנהרג בידי מנחם.', 'Reigned one month in Shomron, until he was killed by Menachem.'),
    rel: [nm('father', 'יבש', 'Yavesh'), to('related', 'zecharyah-ben-yeravam'), to('related', 'menachem-ben-gadi')],
    sources: [L('מלכים ב׳ טו, י – טו', 'II Kings 15:10–15')],
    spots: biblical(36.79, 56.0),
    sections: [
      sec('חודש ימים', 'שלום בן יבש הרג את זכריה בן ירבעם ומלך תחתיו בשנת שלושים ותשע לעוזיהו מלך יהודה. הוא מלך ירח ימים בלבד בשומרון, ומנחם בן גדי עלה מתרצה, הרג אותו ומלך תחתיו.',
        'One Month', 'Shalum son of Yavesh killed Zecharyah son of Yeravam and reigned in his place in the thirty-ninth year of Uziyahu king of Judah. He reigned only one month in Shomron, and Menachem son of Gadi came up from Tirtzah, killed him and reigned in his place.'),
    ],
  }),

  king({
    slug: 'menachem-ben-gadi', name: L('מנחם בן גדי', 'Menachem son of Gadi'),
    offices: [reign(3154, 3164)],
    summary: L('מלך ישראל ששילם לפול מלך אשור אלף כיכר כסף.', 'King of Israel who paid Pul king of Assyria a thousand talents of silver.'),
    rel: [nm('father', 'גדי', 'Gadi'), to('child', 'pekachyah')],
    sources: [L('מלכים ב׳ טו, יד – כב', 'II Kings 15:14–22')],
    spots: biblical(33.39, 56.0),
    sections: [
      sec('מס לאשור', 'מנחם בן גדי הרג את שלום בן יבש ומלך עשר שנים בשומרון. כשבא פול מלך אשור על הארץ, נתן לו מנחם אלף כיכר כסף כדי שיחזק את הממלכה בידו, וגבה את הכסף מכל גיבורי החיל, חמישים שקלים לאיש. "ויעש הרע בעיני ה׳, לא סר מעל חטאות ירבעם בן נבט".',
        'Tribute to Assyria', 'Menachem son of Gadi killed Shalum son of Yavesh and reigned ten years in Shomron. When Pul king of Assyria came against the land, Menachem gave him a thousand talents of silver so that he would strengthen the kingdom in his hand, and collected the money from all the wealthy men, fifty shekels each. "He did evil in the eyes of Hashem; he did not turn from the sins of Yeravam son of Nevat".'),
    ],
  }),

  king({
    slug: 'pekachyah', name: L('פקחיה בן מנחם', 'Pekachyah son of Menachem'),
    offices: [reign(3165, 3166, 'בתנ״ך: שנתיים (מלכים ב׳ טו, כג)', 'In Tanach: 2 years (II Kings 15:23)')],
    summary: L('בנו של מנחם, שנהרג בידי פקח בן רמליהו.', 'Menachem’s son, killed by Pekach son of Remalyahu.'),
    rel: [to('father', 'menachem-ben-gadi'), to('related', 'pekach')],
    sources: [L('מלכים ב׳ טו, כג – כו', 'II Kings 15:23–26')],
    spots: biblical(33.39, 57.48),
    sections: [
      sec('מלכותו ומותו', 'פקחיה בן מנחם מלך בשומרון אחרי אביו ועשה הרע בעיני ה׳. פקח בן רמליהו, שלישו, קשר עליו עם חמישים איש מבני גלעד, הרג אותו בארמון בית המלך ומלך תחתיו.',
        'His Reign and Death', 'Pekachyah son of Menachem reigned in Shomron after his father and did evil in the eyes of Hashem. Pekach son of Remalyahu, his officer, conspired against him with fifty men of Gilad, killed him in the citadel of the palace and reigned in his place.'),
    ],
  }),

  king({
    slug: 'pekach', name: L('פקח בן רמליהו', 'Pekach son of Remalyahu (Pekah)'),
    offices: [reign(3167, 3187)],
    summary: L('מלך ישראל שבימיו הוגלו הגליל וארץ נפתלי לאשור.', 'King of Israel in whose days the Galilee and the land of Naftali were exiled to Assyria.'),
    rel: [nm('father', 'רמליהו', 'Remalyahu'), to('related', 'pekachyah'), to('related', 'achaz'), nm('related', 'עודד הנביא', 'Oded the Prophet'), to('related', 'shevet-naftali')],
    sources: [L('מלכים ב׳ טו, כה – לא; טז, ה', 'II Kings 15:25–31; 16:5'), L('ישעיהו ז', 'Isaiah 7'), L('דברי הימים ב׳ כח, ה – טו', 'II Chronicles 28:5–15')],
    spots: biblical(36.79, 57.48),
    sections: [
      sec('מלחמה ביהודה', 'פקח בן רמליהו מלך בשומרון עשרים שנה. הוא חבר לרצין מלך ארם ועלה על ירושלים להילחם באחז מלך יהודה, וישעיהו הנביא אמר לאחז שלא יירא "משני זנבות האודים העשנים האלה". פקח הכה ביהודה מכה קשה ושבה רבים, אך עודד הנביא הוכיח את השבאים, והם השיבו את השבויים.',
        'War against Judah', 'Pekach son of Remalyahu reigned twenty years in Shomron. He joined Retzin king of Aram and came up against Jerusalem to fight Achaz king of Judah, and Yeshayahu the Prophet told Achaz not to fear "these two tails of smoking firebrands". Pekach struck Judah hard and took many captives, but Oded the Prophet rebuked the captors, and they returned the captives.'),
      sec('גלות הגליל', 'בימי פקח בא תגלת פלאסר מלך אשור, לקח את עיון, אבל בית מעכה וחצור, את הגלעד והגליל וכל ארץ נפתלי, והגלה את יושביהם לאשור. הושע בן אלה קשר על פקח, הרג אותו ומלך תחתיו.',
        'The Exile of the Galilee', 'In the days of Pekach, Tiglat-Pileser king of Assyria came and took Iyon, Avel Beit Maachah and Chatzor, Gilad and the Galilee and all the land of Naftali, and exiled their inhabitants to Assyria. Hoshea son of Elah conspired against Pekach, killed him and reigned in his place.'),
    ],
  }),

  king({
    slug: 'hoshea-ben-elah', name: L('הושע בן אלה', 'Hoshea son of Elah (Hoshea)'),
    roles: [L('מלך ישראל', 'King of Israel'), L('המלך האחרון של ממלכת ישראל', 'The last king of the Kingdom of Israel')],
    offices: [reign(3187, 3205, 'בתנ״ך: 9 שנים (מלכים ב׳ יז, א)', 'In Tanach: 9 years (II Kings 17:1)')],
    summary: L('מלכה האחרון של ממלכת ישראל, שבימיו חרבה שומרון וגלו עשרת השבטים.', 'The last king of the Kingdom of Israel, in whose days Shomron fell and the ten tribes were exiled.'),
    rel: [nm('father', 'אלה', 'Elah'), to('related', 'pekach'), to('related', 'chizkiyahu')],
    sources: [L('מלכים ב׳ טו, ל; יז', 'II Kings 15:30; 17'), L('מלכים ב׳ יח, ט – יב', 'II Kings 18:9–12'), L('גיטין פח ע״א', 'Gittin 88a'), L('תענית ל ע״ב', 'Taanit 30b')],
    spots: biblical(40.04, 57.48),
    sections: [
      sec('המלך האחרון', 'הושע בן אלה הרג את פקח ומלך בשומרון. "ויעש הרע בעיני ה׳, רק לא כמלכי ישראל אשר היו לפניו". חז״ל מספרים שהסיר את המשמרות שהציב ירבעם בדרכים כדי שישראל לא יעלו לרגל לירושלים, אך העם לא עלה, ולכן נגזרה הגלות דווקא בימיו (גיטין פח ע״א). לפי המסורת, הסרת המשמרות הייתה בט״ו באב (תענית ל ע״ב).',
        'The Last King', 'Hoshea son of Elah killed Pekach and reigned in Shomron. "He did evil in the eyes of Hashem, but not like the kings of Israel who were before him". Chazal relate that he removed the guards Yeravam had posted on the roads to stop Israel from going up to Jerusalem for the festivals, but the people did not go up, and so the exile was decreed in his days (Gittin 88a). According to tradition, the guards were removed on the fifteenth of Av (Taanit 30b).'),
      sec('חורבן שומרון', 'הושע היה עבד לשלמנאסר מלך אשור, אך קשר קשר עם סוא מלך מצרים ולא העלה מס. מלך אשור עלה על שומרון וצר עליה שלוש שנים, לכד אותה והגלה את ישראל לחלח, לחבור ולערי מדי. בכך באה ממלכת ישראל אל קצה, בשנה השישית לחזקיהו מלך יהודה. על האילן שלנו מצוינות שנות מלכותו 3187–3205.',
        'The Fall of Shomron', 'Hoshea was a vassal of Shalmaneser king of Assyria, but conspired with So king of Egypt and stopped paying tribute. The king of Assyria came up against Shomron and besieged it for three years, captured it and exiled Israel to Chalach, Chavor and the cities of Media. So the Kingdom of Israel came to its end, in the sixth year of Hizkiyahu king of Judah. Our tree gives his reign as 3187–3205.'),
    ],
  }),
];
