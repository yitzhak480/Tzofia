// The house of Chashmonai and the house of Herod. Family (red / purple
// lines) and succession (black arrows) follow the poster; years as on the
// poster (Seder HaDorot; in brackets on the poster – Josephus).
const { L, sec, to, nm } = require('./helpers');

const LV = ['levites', 'kohanim'];
const HP = (before, after) => ({ label: L('כהונה גדולה', 'High Priesthood'), before, after });
const KING = (before, after, from, to2) => ({ label: L('מלוכה', 'Reign'), before, after, from, to: to2 });
const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const J = L('יוסף בן מתתיהו, קדמוניות היהודים יב – יד', 'Josephus, Antiquities 12–14');
const JH = L('יוסף בן מתתיהו, קדמוניות היהודים טו – כ', 'Josephus, Antiquities 15–20');
const YOCHANAN_NOTE = sec('יוחנן כהן גדול',
  'באילן שלנו יש הערה: מכתבי חז״ל ידוע לנו על "יוחנן כהן גדול" שכיהן שמונים שנה, תיקן תקנות חשובות ובסוף נעשה צדוקי (ברכות כט ע״א), ויש מחלוקות לגבי זהותו וזמנו: יש אומרים שהיה אביו של מתתיהו החשמונאי, יש אומרים שהיה בנו של מתתיהו, יש אומרים שהיה יוחנן הורקנוס בן שמעון הנשיא, ויש אומרים שהיה ינאי המלך.',
  'Yochanan the High Priest',
  'Our tree has a note: from the words of Chazal we know of "Yochanan the High Priest" who served eighty years, enacted important ordinances and at the end became a Sadducee (Berachot 29a), and there are disputes about who he was and when: some say he was the father of Matityahu the Hasmonean, some say he was Matityahu’s son, some say he was Yochanan Hyrcanus son of Shimon the Nasi, and some say he was King Yannai.');

const chashmonai = [
  p({
    slug: 'shimon-hachashmonai', cats: LV, name: L('שמעון (בית חשמונאי)', 'Shimon (House of Chashmonai)'), spot: 'שמעון (בית חשמונאי)',
    summary: L('סבו של מתתיהו, ראש בית חשמונאי.', 'Matityahu’s grandfather, head of the house of Chashmonai.'),
    rel: [to('child', 'yochanan-hachashmonai')], sources: [J],
    sections: one('בית חשמונאי', 'יוסף בן מתתיהו מונה את שושלת מתתיהו: "מתתיהו בן יוחנן בן שמעון בן אשמונאי, כהן ממשמר יהויריב". מכאן שם המשפחה – בית חשמונאי.', 'The House of Chashmonai', 'Josephus traces Matityahu’s line: "Matityahu son of Yochanan son of Shimon son of Asamonaios, a Kohen of the watch of Yehoyariv". From here comes the family name – the house of Chashmonai.'),
  }),
  p({
    slug: 'yochanan-hachashmonai', cats: LV, name: L('יוחנן (בית חשמונאי)', 'Yochanan (House of Chashmonai)'), spot: 'יוחנן (בית חשמונאי)',
    summary: L('אבי מתתיהו החשמונאי; באילן "כהן גדול?".', 'Father of Matityahu the Hasmonean; on the tree "High Priest?".'),
    rel: [to('father', 'shimon-hachashmonai'), to('child', 'matityahu-hachashmonai')], sources: [J, L('ברכות כט ע״א', 'Berachot 29a'), L('על הניסים', 'Al HaNisim')],
    sections: [sec('אבי מתתיהו', 'בתפילת "על הניסים" נאמר "בימי מתתיהו בן יוחנן כהן גדול חשמונאי ובניו". באילן שלנו כתוב לידו "כהן גדול?", כי לא ברור אם יוחנן הוא שהיה כהן גדול.', 'Father of Matityahu', 'The prayer "Al HaNisim" says "in the days of Matityahu son of Yochanan the High Priest, the Hasmonean, and his sons". On our tree it says beside him "High Priest?", since it is not clear whether it was Yochanan who was the High Priest.'), YOCHANAN_NOTE],
  }),
  p({
    slug: 'matityahu-hachashmonai', cats: LV, name: L('מתתיהו', 'Matityahu (Mattathias)'), spot: 'מתתיהו',
    summary: L('הכהן ממודיעין שפתח במרד בגזירות אנטיוכוס: "מי לה׳ אלי".', 'The Kohen of Modiin who began the revolt against Antiochus’s decrees: "Whoever is for Hashem, come to me".'),
    rel: [to('father', 'yochanan-hachashmonai'), to('child', 'yehuda-hamaccabi'), to('child', 'elazar-ben-matityahu'), to('child', 'yochanan-ben-matityahu'), to('child', 'shimon-hatarsi'), to('child', 'yonatan-havofsi'), to('related', 'gzerot-antiochus'), to('related', 'nes-chanuka')],
    sources: [L('ספר מקבים א׳ ב', 'I Maccabees 2'), J, L('על הניסים', 'Al HaNisim')],
    sections: one('מי לה׳ אלי', 'כששליחי המלך באו למודיעין לכפות על העם להקריב לעבודה זרה, הרג מתתיהו את היהודי שניגש להקריב ואת שליח המלך, וקרא "מי לה׳ אלי". הוא יצא עם חמשת בניו – יוחנן, שמעון, יהודה, אלעזר ויונתן – להרים, ולפני מותו מסר את ההנהגה ליהודה. באילן כתוב לידו "כהן גדול?".', 'Whoever Is for Hashem', 'When the king’s officers came to Modiin to force the people to offer to idols, Matityahu killed the Jew who came forward to offer and the king’s officer, and cried "Whoever is for Hashem, come to me". He went out to the hills with his five sons – Yochanan, Shimon, Yehudah, Elazar and Yonatan – and before his death gave the leadership to Yehudah. On our tree it says beside him "High Priest?".'),
  }),
  p({
    slug: 'elazar-ben-matityahu', cats: LV, name: L('אלעזר בן מתתיהו', 'Elazar son of Matityahu'), spot: 'אלעזר בן מתתיהו',
    summary: L('בן מתתיהו, שנפל תחת הפיל בקרב בית זכריה.', 'Matityahu’s son, who fell beneath the elephant at the battle of Beit Zecharyah.'),
    rel: [to('father', 'matityahu-hachashmonai'), to('sibling', 'yehuda-hamaccabi')], sources: [L('ספר מקבים א׳ ו, מג – מו', 'I Maccabees 6:43–46')],
    sections: one('אלעזר אורן', 'בקרב בבית זכריה ראה אלעזר, שכונה "אורן", פיל גדול מעוטר בשריון המלך. הוא רץ אליו, נכנס תחתיו ודקר אותו, והפיל נפל עליו ומת.', 'Elazar Avaran', 'At the battle of Beit Zecharyah, Elazar, called "Avaran", saw a great elephant decked in the royal armour. He ran to it, went under it and stabbed it, and the elephant fell on him and he died.'),
  }),
  p({
    slug: 'yochanan-ben-matityahu', cats: LV, name: L('יוחנן בן מתתיהו', 'Yochanan son of Matityahu'), spot: 'יוחנן בן מתתיהו',
    summary: L('בכור מתתיהו, שנהרג במלחמה.', 'Matityahu’s eldest son, killed in the war.'),
    rel: [to('father', 'matityahu-hachashmonai'), to('sibling', 'yehuda-hamaccabi')], sources: [L('ספר מקבים א׳ ט, לה – מב', 'I Maccabees 9:35–42')],
    sections: [sec('יוחנן', 'יוחנן, שכונה "גדי", נהרג כשנשלח עם משפחות החשמונאים אל הנבטים. אחיו יונתן ושמעון נקמו את דמו.', 'Yochanan', 'Yochanan, called "Gaddi", was killed when sent with the Hasmonean families to the Nabateans. His brothers Yonatan and Shimon avenged his blood.'), YOCHANAN_NOTE],
  }),
  p({
    slug: 'yehuda-hamaccabi', cats: LV, name: L('יהודה המכבי', 'Yehudah the Maccabee'), spot: 'יהודה המכבי',
    roles: [L('מנהיג המרד ביוונים', 'Leader of the revolt against the Greeks'), L('כהן גדול', 'High Priest')],
    summary: L('מנהיג המרד ביוונים, שטיהר את בית המקדש בכ״ה בכסלו.', 'Leader of the revolt against the Greeks, who purified the Temple on the 25th of Kislev.'),
    rel: [to('father', 'matityahu-hachashmonai'), to('sibling', 'shimon-hatarsi'), to('sibling', 'yonatan-havofsi'), to('related', 'nes-chanuka')],
    offices: [HP(['menelaus'], ['alkimus'])],
    sources: [L('ספר מקבים א׳ ג – ט', 'I Maccabees 3–9'), J, L('שבת כא ע״ב', 'Shabbat 21b')],
    sections: [
      sec('מכבי', 'אחרי מות מתתיהו עמד יהודה בראש המורדים, וניצח את צבאות סרון, ליסיאס וניקנור במלחמות מעטים מול רבים. הכינוי "מכבי" נדרש כראשי תיבות של "מי כמכה באלים ה׳". בכ״ה בכסלו טיהר את המקדש וחנך את המזבח.', 'Maccabee', 'After Matityahu’s death Yehudah led the rebels, and defeated the armies of Seron, Lysias and Nicanor in battles of the few against the many. The name "Maccabee" is expounded as the initials of "Who is like You among the mighty, Hashem". On the 25th of Kislev he purified the Temple and dedicated the altar.'),
      sec('נפילתו', 'באילן שלנו הוא מופיע כ"מנהיג המרד ביוונים וכהן גדול", אחרי מנלאוס. הוא נפל בקרב באלעשה מול צבא בכחידס, ואחיו יונתן קם תחתיו.', 'His Fall', 'On our tree he appears as "leader of the revolt against the Greeks and High Priest", after Menelaus. He fell in battle at Elasa against the army of Bacchides, and his brother Yonatan rose in his place.'),
    ],
  }),
  p({
    slug: 'yonatan-havofsi', cats: LV, name: L('יונתן הוופסי', 'Yonatan Haphus'), spot: 'יונתן הוופסי',
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('אחי יהודה המכבי, שהנהיג אחריו ומונה לכהן גדול.', 'Yehudah the Maccabee’s brother, who led after him and was appointed High Priest.'),
    rel: [to('father', 'matityahu-hachashmonai'), to('sibling', 'yehuda-hamaccabi'), to('sibling', 'shimon-hatarsi')], offices: [HP(['alkimus'], ['shimon-hatarsi'])],
    sources: [L('ספר מקבים א׳ ט – יב', 'I Maccabees 9–12'), J],
    sections: one('יונתן', 'יונתן הנהיג את העם אחרי יהודה, וניצל את המאבקים בין טוענים לכס הסלאוקי, עד שמונה לכהן גדול. טריפון לכד אותו בעורמה בעכו והרג אותו, ושמעון אחיו קבר אותו במודיעין.', 'Yonatan', 'Yonatan led the people after Yehudah, and used the struggles between claimants to the Seleucid throne until he was appointed High Priest. Tryphon captured him by trickery at Acco and killed him, and his brother Shimon buried him at Modiin.'),
  }),
  p({
    slug: 'shimon-hatarsi', cats: LV, name: L('שמעון התרסי', 'Shimon Thassi'), spot: 'שמעון התרסי',
    roles: [L('נשיא', 'Nasi'), L('כהן גדול', 'High Priest')],
    summary: L('אחרון בני מתתיהו, שהביא לעצמאות יהודה ונבחר לנשיא ולכהן גדול.', 'The last of Matityahu’s sons, who brought Judea independence and was chosen as Nasi and High Priest.'),
    rel: [to('father', 'matityahu-hachashmonai'), to('sibling', 'yehuda-hamaccabi'), to('sibling', 'yonatan-havofsi'), to('child', 'yochanan-hurkanos-1')], offices: [HP(['yonatan-havofsi'], ['yochanan-hurkanos-1'])],
    sources: [L('ספר מקבים א׳ יג – טז', 'I Maccabees 13–16'), J],
    sections: one('עצמאות', 'שמעון כבש את החקרא, המצודה היוונית בירושלים, והשיג עצמאות ליהודה. העם בחר בו ל"נשיא וכהן גדול לעולם". חתנו תלמי בן חבוב רצח אותו ושניים מבניו במשתה במבצר דוק שליד יריחו.', 'Independence', 'Shimon captured the Akra, the Greek citadel in Jerusalem, and won independence for Judea. The people chose him as "Nasi and High Priest forever". His son-in-law Ptolemy son of Abubus murdered him and two of his sons at a feast in the fortress of Dok near Yericho.'),
  }),
  p({
    slug: 'yochanan-hurkanos-1', cats: LV, name: L('יוחנן הורקנוס א׳', 'Yochanan Hyrcanus I'), spot: 'יוחנן הורקנוס א׳', life: [3642, 3668],
    roles: [L('נשיא', 'Nasi'), L('כהן גדול', 'High Priest')],
    summary: L('בן שמעון, שהרחיב את גבולות יהודה וכיהן כנשיא וכהן גדול.', 'Shimon’s son, who widened Judea’s borders and served as Nasi and High Priest.'),
    rel: [to('father', 'shimon-hatarsi'), to('child', 'yehuda-aristobulus-1'), to('child', 'matityahu-antigonus-1'), to('child', 'alexander-yanai')], offices: [HP(['shimon-hatarsi'], ['yehuda-aristobulus-1'])],
    sources: [J, L('סוטה מז ע״ב – מח ע״א', 'Sotah 47b–48a'), L('ברכות כט ע״א', 'Berachot 29a')],
    sections: [sec('יוחנן הורקנוס', 'הורקנוס כבש את שומרון והחריב את המקדש שבהר גריזים, וגייר את האדומים. המשנה (סוטה ט, י) מספרת ש"יוחנן כהן גדול העביר הודיית המעשר", ותיקן תקנות נוספות.', 'Yochanan Hyrcanus', 'Hyrcanus conquered Shomron and destroyed the temple on Mount Gerizim, and converted the Edomites. The Mishnah (Sotah 9:10) relates that "Yochanan the High Priest abolished the declaration of the tithe", and he enacted other ordinances.'), YOCHANAN_NOTE],
  }),
  p({
    slug: 'yehuda-aristobulus-1', cats: [...LV, 'kings-chashmonai'], name: L('יהודה אריסטובולוס א׳', 'Yehudah Aristobulus I'), spot: 'יהודה אריסטובולוס א׳', life: [3668, 3669],
    roles: [L('מלך', 'King'), L('כהן גדול', 'High Priest')],
    summary: L('הראשון מבית חשמונאי שנטל לעצמו כתר מלכות.', 'The first of the house of Chashmonai to take the royal crown.'),
    rel: [to('father', 'yochanan-hurkanos-1'), to('sibling', 'matityahu-antigonus-1'), to('sibling', 'alexander-yanai'), to('spouse', 'shlomtzion')],
    offices: [HP(['yochanan-hurkanos-1'], ['alexander-yanai']), KING([], ['alexander-yanai'], 3668, 3669)], sources: [J],
    sections: one('המלך הראשון', 'אריסטובולוס היה הראשון מבית חשמונאי שנקרא מלך. הוא מלך שנה אחת בלבד, כלא את אמו ואחיו, והרג את אחיו אנטיגונוס בעקבות מלשינות. אחרי מותו נישאה אלמנתו שלומציון לאחיו אלכסנדר ינאי – ולכן באילן שלנו היא מחוברת לשניהם, במספרים 1 ו־2.', 'The First King', 'Aristobulus was the first of the house of Chashmonai to be called king. He reigned only one year, imprisoned his mother and brothers, and killed his brother Antigonus because of slander. After his death his widow Shlomtzion married his brother Alexander Yannai – which is why on our tree she is joined to both, with the numbers 1 and 2.'),
  }),
  p({
    slug: 'matityahu-antigonus-1', cats: LV, name: L('מתתיהו אנטיגונוס א׳', 'Matityahu Antigonus I'), spot: 'מתתיהו אנטיגונוס א׳',
    summary: L('בן יוחנן הורקנוס, שנרצח בציווי אחיו אריסטובולוס.', 'Son of Yochanan Hyrcanus, murdered at his brother Aristobulus’s order.'),
    rel: [to('father', 'yochanan-hurkanos-1'), to('sibling', 'yehuda-aristobulus-1')], sources: [J],
    sections: one('אנטיגונוס', 'אנטיגונוס היה אהוב על אחיו אריסטובולוס, אך מלשינים הסיתו את המלך נגדו, והוא נהרג בידי שומרי המלך.', 'Antigonus', 'Antigonus was beloved by his brother Aristobulus, but slanderers turned the king against him, and he was killed by the king’s guards.'),
  }),
  p({
    slug: 'alexander-yanai', cats: [...LV, 'kings-chashmonai'], name: L('אלכסנדר ינאי', 'Alexander Yannai'), spot: 'אלכסנדר ינאי', life: [3670, 3688],
    roles: [L('מלך', 'King'), L('כהן גדול', 'High Priest')],
    summary: L('המלך החשמונאי שהרחיב את הממלכה, צידד בצדוקים ורדף את החכמים.', 'The Hasmonean king who widened the kingdom, sided with the Sadducees and persecuted the sages.'),
    rel: [to('father', 'yochanan-hurkanos-1'), to('sibling', 'yehuda-aristobulus-1'), to('spouse', 'shlomtzion'), to('child', 'yochanan-hurkanos-2'), to('child', 'yehuda-aristobulus-2'), to('related', 'yanai-veshlomtzion')],
    offices: [HP(['yehuda-aristobulus-1'], ['yochanan-hurkanos-2']), KING(['yehuda-aristobulus-1'], ['shlomtzion'], 3670, 3688)],
    sources: [L('קידושין סו ע״א', 'Kiddushin 66a'), L('ברכות מח ע״א', 'Berachot 48a'), L('סוטה כב ע״ב', 'Sotah 22b'), J],
    sections: one('ינאי המלך', 'הגמרא (קידושין סו ע״א) מספרת שבסעודה אחרי ניצחון אמר לו אלעזר בן פועירה הצדוקי שהחכמים אינם רוצים שיהיה גם כהן גדול, וינאי הרג את חכמי ישראל, "והיה העולם משתומם עד שבא שמעון בן שטח והחזיר את התורה ליושנה". לפני מותו אמר לאשתו: "אל תתייראי מן הפרושין ולא ממי שאינן פרושין, אלא מן הצבועין שדומין לפרושין" (סוטה כב ע״ב).', 'King Yannai', 'The Gemara (Kiddushin 66a) relates that at a feast after a victory Elazar ben Poira the Sadducee told him the sages did not want him to be High Priest too, and Yannai killed the sages of Israel, "and the world was desolate until Shimon ben Shetach came and restored the Torah to its former glory". Before his death he told his wife: "Do not fear the Pharisees, nor those who are not Pharisees, but the hypocrites who look like Pharisees" (Sotah 22b).'),
  }),
  w({
    slug: 'shlomtzion', cats: ['kings-chashmonai'], name: L('שלומציון המלכה', 'Queen Shlomtzion'), spot: 'שלומציון המלכה', life: [3688, 3697],
    roles: [L('מלכה', 'Queen')],
    summary: L('אשת אריסטובולוס ואחר כך ינאי, אחות שמעון בן שטח, שבימיה ניצחו הפרושים.', 'Wife of Aristobulus and then Yannai, sister of Shimon ben Shetach, in whose days the Pharisees prevailed.'),
    rel: [to('spouse', 'yehuda-aristobulus-1'), to('spouse', 'alexander-yanai'), to('child', 'yochanan-hurkanos-2'), to('child', 'yehuda-aristobulus-2'), nm('sibling', 'שמעון בן שטח', 'Shimon ben Shetach'), to('related', 'yanai-veshlomtzion')],
    offices: [KING(['alexander-yanai'], ['yochanan-hurkanos-2'], 3688, 3697)],
    sources: [L('ברכות מח ע״א', 'Berachot 48a'), L('תענית כג ע״א', 'Taanit 23a'), J],
    sections: one('שלומציון', 'שלומציון נישאה תחילה ליהודה אריסטובולוס, ואחרי מותו לאחיו ינאי – ועל כך המספרים 1 ו־2 באילן שלנו. אחרי מות ינאי מלכה תשע שנים, ובנה הורקנוס כיהן ככהן גדול. היא הייתה אחותו של שמעון בן שטח, ובימיה חזרה התורה ליושנה. חז״ל מספרים שבימיה ירדו גשמים בעיתם "עד שנעשו חטים ככליות".', 'Shlomtzion', 'Shlomtzion was first married to Yehudah Aristobulus, and after his death to his brother Yannai – hence the numbers 1 and 2 on our tree. After Yannai’s death she reigned nine years, and her son Hyrcanus served as High Priest. She was the sister of Shimon ben Shetach, and in her days the Torah was restored. Chazal relate that in her days rain fell in its season "until the grains of wheat were as big as kidneys".'),
  }),
  p({
    slug: 'yochanan-hurkanos-2', cats: [...LV, 'kings-chashmonai'], name: L('יוחנן הורקנוס ב׳', 'Yochanan Hyrcanus II'), spot: 'יוחנן הורקנוס ב׳', life: [3697, 3721],
    roles: [L('כהן גדול', 'High Priest'), L('שליט', 'Ruler')],
    summary: L('בן ינאי ושלומציון, כהן גדול ושליט בחסות רומא, שהורדוס המית.', 'Son of Yannai and Shlomtzion, High Priest and ruler under Rome, put to death by Herod.'),
    rel: [to('father', 'alexander-yanai'), to('mother', 'shlomtzion'), to('sibling', 'yehuda-aristobulus-2'), to('child', 'alexandra'), to('related', 'pompeius')],
    offices: [HP(['alexander-yanai'], ['yehuda-aristobulus-2']), KING(['shlomtzion'], ['yehuda-aristobulus-2'], 3697, 3697)],
    sources: [J, L('בבא קמא פב ע״ב', 'Bava Kamma 82b')],
    sections: one('הורקנוס', 'הורקנוס כיהן ככהן גדול בימי אמו, ואחרי מותה נלחם באחיו אריסטובולוס על המלוכה. פומפיוס הרומאי מינה אותו לכהן גדול ולנשיא העם בלי כתר. אנטיפטרוס האדומי ובנו הורדוס שלטו בפועל בצילו, ולבסוף המית אותו הורדוס. באילן כתוב שבזמן מלכות אמו היה כהן גדול.', 'Hyrcanus', 'Hyrcanus served as High Priest in his mother’s days, and after her death fought his brother Aristobulus for the throne. The Roman Pompey appointed him High Priest and leader of the people without a crown. Antipater the Edomite and his son Herod held the real power in his shadow, and in the end Herod put him to death. Our tree notes that in his mother’s reign he was High Priest.'),
  }),
  p({
    slug: 'yehuda-aristobulus-2', cats: [...LV, 'kings-chashmonai'], name: L('יהודה אריסטובולוס ב׳', 'Yehudah Aristobulus II'), spot: 'יהודה אריסטובולוס ב׳', life: [3697, 3700],
    roles: [L('מלך', 'King'), L('כהן גדול', 'High Priest')],
    summary: L('בן ינאי ושלומציון, שנלחם באחיו על המלוכה עד שפומפיוס כבש את ירושלים.', 'Son of Yannai and Shlomtzion, who fought his brother for the throne until Pompey captured Jerusalem.'),
    rel: [to('father', 'alexander-yanai'), to('mother', 'shlomtzion'), to('sibling', 'yochanan-hurkanos-2'), to('child', 'matityahu-antigonus-2'), to('child', 'alexander-ben-aristobulus'), to('related', 'pompeius')],
    offices: [HP(['yochanan-hurkanos-2'], ['yochanan-hurkanos-2']), KING(['yochanan-hurkanos-2'], ['matityahu-antigonus-2'], 3697, 3700)],
    sources: [J, L('בבא קמא פב ע״ב', 'Bava Kamma 82b'), L('סוטה מט ע״ב', 'Sotah 49b')],
    sections: one('כשצרו זה על זה', 'הגמרא (בבא קמא פב ע״ב) מספרת: "כשצרו מלכי בית חשמונאי זה על זה, היה הורקנוס מבחוץ ואריסטובולוס מבפנים". הנצורים היו משלשלים כסף בקופה ומקבלים כבשים לתמיד, עד שזקן אחד לימד את הנצרים ושלחו חזיר. פומפיוס לקח את אריסטובולוס בשבי לרומא.', 'When They Besieged Each Other', 'The Gemara (Bava Kamma 82b) relates: "When the Hasmonean kings besieged one another, Hyrcanus was outside and Aristobulus within". The besieged would lower money in a basket and receive lambs for the daily offering, until an old man taught the besiegers and they sent up a pig. Pompey took Aristobulus captive to Rome.'),
  }),
  p({
    slug: 'matityahu-antigonus-2', cats: [...LV, 'kings-chashmonai'], name: L('מתתיהו אנטיגונוס ב׳', 'Matityahu Antigonus II'), spot: 'מתתיהו אנטיגונוס ב׳', life: [3721, 3724],
    roles: [L('מלך', 'King'), L('כהן גדול', 'High Priest')],
    summary: L('המלך האחרון מבית חשמונאי, שהורדוס הדיח בעזרת הרומאים.', 'The last king of the house of Chashmonai, deposed by Herod with Roman help.'),
    rel: [to('father', 'yehuda-aristobulus-2'), to('sibling', 'alexander-ben-aristobulus')],
    offices: [HP(['yochanan-hurkanos-2'], ['aristobulus-kg']), KING(['yehuda-aristobulus-2'], ['hordos'], 3721, 3724)],
    sources: [JH], sections: one('המלך האחרון', 'בעזרת הפרתים כבש אנטיגונוס את ירושלים ומלך שלוש שנים כמלך וכהן גדול. הורדוס, בתמיכת רומא, צר על ירושלים וכבש אותה, ואנטיגונוס הוצא להורג בציווי אנטוניוס – וכך תמה מלכות בית חשמונאי.', 'The Last King', 'With the help of the Parthians Antigonus captured Jerusalem and reigned three years as king and High Priest. Herod, backed by Rome, besieged and captured Jerusalem, and Antigonus was executed at Antony’s command – and so the kingdom of the house of Chashmonai ended.'),
  }),
  p({
    slug: 'alexander-ben-aristobulus', cats: LV, name: L('אלכסנדר בן אריסטובולוס', 'Alexander son of Aristobulus'), spot: 'אלכסנדר בן אריסטובולוס',
    summary: L('בן אריסטובולוס ב׳, אבי מרים החשמונאית.', 'Son of Aristobulus II, father of Mariamne the Hasmonean.'),
    rel: [to('father', 'yehuda-aristobulus-2'), to('sibling', 'matityahu-antigonus-2'), to('spouse', 'alexandra'), to('child', 'miriam-hachashmonait'), to('child', 'aristobulus-kg')],
    sources: [J], sections: one('אלכסנדר', 'אלכסנדר מרד ברומאים כמה פעמים והוצא להורג. הוא נשא את אלכסנדרה, בת דודו הורקנוס, וכך התאחדו שני ענפי המשפחה בילדיהם, מרים ואריסטובולוס.', 'Alexander', 'Alexander rebelled against the Romans several times and was executed. He married Alexandra, the daughter of his uncle Hyrcanus, and so the two branches of the family were united in their children, Mariamne and Aristobulus.'),
  }),
  w({
    slug: 'alexandra', cats: LV, name: L('אלכסנדרה', 'Alexandra'), spot: 'אלכסנדרה',
    summary: L('בת הורקנוס ב׳, אם מרים ואריסטובולוס, שהורדוס המית.', 'Daughter of Hyrcanus II, mother of Mariamne and Aristobulus, put to death by Herod.'),
    rel: [to('father', 'yochanan-hurkanos-2'), to('spouse', 'alexander-ben-aristobulus'), to('child', 'miriam-hachashmonait'), to('child', 'aristobulus-kg')], sources: [JH],
    sections: one('אלכסנדרה', 'אלכסנדרה פעלה בעזרת קלאופטרה כדי שבנה אריסטובולוס ימונה לכהן גדול. אחרי מות בתה ניסתה לתפוס את השלטון, והורדוס המית אותה.', 'Alexandra', 'Alexandra worked with Cleopatra’s help to have her son Aristobulus appointed High Priest. After her daughter’s death she tried to seize power, and Herod put her to death.'),
  }),
  w({
    slug: 'miriam-hachashmonait', cats: ['beit-hordos'], name: L('מרים החשמונאית', 'Mariamne the Hasmonean'), spot: 'מרים החשמונאית',
    summary: L('נכדת הורקנוס ואריסטובולוס, אשת הורדוס, שהוצאה להורג בציוויו.', 'Granddaughter of Hyrcanus and Aristobulus, Herod’s wife, executed at his order.'),
    rel: [to('father', 'alexander-ben-aristobulus'), to('mother', 'alexandra'), to('sibling', 'aristobulus-kg'), to('spouse', 'hordos'), to('child', 'aristobulus-ben-hordos')],
    sources: [JH, L('בבא בתרא ג ע״ב', 'Bava Batra 3b')],
    sections: one('מרים', 'הורדוס נשא את מרים, מבית חשמונאי, כדי לבסס את מלכותו. הוא אהב אותה מאוד, ובכל זאת הוציא אותה להורג בעקבות מלשינות. הגמרא (בבא בתרא ג ע״ב) מספרת על נערה מבית חשמונאי שהורדוס רצה לשאת, והיא עלתה לגג ונפלה ממנו, ויש שזיהו אותה עם מרים.', 'Mariamne', 'Herod married Mariamne, of the house of Chashmonai, to secure his reign. He loved her greatly, and yet executed her following slander. The Gemara (Bava Batra 3b) tells of a girl of the house of Chashmonai whom Herod wanted to marry, who went up to the roof and fell from it, and some identified her with Mariamne.'),
  }),
  p({
    slug: 'aristobulus-kg', cats: LV, name: L('אריסטובולוס הכהן הגדול', 'Aristobulus the High Priest'), spot: 'אריסטובולוס הכהן הגדול',
    roles: [L('כהן גדול', 'High Priest')],
    summary: L('אחי מרים, הכהן הגדול האחרון מבית חשמונאי, שהורדוס הטביע.', 'Mariamne’s brother, the last High Priest of the house of Chashmonai, drowned by Herod.'),
    rel: [to('father', 'alexander-ben-aristobulus'), to('mother', 'alexandra'), to('sibling', 'miriam-hachashmonait')], offices: [HP(['matityahu-antigonus-2'], [])],
    sources: [JH], sections: [
      sec('אריסטובולוס', 'אריסטובולוס מונה לכהן גדול בגיל שבע עשרה, והעם שמח בו מאוד בחג הסוכות. הורדוס חשש מאהבת העם אליו, ודאג שיוטבע בבריכה ביריחו.', 'Aristobulus', 'Aristobulus was appointed High Priest at seventeen, and the people rejoiced in him greatly on Sukkot. Herod feared the people’s love for him, and had him drowned in a pool at Yericho.'),
      sec('הכהונה אחריו', 'באילן שלנו כתוב מתחתיו: כהנים גדולים מכאן ואילך נבחרו, ולרוב מי ששילם קיבל את התפקיד.', 'The Priesthood After Him', 'On our tree it says below him: from here on High Priests were chosen, and mostly whoever paid received the office.'),
    ],
  }),
];

const hordos = [
  p({
    slug: 'antipater', name: L('אנטיפטרוס האדומי', 'Antipater the Edomite'), spot: 'אנטיפטרוס האדומי',
    summary: L('אבי הורדוס, היועץ האדומי של הורקנוס ב׳.', 'Herod’s father, the Edomite adviser of Hyrcanus II.'),
    rel: [to('child', 'hordos'), to('child', 'shlomit'), to('related', 'yochanan-hurkanos-2')], sources: [J],
    sections: one('אנטיפטרוס', 'אנטיפטרוס, מן האדומים שגיירו החשמונאים, היה היועץ של הורקנוס ב׳ והשליט בפועל בצילו, בחסות רומא. הוא מינה את בניו לתפקידים, ומת בהרעלה.', 'Antipater', 'Antipater, of the Edomites converted by the Hasmoneans, was the adviser of Hyrcanus II and the real ruler in his shadow, under Rome. He appointed his sons to office, and died of poison.'),
  }),
  p({
    slug: 'hordos', cats: ['kings-hordos'], name: L('הורדוס', 'Herod'), spot: 'הורדוס', life: [3724, 3761],
    roles: [L('מלך', 'King')],
    summary: L('המלך האדומי שמלך בחסות רומא, הרג את בית חשמונאי ואת החכמים, ושיפץ את בית המקדש.', 'The Edomite king who reigned under Rome, killed the house of Chashmonai and the sages, and rebuilt the Temple.'),
    rel: [to('father', 'antipater'), to('sibling', 'shlomit'), to('spouse', 'miriam-hachashmonait'), nm('spouse', 'עוד נשים', 'Other wives'), to('child', 'aristobulus-ben-hordos'), to('child', 'archelaus'), to('child', 'hordos-antipas'), to('child', 'philipus'), to('related', 'hordos-veharomaim'), to('related', 'hordos-lokeach-hamalchut')],
    offices: [KING(['matityahu-antigonus-2'], ['archelaus'], 3724, 3761)],
    sources: [L('בבא בתרא ג ע״ב – ד ע״א', 'Bava Batra 3b–4a'), JH],
    sections: [
      sec('עבד בית חשמונאי', 'הורדוס כבש את ירושלים בעזרת הרומאים והדיח את אנטיגונוס, האחרון ממלכי בית חשמונאי. הוא המית את בני המשפחה, ובהם אשתו מרים, ובסוף ימיו גם את בניו ממנה. הגמרא מספרת שהרג את החכמים, ובעצת בבא בן בוטא שיפץ את בית המקדש: "מי שלא ראה בניין הורדוס לא ראה בניין נאה מימיו".', 'Servant of the House of Chashmonai', 'Herod captured Jerusalem with Roman help and deposed Antigonus, the last of the Hasmonean kings. He put members of the family to death, among them his wife Mariamne, and at the end of his life also his sons by her. The Gemara relates that he killed the sages, and on Bava ben Buta’s advice rebuilt the Temple: "Whoever has not seen Herod’s building has never seen a beautiful building".'),
      sec('השנים באילן', 'באילן שלנו שנות מלכי בית שני כתובות לפי סדר הדורות, ובסוגריים לפי יוסף בן מתתיהו, משום ששנותיהם פחות מסודרות משנות מלכי בית ראשון.', 'The Years on Our Tree', 'On our tree the years of the Second Temple kings are written according to Seder HaDorot, and in brackets according to Josephus, since their years are less settled than those of the First Temple kings.'),
    ],
  }),
  w({
    slug: 'shlomit', name: L('שלומית', 'Salome'), spot: 'שלומית', life: [3757, 3770],
    summary: L('אחות הורדוס, שקיבלה אחרי מותו את השלטון ביבנה.', 'Herod’s sister, who after his death received rule over Yavneh.'),
    rel: [to('father', 'antipater'), to('sibling', 'hordos')], sources: [JH],
    sections: one('שלומית', 'שלומית, אחות הורדוס, הייתה מן המלשינים נגד מרים החשמונאית. אחרי מות הורדוס קיבלה את יבנה ועוד ערים, ובאילן היא מסומנת "שליטת יבנה".', 'Salome', 'Salome, Herod’s sister, was among those who slandered Mariamne the Hasmonean. After Herod’s death she received Yavneh and other towns, and on our tree she is marked "ruler of Yavneh".'),
  }),
  p({
    slug: 'aristobulus-ben-hordos', name: L('אריסטובולוס בן הורדוס', 'Aristobulus son of Herod'), spot: 'אריסטובולוס בן הורדוס',
    summary: L('בן הורדוס ומרים החשמונאית, אבי אגריפס א׳.', 'Son of Herod and Mariamne the Hasmonean, father of Agrippa I.'),
    rel: [to('father', 'hordos'), to('mother', 'miriam-hachashmonait'), to('child', 'agripas-1')], sources: [JH],
    sections: one('בן מרים', 'אריסטובולוס ואחיו אלכסנדר, בני מרים, הוצאו להורג בציווי אביהם הורדוס. בנו אגריפס חזר ומלך על כל ארץ ישראל.', 'Son of Mariamne', 'Aristobulus and his brother Alexander, Mariamne’s sons, were executed at the order of their father Herod. His son Agrippa came to reign again over all the Land of Israel.'),
  }),
  p({
    slug: 'archelaus', name: L('ארכלאוס', 'Archelaus'), spot: 'ארכלאוס', life: [3761, 3769],
    roles: [L('שליט יהודה', 'Ruler of Judea')],
    summary: L('בן הורדוס ששלט ביהודה אחרי מות אביו, עד שהרומאים הגלו אותו.', 'Herod’s son who ruled Judea after his father’s death, until the Romans exiled him.'),
    rel: [to('father', 'hordos'), to('sibling', 'hordos-antipas'), to('sibling', 'philipus'), to('related', 'chalukat-malchut-hordos')],
    offices: [KING(['hordos'], [])], sources: [JH],
    sections: one('ארכלאוס', 'אחרי מות הורדוס חולקה ממלכתו, וארכלאוס קיבל את יהודה, שומרון ואדום, בלי תואר מלך. על אכזריותו התלוננו נציגי העם ברומא, והוא הוגלה. באילן נכתב שיהודה נשלטה אחריו בידי נציבים רומאים. בסדר הדורות כתוב שבין ארכלאוס לאגריפס מלך אנטיפטר בן הורדוס, אבל הוא לא מוזכר בכתבי יוסף בן מתתיהו.', 'Archelaus', 'After Herod’s death his kingdom was divided, and Archelaus received Judea, Shomron and Edom, without the title of king. Representatives of the people complained in Rome of his cruelty, and he was exiled. Our tree notes that after him Judea was ruled by Roman governors. Seder HaDorot writes that between Archelaus and Agrippa reigned Antipater son of Herod, but he is not mentioned by Josephus.'),
  }),
  p({
    slug: 'hordos-antipas', name: L('הורדוס אנטיפס', 'Herod Antipas'), spot: 'הורדוס אנטיפס', life: [3757, 3799],
    roles: [L('שליט הגליל', 'Ruler of the Galilee')],
    summary: L('בן הורדוס ששלט בגליל ובנה את טבריה.', 'Herod’s son who ruled the Galilee and built Tiberias.'),
    rel: [to('father', 'hordos'), to('sibling', 'archelaus'), to('sibling', 'philipus')], sources: [JH, L('ירושלמי שביעית ט, א', 'Yerushalmi Sheviit 9:1')],
    sections: one('טבריה', 'אנטיפס שלט בגליל ובעבר הירדן ארבעים שנה, ובנה את העיר טבריה לכבוד הקיסר טיבריוס. חז״ל מספרים שרבי שמעון בר יוחאי טיהר אותה לימים.', 'Tiberias', 'Antipas ruled the Galilee and the land beyond the Jordan for forty years, and built the city of Tiberias in honour of the emperor Tiberius. Chazal relate that Rabbi Shimon bar Yochai later purified it.'),
  }),
  p({
    slug: 'philipus', name: L('פיליפוס', 'Philip'), spot: 'פיליפוס', life: [3757, 3794],
    roles: [L('שליט הבשן', 'Ruler of the Bashan')],
    summary: L('בן הורדוס ששלט בבשן ובצפון עבר הירדן.', 'Herod’s son who ruled the Bashan and the northern land beyond the Jordan.'),
    rel: [to('father', 'hordos'), to('sibling', 'archelaus'), to('sibling', 'hordos-antipas')], sources: [JH],
    sections: one('פיליפוס', 'פיליפוס קיבל את הבשן, הגולן והחורן, ושלט בהם בשקט כשלושים ושבע שנים. הוא בנה את קיסריה של פיליפוס, היא פמייס, ליד מקורות הירדן.', 'Philip', 'Philip received the Bashan, the Golan and the Hauran, and ruled them quietly for about thirty-seven years. He built Caesarea Philippi, which is Paneas, by the sources of the Jordan.'),
  }),
  p({
    slug: 'agripas-1', cats: ['kings-hordos'], name: L('אגריפס א׳', 'Agrippa I'), spot: 'אגריפס א׳', life: [3780, 3804],
    roles: [L('מלך', 'King')],
    summary: L('נכד הורדוס ומרים, שמלך על כל ארץ ישראל וקראו לו העם "אחינו אתה".', 'Grandson of Herod and Mariamne, who reigned over all the Land of Israel and whom the people called "You are our brother".'),
    rel: [to('father', 'aristobulus-ben-hordos'), to('child', 'agripas-2'), to('child', 'miriam-bat-agripas'), to('related', 'agripas')],
    offices: [KING([], ['agripas-2'], 3780, 3804)], sources: [L('משנה סוטה ז, ח', 'Mishnah Sotah 7:8'), L('ביכורים ג, ד', 'Bikkurim 3:4'), JH],
    sections: one('אחינו אתה', 'אגריפס, נכדה של מרים החשמונאית, מלך זמן קצר על כל ארץ ישראל והחזיר שלום לממלכה. המשנה מספרת שבהקהל קרא בתורה, וכשהגיע ל"לא תוכל לתת עליך איש נכרי" זלגו עיניו דמעות, וקראו לו "אחינו אתה". עוד מסופר שהביא ביכורים על כתפו כאחד העם.', 'You Are Our Brother', 'Agrippa, grandson of Mariamne the Hasmonean, reigned briefly over all the Land of Israel and brought back peace. The Mishnah relates that at Hakhel he read the Torah, and when he reached "you may not set a foreigner over you" his eyes ran with tears, and they called to him "You are our brother". It is also told that he carried his first fruits on his shoulder like one of the people.'),
  }),
  p({
    slug: 'agripas-2', cats: ['kings-hordos'], name: L('אגריפס ב׳', 'Agrippa II'), spot: 'אגריפס ב׳', life: [3804, 3826],
    roles: [L('מלך', 'King')],
    summary: L('בן אגריפס א׳, שנשא תואר מלך בגליל בימי המרד הגדול.', 'Son of Agrippa I, who bore the title of king in the Galilee in the days of the Great Revolt.'),
    rel: [to('father', 'agripas-1'), to('sibling', 'miriam-bat-agripas'), to('related', 'churban-bayit-sheni')],
    offices: [KING(['agripas-1'], [], 3804, 3826)], sources: [JH, L('פסחים סד ע״ב', 'Pesachim 64b')],
    sections: one('אגריפס השני', 'אחרי מות אביו חזרה יהודה לשלטון הנציבים, ואגריפס השני קיבל תואר מלך ושטחים בגליל. בפרוץ המרד הגדול ניסה להניא את העם מן המלחמה ברומא, ועמד לצד הרומאים. באילן שלנו מתחתיו עומד חורבן בית שני.', 'Agrippa II', 'After his father’s death Judea returned to the rule of the governors, and Agrippa II received the title of king and lands in the Galilee. When the Great Revolt broke out he tried to dissuade the people from war with Rome, and stood with the Romans. On our tree the destruction of the Second Temple stands below him.'),
  }),
  w({
    slug: 'miriam-bat-agripas', name: L('מרים בת אגריפס', 'Mariamne daughter of Agrippa'), spot: 'מרים (ליד אגריפס ב׳)',
    summary: L('בת אגריפס א׳ ואחות אגריפס ב׳.', 'Daughter of Agrippa I and sister of Agrippa II.'),
    rel: [to('father', 'agripas-1'), to('sibling', 'agripas-2')], sources: [JH],
    sections: one('מרים', 'מרים, בת אגריפס הראשון, נקראה על שם סבתה רבתא מרים החשמונאית. היא אחת מבנותיו של אגריפס, עם ברניקי ודרוסילה.', 'Mariamne', 'Mariamne, daughter of Agrippa I, was named after her great-grandmother Mariamne the Hasmonean. She was one of Agrippa’s daughters, with Berenice and Drusilla.'),
  }),
];

module.exports = { chashmonai, hordos };
