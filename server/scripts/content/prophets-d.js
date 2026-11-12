// More prophets (beyond Rashi's 48): Zecharyah son of Yehoyada and
// Zecharyahu of Uziyahu's days.
const { L, sec, article, biblical, to, nm } = require('./helpers');
const { RED, BLUE } = require('./prophets-a');

const prophet = (e) => ({ categories: ['prophets'], roles: [L('נביא', 'Prophet')], ...e, content: article(e.sections) });

module.exports = [
  prophet({
    slug: 'zecharyah-ben-yehoyada', name: L('זכריה בן יהוידע', 'Zecharyah son of Yehoyada'), cardColor: RED,
    roles: [L('נביא', 'Prophet'), L('כהן', 'Kohen')],
    summary: L('הנביא הכהן שנרגם בחצר בית ה׳ בימי יהואש.', 'The prophet-kohen who was stoned in the courtyard of the House of Hashem in the days of Yehoash.'),
    rel: [nm('father', 'יהוידע הכהן', 'Yehoyada the Kohen'), nm('teacher', 'יהוידע הכהן', 'Yehoyada the Kohen'), to('student', 'hoshea-ben-beeri'), to('related', 'yehoash')],
    sources: [L('דברי הימים ב׳ כד, יז – כב', 'II Chronicles 24:17–22'), L('גיטין נז ע״ב', 'Gittin 57b'), L('איכה רבה, פתיחתא כג', 'Eichah Rabbah, Petichta 23'), L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to Mishneh Torah')],
    spots: biblical(60.6, 50.2),
    sections: [
      sec('זכריה הראשון', 'זכריה בן יהוידע הכהן ניבא בימי יהואש מלך יהודה. אחרי מות יהוידע אביו, נטשו שרי יהודה והמלך את בית ה׳ ועבדו את האשרים והעצבים. "ורוח אלהים לבשה את זכריה בן יהוידע הכהן", והוא עמד מעל העם ואמר: "למה אתם עברים את מצות ה׳ ולא תצליחו". על האילן שלנו נכתב "הראשון", להבדילו מזכריה בן ברכיה, נביא שיבת ציון.',
        'The First Zecharyah', 'Zecharyah son of Yehoyada the Kohen prophesied in the days of Yehoash king of Judah. After his father Yehoyada died, the princes of Judah and the king forsook the House of Hashem and served the Asherim and idols. "And the spirit of God clothed Zecharyah son of Yehoyada the Kohen", and he stood above the people and said: "Why do you transgress Hashem’s commandments, so that you cannot prosper?". Our tree labels him "the first", to distinguish him from Zecharyah son of Berechyah, the prophet of the Return to Zion.'),
      sec('דמו של זכריה', 'במצוות המלך רגמו אותו באבן בחצר בית ה׳, ובמותו אמר: "ירא ה׳ וידרש". חז״ל מספרים שהדבר אירע ביום הכיפורים שחל בשבת, ושדמו המשיך לרתוח עד שבא נבוזראדן בימי החורבן (גיטין נז ע״ב).',
        'The Blood of Zecharyah', 'At the king’s command they stoned him in the courtyard of the House of Hashem, and as he died he said: "May Hashem see and avenge". Chazal relate that this happened on a Yom Kippur that fell on Shabbat, and that his blood kept seething until Nevuzaradan came at the time of the Destruction (Gittin 57b).'),
      sec('בשרשרת המסורה', 'הרמב״ם מונה אותו בשרשרת מסירת התורה: יהוידע הכהן קיבל מאלישע, זכריה קיבל מיהוידע אביו, והושע קיבל מזכריה. באילן שלנו מוצג חץ הרב והתלמיד מזכריה אל הושע.',
        'In the Chain of Tradition', 'The Rambam counts him in the chain of tradition: Yehoyada the Kohen received from Elisha, Zecharyah received from his father Yehoyada, and Hoshea received from Zecharyah. Our tree shows the teacher-student arrow from Zecharyah to Hoshea.'),
    ],
  }),
  prophet({
    slug: 'zecharyahu-hamevin', name: L('זכריהו המבין במראות האלוהים', 'Zecharyahu, who understood the visions of God'), cardColor: BLUE,
    summary: L('הנביא בימי עוזיהו, שבימיו "דרש עוזיהו את ה׳ והצליח".', 'The prophet in the days of Uziyahu, in whose days "Uziyahu sought Hashem and prospered".'),
    rel: [to('student', 'uziyahu')],
    sources: [L('דברי הימים ב׳ כו, ה', 'II Chronicles 26:5')],
    spots: biblical(74.6, 53.6),
    sections: [
      sec('רבו של עוזיהו', 'על עוזיהו מלך יהודה נאמר: "ויהי לדרש אלהים בימי זכריהו המבין בראת האלהים, ובימי דרשו את ה׳ הצליחו האלהים". זכריהו לימד את המלך ויראת ה׳ הדריכה אותו, ובימיו גדלה ממלכת יהודה וחזקה.',
        'Uziyahu’s Teacher', 'Of Uziyahu king of Judah it is said: "He sought God in the days of Zecharyahu, who understood the visions of God, and as long as he sought Hashem, God made him prosper". Zecharyahu taught the king, and the fear of Hashem guided him, and in his days the Kingdom of Judah grew strong.'),
      sec('לא לבלבל', 'יש להבחין בינו לבין זכריה בן יהוידע, שנהרג בימי יהואש, ובין זכריה בן ברכיה מנביאי שיבת ציון. באילן שלנו זכריהו מופיע בתיבה כחולה בימי עוזיהו.',
        'Not to Be Confused', 'He should be distinguished from Zecharyah son of Yehoyada, who was killed in the days of Yehoash, and from Zecharyah son of Berechyah of the prophets of the Return to Zion. On our tree Zecharyahu appears in a blue box in the days of Uziyahu.'),
    ],
  }),
];
