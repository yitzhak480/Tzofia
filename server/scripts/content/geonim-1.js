// The Geonim on the Talmud tree – starting with Rav Sherira Gaon. People who
// do not have a page yet are linked by name; the links join their pages when
// those are made.
const { L, sec, to, nm } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const G = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  return { gender: 'male', ...e, color: row[1] };
};
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');

module.exports = [
  G({
    slug: 'rav-sherira-gaon', spot2: 'רב שרירא גאון בן רב חנינא', cats: ['geonim', 'roshei-yeshivat-pumbedita'],
    name: L('רב שרירא גאון', 'Rav Sherira Gaon'),
    roles: [L('גאון פומבדיתא', 'Gaon of Pumbedita'), L('כותב "איגרת רב שרירא גאון"', 'Author of "The Letter of Rav Sherira Gaon"')],
    life: [4666, 4767],
    summary: L('גאון פומבדיתא מבית דוד, שכתב את האיגרת המספרת את שלשלת התורה שבעל פה מן המשנה ועד ימיו.', 'Gaon of Pumbedita of the house of David, who wrote the Letter telling the chain of the Oral Torah from the Mishnah to his own days.'),
    rel: [
      nm('father', 'רב חנינא גאון בן רב יהודה', 'Rav Chanina Gaon son of Rav Yehudah'),
      { type: 'mother', he: 'בת רב מישוי', en: 'The daughter of Rav Mishui' },
      to('ancestor', 'rabba-bar-avuha'),
      nm('teacher', 'רב נחמיה גאון בן רב כהן צדק', 'Rav Nechemiah Gaon son of Rav Kohen Tzedek'),
      nm('child', 'רב האי גאון בן רב שרירא', 'Rav Hai Gaon son of Rav Sherira'),
    ],
    offices: [{ label: L('גאון פומבדיתא', 'Gaon of Pumbedita'), from: 4728, to: 4756,
      before: [L('רב נחמיה גאון בן רב כהן צדק', 'Rav Nechemiah Gaon son of Rav Kohen Tzedek')],
      after: [L('רב האי גאון בן רב שרירא', 'Rav Hai Gaon son of Rav Sherira')] }],
    sources: [
      IRSG,
      L('איגרת רב שרירא גאון, מהדורת ב״מ לוין (חיפה, תרפ״א)', 'The Letter of Rav Sherira Gaon, ed. B. M. Lewin (Haifa, 1921)'),
      L('ספר הקבלה לראב״ד (רבי אברהם אבן דאוד)', 'Sefer HaKabbalah of Rabbi Avraham ibn Daud'),
      L('מסעות בנימין מטודלה', 'The Travels of Benjamin of Tudela'),
      L('ספר הערוך, ערך אביי', 'Sefer HaAruch, s.v. Abaye'),
      L('ספר האשכול', 'Sefer HaEshkol'),
      L('תשובות הגאונים', 'The Responsa of the Geonim'),
      L('האנציקלופדיה היהודית (1906), Sherira b. Hanina', 'The Jewish Encyclopedia (1906), Sherira b. Hanina'),
    ],
    sections: [
      sec('רב שרירא גאון',
        'רב שרירא, בנו של רב חנינא גאון, נולד בבבל בסביבות שנת 4666 (906 למניינם), למשפחה של חכמים וגאונים: אביו רב חנינא וסבו רב יהודה עמדו לפניו בראש ישיבת פומבדיתא, שבימיהם כבר ישבה בבגדד, בירת הח׳ליפות. אמו הייתה בתו של רב מישוי. הוא עמד בראש הישיבה כשלושים שנה, בימים שבהם היו הגאונים הסמכות העליונה בתורה לכל תפוצות ישראל – ממזרח עד ספרד – וחי כמאה שנה.',
        'Rav Sherira Gaon',
        'Rav Sherira, the son of Rav Chanina Gaon, was born in Bavel around 4666 (906 CE), to a family of sages and Geonim: his father Rav Chanina and his grandfather Rav Yehudah headed the Pumbedita yeshivah before him, which in their days already sat in Baghdad, the capital of the Caliphate. His mother was the daughter of Rav Mishui. He headed the yeshivah for some thirty years, in the days when the Geonim were the highest authority in Torah for all the communities of Israel – from the East to Spain – and lived for about a hundred years.'),
      sec('מבית דוד',
        'רב שרירא יצא ממשפחת ראשי הגולה, צאצאי דוד המלך, ובאיגרתו הוא כותב שמשפחתו יוצאת מרבה בר אבוה, האמורא בן משפחת ראשי הגולה ותלמידו של רב. לדבריו, אבותיו היו פעם ראשי גולה, אך בימי בוסתנאי, כשהלכה הנשיאות והתקלקלה, עזבו אותה והעדיפו את התורה – ומאז עמדו בראש הישיבות. רבי אברהם אבן דאוד מספר בספר הקבלה שעל חותמו של רב שרירא היה ציור של אריה, סמל מלכי יהודה. באילן שלנו יורד קו מנוקד מרבה בר אבוה, לצד שושלת ראשי הגולה, דרך רב מרי בר רב דימי ורב דודאי בן נחמן, עד משפחתו של רב שרירא.',
        'Of the House of David',
        'Rav Sherira came from the family of the Heads of the Exile, the descendants of King David, and in his Letter he writes that his family descends from Rabba bar Avuha, the Amora of the family of the Heads of the Exile and Rav’s student. By his words, his forefathers were once Heads of the Exile, but in the days of Bustenai, when the office declined and was corrupted, they left it and preferred the Torah – and since then they headed the yeshivot. Rabbi Avraham ibn Daud relates in Sefer HaKabbalah that Rav Sherira’s seal bore the image of a lion, the emblem of the kings of Judah. On our tree a dotted line goes down from Rabba bar Avuha, beside the line of the Heads of the Exile, by way of Rav Mari bar Rav Dimi and Rav Dodai ben Nachman, to the family of Rav Sherira.'),
      sec('הגאונות',
        'רב שרירא שימש תחילה אב בית דין בישיבת פומבדיתא, ובשנת 4728 (968 למניינם) נבחר לגאון, אחרי רב נחמיה גאון, רבו. זמן קצר אחר כך מינה את בנו, רב האי, לאב בית דין במקומו, והשניים הנהיגו את הישיבה יחד וכתבו יחד תשובות רבות. הישיבה קיבלה שאלות מכל העולם היהודי – מצפון אפריקה, מספרד, ממצרים ומארץ ישראל ועד הודו – ואת התשובות שלחו הגאונים במכתבים, יחד עם בקשה לתמיכה בישיבה.',
        'The Gaonate',
        'Rav Sherira first served as Av Beit Din in the Pumbedita yeshivah, and in 4728 (968 CE) he was chosen as Gaon, after Rav Nechemiah Gaon, his teacher. A short time later he appointed his son, Rav Hai, as Av Beit Din in his place, and the two led the yeshivah together and wrote many responsa together. The yeshivah received questions from the whole Jewish world – from North Africa, Spain, Egypt and the Land of Israel as far as India – and the Geonim sent their answers in letters, together with a request for support for the yeshivah.'),
      sec('איגרת רב שרירא גאון',
        'בשנת 4746 (986 למניינם) שלח רבי יעקב בן נסים, מחכמי קירואן שבצפון אפריקה, שאלות בשם קהילתו: כיצד נכתבה המשנה, ומדוע סודרו מסכתותיה כפי שסודרו? מה מקורן של התוספתא והברייתות, ולמה לא נכנסו למשנה? כיצד נכתב התלמוד, ומי היו החכמים שאחרי חתימתו – הסבוראים והגאונים – וכמה שנים עמד כל אחד בראש הישיבה? השאלות עלו בימים שבהם תקפו הקראים את התורה שבעל פה. רב שרירא השיב באיגרת ארוכה, שנכתבה כמחציתה בארמית וכמחציתה בעברית, ובה תיאר את שלשלת המסורת ללא הפסק, מאנשי המשנה ועד ימיו.',
        'The Letter of Rav Sherira Gaon',
        'In 4746 (986 CE) Rabbi Yaakov ben Nissim, of the sages of Kairouan in North Africa, sent questions in the name of his community: how was the Mishnah written, and why were its tractates arranged as they were? What is the origin of the Tosefta and the Baraitot, and why did they not enter the Mishnah? How was the Talmud written, and who were the sages after its sealing – the Savoraim and the Geonim – and how many years did each head the yeshivah? The questions arose in the days when the Karaites were attacking the Oral Torah. Rav Sherira answered in a long Letter, written about half in Aramaic and half in Hebrew, describing the unbroken chain of tradition from the men of the Mishnah to his own days.'),
      sec('המקור לתולדות התורה שבעל פה',
        'האיגרת היא כמעט המקור היחיד לתולדות התורה שבעל פה מסוף ימי האמוראים ועד ימי הגאונים, ומרבית מה שאנו יודעים על סדר ראשי הישיבות בבבל – ובכלל זה השנים הכתובות על תיבות רבות באילן שלנו, וזמן חתימת התלמוד בפטירתו של רבינא בשנת 4260 – נלמד ממנה. היא נשתמרה בשני נוסחים, "הנוסח הספרדי" ו"הנוסח הצרפתי", שיש ביניהם הבדלים – ובמיוחד בשאלה אם רבי כתב את המשנה בכתב או סידר אותה בעל פה. האיגרת נדפסה פעמים רבות, והמהדורה המדעית המקובלת היא של בנימין מנשה לוין (תרפ״א). באיגרת אחרת לאותו רבי יעקב, שמובאת בספר הערוך, הסביר רב שרירא את התארים "רבן", "רבי", "רב" ו"מר", ומדוע יש חכמים שנזכרים בלי תואר.',
        'The Source for the History of the Oral Torah',
        'The Letter is almost the only source for the history of the Oral Torah from the end of the Amoraim to the days of the Geonim, and most of what we know about the order of the heads of the yeshivot in Bavel – including the years written on many boxes of our tree, and the time of the sealing of the Talmud with Ravina’s death in 4260 – is learned from it. It was preserved in two versions, "the Spanish version" and "the French version", which differ in places – especially on whether Rebbi wrote the Mishnah down or arranged it orally. The Letter has been printed many times, and the accepted scholarly edition is that of Binyamin Menashe Lewin (1921). In another letter to the same Rabbi Yaakov, brought in Sefer HaAruch, Rav Sherira explained the titles "Rabban", "Rabbi", "Rav" and "Mar", and why some sages are named without a title.'),
      sec('תשובותיו ותורתו',
        'רוב תשובותיו עוסקות בהלכה למעשה, ומקצתן בפירוש משניות וסוגיות. הוא כתב בעיקר בארמית ובעברית, אף שידע לכתוב גם בערבית. בפסקיו נטה בדרך כלל להחמיר, ועמד על סמכותו של התלמוד מול הקראים. הוא קבע כללים חשובים להבנת התלמוד – כמו שהמילה "מצוה" פעמים היא חובה ופעמים רק דבר ראוי – וכתב שדברי האגדה הנדרשים מן הפסוקים הם "אומדנא", ולא כולם מחייבים כפשוטם. הוא עסק גם בספרות ההיכלות ו"שיעור קומה", וכתב שיש בהם סודות עמוקים, ואין להבינם כפשוטם. פירושיו למקרא ולתלמוד, וחיבורו "מגילת סתרים", אבדו, ונשארו רק ציטוטים מהם אצל חכמים מאוחרים.',
        'His Responsa and Teaching',
        'Most of his responsa deal with practical halachah, and some with explaining mishnayot and sugyot. He wrote mainly in Aramaic and Hebrew, though he could also write in Arabic. In his rulings he generally leaned to strictness, and upheld the authority of the Talmud against the Karaites. He set down important rules for understanding the Talmud – such as that the word "mitzvah" is sometimes an obligation and sometimes only a fitting thing – and wrote that the words of aggadah derived from verses are "estimation", and not all of them bind in their plain sense. He also dealt with the Heichalot literature and "Shi’ur Komah", and wrote that they hold deep secrets and must not be understood literally. His commentaries on the Bible and the Talmud, and his work "Megillat Setarim", are lost, and only quotations from them remain in later sages.'),
      sec('המאסר וסוף ימיו',
        'בשנת 4757 (997 למניינם) הלשינו עליו ועל בנו רב האי אנשים מתוך העם אל הח׳ליף אל־קאדר. לפי אחד ההסברים, האשימו אותם בקשרים עם ארצות האויב של הח׳ליפות – שהרי לישיבה באו תלמידים ומכתבים מצפון אפריקה, מספרד ומארצות אחרות. האב והבן נאסרו, וכל רכושם הוחרם, עד שלא נשאר להם אף לחם לאכול. הם שוחררו לבסוף, אבל רב שרירא, שהיה כבן תשעים, נחלש מאוד, ובשנה שאחרי זה מינה את בנו רב האי לגאון במקומו. הוא נפטר זקן מאוד, כבן מאה, ולפי בנימין מטודלה נקבר ליד סורא, לצד בנו רב האי ורב סעדיה גאון.',
        'The Imprisonment and His Last Days',
        'In 4757 (997 CE) informers from among the people denounced him and his son Rav Hai to the Caliph al-Qadir. By one explanation, they were accused of ties with the Caliphate’s enemy lands – since students and letters came to the yeshivah from North Africa, Spain and other countries. Father and son were imprisoned, and all their property was confiscated, until they had not even bread to eat. They were released in the end, but Rav Sherira, who was about ninety, was greatly weakened, and the year after he appointed his son Rav Hai as Gaon in his place. He died very old, about a hundred, and by Benjamin of Tudela he was buried near Sura, beside his son Rav Hai and Rav Saadia Gaon.'),
      sec('רבותיו ותלמידיו',
        'אביו היה רב חנינא גאון, ואמו בתו של רב מישוי. הוא עמד בראש ישיבת פומבדיתא אחרי רב נחמיה גאון, רבו. בנו ותלמידו רב האי גאון עמד לצדו כאב בית דין, ואחריו עמד בראש הישיבה – והיה אחרון הגאונים הגדולים.',
        'Teachers and Students',
        'His father was Rav Chanina Gaon, and his mother the daughter of Rav Mishui. He headed the Pumbedita yeshivah after Rav Nechemiah Gaon, his teacher. His son and student Rav Hai Gaon stood beside him as Av Beit Din, and headed the yeshivah after him – the last of the great Geonim.'),
    ],
  }),
];
