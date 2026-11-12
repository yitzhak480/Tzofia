// The Kingdom of Judah: people who were not kings or prophets (and a few
// prophets on the tree that had no page yet). Same shape as egypt.js.
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const LV = ['levites'];
const PR = ['prophets-of-israel'];

module.exports = [
  // ── queens and queen mothers ──
  w({
    slug: 'maacha-bat-avishalom', name: L('מעכה בת אבישלום', 'Maachah daughter of Avishalom'), spot: 'מעכה',
    summary: L('אשת רחבעם ואם אביה, שאסא הסיר אותה מלהיות גבירה.', 'Rechavam’s wife and Aviyah’s mother, whom Asa removed from being queen mother.'),
    rel: [to('father', 'avshalom'), to('spouse', 'rechavam'), to('child', 'abiyam'), to('related', 'asa')],
    sources: [L('מלכים א׳ טו, ב, י, יג', 'I Kings 15:2, 10, 13'), L('דברי הימים ב׳ יא, כ – כב; יג, ב; טו, טז', 'II Chronicles 11:20–22; 13:2; 15:16'), L('עבודה זרה מד ע״א', 'Avodah Zarah 44a')],
    sections: [
      sec('בת אבשלום', 'בספר מלכים היא נקראת "מעכה בת אבישלום", ובדברי הימים (ב׳ יא, כ) "מעכה בת אבשלום" – בתו של אבשלום בן דוד, ולכן רחבעם, נכד דוד, נשא את בת דודו. בדברי הימים (ב׳ יג, ב) היא נקראת גם "מיכיהו בת אוריאל", והמפרשים מסבירים שאוריאל היה חתנו של אבשלום, ומעכה גדלה בבית סבה ונקראה על שמו.', 'Daughter of Avshalom', 'In the Book of Kings she is called "Maachah daughter of Avishalom", and in Divrei HaYamim (II 11:20) "Maachah daughter of Avshalom" – the daughter of Avshalom son of David, so that Rechavam, David’s grandson, married his cousin. In Divrei HaYamim (II 13:2) she is also called "Michayahu daughter of Uriel", and the commentators explain that Uriel was Avshalom’s son-in-law, and Maachah grew up in her grandfather’s house and was called after him.'),
      sec('אם אביה ואם אסא', 'רחבעם אהב את מעכה יותר מכל נשיו, והמליך את בנה אביה אחריו. בספר מלכים היא נקראת אמו של אביה (טו, ב), וגם אמו של אסא בנו (טו, י). המפרשים מסבירים שהייתה סבתו של אסא, ונקראה "אמו" כי גידלה אותו או כי הייתה הגבירה בארמון.', 'Mother of Aviyah and of Asa', 'Rechavam loved Maachah more than all his wives, and made her son Aviyah king after him. In the Book of Kings she is called Aviyah’s mother (15:2), and also the mother of his son Asa (15:10). The commentators explain that she was Asa’s grandmother, and was called his "mother" because she raised him or because she was the queen mother in the palace.'),
      sec('המפלצת', 'אסא הסיר את מעכה מלהיות גבירה, "אשר עשתה מפלצת לאשרה", וכרת את המפלצת ושרף אותה בנחל קדרון. חז״ל מסבירים מה הייתה אותה "מפלצת" (עבודה זרה מד ע״א).', 'The Abomination', 'Asa removed Maachah from being queen mother, "because she had made an abominable image for Asherah", and cut down the image and burned it in the Kidron valley. Chazal explain what that "abomination" was (Avodah Zarah 44a).'),
    ],
  }),
  w({
    slug: 'azuva', name: L('עזובה בת שלחי', 'Azuvah daughter of Shilchi'), spot: 'עזובה',
    summary: L('אשת אסא ואם יהושפט מלך יהודה.', 'Asa’s wife and the mother of Yehoshafat king of Judah.'),
    rel: [nm('father', 'שלחי', 'Shilchi'), to('spouse', 'asa'), to('child', 'yehoshafat')],
    sources: [L('מלכים א׳ כב, מב', 'I Kings 22:42'), L('דברי הימים ב׳ כ, לא', 'II Chronicles 20:31')],
    sections: one('אם יהושפט', 'בספר מלכים ובדברי הימים נאמר על יהושפט: "ושם אמו עזובה בת שלחי". יש להבחין בינה לבין עזובה אשת כלב בן חצרון (דברי הימים א׳ ב, יח).', 'Mother of Yehoshafat', 'The Book of Kings and Divrei HaYamim say of Yehoshafat: "and his mother’s name was Azuvah daughter of Shilchi". She should be distinguished from Azuvah the wife of Kalev son of Chetzron (I Chronicles 2:18).'),
  }),
  w({
    slug: 'yehoshavat', name: L('יהושבעת בת יהורם', 'Yehoshavat daughter of Yehoram'), spot: 'יהושבע',
    summary: L('בת המלך יהורם ואשת יהוידע הכהן, שהצילה את יואש התינוק.', 'Daughter of King Yehoram and wife of Yehoyada the Kohen, who saved the infant Yoash.'),
    rel: [to('father', 'yehoram'), to('sibling', 'achazyahu'), to('spouse', 'yehoyada-hakohen'), to('related', 'yehoash')],
    sources: [L('מלכים ב׳ יא, ב – ג', 'II Kings 11:2–3'), L('דברי הימים ב׳ כב, יא – יב', 'II Chronicles 22:11–12')],
    sections: one('הצלת יואש', 'כשעתליה השמידה את כל זרע הממלכה, לקחה יהושבע, אחות אחזיהו, את יואש בן אחזיהו התינוק, "ותגנב אתו מתוך בני המלך הממותים", והסתירה אותו ואת מינקתו בחדר המיטות. שש שנים היה יואש מוסתר בבית ה׳, עד שיהוידע אישה המליך אותו. בספר מלכים היא נקראת "יהושבע", ובדברי הימים "יהושבעת".', 'Saving Yoash', 'When Atalyah destroyed all the royal seed, Yehoshavat, Achazyahu’s sister, took the infant Yoash son of Achazyahu, "and stole him away from among the king’s sons who were being slain", and hid him and his nurse in the bedchamber. For six years Yoash was hidden in the House of Hashem, until her husband Yehoyada made him king. In the Book of Kings she is called "Yehosheva", and in Divrei HaYamim "Yehoshavat".'),
  }),
  w({
    slug: 'chefzi-ba', name: L('חפצי-בה', 'Chefzi-Bah'), spot: 'חפצי-בה',
    summary: L('אשת חזקיהו ואם מנשה, ולפי חז״ל בתו של ישעיהו הנביא.', 'Chizkiyahu’s wife and Menashe’s mother, and according to Chazal the daughter of Yeshayahu the prophet.'),
    rel: [to('father', 'yeshayahu-hanavi'), to('spouse', 'chizkiyahu'), to('child', 'menashe')],
    sources: [L('מלכים ב׳ כא, א', 'II Kings 21:1'), L('ברכות י ע״א', 'Berachot 10a')],
    sections: one('בת ישעיהו', 'הגמרא (ברכות י ע״א) מספרת שכשחלה חזקיהו בא אליו ישעיהו ואמר לו "כי מת אתה ולא תחיה" – מת בעולם הזה ולא תחיה לעולם הבא, משום שלא עסק בפריה ורביה. חזקיהו השיב שראה ברוח הקודש שיצאו ממנו בנים שאינם הגונים, וישעיהו אמר לו "בהדי כבשי דרחמנא למה לך". חזקיהו ביקש "הב לי ברתך", ונשא את בתו של ישעיהו. מהם נולד מנשה. באילן שלנו היא מחוברת לישעיהו בקו מנוקד.', 'Daughter of Yeshayahu', 'The Gemara (Berachot 10a) relates that when Chizkiyahu fell ill, Yeshayahu came to him and said "you shall die and not live" – die in this world and not live in the World to Come, because he had not married and had children. Chizkiyahu answered that he had foreseen that his children would not be worthy, and Yeshayahu told him "why do you concern yourself with the secrets of the Merciful One". Chizkiyahu asked "give me your daughter", and married Yeshayahu’s daughter. From them Menashe was born. On our tree she is joined to Yeshayahu with a dotted line.'),
  }),
  // ── Shafan's family ──
  p({
    slug: 'meshulam-saba-shafan', name: L('משולם', 'Meshulam'), spot: 'משולם',
    summary: L('סבו של שפן הסופר.', 'Grandfather of Shafan the scribe.'),
    rel: [to('child', 'atzalyahu')], sources: [L('מלכים ב׳ כב, ג', 'II Kings 22:3')],
    sections: one('משולם', 'שפן הסופר נקרא בספר מלכים "שפן בן אצליהו בן משלם". באילן שלנו יש קו מנוקד עם סימן שאלה בין משפחה זו למשפחת המלוכה, כי הם היו חלק מן האצולה אך הקשר אינו ידוע.', 'Meshulam', 'Shafan the scribe is called in the Book of Kings "Shafan son of Atzalyahu son of Meshullam". On our tree there is a dotted line with a question mark between this family and the royal family, since they were part of the nobility but the connection is not known.'),
  }),
  p({
    slug: 'atzalyahu', name: L('אצליהו בן משולם', 'Atzalyahu son of Meshulam'), spot: 'אצליהו',
    summary: L('אבי שפן הסופר.', 'Father of Shafan the scribe.'),
    rel: [to('father', 'meshulam-saba-shafan'), to('child', 'shafan')], sources: [L('מלכים ב׳ כב, ג', 'II Kings 22:3')],
    sections: one('אצליהו', 'אצליהו נזכר כאביו של שפן הסופר, בימי יאשיהו.', 'Atzalyahu', 'Atzalyahu is mentioned as the father of Shafan the scribe, in the days of Yoshiyahu.'),
  }),
  p({
    slug: 'shafan', name: L('שפן הסופר', 'Shafan the Scribe'), spot: 'שפן הסופר',
    summary: L('סופר המלך יאשיהו, שקרא לפניו את ספר התורה שנמצא בבית ה׳.', 'King Yoshiyahu’s scribe, who read before him the Torah scroll found in the House of Hashem.'),
    rel: [to('father', 'atzalyahu'), to('child', 'achikam'), to('child', 'gemaryahu'), to('related', 'yoshiyahu'), to('related', 'chilkiyahu-hakohen')],
    sources: [L('מלכים ב׳ כב', 'II Kings 22'), L('דברי הימים ב׳ לד, ח – כח', 'II Chronicles 34:8–28')],
    sections: one('ספר התורה', 'יאשיהו שלח את שפן הסופר לבית ה׳ לסכם את הכסף לבדק הבית. חלקיהו הכהן הגדול נתן לו את ספר התורה שמצא, ושפן קרא אותו לפני המלך, והמלך קרע את בגדיו. שפן היה בין השלוחים לחולדה הנביאה, ובניו אחיקם וגמריהו עמדו לצד ירמיהו.', 'The Torah Scroll', 'Yoshiyahu sent Shafan the scribe to the House of Hashem to account for the silver for the Temple repairs. Chilkiyahu the High Priest gave him the Torah scroll he had found, and Shafan read it before the king, and the king tore his garments. Shafan was among the messengers to Chuldah the prophetess, and his sons Achikam and Gemaryahu stood by Yirmeyahu.'),
  }),
  p({
    slug: 'achikam', name: L('אחיקם בן שפן', 'Achikam son of Shafan'), spot: 'אחיקם',
    summary: L('משרי יאשיהו, שהציל את ירמיהו ממוות, ואבי גדליה.', 'One of Yoshiyahu’s officials, who saved Yirmeyahu from death, and the father of Gedalyah.'),
    rel: [to('father', 'shafan'), to('sibling', 'gemaryahu'), to('child', 'gedalya'), to('related', 'yirmeyahu-hanavi')],
    sources: [L('מלכים ב׳ כב, יב – יד', 'II Kings 22:12–14'), L('ירמיהו כו, כד', 'Jeremiah 26:24')],
    sections: one('יד אחיקם', 'אחיקם נשלח עם חלקיהו ושפן לדרוש את ה׳ אצל חולדה. בימי יהויקים, כשהעם והכהנים ביקשו להמית את ירמיהו, "יד אחיקם בן שפן היתה את ירמיהו לבלתי תת אתו ביד העם להמיתו".', 'Achikam’s Hand', 'Achikam was sent with Chilkiyahu and Shafan to inquire of Hashem through Chuldah. In the days of Yehoyakim, when the people and the priests sought to put Yirmeyahu to death, "the hand of Achikam son of Shafan was with Yirmeyahu, so that he was not given into the hand of the people to be put to death".'),
  }),
  p({
    slug: 'gemaryahu', name: L('גמריהו בן שפן הסופר', 'Gemaryahu son of Shafan the Scribe'), spot: 'גמריהו הסופר',
    summary: L('שבלשכתו קרא ברוך את מגילת ירמיהו, וביקש מן המלך שלא לשרוף אותה.', 'In whose chamber Baruch read Yirmeyahu’s scroll, and who begged the king not to burn it.'),
    rel: [to('father', 'shafan'), to('sibling', 'achikam'), to('related', 'baruch-ben-neriyah'), to('related', 'yehoyakim')],
    sources: [L('ירמיהו לו, י – כה', 'Jeremiah 36:10–25')],
    sections: one('המגילה', 'ברוך בן נריה קרא את דברי ירמיהו מן הספר "בלשכת גמריהו בן שפן הסופר" בבית ה׳. כשהמלך יהויקים קרע את המגילה ושרף אותה באש, גמריהו ושני שרים נוספים "הפגעו במלך לבלתי שרף את המגלה, ולא שמע אליהם".', 'The Scroll', 'Baruch son of Neriyah read Yirmeyahu’s words from the book "in the chamber of Gemaryahu son of Shafan the scribe" in the House of Hashem. When King Yehoyakim cut up the scroll and burned it in the fire, Gemaryahu and two other officials "begged the king not to burn the scroll, but he would not listen to them".'),
  }),
  p({
    slug: 'gedalya', name: L('גדליה בן אחיקם', 'Gedalyah son of Achikam'), spot: 'גדליה',
    summary: L('הפחה שמינו הבבלים על שארית יהודה, שנרצח בידי ישמעאל בן נתניה.', 'The governor the Babylonians appointed over the remnant of Judah, murdered by Yishmael son of Netanyah.'),
    rel: [to('father', 'achikam'), to('related', 'yirmeyahu-hanavi')],
    sources: [L('מלכים ב׳ כה, כב – כו', 'II Kings 25:22–26'), L('ירמיהו מ – מא', 'Jeremiah 40–41'), L('ראש השנה יח ע״ב', 'Rosh Hashanah 18b')],
    sections: one('צום גדליה', 'אחרי חורבן ירושלים מינה נבוכדנצר את גדליה על העם שנשאר ביהודה, וירמיהו ישב עמו במצפה. יוחנן בן קרח הזהיר אותו מפני ישמעאל בן נתניה, וגדליה לא האמין. ישמעאל הרג אותו ואת אנשיו, והשארית ברחה למצרים. לזכרו נקבע צום גדליה, והגמרא אומרת "שקולה מיתתן של צדיקים כשריפת בית אלהינו" (ראש השנה יח ע״ב).', 'The Fast of Gedalyah', 'After the destruction of Jerusalem Nevuchadnetzar appointed Gedalyah over the people left in Judah, and Yirmeyahu stayed with him at Mitzpah. Yochanan son of Kareach warned him about Yishmael son of Netanyah, and Gedalyah did not believe it. Yishmael killed him and his men, and the remnant fled to Egypt. The Fast of Gedalyah was set in his memory, and the Gemara says "the death of the righteous is equal to the burning of the House of our God" (Rosh Hashanah 18b).'),
  }),
  // ── fathers of prophets ──
  p({
    slug: 'oded-avi-azaryahu', name: L('עודד אבי עזריהו', 'Oded, Father of Azaryahu'), spot: 'עודד',
    summary: L('אבי עזריהו הנביא, בימי אסא.', 'Father of Azaryahu the prophet, in the days of Asa.'),
    rel: [to('child', 'azaryahu-ben-oded')], sources: [L('דברי הימים ב׳ טו, א – ח', 'II Chronicles 15:1–8')],
    sections: one('עודד', 'עודד נזכר כאביו של עזריהו הנביא, שעודד את אסא לבער את העבודה הזרה. בפסוק ח הנבואה מכונה "הנבואה עודד הנביא", ולכן יש שראו גם בעודד נביא. יש להבחין בינו לבין עודד הנביא בימי פקח.', 'Oded', 'Oded is mentioned as the father of Azaryahu the prophet, who encouraged Asa to remove idolatry. In verse 8 the prophecy is called "the prophecy of Oded the prophet", so some see Oded too as a prophet. He should be distinguished from Oded the prophet in the days of Pekach.'),
  }),
  p({
    slug: 'shemayahu-avi-uriyahu', name: L('שמעיהו מקרית היערים', 'Shemayahu of Kiryat-Ye’arim'), spot: 'שמעיהו',
    summary: L('אבי אוריהו הנביא.', 'Father of Uriyahu the prophet.'),
    rel: [to('child', 'uriyahu-ben-shemayahu')], sources: [L('ירמיהו כו, כ', 'Jeremiah 26:20')],
    sections: one('שמעיהו', 'שמעיהו מקרית היערים נזכר כאביו של אוריהו הנביא, שהמלך יהויקים המית בחרב.', 'Shemayahu', 'Shemayahu of Kiryat-Ye’arim is mentioned as the father of Uriyahu the prophet, whom King Yehoyakim put to the sword.'),
  }),
  p({
    slug: 'yigdalyahu', name: L('יגדליהו', 'Yigdalyahu'), spot: 'יגדליהו',
    summary: L('אבי חנן, "איש האלהים".', 'Father of Chanan, "the man of God".'),
    rel: [to('child', 'chanan-ben-yigdalyahu')], sources: [L('ירמיהו לה, ד', 'Jeremiah 35:4')],
    sections: one('יגדליהו', 'יגדליהו נזכר בספר ירמיהו כאביו של חנן "איש האלהים", שלבניו הייתה לשכה בבית ה׳.', 'Yigdalyahu', 'Yigdalyahu is mentioned in the Book of Yirmeyahu as the father of Chanan, "the man of God", whose sons had a chamber in the House of Hashem.'),
  }),
  p({
    slug: 'chanan-ben-yigdalyahu', cats: PR, name: L('חנן בן יגדליהו', 'Chanan son of Yigdalyahu'), spot: 'חנן בן יגדליהו',
    roles: [L('נביא', 'Prophet')],
    summary: L('"איש האלהים", שבלשכת בניו בחן ירמיהו את בני הרכבים.', '"The man of God", in whose sons’ chamber Yirmeyahu tested the Rechabites.'),
    rel: [to('father', 'yigdalyahu'), to('related', 'yirmeyahu-hanavi')], sources: [L('ירמיהו לה', 'Jeremiah 35')],
    sections: one('לשכת בני חנן', 'ירמיהו הביא את בני הרכבים "אל לשכת בני חנן בן יגדליהו איש האלהים", ונתן לפניהם יין, והם סירבו לשתות בגלל ציווי אביהם יונדב בן רכב. ה׳ העמיד את נאמנותם לאביהם מול אי-השמיעה של יהודה לדברו. "איש האלהים" הוא כינוי לנביא, ולכן באילן שלנו חנן מסומן כנביא.', 'The Chamber of Chanan’s Sons', 'Yirmeyahu brought the Rechabites "to the chamber of the sons of Chanan son of Yigdalyahu, the man of God", and set wine before them, and they refused to drink because of the command of their father Yonadav son of Rechav. Hashem set their faithfulness to their father against Judah’s failure to listen to His word. "Man of God" is a title for a prophet, so on our tree Chanan is marked as a prophet.'),
  }),
  // ── the family of Anatot ──
  p({
    slug: 'shalum-hanavi', cats: [...PR, ...LV], name: L('שלום הנביא', 'Shalum the Prophet'), spot: 'שלום הנביא',
    roles: [L('נביא', 'Prophet')],
    summary: L('דודו של ירמיהו ואבי חנמאל, ולפי חז״ל בעלה של חולדה הנביאה.', 'Yirmeyahu’s uncle and Chanamel’s father, and according to Chazal the husband of Chuldah the prophetess.'),
    rel: [to('child', 'chanamel'), to('related', 'yirmeyahu-hanavi')],
    sources: [L('ירמיהו לב, ז', 'Jeremiah 32:7'), L('מלכים ב׳ כב, יד', 'II Kings 22:14'), L('מגילה יד ע״ב', 'Megillah 14b')],
    sections: one('דוד ירמיהו', 'ירמיהו נקרא לקנות "את שדי אשר בענתות" מחנמאל "בן שלם דדך". חז״ל (מגילה יד ע״ב) מזהים אותו עם שלום בן תקוה, בעלה של חולדה הנביאה, ומכאן שחולדה וירמיהו היו קרובים. באילן שלנו יש קו עם סימן שאלה בינו לבין שלום הכהן הגדול, כי לא ברור שהוא בנו (ראו בערך חנמאל).', 'Yirmeyahu’s Uncle', 'Yirmeyahu was told to buy "my field in Anatot" from Chanamel "son of Shalum your uncle". Chazal (Megillah 14b) identify him with Shalum son of Tikvah, the husband of Chuldah the prophetess, so that Chuldah and Yirmeyahu were relatives. On our tree there is a line with a question mark between him and Shalum the High Priest, since it is not clear he was his son (see the entry for Chanamel).'),
  }),
  p({
    slug: 'chanamel', cats: [...PR, ...LV], name: L('חנמאל בן שלום', 'Chanamel son of Shalum'), spot: 'חנמאל',
    roles: [L('נביא', 'Prophet')],
    summary: L('בן דודו של ירמיהו, שממנו קנה ירמיהו את השדה בענתות.', 'Yirmeyahu’s cousin, from whom Yirmeyahu bought the field in Anatot.'),
    rel: [to('father', 'shalum-hanavi'), to('related', 'yirmeyahu-hanavi')],
    sources: [L('ירמיהו לב, ו – טו', 'Jeremiah 32:6–15')],
    sections: [
      sec('השדה בענתות', 'בימי המצור על ירושלים, כשירמיהו היה כלוא בחצר המטרה, בא אליו חנמאל וביקש שיקנה את שדהו בענתות. ירמיהו קנה אותו בשבעה עשר שקלים כסף, כתב את השטר והפקיד אותו בכלי חרש, כסימן ש"עוד יקנו בתים ושדות וכרמים בארץ הזאת".', 'The Field in Anatot', 'During the siege of Jerusalem, when Yirmeyahu was confined in the court of the guard, Chanamel came to him and asked him to buy his field in Anatot. Yirmeyahu bought it for seventeen shekels of silver, wrote the deed and placed it in an earthen vessel, as a sign that "houses and fields and vineyards shall yet be bought in this land".'),
      sec('הכוכבית שבאילן', 'ליד חנמאל באילן שלנו יש הערה: על חנמאל כתוב שהיה בן דודו של ירמיהו, ושלום אביו היה דודו של ירמיהו, אחי אביו. לפי הדעה שחלקיהו אבי ירמיהו הוא חלקיהו בן שלום הכהן הגדול, יוצא שגם אביו וגם סבו של חנמאל נקראו שלום. ויש אומרים שהיו שני אנשים בשם חנמאל, אחד בן דודו של ירמיהו ואחד בן דוד ירמיהו. על כך הכוכבית.', 'The Asterisk on Our Tree', 'Beside Chanamel on our tree there is a note: Chanamel is said to have been Yirmeyahu’s cousin, and his father Shalum was Yirmeyahu’s uncle, his father’s brother. According to the view that Yirmeyahu’s father Chilkiyahu is Chilkiyahu son of Shalum the High Priest, it follows that both Chanamel’s father and his grandfather were called Shalum. And some say there were two men named Chanamel, one Yirmeyahu’s cousin and one his uncle’s son. That is what the asterisk refers to.'),
    ],
  }),
  p({
    slug: 'buzi', cats: LV, name: L('בוזי', 'Buzi'), spot: 'בוזי',
    summary: L('אבי יחזקאל הנביא, ולפי רש״י הוא ירמיהו.', 'Father of Yechezkel the prophet, and according to Rashi he is Yirmeyahu.'),
    rel: [to('child', 'yechezkel-hanavi')], sources: [L('יחזקאל א, ג', 'Ezekiel 1:3'), L('רש״י שם', 'Rashi there')],
    sections: one('בוזי הוא ירמיהו?', 'יחזקאל נקרא "יחזקאל בן בוזי הכהן". רש״י מביא מדרש ש"בוזי" הוא ירמיהו, שנקרא כך כי היו מבזים אותו. באילן שלנו יש סימן שאלה מעל בוזי, כי הזיהוי אינו ודאי, ולכן לא חיברנו אותו לירמיהו.', 'Is Buzi Yirmeyahu?', 'Yechezkel is called "Yechezkel son of Buzi the Kohen". Rashi brings a Midrash that "Buzi" is Yirmeyahu, so called because people despised (bazu) him. On our tree there is a question mark above Buzi, since the identification is not certain, so we have not joined him to Yirmeyahu.'),
  }),
  // ── the family line of the house of Tzadok (Divrei HaYamim I 5) ──
  p({
    slug: 'yochanan-ben-azarya', cats: LV, name: L('יוחנן בן עזריה', 'Yochanan son of Azaryah'), spot: 'יוחנן בן עזריה',
    summary: L('נכד אחימעץ, בשושלת בית צדוק לפי דברי הימים.', 'Grandson of Achimaatz, in the line of the house of Tzadok according to Divrei HaYamim.'),
    rel: [to('father', 'azaryah-ben-achimaatz'), to('child', 'azarya-ben-yochanan')], sources: [L('דברי הימים א׳ ה, לה – לו', 'I Chronicles 5:35–36')],
    sections: one('שושלת בית צדוק', 'אחרי עזריה בן אחימעץ נפרדות שתי רשימות: סדר עולם זוטא מונה את הכהנים הגדולים לפי המלכים, ודברי הימים ממשיכים את השושלת המשפחתית: יוחנן, עזריה, אמריה, אחיטוב, צדוק ושלום. יוחנן הוא הראשון ברשימה המשפחתית.', 'The Line of the House of Tzadok', 'After Azaryah son of Achimaatz two lists part: Seder Olam Zuta counts the High Priests by the kings, and Divrei HaYamim continues the family line: Yochanan, Azaryah, Amaryah, Achituv, Tzadok and Shalum. Yochanan is the first in the family list.'),
  }),
  p({
    slug: 'azarya-ben-yochanan', cats: LV, name: L('עזריה בן יוחנן', 'Azaryah son of Yochanan'), spot: 'עזריה בן יוחנן',
    summary: L('"הוא אשר כהן בבית אשר בנה שלמה בירושלם".', '"He is the one who served as priest in the House Shlomo built in Jerusalem".'),
    rel: [to('father', 'yochanan-ben-azarya'), to('child', 'amarya-ben-azarya')], sources: [L('דברי הימים א׳ ה, לו', 'I Chronicles 5:36')],
    sections: one('עזריה', 'על עזריה בן יוחנן נאמר בדברי הימים "הוא אשר כהן בבית אשר בנה שלמה בירושלם". יש מפרשים שזה עזריהו הכהן שיצא נגד עוזיהו המלך כשנכנס להקטיר בהיכל.', 'Azaryah', 'Of Azaryah son of Yochanan, Divrei HaYamim says "he is the one who served as priest in the House Shlomo built in Jerusalem". Some commentators say this is Azaryahu the Kohen who went in against King Uziyahu when he entered the Sanctuary to burn incense.'),
  }),
  p({
    slug: 'amarya-ben-azarya', cats: LV, name: L('אמריה בן עזריה', 'Amaryah son of Azaryah'), spot: 'אמריה בן עזריה',
    summary: L('בשושלת בית צדוק לפי דברי הימים.', 'In the line of the house of Tzadok according to Divrei HaYamim.'),
    rel: [to('father', 'azarya-ben-yochanan'), to('child', 'achituv-ben-amarya-2')], sources: [L('דברי הימים א׳ ה, לז', 'I Chronicles 5:37'), L('דברי הימים ב׳ יט, יא', 'II Chronicles 19:11')],
    sections: one('אמריה', 'בימי יהושפט נזכר "אמריהו כהן הראש" הממונה "לכל דבר ה׳", ויש שזיהו אותו עם אמריה זה. יש להבחין בינו לבין אמריה בן מריות, סבו של צדוק הראשון.', 'Amaryah', 'In Yehoshafat’s days "Amaryahu the chief priest" is mentioned, appointed "over every matter of Hashem", and some identified him with this Amaryah. He should be distinguished from Amaryah son of Merayot, the grandfather of the first Tzadok.'),
  }),
  p({
    slug: 'achituv-ben-amarya-2', cats: LV, name: L('אחיטוב בן אמריה (השני)', 'Achituv son of Amaryah (the second)'), spot: 'אחיטוב בן אמריה (השני)',
    summary: L('אבי צדוק השני, בשושלת בית צדוק.', 'Father of the second Tzadok, in the line of the house of Tzadok.'),
    rel: [to('father', 'amarya-ben-azarya'), to('child', 'tzadok-ben-achituv-2')], sources: [L('דברי הימים א׳ ה, לז – לח', 'I Chronicles 5:37–38')],
    sections: one('אחיטוב השני', 'בשושלת בית צדוק חוזרים השמות: כמו שאחיטוב בן אמריה היה אבי צדוק הראשון, כך אחיטוב זה, בן אמריה המאוחר, היה אבי צדוק השני. באילן שלנו הם מופיעים בשתי נקודות שונות בשושלת.', 'The Second Achituv', 'In the line of the house of Tzadok the names repeat: just as Achituv son of Amaryah was the father of the first Tzadok, so this Achituv, son of the later Amaryah, was the father of the second Tzadok. On our tree they appear at two different points in the line.'),
  }),
  p({
    slug: 'tzadok-ben-achituv-2', cats: LV, name: L('צדוק בן אחיטוב (השני)', 'Tzadok son of Achituv (the second)'), spot: 'צדוק בן אחיטוב (השני)',
    summary: L('אבי שלום הכהן הגדול, שבו נפגשות שתי רשימות הכהנים.', 'Father of Shalum the High Priest, in whom the two lists of Kohanim meet.'),
    rel: [to('father', 'achituv-ben-amarya-2'), to('child', 'shalum-ben-tzadok')], sources: [L('דברי הימים א׳ ה, לח', 'I Chronicles 5:38'), L('עזרא ז, ב', 'Ezra 7:2')],
    sections: one('צדוק השני', 'צדוק בן אחיטוב זה הוא צאצא של צדוק הכהן מימי דוד, ובנו שלום היה הכהן הגדול בימי אמון, שבו נפגשות הרשימה המשפחתית של דברי הימים ורשימת סדר עולם זוטא.', 'The Second Tzadok', 'This Tzadok son of Achituv was a descendant of Tzadok the Kohen of David’s days, and his son Shalum was the High Priest in Amon’s days, where the family list of Divrei HaYamim and the list of Seder Olam Zuta meet.'),
  }),
];
