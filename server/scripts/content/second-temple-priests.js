// The High Priests of the Second Temple before the Hasmoneans. Family lines
// (red) and the succession in the High Priesthood (black arrows) follow the
// poster. Nechemyah 12 gives Yeshua → Yoyakim → Elyashiv → Yoyada → Yonatan →
// Yadua; after that the poster follows Josephus.
const { L, sec, to, nm } = require('./helpers');

const LV = ['levites'];
const KG = (before, after, note) => [{ label: L('כהונה גדולה', 'High Priesthood'), before, after, ...(note ? { note } : {}) }];
const p = (e) => ({ gender: 'male', cats: LV, roles: [L('כהן גדול', 'High Priest')], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const JOSEPHUS = L('יוסף בן מתתיהו, קדמוניות היהודים יא – יב', 'Josephus, Antiquities 11–12');

module.exports = [
  p({
    slug: 'yoyada-kg', name: L('יוידע הכהן הגדול', 'Yoyada the High Priest'), spot: 'יוידע הכהן הגדול',
    summary: L('בן אלישיב, הכהן הגדול בימי נחמיה.', 'Son of Elyashiv, the High Priest in the days of Nechemyah.'),
    rel: [to('father', 'elyashiv'), to('child', 'yonatan-kg')], offices: KG(['elyashiv'], ['yonatan-kg']),
    sources: [L('נחמיה יב, י – יא; יג, כח', 'Nehemiah 12:10–11; 13:28')],
    sections: one('בן חתן לסנבלט', 'יוידע נמנה בשושלת הכהנים הגדולים בספר נחמיה. נחמיה מספר שאחד מבניו היה חתן לסנבלט החורוני, שונא היהודים, "ואבריחהו מעלי" – כי טימא את הכהונה.', 'Son-in-Law to Sanballat', 'Yoyada is counted in the line of High Priests in the Book of Nechemyah. Nechemyah relates that one of his sons was son-in-law to Sanballat the Horonite, the enemy of the Jews, "and I chased him from me" – for he had defiled the priesthood.'),
  }),
  p({
    slug: 'yonatan-kg', name: L('יונתן הכהן הגדול', 'Yonatan the High Priest'), spot: 'יונתן הכהן הגדול',
    summary: L('בן יוידע, הכהן הגדול בימי מלכי פרס.', 'Son of Yoyada, the High Priest in the days of the kings of Persia.'),
    rel: [to('father', 'yoyada-kg'), to('child', 'yadua')], offices: KG(['yoyada-kg'], ['yadua']),
    sources: [L('נחמיה יב, יא, כב – כג', 'Nehemiah 12:11, 22–23'), JOSEPHUS],
    sections: one('יונתן', 'בנחמיה הוא נקרא פעם "יונתן" ופעם "יוחנן". יוסף בן מתתיהו מספר שהרג את אחיו ישוע בהיכל, כשזה ביקש לקחת ממנו את הכהונה בתמיכת הפחה הפרסי.', 'Yonatan', 'In Nechemyah he is called both "Yonatan" and "Yochanan". Josephus relates that he killed his brother Yeshua in the Sanctuary, when Yeshua sought to take the priesthood from him with the backing of the Persian governor.'),
  }),
  p({
    slug: 'yadua', name: L('ידוע הכהן הגדול', 'Yadua the High Priest'), spot: 'ידוע הכהן הגדול',
    summary: L('האחרון בשושלת הכהנים הגדולים שבספר נחמיה, בימי סוף מלכות פרס.', 'The last of the High Priests listed in Nechemyah, at the end of the Persian rule.'),
    rel: [to('father', 'yonatan-kg'), to('child', 'choniyo-1'), to('child', 'menashe-kg')], offices: KG(['yonatan-kg'], ['choniyo-1']),
    sources: [L('נחמיה יב, יא, כב', 'Nehemiah 12:11, 22'), JOSEPHUS, L('יומא סט ע״א', 'Yoma 69a')],
    sections: one('ידוע ואלכסנדר', 'ידוע הוא האחרון ברשימת הכהנים הגדולים שבספר נחמיה, "עד מלכות דריוש הפרסי". יוסף בן מתתיהו מספר שידוע יצא לקראת אלכסנדר מוקדון והוא השתחווה לפניו – ואילו בגמרא (יומא סט ע״א) הסיפור מסופר על שמעון הצדיק.', 'Yadua and Alexander', 'Yadua is the last in the list of High Priests in Nechemyah, "until the reign of Darius the Persian". Josephus relates that Yadua went out to meet Alexander the Great, who bowed before him – while in the Gemara (Yoma 69a) the story is told of Shimon HaTzadik.'),
  }),
  p({
    slug: 'choniyo-1', name: L('חוניו א׳', 'Choniyo I'), spot: 'חוניו א׳',
    summary: L('בן ידוע, אבי שמעון הצדיק ואלעזר.', 'Son of Yadua, father of Shimon HaTzadik and Elazar.'),
    rel: [to('father', 'yadua'), to('sibling', 'menashe-kg'), to('child', 'shimon-hatzadik'), to('child', 'elazar-kg2')], offices: KG(['yadua'], ['shimon-hatzadik']),
    sources: [JOSEPHUS], sections: one('אבי שמעון הצדיק', 'לפי יוסף בן מתתיהו, חוניו בן ידוע כיהן בכהונה גדולה בתחילת ימי השלטון היווני, ואחריו בנו שמעון – הוא שמעון הצדיק לפי רוב הדעות.', 'Father of Shimon HaTzadik', 'According to Josephus, Choniyo son of Yadua served as High Priest at the beginning of Greek rule, and after him his son Shimon – who, by most opinions, is Shimon HaTzadik.'),
  }),
  p({
    slug: 'elazar-kg2', name: L('אלעזר הכהן הגדול (בית שני)', 'Elazar the High Priest (Second Temple)'), spot: 'אלעזר הכהן הגדול (בית שני)',
    summary: L('אחי שמעון הצדיק, שבימיו תורגמה התורה ליוונית.', 'Shimon HaTzadik’s brother, in whose days the Torah was translated into Greek.'),
    rel: [to('father', 'choniyo-1'), to('sibling', 'shimon-hatzadik'), to('related', 'targum-hashivim')], offices: KG(['shimon-hatzadik'], ['menashe-kg']),
    sources: [JOSEPHUS, L('איגרת אריסטיאס', 'The Letter of Aristeas')],
    sections: one('תרגום השבעים', 'אחרי שמעון הצדיק כיהן אחיו אלעזר, כי בנו של שמעון היה צעיר. לפי יוסף בן מתתיהו, אל אלעזר שלח תלמי המלך לבקש זקנים שיתרגמו את התורה ליוונית, ואלעזר שלח שבעים ושניים זקנים, שישה מכל שבט.', 'The Septuagint', 'After Shimon HaTzadik his brother Elazar served, since Shimon’s son was young. According to Josephus, it was to Elazar that King Ptolemy sent asking for elders to translate the Torah into Greek, and Elazar sent seventy-two elders, six from each tribe.'),
  }),
  p({
    slug: 'menashe-kg', name: L('מנשה הכהן הגדול', 'Menashe the High Priest'), spot: 'מנשה הכהן הגדול',
    summary: L('הכהן הגדול אחרי אלעזר, לפני שחזרה הכהונה לבן שמעון הצדיק.', 'The High Priest after Elazar, before the priesthood returned to Shimon HaTzadik’s son.'),
    rel: [to('father', 'yadua'), to('sibling', 'choniyo-1')], offices: KG(['elazar-kg2'], ['choniyo-2']),
    sources: [JOSEPHUS], sections: one('מנשה', 'אחרי מות אלעזר כיהן מנשה, ואחריו חזרה הכהונה לחוניו בן שמעון הצדיק. באילן שלנו מנשה וחוניו א׳ יוצאים יחד מידוע. יש להבחין בינו לבין מנשה, אחי ידוע, שנשא את בת סנבלט ונעשה כהן בהר גריזים.', 'Menashe', 'After Elazar’s death Menashe served, and after him the priesthood returned to Choniyo son of Shimon HaTzadik. On our tree Menashe and Choniyo I both come from Yadua. He should be distinguished from Menashe the brother of Yadua, who married Sanballat’s daughter and became a priest on Mount Gerizim.'),
  }),
  p({
    slug: 'choniyo-2', name: L('חוניו ב׳', 'Choniyo II'), spot: 'חוניו ב׳',
    summary: L('בנו של שמעון הצדיק, שעליו מספרת הגמרא שבנה מקדש באלכסנדריה.', 'Son of Shimon HaTzadik, of whom the Gemara tells that he built a temple in Alexandria.'),
    rel: [to('father', 'shimon-hatzadik'), to('child', 'shimon-2')], offices: KG(['menashe-kg'], ['shimon-2']),
    sources: [L('מנחות קט ע״ב', 'Menachot 109b'), JOSEPHUS],
    sections: one('חוניו בנו של שמעון הצדיק', 'הגמרא (מנחות קט ע״ב) מספרת ששמעון הצדיק אמר לפני מותו "חוניו בני ישמש תחתי", ושמעי אחיו קינא בו. לפי סיפור זה ברח חוניו לאלכסנדריה ובנה שם מזבח – "בית חוניו". יוסף בן מתתיהו מייחס את בניין מקדש חוניו לצאצא מאוחר יותר, וכך באילן שלנו ההערה על בית חוניו עומדת ליד חוניו ג׳.', 'Choniyo Son of Shimon HaTzadik', 'The Gemara (Menachot 109b) relates that Shimon HaTzadik said before his death "Choniyo my son shall serve in my place", and his brother Shimi was jealous of him. According to this story Choniyo fled to Alexandria and built an altar there – "the house of Choniyo". Josephus attributes the building of the temple of Choniyo to a later descendant, and so on our tree the note about the house of Choniyo stands beside Choniyo III.'),
  }),
  p({
    slug: 'shimon-2', name: L('שמעון ב׳', 'Shimon II'), spot: 'שמעון ב׳',
    summary: L('בן חוניו ב׳, הכהן הגדול בתחילת שלטון הסלאוקים.', 'Son of Choniyo II, the High Priest at the start of Seleucid rule.'),
    rel: [to('father', 'choniyo-2'), to('child', 'choniyo-3'), to('child', 'yason'), to('child', 'menelaus')], offices: KG(['choniyo-2'], ['choniyo-3']),
    sources: [JOSEPHUS, L('בן סירא נ', 'Ben Sira 50')],
    sections: one('שמעון השני', 'שמעון בן חוניו כיהן בתחילת שלטון הסלאוקים. בספר בן סירא יש שיר שבח ארוך לשמעון בן יוחנן הכהן, "גדול אחיו ותפארת עמו", ויש שזיהו את שמעון הצדיק עם שמעון זה. באילן שלנו מופיעה הערה על המחלוקת בזיהוי שמעון הצדיק.', 'The Second Shimon', 'Shimon son of Choniyo served at the beginning of Seleucid rule. The Book of Ben Sira has a long song of praise for Shimon son of Yochanan the Kohen, "greatest of his brothers and glory of his people", and some identified Shimon HaTzadik with this Shimon. Our tree has a note on the dispute over identifying Shimon HaTzadik.'),
  }),
  p({
    slug: 'choniyo-3', name: L('חוניו ג׳', 'Choniyo III'), spot: 'חוניו ג׳',
    summary: L('הכהן הגדול הצדיק שהודח בידי אנטיוכוס; צאצאיו הקימו את מקדש חוניו במצרים.', 'The righteous High Priest deposed by Antiochus; his descendants founded the temple of Choniyo in Egypt.'),
    rel: [to('father', 'shimon-2'), to('sibling', 'yason'), to('sibling', 'menelaus')], offices: KG(['shimon-2'], ['yason']),
    sources: [JOSEPHUS, L('מנחות קט ע״ב', 'Menachot 109b')],
    sections: [
      sec('ההדחה', 'חוניו השלישי היה כהן גדול ירא שמים, שנאבק במתייוונים. יאסון אחיו קנה את הכהונה מאנטיוכוס בכסף, וחוניו הודח, ולפי המסורת נרצח באנטיוכיה.', 'Deposed', 'Choniyo III was a God-fearing High Priest who struggled against the Hellenizers. His brother Yason bought the priesthood from Antiochus with silver, and Choniyo was deposed, and according to tradition murdered in Antioch.'),
      sec('מקדש חוניו', 'באילן שלנו יש לידו הערה: בית חוניו המשיכו לשמש ככהנים בבניין כעין המקדש באלכסנדריה, ו"מקדש חוניו" זה עמד עד קצת אחרי חורבן בית שני, שאז החריבו גם אותו. המשנה (מנחות יג, י) דנה בכהנים ששימשו בבית חוניו.', 'The Temple of Choniyo', 'Our tree has a note beside him: the house of Choniyo continued to serve as Kohanim in a building like the Temple in Alexandria, and this "temple of Choniyo" stood until a little after the destruction of the Second Temple, when it too was destroyed. The Mishnah (Menachot 13:10) discusses Kohanim who served in the house of Choniyo.'),
    ],
  }),
  p({
    slug: 'yason', name: L('יאסון', 'Yason (Jason)'), spot: 'יאסון',
    summary: L('אחי חוניו ג׳, שקנה את הכהונה מאנטיוכוס והכניס את התרבות היוונית לירושלים.', 'Choniyo III’s brother, who bought the priesthood from Antiochus and brought Greek culture into Jerusalem.'),
    rel: [to('father', 'shimon-2'), to('sibling', 'choniyo-3'), to('sibling', 'menelaus')], offices: KG(['choniyo-3'], ['menelaus']),
    sources: [L('ספר מקבים ב׳ ד', 'II Maccabees 4'), JOSEPHUS],
    sections: one('המתייוון', 'יאסון, ששמו העברי ישוע, הבטיח לאנטיוכוס כסף רב תמורת הכהונה הגדולה והרשות להקים גימנסיון בירושלים. בימיו הזניחו כהנים את העבודה כדי להשתתף בתחרויות. כעבור שנים אחדות קנה מנלאוס את הכהונה במחיר גבוה יותר, ויאסון ברח.', 'The Hellenizer', 'Yason, whose Hebrew name was Yeshua, promised Antiochus great sums for the High Priesthood and permission to set up a gymnasium in Jerusalem. In his days Kohanim neglected the service to take part in games. A few years later Menelaus bought the priesthood for a higher price, and Yason fled.'),
  }),
  p({
    slug: 'menelaus', name: L('מנלאוס', 'Menelaus'), spot: 'מנלאוס',
    summary: L('הכהן הגדול המתייוון שבימיו גזר אנטיוכוס את גזירותיו.', 'The Hellenizing High Priest in whose days Antiochus issued his decrees.'),
    rel: [to('father', 'shimon-2'), to('sibling', 'choniyo-3'), to('sibling', 'yason'), to('related', 'gzerot-antiochus')], offices: KG(['yason'], ['yehuda-hamaccabi']),
    sources: [L('ספר מקבים ב׳ ד – ה; יג', 'II Maccabees 4–5; 13'), JOSEPHUS],
    sections: one('מנלאוס', 'מנלאוס קנה את הכהונה מאנטיוכוס במחיר גבוה מזה של יאסון, ולשם כך שדד את כלי המקדש. בימיו טימא אנטיוכוס את המקדש וגזר את גזירות השמד. באילן שלנו הוא בא מאותה משפחה כמו חוניו ויאסון, אף שבספר מקבים ב׳ הוא מתואר כמשבט בנימין.', 'Menelaus', 'Menelaus bought the priesthood from Antiochus for more than Yason had paid, robbing the Temple vessels to do so. In his days Antiochus defiled the Temple and issued the decrees of persecution. On our tree he comes from the same family as Choniyo and Yason, though II Maccabees describes him as from the tribe of Binyamin.'),
  }),
  p({
    slug: 'alkimus', name: L('אלקימוס', 'Alkimus (Alcimus)'), spot: 'אלקימוס',
    summary: L('הכהן הגדול המתייוון שמינה דמטריוס, בימי מלחמות החשמונאים.', 'The Hellenizing High Priest appointed by Demetrius, in the days of the Hasmonean wars.'),
    rel: [], offices: KG(['yehuda-hamaccabi'], ['yonatan-havofsi']),
    sources: [L('ספר מקבים א׳ ז; ט', 'I Maccabees 7; 9'), JOSEPHUS],
    sections: one('אלקימוס', 'המלך הסלאוקי דמטריוס מינה את אלקימוס לכהן גדול, ובתחילה האמינו לו החסידים, אך הוא הרג שישים מהם ביום אחד. אלקימוס ציווה להרוס את חומת העזרה הפנימית, ומת זמן קצר אחר כך. יש המזהים אותו עם יקים איש צרורות, בן אחותו של יוסי בן יועזר, אך באילן שלנו הם מוצגים בנפרד.', 'Alkimus', 'The Seleucid king Demetrius appointed Alkimus High Priest, and at first the pious trusted him, but he killed sixty of them in one day. Alkimus ordered the wall of the inner court torn down, and died soon after. Some identify him with Yakim Ish Tzerorot, the nephew of Yose ben Yoezer, but on our tree they are shown separately.'),
  }),
];
