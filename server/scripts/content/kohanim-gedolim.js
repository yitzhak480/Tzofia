// The High Priests of the Mishkan and the First Temple, following the red
// list on the Biblical tree poster. From Pinchas: Divrei HaYamim I 5:29–41.
// From Eli: Shmuel I. From Tzadok's grandson Azaryah to Shalum: the list of
// Seder Olam Zuta (chapters 5–7), whose names have no family link between them
// (black arrows on the poster). From Shalum to Seraya: Divrei HaYamim I 5.
//
// Similar names to keep apart: Achituv son of Pinchas (Eli's grandson) is not
// Achituv the father of Tzadok; the Kohanim Yehoram, Yehoachaz, Yehoshafat,
// Tzidkiyahu, Yotam are not the kings; Yoel, Uriyah, Neriyah, Seraya are not
// the prophets of the same name; Achimaatz son of Tzadok is not Achimaatz of
// Naftali (I Kings 4:15).
const { L, sec, article, office, biblical, to, nm } = require('./helpers');

const COLOR = 't1-levi';
const HP = L('כהן גדול', 'High Priest');
const soz = (kingHe, kingEn) => [
  `בימי ${kingHe}, לפי סדר עולם זוטא`,
  `In the days of ${kingEn}, according to Seder Olam Zuta`,
];

// before / after are slugs (or { he, en } for a name without a page)
const kohen = (e) => ({
  categories: [e.cat || 'kohanim-gedolim-first-temple'],
  roles: [HP],
  cardColor: COLOR,
  ...e,
  office: { label: L('כהונה גדולה', 'High Priesthood'), from: e.from ?? null, to: e.to ?? null, note: L(...(e.note || ['', ''])), before: e.before || [], after: e.after || [] },
  content: article(e.sections),
});
const SOZ_SOURCE = L('סדר עולם זוטא, פרקים ה – ז', 'Seder Olam Zuta, chapters 5–7');
const SOZ_TEXT = (kingHe, kingEn) => sec(
  'בסדר עולם זוטא',
  `סדר עולם זוטא מונה ליד כל מלך ממלכי בית דוד את הכהן הגדול שבימיו, ושם הוא מוזכר ככהן הגדול בימי ${kingHe}. בתנ״ך עצמו לא נמסר עליו דבר, ואין ידוע מי היה אביו. באילן שלנו הוא מופיע ברשימת הכהנים הגדולים לפי סדר עולם זוטא, ובינו ובין הבא אחריו חץ שחור – חץ של ירושה בתפקיד, לא של משפחה.`,
  'In Seder Olam Zuta',
  `Seder Olam Zuta names, beside each king of the house of David, the High Priest of his days, and there he is named as the High Priest in the days of ${kingEn}. Tanach itself tells nothing of him, and his father is not known. On our tree he appears in the list of High Priests according to Seder Olam Zuta, with a black arrow to the next one: an arrow of succession in the office, not of family.`,
);

module.exports = [
  // ── the Mishkan ──
  kohen({
    slug: 'elazar-ben-aharon', cat: 'kohanim-gedolim-mishkan', name: L('אלעזר בן אהרן', 'Elazar son of Aharon'),
    summary: L('בנו של אהרן והכהן הגדול אחריו, שחילק את הארץ עם יהושע.', 'Aharon’s son and the High Priest after him, who divided the Land with Yehoshua.'),
    from: 2487, note: ['מפטירת אהרן בהר ההר', 'From Aharon’s passing at Hor HaHar'],
    before: ['aharon-hakohen'], after: ['pinchas'],
    rel: [to('father', 'aharon-hakohen'), to('child', 'pinchas'), to('related', 'yehoshua-bin-nun')],
    sources: [L('שמות ו, כג – כה', 'Exodus 6:23–25'), L('במדבר כ, כה – כח', 'Numbers 20:25–28'), L('במדבר כז, יח – כג', 'Numbers 27:18–23'), L('יהושע יד, א; כד, לג', 'Joshua 14:1; 24:33')],
    spots: biblical(73.3, 32.6),
    sections: [
      sec('בגדי אהרן', 'אלעזר היה השלישי מארבעת בני אהרן ואלישבע. אחרי מות נדב ואביהוא שימש עם איתמר אחיו בכהונה, והיה ממונה על משמרת שומרי משמרת הקודש. בשנת הארבעים במדבר עלה עם אביו ומשה להר ההר, ושם הפשיט משה את אהרן מבגדיו והלביש אותם את אלעזר בנו.',
        'Aharon’s Garments', 'Elazar was the third of the four sons of Aharon and Elisheva. After the death of Nadav and Avihu he served in the priesthood with his brother Itamar, and was appointed over those who kept the charge of the Sanctuary. In the fortieth year in the wilderness he went up Hor HaHar with his father and Moshe, and there Moshe stripped Aharon of his garments and dressed Elazar his son in them.'),
      sec('לפני אלעזר יעמוד', 'כאשר מונה יהושע למנהיג, נאמר: "ולפני אלעזר הכהן יעמד ושאל לו במשפט האורים לפני ה׳". יחד עם יהושע וראשי השבטים חילק אלעזר את הארץ בגורל. הוא מת אחרי יהושע ונקבר בגבעת פינחס בנו, בהר אפרים.',
        'He Shall Stand Before Elazar', 'When Yehoshua was appointed leader it was said: "He shall stand before Elazar the Kohen, who shall ask for him by the judgment of the Urim before Hashem". Together with Yehoshua and the heads of the tribes, Elazar divided the Land by lot. He died after Yehoshua and was buried at the hill of his son Pinchas, in the hills of Ephraim.'),
    ],
  }),
  kohen({
    slug: 'avishua-ben-pinchas', cat: 'kohanim-gedolim-mishkan', name: L('אבישוע בן פינחס', 'Avishua son of Pinchas'),
    summary: L('בנו של פינחס, ממשיך שושלת הכהונה מבית אלעזר.', 'The son of Pinchas, continuing the line of the priesthood from the house of Elazar.'),
    before: ['pinchas'], after: ['bukki-ben-avishua'],
    rel: [to('father', 'pinchas'), to('child', 'bukki-ben-avishua')],
    sources: [L('דברי הימים א׳ ה, ל – לא', 'I Chronicles 5:30–31'), L('עזרא ז, ה', 'Ezra 7:5'), L('יוסף בן מתתיהו, קדמוניות היהודים ה, יא', 'Josephus, Antiquities 5:11')],
    spots: biblical(73.3, 34.4),
    sections: [
      sec('בשושלת בית אלעזר', 'אבישוע נמנה בדברי הימים ובספר עזרא בשושלת הכהנים מאלעזר בן אהרן ועד צדוק, ועד עזרא הסופר שהוא מצאצאיו. על פי יוסף בן מתתיהו שימש אבישוע ככהן גדול אחרי פינחס אביו, ואחריו בקי בנו ועזי בן בקי, ואחריהם עברה הכהונה הגדולה לעלי מבית איתמר.',
        'In the Line of Elazar', 'Avishua is counted in Divrei HaYamim and in the Book of Ezra in the line of the priests from Elazar son of Aharon to Tzadok, and down to Ezra the Scribe, who was one of his descendants. According to Josephus, Avishua served as High Priest after his father Pinchas, and after him his son Bukki and Uzzi son of Bukki; after them the High Priesthood passed to Eli of the house of Itamar.'),
      sec('על האילן', 'באילן שלנו אבישוע, בקי ועזי מופיעים בשושלת היורדת מפינחס אל צדוק, בלי תיבת "כהן גדול", משום שהתנ״ך אינו אומר במפורש שכיהנו בכהונה גדולה.',
        'On the Tree', 'On our tree Avishua, Bukki and Uzzi appear in the line going down from Pinchas to Tzadok, without a "High Priest" box, since Tanach does not say explicitly that they served as High Priests.'),
    ],
  }),
  kohen({
    slug: 'bukki-ben-avishua', cat: 'kohanim-gedolim-mishkan', name: L('בקי בן אבישוע', 'Bukki son of Avishua'),
    summary: L('נכדו של פינחס, בשושלת הכהונה מבית אלעזר.', 'The grandson of Pinchas, in the line of the priesthood from the house of Elazar.'),
    before: ['avishua-ben-pinchas'], after: ['uzzi-ben-bukki'],
    rel: [to('father', 'avishua-ben-pinchas'), to('child', 'uzzi-ben-bukki')],
    sources: [L('דברי הימים א׳ ה, לא', 'I Chronicles 5:31'), L('עזרא ז, ד', 'Ezra 7:4'), L('יוסף בן מתתיהו, קדמוניות היהודים ה, יא', 'Josephus, Antiquities 5:11')],
    spots: biblical(73.3, 35.0),
    sections: [
      sec('בקי', 'בקי בן אבישוע בן פינחס נמנה בשושלת הכהנים בדברי הימים ובספר עזרא. לפי יוסף בן מתתיהו כיהן ככהן גדול אחרי אביו, ואחריו עזי בנו. יש להבחין בינו לבין בקי בן יגלי, נשיא שבט דן בחלוקת הארץ (במדבר לד, כב).',
        'Bukki', 'Bukki son of Avishua son of Pinchas is counted in the line of the priests in Divrei HaYamim and in the Book of Ezra. According to Josephus he served as High Priest after his father, and after him his son Uzzi. He should be distinguished from Bukki son of Yogli, the prince of the tribe of Dan at the division of the Land (Numbers 34:22).'),
    ],
  }),
  kohen({
    slug: 'uzzi-ben-bukki', cat: 'kohanim-gedolim-mishkan', name: L('עזי בן בקי', 'Uzzi son of Bukki'),
    summary: L('אחרון הכהנים הגדולים מבית אלעזר לפני שעברה הכהונה לעלי.', 'The last High Priest of the house of Elazar before the priesthood passed to Eli.'),
    before: ['bukki-ben-avishua'], after: ['eli-hakohen'],
    rel: [to('father', 'bukki-ben-avishua'), nm('child', 'זרחיה', 'Zerachyah')],
    sources: [L('דברי הימים א׳ ה, לא – לב', 'I Chronicles 5:31–32'), L('עזרא ז, ד', 'Ezra 7:4'), L('יוסף בן מתתיהו, קדמוניות היהודים ה, יא; ח, א', 'Josephus, Antiquities 5:11; 8:1')],
    spots: biblical(73.3, 35.7),
    sections: [
      sec('הכהונה עוברת לבית איתמר', 'עזי בן בקי נמנה בשושלת הכהנים בדברי הימים ובספר עזרא, ואחריו זרחיה בנו. יוסף בן מתתיהו כותב שאחרי עזי עברה הכהונה הגדולה מבית אלעזר אל עלי, מבני איתמר, ונשארה בבית עלי עד שהחזיר שלמה את הכהונה לצדוק, מצאצאי אלעזר. לכן עלי הכהן מופיע כאן אחרי עזי.',
        'The Priesthood Passes to the House of Itamar', 'Uzzi son of Bukki is counted in the line of the priests in Divrei HaYamim and in the Book of Ezra, followed by his son Zerachyah. Josephus writes that after Uzzi the High Priesthood passed from the house of Elazar to Eli, of the sons of Itamar, and stayed in the house of Eli until Shlomo returned it to Tzadok, of the descendants of Elazar. That is why Eli the Kohen appears here after Uzzi.'),
    ],
  }),
  kohen({
    slug: 'achituv-ben-pinchas', cat: 'kohanim-gedolim-mishkan', name: L('אחיטוב בן פינחס', 'Achituv son of Pinchas'),
    summary: L('נכדו של עלי הכהן, הכהן הגדול אחריו.', 'The grandson of Eli the Kohen, the High Priest after him.'),
    before: ['eli-hakohen'], after: ['achimelech-ben-achituv'],
    rel: [nm('father', 'פינחס בן עלי', 'Pinchas son of Eli'), nm('sibling', 'אי־כבוד', 'I-Chavod'), to('child', 'achimelech-ben-achituv'), nm('child', 'אחיה', 'Achiyah'), to('related', 'eli-hakohen')],
    sources: [L('שמואל א׳ ד, יט – כב', 'I Samuel 4:19–22'), L('שמואל א׳ יד, ג', 'I Samuel 14:3'), L('שמואל א׳ כב, ט – כ', 'I Samuel 22:9–20')],
    spots: biblical(70.7, 35.3),
    sections: [
      sec('אחי אי־כבוד', 'אחיטוב היה בנו של פינחס בן עלי, ואחיו של אי־כבוד, שנולד ביום שנשבה ארון האלהים ומתו עלי ושני בניו. בספר שמואל הוא מוזכר כאביהם של אחיה, שנשא את האפוד בימי שאול, ושל אחימלך, הכהן בנוב. יש להבחין בינו לבין אחיטוב בן אמריה, אביו של צדוק הכהן, שהוא מבית אלעזר.',
        'Brother of I-Chavod', 'Achituv was the son of Pinchas son of Eli, and the brother of I-Chavod, who was born on the day the Ark of God was captured and Eli and his two sons died. In the Book of Shmuel he is named as the father of Achiyah, who wore the Ephod in the days of Shaul, and of Achimelech, the Kohen at Nov. He should be distinguished from Achituv son of Amaryah, the father of Tzadok the Kohen, of the house of Elazar.'),
    ],
  }),
  kohen({
    slug: 'achimelech-ben-achituv', cat: 'kohanim-gedolim-mishkan', name: L('אחימלך בן אחיטוב', 'Achimelech son of Achituv'),
    summary: L('הכהן בנוב שנתן לדוד את לחם הפנים ואת חרב גלית, ונהרג בפקודת שאול.', 'The Kohen at Nov who gave David the showbread and Golyat’s sword, and was killed at Shaul’s command.'),
    before: ['achituv-ben-pinchas'], after: ['evyatar-ben-achimelech'],
    rel: [to('father', 'achituv-ben-pinchas'), to('child', 'evyatar-ben-achimelech'), to('related', 'david'), to('related', 'mishkan-nov')],
    sources: [L('שמואל א׳ כא, ב – י', 'I Samuel 21:2–10'), L('שמואל א׳ כב, ט – כג', 'I Samuel 22:9–23'), L('מנחות צה ע״ב', 'Menachot 95b')],
    spots: biblical(70.7, 36.1),
    sections: [
      sec('לחם הקודש וחרב גלית', 'כשברח דוד מפני שאול הגיע לנוב, עיר הכהנים, אל אחימלך. אחימלך נתן לו מלחם הפנים, "כי לא היה שם לחם כי אם לחם הפנים", ואת חרב גלית הפלשתי שהייתה עטופה בשמלה אחרי האפוד.',
        'The Holy Bread and Golyat’s Sword', 'When David fled from Shaul he came to Nov, the city of the Kohanim, to Achimelech. Achimelech gave him of the showbread, "for there was no bread there but the showbread", and the sword of Golyat the Philistine, which was wrapped in a cloth behind the Ephod.'),
      sec('הריגת כהני נוב', 'דואג האדומי סיפר לשאול על כך, ושאול ציווה להרוג את אחימלך ואת כל בית אביו. רק דואג פגע בהם, וביום ההוא נהרגו שמונים וחמישה איש נושאי אפוד בד, ונוב עיר הכהנים הוכתה לפי חרב. רק אביתר בנו של אחימלך נמלט וברח אל דוד.',
        'The Killing of the Kohanim of Nov', 'Doeg the Edomite told Shaul of this, and Shaul commanded that Achimelech and all his father’s house be killed. Only Doeg would strike them, and on that day eighty-five men who wore the linen Ephod were killed, and Nov, the city of the Kohanim, was put to the sword. Only Evyatar son of Achimelech escaped and fled to David.'),
    ],
  }),
  kohen({
    slug: 'evyatar-ben-achimelech', cat: 'kohanim-gedolim-mishkan', name: L('אביתר בן אחימלך', 'Evyatar son of Achimelech'),
    summary: L('הכהן שנמלט מטבח נוב והיה עם דוד בכל דרכיו, ושלמה גירש אותו לענתות.', 'The Kohen who escaped the slaughter at Nov and stood with David throughout, and whom Shlomo sent away to Anatot.'),
    note: ['בימי דוד', 'In the days of David'],
    before: ['achimelech-ben-achituv'], after: ['tzadok-hakohen'],
    rel: [to('father', 'achimelech-ben-achituv'), nm('child', 'יונתן', 'Yonatan'), to('related', 'david'), to('related', 'tzadok-hakohen')],
    sources: [L('שמואל א׳ כב, כ – כג; כג, ו – ט', 'I Samuel 22:20–23; 23:6–9'), L('שמואל ב׳ טו, כד – כט', 'II Samuel 15:24–29'), L('מלכים א׳ א, ז; ב, כו – כז', 'I Kings 1:7; 2:26–27'), L('יומא עג ע״ב', 'Yoma 73b')],
    spots: biblical(70.7, 36.9),
    sections: [
      sec('עם דוד', 'אביתר נמלט מהריגת כהני נוב והגיע אל דוד, ואפוד בידו. דוד אמר לו: "שבה אתי אל תירא... כי משמרת אתה עמדי". בכל שנות נדודיו של דוד שאל אביתר עבורו באפוד, ובימי מלכות דוד שימש לצד צדוק. כשברח דוד מפני אבשלום הוליכו צדוק ואביתר את ארון ה׳ והשיבו אותו לירושלים.',
        'With David', 'Evyatar escaped the killing of the Kohanim of Nov and came to David with the Ephod in his hand. David said to him: "Stay with me, do not fear... for you are in safekeeping with me". Throughout David’s wanderings Evyatar inquired for him with the Ephod, and in David’s reign he served alongside Tzadok. When David fled from Avshalom, Tzadok and Evyatar carried the Ark of Hashem and returned it to Jerusalem.'),
      sec('הגירוש לענתות', 'חז״ל למדו מן הכתוב "ויעל אביתר" שבימי אבשלום לא נענה לו האורים ותומים, ונסתלק מן הכהונה הגדולה (יומא עג ע״ב). בסוף ימי דוד תמך באדניהו, ושלמה גירש אותו לענתות, "למלא את דבר ה׳ אשר דבר על בית עלי בשלה". מאז נשארה הכהונה הגדולה בבית צדוק.',
        'Sent Away to Anatot', 'Chazal learned from the verse "and Evyatar went up" that in the days of Avshalom the Urim and Tumim did not answer him, and he was removed from the High Priesthood (Yoma 73b). At the end of David’s days he supported Adoniyahu, and Shlomo sent him away to Anatot, "to fulfil the word of Hashem that He spoke concerning the house of Eli in Shiloh". From then on the High Priesthood stayed in the house of Tzadok.'),
    ],
  }),

  // ── the First Temple ──
  kohen({
    slug: 'achimaatz-ben-tzadok', name: L('אחימעץ בן צדוק', 'Achimaatz son of Tzadok'),
    summary: L('בנו של צדוק, השליח הזריז של דוד, והכהן הגדול בימי רחבעם.', 'Tzadok’s son, David’s swift messenger, and the High Priest in the days of Rechavam.'),
    note: soz('רחבעם', 'Rechavam'),
    before: ['tzadok-hakohen'], after: ['azaryah-ben-achimaatz'],
    rel: [to('father', 'tzadok-hakohen'), to('child', 'azaryah-ben-achimaatz'), to('related', 'david')],
    sources: [L('שמואל ב׳ טו, כז – לו; יז, יז – כא; יח, יט – כט', 'II Samuel 15:27–36; 17:17–21; 18:19–29'), L('דברי הימים א׳ ה, לד – לה', 'I Chronicles 5:34–35'), SOZ_SOURCE],
    spots: biblical(68.2, 41.6),
    sections: [
      sec('השליח של דוד', 'במרד אבשלום נשארו אחימעץ ויונתן בן אביתר בעין רוגל, כדי להעביר לדוד את הנעשה בירושלים. כשנודע הדבר לאבשלום הסתתרו בבאר בבחורים, ואשה פרשה מסך על פי הבאר, וכך הגיעו אל דוד והזהירו אותו לעבור את הירדן. אחרי מות אבשלום רץ אחימעץ בדרך הכיכר ועבר את הכושי, והיה הראשון שבישר לדוד על הניצחון.',
        'David’s Messenger', 'In Avshalom’s revolt, Achimaatz and Yonatan son of Evyatar stayed at Ein Rogel to pass word to David of what was happening in Jerusalem. When Avshalom learned of it they hid in a well in Bachurim, and a woman spread a covering over its mouth, and so they reached David and warned him to cross the Jordan. After Avshalom’s death Achimaatz ran by the way of the plain and overtook the Cushite, and was the first to bring David the news of the victory.'),
      sec('הכהונה', 'סדר עולם זוטא מונה אותו ככהן הגדול בימי רחבעם, אחרי צדוק אביו. יש להבחין בינו לבין אחימעץ שבנפתלי, נציב שלמה שלקח את בשמת בת שלמה לאשה (מלכים א׳ ד, טו).',
        'The Priesthood', 'Seder Olam Zuta counts him as the High Priest in the days of Rechavam, after his father Tzadok. He should be distinguished from Achimaatz of Naftali, Shlomo’s governor who married Basmat daughter of Shlomo (I Kings 4:15).'),
    ],
  }),
  kohen({
    slug: 'azaryah-ben-achimaatz', name: L('עזריה בן אחימעץ', 'Azaryah son of Achimaatz'),
    summary: L('נכדו של צדוק והכהן הגדול בימי אביה. ממנו נפרדות שתי רשימות הכהנים הגדולים.', 'Tzadok’s grandson and the High Priest in the days of Aviyah. From him the two lists of High Priests part.'),
    note: soz('אביה', 'Aviyah'),
    before: ['achimaatz-ben-tzadok'], after: ['yehoram-hakohen'],
    rel: [to('father', 'achimaatz-ben-tzadok'), nm('child', 'יוחנן', 'Yochanan')],
    sources: [L('דברי הימים א׳ ה, לה – לו', 'I Chronicles 5:35–36'), SOZ_SOURCE],
    spots: biblical(68.2, 42.6),
    sections: [
      sec('שתי רשימות', 'עזריה בן אחימעץ בן צדוק נמנה בדברי הימים בשושלת בית צדוק, ובסדר עולם זוטא הוא הכהן הגדול בימי אביה. ממנו נפרדות שתי הרשימות: בדברי הימים ממשיכה השושלת המשפחתית – יוחנן, עזריה, אמריה, אחיטוב, צדוק ושלום – ובסדר עולם זוטא ממשיכה רשימת הכהנים הגדולים לפי המלכים – יהורם, יהואחז, יהויריב ועוד, עד שלום. באילן שלנו שתי הרשימות נפגשות שוב בשלום הכהן הגדול.',
        'Two Lists', 'Azaryah son of Achimaatz son of Tzadok is counted in Divrei HaYamim in the line of the house of Tzadok, and in Seder Olam Zuta he is the High Priest in the days of Aviyah. From him the two lists part: Divrei HaYamim continues the family line – Yochanan, Azaryah, Amaryah, Achituv, Tzadok and Shalum – while Seder Olam Zuta continues the list of High Priests by the kings – Yehoram, Yehoachaz, Yehoyariv and onward, to Shalum. On our tree the two lists meet again at Shalum the High Priest.'),
    ],
  }),
  kohen({
    slug: 'yehoram-hakohen', name: L('יהורם הכהן הגדול', 'Yehoram the High Priest'),
    summary: L('הכהן הגדול בימי אסא, לפי סדר עולם זוטא.', 'The High Priest in the days of Asa, according to Seder Olam Zuta.'),
    note: soz('אסא', 'Asa'), before: ['azaryah-ben-achimaatz'], after: ['yehoachaz-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 45.0),
    sections: [SOZ_TEXT('אסא', 'Asa'), sec('לא לבלבל', 'אין לבלבל בינו לבין יהורם מלך יהודה, בן יהושפט, ולא עם יהורם בן אחאב מלך ישראל.', 'Not to Be Confused', 'He is not to be confused with Yehoram king of Judah, son of Yehoshafat, nor with Yehoram son of Achav king of Israel.')],
  }),
  kohen({
    slug: 'yehoachaz-hakohen', name: L('יהואחז הכהן הגדול', 'Yehoachaz the High Priest'),
    summary: L('הכהן הגדול בימי יהושפט, לפי סדר עולם זוטא.', 'The High Priest in the days of Yehoshafat, according to Seder Olam Zuta.'),
    note: soz('יהושפט', 'Yehoshafat'), before: ['yehoram-hakohen'], after: ['yehoyariv-hakohen'],
    rel: [], sources: [SOZ_SOURCE, L('דברי הימים ב׳ יט, יא', 'II Chronicles 19:11')], spots: biblical(65.9, 46.5),
    sections: [SOZ_TEXT('יהושפט', 'Yehoshafat'), sec('אמריהו כהן הראש', 'בדברי הימים מסופר שיהושפט מינה שופטים בירושלים, ו"אמריהו כהן הראש עליכם לכל דבר ה׳". אמריהו הוא מן הרשימה המשפחתית של בית צדוק שבדברי הימים. אין לבלבל את יהואחז הכהן עם המלכים יהואחז בן יהוא ויהואחז בן יאשיהו.', 'Amaryahu the Chief Priest', 'Divrei HaYamim tells that Yehoshafat appointed judges in Jerusalem, and "Amaryahu the chief priest is over you in every matter of Hashem". Amaryahu belongs to the family list of the house of Tzadok in Divrei HaYamim. Yehoachaz the Kohen is not to be confused with the kings Yehoachaz son of Yehu and Yehoachaz son of Yoshiyahu.')],
  }),
  kohen({
    slug: 'yehoyariv-hakohen', name: L('יהויריב הכהן הגדול', 'Yehoyariv the High Priest'),
    summary: L('הכהן הגדול בימי יורם מלך יהודה, לפי סדר עולם זוטא.', 'The High Priest in the days of Yoram king of Judah, according to Seder Olam Zuta.'),
    note: soz('יורם', 'Yoram'), before: ['yehoachaz-hakohen'], after: ['yehoshafat-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 47.7),
    sections: [SOZ_TEXT('יורם', 'Yoram'), sec('משמרת יהויריב', 'בשם יהויריב נקראה גם הראשונה מעשרים וארבע משמרות הכהונה שקבע דוד (דברי הימים א׳ כד, ז), שממנה יצאו לימים החשמונאים. אין ראיה שזה אותו אדם.', 'The Watch of Yehoyariv', 'Yehoyariv is also the name of the first of the twenty-four priestly watches set by David (I Chronicles 24:7), from which the Chashmona’im later came. There is no evidence that this is the same person.')],
  }),
  kohen({
    slug: 'yehoshafat-hakohen', name: L('יהושפט הכהן הגדול', 'Yehoshafat the High Priest'),
    summary: L('הכהן הגדול בימי אחזיהו מלך יהודה, לפי סדר עולם זוטא.', 'The High Priest in the days of Achazyahu king of Judah, according to Seder Olam Zuta.'),
    note: soz('אחזיהו', 'Achazyahu'), before: ['yehoyariv-hakohen'], after: ['yehoyada-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 48.7),
    sections: [SOZ_TEXT('אחזיהו', 'Achazyahu'), sec('לא לבלבל', 'אין לבלבל בינו לבין יהושפט מלך יהודה, שמלך לפני כן.', 'Not to Be Confused', 'He is not to be confused with Yehoshafat king of Judah, who reigned before him.')],
  }),
  kohen({
    slug: 'yehoyada-hakohen', name: L('יהוידע הכהן', 'Yehoyada the Kohen'),
    summary: L('הכהן הגדול שהציל את יואש מידי עתליה, החזיר את מלכות בית דוד וחידש את בית ה׳.', 'The High Priest who saved Yoash from Atalyah, restored the kingdom of the house of David and renewed the House of Hashem.'),
    note: soz('עתליה ויואש', 'Atalyah and Yoash'), before: ['yehoshafat-hakohen'], after: ['pedayah-hakohen'],
    rel: [nm('spouse', 'יהושבעת בת יהורם', 'Yehoshavat daughter of Yehoram'), to('related', 'atalyah')],
    sources: [L('מלכים ב׳ יא – יב', 'II Kings 11–12'), L('דברי הימים ב׳ כב, יא – כד, טז', 'II Chronicles 22:11–24:16'), L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to Mishneh Torah'), SOZ_SOURCE],
    spots: biblical(65.9, 50.0),
    sections: [
      sec('הצלת יואש', 'כשראתה עתליה שמת אחזיהו בנה, השמידה את כל זרע הממלכה. יהושבעת בת המלך יהורם, אשת יהוידע הכהן, גנבה את יואש התינוק, ושש שנים הסתירו אותו בבית ה׳. בשנה השביעית כרת יהוידע ברית עם שרי המאות, העמיד את יואש, נתן עליו את הנזר ואת העדות והמליך אותו, ועתליה הומתה.',
        'Saving Yoash', 'When Atalyah saw that her son Achazyahu was dead, she destroyed all the royal seed. Yehoshavat daughter of king Yehoram, the wife of Yehoyada the Kohen, stole away the infant Yoash, and for six years they hid him in the House of Hashem. In the seventh year Yehoyada made a covenant with the officers of hundreds, brought out Yoash, put the crown and the testimony upon him and made him king, and Atalyah was put to death.'),
      sec('הברית ובדק הבית', 'יהוידע כרת ברית בין ה׳ ובין המלך והעם להיות לעם לה׳, והעם נתץ את בית הבעל. יואש עשה הישר בעיני ה׳ "כל ימיו אשר הורהו יהוידע הכהן", ויהוידע הציב ארון עם חור בדלתו לצד המזבח, לאסוף כסף לחיזוק בית ה׳. הוא מת בן מאה ושלושים שנה, וקברוהו בעיר דוד עם המלכים. בשרשרת המסורה של הרמב״ם קיבל יהוידע מאלישע, ומסר לזכריה בנו.',
        'The Covenant and the Temple Repairs', 'Yehoyada made a covenant between Hashem and the king and the people, that they should be Hashem’s people, and the people tore down the house of Baal. Yoash did what was right in the eyes of Hashem "all his days in which Yehoyada the Kohen instructed him", and Yehoyada set a chest with a hole in its lid beside the altar, to collect silver for strengthening the House of Hashem. He died at a hundred and thirty, and they buried him in the City of David with the kings. In the Rambam’s chain of tradition Yehoyada received from Elisha and passed it to his son Zecharyah.'),
    ],
  }),
  kohen({
    slug: 'pedayah-hakohen', name: L('פדיה הכהן הגדול', 'Pedayah the High Priest'),
    summary: L('הכהן הגדול בימי יואש, יחד עם יהוידע, לפי סדר עולם זוטא.', 'The High Priest in the days of Yoash, together with Yehoyada, according to Seder Olam Zuta.'),
    note: soz('יואש', 'Yoash'), before: ['yehoyada-hakohen'], after: ['tzidkiyahu-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 51.1),
    sections: [SOZ_TEXT('יואש', 'Yoash'), sec('אחרי יהוידע', 'סדר עולם זוטא כותב: "יהוידע ופדיה כהנים גדולים" בימי יואש, שמלך ארבעים שנה. נראה שפדיה כיהן אחרי מות יהוידע, בשנים האחרונות של יואש.', 'After Yehoyada', 'Seder Olam Zuta writes: "Yehoyada and Pedayah were High Priests" in the days of Yoash, who reigned forty years. It seems that Pedayah served after Yehoyada’s death, in Yoash’s last years.')],
  }),
  kohen({
    slug: 'tzidkiyahu-hakohen', name: L('צדקיהו הכהן הגדול', 'Tzidkiyahu the High Priest'),
    summary: L('הכהן הגדול בימי אמציהו, לפי סדר עולם זוטא.', 'The High Priest in the days of Amatzyahu, according to Seder Olam Zuta.'),
    note: soz('אמציהו', 'Amatzyahu'), before: ['pedayah-hakohen'], after: ['yoel-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 52.3),
    sections: [SOZ_TEXT('אמציהו', 'Amatzyahu'), sec('לא לבלבל', 'אין לבלבל בינו לבין צדקיהו, המלך האחרון של יהודה.', 'Not to Be Confused', 'He is not to be confused with Tzidkiyahu, the last king of Judah.')],
  }),
  kohen({
    slug: 'yoel-hakohen', name: L('יואל הכהן הגדול', 'Yoel the High Priest'),
    summary: L('הכהן הגדול בימי עוזיהו, לפי סדר עולם זוטא.', 'The High Priest in the days of Uziyahu, according to Seder Olam Zuta.'),
    note: soz('עוזיהו', 'Uziyahu'), before: ['tzidkiyahu-hakohen'], after: ['yotam-hakohen'],
    rel: [], sources: [SOZ_SOURCE, L('דברי הימים ב׳ כו, טז – כ', 'II Chronicles 26:16–20')], spots: biblical(65.9, 53.9),
    sections: [SOZ_TEXT('עוזיהו', 'Uziyahu'), sec('לא לבלבל', 'אין לבלבל בינו לבין יואל בן פתואל הנביא. בדברי הימים מסופר שכאשר נכנס עוזיהו להקטיר בהיכל, יצא נגדו "עזריהו הכהן ועמו כהנים לה׳ שמונים", והמלך נצטרע. עזריהו זה אינו מוזכר ברשימת סדר עולם זוטא.', 'Not to Be Confused', 'He is not to be confused with Yoel son of Petuel the prophet. Divrei HaYamim tells that when Uziyahu entered the Sanctuary to burn incense, "Azaryahu the Kohen and with him eighty Kohanim of Hashem" went in after him, and the king was struck with tzara’at. This Azaryahu does not appear in the list of Seder Olam Zuta.')],
  }),
  kohen({
    slug: 'yotam-hakohen', name: L('יותם הכהן הגדול', 'Yotam the High Priest'),
    summary: L('הכהן הגדול בימי יותם המלך, לפי סדר עולם זוטא.', 'The High Priest in the days of king Yotam, according to Seder Olam Zuta.'),
    note: soz('יותם', 'Yotam'), before: ['yoel-hakohen'], after: ['uriyah-hakohen'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 55.5),
    sections: [SOZ_TEXT('יותם', 'Yotam'), sec('לא לבלבל', 'שמו כשם המלך שבימיו, יותם בן עוזיהו, אך אין ביניהם קשר ידוע.', 'Not to Be Confused', 'He bears the same name as the king of his days, Yotam son of Uziyahu, but there is no known link between them.')],
  }),
  kohen({
    slug: 'uriyah-hakohen', name: L('אוריה הכהן', 'Uriyah the Kohen'),
    summary: L('הכהן הגדול בימי אחז, שבנה את המזבח בדמות מזבח דמשק, וישעיהו העיד אותו כעד נאמן.', 'The High Priest in the days of Achaz, who built the altar after the pattern of the altar of Damascus, and whom Yeshayahu took as a faithful witness.'),
    note: soz('אחז', 'Achaz'), before: ['yotam-hakohen'], after: ['neriyah-hakohen'],
    rel: [to('related', 'achaz'), to('related', 'yeshayahu-hanavi')],
    sources: [L('מלכים ב׳ טז, י – טז', 'II Kings 16:10–16'), L('ישעיהו ח, ב', 'Isaiah 8:2'), L('מכות כד ע״ב', 'Makkot 24b'), SOZ_SOURCE],
    spots: biblical(65.9, 57.1),
    sections: [
      sec('המזבח מדמשק', 'כשהלך אחז לדמשק לקראת תגלת פלאסר מלך אשור, ראה שם מזבח ושלח לאוריה הכהן את דמותו ואת תבניתו. אוריה בנה מזבח כמוהו, והמלך ציווה להקטיר עליו את כל הקרבנות ולהזיז את מזבח הנחושת.',
        'The Altar from Damascus', 'When Achaz went to Damascus to meet Tiglat-Pileser king of Assyria, he saw an altar there and sent Uriyah the Kohen its likeness and its pattern. Uriyah built an altar like it, and the king commanded that all the offerings be burned on it and that the bronze altar be moved aside.'),
      sec('עד נאמן', 'ישעיהו אמר: "ואעידה לי עדים נאמנים את אוריה הכהן ואת זכריהו בן יברכיהו". בגמרא (מכות כד ע״ב) מסביר רבי עקיבא שה׳ תלה את נבואת זכריה על הגאולה בנבואת אוריה על החורבן: כשראה את השועל יוצא מבית קדשי הקדשים, שחק, כי ידע שאם נתקיימה נבואת אוריה, סופה של נבואת זכריה להתקיים. יש להבחין בינו לבין אוריהו בן שמעיהו הנביא, בימי יהויקים.',
        'A Faithful Witness', 'Yeshayahu said: "I will take faithful witnesses for myself, Uriyah the Kohen and Zecharyahu son of Yeverechyahu". In the Gemara (Makkot 24b) Rabbi Akiva explains that Hashem made Zecharyah’s prophecy of redemption depend on Uriyah’s prophecy of destruction: when he saw a fox coming out of the Holy of Holies he laughed, for he knew that since Uriyah’s prophecy had come true, Zecharyah’s prophecy would come true too. He should be distinguished from Uriyahu son of Shemayahu the prophet, in the days of Yehoyakim.'),
    ],
  }),
  kohen({
    slug: 'neriyah-hakohen', name: L('נריה הכהן הגדול', 'Neriyah the High Priest'),
    summary: L('הכהן הגדול בימי חזקיהו, לפי סדר עולם זוטא.', 'The High Priest in the days of Chizkiyahu, according to Seder Olam Zuta.'),
    note: soz('חזקיהו', 'Chizkiyahu'), before: ['uriyah-hakohen'], after: ['hoshayah-hakohen'],
    rel: [], sources: [SOZ_SOURCE, L('דברי הימים ב׳ לא, י', 'II Chronicles 31:10')], spots: biblical(65.9, 58.6),
    sections: [SOZ_TEXT('חזקיהו', 'Chizkiyahu'), sec('לא לבלבל', 'אין לבלבל בינו לבין נריה בן מחסיה, אביו של ברוך. בדברי הימים מוזכר בימי חזקיהו "עזריהו הכהן הראש לבית צדוק", שאמר שמאז החלו להביא את התרומה לבית ה׳ "אכול ושבוע והותר".', 'Not to Be Confused', 'He is not to be confused with Neriyah son of Machseyah, Baruch’s father. Divrei HaYamim names in Chizkiyahu’s days "Azaryahu the chief priest, of the house of Tzadok", who said that since the offerings began to come to the House of Hashem "we have eaten and been satisfied and left over plenty".')],
  }),
  kohen({
    slug: 'hoshayah-hakohen', name: L('הושעיה הכהן הגדול', 'Hoshayah the High Priest'),
    summary: L('הכהן הגדול בימי מנשה, לפי סדר עולם זוטא.', 'The High Priest in the days of Menashe, according to Seder Olam Zuta.'),
    note: soz('מנשה', 'Menashe'), before: ['neriyah-hakohen'], after: ['shalum-ben-tzadok'],
    rel: [], sources: [SOZ_SOURCE], spots: biblical(65.9, 59.8),
    sections: [SOZ_TEXT('מנשה', 'Menashe'), sec('בימי מנשה', 'הושעיה כיהן בשנות מלכותו הארוכה של מנשה, חמישים וחמש שנה, שבהן הוכנס פסל אל בית ה׳. באילן שלנו החץ ממנו מוביל אל שלום הכהן הגדול, שבו נפגשות שתי רשימות הכהנים.', 'In the Days of Menashe', 'Hoshayah served in the long reign of Menashe, fifty-five years, in which an idol was brought into the House of Hashem. On our tree the arrow from him leads to Shalum the High Priest, where the two lists of Kohanim meet.')],
  }),
  kohen({
    slug: 'shalum-ben-tzadok', name: L('שלום בן צדוק', 'Shalum son of Tzadok'),
    summary: L('הכהן הגדול בימי אמון, שבו נפגשות שתי רשימות הכהנים הגדולים.', 'The High Priest in the days of Amon, where the two lists of High Priests meet.'),
    note: soz('אמון', 'Amon'), before: ['hoshayah-hakohen'], after: ['chilkiyahu-hakohen'],
    rel: [nm('father', 'צדוק', 'Tzadok'), to('child', 'chilkiyahu-hakohen')],
    sources: [L('דברי הימים א׳ ה, לח – לט', 'I Chronicles 5:38–39'), L('עזרא ז, ב', 'Ezra 7:2'), SOZ_SOURCE],
    spots: biblical(68.3, 61.0),
    sections: [
      sec('שתי הרשימות נפגשות', 'בדברי הימים שלום הוא בנו של צדוק בן אחיטוב – צדוק מאוחר, מצאצאיו של צדוק הכהן מימי דוד – ובסדר עולם זוטא הוא הכהן הגדול בימי אמון. כך נפגשות בו שתי הרשימות. ממנו והלאה הכהונה עוברת מאב לבן: חלקיהו בנו, עזריה בן חלקיהו ושריה בן עזריה.',
        'The Two Lists Meet', 'In Divrei HaYamim Shalum is the son of Tzadok son of Achituv – a later Tzadok, a descendant of Tzadok the Kohen of David’s days – and in Seder Olam Zuta he is the High Priest in the days of Amon. So the two lists meet in him. From him onward the priesthood passes from father to son: his son Chilkiyahu, Azaryah son of Chilkiyahu, and Seraya son of Azaryah.'),
      sec('שלום וחנמאל', 'באילן שלנו מופיע גם שלום הנביא, אבי חנמאל ודודו של ירמיהו, עם סימן שאלה ליד הקו אל שלום הכהן הגדול, משום שלא ברור שזה אותו אדם.',
        'Shalum and Chanamel', 'On our tree Shalum the prophet, father of Chanamel and uncle of Yirmeyahu, also appears, with a question mark beside the line to Shalum the High Priest, since it is not clear that they are the same person.'),
    ],
  }),
  kohen({
    slug: 'chilkiyahu-hakohen', name: L('חלקיהו הכהן הגדול', 'Chilkiyahu the High Priest'),
    summary: L('הכהן הגדול שמצא את ספר התורה בבית ה׳ בימי יאשיהו.', 'The High Priest who found the Torah scroll in the House of Hashem in the days of Yoshiyahu.'),
    note: soz('יאשיהו ויהואחז', 'Yoshiyahu and Yehoachaz'), before: ['shalum-ben-tzadok'], after: ['azaryah-ben-chilkiyahu'],
    rel: [to('father', 'shalum-ben-tzadok'), to('child', 'azaryah-ben-chilkiyahu'), to('related', 'yoshiyahu'), to('related', 'chulda-haneviah')],
    sources: [L('מלכים ב׳ כב – כג', 'II Kings 22–23'), L('דברי הימים ב׳ לד', 'II Chronicles 34'), L('דברי הימים א׳ ה, לט', 'I Chronicles 5:39'), SOZ_SOURCE],
    spots: biblical(66.1, 62.4),
    sections: [
      sec('ספר התורה', 'בשנה השמונה עשרה ליאשיהו, בשעת חיזוק בדק הבית, אמר חלקיהו הכהן הגדול לשפן הסופר: "ספר התורה מצאתי בבית ה׳". כשנקרא הספר לפני המלך קרע יאשיהו את בגדיו, ושלח את חלקיהו ואת השרים לדרוש את ה׳ אצל חולדה הנביאה.',
        'The Torah Scroll', 'In the eighteenth year of Yoshiyahu, while the House was being repaired, Chilkiyahu the High Priest said to Shafan the scribe: "I have found the Torah scroll in the House of Hashem". When the scroll was read before the king, Yoshiyahu tore his garments, and sent Chilkiyahu and the officers to inquire of Hashem through Chuldah the prophetess.'),
      sec('הטהרה', 'במצוות המלך הוציא חלקיהו מהיכל ה׳ את כל הכלים שנעשו לבעל ולאשרה ולכל צבא השמים, והם נשרפו מחוץ לירושלים. יש אומרים שחלקיהו אבי ירמיהו הנביא הוא חלקיהו הכהן הגדול, אך הדבר אינו ברור, ולכן לא חיברנו ביניהם.',
        'The Purification', 'At the king’s command Chilkiyahu brought out of the Sanctuary of Hashem all the vessels made for Baal, for the Asherah and for all the host of heaven, and they were burned outside Jerusalem. Some say that Chilkiyahu the father of Yirmeyahu the prophet is Chilkiyahu the High Priest, but this is not clear, so we have not linked them.'),
    ],
  }),
  kohen({
    slug: 'azaryah-ben-chilkiyahu', name: L('עזריה בן חלקיהו', 'Azaryah son of Chilkiyahu'),
    summary: L('בנו של חלקיהו והכהן הגדול בימי יהויקים.', 'Chilkiyahu’s son and the High Priest in the days of Yehoyakim.'),
    note: soz('יהויקים', 'Yehoyakim'), before: ['chilkiyahu-hakohen'], after: ['seraya-ben-azaryah'],
    rel: [to('father', 'chilkiyahu-hakohen'), to('child', 'seraya-ben-azaryah')],
    sources: [L('דברי הימים א׳ ה, לט – מ', 'I Chronicles 5:39–40'), L('עזרא ז, א', 'Ezra 7:1'), SOZ_SOURCE],
    spots: biblical(59.3, 63.9),
    sections: [
      sec('עזריה', 'עזריה בן חלקיהו נמנה בדברי הימים ובספר עזרא בשושלת בית צדוק, ובסדר עולם זוטא הוא הכהן הגדול בימי יהויקים. יש להבחין בינו לבין עזריה בן אחימעץ, נכדו של צדוק, ובין עזריהו בן עודד הנביא.',
        'Azaryah', 'Azaryah son of Chilkiyahu is counted in Divrei HaYamim and in the Book of Ezra in the line of the house of Tzadok, and in Seder Olam Zuta he is the High Priest in the days of Yehoyakim. He should be distinguished from Azaryah son of Achimaatz, Tzadok’s grandson, and from Azaryahu son of Oded the prophet.'),
    ],
  }),
  kohen({
    slug: 'seraya-ben-azaryah', name: L('שריה בן עזריה', 'Seraya son of Azaryah'),
    summary: L('כהן הראש בחורבן בית ראשון, שנהרג ברבלה בידי נבוכדנצר.', 'The chief priest at the Destruction of the First Temple, killed at Rivlah by Nevuchadnetzar.'),
    note: soz('יהויכין', 'Yehoyachin'), before: ['azaryah-ben-chilkiyahu'], after: [{ he: 'יהוצדק', en: 'Yehotzadak' }],
    rel: [to('father', 'azaryah-ben-chilkiyahu'), nm('child', 'יהוצדק', 'Yehotzadak'), nm('child', 'עזרא הסופר', 'Ezra the Scribe')],
    sources: [L('מלכים ב׳ כה, יח – כא', 'II Kings 25:18–21'), L('ירמיהו נב, כד – כז', 'Jeremiah 52:24–27'), L('דברי הימים א׳ ה, מ – מא', 'I Chronicles 5:40–41'), L('עזרא ז, א', 'Ezra 7:1'), SOZ_SOURCE],
    spots: biblical(59.3, 65.2),
    sections: [
      sec('כהן הראש', 'בחורבן ירושלים לקח נבוזראדן רב טבחים את "שריה כהן הראש ואת צפניה כהן המשנה ואת שלשת שמרי הסף", והביא אותם אל מלך בבל לרבלה, ושם הכה אותם נבוכדנצר וימיתם. סדר עולם זוטא מונה אותו ככהן הגדול בימי יהויכין, ואת יהוצדק בנו בימי צדקיהו.',
        'The Chief Priest', 'At the destruction of Jerusalem Nevuzaradan the captain of the guard took "Seraya the chief priest and Tzefanyah the second priest and the three keepers of the threshold", and brought them to the king of Babylon at Rivlah, and there Nevuchadnetzar struck them and put them to death. Seder Olam Zuta counts him as the High Priest in the days of Yehoyachin, and his son Yehotzadak in the days of Tzidkiyahu.'),
      sec('אבי יהוצדק ועזרא', 'יהוצדק בנו "הלך בהגלות ה׳ את יהודה וירושלם ביד נבכדנאצר", ובנו יהושע בן יהוצדק היה הכהן הגדול הראשון בבית השני. עזרא הסופר נקרא "עזרא בן שריה", ובסדר עולם זוטא נאמר "יהוצדק אחי עזרא הסופר". יש להבחין בינו לבין שריה בן נריה, אחיו של ברוך.',
        'Father of Yehotzadak and Ezra', 'His son Yehotzadak "went into exile when Hashem exiled Judah and Jerusalem by the hand of Nevuchadnetzar", and Yehotzadak’s son Yehoshua was the first High Priest of the Second Temple. Ezra the Scribe is called "Ezra son of Seraya", and Seder Olam Zuta says "Yehotzadak, the brother of Ezra the Scribe". He should be distinguished from Seraya son of Neriyah, Baruch’s brother.'),
    ],
  }),
];
