// The Tannaim of the first tree, from the students of Hillel and Shammai to
// the teachers of Rabbi Yehudah HaNasi. Brown arrows on the poster =
// teacher / student; blue lines = family (dotted = through a daughter or a
// marriage); a "?" = uncertain; red numbers = the order of the Ten Martyrs.
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const LV = ['levites'];
const AVOT = (ref) => L(`משנה אבות ${ref}`, `Mishnah Avot ${ref.replace(/, /, ':')}`);

// the Ten Martyrs, by the numbers in red circles on our tree
const MARTYRS_HE = ['', 'רבי ישמעאל כהן גדול', 'רבן שמעון בן גמליאל', 'רבי חנינא בן תרדיון', 'רבי עקיבא', 'רבי יהודה בן בבא', 'רבי יהודה בן דמא', 'רבי חוצפית המתורגמן', 'רבי חנינא בן חכינאי', 'רבי ישבב הסופר', 'רבי אלעזר בן שמוע'];
const MARTYRS_EN = ['', 'Rabbi Yishmael the High Priest', 'Rabban Shimon ben Gamliel', 'Rabbi Chanina ben Tradyon', 'Rabbi Akiva', 'Rabbi Yehudah ben Bava', 'Rabbi Yehudah ben Dama', 'Rabbi Chutzpit the Interpreter', 'Rabbi Chanina ben Chachinai', 'Rabbi Yeshevav the Scribe', 'Rabbi Elazar ben Shamua'];
const martyr = (n) => sec('מעשרת הרוגי מלכות',
  `באילן שלנו הוא ה${['', 'ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שביעי', 'שמיני', 'תשיעי', 'עשירי'][n]} בעשרת הרוגי מלכות, החכמים שהרומאים הרגו על קידוש השם, שעליהם אומרים "אלה אזכרה" ביום הכיפורים. הסדר באילן: ${MARTYRS_HE.slice(1).join(', ')}. יש מקורות שמונים אותם בסדר אחר או בשמות אחרים.`,
  'One of the Ten Martyrs',
  `On our tree he is number ${n} of the Ten Martyrs, the sages the Romans killed for the sanctification of G-d’s name, of whom "Eileh Ezkerah" is said on Yom Kippur. The order on our tree: ${MARTYRS_EN.slice(1).join(', ')}. Some sources count them in another order or with other names.`);

const STAM = (who, book, bookEn) => sec('"סתם"', `הגמרא (סנהדרין פו ע״א) אומרת: "סתם מתניתין רבי מאיר, סתם תוספתא רבי נחמיה, סתם ספרא רבי יהודה, סתם ספרי רבי שמעון, וכולהו אליבא דרבי עקיבא" – משנה שלא נזכר בה שם אומרה, היא כדעת ${who}. באילן כתוב מתחתיו "סתם ${book}".`,
  '"Unattributed"', `The Gemara (Sanhedrin 86a) says: "An unattributed Mishnah is Rabbi Meir, an unattributed Tosefta is Rabbi Nechemyah, an unattributed Sifra is Rabbi Yehudah, an unattributed Sifrei is Rabbi Shimon, and all follow Rabbi Akiva" – a teaching given without a name follows ${who === 'רבי מאיר' ? 'Rabbi Meir' : who === 'רבי נחמיה' ? 'Rabbi Nechemyah' : who === 'רבי יהודה' ? 'Rabbi Yehudah' : 'Rabbi Shimon'}. On our tree it says beneath him "unattributed ${bookEn}".`);
const SANH86 = L('סנהדרין פו ע״א', 'Sanhedrin 86a');
const REBBI_TEACHER = sec('רבו של רבי', 'רבי יהודה הנשיא למד מפיו. רבי למד מכמה מתלמידי רבי עקיבא, ותורתם נאספה במשנה שסידר.', 'Rebbi’s Teacher', 'Rabbi Yehudah HaNasi learned from him. Rebbi learned from several of Rabbi Akiva’s students, and their teaching was gathered in the Mishnah he arranged.');

const sages = [
  // ── the generation of the Temple's last days ──
  p({
    slug: 'akavya-ben-mahalalel', name: L('עקביא בן מהללאל', 'Akavya ben Mahalalel'), spot: 'עקביא בן מהללאל',
    summary: L('"הסתכל בשלושה דברים ואין אתה בא לידי עבירה"; לא חזר בו מדבריו גם כדי להיות אב בית דין.', '"Consider three things and you will not come to sin"; he would not retract his words even to become Av Beit Din.'),
    rel: [], sources: [AVOT('ג, א'), L('משנה עדויות ה, ו – ז', 'Mishnah Eduyot 5:6–7')],
    sections: one('עקביא', 'עקביא העיד ארבעה דברים כפי ששמע מרבותיו, והחכמים אמרו לו: "חזור בך בארבעה דברים שהיית אומר, ונעשך אב בית דין לישראל". אמר להם: "מוטב לי להיקרא שוטה כל ימי, ולא ליעשות שעה אחת רשע לפני המקום". לפני מותו אמר לבנו לחזור בו, כי הוא שמע מפי רבים, ובנו שמע רק מפיו. הוא אמר: "הסתכל בשלושה דברים ואין אתה בא לידי עבירה: דע מאין באת, ולאן אתה הולך, ולפני מי אתה עתיד ליתן דין וחשבון".', 'Akavya', 'Akavya testified four things as he had heard them from his teachers, and the sages told him: "Retract the four things you used to say, and we will make you Av Beit Din of Israel". He told them: "Better for me to be called a fool all my days than to be wicked before G-d for one hour". Before his death he told his son to retract, since he himself had heard from many, while his son had heard only from him. He said: "Consider three things and you will not come to sin: know where you came from, where you are going, and before Whom you will give judgement and account".'),
  }),
  p({
    slug: 'rabbi-miasha', name: L('רבי מיאשא', 'Rabbi Miasha'), spot: 'רבי מיאשא',
    summary: L('מן החכמים שבשרשרת הקבלה של נחום הלבלר.', 'One of the sages in Nachum HaLavlar’s chain of tradition.'),
    rel: [to('student', 'nachum-halavlar')], sources: [L('משנה פאה ב, ו', 'Mishnah Peah 2:6')],
    sections: one('רבי מיאשא', 'המשנה (פאה ב, ו) מביאה עדות של נחום הלבלר: "מקובל אני מרבי מיאשא, שקיבל מאבא, שקיבל מן הזוגות, שקיבלו מן הנביאים, הלכה למשה מסיני".', 'Rabbi Miasha', 'The Mishnah (Peah 2:6) brings Nachum HaLavlar’s testimony: "I have a tradition from Rabbi Miasha, who received from his father, who received from the Zugot, who received from the prophets, a law given to Moshe at Sinai".'),
  }),
  p({
    slug: 'nachum-halavlar', name: L('נחום הלבלר', 'Nachum the Scribe'), spot: 'נחום הלבלר',
    summary: L('הסופר שהעיד על הלכה שקיבל בשרשרת עד משה רבנו.', 'The scribe who testified to a law he received in a chain back to Moshe Rabbeinu.'),
    rel: [to('teacher', 'rabbi-miasha')], sources: [L('משנה פאה ב, ו', 'Mishnah Peah 2:6')],
    sections: one('נחום הלבלר', 'נחום הלבלר (הסופר) העיד לפני רבן גמליאל על הלכה בדיני פאה, ואמר שקיבל אותה מרבי מיאשא, שקיבל מאביו, שקיבל מן הזוגות, שקיבלו מן הנביאים – "הלכה למשה מסיני".', 'Nachum HaLavlar', 'Nachum HaLavlar (the scribe) testified before Rabban Gamliel about a law of Peah, and said he received it from Rabbi Miasha, who received from his father, who received from the Zugot, who received from the prophets – "a law given to Moshe at Sinai".'),
  }),
  p({
    slug: 'rabbi-yonatan-ben-harkinas', name: L('רבי יונתן בן הרכינס', 'Rabbi Yonatan ben Harkinas'), spot: 'רבי יונתן בן הרכינס',
    summary: L('"בכור שטן", מתלמידי בית שמאי, אחי רבי דוסא.', '"The firstborn of the Satan", of the students of Beit Shammai, brother of Rabbi Dosa.'),
    rel: [to('father', 'harkinas'), to('sibling', 'rabbi-dosa-ben-harkinas'), to('teacher', 'shammai')], sources: [L('יבמות טז ע״א', 'Yevamot 16a')],
    sections: one('בכור שטן', 'הגמרא (יבמות טז ע״א) מספרת שרבי דוסא בן הרכינס אמר על אחיו: "אח קטן יש לי, ובכור שטן הוא, ויונתן שמו, ומתלמידי שמאי הוא" – משום שהיה חריף מאוד בפלפולו.', 'The Firstborn of the Satan', 'The Gemara (Yevamot 16a) relates that Rabbi Dosa ben Harkinas said of his brother: "I have a younger brother, he is the firstborn of the Satan, Yonatan is his name, and he is of the students of Shammai" – since he was very sharp in debate.'),
  }),
  p({
    slug: 'rabbi-dosa-ben-harkinas', name: L('רבי דוסא בן הרכינס', 'Rabbi Dosa ben Harkinas'), spot: 'רבי דוסא בן הרכינס',
    summary: L('החכם הזקן שראה את חגי הנביא, ושאולי היה אבי רבי חנינא בן דוסא.', 'The aged sage who saw Chaggai the prophet, and who may have been the father of Rabbi Chanina ben Dosa.'),
    rel: [to('father', 'harkinas'), to('sibling', 'rabbi-yonatan-ben-harkinas'), maybe('child', 'rabbi-chanina-ben-dosa'), to('related', 'rabbi-yehoshua-ben-chananya')],
    sources: [L('יבמות טז ע״א', 'Yevamot 16a'), AVOT('ג, י'), L('ראש השנה כה ע״א', 'Rosh Hashanah 25a')],
    sections: [
      sec('רבי דוסא', 'רבי דוסא בן הרכינס האריך ימים מאוד. כשבאו אליו החכמים ביבנה אמר: "מעיד אני עלי את השמים ואת הארץ, שעל מדוכה זו ישב חגי הנביא". הוא אמר: "שינה של שחרית, ויין של צהריים, ושיחת הילדים, וישיבת בתי כנסיות של עמי הארץ – מוציאין את האדם מן העולם".', 'Rabbi Dosa', 'Rabbi Dosa ben Harkinas lived a very long life. When the sages came to him in Yavneh he said: "I call heaven and earth to witness that on this mortar sat Chaggai the prophet". He said: "Morning sleep, midday wine, children’s chatter, and sitting in the meeting places of the ignorant – remove a person from the world".'),
      sec('סימן השאלה באילן', 'באילן שלנו רבי חנינא בן דוסא מסומן כבנו, בסימן שאלה: אולי רבי חנינא היה בנו, אבל זה לא ודאי – "בן דוסא" יכול להיות גם אדם אחר בשם דוסא.', 'The Question Mark on Our Tree', 'On our tree Rabbi Chanina ben Dosa is marked as his son, with a question mark: perhaps Rabbi Chanina was his son, but this is not certain – "ben Dosa" could also be another man named Dosa.'),
    ],
  }),
  p({
    slug: 'rabbi-tzadok', cats: LV, name: L('רבי צדוק', 'Rabbi Tzadok'), spot: 'רבי צדוק',
    summary: L('הכהן שישב בתענית ארבעים שנה כדי שלא תיחרב ירושלים.', 'The Kohen who fasted forty years so that Jerusalem would not be destroyed.'),
    rel: [to('child', 'rabbi-elazar-berabbi-tzadok'), to('related', 'rabban-yochanan-ben-zakai'), to('related', 'churban-bayit-sheni')], sources: [L('גיטין נו ע״א – ע״ב', 'Gittin 56a–b'), AVOT('ד, ה')],
    sections: one('ארבעים שנה בתענית', 'הגמרא (גיטין נו ע״א) מספרת שרבי צדוק ישב בתענית ארבעים שנה כדי שלא תיחרב ירושלים, ונעשה כחוש כל כך שכשהיה אוכל דבר, היו רואים אותו מבחוץ. רבן יוחנן בן זכאי ביקש מאספסיינוס "אסוותא דמסיין ליה לרבי צדוק" – רופאים שירפאו אותו. הוא אמר: "אל תעשם עטרה להתגדל בהם, ולא קרדום לחפור בהם".', 'Forty Years of Fasting', 'The Gemara (Gittin 56a) relates that Rabbi Tzadok fasted forty years so that Jerusalem would not be destroyed, and became so thin that when he ate something it could be seen from outside. Rabban Yochanan ben Zakai asked Vespasian for "doctors to heal Rabbi Tzadok". He said: "Do not make the Torah a crown to make yourself great, nor a spade to dig with".'),
  }),
  p({
    slug: 'rabbi-elazar-berabbi-tzadok', cats: LV, name: L('רבי אלעזר ברבי צדוק', 'Rabbi Elazar son of Rabbi Tzadok'), spot: 'רבי אלעזר ברבי צדוק',
    summary: L('בנו של רבי צדוק, שראה את בית המקדש ומסר מנהגיו.', 'Rabbi Tzadok’s son, who saw the Temple and handed down its customs.'),
    rel: [to('father', 'rabbi-tzadok')], sources: [L('גיטין נו ע״ב', 'Gittin 56b'), L('סוכה מט ע״א', 'Sukkah 49a')],
    sections: one('רבי אלעזר ברבי צדוק', 'רבי אלעזר היה עם אביו בירושלים בימי המצור, ומסר במשנה ובברייתות פרטים רבים על מנהגי ירושלים ובית המקדש כפי שראה בעיניו. הגמרא מספרת שהרופאים שנתן אספסיינוס ריפאו את אביו בהדרגה.', 'Rabbi Elazar son of Rabbi Tzadok', 'Rabbi Elazar was with his father in Jerusalem during the siege, and in the Mishnah and the baraitot he handed down many details of the customs of Jerusalem and the Temple as he saw them. The Gemara relates that the doctors Vespasian gave healed his father little by little.'),
  }),
  p({
    slug: 'rabbi-eliezer-ben-yaakov', name: L('רבי אליעזר בן יעקב', 'Rabbi Eliezer ben Yaakov'), spot: 'רבי אליעזר בן יעקב',
    summary: L('"משנת רבי אליעזר בן יעקב – קב ונקי".', '"The Mishnah of Rabbi Eliezer ben Yaakov – a small measure, but clean".'),
    rel: [], sources: [L('יבמות מט ע״ב', 'Yevamot 49b'), L('משנה מידות א, ב', 'Mishnah Middot 1:2'), AVOT('ד, יא')],
    sections: one('קב ונקי', 'רבי אליעזר בן יעקב ראה את בית המקדש, ולפי המפרשים מסכת מידות, המתארת את מבנה המקדש, נשנתה בעיקר על פיו. חז״ל אמרו: "משנת רבי אליעזר בן יעקב קב ונקי" – מעט, אבל ההלכה כמותו בכל מקום (יבמות מט ע״ב). הוא אמר: "העושה מצוה אחת קונה לו פרקליט אחד".', 'Small but Clean', 'Rabbi Eliezer ben Yaakov saw the Temple, and according to the commentators tractate Middot, which describes the Temple’s structure, was taught mainly by him. Chazal said: "The Mishnah of Rabbi Eliezer ben Yaakov is a small measure, but clean" – little, but the law follows him everywhere (Yevamot 49b). He said: "Whoever does one mitzvah acquires one advocate".'),
  }),
  p({
    slug: 'rabbi-yishmael-kohen-gadol', cats: LV, name: L('רבי ישמעאל כהן גדול', 'Rabbi Yishmael the High Priest'), spot: 'רבי ישמעאל כהן גדול',
    summary: L('הכהן הגדול שנהרג ראשון בעשרת הרוגי מלכות.', 'The High Priest who was killed first of the Ten Martyrs.'),
    rel: [to('related', 'rabban-shimon-ben-gamliel-1'), to('related', 'harigat-rashbag'), to('related', 'rabbi-yishmael-ben-elisha')], sources: [L('אבות דרבי נתן לח', 'Avot deRabbi Natan 38'), L('ברכות ז ע״א', 'Berachot 7a'), L('מדרש אלה אזכרה', 'Midrash Eileh Ezkerah')],
    sections: [
      sec('רבי ישמעאל כהן גדול', 'הגמרא (ברכות ז ע״א) מספרת על רבי ישמעאל בן אלישע שנכנס להקטיר קטורת לפני ולפנים, וראה את "אכתריאל י־ה ה׳ צבאות", וביקש ממנו: "ישמעאל בני, ברכני". באילן שלנו יש שני רבי ישמעאל: רבי ישמעאל כהן גדול שנהרג בעשרת הרוגי מלכות, ורבי ישמעאל בן אלישע, התנא חברו של רבי עקיבא, שלפי רוב הדעות היה נכדו.', 'Rabbi Yishmael the High Priest', 'The Gemara (Berachot 7a) tells of Rabbi Yishmael ben Elisha who entered the Holy of Holies to offer incense, and saw "Akatriel Kah, Hashem of Hosts", who asked him: "Yishmael My son, bless Me". On our tree there are two Rabbi Yishmaels: Rabbi Yishmael the High Priest, killed among the Ten Martyrs, and Rabbi Yishmael ben Elisha, the Tanna and colleague of Rabbi Akiva, who by most opinions was his grandson.'),
      martyr(1),
    ],
  }),
  p({
    slug: 'rabbi-chanina-segan-hakohanim', cats: LV, name: L('רבי חנינא סגן הכהנים', 'Rabbi Chanina the Deputy High Priest'), spot: 'רבי חנינא סגן הכהנים',
    summary: L('סגן הכהן הגדול בימי הבית: "הוי מתפלל בשלומה של מלכות".', 'Deputy of the High Priest in Temple times: "Pray for the welfare of the government".'),
    rel: [to('child', 'rabbi-shimon-ben-hasegan')], sources: [AVOT('ג, ב'), L('משנה פסחים א, ו', 'Mishnah Pesachim 1:6')],
    sections: one('סגן הכהנים', 'רבי חנינא היה הסגן – הממונה שעמד לימין הכהן הגדול ומוכן להחליף אותו. הוא מסר במשנה מנהגים רבים של המקדש, ואמר: "הוי מתפלל בשלומה של מלכות, שאלמלא מוראה, איש את רעהו חיים בלעו". בנו היה רבי שמעון בן הסגן.', 'The Deputy of the Kohanim', 'Rabbi Chanina was the segan – the officer who stood at the High Priest’s right, ready to replace him. He handed down in the Mishnah many customs of the Temple, and said: "Pray for the welfare of the government, for were it not for fear of it, people would swallow each other alive". His son was Rabbi Shimon ben HaSegan.'),
  }),
  p({
    slug: 'rabbi-shimon-ben-hasegan', cats: LV, name: L('רבי שמעון בן הסגן', 'Rabbi Shimon ben HaSegan'), spot: 'רבי שמעון בן הסגן',
    summary: L('בנו של רבי חנינא סגן הכהנים.', 'Son of Rabbi Chanina the deputy High Priest.'),
    rel: [to('father', 'rabbi-chanina-segan-hakohanim')], sources: [L('משנה שקלים ח, ה', 'Mishnah Shekalim 8:5'), L('משנה כתובות ב, ח', 'Mishnah Ketubot 2:8')],
    sections: one('רבי שמעון בן הסגן', 'רבי שמעון בן הסגן נזכר במשנה כמה פעמים, ומוסר בשם ראייתו פרטים על כלי המקדש ועל הפרוכת. שמו המלא היה רבי שמעון בן רבי חנינא סגן הכהנים.', 'Rabbi Shimon ben HaSegan', 'Rabbi Shimon ben HaSegan is mentioned in the Mishnah several times, handing down from what he saw details of the Temple vessels and of the curtain. His full name was Rabbi Shimon son of Rabbi Chanina the deputy of the Kohanim.'),
  }),
  // ── the students of Rabban Yochanan ben Zakai ──
  p({
    slug: 'rabbi-eliezer-ben-hurkanos', name: L('רבי אליעזר בן הורקנוס', 'Rabbi Eliezer ben Hurkanos'), spot: 'רבי אליעזר בן הורקנוס',
    summary: L('"בור סוד שאינו מאבד טיפה", תלמיד רבן יוחנן בן זכאי ורבו של רבי עקיבא.', '"A plastered cistern that does not lose a drop", student of Rabban Yochanan ben Zakai and teacher of Rabbi Akiva.'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai'), to('student', 'rabbi-akiva'), to('student', 'elisha-ben-avuya'), to('student', 'rabbi-yishmael-ben-elisha'), to('related', 'rabbi-yehoshua-ben-chananya')],
    sources: [AVOT('ב, ח'), L('בבא מציעא נט ע״ב', 'Bava Metzia 59b'), L('פרקי דרבי אליעזר א – ב', 'Pirkei deRabbi Eliezer 1–2'), L('סנהדרין סח ע״א', 'Sanhedrin 68a')],
    sections: one('רבי אליעזר הגדול', 'רבי אליעזר עזב את שדות אביו ועלה ללמוד אצל רבן יוחנן בן זכאי, שאמר עליו: "בור סוד שאינו מאבד טיפה". בוויכוח על "תנור של עכנאי" עשה אותות כדי להוכיח את דבריו, ויצאה בת קול שהלכה כמותו, ורבי יהושע עמד ואמר: "לא בשמים היא" (בבא מציעא נט ע״ב). החכמים נידו אותו, והוא ישב בלוד עד מותו. תלמידיו היו רבי עקיבא, אלישע בן אבויה ורבי ישמעאל בן אלישע.', 'Rabbi Eliezer the Great', 'Rabbi Eliezer left his father’s fields and went up to learn with Rabban Yochanan ben Zakai, who said of him: "A plastered cistern that does not lose a drop". In the debate over "the oven of Achnai" he performed signs to prove his words, and a heavenly voice declared that the law follows him, and Rabbi Yehoshua stood and said: "It is not in heaven" (Bava Metzia 59b). The sages excommunicated him, and he lived in Lod until his death. His students were Rabbi Akiva, Elisha ben Avuya and Rabbi Yishmael ben Elisha.'),
  }),
  p({
    slug: 'rabbi-yehoshua-ben-chananya', cats: LV, name: L('רבי יהושע בן חנניה', 'Rabbi Yehoshua ben Chananya'), spot: 'רבי יהושע בן חנניה',
    summary: L('הלוי, תלמיד רבן יוחנן בן זכאי: "אשרי יולדתו".', 'The Levite, student of Rabban Yochanan ben Zakai: "Fortunate is the one who bore him".'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai'), to('student', 'rabbi-akiva'), to('student', 'elisha-ben-avuya'), to('student', 'rabbi-yishmael-ben-elisha'), to('related', 'rabbi-eliezer-ben-hurkanos'), to('related', 'rabban-gamliel-deyavne')],
    sources: [AVOT('ב, ח'), L('ערכין יא ע״ב', 'Arachin 11b'), L('ברכות כז ע״ב – כח ע״א', 'Berachot 27b–28a'), L('ירושלמי יבמות א, ו', 'Yerushalmi Yevamot 1:6'), L('חגיגה טו ע״א', 'Chagigah 15a')],
    sections: one('רבי יהושע', 'רבי יהושע היה לוי ממשוררי בית המקדש (ערכין יא ע״ב), ורבן יוחנן בן זכאי אמר עליו: "אשרי יולדתו" – כי אמו הביאה את עריסתו לבית המדרש כדי שישמע דברי תורה. הוא התפרנס מעשיית מחטים, והיה שליח העם לפני הקיסרים. כשרבן גמליאל ציער אותו, העבירו החכמים את רבן גמליאל מן הנשיאות. תלמידיו היו רבי עקיבא, אלישע בן אבויה ורבי ישמעאל בן אלישע.', 'Rabbi Yehoshua', 'Rabbi Yehoshua was a Levite of the Temple singers (Arachin 11b), and Rabban Yochanan ben Zakai said of him: "Fortunate is the one who bore him" – for his mother brought his cradle to the study hall so that he would hear words of Torah. He earned his living making needles, and was the people’s messenger before the emperors. When Rabban Gamliel hurt him, the sages removed Rabban Gamliel from the office of Nasi. His students were Rabbi Akiva, Elisha ben Avuya and Rabbi Yishmael ben Elisha.'),
  }),
  p({
    slug: 'rabbi-yose-hakohen', cats: LV, name: L('רבי יוסי הכהן', 'Rabbi Yose HaKohen'), spot: 'רבי יוסי הכהן',
    summary: L('"חסיד", תלמיד רבן יוחנן בן זכאי.', '"A pious man", student of Rabban Yochanan ben Zakai.'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai')], sources: [AVOT('ב, ח, יב'), L('חגיגה יד ע״ב', 'Chagigah 14b')],
    sections: one('רבי יוסי הכהן', 'רבן יוחנן בן זכאי אמר עליו: "חסיד". הוא אמר: "יהי ממון חברך חביב עליך כשלך, והתקן עצמך ללמוד תורה, שאינה ירושה לך, וכל מעשיך יהיו לשם שמים".', 'Rabbi Yose HaKohen', 'Rabban Yochanan ben Zakai said of him: "A pious man". He said: "Let your friend’s money be as dear to you as your own, prepare yourself to learn Torah, for it is not an inheritance for you, and let all your deeds be for the sake of Heaven".'),
  }),
  p({
    slug: 'rabbi-shimon-ben-netanel', cats: LV, name: L('רבי שמעון בן נתנאל', 'Rabbi Shimon ben Netanel'), spot: 'רבי שמעון בן נתנאל',
    summary: L('"ירא חטא", תלמיד רבן יוחנן בן זכאי, חתנו של רבן גמליאל הזקן.', '"Fearful of sin", student of Rabban Yochanan ben Zakai, son-in-law of Rabban Gamliel the Elder.'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai'), to('spouse', 'bat-rabban-gamliel')], sources: [AVOT('ב, ח, יג'), L('תוספתא עבודה זרה ג, י', 'Tosefta Avodah Zarah 3:10')],
    sections: one('רבי שמעון בן נתנאל', 'רבן יוחנן בן זכאי אמר עליו: "ירא חטא". הוא אמר: "הוי זהיר בקריאת שמע ובתפילה; וכשאתה מתפלל, אל תעש תפילתך קבע, אלא רחמים ותחנונים לפני המקום". הוא היה כהן, והתוספתא מספרת שנשא את בתו של רבן גמליאל.', 'Rabbi Shimon ben Netanel', 'Rabban Yochanan ben Zakai said of him: "Fearful of sin". He said: "Be careful with the Shema and with prayer; and when you pray, do not make your prayer fixed, but a plea for mercy before G-d". He was a Kohen, and the Tosefta relates that he married Rabban Gamliel’s daughter.'),
  }),
  p({
    slug: 'rabbi-elazar-ben-arach', name: L('רבי אלעזר בן ערך', 'Rabbi Elazar ben Arach'), spot: 'רבי אלעזר בן ערך',
    summary: L('"מעיין המתגבר", שרבו אמר שהוא מכריע את כל חכמי ישראל.', '"An ever-strengthening spring", whom his teacher said outweighs all the sages of Israel.'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai')], sources: [AVOT('ב, ח – ט'), L('שבת קמז ע״ב', 'Shabbat 147b'), L('חגיגה יד ע״ב', 'Chagigah 14b')],
    sections: one('מעיין המתגבר', 'רבן יוחנן בן זכאי אמר עליו: "מעיין המתגבר", ו"אם יהיו כל חכמי ישראל בכף מאזנים, ורבי אלעזר בן ערך בכף שנייה – מכריע את כולם". אחרי מות רבו הלך לאמאוס, מקום של מים טובים ואוויר טוב, ונשכח תלמודו, וחבריו התפללו עליו עד שחזר (שבת קמז ע״ב).', 'An Ever-Strengthening Spring', 'Rabban Yochanan ben Zakai said of him: "An ever-strengthening spring", and "if all the sages of Israel were on one side of a scale, and Rabbi Elazar ben Arach on the other, he would outweigh them all". After his teacher’s death he went to Emmaus, a place of good water and good air, and forgot his learning, and his colleagues prayed for him until it returned (Shabbat 147b).'),
  }),
  p({
    slug: 'rabbi-chanina-ben-dosa', name: L('רבי חנינא בן דוסא', 'Rabbi Chanina ben Dosa'), spot: 'רבי חנינא בן דוסא',
    summary: L('בעל המופתים, ש"כל העולם כולו ניזון בשביל חנינא בני".', 'The wonder-worker, for whose sake "the whole world is sustained".'),
    rel: [maybe('father', 'rabbi-dosa-ben-harkinas'), to('teacher', 'rabban-yochanan-ben-zakai')], sources: [L('ברכות לד ע״ב', 'Berachot 34b'), L('תענית כד ע״ב – כה ע״א', 'Taanit 24b–25a'), AVOT('ג, ט'), L('משנה סוטה ט, טו', 'Mishnah Sotah 9:15')],
    sections: [
      sec('רבי חנינא בן דוסא', 'רבי חנינא הלך ללמוד תורה אצל רבן יוחנן בן זכאי, וכשחלה בנו של רבן יוחנן התפלל עליו והבריא. אמר רבן יוחנן: "אילמלי הטיח בן זכאי את ראשו בין ברכיו כל היום כולו, לא היו משגיחין עליו" – כי רבי חנינא "דומה כעבד לפני המלך" (ברכות לד ע״ב). בת קול אמרה עליו: "כל העולם כולו ניזון בשביל חנינא בני, וחנינא בני די לו בקב חרובין מערב שבת לערב שבת". פעם אחת אמר: "מי שאמר לשמן וידלוק, יאמר לחומץ וידלוק" – ודלק הנר כל השבת.', 'Rabbi Chanina ben Dosa', 'Rabbi Chanina went to learn Torah with Rabban Yochanan ben Zakai, and when Rabban Yochanan’s son fell ill he prayed for him and he recovered. Rabban Yochanan said: "Had ben Zakai pressed his head between his knees all day, they would not have paid attention to him" – for Rabbi Chanina "is like a servant before the King" (Berachot 34b). A heavenly voice said of him: "The whole world is sustained for the sake of Chanina My son, and Chanina My son is satisfied with a measure of carobs from one Shabbat eve to the next". Once he said: "He Who told oil to burn will tell vinegar to burn" – and the lamp burned all Shabbat.'),
      sec('סימן השאלה באילן', 'באילן שלנו הוא מסומן כבנו של רבי דוסא בן הרכינס, בסימן שאלה: אולי היה בנו, אבל זה לא ודאי.', 'The Question Mark on Our Tree', 'On our tree he is marked as the son of Rabbi Dosa ben Harkinas, with a question mark: perhaps he was his son, but this is not certain.'),
    ],
  }),
  p({
    slug: 'rabbi-nechunya-ben-hakana', name: L('רבי נחוניה בן הקנה', 'Rabbi Nechunya ben HaKanah'), spot: 'רבי נחוניה בן הקנה',
    summary: L('רבו של רבי ישמעאל, שתיקן תפילה בכניסה לבית המדרש וביציאה ממנו.', 'Rabbi Yishmael’s teacher, who composed a prayer for entering and leaving the study hall.'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai'), to('student', 'rabbi-yishmael-ben-elisha')], sources: [L('ברכות כח ע״ב', 'Berachot 28b'), AVOT('ג, ה'), L('שבועות כו ע״א', 'Shevuot 26a'), L('מגילה כח ע״א', 'Megillah 28a')],
    sections: one('רבי נחוניה', 'רבי נחוניה היה מתפלל בכניסתו לבית המדרש "שלא תארע תקלה על ידי", וביציאתו נותן הודיה על חלקו (ברכות כח ע״ב). הוא אמר: "כל המקבל עליו עול תורה, מעבירין ממנו עול מלכות ועול דרך ארץ". רבי ישמעאל למד ממנו את דרך הדרשה בכלל ופרט (שבועות כו ע״א).', 'Rabbi Nechunya', 'Rabbi Nechunya would pray on entering the study hall "that no mishap occur through me", and on leaving give thanks for his portion (Berachot 28b). He said: "Whoever takes upon himself the yoke of Torah is relieved of the yoke of government and the yoke of worldly cares". Rabbi Yishmael learned from him the method of expounding by general and particular (Shevuot 26a).'),
  }),
  p({
    slug: 'rabbi-tarfon', cats: LV, name: L('רבי טרפון', 'Rabbi Tarfon'), spot: 'רבי טרפון',
    summary: L('הכהן העשיר מלוד: "לא עליך המלאכה לגמור".', 'The wealthy Kohen of Lod: "It is not upon you to finish the work".'),
    rel: [to('teacher', 'rabban-yochanan-ben-zakai'), to('student', 'rabbi-yose-haglili')], sources: [AVOT('ב, טו – טז'), L('קידושין לא ע״ב', 'Kiddushin 31b'), L('ירושלמי יומא ג, ז', 'Yerushalmi Yoma 3:7')],
    sections: one('רבי טרפון', 'רבי טרפון היה כהן, ובצעירותו עמד בבית המקדש ושמע את הכהן הגדול מזכיר את השם המפורש. הגמרא מספרת שכשאמו רצתה לעלות למיטתה, היה מתכופף והיא עולה עליו (קידושין לא ע״ב). הוא אמר: "היום קצר והמלאכה מרובה... לא עליך המלאכה לגמור, ולא אתה בן חורין להיבטל ממנה". תלמידו היה רבי יוסי הגלילי.', 'Rabbi Tarfon', 'Rabbi Tarfon was a Kohen, and in his youth stood in the Temple and heard the High Priest pronounce the explicit Name. The Gemara relates that when his mother wanted to climb into bed, he would bend down and she would climb up on him (Kiddushin 31b). He said: "The day is short and the work is much... It is not upon you to finish the work, but neither are you free to desist from it". His student was Rabbi Yose HaGlili.'),
  }),
  p({
    slug: 'nachum-ish-gamzu', name: L('נחום איש גמזו', 'Nachum Ish Gamzu'), spot: 'נחום איש גמזו',
    summary: L('"גם זו לטובה"; רבו של רבי עקיבא.', '"This too is for the good"; Rabbi Akiva’s teacher.'),
    rel: [to('student', 'rabbi-akiva')], sources: [L('תענית כא ע״א', 'Taanit 21a'), L('שבועות כו ע״א', 'Shevuot 26a'), L('חגיגה יב ע״א', 'Chagigah 12a')],
    sections: one('גם זו לטובה', 'על כל דבר שקרה לו היה אומר "גם זו לטובה". הגמרא (תענית כא ע״א) מספרת שנשלח עם תיבה של אבנים טובות לקיסר, ובדרך גנבו אותן ומילאו את התיבה עפר – ואמר "גם זו לטובה". העפר התגלה כעפר של אברהם אבינו, שהופך לחרבות ולחצים, והקיסר ניצח בו. רבי עקיבא למד ממנו עשרים ושתיים שנה את דרך הדרשה ב"ריבוי ומיעוט".', 'This Too Is for the Good', 'Of everything that happened to him he would say "this too is for the good". The Gemara (Taanit 21a) relates that he was sent with a chest of precious stones to the emperor, and on the way they were stolen and the chest filled with earth – and he said "this too is for the good". The earth turned out to be the earth of Avraham Avinu, which turns into swords and arrows, and the emperor won with it. Rabbi Akiva learned from him for twenty-two years the method of expounding by "inclusion and exclusion".'),
  }),
  p({
    slug: 'shimon-hapakuli', name: L('שמעון הפקולי', 'Shimon HaPakuli'), spot: 'שמעון הפקולי',
    summary: L('שסידר את שמונה עשרה הברכות לפני רבן גמליאל ביבנה.', 'Who arranged the eighteen blessings before Rabban Gamliel in Yavneh.'),
    rel: [to('related', 'rabban-gamliel-deyavne')], sources: [L('ברכות כח ע״ב', 'Berachot 28b'), L('מגילה יז ע״ב', 'Megillah 17b')],
    sections: one('שמונה עשרה', 'הגמרא (ברכות כח ע״ב) אומרת: "שמעון הפקולי הסדיר שמונה עשרה ברכות לפני רבן גמליאל על הסדר ביבנה". הכינוי "הפקולי" מתפרש כסוחר בצמר גפן (פקולין).', 'The Eighteen Blessings', 'The Gemara (Berachot 28b) says: "Shimon HaPakuli arranged the eighteen blessings in order before Rabban Gamliel in Yavneh". The name "HaPakuli" is explained as a dealer in cotton (pakulin).'),
  }),
  p({
    slug: 'onkelos', cats: ['gerei-tzedek'], name: L('אונקלוס הגר', 'Onkelos the Convert'), spot: 'אונקלוס',
    summary: L('הגר שתרגם את התורה לארמית.', 'The convert who translated the Torah into Aramaic.'),
    rel: [to('related', 'rabbi-eliezer-ben-hurkanos'), to('related', 'rabbi-yehoshua-ben-chananya')], sources: [L('מגילה ג ע״א', 'Megillah 3a'), L('עבודה זרה יא ע״א', 'Avodah Zarah 11a'), L('גיטין נו ע״ב – נז ע״א', 'Gittin 56b–57a')],
    sections: one('תרגום אונקלוס', 'אונקלוס היה בן אחותו של טיטוס, והתגייר (גיטין נו ע״ב). הגמרא אומרת: "תרגום של תורה אונקלוס הגר אמרו מפי רבי אליעזר ורבי יהושע" (מגילה ג ע״א). כשהקיסר שלח חיילים להביא אותו, הוא שכנע אותם בדברי תורה והתגיירו גם הם (עבודה זרה יא ע״א). באילן כתוב מתחתיו "מתרגם התורה".', 'Targum Onkelos', 'Onkelos was the son of Titus’s sister, and converted (Gittin 56b). The Gemara says: "The translation of the Torah – Onkelos the convert said it from the mouths of Rabbi Eliezer and Rabbi Yehoshua" (Megillah 3a). When the emperor sent soldiers to bring him, he persuaded them with words of Torah and they converted too (Avodah Zarah 11a). On our tree it says beneath him "translator of the Torah".'),
  }),
  // ── Yavneh and the generation of Rabbi Akiva ──
  p({
    slug: 'rabbi-yose-haglili', name: L('רבי יוסי הגלילי', 'Rabbi Yose HaGlili'), spot: 'רבי יוסי הגלילי',
    summary: L('החכם מן הגליל, שניצח בוויכוח את רבי טרפון ביבנה.', 'The sage from the Galilee, who won a debate against Rabbi Tarfon in Yavneh.'),
    rel: [to('teacher', 'rabbi-tarfon'), to('student', 'rabbi-elazar-ben-azarya')], sources: [L('ספרי במדבר קיח', 'Sifrei Bamidbar 118'), L('עירובין נג ע״ב', 'Eruvin 53b')],
    sections: [
      sec('רבי יוסי הגלילי', 'כשבא רבי יוסי הגלילי לראשונה לכרם ביבנה, התווכח עם רבי טרפון וניצח אותו, ורבי טרפון אמר עליו את הפסוק "ראיתי את האיל מנגח". הגמרא (עירובין נג ע״ב) מספרת שאשה לימדה אותו שאין להרבות שיחה עם אשה, כשאמר לה "באיזו דרך נלך ללוד".', 'Rabbi Yose HaGlili', 'When Rabbi Yose HaGlili first came to the vineyard in Yavneh, he debated Rabbi Tarfon and defeated him, and Rabbi Tarfon applied to him the verse "I saw the ram goring". The Gemara (Eruvin 53b) relates that a woman taught him not to talk too much with a woman, when he asked her "which way shall we go to Lod".'),
      sec('רבותיו ותלמידיו', 'הוא למד מרבי טרפון, ותלמידו היה רבי אלעזר בן עזריה.', 'Teachers and Students', 'He learned from Rabbi Tarfon, and his student was Rabbi Elazar ben Azaryah.'),
    ],
  }),
  p({
    slug: 'rabbi-elazar-ben-azarya', cats: LV, name: L('רבי אלעזר בן עזריה', 'Rabbi Elazar ben Azaryah'), spot: 'רבי אלעזר בן עזריה',
    roles: [L('נשיא', 'Nasi')],
    summary: L('"הרי אני כבן שבעים שנה": מונה לנשיא כשרבן גמליאל הועבר.', '"I am like a man of seventy": appointed Nasi when Rabban Gamliel was removed.'),
    rel: [to('teacher', 'rabbi-yose-haglili'), to('related', 'rabban-gamliel-deyavne')], offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), before: ['rabban-gamliel-deyavne'], after: ['rabban-gamliel-deyavne'], note: L('במקום רבן גמליאל, ואחר כך דרש שבת אחת מכל שלוש', 'In place of Rabban Gamliel, and afterwards taught one Shabbat in three') }],
    sources: [L('ברכות כז ע״ב – כח ע״א', 'Berachot 27b–28a'), L('הגדה של פסח', 'The Pesach Haggadah'), AVOT('ג, יז')],
    sections: one('כבן שבעים שנה', 'רבי אלעזר בן עזריה היה כהן, עשירי לעזרא הסופר. כשהעבירו את רבן גמליאל מן הנשיאות, מינו אותו לנשיא, אף שהיה בן שמונה עשרה, ונעשה לו נס ונזרקו בזקנו "תמני סרי דרי חיורתא" – ולכן אמר "הרי אני כבן שבעים שנה", כמו שאנו אומרים בהגדה של פסח. באילן כתוב מתחתיו "נשיא". הוא אמר: "אם אין תורה אין דרך ארץ, אם אין דרך ארץ אין תורה".', 'Like a Man of Seventy', 'Rabbi Elazar ben Azaryah was a Kohen, tenth in descent from Ezra the Scribe. When Rabban Gamliel was removed from office, he was appointed Nasi although he was eighteen, and a miracle happened and eighteen rows of white appeared in his beard – which is why he said "I am like a man of seventy", as we say in the Pesach Haggadah. On our tree it says beneath him "Nasi". He said: "Where there is no Torah there is no proper conduct, where there is no proper conduct there is no Torah".'),
  }),
  p({
    slug: 'elisha-ben-avuya', name: L('אלישע בן אבויה', 'Elisha ben Avuya'), spot: 'אלישע בן אבויה',
    summary: L('"אחר": החכם שיצא לתרבות רעה, ורבי מאיר המשיך ללמוד ממנו.', '"Acher": the sage who went astray, from whom Rabbi Meir kept learning.'),
    rel: [to('teacher', 'rabbi-eliezer-ben-hurkanos'), to('teacher', 'rabbi-yehoshua-ben-chananya'), to('student', 'rabbi-meir'), to('related', 'ben-azai'), to('related', 'ben-zoma'), to('related', 'rabbi-akiva')],
    sources: [L('חגיגה יד ע״ב – טו ע״ב', 'Chagigah 14b–15b'), L('ירושלמי חגיגה ב, א', 'Yerushalmi Chagigah 2:1'), AVOT('ד, כ')],
    sections: one('ארבעה נכנסו לפרדס', 'הגמרא (חגיגה יד ע״ב) מספרת: "ארבעה נכנסו לפרדס: בן עזאי ובן זומא, אחר ורבי עקיבא" – בן עזאי הציץ ומת, בן זומא הציץ ונפגע, אחר "קיצץ בנטיעות", ורבי עקיבא יצא בשלום. אלישע יצא לתרבות רעה ונקרא "אחר", ורבי מאיר המשיך ללמוד ממנו: "רימון מצא, תוכו אכל, קליפתו זרק". הירושלמי מספר שבברית המילה שלו ישבו רבי אליעזר ורבי יהושע ועסקו בתורה – ושניהם היו רבותיו.', 'Four Entered the Orchard', 'The Gemara (Chagigah 14b) relates: "Four entered the orchard (Pardes): Ben Azai, Ben Zoma, Acher and Rabbi Akiva" – Ben Azai gazed and died, Ben Zoma gazed and was harmed, Acher "cut the plantings", and Rabbi Akiva came out in peace. Elisha went astray and was called "Acher" (the other), and Rabbi Meir kept learning from him: "He found a pomegranate, ate its inside and threw away its peel". The Yerushalmi relates that at his circumcision Rabbi Eliezer and Rabbi Yehoshua sat and occupied themselves with Torah – and both were his teachers.'),
  }),
  p({
    slug: 'rabbi-yishmael-ben-elisha', cats: LV, name: L('רבי ישמעאל בן אלישע', 'Rabbi Yishmael ben Elisha'), spot: 'רבי ישמעאל בן אלישע',
    summary: L('הכהן, חברו של רבי עקיבא, שמנה את שלוש עשרה המידות שהתורה נדרשת בהן.', 'The Kohen, Rabbi Akiva’s colleague, who listed the thirteen principles by which the Torah is expounded.'),
    rel: [to('teacher', 'rabbi-eliezer-ben-hurkanos'), to('teacher', 'rabbi-yehoshua-ben-chananya'), to('teacher', 'rabbi-nechunya-ben-hakana'), to('related', 'rabbi-akiva'), to('related', 'rabbi-yishmael-kohen-gadol')],
    sources: [L('ברייתא דרבי ישמעאל (תחילת ספרא)', 'The Baraita of Rabbi Yishmael (opening of the Sifra)'), L('גיטין נח ע״א', 'Gittin 58a'), L('שבועות כו ע״א', 'Shevuot 26a'), AVOT('ג, יב')],
    sections: one('שלוש עשרה מידות', 'רבי ישמעאל מנה את "שלוש עשרה מידות שהתורה נדרשת בהן", שאנו אומרים בכל בוקר בתפילה, ואמר "דיברה תורה כלשון בני אדם". הוא היה כהן, וכשהיה ילד שבוי ברומא פדה אותו רבי יהושע (גיטין נח ע״א). הוא אינו רבי ישמעאל כהן גדול, שלפי רוב הדעות היה סבו; רבותיו היו רבי אליעזר, רבי יהושע ורבי נחוניה בן הקנה.', 'Thirteen Principles', 'Rabbi Yishmael listed the "thirteen principles by which the Torah is expounded", which we say every morning in prayer, and said "the Torah speaks in human language". He was a Kohen, and when he was a child captive in Rome Rabbi Yehoshua ransomed him (Gittin 58a). He is not Rabbi Yishmael the High Priest, who by most opinions was his grandfather; his teachers were Rabbi Eliezer, Rabbi Yehoshua and Rabbi Nechunya ben HaKanah.'),
  }),
  p({
    slug: 'rabbi-chanina-ben-tradyon', name: L('רבי חנינא בן תרדיון', 'Rabbi Chanina ben Tradyon'), spot: 'רבי חנינא בן תרדיון',
    summary: L('שנשרף עטוף בספר תורה: "גווילין נשרפין ואותיות פורחות".', 'Who was burned wrapped in a Torah scroll: "The parchment is burning and the letters are flying".'),
    rel: [to('child', 'bruria')], sources: [L('עבודה זרה יז ע״ב – יח ע״א', 'Avodah Zarah 17b–18a'), AVOT('ג, ב')],
    sections: [
      sec('אותיות פורחות', 'רבי חנינא כינס קהילות ברבים ולימד תורה בגלוי בזמן הגזירה. הרומאים כרכו אותו בספר תורה ושרפו אותו, ושמו ספוגים של צמר על לבו כדי שימות לאט. תלמידיו שאלו מה הוא רואה, ואמר: "גווילין נשרפין ואותיות פורחות". הקלצטונירי שהסיר את הספוגים קפץ לאש אחריו, ויצאה בת קול: "רבי חנינא בן תרדיון וקלצטונירי מזומנין לחיי העולם הבא". בתו הייתה ברוריה, אשת רבי מאיר.', 'Flying Letters', 'Rabbi Chanina gathered congregations and taught Torah openly during the decree. The Romans wrapped him in a Torah scroll and burned him, and put tufts of wet wool on his heart so that he would die slowly. His students asked what he saw, and he said: "The parchment is burning and the letters are flying". The executioner who removed the wool jumped into the fire after him, and a heavenly voice said: "Rabbi Chanina ben Tradyon and the executioner are ready for the World to Come". His daughter was Bruria, the wife of Rabbi Meir.'),
      martyr(3),
    ],
  }),
  p({
    slug: 'ben-azai', name: L('שמעון בן עזאי', 'Shimon ben Azai'), spot: 'שמעון בן עזאי',
    summary: L('"נפשי חשקה בתורה"; מן הארבעה שנכנסו לפרדס.', '"My soul longs for Torah"; one of the four who entered the orchard.'),
    rel: [to('related', 'ben-zoma'), to('related', 'elisha-ben-avuya'), to('related', 'rabbi-akiva')], sources: [AVOT('ד, ב – ג'), L('יבמות סג ע״ב', 'Yevamot 63b'), L('חגיגה יד ע״ב', 'Chagigah 14b')],
    sections: one('בן עזאי', 'בן עזאי לא נשא אשה, ואמר: "מה אעשה, שנפשי חשקה בתורה; אפשר לעולם שיתקיים על ידי אחרים" (יבמות סג ע״ב). הוא אמר: "הוי רץ למצוה קלה ובורח מן העבירה, שמצוה גוררת מצוה ועבירה גוררת עבירה". הוא היה מן הארבעה שנכנסו לפרדס, "הציץ ומת".', 'Ben Azai', 'Ben Azai never married, and said: "What can I do, my soul longs for Torah; the world can be kept going by others" (Yevamot 63b). He said: "Run to do a minor mitzvah and flee from sin, for a mitzvah brings another mitzvah and a sin brings another sin". He was one of the four who entered the orchard, and "he gazed and died".'),
  }),
  p({
    slug: 'ben-zoma', name: L('שמעון בן זומא', 'Shimon ben Zoma'), spot: 'שמעון בן זומא',
    summary: L('"איזהו חכם? הלומד מכל אדם"; מן הארבעה שנכנסו לפרדס.', '"Who is wise? One who learns from every person"; one of the four who entered the orchard.'),
    rel: [to('related', 'ben-azai'), to('related', 'elisha-ben-avuya'), to('related', 'rabbi-akiva')], sources: [AVOT('ד, א'), L('ברכות נח ע״א', 'Berachot 58a'), L('חגיגה יד ע״ב – טו ע״א', 'Chagigah 14b–15a')],
    sections: one('בן זומא', 'בן זומא אמר: "איזהו חכם? הלומד מכל אדם; איזהו גיבור? הכובש את יצרו; איזהו עשיר? השמח בחלקו; איזהו מכובד? המכבד את הבריות". כשראה המון אנשים על הר הבית אמר: "ברוך שברא כל אלו לשמשני" – כמה יגיעה יגע אדם הראשון עד שמצא לחם לאכול (ברכות נח ע״א). הוא היה מן הארבעה שנכנסו לפרדס, "הציץ ונפגע".', 'Ben Zoma', 'Ben Zoma said: "Who is wise? One who learns from every person; who is strong? One who conquers his inclination; who is rich? One who is happy with his portion; who is honoured? One who honours others". When he saw crowds on the Temple Mount he said: "Blessed is He Who created all these to serve me" – how much Adam laboured until he found bread to eat (Berachot 58a). He was one of the four who entered the orchard, and "he gazed and was harmed".'),
  }),
  p({
    slug: 'rabbi-yehuda-ben-bava', name: L('רבי יהודה בן בבא', 'Rabbi Yehudah ben Bava'), spot: 'רבי יהודה בן בבא',
    summary: L('שמסר את נפשו כדי לסמוך חמישה זקנים.', 'Who gave his life to ordain five elders.'),
    rel: [to('related', 'rabbi-meir')], sources: [L('סנהדרין יד ע״א', 'Sanhedrin 14a'), L('בבא קמא קג ע״ב', 'Bava Kamma 103b')],
    sections: [sec('הסמיכה', 'הרומאים גזרו שכל מי שסומך ייהרג, וכל מי שנסמך ייהרג. רבי יהודה בן בבא ישב בין שני הרים גדולים, בין אושא לשפרעם, וסמך שם חמישה זקנים – רבי מאיר, רבי יהודה, רבי שמעון, רבי יוסי ורבי אלעזר בן שמוע. כשבאו הרומאים אמר להם לברוח, ואמר: "הריני מוטל לפניהם כאבן שאין לה הופכין", ולא זזו משם עד שנעצו בו שלוש מאות לונביאות של ברזל (סנהדרין יד ע״א).', 'The Ordination', 'The Romans decreed that whoever ordains would be killed, and whoever is ordained would be killed. Rabbi Yehudah ben Bava sat between two great mountains, between Usha and Shefaram, and ordained five elders there – Rabbi Meir, Rabbi Yehudah, Rabbi Shimon, Rabbi Yose and Rabbi Elazar ben Shamua. When the Romans came he told them to run, and said: "I lie before them like a stone that no one turns over", and they did not move from there until they had driven three hundred iron spears into him (Sanhedrin 14a).'), martyr(5)],
  }),
  p({
    slug: 'rabbi-yehuda-ben-dama', name: L('רבי יהודה בן דמא', 'Rabbi Yehudah ben Dama'), spot: 'רבי יהודה בן דמא',
    summary: L('השישי בעשרת הרוגי מלכות.', 'The sixth of the Ten Martyrs.'),
    rel: [], sources: [L('מדרש אלה אזכרה', 'Midrash Eileh Ezkerah'), L('איכה רבה ב, ב', 'Eichah Rabbah 2:2')],
    sections: [sec('רבי יהודה בן דמא', 'רבי יהודה בן דמא נזכר במדרשים על עשרת הרוגי מלכות, ומעבר לכך כמעט לא נשארו בידינו דברים בשמו. יש מקורות שבמקומו מונים את רבי יהודה הנחתום.', 'Rabbi Yehudah ben Dama', 'Rabbi Yehudah ben Dama is mentioned in the Midrashim on the Ten Martyrs, and beyond that hardly anything in his name has come down to us. Some sources count Rabbi Yehudah HaNachtom in his place.'), martyr(6)],
  }),
  p({
    slug: 'rabbi-chutzpit', name: L('רבי חוצפית המתורגמן', 'Rabbi Chutzpit the Interpreter'), spot: 'רבי חוצפית המתורגמן',
    summary: L('המתורגמן של רבן גמליאל ביבנה, מעשרת הרוגי מלכות.', 'Rabban Gamliel’s interpreter in Yavneh, one of the Ten Martyrs.'),
    rel: [to('related', 'rabban-gamliel-deyavne')], sources: [L('ברכות כז ע״ב', 'Berachot 27b'), L('קידושין לט ע״ב', 'Kiddushin 39b'), L('חולין קמב ע״א', 'Chullin 142a')],
    sections: [sec('המתורגמן', 'רבי חוצפית היה המתורגמן – מי שעמד ליד הדורש והשמיע את דבריו בקול לציבור. ביום שהעבירו את רבן גמליאל מן הנשיאות, החכמים אמרו לחוצפית המתורגמן "עמוד", והוא עמד (ברכות כז ע״ב). הגמרא מספרת שאלישע בן אבויה ראה את לשונו של רבי חוצפית מתגלגלת באשפה, ועל כך יצא לתרבות רעה.', 'The Interpreter', 'Rabbi Chutzpit was the interpreter – the one who stood by the teacher and called out his words aloud to the public. On the day Rabban Gamliel was removed from office, the sages told Chutzpit the interpreter "stand up", and he stood (Berachot 27b). The Gemara relates that Elisha ben Avuya saw Rabbi Chutzpit’s tongue lying in the dust, and because of that went astray.'), martyr(7)],
  }),
  p({
    slug: 'rabbi-chanina-ben-chachinai', name: L('רבי חנינא בן חכינאי', 'Rabbi Chanina ben Chachinai'), spot: 'רבי חנינא בן חכינאי',
    summary: L('תלמיד רבי עקיבא, מעשרת הרוגי מלכות.', 'Rabbi Akiva’s student, one of the Ten Martyrs.'),
    rel: [to('teacher', 'rabbi-akiva')], sources: [L('כתובות סב ע״ב', 'Ketubot 62b'), AVOT('ג, ד')],
    sections: [sec('רבי חנינא בן חכינאי', 'רבי חנינא בן חכינאי הלך ללמוד תורה אצל רבי עקיבא שתים עשרה שנה, כמו רבו (כתובות סב ע״ב). הוא אמר: "הנעור בלילה, והמהלך בדרך יחידי, ומפנה לבו לבטלה – הרי זה מתחייב בנפשו".', 'Rabbi Chanina ben Chachinai', 'Rabbi Chanina ben Chachinai went to learn Torah with Rabbi Akiva for twelve years, like his teacher (Ketubot 62b). He said: "One who stays awake at night, or walks alone on the road, and turns his heart to idleness – is liable for his life".'), martyr(8)],
  }),
  p({
    slug: 'rabbi-yeshevav', name: L('רבי ישבב הסופר', 'Rabbi Yeshevav the Scribe'), spot: 'רבי ישבב הסופר',
    summary: L('הסופר, מעשרת הרוגי מלכות.', 'The scribe, one of the Ten Martyrs.'),
    rel: [], sources: [L('חולין פז ע״א', 'Chullin 87a'), L('מדרש אלה אזכרה', 'Midrash Eileh Ezkerah')],
    sections: [sec('רבי ישבב', 'רבי ישבב הסופר נזכר בגמרא בכמה הלכות, ובמדרשים על עשרת הרוגי מלכות. הגמרא (חולין פז ע״א) מביאה את דבריו בדבר מתנות כהונה.', 'Rabbi Yeshevav', 'Rabbi Yeshevav the Scribe is mentioned in the Gemara in several laws, and in the Midrashim on the Ten Martyrs. The Gemara (Chullin 87a) brings his words about the priestly gifts.'), martyr(9)],
  }),
  p({
    slug: 'rabbi-chanina-ben-gamliel', name: L('רבי חנינא בן גמליאל', 'Rabbi Chanina son of Gamliel'), spot: 'רבי חנינא בן גמליאל',
    summary: L('בנו של רבן גמליאל דיבנה ואחי רבן שמעון בן גמליאל.', 'Son of Rabban Gamliel of Yavneh and brother of Rabban Shimon ben Gamliel.'),
    rel: [to('father', 'rabban-gamliel-deyavne'), to('sibling', 'rabban-shimon-ben-gamliel-2')], sources: [L('משנה מכות ג, טו', 'Mishnah Makkot 3:15'), L('מגילה כה ע״א', 'Megillah 25a')],
    sections: one('רבי חנינא בן גמליאל', 'רבי חנינא, בנו של רבן גמליאל, הוא שאמר במשנה (מכות ג, טו): "כל חייבי כריתות שלקו – נפטרו ידי כריתתן", ולמד מן הפסוק "ונקלה אחיך לעיניך" – משלקה הרי הוא כאחיך.', 'Rabbi Chanina son of Gamliel', 'Rabbi Chanina, son of Rabban Gamliel, is the one who said in the Mishnah (Makkot 3:15): "All who are liable to karet and received lashes are released from their karet", learning it from the verse "and your brother be degraded in your eyes" – once he is lashed, he is as your brother.'),
  }),
  p({
    slug: 'rabbi-pinchas-ben-yair', name: L('רבי פנחס בן יאיר', 'Rabbi Pinchas ben Yair'), spot: 'רבי פנחס בן יאיר',
    summary: L('החסיד שחמורו לא אכל טבל, ובעל "ברייתא דרבי פנחס בן יאיר".', 'The pious man whose donkey would not eat untithed food, author of "the Baraita of Rabbi Pinchas ben Yair".'),
    rel: [to('child', 'bat-rabbi-pinchas-ben-yair'), to('related', 'rabbi-shimon-bar-yochai')], sources: [L('עבודה זרה כ ע״ב', 'Avodah Zarah 20b'), L('חולין ז ע״א – ע״ב', 'Chullin 7a–b'), L('שבת לג ע״ב', 'Shabbat 33b'), L('זוהר, הקדמה', 'Zohar, Introduction')],
    sections: [
      sec('מדרגות החסידות', 'רבי פנחס בן יאיר אמר: "תורה מביאה לידי זהירות, זהירות מביאה לידי זריזות... ותחיית המתים באה על ידי אליהו זכור לטוב" (עבודה זרה כ ע״ב) – על דבריו נבנה הספר "מסילת ישרים". הגמרא מספרת שבדרכו לפדיון שבויים נחלק לפניו נהר גינאי, ושחמורו לא אכל שעורים שלא עושרו.', 'The Steps of Piety', 'Rabbi Pinchas ben Yair said: "Torah brings to watchfulness, watchfulness brings to zeal... and the resurrection of the dead comes through Eliyahu of blessed memory" (Avodah Zarah 20b) – the book "Mesillat Yesharim" is built on his words. The Gemara relates that on his way to ransom captives the river Ginai split before him, and that his donkey would not eat barley that had not been tithed.'),
      sec('ורבי שמעון בר יוחאי', 'בגמרא (שבת לג ע״ב) רבי פנחס בן יאיר נקרא חתנו של רבי שמעון בר יוחאי; ובזוהר הוא חמיו – אבי אשתו. באילן שלנו בתו נישאה לרבי שמעון.', 'And Rabbi Shimon bar Yochai', 'In the Gemara (Shabbat 33b) Rabbi Pinchas ben Yair is called Rabbi Shimon bar Yochai’s son-in-law; and in the Zohar he is his father-in-law – his wife’s father. On our tree his daughter married Rabbi Shimon.'),
    ],
  }),
  p({
    slug: 'rabbi-shimon-bar-yochai', name: L('רבי שמעון בר יוחאי', 'Rabbi Shimon bar Yochai'), spot: 'רבי שמעון בר יוחאי',
    summary: L('תלמיד רבי עקיבא, שישב במערה שלוש עשרה שנה עם בנו.', 'Rabbi Akiva’s student, who hid in a cave for thirteen years with his son.'),
    rel: [to('teacher', 'rabbi-akiva'), to('spouse', 'bat-rabbi-pinchas-ben-yair'), to('child', 'rabbi-elazar-berabbi-shimon'), to('student', 'rabbi-yehuda-hanasi'), to('related', 'rabbi-pinchas-ben-yair')],
    sources: [L('שבת לג ע״ב – לד ע״א', 'Shabbat 33b–34a'), L('ברכות לה ע״ב', 'Berachot 35b'), SANH86, L('מעילה יז ע״א – ע״ב', 'Meilah 17a–b')],
    sections: [
      sec('המערה', 'רבי שמעון דיבר נגד הרומאים, ונגזר עליו מוות. הוא ובנו רבי אלעזר הסתתרו במערה שתים עשרה שנה, ונברא להם עץ חרוב ומעיין מים, ועסקו בתורה כל היום. כשיצאו וראו אנשים חורשים וזורעים, אמרו: "מניחין חיי עולם ועוסקין בחיי שעה" – וכל מקום שנתנו בו עיניהם נשרף. יצאה בת קול: "להחריב עולמי יצאתם? חזרו למערתכם!", וישבו עוד שנה (שבת לג ע״ב). אחר כך טיהר את טבריה.', 'The Cave', 'Rabbi Shimon spoke against the Romans, and was sentenced to death. He and his son Rabbi Elazar hid in a cave for twelve years; a carob tree and a spring were created for them, and they occupied themselves with Torah all day. When they came out and saw people ploughing and sowing, they said: "They leave eternal life and occupy themselves with passing life" – and every place they looked at was burned. A heavenly voice came out: "Have you come out to destroy My world? Go back to your cave!", and they stayed another year (Shabbat 33b). Afterwards he purified Tiberias.'),
      STAM('רבי שמעון', 'ספרי', 'Sifrei'), REBBI_TEACHER,
    ],
  }),
  p({
    slug: 'rabbi-yehuda-bar-ilai', name: L('רבי יהודה בר אלעאי', 'Rabbi Yehudah bar Ilai'), spot: 'רבי יהודה בר אלעאי',
    summary: L('"ראש המדברים בכל מקום", תלמיד רבי עקיבא.', '"The first of the speakers everywhere", Rabbi Akiva’s student.'),
    rel: [to('teacher', 'rabbi-akiva'), to('child', 'rabbi-yose-berabbi-yehuda'), to('student', 'rabbi-yehuda-hanasi')], sources: [L('שבת לג ע״ב', 'Shabbat 33b'), L('נדרים מט ע״ב', 'Nedarim 49b'), SANH86, L('מנחות כט ע״ב', 'Menachot 29b')],
    sections: [
      sec('רבי יהודה', 'רבי יהודה שיבח את מעשי הרומאים בוויכוח בין החכמים, ולכן נקרא "ראש המדברים בכל מקום" (שבת לג ע״ב). הוא היה עני מאוד, ולו ולאשתו הייתה טלית אחת, שלבשו לסירוגין. כשהיה רואה כלה, היה מניח את לימודו ומשמח אותה. בכל מקום שנאמר "מעשה בחסיד אחד" – רבי יהודה בר אלעאי הוא, או רבי יהודה בן בבא.', 'Rabbi Yehudah', 'Rabbi Yehudah praised the works of the Romans in a debate among the sages, and so was called "the first of the speakers everywhere" (Shabbat 33b). He was very poor, and he and his wife had one cloak, which they wore in turns. When he saw a bride, he would put aside his learning and make her happy. Wherever it says "it happened with a certain pious man" – it is Rabbi Yehudah bar Ilai, or Rabbi Yehudah ben Bava.'),
      STAM('רבי יהודה', 'ספרא', 'Sifra'), REBBI_TEACHER,
    ],
  }),
  p({
    slug: 'rabbi-elazar-ben-shamua', cats: LV, name: L('רבי אלעזר בן שמוע', 'Rabbi Elazar ben Shamua'), spot: 'רבי אלעזר בן שמוע',
    summary: L('הכהן, תלמיד רבי עקיבא, האחרון בעשרת הרוגי מלכות.', 'The Kohen, Rabbi Akiva’s student, the last of the Ten Martyrs.'),
    rel: [to('teacher', 'rabbi-akiva'), to('student', 'rabbi-yehuda-hanasi')], sources: [AVOT('ד, יב'), L('מגילה כז ע״ב', 'Megillah 27b'), L('יבמות סב ע״ב', 'Yevamot 62b')],
    sections: [
      sec('רבי אלעזר בן שמוע', 'רבי אלעזר, שבגמרא נקרא בדרך כלל פשוט "רבי אלעזר", היה מחמשת הזקנים שסמך רבי יהודה בן בבא. הוא היה כהן, ונשאל במה האריך ימים, ואמר: "מימי לא עשיתי בית הכנסת קפנדריא, ולא פסעתי על ראשי עם קודש, ולא נשאתי כפי בלא ברכה" (מגילה כז ע״ב). הוא אמר: "יהי כבוד תלמידך חביב עליך כשלך".', 'Rabbi Elazar ben Shamua', 'Rabbi Elazar, usually called in the Gemara simply "Rabbi Elazar", was one of the five elders ordained by Rabbi Yehudah ben Bava. He was a Kohen, and when asked how he lived long, said: "I never made the synagogue a shortcut, I never stepped over the heads of the holy people, and I never raised my hands without a blessing" (Megillah 27b). He said: "Let your student’s honour be as dear to you as your own".'),
      martyr(10), REBBI_TEACHER,
    ],
  }),
  p({
    slug: 'rabbi-yehoshua-ben-korcha', name: L('רבי יהושע בן קרחה', 'Rabbi Yehoshua ben Korcha'), spot: 'רבי יהושע בן קרחה',
    summary: L('התנא שלפי דעה אחת היה בנו של רבי עקיבא.', 'The Tanna who by one opinion was Rabbi Akiva’s son.'),
    rel: [to('father', 'rabbi-akiva'), to('mother', 'rachel-eshet-rabbi-akiva')], sources: [L('תוספות שבת קנ ע״א', 'Tosafot, Shabbat 150a'), L('מגילה כח ע״א', 'Megillah 28a'), L('בבא מציעא פד ע״ב', 'Bava Metzia 84b')],
    sections: one('בן קרחה', 'באילן שלנו רבי יהושע בן קרחה הוא בנם של רבי עקיבא ורחל. זאת לפי דעת רבנו תם בתוספות (שבת קנ ע״א), שרבי יהושע בן קרחה היה בנו של רבי עקיבא, שנקרא "קרחה" – הקירח – משום שלא היו לו שערות בראשו. נשאל במה האריך ימים, ואמר: "מימי לא הסתכלתי בדמות אדם רשע" (מגילה כח ע״א).', 'Ben Korcha', 'On our tree Rabbi Yehoshua ben Korcha is the son of Rabbi Akiva and Rachel. This follows the opinion of Rabbeinu Tam in Tosafot (Shabbat 150a), that Rabbi Yehoshua ben Korcha was Rabbi Akiva’s son, Akiva being called "Korcha" – the bald one – since he had no hair on his head. Asked how he lived long, he said: "I never looked at the face of a wicked man" (Megillah 28a).'),
  }),
  p({
    slug: 'rabbi-meir', name: L('רבי מאיר בעל הנס', 'Rabbi Meir Baal HaNes'), spot: 'רבי מאיר',
    summary: L('"מאיר עיני חכמים בהלכה", תלמיד רבי עקיבא ואלישע בן אבויה, בעלה של ברוריה.', '"Lighting up the eyes of the sages in law", student of Rabbi Akiva and Elisha ben Avuya, husband of Bruria.'),
    rel: [to('teacher', 'rabbi-akiva'), to('teacher', 'elisha-ben-avuya'), to('spouse', 'bruria'), to('student', 'rabbi-yehuda-hanasi'), to('related', 'rabbi-yehuda-ben-bava')],
    sources: [L('עירובין יג ע״ב', 'Eruvin 13b'), SANH86, L('עבודה זרה יח ע״א – ע״ב', 'Avodah Zarah 18a–b'), L('חגיגה טו ע״ב', 'Chagigah 15b'), L('הוריות יג ע״ב', 'Horayot 13b')],
    sections: [
      sec('רבי מאיר', 'הגמרא (עירובין יג ע״ב) אומרת שלא רבי מאיר שמו אלא רבי נהוראי, "ולמה נקרא שמו רבי מאיר? שהוא מאיר עיני חכמים בהלכה". הוא היה החכם בדור אושא, לצד רבן שמעון בן גמליאל. כשהרומאים שמו את אחות אשתו, בת רבי חנינא בן תרדיון, בבית קלון, הציל אותה ואמר לשומר "אלהא דמאיר ענני" – ומכאן הכינוי "רבי מאיר בעל הנס".', 'Rabbi Meir', 'The Gemara (Eruvin 13b) says his name was not Rabbi Meir but Rabbi Nehorai, "and why was he called Rabbi Meir? Because he lit up (meir) the eyes of the sages in law". He was the Chacham in the generation of Usha, beside Rabban Shimon ben Gamliel. When the Romans put his wife’s sister, Rabbi Chanina ben Tradyon’s daughter, in a house of shame, he saved her and told the guard to say "G-d of Meir, answer me" – hence the name "Rabbi Meir Baal HaNes" (master of the miracle).'),
      STAM('רבי מאיר', 'משנה', 'Mishnah'), REBBI_TEACHER,
    ],
  }),
  w({
    slug: 'bruria', name: L('ברוריה', 'Bruria'), spot: 'ברוריה',
    summary: L('בת רבי חנינא בן תרדיון ואשת רבי מאיר, שלמדה "שלוש מאות שמועות ביום".', 'Daughter of Rabbi Chanina ben Tradyon and wife of Rabbi Meir, who learned "three hundred teachings a day".'),
    rel: [to('father', 'rabbi-chanina-ben-tradyon'), to('spouse', 'rabbi-meir')], sources: [L('ברכות י ע״א', 'Berachot 10a'), L('פסחים סב ע״ב', 'Pesachim 62b'), L('עירובין נג ע״ב – נד ע״א', 'Eruvin 53b–54a'), L('מדרש משלי לא', 'Midrash Mishlei 31')],
    sections: one('ברוריה', 'ברוריה הייתה חכמה גדולה: הגמרא אומרת שלמדה שלוש מאות שמועות ביום משלוש מאות רבנים (פסחים סב ע״ב). כשרבי מאיר התפלל שימותו בריונים שציערו אותו, אמרה לו: "יתמו חטאים – ולא חוטאים", והתפלל עליהם שיחזרו בתשובה (ברכות י ע״א). המדרש מספר שכשמתו שני בניהם בשבת, חיכתה עד מוצאי שבת וניחמה את בעלה: "ה׳ נתן וה׳ לקח".', 'Bruria', 'Bruria was a great scholar: the Gemara says she learned three hundred teachings a day from three hundred rabbis (Pesachim 62b). When Rabbi Meir prayed that some ruffians who troubled him would die, she told him: "Let sins cease – not sinners", and he prayed that they would repent (Berachot 10a). The Midrash relates that when their two sons died on Shabbat, she waited until after Shabbat and comforted her husband: "Hashem gave and Hashem took".'),
  }),
  p({
    slug: 'rabbi-yose-ben-chalafta', name: L('רבי יוסי בן חלפתא', 'Rabbi Yose ben Chalafta'), spot: 'רבי יוסי בן חלפתא',
    summary: L('"נימוקו עמו", תלמיד רבי עקיבא, מחבר "סדר עולם".', '"His reasoning is with him", Rabbi Akiva’s student, author of "Seder Olam".'),
    rel: [to('teacher', 'rabbi-akiva'), to('child', 'rabbi-yishmael-berabbi-yose'), to('student', 'rabbi-yehuda-hanasi')], sources: [L('גיטין סז ע״א', 'Gittin 67a'), L('יבמות פב ע״ב', 'Yevamot 82b'), L('ברכות ג ע״א', 'Berachot 3a'), L('שבת קיח ע״ב', 'Shabbat 118b')],
    sections: [
      sec('רבי יוסי', 'רבי יוסי בן חלפתא מציפורי היה מחמשת הזקנים שסמך רבי יהודה בן בבא. על דבריו אמרו "רבי יוסי נימוקו עמו" – יש טעם לכל דבריו, וההלכה כמותו נגד חבריו. הגמרא אומרת: "תנא סדר עולם – רבי יוסי", הספר שעליו מבוססות השנים באתר שלנו. הוא מספר שפגש את אליהו הנביא בחורבה בירושלים (ברכות ג ע״א).', 'Rabbi Yose', 'Rabbi Yose ben Chalafta of Tzippori was one of the five elders ordained by Rabbi Yehudah ben Bava. Of his words they said "Rabbi Yose’s reasoning is with him" – there is a reason for all he says, and the law follows him against his colleagues. The Gemara says: "Seder Olam was taught by Rabbi Yose" – the book on which the years on our site are based. He relates that he met Eliyahu the prophet in a ruin in Jerusalem (Berachot 3a).'),
      REBBI_TEACHER,
    ],
  }),
  p({
    slug: 'rabbi-nechemya', name: L('רבי נחמיה', 'Rabbi Nechemyah'), spot: 'רבי נחמיה',
    summary: L('תלמיד רבי עקיבא; "סתם תוספתא רבי נחמיה".', 'Rabbi Akiva’s student; "an unattributed Tosefta is Rabbi Nechemyah".'),
    rel: [to('teacher', 'rabbi-akiva')], sources: [SANH86, L('יבמות סב ע״ב', 'Yevamot 62b'), L('בראשית רבה', 'Bereishit Rabbah')],
    sections: [sec('רבי נחמיה', 'רבי נחמיה היה מתלמידי רבי עקיבא בדרום שחידשו את התורה אחרי שמתו עשרים וארבעה אלף תלמידיו (יבמות סב ע״ב). הוא מרבה להתווכח עם רבי יהודה במדרשי האגדה.', 'Rabbi Nechemyah', 'Rabbi Nechemyah was one of Rabbi Akiva’s students in the south who renewed the Torah after his twenty-four thousand students died (Yevamot 62b). He often debates Rabbi Yehudah in the Midrashim of aggadah.'), STAM('רבי נחמיה', 'תוספתא', 'Tosefta')],
  }),
  p({
    slug: 'rabbi-yochanan-hasandlar', name: L('רבי יוחנן הסנדלר', 'Rabbi Yochanan the Sandal-Maker'), spot: 'רבי יוחנן הסנדלר',
    summary: L('תלמיד רבי עקיבא: "כל כנסיה שהיא לשם שמים, סופה להתקיים".', 'Rabbi Akiva’s student: "Every assembly that is for the sake of Heaven will endure".'),
    rel: [to('teacher', 'rabbi-akiva')], sources: [AVOT('ד, יא'), L('ירושלמי יבמות יב, ה', 'Yerushalmi Yevamot 12:5')],
    sections: one('רבי יוחנן הסנדלר', 'רבי יוחנן התפרנס מתפירת סנדלים. הירושלמי מספר שכשרבי עקיבא היה אסור בבית הסוהר, התחפש לרוכל ועבר ליד החלון ושאל אותו הלכה. הוא אמר: "כל כנסיה שהיא לשם שמים, סופה להתקיים; ושאינה לשם שמים, אין סופה להתקיים".', 'Rabbi Yochanan HaSandlar', 'Rabbi Yochanan earned his living sewing sandals. The Yerushalmi relates that when Rabbi Akiva was in prison, he dressed as a pedlar and passed by the window and asked him a law. He said: "Every assembly that is for the sake of Heaven will endure; and one that is not for the sake of Heaven will not endure".'),
  }),
  p({
    slug: 'rabbi-elazar-berabbi-shimon', name: L('רבי אלעזר ברבי שמעון', 'Rabbi Elazar son of Rabbi Shimon'), spot: 'רבי אלעזר ברבי שמעון', spot2: 'רבי אלעזר ברבי שמעון',
    summary: L('בנו של רבי שמעון בר יוחאי, שישב עמו במערה.', 'Rabbi Shimon bar Yochai’s son, who stayed with him in the cave.'),
    rel: [to('father', 'rabbi-shimon-bar-yochai')], sources: [L('שבת לג ע״ב', 'Shabbat 33b'), L('בבא מציעא פג ע״ב – פד ע״ב', 'Bava Metzia 83b–84b')],
    sections: [...one('רבי אלעזר', 'רבי אלעזר ישב עם אביו במערה שלוש עשרה שנה. אחר כך שימש בשלטון הרומאי בתפיסת גנבים, ורבי יהושע בן קרחה שלח אליו: "חומץ בן יין, עד מתי אתה מוסר עמו של אלוקינו להריגה?" (בבא מציעא פג ע״ב). הגמרא מספרת על ייסוריו שקיבל באהבה, ושגופו לא נרקב שנים רבות אחרי מותו.', 'Rabbi Elazar', 'Rabbi Elazar stayed with his father in the cave for thirteen years. Later he served the Roman government catching thieves, and Rabbi Yehoshua ben Korcha sent to him: "Vinegar son of wine, how long will you hand over the people of our G-d to be killed?" (Bava Metzia 83b). The Gemara tells of the sufferings he accepted with love, and that his body did not decay for many years after his death.'), sec('מאחרוני התנאים', 'הוא היה מחכמי הדור האחרון של התנאים, בני דורו של רבי, שמהם קיבלו האמוראים הראשונים.', 'Of the Last Tannaim', 'He was one of the sages of the last generation of the Tannaim, of Rebbi’s generation, from whom the first Amoraim received.')],
  }),
  p({
    slug: 'rabbi-yose-berabbi-yehuda', name: L('רבי יוסי ברבי יהודה', 'Rabbi Yose son of Rabbi Yehudah'), spot: 'רבי יוסי ברבי יהודה', spot2: 'רבי יוסי ברבי יהודה',
    summary: L('בנו של רבי יהודה בר אלעאי.', 'Son of Rabbi Yehudah bar Ilai.'),
    rel: [to('father', 'rabbi-yehuda-bar-ilai')], sources: [AVOT('ד, כ'), L('שבת קיט ע״ב', 'Shabbat 119b')],
    sections: [...one('רבי יוסי ברבי יהודה', 'רבי יוסי ברבי יהודה איש כפר הבבלי אמר: "הלומד מן הקטנים – למה הוא דומה? לאוכל ענבים קהות ושותה יין מגתו; והלומד מן הזקנים – לאוכל ענבים בשולות ושותה יין ישן". הגמרא (שבת קיט ע״ב) מביאה בשמו את מעשה שני מלאכי השרת המלווים את האדם בערב שבת מבית הכנסת לביתו.', 'Rabbi Yose son of Rabbi Yehudah', 'Rabbi Yose son of Rabbi Yehudah of Kfar HaBavli said: "One who learns from the young – what is he like? Like one who eats unripe grapes and drinks wine from the press; and one who learns from the old – like one who eats ripe grapes and drinks old wine". The Gemara (Shabbat 119b) brings in his name the two ministering angels who accompany a person on Friday night from the synagogue to his home.'), sec('מאחרוני התנאים', 'הוא היה מחכמי הדור האחרון של התנאים, בני דורו של רבי, שמהם קיבלו האמוראים הראשונים.', 'Of the Last Tannaim', 'He was one of the sages of the last generation of the Tannaim, of Rebbi’s generation, from whom the first Amoraim received.')],
  }),
  p({
    slug: 'rabbi-yishmael-berabbi-yose', name: L('רבי ישמעאל ברבי יוסי', 'Rabbi Yishmael son of Rabbi Yose'), spot: 'רבי ישמעאל ברבי יוסי', spot2: 'רבי ישמעאל ברבי יוסי',
    summary: L('בנו של רבי יוסי בן חלפתא, חברו של רבי.', 'Son of Rabbi Yose ben Chalafta, a colleague of Rebbi.'),
    rel: [to('father', 'rabbi-yose-ben-chalafta'), to('related', 'rabbi-yehuda-hanasi'), to('sibling', 'rabbi-menachem-berabbi-yose'), to('student', 'rabbi-chanina-bar-chama')], sources: [AVOT('ד, ז – ח'), L('בבא מציעא פד ע״א', 'Bava Metzia 84a')],
    sections: [...one('רבי ישמעאל ברבי יוסי', 'רבי ישמעאל ברבי יוסי מסר בפני רבי את דברי אביו, ואמר: "החושך עצמו מן הדין, פורק ממנו איבה וגזל ושבועת שוא". הגמרא מספרת שגם הוא, כמו רבי אלעזר ברבי שמעון, נתמנה לתפוס גנבים בשלטון הרומאים.', 'Rabbi Yishmael son of Rabbi Yose', 'Rabbi Yishmael son of Rabbi Yose handed down his father’s words before Rebbi, and said: "One who refrains from judging removes from himself enmity, robbery and false oaths". The Gemara relates that he too, like Rabbi Elazar son of Rabbi Shimon, was appointed to catch thieves for the Roman government.'), sec('מאחרוני התנאים', 'הוא היה מחכמי הדור האחרון של התנאים, בני דורו של רבי, שמהם קיבלו האמוראים הראשונים. אחיו היה רבי מנחם ברבי יוסי, ותלמידו רבי חנינא בר חמא.', 'Of the Last Tannaim', 'He was one of the sages of the last generation of the Tannaim, of Rebbi’s generation, from whom the first Amoraim received. His brother was Rabbi Menachem son of Rabbi Yose, and his student Rabbi Chanina bar Chama.')],
  }),
];

// the families
const families = [
  p({
    slug: 'harkinas', name: L('הרכינס', 'Harkinas'), spot: 'הרכינס',
    summary: L('אבי רבי יונתן ורבי דוסא בני הרכינס.', 'Father of Rabbi Yonatan and Rabbi Dosa, sons of Harkinas.'),
    rel: [to('child', 'rabbi-yonatan-ben-harkinas'), to('child', 'rabbi-dosa-ben-harkinas')], sources: [L('יבמות טז ע״א', 'Yevamot 16a')],
    sections: one('הרכינס', 'הרכינס הוא אביהם של שני חכמים: רבי דוסא בן הרכינס ורבי יונתן בן הרכינס. עליו עצמו לא נשארו בידינו דברים.', 'Harkinas', 'Harkinas was the father of two sages: Rabbi Dosa ben Harkinas and Rabbi Yonatan ben Harkinas. Nothing about him himself has come down to us.'),
  }),
  w({
    slug: 'bat-rabban-gamliel', name: L('בת רבן גמליאל', 'Daughter of Rabban Gamliel'), spot: 'בת רבן גמליאל',
    summary: L('בתו של רבן גמליאל הזקן, אשת רבי שמעון בן נתנאל.', 'Daughter of Rabban Gamliel the Elder, wife of Rabbi Shimon ben Netanel.'),
    rel: [to('father', 'rabban-gamliel-hazaken'), to('spouse', 'rabbi-shimon-ben-netanel')], sources: [L('תוספתא עבודה זרה ג, י', 'Tosefta Avodah Zarah 3:10')],
    sections: one('בת רבן גמליאל', 'התוספתא מספרת על בתו של רבן גמליאל שהייתה נשואה לשמעון בן נתנאל הכהן.', 'Rabban Gamliel’s Daughter', 'The Tosefta tells of Rabban Gamliel’s daughter who was married to Shimon ben Netanel the Kohen.'),
  }),
  w({
    slug: 'rachel-eshet-rabbi-akiva', name: L('רחל אשת רבי עקיבא', 'Rachel, wife of Rabbi Akiva'), spot: 'רחל אשת רבי עקיבא',
    summary: L('בת כלבא שבוע, שנישאה לרבי עקיבא בתנאי שילך ללמוד תורה.', 'Kalba Savua’s daughter, who married Rabbi Akiva on condition that he go to learn Torah.'),
    rel: [to('spouse', 'rabbi-akiva'), to('child', 'rabbi-yehoshua-ben-korcha')], sources: [L('כתובות סב ע״ב – סג ע״א', 'Ketubot 62b–63a'), L('נדרים נ ע״א', 'Nedarim 50a')],
    sections: one('"שלי ושלכם שלה הוא"', 'רחל, בתו של כלבא שבוע העשיר, ראתה שעקיבא הרועה צנוע ומעולה, ונישאה לו בתנאי שילך ללמוד תורה. אביה הדיר אותה מכל נכסיו, והם חיו בעוני גדול. עקיבא למד עשרים וארבע שנים, וחזר עם עשרים וארבעה אלף תלמידים. כשרחל באה לקראתו ותלמידיו רצו לדחות אותה, אמר להם: "הניחו לה; שלי ושלכם – שלה הוא" (כתובות סג ע״א).', '"Mine and Yours Are Hers"', 'Rachel, daughter of the wealthy Kalba Savua, saw that Akiva the shepherd was modest and excellent, and married him on condition that he go to learn Torah. Her father vowed she would have none of his property, and they lived in great poverty. Akiva learned twenty-four years, and came back with twenty-four thousand students. When Rachel came towards him and his students wanted to push her away, he told them: "Leave her; what is mine and what is yours – is hers" (Ketubot 63a).'),
  }),
  w({
    slug: 'bat-rabbi-pinchas-ben-yair', name: L('בת רבי פנחס בן יאיר', 'Daughter of Rabbi Pinchas ben Yair'), spot: 'בת רבי פנחס בן יאיר',
    summary: L('בתו של רבי פנחס בן יאיר, שלפי הזוהר נישאה לרבי שמעון בר יוחאי.', 'Rabbi Pinchas ben Yair’s daughter, who according to the Zohar married Rabbi Shimon bar Yochai.'),
    rel: [to('father', 'rabbi-pinchas-ben-yair'), to('spouse', 'rabbi-shimon-bar-yochai')], sources: [L('זוהר, הקדמה', 'Zohar, Introduction'), L('שבת לג ע״ב', 'Shabbat 33b')],
    sections: one('בת רבי פנחס', 'באילן שלנו היא אשת רבי שמעון בר יוחאי. זה כדברי הזוהר, שרבי פנחס היה חמיו של רבי שמעון. בגמרא (שבת לג ע״ב) רבי פנחס נקרא חתנו של רבי שמעון. שמה לא נשמר.', 'Rabbi Pinchas’s Daughter', 'On our tree she is the wife of Rabbi Shimon bar Yochai. This follows the Zohar, that Rabbi Pinchas was Rabbi Shimon’s father-in-law. In the Gemara (Shabbat 33b) Rabbi Pinchas is called Rabbi Shimon’s son-in-law. Her name has not been kept.'),
  }),
];

module.exports = { sages, families, MARTYR: martyr };
