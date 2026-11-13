// The Kingdom of Israel, the Babylonian Exile and the Return to Zion.
// Same shape as egypt.js; three lists.
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const LV = ['levites'];
const KG2 = ['kohanim-gedolim-second-temple', 'levites'];

const israel = [
  p({
    slug: 'nevat', name: L('נבט', 'Nevat'), spot: 'נבט',
    summary: L('אבי ירבעם, מלך ישראל הראשון, משבט אפרים.', 'Father of Yeravam, the first king of Israel, of the tribe of Efraim.'),
    rel: [to('child', 'yeravam-ben-nevat'), nm('spouse', 'צרועה', 'Tzeruah')], sources: [L('מלכים א׳ יא, כו', 'I Kings 11:26'), L('סנהדרין קא ע״ב', 'Sanhedrin 101b')],
    sections: one('נבט', 'ירבעם נקרא תמיד "בן נבט", ואמו "צרועה אשה אלמנה" – כלומר נבט מת לפני שירבעם עלה לגדולה. חז״ל (סנהדרין קא ע״ב) אומרים שנבט, מיכה ושבע בן בכרי הם אדם אחד, שנקרא נבט כי "ניבט ולא ראה".', 'Nevat', 'Yeravam is always called "son of Nevat", and his mother "Tzeruah, a widow" – that is, Nevat died before Yeravam rose to greatness. Chazal (Sanhedrin 101b) say that Nevat, Michah and Sheva son of Bichri are one person, called Nevat because he "looked (nibat) but did not see".'),
  }),
  p({
    slug: 'aviya-ben-yeravam', name: L('אביה בן ירבעם', 'Aviyah son of Yeravam'), spot: 'אביה בן ירבעם',
    summary: L('בנו של ירבעם שחלה ומת, היחיד מבית ירבעם שנספד.', 'Yeravam’s son who fell ill and died, the only one of Yeravam’s house who was mourned.'),
    rel: [to('father', 'yeravam-ben-nevat'), to('related', 'achiyah-hashiloni')], sources: [L('מלכים א׳ יד, א – יח', 'I Kings 14:1–18'), L('מועד קטן כח ע״ב', 'Moed Katan 28b')],
    sections: one('נמצא בו דבר טוב', 'כשחלה אביה שלח ירבעם את אשתו מחופשת אל אחיה השילוני. הנביא אמר שהילד ימות, ושהוא לבדו מבית ירבעם ייקבר ויספדו לו, "יען נמצא בו דבר טוב אל ה׳". חז״ל אומרים שהסיר את השומרים שהציב אביו בדרך כדי למנוע מישראל לעלות לרגל לירושלים.', 'Something Good Was Found in Him', 'When Aviyah fell ill, Yeravam sent his wife in disguise to Achiyah HaShiloni. The prophet said the child would die, and that he alone of Yeravam’s house would be buried and mourned, "because something good toward Hashem was found in him". Chazal say he removed the guards his father had set on the roads to stop Israel going up to Jerusalem for the festivals.'),
  }),
  p({
    slug: 'achiya-avi-baasha', name: L('אחיה אבי בעשא', 'Achiyah, Father of Baasha'), spot: 'אחיה אבי בעשא',
    summary: L('אבי בעשא מלך ישראל, משבט יששכר.', 'Father of Baasha king of Israel, of the tribe of Yissachar.'),
    rel: [to('child', 'baasha'), to('related', 'shevet-yissachar')], sources: [L('מלכים א׳ טו, כז', 'I Kings 15:27')],
    sections: one('אחיה', 'בעשא, שמרד בנדב בן ירבעם ומלך תחתיו, נקרא "בעשא בן אחיה לבית יששכר". יש להבחין בינו לבין אחיה השילוני הנביא.', 'Achiyah', 'Baasha, who rebelled against Nadav son of Yeravam and reigned in his place, is called "Baasha son of Achiyah of the house of Yissachar". He should be distinguished from Achiyah HaShiloni the prophet.'),
  }),
  w({
    slug: 'izevel', name: L('איזבל', 'Izevel (Jezebel)'), spot: 'איזבל',
    summary: L('בת אתבעל מלך צידון ואשת אחאב, שרדפה את נביאי ה׳.', 'Daughter of Etbaal king of Tzidon and wife of Achav, who persecuted the prophets of Hashem.'),
    rel: [nm('father', 'אתבעל מלך צידונים', 'Etbaal king of the Sidonians'), to('spouse', 'achav'), to('related', 'eliyahu-hanavi')],
    sources: [L('מלכים א׳ טז, לא; יח – יט; כא', 'I Kings 16:31; 18–19; 21'), L('מלכים ב׳ ט, ל – לז', 'II Kings 9:30–37')],
    sections: one('איזבל', 'איזבל הביאה את עבודת הבעל לישראל והכריתה את נביאי ה׳, ועובדיהו החביא מהם מאה איש במערה. אחרי הר הכרמל איימה על אליהו, והוא ברח למדבר. היא רקמה את מות נבות היזרעאלי כדי שאחאב יירש את כרמו. יהוא ציווה להשליך אותה מן החלון, וכדברי אליהו "בחלק יזרעאל יאכלו הכלבים את בשר איזבל".', 'Izevel', 'Izevel brought the worship of Baal to Israel and cut off the prophets of Hashem, and Ovadyahu hid a hundred of them in a cave. After Mount Carmel she threatened Eliyahu, and he fled to the desert. She plotted Navot of Yizre’el’s death so that Achav could take his vineyard. Yehu ordered her thrown from the window, and as Eliyahu had said, "in the portion of Yizre’el the dogs shall eat the flesh of Izevel".'),
  }),
  p({
    slug: 'nimshi', name: L('נמשי', 'Nimshi'), spot: 'נמשי',
    summary: L('סבו של יהוא, שעל שמו נקרא "יהוא בן נמשי".', 'Yehu’s grandfather, after whom he was called "Yehu son of Nimshi".'),
    rel: [to('child', 'yehoshafat-ben-nimshi')], sources: [L('מלכים א׳ יט, טז', 'I Kings 19:16'), L('מלכים ב׳ ט, ב, כ', 'II Kings 9:2, 20')],
    sections: one('נמשי', 'יהוא נקרא לרוב "בן נמשי", אף שנמשי היה סבו: "יהוא בן יהושפט בן נמשי". ה׳ ציווה את אליהו "ואת יהוא בן נמשי תמשח למלך על ישראל".', 'Nimshi', 'Yehu is usually called "son of Nimshi", though Nimshi was his grandfather: "Yehu son of Yehoshafat son of Nimshi". Hashem commanded Eliyahu "and Yehu son of Nimshi you shall anoint king over Israel".'),
  }),
  p({
    slug: 'yehoshafat-ben-nimshi', name: L('יהושפט בן נמשי', 'Yehoshafat son of Nimshi'), spot: 'יהושפט אבי יהוא',
    summary: L('אבי יהוא מלך ישראל.', 'Father of Yehu king of Israel.'),
    rel: [to('father', 'nimshi'), to('child', 'yehu')], sources: [L('מלכים ב׳ ט, ב, יד', 'II Kings 9:2, 14')],
    sections: one('יהושפט', 'יהושפט בן נמשי נזכר כאביו של יהוא. יש להבחין בינו לבין יהושפט מלך יהודה, שחי באותה תקופה.', 'Yehoshafat', 'Yehoshafat son of Nimshi is mentioned as the father of Yehu. He should be distinguished from Yehoshafat king of Judah, who lived at the same time.'),
  }),
  p({
    slug: 'yimla', name: L('ימלה', 'Yimlah'), spot: 'ימלה',
    summary: L('אבי מיכיהו הנביא.', 'Father of Michayhu the prophet.'),
    rel: [to('child', 'michayhu-ben-yimlah')], sources: [L('מלכים א׳ כב, ח', 'I Kings 22:8')],
    sections: one('ימלה', 'ימלה נזכר כאביו של מיכיהו, הנביא היחיד שאמר לאחאב וליהושפט את האמת לפני המלחמה ברמות גלעד.', 'Yimlah', 'Yimlah is mentioned as the father of Michayhu, the only prophet who told Achav and Yehoshafat the truth before the battle at Ramot-Gilad.'),
  }),
];

const galut = [
  p({
    slug: 'daniel', name: L('דניאל', 'Daniel'), spot: 'דניאל',
    roles: [L('חוזה', 'Seer')],
    summary: L('מזרע המלוכה שגלה לבבל, פתר את חלומות נבוכדנצר וניצל מגוב האריות.', 'Of the royal seed exiled to Bavel, who interpreted Nevuchadnetzar’s dreams and was saved from the lions’ den.'),
    rel: [{ type: 'ancestor', slug: 'chizkiyahu', uncertain: true }, to('related', 'chananya-chaver-daniel'), to('related', 'mishael'), to('related', 'azarya-chaver-daniel'), to('related', 'shevet-yehuda')],
    sources: [L('ספר דניאל', 'The Book of Daniel'), L('מגילה ג ע״א', 'Megillah 3a'), L('בבא בתרא טו ע״א', 'Bava Batra 15a')],
    sections: [
      sec('בחצר המלך', 'דניאל גלה לבבל עם יהויקים, ונבחר עם חנניה, מישאל ועזריה לעמוד בהיכל המלך. הם סירבו להתגאל בפת בג המלך. דניאל פתר את חלום הצלם של נבוכדנצר ואת הכתב על הקיר בסעודת בלשאצר, ובימי דריוש הושלך לגוב האריות ויצא בשלום.', 'At the King’s Court', 'Daniel was exiled to Bavel with Yehoyakim, and was chosen with Chananyah, Mishael and Azaryah to serve in the king’s palace. They refused to defile themselves with the king’s food. Daniel interpreted Nevuchadnetzar’s dream of the statue and the writing on the wall at Belshatzar’s feast, and in Darius’s days was thrown into the lions’ den and came out unharmed.'),
      sec('חוזה ולא נביא', 'באילן שלנו דניאל מסומן "חוזה". הגמרא (מגילה ג ע״א) אומרת שחגי, זכריה ומלאכי היו נביאים ודניאל לא היה נביא, ולכן ספרו נמצא בכתובים. ליד ארבעתם כתוב באילן שהם לא היו אחים: הם מוצגים יחד כי גלו יחד מירושלים, והיו מזרע המלוכה ומן הפרתמים, אך משפחותיהם אינן ידועות. חז״ל (סנהדרין צג ע״ב) אומרים שהיו מבני חזקיהו, כנבואת ישעיהו לחזקיהו "ומבניך אשר יצאו ממך... והיו סריסים בהיכל מלך בבל", ולכן באילן שלנו הם משויכים בסימן שאלה למשפחת המלוכה.', 'A Seer, Not a Prophet', 'On our tree Daniel is marked "seer". The Gemara (Megillah 3a) says that Chaggai, Zecharyah and Malachi were prophets and Daniel was not a prophet, which is why his book is among the Writings. Beside the four of them the tree notes that they were not brothers: they are shown together because they were exiled together from Jerusalem, and were of the royal seed and the nobles, but their families are not known. Chazal (Sanhedrin 93b) say they were descendants of Chizkiyahu, as Yeshayahu prophesied to Chizkiyahu "and of your sons who shall issue from you... they shall be eunuchs in the palace of the king of Babylon", so on our tree they are assigned with a question mark to the royal family.'),
    ],
  }),
  p({
    slug: 'chananya-chaver-daniel', name: L('חנניה', 'Chananyah'), spot: 'חנניה',
    summary: L('מחברי דניאל, שהושלך לכבשן האש וניצל.', 'One of Daniel’s companions, who was thrown into the fiery furnace and saved.'),
    rel: [{ type: 'ancestor', slug: 'chizkiyahu', uncertain: true }, to('related', 'daniel'), to('related', 'mishael'), to('related', 'azarya-chaver-daniel')], sources: [L('דניאל א; ג', 'Daniel 1; 3'), L('פסחים קיח ע״א', 'Pesachim 118a')],
    sections: one('כבשן האש', 'חנניה, מישאל ועזריה – שנקראו בבבל שדרך, מישך ועבד נגו – סירבו להשתחוות לצלם הזהב שהקים נבוכדנצר, והושלכו לכבשן האש. הם יצאו ממנו בלי שהאש שלטה בהם, ונבוכדנצר בירך את אלהיהם.', 'The Fiery Furnace', 'Chananyah, Mishael and Azaryah – called in Bavel Shadrach, Meishach and Aved-Nego – refused to bow to the golden statue Nevuchadnetzar set up, and were thrown into the fiery furnace. They came out with the fire having no power over them, and Nevuchadnetzar blessed their God.'),
  }),
  p({
    slug: 'mishael', name: L('מישאל', 'Mishael'), spot: 'מישאל',
    summary: L('מחברי דניאל, שהושלך לכבשן האש וניצל.', 'One of Daniel’s companions, who was thrown into the fiery furnace and saved.'),
    rel: [{ type: 'ancestor', slug: 'chizkiyahu', uncertain: true }, to('related', 'daniel'), to('related', 'chananya-chaver-daniel'), to('related', 'azarya-chaver-daniel')], sources: [L('דניאל א; ג', 'Daniel 1; 3')],
    sections: one('מישאל', 'מישאל, שנקרא בבבל מישך, היה מן הנערים מבני יהודה שגלו עם דניאל, וניצל עם חבריו מכבשן האש. יש להבחין בינו לבין מישאל בן עוזיאל, מבני לוי.', 'Mishael', 'Mishael, called Meishach in Bavel, was one of the youths of Judah exiled with Daniel, and was saved with his companions from the fiery furnace. He should be distinguished from Mishael son of Uziel, of the Levites.'),
  }),
  p({
    slug: 'azarya-chaver-daniel', name: L('עזריה (חבר דניאל)', 'Azaryah (Daniel’s Companion)'), spot: 'עזריה (חבר דניאל)',
    summary: L('מחברי דניאל, שהושלך לכבשן האש וניצל.', 'One of Daniel’s companions, who was thrown into the fiery furnace and saved.'),
    rel: [{ type: 'ancestor', slug: 'chizkiyahu', uncertain: true }, to('related', 'daniel'), to('related', 'chananya-chaver-daniel'), to('related', 'mishael')], sources: [L('דניאל א; ג', 'Daniel 1; 3')],
    sections: one('עזריה', 'עזריה, שנקרא בבבל עבד נגו, ניצל עם חנניה ומישאל מכבשן האש. יש להבחין בינו לבין הכהנים הגדולים בשם עזריה.', 'Azaryah', 'Azaryah, called Aved-Nego in Bavel, was saved with Chananyah and Mishael from the fiery furnace. He should be distinguished from the High Priests named Azaryah.'),
  }),
  p({
    slug: 'shimi-avi-yair', name: L('שמעי', 'Shimi'), spot: 'שמעי',
    summary: L('סבו של מרדכי ואסתר, משבט בנימין.', 'Grandfather of Mordechai and Esther, of the tribe of Binyamin.'),
    rel: [to('child', 'yair-avi-mordechai'), to('child', 'avichail'), to('related', 'shevet-binyamin')], sources: [L('אסתר ב, ה', 'Esther 2:5'), L('מגילה יג ע״א', 'Megillah 13a')],
    sections: one('בן שמעי', 'מרדכי נקרא "בן יאיר בן שמעי בן קיש איש ימיני". חז״ל קושרים את שמעי זה לשמעי בן גרא שקילל את דוד, ואומרים שדוד לא הרג אותו כי ראה שעתיד לצאת ממנו מרדכי (מגילה יג ע״א). באילן שלנו שמעי הוא אבי יאיר ואבי אביחיל, ולכן מרדכי ואסתר בני דודים.', 'Son of Shimi', 'Mordechai is called "son of Yair son of Shimi son of Kish, a Benjaminite". Chazal connect this Shimi with Shimi son of Gera who cursed David, and say that David did not kill him because he saw that Mordechai would descend from him (Megillah 13a). On our tree Shimi is the father of Yair and of Avichayil, so Mordechai and Esther were cousins.'),
  }),
  p({
    slug: 'yair-avi-mordechai', name: L('יאיר אבי מרדכי', 'Yair, Father of Mordechai'), spot: 'יאיר אבי מרדכי',
    summary: L('אבי מרדכי היהודי.', 'Father of Mordechai the Jew.'),
    rel: [to('father', 'shimi-avi-yair'), to('sibling', 'avichail'), to('child', 'mordechai-hayehudi')], sources: [L('אסתר ב, ה', 'Esther 2:5')],
    sections: one('יאיר', 'יאיר נזכר כאביו של מרדכי. חז״ל דורשים "בן יאיר – שהאיר עיני ישראל בתפילתו" (מגילה יב ע״ב). יש להבחין בינו לבין יאיר הגלעדי השופט.', 'Yair', 'Yair is mentioned as Mordechai’s father. Chazal expound "son of Yair – who lit up (he’ir) the eyes of Israel with his prayer" (Megillah 12b). He should be distinguished from Yair the Giladite, the judge.'),
  }),
  p({
    slug: 'avichail', name: L('אביחיל', 'Avichayil'), spot: 'אביחיל',
    summary: L('אבי אסתר המלכה, דודו של מרדכי.', 'Father of Queen Esther, Mordechai’s uncle.'),
    rel: [to('father', 'shimi-avi-yair'), to('sibling', 'yair-avi-mordechai'), to('child', 'esther-hamalka')], sources: [L('אסתר ב, טו; ט, כט', 'Esther 2:15; 9:29')],
    sections: one('אביחיל', 'אסתר נקראת "בת אביחיל דד מרדכי". היא התייתמה מאביה ומאמה, ומרדכי בן דודה לקח אותה לבת.', 'Avichayil', 'Esther is called "the daughter of Avichayil, Mordechai’s uncle". She was orphaned of father and mother, and her cousin Mordechai took her as his daughter.'),
  }),
  p({
    slug: 'yehotzadak', cats: LV, name: L('יהוצדק בן שריה', 'Yehotzadak son of Seraya'), spot: 'יהוצדק',
    summary: L('בנו של שריה הכהן הגדול, שגלה לבבל, ואבי יהושע הכהן הגדול.', 'Son of Seraya the High Priest, who went into exile in Bavel, and father of Yehoshua the High Priest.'),
    rel: [to('father', 'seraya-ben-azaryah'), to('child', 'yehoshua-ben-yehotzadak')], sources: [L('דברי הימים א׳ ה, מ – מא', 'I Chronicles 5:40–41'), L('סדר עולם זוטא, פרק ז', 'Seder Olam Zuta, chapter 7')],
    sections: one('כהן גדול?', '"ויהוצדק הלך בהגלות ה׳ את יהודה וירושלם ביד נבכדנאצר". סדר עולם זוטא מונה אותו ככהן הגדול בימי צדקיהו ואומר "יהוצדק אחי עזרא הסופר". באילן שלנו כתוב לידו "כהן גדול?", כי לא ברור שכיהן בכהונה גדולה. בנו יהושע היה הכהן הגדול הראשון בבית השני.', 'High Priest?', '"And Yehotzadak went into exile when Hashem exiled Judah and Jerusalem by the hand of Nevuchadnetzar". Seder Olam Zuta counts him as the High Priest in Tzidkiyahu’s days and says "Yehotzadak, the brother of Ezra the Scribe". On our tree it says beside him "High Priest?", since it is not clear that he served as High Priest. His son Yehoshua was the first High Priest of the Second Temple.'),
  }),
  p({
    slug: 'pedaya-rosh-hagola', name: L('פדיה ראש הגולה', 'Pedayah, Head of the Exile'), spot: 'פדיה ראש הגולה',
    summary: L('בן יהויכין, ראש גולה בבבל, ולפי דברי הימים אבי זרובבל.', 'Son of Yehoyachin, Head of the Exile in Bavel, and according to Divrei HaYamim the father of Zerubavel.'),
    rel: [to('father', 'yehoyachin'), to('sibling', 'shaltiel'), to('child', 'zerubavel')], sources: [L('דברי הימים א׳ ג, יז – יט', 'I Chronicles 3:17–19')],
    sections: one('אבי זרובבל', 'בדברי הימים נאמר "ובני פדיה זרבבל ושמעי", ואילו בחגי ובעזרא זרובבל נקרא "בן שאלתיאל". המפרשים מסבירים שפדיה היה אביו, ושאלתיאל דודו גידל אותו, ולכן נקרא על שמו. באילן שלנו זרובבל יורד מפדיה.', 'Father of Zerubavel', 'Divrei HaYamim says "and the sons of Pedayah: Zerubavel and Shimi", while in Chaggai and Ezra Zerubavel is called "son of Shaltiel". The commentators explain that Pedayah was his father, and his uncle Shaltiel raised him, so he was called after him. On our tree Zerubavel comes down from Pedayah.'),
  }),
  p({
    slug: 'shaltiel', name: L('שאלתיאל', 'Shaltiel'), spot: 'שאלתיאל',
    summary: L('בן יהויכין, ראש גולה בבבל, שזרובבל נקרא על שמו.', 'Son of Yehoyachin, Head of the Exile in Bavel, after whom Zerubavel was called.'),
    rel: [to('father', 'yehoyachin'), to('sibling', 'pedaya-rosh-hagola'), to('related', 'zerubavel')], sources: [L('דברי הימים א׳ ג, יז', 'I Chronicles 3:17'), L('חגי א, א', 'Haggai 1:1'), L('עזרא ג, ב', 'Ezra 3:2')],
    sections: one('שאלתיאל', 'שאלתיאל היה בנו של יהויכין המלך בגלות בבל. זרובבל נקרא "בן שאלתיאל", אף שלפי דברי הימים אביו היה פדיה אחי שאלתיאל.', 'Shaltiel', 'Shaltiel was the son of King Yehoyachin in the Babylonian exile. Zerubavel is called "son of Shaltiel", though according to Divrei HaYamim his father was Pedayah, Shaltiel’s brother.'),
  }),
  p({
    slug: 'meshulam-rosh-hagola', name: L('משולם ראש הגולה', 'Meshulam, Head of the Exile'), spot: 'משולם ראש הגולה',
    summary: L('בן זרובבל, ראש הגולה אחריו.', 'Son of Zerubavel, Head of the Exile after him.'),
    roles: [L('ראש הגולה', 'Head of the Exile')],
    rel: [to('father', 'zerubavel')], sources: [L('דברי הימים א׳ ג, יט', 'I Chronicles 3:19')],
    sections: one('ראשי הגולה', 'בדברי הימים נאמר "ובן זרבבל משלם וחנניה". באילן שלנו משולם, חנניה וברכיה מופיעים זה אחר זה מתחת לזרובבל, כשרשרת ראשי הגולה שהמשיכו להנהיג את יהודי בבל.', 'The Heads of the Exile', 'Divrei HaYamim says "and the sons of Zerubavel: Meshullam and Chananyah". On our tree Meshulam, Chananyah and Berechyah appear one after another below Zerubavel, as the chain of the Heads of the Exile who continued to lead the Jews of Bavel.'),
  }),
  p({
    slug: 'chananya-rosh-hagola', name: L('חנניה ראש הגולה', 'Chananyah, Head of the Exile'), spot: 'חנניה ראש הגולה',
    summary: L('בן זרובבל, מראשי הגולה.', 'Son of Zerubavel, one of the Heads of the Exile.'),
    roles: [L('ראש הגולה', 'Head of the Exile')],
    rel: [to('father', 'zerubavel'), to('sibling', 'meshulam-rosh-hagola')], sources: [L('דברי הימים א׳ ג, יט – כא', 'I Chronicles 3:19–21')],
    sections: one('חנניה', 'חנניה בן זרובבל נמנה בדברי הימים עם משולם אחיו, ובאילן שלנו הוא בשרשרת ראשי הגולה אחרי משולם. יש להבחין בינו לבין חנניה חבר דניאל.', 'Chananyah', 'Chananyah son of Zerubavel is listed in Divrei HaYamim with his brother Meshullam, and on our tree he is in the chain of the Heads of the Exile after Meshulam. He should be distinguished from Chananyah, Daniel’s companion.'),
  }),
  p({
    slug: 'berechya-rosh-hagola', name: L('ברכיה ראש הגולה', 'Berechyah, Head of the Exile'), spot: 'ברכיה ראש הגולה',
    summary: L('מבני זרובבל, מראשי הגולה.', 'One of Zerubavel’s sons, one of the Heads of the Exile.'),
    roles: [L('ראש הגולה', 'Head of the Exile')],
    rel: [to('father', 'zerubavel')], sources: [L('דברי הימים א׳ ג, כ', 'I Chronicles 3:20')],
    sections: one('ברכיה', 'ברכיה נמנה בדברי הימים בין בני זרובבל, ובאילן שלנו הוא בשרשרת ראשי הגולה. יש להבחין בינו לבין ברכיה אבי זכריה הנביא.', 'Berechyah', 'Berechyah is listed in Divrei HaYamim among Zerubavel’s sons, and on our tree he is in the chain of the Heads of the Exile. He should be distinguished from Berechyah the father of Zecharyah the prophet.'),
  }),
];

const shivat = [
  p({
    slug: 'zerubavel', name: L('זרובבל', 'Zerubavel'), spot: 'זרובבל',
    roles: [L('ראש הגולה', 'Head of the Exile'), L('פחת יהודה', 'Governor of Judah')],
    summary: L('מבית דוד, מנהיג העולים מבבל, שהניח את יסוד הבית השני.', 'Of the house of David, leader of those who came up from Bavel, who laid the foundation of the Second Temple.'),
    rel: [to('father', 'pedaya-rosh-hagola'), to('related', 'yehoshua-ben-yehotzadak'), to('related', 'chaggai-hanavi'), to('related', 'zecharyah-hanavi')],
    sources: [L('עזרא א – ו', 'Ezra 1–6'), L('חגי א – ב', 'Haggai 1–2'), L('זכריה ד', 'Zechariah 4'), L('סנהדרין לח ע״א', 'Sanhedrin 38a'), L('אבן עזרא, עזרא א, ח', 'Ibn Ezra, Ezra 1:8')],
    sections: [
      sec('בניין הבית השני', 'בשנה הראשונה לכורש עלה זרובבל עם יהושע הכהן הגדול בראש העולים מבבל. הם בנו את המזבח והניחו את יסוד הבית, ואחרי שהמלאכה נעצרה עוררו אותם חגי וזכריה להשלים את הבנייה. זכריה ניבא עליו: "לא בחיל ולא בכח כי אם ברוחי".', 'Building the Second Temple', 'In the first year of Koresh, Zerubavel came up with Yehoshua the High Priest at the head of those returning from Bavel. They built the altar and laid the foundation of the House, and after the work was halted Chaggai and Zecharyah roused them to complete it. Zecharyah prophesied of him: "Not by might and not by power, but by My spirit".'),
      sec('הכוכבית שבאילן', 'חז״ל (סנהדרין לח ע״א) אומרים שזרובבל הוא נחמיה בן חכליה, שנקרא זרובבל "שנזרע בבבל". אבן עזרא אומר שזרובבל הוא גם ששבצר הנשיא ליהודה, שכורש מסר לו את כלי בית ה׳, ובאילן שלנו הלכנו בדרכו. על כך הכוכבית.', 'The Asterisk on Our Tree', 'Chazal (Sanhedrin 38a) say that Zerubavel is Nechemyah son of Chachalyah, called Zerubavel because he was "sown in Bavel". Ibn Ezra says that Zerubavel is also Sheshbatzar the prince of Judah, to whom Koresh handed the vessels of the House of Hashem, and on our tree we followed him. That is what the asterisk refers to.'),
    ],
  }),
  p({
    slug: 'yehoshua-ben-yehotzadak', cats: KG2, name: L('יהושע בן יהוצדק', 'Yehoshua son of Yehotzadak'), spot: 'יהושע בן יהוצדק',
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('הכהן הגדול הראשון בבית השני, "אוד מוצל מאש".', 'The first High Priest of the Second Temple, "a brand plucked from the fire".'),
    rel: [to('father', 'yehotzadak'), to('child', 'yoyakim'), to('related', 'zerubavel')],
    sources: [L('עזרא ג; ה', 'Ezra 3; 5'), L('חגי א – ב', 'Haggai 1–2'), L('זכריה ג; ו, יא', 'Zechariah 3; 6:11'), L('סנהדרין צג ע״א', 'Sanhedrin 93a')],
    sections: one('אוד מוצל מאש', 'יהושע עלה עם זרובבל ובנה עמו את המזבח והבית. זכריה ראה אותו בנבואה עומד לפני המלאך בבגדים צואים, והשטן לשטנו, וה׳ אמר "הלא זה אוד מוצל מאש". חז״ל מספרים שנבוכדנצר השליך אותו לכבשן האש, ונחרכו רק בגדיו (סנהדרין צג ע״א).', 'A Brand Plucked From the Fire', 'Yehoshua came up with Zerubavel and built the altar and the House with him. Zecharyah saw him in prophecy standing before the angel in soiled garments, with the Satan accusing him, and Hashem said "Is this not a brand plucked from the fire". Chazal relate that Nevuchadnetzar threw him into the fiery furnace, and only his garments were singed (Sanhedrin 93a).'),
  }),
  p({
    slug: 'yoyakim', cats: KG2, name: L('יויקים הכהן הגדול', 'Yoyakim the High Priest'), spot: 'יויקים הכהן הגדול',
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('בן יהושע, הכהן הגדול בימי עזרא ונחמיה.', 'Son of Yehoshua, the High Priest in the days of Ezra and Nechemyah.'),
    rel: [to('father', 'yehoshua-ben-yehotzadak'), to('child', 'elyashiv')], sources: [L('נחמיה יב, י, כו', 'Nehemiah 12:10, 26')],
    sections: one('יויקים', 'בספר נחמיה נמנית שושלת הכהנים הגדולים: "וישוע הוליד את יויקים, ויויקים הוליד את אלישיב". בימיו היו נחמיה הפחה ועזרא הכהן הסופר.', 'Yoyakim', 'The Book of Nechemyah lists the line of High Priests: "Yeshua begot Yoyakim, and Yoyakim begot Elyashiv". In his days were Nechemyah the governor and Ezra the priest and scribe.'),
  }),
  p({
    slug: 'elyashiv', cats: KG2, name: L('אלישיב הכהן הגדול', 'Elyashiv the High Priest'), spot: 'אלישיב הכהן הגדול',
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('הכהן הגדול בימי נחמיה, שבנה את שער הצאן.', 'The High Priest in Nechemyah’s days, who built the Sheep Gate.'),
    rel: [to('father', 'yoyakim')], sources: [L('נחמיה ג, א; יג, ד – ט', 'Nehemiah 3:1; 13:4–9')],
    sections: one('אלישיב', 'בבניית חומות ירושלים קם אלישיב הכהן הגדול ואחיו הכהנים "ויבנו את שער הצאן, המה קדשוהו". מאוחר יותר הכין לטוביה העמוני, קרובו, לשכה בחצר בית ה׳, ונחמיה השליך את כליו החוצה וטיהר את הלשכה.', 'Elyashiv', 'In the building of Jerusalem’s walls, Elyashiv the High Priest and his brother priests rose "and built the Sheep Gate; they sanctified it". Later he prepared a chamber in the courtyard of the House of Hashem for Toviyah the Ammonite, his relative, and Nechemyah threw out his belongings and purified the chamber.'),
  }),
  p({
    slug: 'ezra-hasofer', cats: LV, name: L('עזרא הסופר', 'Ezra the Scribe'), spot: 'עזרא הסופר',
    roles: [L('סופר', 'Scribe')],
    summary: L('הכהן והסופר שעלה מבבל, החזיר את התורה לישראל ועמד בראש אנשי כנסת הגדולה.', 'The priest and scribe who came up from Bavel, restored the Torah to Israel and headed the Men of the Great Assembly.'),
    rel: [to('father', 'seraya-ben-azaryah'), to('sibling', 'yehotzadak'), to('teacher', 'baruch-ben-neriyah'), to('related', 'nechemya')],
    sources: [L('ספר עזרא', 'The Book of Ezra'), L('נחמיה ח', 'Nehemiah 8'), L('סנהדרין כא ע״ב', 'Sanhedrin 21b'), L('מגילה טז ע״ב', 'Megillah 16b'), L('בבא בתרא טו ע״א', 'Bava Batra 15a'), L('בבא קמא פב ע״א', 'Bava Kamma 82a')],
    sections: [
      sec('סופר מהיר בתורת משה', 'עזרא, "סופר מהיר בתורת משה", עלה מבבל בימי ארתחשסתא, וקרא את התורה לפני כל העם בראש השנה. חז״ל אומרים "ראוי היה עזרא שתינתן תורה על ידו אילמלא קדמו משה" (סנהדרין כא ע״ב), ושתיקן עשר תקנות. הוא למד תורה מברוך בן נריה בבבל, ולא עלה לארץ כל ימי רבו (מגילה טז ע״ב). הוא כתב את ספרו ואת דברי הימים, ולפי דעה אחת הוא מלאכי.', 'A Ready Scribe in the Torah of Moshe', 'Ezra, "a ready scribe in the Torah of Moshe", came up from Bavel in the days of Artachshasta, and read the Torah before all the people on Rosh Hashanah. Chazal say "Ezra was worthy that the Torah be given through him, had Moshe not preceded him" (Sanhedrin 21b), and that he enacted ten ordinances. He learned Torah from Baruch son of Neriyah in Bavel, and did not go up to the land as long as his teacher lived (Megillah 16b). He wrote his book and Divrei HaYamim, and by one view he is Malachi.'),
      sec('כהן גדול?', 'עזרא נקרא "בן שריה", ובאילן שלנו הוא יורד משריה הכהן הגדול. באילן כתוב בתיבתו "וכהן גדול?", כי לא ברור שכיהן בכהונה גדולה.', 'High Priest?', 'Ezra is called "son of Seraya", and on our tree he comes down from Seraya the High Priest. His box on the tree says "and High Priest?", since it is not clear that he served as High Priest.'),
    ],
  }),
  p({
    slug: 'nechemya', name: L('נחמיה בן חכליה', 'Nechemyah son of Chachalyah'), spot: 'נחמיה',
    roles: [L('פחת יהודה', 'Governor of Judah')],
    summary: L('שר המשקה של ארתחשסתא, שעלה לירושלים ובנה את חומותיה.', 'Artachshasta’s cupbearer, who went up to Jerusalem and built its walls.'),
    rel: [to('father', 'chachalya'), to('related', 'ezra-hasofer'), to('related', 'elyashiv')],
    sources: [L('ספר נחמיה', 'The Book of Nehemiah'), L('סנהדרין לח ע״א', 'Sanhedrin 38a'), L('בבא בתרא טו ע״א', 'Bava Batra 15a')],
    sections: one('בניין החומה', 'נחמיה היה משקה המלך בשושן. כששמע שחומות ירושלים פרוצות, ביקש מן המלך לעלות ולבנותן, ומונה לפחת יהודה. הוא ובוני החומה עבדו "באחת ידו עשה במלאכה ואחת מחזקת השלח", מול סנבלט וטוביה, והחומה נשלמה בחמישים ושנים יום. חז״ל אומרים שזרובבל הוא נחמיה (סנהדרין לח ע״א), אך באילן שלנו הם מוצגים בנפרד.', 'Building the Wall', 'Nechemyah was the king’s cupbearer in Shushan. When he heard that Jerusalem’s walls were breached, he asked the king to go up and build them, and was appointed governor of Judah. He and the builders of the wall worked "with one hand doing the work and the other holding a weapon", against Sanballat and Toviyah, and the wall was finished in fifty-two days. Chazal say Zerubavel is Nechemyah (Sanhedrin 38a), but on our tree they are shown separately.'),
  }),
  p({
    slug: 'chachalya', name: L('חכליה', 'Chachalyah'), spot: 'חכליה',
    summary: L('אבי נחמיה.', 'Father of Nechemyah.'),
    rel: [to('child', 'nechemya')], sources: [L('נחמיה א, א', 'Nehemiah 1:1')],
    sections: one('חכליה', 'ספר נחמיה פותח "דברי נחמיה בן חכליה". באילן שלנו יש מעל חכליה סימן שאלה, כי לא ידוע מאיזו משפחה בא.', 'Chachalyah', 'The Book of Nechemyah opens "the words of Nechemyah son of Chachalyah". On our tree there is a question mark above Chachalyah, since it is not known which family he came from.'),
  }),
];

module.exports = { israel, galut, shivat };
