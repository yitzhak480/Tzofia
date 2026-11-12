// The last names of the first tree: the Heads of the Exile from Chizkiyah to
// Rav Huna, Kosiva and Bar Kochba, and the figures of the Second Temple
// (the three rich men of Jerusalem, the Alabarchs of Alexandria, Philo and
// Yosef ben Matityahu).
const { L, sec, to } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const RG = (before, after) => ({ label: L('ראש הגולה', 'Head of the Exile'), before, after });
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const RG_NOTE = sec('ראשי הגולה', 'באילן שלנו יש הערה: אחרי שמלך בבל אויל מרודך הוציא את יהויכין מלך יהודה מבית האסורים, הוא וצאצאיו התחילו שושלת של מנהיגים יהודים על הגולה היהודית בבבל. ראשי הגולה היו עשירים, מינו רבנים ודיינים, ולרוב עזרו לקהילה היהודית דרך הקשרים שלהם למלכות; חלק מהם היו גם תלמידי חכמים, ומוזכרים בתלמוד, כמו מר עוקבא. השמות באילן הם לפי סדר עולם זוטא, וראשי הגולה המשיכו להנהיג את גלות בבל גם בתקופת האמוראים והגאונים.',
  'The Heads of the Exile', 'Our tree has a note: after Evil-Merodach king of Bavel released Yehoyachin king of Judah from prison, he and his descendants began a line of Jewish leaders over the Jewish exile in Bavel. The Heads of the Exile were wealthy, appointed rabbis and judges, and mostly helped the Jewish community through their ties to the government; some of them were also Torah scholars and are mentioned in the Talmud, like Mar Ukva. The names on our tree follow Seder Olam Zuta, and the Heads of the Exile went on leading the Babylonian exile in the times of the Amoraim and the Geonim too.');
const rg = (slug, he, en, spot, before, after, rel, textHe, textEn) => p({
  slug, cats: [], name: L(he, en), spot, roles: [L('ראש הגולה', 'Head of the Exile')],
  summary: L(`מראשי הגולה בבבל בימי הבית השני, לפי סדר עולם זוטא.`, `One of the Heads of the Exile in Bavel in the days of the Second Temple, according to Seder Olam Zuta.`),
  rel, offices: [RG(before, after)], sources: [SOZ],
  sections: [sec(he, textHe, en, textEn), RG_NOTE],
});
const chain = 'באילן שלנו ראשי הגולה יורדים זה אחר זה בשרשרת אחת, כל אחד אחרי מי שלפניו.';
const chainEn = 'On our tree the Heads of the Exile come down one after another in a single chain, each after the one before.';

const rasheiHagola = [
  rg('chizkiya-rosh-hagola', 'חזקיה ראש הגולה', 'Chizkiyah, Head of the Exile', 'חזקיה ראש הגולה', [], ['akuv-rosh-hagola'],
    [{ type: 'ancestor', slug: 'berechya-rosh-hagola' }, to('child', 'akuv-rosh-hagola')],
    `חזקיה הוא הראשון בשרשרת ראשי הגולה בימי הבית השני שבאילן. מעליו יורד קו מקווקו מזרובבל ובניו – משולם, חנניה וברכיה – כי יש ביניהם דורות שלא מופיעים באילן. ${chain}`,
    `Chizkiyah is the first in the chain of the Heads of the Exile of the Second Temple period on our tree. A dotted line comes down to him from Zerubavel and his sons – Meshulam, Chananyah and Berechyah – since there are generations between them not shown on the tree. ${chainEn}`),
  rg('akuv-rosh-hagola', 'עקוב ראש הגולה', 'Akkuv, Head of the Exile', 'עקוב ראש הגולה', ['chizkiya-rosh-hagola'], ['nachum-rosh-hagola'],
    [to('father', 'chizkiya-rosh-hagola'), to('child', 'nachum-rosh-hagola')],
    `עקוב בא אחרי חזקיה בשרשרת ראשי הגולה. שם דומה, "עקוב", מופיע בדברי הימים (א׳ ג, כד) בין צאצאי זרובבל. ${chain}`, `Akkuv came after Chizkiyah in the chain of the Heads of the Exile. A similar name, "Akkuv", appears in Divrei HaYamim (I 3:24) among Zerubavel’s descendants. ${chainEn}`),
  rg('nachum-rosh-hagola', 'נחום ראש הגולה', 'Nachum, Head of the Exile', 'נחום ראש הגולה', ['akuv-rosh-hagola'], ['yochanan-rosh-hagola'],
    [to('father', 'akuv-rosh-hagola'), to('child', 'yochanan-rosh-hagola')],
    `נחום בא אחרי עקוב בשרשרת ראשי הגולה. ${chain}`, `Nachum came after Akkuv in the chain of the Heads of the Exile. ${chainEn}`),
  rg('yochanan-rosh-hagola', 'יוחנן ראש הגולה', 'Yochanan, Head of the Exile', 'יוחנן ראש הגולה', ['nachum-rosh-hagola'], ['shafat-rosh-hagola'],
    [to('father', 'nachum-rosh-hagola'), to('child', 'shafat-rosh-hagola')],
    `יוחנן בא אחרי נחום בשרשרת ראשי הגולה. ${chain}`, `Yochanan came after Nachum in the chain of the Heads of the Exile. ${chainEn}`),
  rg('shafat-rosh-hagola', 'שפט ראש הגולה', 'Shafat, Head of the Exile', 'שפט ראש הגולה', ['yochanan-rosh-hagola'], ['anan-rosh-hagola'],
    [to('father', 'yochanan-rosh-hagola'), to('child', 'anan-rosh-hagola')],
    `שפט בא אחרי יוחנן בשרשרת ראשי הגולה. ${chain}`, `Shafat came after Yochanan in the chain of the Heads of the Exile. ${chainEn}`),
  rg('anan-rosh-hagola', 'ענן ראש הגולה', 'Anan, Head of the Exile', 'ענן ראש הגולה', ['shafat-rosh-hagola'], ['natan-rosh-hagola'],
    [to('father', 'shafat-rosh-hagola'), to('child', 'natan-rosh-hagola')],
    `ענן בא אחרי שפט בשרשרת ראשי הגולה. ${chain}`, `Anan came after Shafat in the chain of the Heads of the Exile. ${chainEn}`),
  rg('natan-rosh-hagola', 'נתן ראש הגולה', 'Natan, Head of the Exile', 'נתן ראש הגולה', ['anan-rosh-hagola'], ['rav-huna-kama'],
    [to('father', 'anan-rosh-hagola'), to('child', 'rav-huna-kama')],
    `נתן בא אחרי ענן בשרשרת ראשי הגולה. ${chain}`, `Natan came after Anan in the chain of the Heads of the Exile. ${chainEn}`),
  p({
    slug: 'rav-huna-kama', name: L('רב הונא קמא', 'Rav Huna I'), spot: 'רב הונא קמא',
    roles: [L('ראש הגולה', 'Head of the Exile')],
    summary: L('ראש הגולה בבבל בימי רבי יהודה הנשיא, שרבי אמר עליו שהוא גדול ממנו ביחוסו.', 'Head of the Exile in Bavel in the days of Rabbi Yehudah HaNasi, of whom Rebbi said he was greater than him in lineage.'),
    rel: [to('father', 'natan-rosh-hagola'), to('related', 'rabbi-yehuda-hanasi')], offices: [RG(['natan-rosh-hagola'], [])],
    sources: [L('הוריות יא ע״ב', 'Horayot 11b'), L('ירושלמי כלאים ט, ג', 'Yerushalmi Kilayim 9:3'), L('מועד קטן כה ע״א', 'Moed Katan 25a'), SOZ],
    sections: [
      sec('רב הונא', 'הגמרא (הוריות יא ע״ב) מספרת שרבי שאל את רבי חייא: "כגון אני מהו בשעיר?" – האם אני כמלך? ענה לו: "הרי צרתך בבבל" – רב הונא ראש הגולה, שהוא מבית דוד מצד הזכר, ואילו רבי מבית דוד מצד הנקבה. הוא נפטר בבבל, וארונו הועלה לארץ ישראל ונקבר ליד רבי חייא (מועד קטן כה ע״א). באילן שלנו מתחתיו כתוב שראשי הגולה המשיכו להנהיג את גלות בבל גם בתקופת האמוראים והגאונים.', 'Rav Huna', 'The Gemara (Horayot 11b) relates that Rebbi asked Rabbi Chiya: "One like me – what am I regarding the king’s goat-offering?" – am I like a king? He answered: "Your rival is in Bavel" – Rav Huna the Head of the Exile, who is of the house of David through the male line, while Rebbi is of the house of David through the female line. He died in Bavel, and his coffin was brought up to the Land of Israel and buried beside Rabbi Chiya (Moed Katan 25a). On our tree it says beneath him that the Heads of the Exile went on leading the Babylonian exile in the times of the Amoraim and the Geonim too.'),
      RG_NOTE,
    ],
  }),
  p({
    slug: 'kosiva', name: L('כוסיבא', 'Kosiva'), spot: 'כוסיבא',
    summary: L('אבי שמעון בן כוזיבא, מנהיג המרד; באילן מקושר בסימן שאלה לבית דוד.', 'Father of Shimon ben Koziva, leader of the revolt; on our tree joined to the house of David with a question mark.'),
    rel: [maybe('ancestor', 'zerubavel'), to('child', 'shimon-ben-koziva'), to('related', 'rabbi-elazar-hamodai')], sources: [L('ירושלמי תענית ד, ה', 'Yerushalmi Taanit 4:5'), L('איכה רבה ב, ב', 'Eichah Rabbah 2:2'), L('רמב״ם, הלכות מלכים יא, ג', 'Rambam, Laws of Kings 11:3')],
    sections: one('סימן השאלה באילן', 'באילן שלנו יורד קו מקווקו משושלת בית דוד וראשי הגולה אל כוסיבא, ועליו סימן שאלה: לא ידוע בוודאות שבנו, בר כוכבא, היה מבית דוד. רבי עקיבא אמר עליו "דין הוא מלכא משיחא" (ירושלמי תענית ד, ה), והרמב״ם כותב שהוא וכל חכמי דורו חשבו שהוא המלך המשיח – ומלך המשיח צריך להיות מבית דוד. מכאן ההשערה שהיה מבית דוד, אבל אין לכך מקור מפורש. על כוסיבא עצמו לא נשאר בידינו דבר מלבד שמו.', 'The Question Mark on Our Tree', 'On our tree a dotted line comes down from the line of the house of David and the Heads of the Exile to Kosiva, with a question mark on it: it is not known for certain that his son, Bar Kochba, was of the house of David. Rabbi Akiva said of him "this is the king Messiah" (Yerushalmi Taanit 4:5), and the Rambam writes that he and all the sages of his generation thought he was the king Messiah – and the king Messiah must be of the house of David. Hence the supposition that he was of the house of David, but there is no explicit source for it. Of Kosiva himself nothing has come down to us but his name.'),
  }),
  p({
    slug: 'shimon-ben-koziva', name: L('שמעון בן כוזיבא', 'Shimon ben Koziva (Bar Kochba)'), spot: 'שמעון בן כוזיבא',
    roles: [L('נשיא המרד', 'Nasi of the revolt')],
    summary: L('בר כוכבא, נשיא המרד ברומאים, שרבי עקיבא אמר עליו "דין הוא מלכא משיחא".', 'Bar Kochba, Nasi of the revolt against the Romans, of whom Rabbi Akiva said "this is the king Messiah".'),
    rel: [to('father', 'kosiva'), to('related', 'rabbi-akiva'), to('related', 'rabbi-elazar-hamodai'), to('related', 'mered-bar-kochva')],
    sources: [L('ירושלמי תענית ד, ה', 'Yerushalmi Taanit 4:5'), L('איכה רבה ב, ב', 'Eichah Rabbah 2:2'), L('סנהדרין צג ע״ב', 'Sanhedrin 93b'), L('גיטין נז ע״א', 'Gittin 57a'), L('רמב״ם, הלכות מלכים יא, ג', 'Rambam, Laws of Kings 11:3')],
    sections: [
      sec('בר כוכבא', 'שמעון בן כוזיבא עמד בראש המרד הגדול ברומאים בימי אדריינוס, וכונה "בר כוכבא" על שם הפסוק "דרך כוכב מיעקב". רבי עקיבא אמר עליו "דין הוא מלכא משיחא", ורבי יוחנן בן תורתא ענה לו: "עקיבא, יעלו עשבים בלחייך ועדיין בן דוד לא יבוא". המדרש מספר על גבורתו הגדולה – שהיה מקבל את אבני הבליסטראות בברכו ומחזיר אותן.', 'Bar Kochba', 'Shimon ben Koziva led the great revolt against the Romans in the days of Hadrian, and was called "Bar Kochba" (son of the star) after the verse "a star shall go forth from Yaakov". Rabbi Akiva said of him "this is the king Messiah", and Rabbi Yochanan ben Torta answered him: "Akiva, grass will grow on your cheeks and the son of David will still not have come". The Midrash tells of his great strength – that he would catch the catapult stones on his knee and throw them back.'),
      sec('ביתר', 'כשביתר הייתה נצורה, רבי אלעזר המודעי, דודו, ישב בשק ובאפר והתפלל. כותי אחד הלשין עליו, ובר כוכבא בעט בו והרגו – ויצאה בת קול שזרוע ישראל ועין ימינם יבשו. מיד נלכדה ביתר ונהרג בן כוזיבא (ירושלמי תענית ד, ה). באילן כתוב תחת שמו "נשיא המרד".', 'Beitar', 'When Beitar was under siege, Rabbi Elazar HaModai, his uncle, sat in sackcloth and ashes and prayed. A Kuthean slandered him, and Bar Kochba kicked him and killed him – and a heavenly voice said that the arm of Israel and its right eye would wither. At once Beitar was captured and ben Koziva was killed (Yerushalmi Taanit 4:5). On our tree it says under his name "Nasi of the revolt".'),
    ],
  }),
];

const tanna = [
  p({
    slug: 'rabbi-elazar-hamodai', name: L('רבי אלעזר המודעי', 'Rabbi Elazar HaModai'), spot: 'רבי אלעזר המודעי',
    summary: L('דודו של בר כוכבא, שתפילתו הגנה על ביתר.', 'Bar Kochba’s uncle, whose prayer protected Beitar.'),
    rel: [to('related', 'shimon-ben-koziva'), to('related', 'kosiva'), to('related', 'mered-bar-kochva')], sources: [L('ירושלמי תענית ד, ה', 'Yerushalmi Taanit 4:5'), L('איכה רבה ב, ב', 'Eichah Rabbah 2:2'), L('משנה אבות ג, יא', 'Mishnah Avot 3:11'), L('מכילתא', 'Mechilta')],
    sections: one('רבי אלעזר המודעי', 'רבי אלעזר מן העיר מודיעין היה מדרשני גדול, ודבריו מובאים רבות במכילתא. הוא אמר: "המחלל את הקדשים, והמבזה את המועדות... אף על פי שיש בידו תורה ומעשים טובים, אין לו חלק לעולם הבא". באילן כתוב תחת שמו "דוד בר כוכבא": כשביתר הייתה נצורה ישב בשק ובאפר והתפלל, וכל זמן שהתפלל לא נלכדה. כותי אחד הלשין עליו, ובר כוכבא הרג אותו – ומיד נלכדה ביתר.', 'Rabbi Elazar HaModai', 'Rabbi Elazar of the town of Modiin was a great expounder, and his words are brought often in the Mechilta. He said: "One who profanes holy things and despises the festivals... even if he has Torah and good deeds, has no share in the World to Come". On our tree it says under his name "Bar Kochba’s uncle": when Beitar was under siege he sat in sackcloth and ashes and prayed, and as long as he prayed it was not captured. A Kuthean slandered him, and Bar Kochba killed him – and at once Beitar was captured.'),
  }),
];

const THREE_RICH = sec('שלושת העשירים', 'הגמרא (גיטין נו ע״א) מספרת: "הוו בה בירושלים הנך תלתא עתירי: נקדימון בן גוריון, ובן כלבא שבוע, ובן ציצית הכסת" – והיה בידם להחזיק את העיר עשרים ואחת שנה במזון, בעצים ובשמן. הבריונים שרפו את אוצרותיהם כדי שהעם ייאלץ להילחם ברומאים, ונעשה רעב.',
  'The Three Rich Men', 'The Gemara (Gittin 56a) relates: "There were in Jerusalem three rich men: Nakdimon ben Gurion, Ben Kalba Savua and Ben Tzitzit HaKeset" – and they had enough to keep the city for twenty-one years with food, wood and oil. The zealots burned their stores so that the people would be forced to fight the Romans, and there was famine.');
const ALABARCH = sec('האלבארכים של אלכסנדריה', 'באילן שלנו יש הערה: האלבארכים של אלכסנדריה היו אחראים על כל ענייני היהודים באלכסנדריה בסוף ימי בית שני, ובמיוחד על אסיפת המיסים בנמל אלכסנדריה. החשובים במשפחה הזאת, האחים פילון ואלכסנדר, היו חשובים מאוד, משום שעזרו ליהודים בתקופות קשות ובזמן גזירות הרומאים.',
  'The Alabarchs of Alexandria', 'Our tree has a note: the Alabarchs of Alexandria were in charge of all the affairs of the Jews of Alexandria at the end of the Second Temple period, and especially of collecting the taxes at the port of Alexandria. The most important of this family, the brothers Philo and Alexander, were very important, since they helped the Jews in hard times and at the time of the Roman decrees.');

const ishim = [
  p({
    slug: 'nakdimon-ben-gurion', name: L('נקדימון בן גוריון', 'Nakdimon ben Gurion'), spot: 'נקדימון בן גוריון',
    summary: L('העשיר מירושלים שבשבילו "נקדה" החמה.', 'The rich man of Jerusalem for whose sake the sun "broke through".'),
    rel: [to('related', 'ben-tzitzit-hakeset'), to('related', 'kalba-savua'), to('related', 'churban-bayit-sheni')], sources: [L('תענית יט ע״ב – כ ע״א', 'Taanit 19b–20a'), L('גיטין נו ע״א', 'Gittin 56a'), L('כתובות סו ע״ב', 'Ketubot 66b')],
    sections: [
      sec('נקדימון', 'פעם אחת עלו עולי רגלים לירושלים ולא היו להם מים לשתות. נקדימון לווה מהגמון אחד שתים עשרה מעיינות מים, והתחייב שאם לא ירדו גשמים עד יום מסוים ישלם שתים עשרה ככרות כסף. ביום האחרון נכנס לבית המקדש והתפלל, ונתמלאו המעיינות; וכשההגמון טען שהשמש כבר שקעה, התפלל שוב, ו"נקדה" החמה וזרחה בשבילו – ולכן נקרא נקדימון (תענית כ ע״א).', 'Nakdimon', 'Once pilgrims came up to Jerusalem and had no water to drink. Nakdimon borrowed twelve wells of water from a certain lord, promising that if rain did not fall by a certain day he would pay twelve talents of silver. On the last day he entered the Temple and prayed, and the wells were filled; and when the lord claimed the sun had already set, he prayed again, and the sun "broke through" (nakdah) and shone for him – which is why he was called Nakdimon (Taanit 20a).'),
      THREE_RICH,
    ],
  }),
  p({
    slug: 'ben-tzitzit-hakeset', name: L('בן ציצית הכסת', 'Ben Tzitzit HaKeset'), spot: 'בן ציצית הכסת',
    summary: L('מעשירי ירושלים בימי החורבן.', 'One of the rich men of Jerusalem at the time of the Destruction.'),
    rel: [to('related', 'nakdimon-ben-gurion'), to('related', 'kalba-savua'), to('related', 'churban-bayit-sheni')], sources: [L('גיטין נו ע״א', 'Gittin 56a')],
    sections: [sec('בן ציצית הכסת', 'הגמרא אומרת שנקרא "בן ציצית הכסת" משום ש"הייתה ציצתו נגררת על גבי כסתות", או משום שהכסא שלו היה מונח בין גדולי רומי (גיטין נו ע״א).', 'Ben Tzitzit HaKeset', 'The Gemara says he was called "Ben Tzitzit HaKeset" because "his tzitzit trailed on cushions", or because his seat was placed among the great men of Rome (Gittin 56a).'), THREE_RICH],
  }),
  p({
    slug: 'kalba-savua', name: L('כלבא שבוע', 'Kalba Savua'), spot: 'רבי יהושע (כלבא שבוע)',
    summary: L('העשיר מירושלים, אבי רחל אשת רבי עקיבא.', 'The rich man of Jerusalem, father of Rachel the wife of Rabbi Akiva.'),
    rel: [to('child', 'rachel-eshet-rabbi-akiva'), to('related', 'rabbi-akiva'), to('related', 'nakdimon-ben-gurion'), to('related', 'ben-tzitzit-hakeset')],
    sources: [L('גיטין נו ע״א', 'Gittin 56a'), L('כתובות סב ע״ב – סג ע״א', 'Ketubot 62b–63a'), L('נדרים נ ע״א', 'Nedarim 50a'), L('משנת יוסף, כתובות סב ע״ב', 'Mishnat Yosef, Ketubot 62b')],
    sections: [
      sec('כלבא שבוע', 'הגמרא אומרת שנקרא "כלבא שבוע" משום ש"כל הנכנס לביתו כשהוא רעב ככלב, יוצא כשהוא שבע" (גיטין נו ע״א). כשבתו רחל נישאה לעקיבא הרועה, הדיר אותה מכל נכסיו. אחרי עשרים וארבע שנים בא אל רבי עקיבא לבקש להתיר את נדרו, ושאל אותו רבי עקיבא: "כלום נדרת אדעתא דגברא רבה?" – אילו ידעת שיהיה גדול בתורה, היית נודר? אמר: "אפילו פרק אחד ואפילו הלכה אחת". אמר לו: "אני הוא". נפל על פניו ונישק את רגליו, ונתן לו חצי ממונו (כתובות סג ע״א).', 'Kalba Savua', 'The Gemara says he was called "Kalba Savua" because "whoever entered his house hungry as a dog (kalba) left satisfied (savua)" (Gittin 56a). When his daughter Rachel married Akiva the shepherd, he vowed she would have none of his property. After twenty-four years he came to Rabbi Akiva asking to annul his vow, and Rabbi Akiva asked him: "Did you vow with a great scholar in mind?" – had you known he would be great in Torah, would you have vowed? He said: "Even one chapter, even one law". He told him: "I am he". He fell on his face, kissed his feet, and gave him half his wealth (Ketubot 63a).'),
      sec('"רבי יהושע"', 'באילן שלנו כתוב בתיבה שלו "רבי יהושע – כלבא שבוע": לפי משנת יוסף (על כתובות סב ע״ב), שמו של כלבא שבוע היה יהושע, ו"כלבא שבוע" הוא כינוי. מן התיבה יורד קו מקווקו אל בתו רחל.', '"Rabbi Yehoshua"', 'On our tree his box says "Rabbi Yehoshua – Kalba Savua": according to Mishnat Yosef (on Ketubot 62b), Kalba Savua’s name was Yehoshua, and "Kalba Savua" is a nickname. A dotted line goes down from the box to his daughter Rachel.'),
      THREE_RICH,
    ],
  }),
  p({
    slug: 'alexander-alabarch', name: L('אלכסנדר האלבארכס', 'Alexander the Alabarch'), spot: 'אלכסנדר האלבארכס',
    roles: [L('אלבארכס של אלכסנדריה', 'Alabarch of Alexandria')],
    summary: L('אחי פילון, האלבארכס של יהודי אלכסנדריה, שציפה בזהב ובכסף את שערי המקדש.', 'Philo’s brother, the Alabarch of the Jews of Alexandria, who covered the Temple gates with gold and silver.'),
    rel: [to('sibling', 'philo')], sources: [L('יוסף בן מתתיהו, קדמוניות היהודים יח – כ', 'Josephus, Antiquities 18–20'), L('יוסף בן מתתיהו, מלחמת היהודים ה, ה, ג', 'Josephus, Jewish War 5.5.3')],
    sections: [sec('אלכסנדר', 'אלכסנדר היה האלבארכס – הממונה מטעם השלטון על ענייני היהודים ועל המכס באלכסנדריה. יוסף בן מתתיהו מספר שהיה עשיר מאוד, הלווה כסף לאגריפס הראשון, וציפה בזהב ובכסף את תשעת שערי העזרה בבית המקדש.', 'Alexander', 'Alexander was the Alabarch – the officer appointed by the government over the affairs of the Jews and the customs in Alexandria. Josephus relates that he was very rich, lent money to Agrippa I, and covered with gold and silver the nine gates of the Temple courtyard.'), ALABARCH],
  }),
  p({
    slug: 'philo', name: L('פילון האלכסנדרוני', 'Philo of Alexandria'), spot: 'פילון האלכסנדרוני',
    roles: [L('פילוסוף', 'Philosopher')],
    summary: L('הפילוסוף היהודי מאלכסנדריה, שכתב ספרים על אישי התורה.', 'The Jewish philosopher of Alexandria, who wrote books on the figures of the Torah.'),
    rel: [to('sibling', 'alexander-alabarch')], sources: [L('יוסף בן מתתיהו, קדמוניות היהודים יח, ח, א', 'Josephus, Antiquities 18.8.1'), L('פילון, המשלחת אל גאיוס', 'Philo, On the Embassy to Gaius'), L('מאור עיניים לרבי עזריה מן האדומים', 'Meor Einayim by Rabbi Azaryah de Rossi')],
    sections: [sec('פילון', 'באילן שלנו כתוב: "פילון היה פילוסוף יהודי מאוד חשוב, וגם כתב מספר ספרים על הרבה אישים ביהדות, כגון אברהם ומשה רבינו". כשהקיסר גאיוס קליגולה רצה להעמיד את פסלו בבית המקדש, עמד פילון בראש המשלחת של יהודי אלכסנדריה אל הקיסר. בספרות ישראל נזכר לראשונה בספר "מאור עיניים" של רבי עזריה מן האדומים.', 'Philo', 'On our tree it says: "Philo was a very important Jewish philosopher, and also wrote several books on many figures in Judaism, such as Avraham and Moshe Rabbeinu". When the emperor Gaius Caligula wanted to set up his statue in the Temple, Philo led the delegation of the Jews of Alexandria to the emperor. In Jewish literature he is first mentioned in the book "Meor Einayim" by Rabbi Azaryah de Rossi.'), ALABARCH],
  }),
  p({
    slug: 'demetrius-alabarch', name: L('דמטריוס האלבארכס', 'Demetrius the Alabarch'), spot: 'דמטריוס האלבארכס',
    roles: [L('אלבארכס של אלכסנדריה', 'Alabarch of Alexandria')],
    summary: L('האלבארכס של אלכסנדריה, בעלה של מרים בת אגריפס.', 'The Alabarch of Alexandria, husband of Mariamne daughter of Agrippa.'),
    rel: [to('spouse', 'miriam-bat-agripas'), to('related', 'alexander-alabarch')], sources: [L('יוסף בן מתתיהו, קדמוניות היהודים כ, ז, ג', 'Josephus, Antiquities 20.7.3')],
    sections: [sec('דמטריוס', 'יוסף בן מתתיהו מספר שמרים, בת אגריפס הראשון, נישאה לדמטריוס, "הראשון ביהודי אלכסנדריה בייחוסו ובעושרו", שהיה אז האלבארכס – ובאילן קו מקווקו מחבר ביניהם. מתחתיו כתוב באילן: משרת האלבארכס כנראה המשיכה עוד מאה עד מאתיים שנה, אבל המידע עליה מועט מאוד.', 'Demetrius', 'Josephus relates that Mariamne, daughter of Agrippa I, married Demetrius, "the first among the Jews of Alexandria in lineage and wealth", who was then the Alabarch – and on our tree a dotted line joins them. Beneath him our tree says: the office of Alabarch apparently continued another one or two hundred years, but very little is known of it.'), ALABARCH],
  }),
  p({
    slug: 'yosef-ben-matityahu', cats: ['levites'], name: L('יוסף בן מתתיהו', 'Yosef ben Matityahu (Josephus)'), spot: 'יוסף בן מתתיהו',
    roles: [L('היסטוריון', 'Historian')],
    summary: L('הכהן וההיסטוריון, שכתב את תולדות ימי הבית השני.', 'The Kohen and historian, who wrote the history of the Second Temple period.'),
    rel: [{ type: 'ancestor', slug: 'yonatan-havofsi' }, to('teacher', 'rabban-shimon-ben-gamliel-1'), to('related', 'churban-bayit-sheni')],
    sources: [L('יוסף בן מתתיהו, חיי יוסף א – ב', 'Josephus, Life 1–2'), L('יוסף בן מתתיהו, מלחמת היהודים', 'Josephus, The Jewish War'), L('יוסף בן מתתיהו, קדמוניות היהודים', 'Josephus, Antiquities of the Jews'), L('ספר יוסיפון', 'Sefer Yosippon')],
    sections: [
      sec('יוסף בן מתתיהו', 'יוסף בן מתתיהו היה כהן ממשמר יהויריב, ובתחילת המרד הגדול היה מפקד הגליל. כשנפלה יודפת נכנע לרומאים, ליווה את אספסיינוס וטיטוס, ואחרי החורבן כתב ברומא את "מלחמת היהודים" ואת "קדמוניות היהודים". באילן כתוב תחתיו: "יוסף בן מתתיהו כתב מספר ספרים על תקופת בית שני, ולפי המסורת גם כתב את ספר יוסיפון". רוב השנים בסוגריים באילן, אצל מלכי בית שני, הן לפי כתביו.', 'Yosef ben Matityahu', 'Yosef ben Matityahu was a Kohen of the watch of Yehoyariv, and at the start of the Great Revolt was commander of the Galilee. When Yodfat fell he surrendered to the Romans, accompanied Vespasian and Titus, and after the Destruction wrote in Rome "The Jewish War" and "Antiquities of the Jews". On our tree it says beneath him: "Yosef ben Matityahu wrote several books on the Second Temple period, and by tradition also wrote Sefer Yosippon". Most of the years in brackets on our tree, for the Second Temple kings, are by his writings.'),
      sec('באילן', 'יוסף בן מתתיהו כותב (חיי יוסף א) שאחד מאבות אבותיו נשא את בתו של יונתן החשמונאי, הראשון מבני חשמונאי שהיה כהן גדול – ובאילן יורד אליו קו מקווקו מיונתן הוופסי. חץ חום מגיע אליו מרבן שמעון בן גמליאל, שעליו כתב שהיה "מלא בינה ותבונה".', 'On Our Tree', 'Yosef ben Matityahu writes (Life 1) that one of his forefathers married the daughter of Yonatan the Hasmonean, the first of the Hasmoneans to be High Priest – and on our tree a dotted line comes down to him from Yonatan Haphus. A brown arrow reaches him from Rabban Shimon ben Gamliel, of whom he wrote that he was "full of understanding and judgement".'),
    ],
  }),
];

module.exports = { rasheiHagola, tanna, ishim };
