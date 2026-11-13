// The Talmud tree, third band: the third generation of the Amoraim, with
// their families. Teachers and students follow the poster's lines.
const { L, sec, to } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const CAT = {
  't2-sura': 'amoraim-sura', 't2-nehardea': 'amoraim-nehardea', 't2-tveria': 'amoraim-tveria', 't2-eretz': 'amoraim-eretz',
  't2-bavel': 'amoraim-bavel', 't2-reshgaluta': 'amoraim-rashei-hagola', 't2-nesiim': 'nesiim',
};
const A = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  let cats = e.cats || (row[2] === 'name' ? ['amoraim-family'] : [CAT[row[1]]]);
  if (row[1] === 't2-reshgaluta' && row[2] === 'box' && !cats.includes('rashei-hagola')) cats = [...cats, 'rashei-hagola'];
  return { gender: 'male', roles: [], ...e, cats, color: row[1] };
};
const F = (e) => A({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const GEN3 = L('אמורא, דור ג׳', 'Amora, 3rd generation');
const KOLELET = L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)');
const NECHUTA = L('נחותי', 'Nechuta (travelled between the Land of Israel and Bavel)');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const TS = (he, en) => sec('רבותיו ותלמידיו', he, 'Teachers and Students', en);
const NECHUTEI = 'היה מן ה"נחותי" – החכמים שהלכו ושבו בין ארץ ישראל לבבל והעבירו את תורת כל אחת מהן לחברתה.';
const NECHUTEI_EN = 'He was one of the "Nechutei" – the sages who went back and forth between the Land of Israel and Bavel and carried the Torah of each to the other.';

module.exports = [
  // ── the Land of Israel ──
  A({
    slug: 'rabbi-yehuda-nesia-2', spot2: 'רבי יהודה נשיאה ב׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN3, L('נשיא', 'Nasi')],
    name: L('רבי יהודה נשיאה השני', 'Rabbi Yehudah Nesiah II'),
    summary: L('בנו של רבן גמליאל הרביעי, הנשיא בימי רבי אמי ורבי אסי.', 'Son of Rabban Gamliel IV, the Nasi in the days of Rabbi Ami and Rabbi Assi.'),
    rel: [to('father', 'rabban-gamliel-4'), to('teacher', 'rabbi-yochanan')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4060, to: 4090, before: ['rabban-gamliel-4'], after: [L('הלל נשיאה', 'Hillel Nesiah')] }],
    sources: [TTA],
    sections: [
      sec('רבי יהודה נשיאה', 'רבי יהודה נשיאה השני, בנו של רבן גמליאל הרביעי, עמד בראש הנשיאות כשלושים שנה. בימיו גברו לחצי השלטון הרומי על יהודי ארץ ישראל, וחכמי טבריה – רבי אמי ורבי אסי – הנהיגו את לימוד התורה. אחריו עמד בנו, הלל נשיאה.', 'Rabbi Yehudah Nesiah', 'Rabbi Yehudah Nesiah II, son of Rabban Gamliel IV, headed the patriarchate for about thirty years. In his days the pressures of Roman rule on the Jews of the Land of Israel grew, and the sages of Tiberias – Rabbi Ami and Rabbi Assi – led Torah learning. After him came his son, Hillel Nesiah.'),
      TS('רבו היה רבי יוחנן.', 'His teacher was Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rabbi-abahu', spot2: 'רבי אבהו', roles: [GEN3, L('ראש ישיבת קיסריה', 'Head of the Yeshivah of Caesarea')],
    name: L('רבי אבהו', 'Rabbi Abahu'),
    summary: L('ראש ישיבת קיסריה, שהיה מקורב למלכות ונודע בענוותנותו.', 'Head of the Yeshivah of Caesarea, close to the government and known for his humility.'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-yose-bar-chanina')], sources: [L('סוטה מ ע״א', 'Sotah 40a'), L('תענית כג ע״ב – כד ע״א', 'Taanit 23b–24a'), L('חגיגה יד ע״א', 'Chagigah 14a')],
    sections: [
      sec('רבי אבהו', 'רבי אבהו עמד בראש הישיבה בקיסריה, והיה מקורב לשלטון הרומי ויפה תואר. הגמרא (סוטה מ ע״א) מספרת שרבי אבהו ורבי חייא בר אבא באו לעיר אחת; רבי אבהו דרש אגדה ורבי חייא הלכה, וכל העם עזבו את רבי חייא ובאו לשמוע את רבי אבהו. רבי אבהו פייס אותו במשל: "שני בני אדם – אחד מוכר אבנים טובות ואחד מוכר מיני סדקית; על מי קופצים? לא על זה שמוכר מיני סדקית?".', 'Rabbi Abahu', 'Rabbi Abahu headed the yeshivah in Caesarea, and was close to the Roman government and handsome. The Gemara (Sotah 40a) relates that Rabbi Abahu and Rabbi Chiya bar Abba came to a town; Rabbi Abahu taught aggadah and Rabbi Chiya halachah, and all the people left Rabbi Chiya and came to hear Rabbi Abahu. Rabbi Abahu appeased him with a parable: "Two men – one sells precious stones and one sells small wares; on whom do people jump? Not on the one who sells small wares?".'),
      TS('רבותיו היו רבי יוחנן ורבי יוסי בר חנינא.', 'His teachers were Rabbi Yochanan and Rabbi Yose bar Chanina.'),
    ],
  }),
  A({
    slug: 'rabbi-abba-1', spot2: 'רבי אבא א׳', roles: [GEN3],
    name: L('רבי אבא', 'Rabbi Abba'), summary: L('חכם בבלי שעלה לארץ ישראל, תלמיד רב הונא ורבי יוחנן.', 'A Babylonian sage who went up to the Land of Israel, student of Rav Huna and Rabbi Yochanan.'),
    rel: [to('teacher', 'rav-huna'), to('teacher', 'rabbi-yochanan')], sources: [L('ברכות כד ע״ב', 'Berachot 24b'), TTA],
    sections: [
      sec('רבי אבא', 'רבי אבא למד בבבל לפני רב הונא, ועלה לארץ ישראל, ושם למד לפני רבי יוחנן. באילן יש כמה חכמים בשם רבי אבא, והם ממוספרים; זהו הראשון שבהם.', 'Rabbi Abba', 'Rabbi Abba learned in Bavel before Rav Huna, and went up to the Land of Israel, where he learned before Rabbi Yochanan. On our tree there are several sages named Rabbi Abba, and they are numbered; this is the first of them.'),
      TS('רבותיו היו רב הונא ורבי יוחנן.', 'His teachers were Rav Huna and Rabbi Yochanan.'),
    ],
  }),
  A({
    slug: 'rabbi-shmuel-bar-rav-yitzhak', spot2: 'רבי שמואל בר רב יצחק', roles: [GEN3],
    name: L('רבי שמואל בר רב יצחק', 'Rabbi Shmuel bar Rav Yitzhak'),
    summary: L('שהיה מרקד לפני הכלה בשלושה הדסים.', 'Who would dance before the bride with three myrtle branches.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('teacher', 'rabbi-chiya-bar-abba'), to('teacher', 'rav-huna')], sources: [L('כתובות יז ע״א', 'Ketubot 17a'), TTA],
    sections: [
      sec('מרקד בתלת', 'הגמרא (כתובות יז ע״א) מספרת שרבי שמואל בר רב יצחק היה מרקד לפני הכלה בשלושה הדסים, ורבי זירא אמר "קא מכסיף לן סבא"; כשנפטר, הפסיק עמוד אש בינו לבין כל העולם – כי כך כבד את השמחה.', 'Dancing with Three', 'The Gemara (Ketubot 17a) relates that Rabbi Shmuel bar Rav Yitzhak would dance before the bride with three myrtle branches, and Rabbi Zeira said "the old man is shaming us"; when he died, a pillar of fire separated him from the whole world – for so he had honoured the joy.'),
      TS('רבותיו היו רב, רבי חייא בר אבא ורב הונא.', 'His teachers were Rav, Rabbi Chiya bar Abba and Rav Huna.'),
    ],
  }),
  // ── Tiberias ──
  A({
    slug: 'rabbi-yitzhak-ben-pinchas', spot2: 'רבי יצחק בן פנחס', roles: [GEN3],
    name: L('רבי יצחק בן פנחס', 'Rabbi Yitzhak ben Pinchas'), summary: L('מתלמידי רבי יוחנן בטבריה.', 'One of Rabbi Yochanan’s students in Tiberias.'),
    rel: [to('teacher', 'rabbi-yochanan')], sources: [TTA],
    sections: [TS('רבי יצחק בן פנחס היה מתלמידי רבי יוחנן.', 'Rabbi Yitzhak ben Pinchas was one of Rabbi Yochanan’s students.')],
  }),
  A({
    slug: 'ulla', spot2: 'עולא בן ישמעאל', roles: [GEN3, NECHUTA],
    name: L('עולא', 'Ulla'), summary: L('מגדולי ה"נחותי", תלמיד רבי יוחנן, שהביא את תורת ארץ ישראל לבבל.', 'One of the greatest of the "Nechutei", Rabbi Yochanan’s student, who brought the Torah of the Land of Israel to Bavel.'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-elazar-ben-pedat')], sources: [L('ברכות נא ע״ב', 'Berachot 51b'), L('כתובות קיא ע״א', 'Ketubot 111a'), L('שבת קמה ע״ב', 'Shabbat 145b')],
    sections: [
      sec('עולא', 'עולא היה רגיל לרדת מארץ ישראל לבבל ולמסור שם את דברי חכמי ארץ ישראל. הוא היה אורח בבית רב נחמן, ולא שלח לילתא מכוס של ברכה, והיא שברה ארבע מאות כדי יין (ברכות נא ע״ב). הוא נפטר בחוץ לארץ, וכשבכה על כך אמרו לו "ארונך יבוא אחריך" (כתובות קיא ע״א).', 'Ulla', 'Ulla used to go down from the Land of Israel to Bavel and hand down there the words of the sages of the Land of Israel. He was a guest in Rav Nachman’s house, and did not send Yalta from the cup of blessing, and she broke four hundred jars of wine (Berachot 51b). He died outside the Land, and when he wept over it they told him "your coffin will follow you" (Ketubot 111a).'),
      TS(`רבותיו היו רבי יוחנן ורבי אלעזר, והוא ${NECHUTEI}`, `His teachers were Rabbi Yochanan and Rabbi Elazar. ${NECHUTEI_EN}`),
    ],
  }),
  A({
    slug: 'rabbi-assi', spot2: 'רבי אסי', roles: [GEN3],
    name: L('רבי אסי', 'Rabbi Assi'), summary: L('חברו של רבי אמי, "כהני דארעא דישראל".', 'Rabbi Ami’s companion, "the Kohanim of the Land of Israel".'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-yitzhak-nafcha'), to('teacher', 'rabbi-elazar-ben-pedat'), to('plugta', 'rabbi-ami')],
    sources: [L('מגילה כב ע״א', 'Megillah 22a'), L('בבא קמא ס ע״ב', 'Bava Kamma 60b'), TTA],
    sections: [
      sec('רבי אמי ורבי אסי', 'רבי אסי עלה מבבל, ועם חברו רבי אמי נקראו "דייני ארץ ישראל" ו"כהני ארץ ישראל" (מגילה כב ע״א). השניים עמדו יחד בראש החכמים בטבריה אחרי פטירת רבי אלעזר.', 'Rabbi Ami and Rabbi Assi', 'Rabbi Assi came up from Bavel, and with his companion Rabbi Ami they were called "the judges of the Land of Israel" and "the Kohanim of the Land of Israel" (Megillah 22a). The two together led the sages in Tiberias after Rabbi Elazar’s death.'),
      TS('רבותיו היו רבי יוחנן, רבי יצחק נפחא ורבי אלעזר, וחברו לתורה היה רבי אמי.', 'His teachers were Rabbi Yochanan, Rabbi Yitzhak Nafcha and Rabbi Elazar, and his study partner was Rabbi Ami.'),
    ],
  }),
  A({
    slug: 'rabbi-ami', spot2: 'רבי אמי בן נתן', roles: [GEN3, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias')],
    name: L('רבי אמי', 'Rabbi Ami'), summary: L('ראש ישיבת טבריה אחרי רבי אלעזר, חברו של רבי אסי.', 'Head of the Yeshivah of Tiberias after Rabbi Elazar, Rabbi Assi’s companion.'),
    rel: [to('teacher', 'rabbi-oshaya-rabba'), to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-elazar-ben-pedat'), to('plugta', 'rabbi-assi')],
    offices: [HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', 4039, 4070, ['rabbi-elazar-ben-pedat'], [L('רבי ירמיה', 'Rabbi Yirmeyah')])],
    sources: [L('מגילה כב ע״א', 'Megillah 22a'), L('בבא בתרא ח ע״א', 'Bava Batra 8a'), TTA],
    sections: [
      sec('רבי אמי', 'רבי אמי, כהן, עמד בראש ישיבת טבריה אחרי רבי אלעזר. הגמרא (בבא בתרא ח ע״א) מספרת שחייב את בני העיר לבנות חומה, והלך עם רבי אסי לבדוק את העיירות בארץ ישראל ולהעמיד בהן מלמדי תינוקות.', 'Rabbi Ami', 'Rabbi Ami, a Kohen, headed the Yeshivah of Tiberias after Rabbi Elazar. The Gemara relates that he went with Rabbi Assi to inspect the towns of the Land of Israel and to set up teachers of children in them.'),
      TS('רבותיו היו רבי אושעיא, רבי יוחנן ורבי אלעזר, ואחרי רבי אלעזר עמד בראש הישיבה. חברו לתורה היה רבי אסי.', 'His teachers were Rabbi Oshaya, Rabbi Yochanan and Rabbi Elazar, and after Rabbi Elazar he headed the yeshivah. His study partner was Rabbi Assi.'),
    ],
  }),
  A({
    slug: 'rabba-bar-bar-chana', spot2: 'רבה בר בר חנה', roles: [GEN3, NECHUTA],
    name: L('רבה בר בר חנה', 'Rabba bar bar Chana'), summary: L('בעל הסיפורים המופלאים על מסעותיו.', 'The teller of the wondrous tales of his travels.'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rabbi-elazar-ben-pedat'), maybe('related', 'rabba-bar-chana')],
    sources: [L('בבא בתרא עג ע״א – עד ע״ב', 'Bava Batra 73a–74b'), TTA],
    sections: [
      sec('אגדות רבה בר בר חנה', 'הגמרא (בבא בתרא עג ע״א – עד ע״ב) מביאה את סיפוריו המופלאים של רבה בר בר חנה: על הגל שגובהו שלוש מאות פרסה, על הדג שחשבוהו לאי, על האווזים השמנים, ועל מתי מדבר. המפרשים הסבירו שאלה משלים ורמזים לסודות התורה.', 'The Tales of Rabba bar bar Chana', 'The Gemara (Bava Batra 73a–74b) brings Rabba bar bar Chana’s wondrous tales: of the wave three hundred parasangs high, of the fish they took for an island, of the fat geese, and of the dead of the wilderness. The commentators explained these as parables and hints at the secrets of the Torah.'),
      TS(`רבותיו היו רבי יוחנן ורבי אלעזר, והוא ${NECHUTEI} יש דעה שהוא רבה בר חנה, בן אחיו של רבי חייא, ששמו נכתב בקיצור – ולכן הם מקושרים בסימן שאלה.`, `His teachers were Rabbi Yochanan and Rabbi Elazar. ${NECHUTEI_EN} There is an opinion that he is Rabba bar Chana, Rabbi Chiya’s nephew, with his name written short – so they are linked with a question mark.`),
    ],
  }),
  A({
    slug: 'rabbi-zeira', spot2: 'רבי זירא', roles: [GEN3],
    name: L('רבי זירא', 'Rabbi Zeira'), summary: L('שעלה מבבל וצם מאה תעניות כדי לשכוח את תלמודו הבבלי.', 'Who came up from Bavel and fasted a hundred fasts to forget his Babylonian learning.'),
    rel: [to('teacher', 'rabbi-yochanan'), to('teacher', 'rav-huna')], sources: [L('בבא מציעא פה ע״א', 'Bava Metzia 85a'), L('מגילה כח ע״א', 'Megillah 28a'), L('ברכות כד ע״ב', 'Berachot 24b')],
    sections: [
      sec('מאה תעניות', 'רבי זירא למד בבבל לפני רב הונא, ועלה לארץ ישראל אף שרב יהודה התנגד לכך. הגמרא (בבא מציעא פה ע״א) מספרת שצם מאה תעניות כדי לשכוח את התלמוד הבבלי, כדי ללמוד את תורת ארץ ישראל בדרכה. כשנשאל במה האריך ימים, אמר: "מימי לא הקפדתי בתוך ביתי, ולא צעדתי בפני מי שגדול ממני" (מגילה כח ע״א).', 'A Hundred Fasts', 'Rabbi Zeira learned in Bavel before Rav Huna, and went up to the Land of Israel although Rav Yehudah opposed it. The Gemara (Bava Metzia 85a) relates that he fasted a hundred fasts to forget the Babylonian Talmud, so as to learn the Torah of the Land of Israel in its own way. Asked how he lived long, he said: "I was never strict within my house, and I never walked ahead of one greater than me" (Megillah 28a).'),
      TS('רבותיו היו רב הונא בבבל ורבי יוחנן בארץ ישראל.', 'His teachers were Rav Huna in Bavel and Rabbi Yochanan in the Land of Israel.'),
    ],
  }),
  A({
    slug: 'rav-chanina-achi-rabba', spot2: 'רב חנינא (אחי רבה?)', roles: [GEN3],
    name: L('רב חנינא (אחי רבה?)', 'Rav Chanina (Rabba’s brother?)'), summary: L('אולי אחיו של רבה בר נחמני; עלה לארץ ישראל.', 'Perhaps Rabba bar Nachmani’s brother; he went up to the Land of Israel.'),
    rel: [maybe('father', 'nachmani'), maybe('sibling', 'rabba'), maybe('sibling', 'kaylil'), to('sibling', 'rav-oshaya-achi-rabba'), to('teacher', 'rabbi-yochanan')], sources: [L('פסחים קיג ע״ב', 'Pesachim 113b'), L('כתובות קיא ע״א', 'Ketubot 111a')],
    sections: [
      sec('רב חנינא ורב אושעיא', 'רב חנינא ורב אושעיא עלו לארץ ישראל ולמדו לפני רבי יוחנן, והתפרנסו מתפירת מנעלים (פסחים קיג ע״ב). אחיהם רבה נשאר בבבל, ושלחו לו לעלות אחריהם.', 'Rav Chanina and Rav Oshaya', 'Rav Chanina and Rav Oshaya went up to the Land of Israel and learned before Rabbi Yochanan, earning their living by making shoes (Pesachim 113b). Their brother Rabba stayed in Bavel, and they sent him to come up after them.'),
      sec('סימן השאלה', 'באילן שלנו רב חנינא ורב אושעיא הם בניו של נחמני ואחיו של רבה בסימן שאלה, משום שלא ודאי שהם אחיו של רבה.', 'The Question Mark', 'On our tree Rav Chanina and Rav Oshaya are Nachmani’s sons and Rabba’s brothers with a question mark, since it is not certain that they were Rabba’s brothers.'),
    ],
  }),
  A({
    slug: 'rav-oshaya-achi-rabba', spot2: 'רב אושעיא', roles: [GEN3],
    name: L('רב אושעיא (אחי רבה?)', 'Rav Oshaya (Rabba’s brother?)'), summary: L('אולי אחיו של רבה בר נחמני; עלה לארץ ישראל ולמד לפני רבי יוחנן.', 'Perhaps Rabba bar Nachmani’s brother; he went up to the Land of Israel and learned before Rabbi Yochanan.'),
    rel: [maybe('father', 'nachmani'), maybe('sibling', 'rabba'), maybe('sibling', 'kaylil'), to('teacher', 'rabbi-yochanan')], sources: [L('פסחים קיג ע״ב', 'Pesachim 113b')],
    sections: [TS('רב אושעיא עלה לארץ ישראל עם אחיו רב חנינא, ולמד לפני רבי יוחנן.', 'Rav Oshaya went up to the Land of Israel with his brother Rav Chanina, and learned before Rabbi Yochanan.'), sec('סימן השאלה', 'באילן שלנו רב אושעיא ורב חנינא הם בניו של נחמני ואחיו של רבה בסימן שאלה, משום שלא ודאי שהם אחיו של רבה.', 'The Question Mark', 'On our tree Rav Oshaya and Rav Chanina are Nachmani’s sons and Rabba’s brothers with a question mark, since it is not certain that they were Rabba’s brothers.')],
  }),
  // ── Sura ──
  A({
    slug: 'rav-acha-bar-yaakov', spot2: 'רב אחא בר יעקב', roles: [GEN3],
    name: L('רב אחא בר יעקב', 'Rav Acha bar Yaakov'), summary: L('תלמיד רב הונא, שהתגבר על השד שבבית מדרשו של אביי.', 'Rav Huna’s student, who overcame the demon in Abaye’s study hall.'),
    rel: [to('teacher', 'rav-huna')], sources: [L('קידושין כט ע״ב', 'Kiddushin 29b'), TTA],
    sections: [
      sec('רב אחא בר יעקב', 'הגמרא (קידושין כט ע״ב) מספרת שבבית מדרשו של אביי היה שד מזיק, ואביי דאג שרב אחא בר יעקב ילון שם; נראה לו השד כתנין בעל שבעה ראשים, ובכל כריעה שכרע בתפילה נפל אחד מראשיו.', 'Rav Acha bar Yaakov', 'The Gemara (Kiddushin 29b) relates that there was a harmful demon in Abaye’s study hall, and Abaye arranged for Rav Acha bar Yaakov to spend the night there; the demon appeared to him as a seven-headed serpent, and at every bow he bowed in prayer one of its heads fell.'),
      TS('הוא היה תלמידו של רב הונא.', 'He was Rav Huna’s student.'),
    ],
  }),
  A({
    slug: 'rabba-bar-rav-huna', spot2: 'רבה בר רב הונא', roles: [GEN3, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רבה בר רב הונא', 'Rabba bar Rav Huna'), summary: L('בנו של רב הונא, שעמד בראש ישיבת סורא אחרי רב חסדא.', 'Rav Huna’s son, who headed the Sura yeshivah after Rav Chisda.'),
    rel: [to('father', 'rav-huna'), to('mother', 'chova'), to('teacher', 'rav-abba-arikha'), to('related', 'rav-chisda')],
    offices: [HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', 4068, 4081, ['rav-chisda'], [])],
    sources: [IRSG, L('מועד קטן כה ע״א', 'Moed Katan 25a'), TTA],
    sections: [
      sec('רבה בר רב הונא', 'רבה בר רב הונא, בנם של רב הונא וחובה, עמד בראש ישיבת סורא אחרי רב חסדא. אחרי פטירתו נותרה סורא בלי מנהיג, ומרכז התורה עבר לפומבדיתא. כשנפטר, העלו גם את ארונו לארץ ישראל, כמו את ארון אביו.', 'Rabba bar Rav Huna', 'Rabba bar Rav Huna, the son of Rav Huna and Chova, headed the Sura yeshivah after Rav Chisda. After his death Sura was left without a leader, and the center of Torah moved to Pumbedita. When he died his coffin too was brought up to the Land of Israel, like his father’s.'),
      TS('הוא למד מרב, ועמד בראש ישיבת סורא אחרי רב חסדא.', 'He learned from Rav, and headed the Sura yeshivah after Rav Chisda.'),
    ],
  }),
  A({
    slug: 'rav-chisda', spot2: 'רב חסדא', roles: [GEN3, KOLELET, L('ראש ישיבת סורא', 'Head of the Sura yeshivah')],
    name: L('רב חסדא', 'Rav Chisda'), summary: L('תלמיד רב ורב הונא, שעמד בראש ישיבת סורא; חריף ועשיר.', 'Student of Rav and Rav Huna, who headed the Sura yeshivah; sharp and wealthy.'),
    rel: [to('teacher', 'rav-abba-arikha'), to('teacher', 'rav-huna'), to('teacher', 'rav-chanan-bar-rava'), to('spouse', 'eshet-rav-chisda')],
    offices: [HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', 4060, 4068, ['rav-huna'], ['rabba-bar-rav-huna'])],
    sources: [IRSG, L('מכות י ע״א', 'Makkot 10a'), L('בבא בתרא יב ע״ב', 'Bava Batra 12b'), L('שבת קמ ע״ב', 'Shabbat 140b')],
    sections: [
      sec('רב חסדא', 'רב חסדא היה חריף מאוד ועשיר, והקים בסורא בית מדרש משלו. הגמרא (מכות י ע״א) מספרת שמלאך המוות לא יכול לגשת אליו כל זמן שלא פסק פיו מתלמודו. בבא בתרא (יב ע״ב) מביאה את בתו, שאמר לה אביה מי היא תבחר, והיא אמרה "תרווייהו" – ונישאה לרמי בר חמא ואחר כך לרבא.', 'Rav Chisda', 'Rav Chisda was very sharp and wealthy, and set up his own study hall in Sura. The Gemara (Makkot 10a) relates that the angel of death could not approach him as long as his mouth did not stop from his learning. Bava Batra (12b) tells of his daughter, who was asked whom she would choose, and said "both" – and married Rami bar Chama and afterwards Rava.'),
      TS('רב חסדא היה ראש המתיבתא הכוללת. רבותיו היו רב, רב הונא – שאחריו עמד בראש ישיבת סורא – ורב חנן בר רבא. אחריו עמד בראש הישיבה רבה בר רב הונא.', 'Rav Chisda was Rosh HaMetivta HaKolelet. His teachers were Rav, Rav Huna – whom he succeeded at the head of the Sura yeshivah – and Rav Chanan bar Rava. After him Rabba bar Rav Huna headed the yeshivah.'),
    ],
  }),
  F({
    slug: 'eshet-rav-chisda', spot2: 'אשת רב חסדא', name: L('אשת רב חסדא', 'Wife of Rav Chisda'),
    summary: L('אשתו של רב חסדא, בת רב חנן בר רבא ונכדת רב.', 'Rav Chisda’s wife, daughter of Rav Chanan bar Rava and granddaughter of Rav.'),
    rel: [to('spouse', 'rav-chisda'), to('father', 'rav-chanan-bar-rava'), to('mother', 'eshet-rav-chanan')], sources: [TTA],
    sections: one('אשת רב חסדא', 'באילן שלנו אשתו של רב חסדא היא בתם של רב חנן בר רבא ושל בת רב – ולכן רב חסדא נקשר גם הוא למשפחתו של רב. שמה לא נשמר.', 'Rav Chisda’s Wife', 'On our tree Rav Chisda’s wife is the daughter of Rav Chanan bar Rava and of Rav’s daughter – so Rav Chisda too was joined to Rav’s family. Her name has not been kept.'),
  }),
  A({
    slug: 'rav-chiya-bar-rav', spot2: 'רב חייא בר רב', roles: [GEN3],
    name: L('רב חייא בר רב', 'Rav Chiya son of Rav'), summary: L('בנו של רב.', 'Rav’s son.'),
    rel: [to('father', 'rav-abba-arikha'), to('teacher', 'rav-chanan-bar-rava')], sources: [L('פסחים קיג ע״א', 'Pesachim 113a'), TTA],
    sections: [
      sec('רב חייא בר רב', 'הגמרא (פסחים קיג ע״א) מביאה את עצות החיים שנתן רב לבנו חייא: "אל תשתה סמא, ואל תדלג בנגרא... ואל תעקור ככא".', 'Rav Chiya son of Rav', 'The Gemara (Pesachim 113a) brings the advice for life Rav gave his son Chiya: "Do not take drugs, do not leap over a ditch... and do not pull out a tooth".'),
      TS('הוא למד מגיסו, רב חנן בר רבא.', 'He learned from his brother-in-law, Rav Chanan bar Rava.'),
    ],
  }),
  // ── Nehardea, Pumbedita and Mechoza ──
  A({
    slug: 'rav-yitzhak-berei-derav-yehuda', spot2: 'רב יצחק בריה דרב יהודה', roles: [GEN3],
    name: L('רב יצחק בריה דרב יהודה', 'Rav Yitzhak son of Rav Yehudah'), summary: L('בנו של רב יהודה, מייסד ישיבת פומבדיתא.', 'Son of Rav Yehudah, founder of the Pumbedita yeshivah.'),
    rel: [to('father', 'rav-yehuda')], sources: [L('קידושין כט ע״ב', 'Kiddushin 29b')],
    sections: one('רב יצחק', 'רב יצחק בנו של רב יהודה נזכר בגמרא בדיון בין אביו לבין בנו על נישואיו (קידושין כט ע״ב).', 'Rav Yitzhak', 'Rav Yitzhak son of Rav Yehudah is mentioned in the Gemara in his father’s discussion of his marriage (Kiddushin 29b).'),
  }),
  A({
    slug: 'kaylil', spot2: 'כייליל', name: L('כייליל', 'Kaylil'),
    summary: L('בנו של נחמני ואביו של אביי.', 'Nachmani’s son and Abaye’s father.'),
    rel: [to('father', 'nachmani'), to('sibling', 'rabba')], sources: [L('קידושין לא ע״ב', 'Kiddushin 31b')],
    sections: one('כייליל', 'כייליל, אחיו של רבה, היה אביו של אביי. הגמרא (קידושין לא ע״ב) אומרת על אביי: "כי עברתו אמו – מת אביו, ילדתו – מתה אמו", ולכן גידל אותו דודו רבה.', 'Kaylil', 'Kaylil, Rabba’s brother, was Abaye’s father. The Gemara (Kiddushin 31b) says of Abaye: "when his mother conceived him his father died, when she bore him his mother died", so his uncle Rabba raised him.'),
  }),
  A({
    slug: 'rav-huna-bar-chiya', spot2: 'רב הונא בר חייא', roles: [GEN3, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב הונא בר חייא', 'Rav Huna bar Chiya'), summary: L('תלמיד שמואל, שעמד בראש פומבדיתא אחרי רב יהודה.', 'Shmuel’s student, who headed Pumbedita after Rav Yehudah.'),
    rel: [to('teacher', 'shmuel'), to('teacher', 'rav-kahana-2')],
    offices: [HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', null, 4060, ['rav-yehuda'], ['rabba'])],
    sources: [IRSG, TTA],
    sections: [TS('רבותיו היו שמואל ורב כהנא. אחרי פטירת רב יהודה עמד בראש פומבדיתא זמן קצר, ואחריו רבה.', 'His teachers were Shmuel and Rav Kahana. After Rav Yehudah’s death he headed Pumbedita for a short time, and after him Rabba.')],
  }),
  A({
    slug: 'rabba', spot2: 'רבה בר נחמני', roles: [GEN3, KOLELET, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רבה בר נחמני', 'Rabba bar Nachmani'), summary: L('"עוקר הרים", ראש ישיבת פומבדיתא, שלפני מותו התווכחו עליו בשמים.', '"Uprooter of mountains", head of the Pumbedita yeshivah, over whom heaven debated before his death.'),
    rel: [to('father', 'nachmani'), to('teacher', 'rav-huna'), to('teacher', 'rav-yehuda'), to('plugta', 'rav-yosef')],
    offices: [HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', 4060, 4082, ['rav-huna-bar-chiya'], ['rav-yosef'])],
    sources: [IRSG, L('בבא מציעא פו ע״א', 'Bava Metzia 86a'), L('ברכות סד ע״א', 'Berachot 64a'), L('ראש השנה יח ע״א', 'Rosh Hashanah 18a')],
    sections: [
      sec('עוקר הרים', 'רבה, שנקרא בגמרא בפשטות "רבה", היה חריף מאוד ונקרא "עוקר הרים", וחברו רב יוסף נקרא "סיני". שאלו בארץ ישראל מי מהם יקדם, ושלחו: "סיני עדיף"; אבל רב יוסף לא קיבל את הנשיאות, ורבה מלך עשרים ושתיים שנה (ברכות סד ע״א). הגמרא (בבא מציעא פו ע״א) מספרת שבשמים נחלקו בהלכה, ושאלו מי יכריע – "רבה בר נחמני", ושלחו לקחת אותו; ובשעת פטירתו אמר "טהור, טהור".', 'Uprooter of Mountains', 'Rabba, called in the Gemara simply "Rabba", was very sharp and was called "uprooter of mountains", and his colleague Rav Yosef was called "Sinai". They asked in the Land of Israel which of them should come first, and were told: "Sinai is preferable"; but Rav Yosef did not accept the headship, and Rabba ruled twenty-two years (Berachot 64a). The Gemara (Bava Metzia 86a) relates that in heaven they disagreed about a law and asked who should decide – "Rabba bar Nachmani", and sent to take him; at his death he said "pure, pure".'),
      TS('רבה היה ראש המתיבתא הכוללת. רבותיו היו רב הונא ורב יהודה; רב הונא מרבותיו גם בשלשלת הקבלה שמונה הרמב״ם. חברו לתורה ובר פלוגתיה היה רב יוסף, שעמד אחריו בראש הישיבה. אחיו היה כייליל, ואת אביי, בן אחיו, גידל בביתו; ויש אומרים שגם רב אושעיא ורב חנינא היו אחיו.', 'Rabba was Rosh HaMetivta HaKolelet. His teachers were Rav Huna and Rav Yehudah; Rav Huna is his teacher also in the chain of tradition listed by the Rambam. His study partner and sparring partner was Rav Yosef, who headed the yeshivah after him. His brother was Kaylil, and he raised Abaye, his nephew, in his home; and some say Rav Oshaya and Rav Chanina were also his brothers.'),
    ],
  }),
  A({
    slug: 'rav-yosef', spot2: 'רב יוסף בר חייא', roles: [GEN3, KOLELET, L('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah')],
    name: L('רב יוסף', 'Rav Yosef'), summary: L('"סיני", בקי בכל התורה, ראש ישיבת פומבדיתא אחרי רבה.', '"Sinai", master of all the Torah, head of the Pumbedita yeshivah after Rabba.'),
    rel: [to('teacher', 'rav-nachman'), to('teacher', 'rav-huna'), to('teacher', 'rav-yehuda'), to('plugta', 'rabba')],
    offices: [HEAD('ראש ישיבת פומבדיתא', 'Head of the Pumbedita yeshivah', 4082, 4085, ['rabba'], [L('אביי', 'Abaye')])],
    sources: [IRSG, L('ברכות סד ע״א', 'Berachot 64a'), L('נדרים מא ע״א', 'Nedarim 41a'), L('פסחים סח ע״ב', 'Pesachim 68b')],
    sections: [
      sec('סיני', 'רב יוסף נקרא "סיני" משום שהיה בקי בכל המשניות והברייתות. כשהציעו לו להיות ראש הישיבה לפני רבה, סירב, משום שאמרו לו האיצטגנינים שימלוך שתי שנים בלבד. לעת זקנתו חלה ושכח את תלמודו, ותלמידו אביי החזיר לו אותו (נדרים מא ע״א). הוא היה עיוור, ואמר: "אי לאו האי יומא דקא גרים – כמה יוסף איכא בשוקא" (פסחים סח ע״ב).', 'Sinai', 'Rav Yosef was called "Sinai" since he knew all the Mishnayot and baraitot. When they offered him the headship before Rabba, he refused, since the astrologers had told him he would rule only two years. In his old age he fell ill and forgot his learning, and his student Abaye restored it to him (Nedarim 41a). He was blind, and said: "Were it not for this day (Shavuot) – how many Yosefs are there in the market" (Pesachim 68b).'),
      TS('רב יוסף היה ראש המתיבתא הכוללת. רבותיו היו רב יהודה, רב הונא ורב נחמן. חברו לתורה ובר פלוגתיה היה רבה, ואחריו עמד בראש ישיבת פומבדיתא.', 'Rav Yosef was Rosh HaMetivta HaKolelet. His teachers were Rav Yehudah, Rav Huna and Rav Nachman. His study partner and sparring partner was Rabba, and he headed the Pumbedita yeshivah after him.'),
    ],
  }),
  A({
    slug: 'chama-avi-rami', spot2: 'חמא', name: L('חמא – אבי רמי', 'Chama – father of Rami'),
    summary: L('אביו של רמי בר חמא.', 'Father of Rami bar Chama.'), rel: [], sources: [TTA],
    sections: one('חמא', 'חמא ידוע כאביו של רמי בר חמא, שנשא את בתו של רב חסדא.', 'Chama', 'Chama is known as the father of Rami bar Chama, who married Rav Chisda’s daughter.'),
  }),
  A({
    slug: 'rav-sheshet', spot2: 'רב ששת', roles: [GEN3, L('ראש בית המדרש בשילחי', 'Head of the study hall in Shilchi')],
    name: L('רב ששת', 'Rav Sheshet'), summary: L('החכם העיוור, בקי במשניות ובברייתות, בר פלוגתיה של רב נחמן.', 'The blind sage, master of the Mishnah and the baraitot, Rav Nachman’s sparring partner.'),
    rel: [to('teacher', 'shmuel'), to('teacher', 'rav-huna'), to('plugta', 'rav-nachman')], sources: [L('ברכות נח ע״א', 'Berachot 58a'), L('עירובין סז ע״א', 'Eruvin 67a'), L('פסחים קט ע״א', 'Pesachim 109a')],
    sections: [
      sec('רב ששת', 'רב ששת היה עיוור, ובקי מאוד במשניות ובברייתות. הגמרא (ברכות נח ע״א) מספרת שיצא עם כל העם לקבל פני המלך, ומין אחד לעג לו; רב ששת ידע לפי הקול מתי עובר המלך ובירך עליו – והמין, שלא ידע, נענש. הוא היה ראש בית המדרש בעיר שילחי.', 'Rav Sheshet', 'Rav Sheshet was blind, and very learned in the Mishnah and baraitot. The Gemara (Berachot 58a) relates that he went out with all the people to greet the king, and a heretic mocked him; Rav Sheshet knew by the sound when the king passed and blessed him – and the heretic, who did not know, was punished. He headed the study hall in the town of Shilchi.'),
      TS('רבותיו היו שמואל ורב הונא, ובר פלוגתיה היה רב נחמן. תלמידו היה רב יוסף בר חמא.', 'His teachers were Shmuel and Rav Huna, and his sparring partner was Rav Nachman. His student was Rav Yosef bar Chama.'),
    ],
  }),
  A({
    slug: 'rav-yosef-bar-chama', spot2: 'רב יוסף בר חמא', roles: [GEN3],
    name: L('רב יוסף בר חמא', 'Rav Yosef bar Chama'), summary: L('אביו של רבא, תלמיד רב נחמן ורב ששת.', 'Rava’s father, student of Rav Nachman and Rav Sheshet.'),
    rel: [to('teacher', 'rav-nachman'), to('teacher', 'rav-sheshet')], sources: [L('בבא קמא צז ע״א', 'Bava Kamma 97a'), TTA],
    sections: [TS('רבותיו היו רב נחמן ורב ששת. בנו היה רבא, מגדולי האמוראים.', 'His teachers were Rav Nachman and Rav Sheshet. His son was Rava, one of the greatest of the Amoraim.')],
  }),
  A({
    slug: 'rav-hamnuna', spot2: 'רב המנונא', roles: [GEN3],
    name: L('רב המנונא', 'Rav Hamnuna'), summary: L('תלמיד רב הונא ורב יהודה, שתיקן את התפילה "אלקי, עד שלא נוצרתי".', 'Student of Rav Huna and Rav Yehudah, who composed the prayer "My G-d, before I was formed".'),
    rel: [to('teacher', 'rav-huna'), to('teacher', 'rav-yehuda')], sources: [L('ברכות יז ע״א', 'Berachot 17a'), L('ברכות יא ע״ב', 'Berachot 11b'), TTA],
    sections: [
      sec('רב המנונא', 'רב המנונא הוא שאמר את התפילה "אלקי, עד שלא נוצרתי איני כדאי, ועכשיו שנוצרתי כאילו לא נוצרתי" (ברכות יז ע״א), ואת ברכת התורה "אשר בחר בנו מכל העמים ונתן לנו את תורתו", ש"היא מעולה שבברכות" (ברכות יא ע״ב).', 'Rav Hamnuna', 'Rav Hamnuna is the one who said the prayer "My G-d, before I was formed I was not worthy, and now that I have been formed it is as if I had not been formed" (Berachot 17a), and the blessing of the Torah "who chose us from all the nations and gave us His Torah", which "is the finest of the blessings" (Berachot 11b).'),
      TS('רבותיו היו רב הונא ורב יהודה.', 'His teachers were Rav Huna and Rav Yehudah.'),
    ],
  }),
  // ── the Heads of the Exile ──
  A({
    slug: 'mar-ukvan-detzutzita', spot2: 'מר עוקבן דצוציתא', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('מר עוקבן דצוציתא', 'Mar Ukvan of Tzutzita'), summary: L('ראש הגולה אחרי מר עוקבא.', 'Head of the Exile after Mar Ukva.'),
    rel: [], offices: [RG(['mar-ukva-1'], ['abba-mari-huna-mar'], 4030, 4060)], sources: [SOZ, L('שבת נו ע״ב', 'Shabbat 56b')],
    sections: one('מר עוקבן דצוציתא', 'לפי סדר עולם זוטא עמד מר עוקבן בראש הגולה אחרי מר עוקבא. הגמרא (שבת נו ע״ב) אומרת שנקרא "דצוציתא" על שם התלתל (ציצית) שאחז בו מלאך מן השמים כדי להשיבו בתשובה.', 'Mar Ukvan of Tzutzita', 'According to Seder Olam Zuta, Mar Ukvan headed the Exile after Mar Ukva. The Gemara (Shabbat 56b) says he was called "of Tzutzita" after the lock of hair (tzitzit) by which an angel took hold of him from heaven to bring him to repentance.'),
  }),
  A({
    slug: 'abba-mari-huna-mar', spot2: 'אבא מרי (הונא מר)', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('אבא מרי (הונא מר)', 'Abba Mari (Huna Mar)'), summary: L('ראש הגולה אחרי מר עוקבן.', 'Head of the Exile after Mar Ukvan.'),
    rel: [], offices: [RG(['mar-ukvan-detzutzita'], [], 4060, 4080)], sources: [SOZ],
    sections: one('אבא מרי', 'לפי סדר עולם זוטא עמד אבא מרי, הנקרא גם הונא מר, בראש הגולה אחרי מר עוקבן דצוציתא, בימיהם של רבה ורב יוסף.', 'Abba Mari', 'According to Seder Olam Zuta, Abba Mari, also called Huna Mar, headed the Exile after Mar Ukvan of Tzutzita, in the days of Rabba and Rav Yosef.'),
  }),
];
