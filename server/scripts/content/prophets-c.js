// The 48 prophets — part 3: from Yirmeyahu to the Return to Zion.
const { L, sec, article, biblical, to, nm } = require('./helpers');
const { RED, BLUE, GOLD } = require('./prophets-a');

const prophet = (e) => ({ categories: ['prophets'], roles: [L('נביא', 'Prophet')], ...e, content: article(e.sections) });

module.exports = [
  prophet({
    slug: 'yirmeyahu-hanavi', name: L('ירמיהו הנביא', 'Yirmeyahu the Prophet (Jeremiah)'), cardColor: RED,
    summary: L('הנביא שהזהיר מפני החורבן, ראה אותו בעיניו וקונן עליו במגילת איכה.', 'The prophet who warned of the destruction, saw it with his own eyes and lamented it in the Book of Lamentations.'),
    rel: [nm('father', 'חלקיהו', 'Chilkiyahu'), to('teacher', 'tzefanyah-hanavi'), to('student', 'baruch-ben-neriyah'), to('related', 'yoshiyahu'), to('related', 'yehoyakim'), to('related', 'tzidkiyahu'), to('related', 'chulda-haneviah'), to('related', 'churban-bayit-rishon')],
    sources: [L('ספר ירמיהו', 'The Book of Jeremiah'), L('מגילת איכה', 'Lamentations'), L('בבא בתרא טו ע״א', 'Bava Batra 15a'), L('מגילה יד ע״ב', 'Megillah 14b')],
    spots: biblical(67.6, 64.0),
    sections: [
      sec('נער אנכי', 'ירמיהו בן חלקיהו, מן הכהנים אשר בענתות, נקרא לנבואה בשנה השלוש עשרה ליאשיהו: "בטרם אצרך בבטן ידעתיך". הוא ענה "לא ידעתי דבר כי נער אנכי", וה׳ שם את דבריו בפיו. באילן שלנו יש הערה שלפי דעה אחת אביו הוא חלקיהו הכהן הגדול.',
        'I Am Only a Youth', 'Yirmeyahu son of Chilkiyahu, of the Kohanim of Anatot, was called to prophecy in the thirteenth year of Yoshiyahu: "Before I formed you in the womb I knew you". He answered "I do not know how to speak, for I am a youth", and Hashem put His words in his mouth. Our tree notes that according to one view his father was Chilkiyahu the High Priest.'),
      sec('הנביא המוכיח', 'ארבעים שנה הזהיר ירמיהו את העם ואת מלכי יהודה שיחזרו בתשובה ושיכנעו לבבל. יהויקים שרף את מגילתו, ובימי צדקיהו הושלך לבור טיט. הוא ראה בעיניו את חורבן ירושלים, ובישר שאחרי שבעים שנה ישובו הגולים.',
        'The Prophet Who Rebuked', 'For forty years Yirmeyahu warned the people and the kings of Judah to repent and to submit to Babylon. Yehoyakim burned his scroll, and in the days of Tzidkiyahu he was thrown into a pit of mud. He saw the destruction of Jerusalem with his own eyes, and foretold that after seventy years the exiles would return.'),
      sec('כתביו', 'לפי חז״ל ירמיהו כתב את ספרו, את ספר מלכים ואת מגילת איכה (בבא בתרא טו ע״א). באילן שלנו מוצג חץ הרב והתלמיד מצפניה אל ירמיהו, ומירמיהו אל ברוך בן נריה.',
        'His Writings', 'According to Chazal Yirmeyahu wrote his book, the Book of Kings and the Book of Lamentations (Bava Batra 15a). Our tree shows the teacher-student arrow from Tzefanyah to Yirmeyahu, and from Yirmeyahu to Baruch son of Neriyah.'),
    ],
  }),
  prophet({
    slug: 'yechezkel-hanavi', name: L('יחזקאל הנביא', 'Yechezkel the Prophet (Ezekiel)'), cardColor: RED,
    summary: L('הכהן שניבא בגלות בבל, ראה את מעשה המרכבה ואת העצמות היבשות.', 'The Kohen who prophesied in the Babylonian exile, and saw the Divine Chariot and the dry bones.'),
    rel: [nm('father', 'בוזי הכהן', 'Buzi the Kohen'), to('related', 'yehoyachin'), to('related', 'churban-bayit-rishon')],
    sources: [L('ספר יחזקאל', 'The Book of Ezekiel'), L('יחזקאל א, א – ג', 'Ezekiel 1:1–3'), L('בבא בתרא טו ע״א', 'Bava Batra 15a'), L('חגיגה יג ע״ב', 'Chagigah 13b')],
    spots: biblical(62.6, 65.2),
    sections: [
      sec('על נהר כבר', 'יחזקאל בן בוזי הכהן גלה לבבל עם יהויכין, ובשנה החמישית לגלות, על נהר כבר, נפתחו השמים וראה את מעשה המרכבה. הוא ניבא לגולים בבבל, וחז״ל משווים: "כל שראה יחזקאל ראה ישעיה", יחזקאל דומה לבן כפר שראה את המלך, וישעיהו לבן כרך (חגיגה יג ע״ב).',
        'By the River Kevar', 'Yechezkel son of Buzi the Kohen was exiled to Babylon with Yehoyachin, and in the fifth year of the exile, by the river Kevar, the heavens opened and he saw the Divine Chariot. He prophesied to the exiles in Babylon, and Chazal compare: "Everything Yechezkel saw, Yeshayahu saw"; Yechezkel was like a villager who saw the king, Yeshayahu like a city dweller (Chagigah 13b).'),
      sec('העצמות היבשות והמקדש העתידי', 'יחזקאל ראה את בקעת העצמות היבשות שקמו לתחייה, כסמל לשיבת עם ישראל לארצו, ותיאר בפרוטרוט את בית המקדש העתידי. באילן שלנו יש סימן שאלה מעל בוזי אביו, משום שלא ידוע לאיזו משפחה בדיוק השתייך.',
        'The Dry Bones and the Future Temple', 'Yechezkel saw the valley of dry bones come back to life, a sign of Israel’s return to its land, and described the future Temple in detail. On our tree there is a question mark above his father Buzi, because it is not known exactly which family he belonged to.'),
    ],
  }),
  prophet({
    slug: 'machseyah', name: L('מחסיה', 'Machseyah'), cardColor: RED,
    summary: L('סבם של ברוך ושריה בני נריה.', 'Grandfather of Baruch and Seraiah, the sons of Neriyah.'),
    rel: [to('child', 'neriyah-ben-machseyah')],
    sources: [L('ירמיהו לב, יב; נא, נט', 'Jeremiah 32:12; 51:59'), L('מגילה יד ע״ב', 'Megillah 14b')],
    spots: biblical(65.9, 64.4),
    sections: [
      sec('אבי נריה', 'מחסיה נזכר בספר ירמיהו כאביו של נריה וכסבם של ברוך ושריה. רש״י מונה אותו בין ארבעים ושמונה הנביאים. חז״ל מלמדים שנריה, ברוך, שריה ומחסיה היו כהנים, מצאצאי רחב (מגילה יד ע״ב).',
        'Father of Neriyah', 'Machseyah is mentioned in the Book of Jeremiah as the father of Neriyah and grandfather of Baruch and Seraiah. Rashi counts him among the forty-eight prophets. Chazal teach that Neriyah, Baruch, Seraiah and Machseyah were Kohanim, descendants of Rachav (Megillah 14b).'),
    ],
  }),
  prophet({
    slug: 'neriyah-ben-machseyah', name: L('נריה בן מחסיה', 'Neriyah son of Machseyah'), cardColor: RED,
    summary: L('אביהם של ברוך ושריה.', 'Father of Baruch and Seraiah.'),
    rel: [to('father', 'machseyah'), to('child', 'baruch-ben-neriyah'), to('child', 'seraiah-ben-neriyah')],
    sources: [L('ירמיהו לב, יב; לו; נא, נט', 'Jeremiah 32:12; 36; 51:59'), L('מגילה יד ע״ב', 'Megillah 14b')],
    spots: biblical(66.0, 65.3),
    sections: [
      sec('נביא בן נביא', 'נריה בן מחסיה הוא אביהם של ברוך, תלמידו וסופרו של ירמיהו, ושל שריה, שהוליך את מגילת ירמיהו לבבל. רש״י מונה אותו בין ארבעים ושמונה הנביאים, לפי הכלל שכל נביא שנתפרש שמו ושם אביו הוא נביא בן נביא.',
        'A Prophet Son of a Prophet', 'Neriyah son of Machseyah was the father of Baruch, Yirmeyahu’s student and scribe, and of Seraiah, who carried Yirmeyahu’s scroll to Babylon. Rashi counts him among the forty-eight prophets, by the rule that every prophet whose name and father’s name are given is a prophet son of a prophet.'),
    ],
  }),
  prophet({
    slug: 'baruch-ben-neriyah', name: L('ברוך בן נריה', 'Baruch son of Neriyah'), cardColor: RED,
    roles: [L('נביא', 'Prophet'), L('סופר', 'Scribe')],
    summary: L('תלמידו וסופרו של ירמיהו, שכתב את מגילתו מפיו.', 'Yirmeyahu’s student and scribe, who wrote his scroll from his dictation.'),
    rel: [to('father', 'neriyah-ben-machseyah'), to('sibling', 'seraiah-ben-neriyah'), to('teacher', 'yirmeyahu-hanavi'), nm('student', 'עזרא הסופר', 'Ezra the Scribe')],
    sources: [L('ירמיהו לב; לו; מה', 'Jeremiah 32; 36; 45'), L('מגילה טז ע״ב', 'Megillah 16b'), L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to Mishneh Torah')],
    spots: biblical(67.1, 66.9),
    sections: [
      sec('המגילה', 'ברוך כתב מפי ירמיהו את כל דבריו על מגילת ספר, וקרא אותה באוזני העם בבית ה׳. כשנודע הדבר לשרים, אמרו לו ולירמיהו להסתתר, והמלך יהויקים שרף את המגילה. ירמיהו הכתיב שוב לברוך, ונוספו על הדברים "דברים רבים כהמה".',
        'The Scroll', 'Baruch wrote down all of Yirmeyahu’s words from his dictation on a scroll, and read it aloud to the people in the House of Hashem. When the princes heard of it, they told him and Yirmeyahu to hide, and King Yehoyakim burned the scroll. Yirmeyahu dictated again to Baruch, and "many words like them" were added.'),
      sec('רבו של עזרא', 'ברוך ליווה את ירמיהו בימי המצור ואחרי החורבן. חז״ל מלמדים שעזרא לא עלה מבבל כל זמן שברוך בן נריה היה קיים, משום שתלמוד תורה גדול מבניין בית המקדש (מגילה טז ע״ב). הרמב״ם מונה אותו בשרשרת המסורה: ברוך קיבל מירמיהו, ועזרא קיבל מברוך.',
        'Ezra’s Teacher', 'Baruch accompanied Yirmeyahu during the siege and after the destruction. Chazal teach that Ezra did not go up from Babylon as long as Baruch son of Neriyah was alive, because Torah study is greater than building the Temple (Megillah 16b). The Rambam counts him in the chain of tradition: Baruch received from Yirmeyahu, and Ezra received from Baruch.'),
    ],
  }),
  prophet({
    slug: 'seraiah-ben-neriyah', name: L('שריה בן נריה', 'Seraiah son of Neriyah'), cardColor: RED,
    summary: L('אחיו של ברוך, שהוליך את מגילת ירמיהו על בבל לבבל.', 'Baruch’s brother, who carried Yirmeyahu’s scroll about Babylon to Babylon.'),
    rel: [to('father', 'neriyah-ben-machseyah'), to('sibling', 'baruch-ben-neriyah'), to('related', 'yirmeyahu-hanavi'), to('related', 'tzidkiyahu')],
    sources: [L('ירמיהו נא, נט – סד', 'Jeremiah 51:59–64')],
    spots: biblical(64.0, 66.9),
    sections: [
      sec('המגילה בנהר פרת', 'שריה בן נריה בן מחסיה הלך עם צדקיהו מלך יהודה לבבל בשנה הרביעית למלכותו. ירמיהו כתב את כל הרעה העתידה לבוא על בבל בספר אחד, ונתן אותו לשריה. בבבל קרא שריה את הדברים, קשר אבן לספר והשליך אותו לתוך הפרת: "ככה תשקע בבל".',
        'The Scroll in the Euphrates', 'Seraiah son of Neriyah son of Machseyah went with Tzidkiyahu king of Judah to Babylon in the fourth year of his reign. Yirmeyahu wrote all the evil that would come upon Babylon in one book and gave it to Seraiah. In Babylon Seraiah read the words, tied a stone to the book and threw it into the Euphrates: "So shall Babylon sink".'),
      sec('לא לבלבל', 'אין לבלבל בינו לבין שריה הכהן הגדול, שהיה כהן גדול בעת החורבן ונהרג ברבלה. גם באילן שלנו הם שני אנשים נפרדים.',
        'Not to Be Confused', 'He should not be confused with Seraiah the High Priest, who was High Priest at the time of the destruction and was killed at Rivlah. On our tree too they are two separate people.'),
    ],
  }),
  prophet({
    slug: 'chaggai-hanavi', name: L('חגי הנביא', 'Chaggai the Prophet (Haggai)'), cardColor: BLUE,
    roles: [L('נביא', 'Prophet'), L('מאנשי כנסת הגדולה', 'Of the Men of the Great Assembly')],
    summary: L('נביא שיבת ציון שעורר את העם לבנות את בית המקדש השני.', 'A prophet of the Return to Zion who roused the people to build the Second Temple.'),
    rel: [to('related', 'beit-hamikdash-hasheni'), to('related', 'zecharyah-hanavi'), to('related', 'malachi-hanavi'), nm('related', 'זרובבל', 'Zerubavel')],
    sources: [L('ספר חגי', 'The Book of Haggai'), L('עזרא ה, א; ו, יד', 'Ezra 5:1; 6:14'), L('יומא ט ע״ב', 'Yoma 9b')],
    spots: biblical(39.4, 67.5),
    sections: [
      sec('העת לכם לשבת בבתיכם', 'בשנה השנית לדריוש, כשבניין המקדש עמד, אמר חגי לזרובבל וליהושע הכהן הגדול: "העת לכם אתם לשבת בבתיכם ספונים, והבית הזה חרב?". בעקבות דבריו חזרו לבנות.',
        'Is It Time for You to Dwell in Your Houses', 'In the second year of Daryavesh, when the building of the Temple had stopped, Chaggai said to Zerubavel and to Yehoshua the High Priest: "Is it time for you to dwell in your panelled houses while this House lies in ruins?". Following his words they resumed building.'),
      sec('גדול יהיה כבוד הבית', 'חגי ניחם את מי שזכרו את הבית הראשון: "גדול יהיה כבוד הבית הזה האחרון מן הראשון". חז״ל מלמדים שעם מות חגי, זכריה ומלאכי, הנביאים האחרונים, נסתלקה רוח הקודש מישראל (יומא ט ע״ב).',
        'The Glory of This House Will Be Great', 'Chaggai comforted those who remembered the First Temple: "The glory of this latter House will be greater than the former". Chazal teach that with the death of Chaggai, Zecharyah and Malachi, the last prophets, the holy spirit departed from Israel (Yoma 9b).'),
    ],
  }),
  prophet({
    slug: 'zecharyah-hanavi', name: L('זכריה הנביא', 'Zecharyah the Prophet (Zechariah)'), cardColor: BLUE,
    roles: [L('נביא', 'Prophet'), L('מאנשי כנסת הגדולה', 'Of the Men of the Great Assembly')],
    summary: L('זכריה בן ברכיה, נביא שיבת ציון שחזה מראות של גאולה.', 'Zecharyah son of Berechyah, a prophet of the Return to Zion who saw visions of redemption.'),
    rel: [nm('father', 'ברכיה', 'Berechyah'), to('related', 'chaggai-hanavi'), to('related', 'malachi-hanavi'), to('related', 'beit-hamikdash-hasheni'), nm('related', 'זרובבל', 'Zerubavel')],
    sources: [L('ספר זכריה', 'The Book of Zechariah'), L('עזרא ה, א', 'Ezra 5:1'), L('מכות כד ע״ב', 'Makkot 24b')],
    spots: biblical(36.3, 68.6),
    sections: [
      sec('זכריה השני', 'זכריה בן ברכיה בן עדו ניבא עם חגי בשנה השנית לדריוש ועודד את בניין המקדש. על האילן שלנו נכתב "השני": יש להבחין בינו לבין זכריה בן יהוידע הכהן, הנביא שנהרג בבית המקדש בימי יהואש.',
        'The Second Zecharyah', 'Zecharyah son of Berechyah son of Ido prophesied with Chaggai in the second year of Daryavesh and encouraged the building of the Temple. Our tree labels him "the second": he must be distinguished from Zecharyah son of Yehoyada the Kohen, the prophet who was killed in the Temple in the days of Yehoash.'),
      sec('לא בחיל ולא בכח', 'זכריה ראה מראות לילה: המנורה של זהב ושני זיתים עליה, ושמע: "לא בחיל ולא בכח כי אם ברוחי". הוא ניבא "עד ישבו זקנים וזקנות ברחובות ירושלים", ובכך ניחם רבי עקיבא את חבריו על חורבן הבית (מכות כד ע״ב).',
        'Not by Might and Not by Power', 'Zecharyah saw night visions: the golden menorah with two olive trees beside it, and heard: "Not by might and not by power, but by My spirit". He prophesied "old men and women will again sit in the streets of Jerusalem", and with this Rabbi Akiva comforted his colleagues over the destroyed Temple (Makkot 24b).'),
    ],
  }),
  prophet({
    slug: 'malachi-hanavi', name: L('מלאכי הנביא', 'Malachi the Prophet'), cardColor: BLUE,
    roles: [L('נביא', 'Prophet'), L('מאנשי כנסת הגדולה', 'Of the Men of the Great Assembly')],
    summary: L('אחרון הנביאים, שלפי דעה אחת בחז״ל הוא עזרא הסופר.', 'The last of the prophets, who according to one view in Chazal is Ezra the Scribe.'),
    rel: [to('related', 'chaggai-hanavi'), to('related', 'zecharyah-hanavi'), nm('related', 'עזרא הסופר', 'Ezra the Scribe'), to('related', 'beit-hamikdash-hasheni')],
    sources: [L('ספר מלאכי', 'The Book of Malachi'), L('מגילה טו ע״א', 'Megillah 15a')],
    spots: biblical(33.3, 69.6),
    sections: [
      sec('אחרון הנביאים', 'מלאכי ניבא בימי בית שני והוכיח את הכהנים שביזו את שולחן ה׳ ואת העם על נישואי נכריות ועל המעשרות. ספרו חותם את ספרי הנביאים: "זכרו תורת משה עבדי... הנה אנכי שלח לכם את אליה הנביא".',
        'The Last of the Prophets', 'Malachi prophesied in the days of the Second Temple and rebuked the Kohanim who scorned Hashem’s table, and the people for marrying foreign wives and withholding tithes. His book closes the Prophets: "Remember the Torah of Moshe My servant... Behold, I will send you Eliyah the prophet".'),
      sec('מלאכי זה עזרא', 'רבי יהושע בן קרחה אומר: "מלאכי זה עזרא", וחכמים אומרים שמלאכי שמו (מגילה טו ע״א). באילן שלנו מלאכי מופיע בתיבה משלו ומסומן בכוכבית.',
        'Malachi Is Ezra', 'Rabbi Yehoshua ben Korcha says: "Malachi is Ezra", while the sages say Malachi was his own name (Megillah 15a). On our tree Malachi has his own box and is marked with an asterisk.'),
    ],
  }),
  prophet({
    slug: 'mordechai-hayehudi', name: L('מרדכי היהודי', 'Mordechai the Jew'), cardColor: GOLD,
    roles: [L('נביא', 'Prophet'), L('מאנשי כנסת הגדולה', 'Of the Men of the Great Assembly')],
    summary: L('מרדכי בן יאיר משבט בנימין, שהציל עם אסתר את היהודים מגזירת המן.', 'Mordechai son of Yair of the tribe of Binyamin, who with Esther saved the Jews from Haman’s decree.'),
    rel: [nm('father', 'יאיר', 'Yair'), to('related', 'esther-hamalka'), to('related', 'shevet-binyamin')],
    sources: [L('מגילת אסתר', 'The Book of Esther'), L('עזרא ב, ב', 'Ezra 2:2'), L('מגילה יב ע״ב – יג ע״א', 'Megillah 12b–13a'), L('מנחות סה ע״א', 'Menachot 65a')],
    spots: biblical(28.7, 69.3),
    sections: [
      sec('איש יהודי', 'מרדכי בן יאיר בן שמעי בן קיש, איש ימיני, גלה עם יהויכין, ובשושן גידל את אסתר בת דודו. הוא גילה את מזימת בגתן ותרש להרוג את המלך, ולא כרע ולא השתחווה להמן.',
        'A Jewish Man', 'Mordechai son of Yair son of Shimi son of Kish, a Benjaminite, was exiled with Yehoyachin, and in Shushan raised his cousin Esther. He uncovered Bigtan and Teresh’s plot to kill the king, and did not kneel or bow to Haman.'),
      sec('ומי יודע', 'כשגזר המן להשמיד את היהודים, שלח מרדכי לאסתר: "ומי יודע אם לעת כזאת הגעת למלכות". אחרי הנס נעשה משנה למלך, ויחד עם אסתר קבע את ימי הפורים לדורות. חז״ל מזהים אותו עם "בלשן" שעלה עם זרובבל, ומונים אותו בין אנשי כנסת הגדולה (מנחות סה ע״א).',
        'Who Knows', 'When Haman decreed the destruction of the Jews, Mordechai sent to Esther: "Who knows whether you have come to the kingdom for such a time as this". After the miracle he became second to the king, and together with Esther established the days of Purim for all generations. Chazal identify him with "Bilshan" who went up with Zerubavel, and count him among the Men of the Great Assembly (Menachot 65a).'),
    ],
  }),
];
