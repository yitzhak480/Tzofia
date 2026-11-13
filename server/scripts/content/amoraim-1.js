// The Talmud tree, first band: the last Tannaim not yet in the encyclopedia,
// the transition generation (דור המעבר) and the first generation of the
// Amoraim, with their families. Lines as on the poster (traced one by one):
// black arrow = teacher → student, brown = the Rambam's chain, grey = a role
// passed on, a circle = a student who was also a colleague, "hands" = a
// chavruta / bar plugta, coloured lines = family, dotted = through a woman.
const { L, sec, to, muv } = require('./helpers');
const T2 = require('./tree-checklist-talmud');

const CAT = {
  't2-sura': 'amoraim-sura', 't2-nehardea': 'amoraim-nehardea', 't2-tveria': 'amoraim-tveria', 't2-eretz': 'amoraim-eretz',
  't2-bavel': 'amoraim-bavel', 't2-reshgaluta': 'amoraim-rashei-hagola', 't2-nesiim': 'nesiim',
};
// a page on the Talmud tree: its colour and lists come from the poster
const A = (e) => {
  const row = T2.find((r) => r[0] === e.spot2);
  if (!row) throw new Error(`"${e.spot2}" is not in the Talmud tree checklist`);
  let cats = e.cats || (row[2] === 'name' ? ['amoraim-family'] : [CAT[row[1]]]);
  if (row[1] === 't2-reshgaluta' && !cats.includes('rashei-hagola')) cats = [...cats, 'rashei-hagola'];
  return { gender: 'male', roles: [], ...e, cats, color: row[1] };
};
const F = (e) => A({ gender: 'female', ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const maybe = (type, slug) => ({ ...to(type, slug), uncertain: true });
const GEN0 = L('אמורא, דור המעבר', 'Amora, the transition generation');
const GEN1 = L('אמורא, דור א׳', 'Amora, 1st generation');
const TANNA = L('תנא, מאחרוני התנאים', 'Tanna, of the last Tannaim');
const HEAD = (he, en, from, to2, before = [], after = []) => ({ label: L(he, en), from, to: to2, before, after });
const RG = (before, after, from, to2) => HEAD('ראש הגולה', 'Head of the Exile', from, to2, before, after);
const TTA = L('תולדות תנאים ואמוראים (הרב אהרן היימן)', 'Toldot Tannaim VeAmoraim (Rabbi Aharon Hyman)');
const SDH = L('סדר הדורות', 'Seder HaDorot');
const SOZ = L('סדר עולם זוטא', 'Seder Olam Zuta');
const IRSG = L('איגרת רב שרירא גאון', 'The Letter of Rav Sherira Gaon');
const PES4 = L('פסחים ד ע״א', 'Pesachim 4a');
const SAN5 = L('סנהדרין ה ע״א', 'Sanhedrin 5a');
const KET103 = L('כתובות קג ע״ב', 'Ketubot 103b');
const FAMILY_CHIYA = sec('בית אבא בר אחא כרסלא',
  'הגמרא (פסחים ד ע״א) אומרת: "אייבו וחנה ושילא ומרתא ורבי חייא – כולהו בני אבא בר אחא כרסלא מכפרי הוו". ובסנהדרין (ה ע״א): "רב בר אחוה ובר אחתיה דרבי חייא הוה" – רב היה בן אחיו של רבי חייא, ובן אחותו. באילן שלנו אבא בר אחא כרסלא נשא שתי נשים: מאחת נולד אייבו, ומהשנייה רבי חייא; ואם רבי חייא נישאה גם לאיש אחר ("אבי אימא"), ונולדה לה בת – אמו של רב. כך היה אייבו אחיו של רבי חייא מצד האב, ואשתו אחותו מצד האם.',
  'The House of Abba bar Acha Karsla',
  'The Gemara (Pesachim 4a) says: "Aivu, Chana, Shila, Marta and Rabbi Chiya – all were sons of Abba bar Acha Karsla of Kafri". And in Sanhedrin (5a): "Rav was the son of Rabbi Chiya’s brother and the son of his sister". On our tree Abba bar Acha Karsla married two wives: from one Aivu was born, and from the other Rabbi Chiya; and Rabbi Chiya’s mother was married also to another man ("Ima’s father"), and a daughter was born to her – the mother of Rav. So Aivu was Rabbi Chiya’s brother through the father, and his wife was Rabbi Chiya’s sister through the mother.');

// ── the last Tannaim (the top row) ──
const tannaim = [
  A({
    slug: 'rabbi-menachem-berabbi-yose', spot2: 'רבי מנחם ברבי יוסי', cats: ['tannaim'], roles: [TANNA],
    name: L('רבי מנחם ברבי יוסי', 'Rabbi Menachem son of Rabbi Yose'),
    summary: L('מבניו של רבי יוסי בן חלפתא, אחי רבי ישמעאל ברבי יוסי.', 'One of the sons of Rabbi Yose ben Chalafta, brother of Rabbi Yishmael son of Rabbi Yose.'),
    rel: [to('father', 'rabbi-yose-ben-chalafta'), to('sibling', 'rabbi-yishmael-berabbi-yose')], sources: [L('שבת קיח ע״ב', 'Shabbat 118b'), TTA],
    sections: one('רבי מנחם', 'רבי יוסי בן חלפתא אמר: "חמשה בנים הנחתי, וכולם רבנים" (שבת קיח ע״ב), ורבי מנחם אחד מהם. הוא ואחיו רבי ישמעאל ברבי יוסי היו מחכמי הדור האחרון של התנאים, שמהם קיבלו האמוראים הראשונים.', 'Rabbi Menachem', 'Rabbi Yose ben Chalafta said: "I left five sons, and all of them rabbis" (Shabbat 118b), and Rabbi Menachem was one of them. He and his brother Rabbi Yishmael son of Rabbi Yose were among the sages of the last generation of the Tannaim, from whom the first Amoraim received.'),
  }),
  A({
    slug: 'rabbi-chama-bar-bisa', spot2: 'רבי חמא בר ביסא', cats: ['tannaim'], roles: [TANNA],
    name: L('רבי חמא בר ביסא', 'Rabbi Chama bar Bisa'),
    summary: L('אביו של רבי אושעיא רבה, שישב שתים עשרה שנה בבית המדרש.', 'Father of Rabbi Oshaya Rabba, who sat twelve years in the study hall.'),
    rel: [], sources: [L('כתובות סב ע״ב', 'Ketubot 62b'), TTA],
    sections: one('רבי חמא בר ביסא ובנו', 'הגמרא (כתובות סב ע״ב) מספרת שרבי חמא בר ביסא הלך ללמוד תורה שתים עשרה שנה. כשחזר, נכנס לבית המדרש של עירו, ובחור צעיר ישב לפניו ושאל אותו שאלות חריפות. רבי חמא הצטער וחשב: אילו הייתי כאן, היה לי בן כזה – ואז התברר שזה בנו, רבי אושעיא.', 'Rabbi Chama bar Bisa and His Son', 'The Gemara (Ketubot 62b) relates that Rabbi Chama bar Bisa went to learn Torah for twelve years. When he returned, he entered the study hall of his town, and a young man sat before him and asked him sharp questions. Rabbi Chama was saddened and thought: had I been here, I would have had a son like this – and then it turned out to be his son, Rabbi Oshaya.'),
  }),
  A({
    slug: 'rabbi-shimon-ben-menasya', spot2: 'רבי שמעון בן מנסיא', cats: ['tannaim'], roles: [TANNA],
    name: L('רבי שמעון בן מנסיא', 'Rabbi Shimon ben Menasya'),
    summary: L('מחכמי "קהלא קדישא דבירושלים", בדורו של רבי.', 'One of the sages of "the holy congregation of Jerusalem", in the generation of Rebbi.'),
    rel: [], sources: [L('משנה חגיגה א, ז', 'Mishnah Chagigah 1:7'), L('יומא פה ע״ב', 'Yoma 85b'), L('ביצה יד ע״ב', 'Beitzah 14b')],
    sections: one('רבי שמעון בן מנסיא', 'רבי שמעון בן מנסיא היה עם רבי יוסי בן משולם מחכמי "קהלא קדישא דבירושלים" (ביצה יד ע״ב), שחילקו את יומם לתורה, לתפילה ולמלאכה. הוא שלמד מן הפסוק "ושמרו בני ישראל את השבת" שמחללים שבת להצלת נפש: "חלל עליו שבת אחת, כדי שישמור שבתות הרבה" (יומא פה ע״ב).', 'Rabbi Shimon ben Menasya', 'Rabbi Shimon ben Menasya was, with Rabbi Yose ben Meshullam, one of the sages of "the holy congregation of Jerusalem" (Beitzah 14b), who divided their day between Torah, prayer and work. It was he who learned from the verse "and the children of Israel shall keep the Shabbat" that Shabbat is set aside to save a life: "set aside one Shabbat for him, so that he may keep many Shabbatot" (Yoma 85b).'),
  }),
  A({
    slug: 'rabbi-shimon-ben-elazar', spot2: 'רבי שמעון בן אלעזר', cats: ['tannaim'], roles: [TANNA],
    name: L('רבי שמעון בן אלעזר', 'Rabbi Shimon ben Elazar'),
    summary: L('תלמיד רבי מאיר: "אל תרצה את חברך בשעת כעסו".', 'Student of Rabbi Meir: "Do not appease your friend at the time of his anger".'),
    rel: [to('teacher', 'rabbi-meir')], sources: [L('משנה אבות ד, יח', 'Mishnah Avot 4:18')],
    sections: one('רבי שמעון בן אלעזר', 'רבי שמעון בן אלעזר מוסר במשנה ובברייתות דברים רבים בשם רבו רבי מאיר. הוא אמר: "אל תרצה את חברך בשעת כעסו, ואל תנחמנו בשעה שמתו מוטל לפניו".', 'Rabbi Shimon ben Elazar', 'Rabbi Shimon ben Elazar hands down in the Mishnah and baraitot many sayings in the name of his teacher Rabbi Meir. He said: "Do not appease your friend at the time of his anger, and do not comfort him while his dead lies before him".'),
  }),
];

// ── the families ──
const family = [
  A({
    slug: 'abba-bar-acha-karsla', spot2: 'אבא בר אחא כרסלא', cats: ['amoraim-family'],
    name: L('אבא בר אחא כרסלא', 'Abba bar Acha Karsla'),
    summary: L('מכפרי שבבבל, אבי רבי חייא, אייבו, חנה ומרתא, וסבו של רב.', 'Of Kafri in Bavel, father of Rabbi Chiya, Aivu, Chana and Marta, and grandfather of Rav.'),
    rel: [to('spouse', 'em-aivu'), to('spouse', 'em-rabbi-chiya')], sources: [PES4, SAN5], sections: [FAMILY_CHIYA],
  }),
  F({
    slug: 'em-aivu', spot2: 'אם אייבו', name: L('אם אייבו', 'Mother of Aivu'),
    summary: L('אשת אבא בר אחא כרסלא, אמו של אייבו – סבתו של רב.', 'Wife of Abba bar Acha Karsla, mother of Aivu – Rav’s grandmother.'),
    rel: [to('spouse', 'abba-bar-acha-karsla')], sources: [SAN5], sections: [FAMILY_CHIYA],
  }),
  F({
    slug: 'em-rabbi-chiya', spot2: 'אם רבי חייא', name: L('אם רבי חייא', 'Mother of Rabbi Chiya'),
    summary: L('אשת אבא בר אחא כרסלא, אמו של רבי חייא, וסבתו של רב מצד אמו.', 'Wife of Abba bar Acha Karsla, mother of Rabbi Chiya, and Rav’s grandmother on his mother’s side.'),
    rel: [to('spouse', 'abba-bar-acha-karsla'), to('spouse', 'avi-ima')], sources: [SAN5], sections: [FAMILY_CHIYA],
  }),
  A({
    slug: 'avi-ima', spot2: 'אבי אימא', name: L('אבי אימא', 'Father of Ima'),
    summary: L('בעלה של אם רבי חייא, אביה של אמו של רב.', 'Husband of Rabbi Chiya’s mother, father of Rav’s mother.'),
    rel: [to('spouse', 'em-rabbi-chiya')], sources: [SAN5], sections: [FAMILY_CHIYA],
  }),
  A({
    slug: 'aivu', spot2: 'אייבו', name: L('אייבו', 'Aivu'),
    summary: L('בן אבא בר אחא כרסלא, אחי רבי חייא, ואביו של רב.', 'Son of Abba bar Acha Karsla, brother of Rabbi Chiya, and father of Rav.'),
    rel: [to('father', 'abba-bar-acha-karsla'), to('mother', 'em-aivu'), to('sibling', 'rabbi-chiya'), to('spouse', 'ima-em-rav')], sources: [PES4, SAN5, L('פסחים קיג ע״א', 'Pesachim 113a')],
    sections: [FAMILY_CHIYA],
  }),
  F({
    slug: 'ima-em-rav', spot2: 'אימא?', name: L('אימא (אם רב)', 'Ima – Mother of Rav'),
    summary: L('אמו של רב, אחותו של רבי חייא מצד אמם.', 'Rav’s mother, Rabbi Chiya’s sister through their mother.'),
    rel: [to('mother', 'em-rabbi-chiya'), to('father', 'avi-ima'), to('spouse', 'aivu'), to('sibling', 'rabbi-chiya')], sources: [SAN5],
    sections: [sec('השם באילן', 'באילן שלנו שמה כתוב "אימא?" – שמה אינו ידוע בוודאות. היא בתם של אם רבי חייא ושל "אבי אימא", ונישאה לאייבו – ולכן רב היה "בר אחוה ובר אחתיה דרבי חייא".', 'Her Name on Our Tree', 'On our tree her name is written "Ima?" – her name is not known for certain. She was the daughter of Rabbi Chiya’s mother and of "Ima’s father", and married Aivu – which is why Rav was "the son of Rabbi Chiya’s brother and of his sister".'), FAMILY_CHIYA],
  }),
  A({
    slug: 'marta-ben-karsla', spot2: 'מרתא', name: L('מרתא (אחי רבי חייא)', 'Marta (brother of Rabbi Chiya)'),
    summary: L('בן אבא בר אחא כרסלא, אחי רבי חייא, ואביו של רב שמואל בר מרתא.', 'Son of Abba bar Acha Karsla, brother of Rabbi Chiya, and father of Rav Shmuel bar Marta.'),
    rel: [to('father', 'abba-bar-acha-karsla'), to('sibling', 'rabbi-chiya')], sources: [PES4], sections: [FAMILY_CHIYA],
  }),
  A({
    slug: 'chana-ben-karsla', spot2: 'חנה', name: L('חנה (אחי רבי חייא)', 'Chana (brother of Rabbi Chiya)'),
    summary: L('בן אבא בר אחא כרסלא, אחי רבי חייא, ואביו של רבה בר חנה.', 'Son of Abba bar Acha Karsla, brother of Rabbi Chiya, and father of Rabba bar Chana.'),
    rel: [to('father', 'abba-bar-acha-karsla'), to('sibling', 'rabbi-chiya')], sources: [PES4], sections: [FAMILY_CHIYA],
  }),
  F({
    slug: 'yehudit-eshet-rabbi-chiya', spot2: 'יהודית', name: L('יהודית (אשת רבי חייא)', 'Yehudit, wife of Rabbi Chiya'),
    summary: L('אשת רבי חייא, אם התאומים יהודה וחזקיה.', 'Wife of Rabbi Chiya, mother of the twins Yehudah and Chizkiyah.'),
    rel: [to('spouse', 'rabbi-chiya')], sources: [L('יבמות סה ע״ב', 'Yevamot 65b')],
    sections: one('יהודית', 'הגמרא (יבמות סה ע״ב) מספרת שליהודית, אשת רבי חייא, היו לידות קשות מאוד; היא ילדה תאומים – יהודה וחזקיה – ותאומות – פזי וטבי.', 'Yehudit', 'The Gemara (Yevamot 65b) relates that Yehudit, Rabbi Chiya’s wife, had very hard births; she bore twin sons – Yehudah and Chizkiyah – and twin daughters – Pazi and Tavi.'),
  }),
  F({
    slug: 'bat-rabbi-yannai', spot2: 'בת רבי ינאי', name: L('בת רבי ינאי', 'Daughter of Rabbi Yannai'),
    summary: L('בת רבי ינאי ואשת רבי יהודה בן רבי חייא.', 'Daughter of Rabbi Yannai and wife of Rabbi Yehudah son of Rabbi Chiya.'),
    rel: [to('father', 'rabbi-yannai'), to('spouse', 'rabbi-yehuda-ben-rabbi-chiya')], sources: [L('כתובות סב ע״ב', 'Ketubot 62b')],
    sections: one('בת רבי ינאי', 'הגמרא (כתובות סב ע״ב) מספרת שרבי יהודה בן רבי חייא, חתנו של רבי ינאי, היה יושב בבית המדרש ובא לביתו כל ערב שבת. פעם אחת נמשך בלימודו ולא בא, ורבי ינאי אמר: "מדלא אתא – ודאי שכיב", ומת. שמה לא נשמר.', 'Daughter of Rabbi Yannai', 'The Gemara (Ketubot 62b) relates that Rabbi Yehudah son of Rabbi Chiya, Rabbi Yannai’s son-in-law, would sit in the study hall and come home every Shabbat eve. Once he was drawn on in his learning and did not come, and Rabbi Yannai said: "since he has not come, he must have died", and he died. Her name has not been kept.'),
  }),
  F({
    slug: 'achot-rabbi-yochanan', spot2: 'אחות רבי יוחנן', name: L('אחות רבי יוחנן', 'Sister of Rabbi Yochanan'),
    summary: L('אחותו של רבי יוחנן, שנישאה לריש לקיש.', 'Rabbi Yochanan’s sister, who married Reish Lakish.'),
    rel: [to('father', 'nafcha'), to('sibling', 'rabbi-yochanan'), to('spouse', 'reish-lakish')], sources: [L('בבא מציעא פד ע״א', 'Bava Metzia 84a')],
    sections: one('אחות רבי יוחנן', 'כשריש לקיש, שהיה ליסטים, ראה את רבי יוחנן רוחץ בירדן, אמר לו רבי יוחנן: "אם אתה חוזר בך – אתן לך את אחותי, שהיא נאה ממני". ריש לקיש קיבל, למד תורה ונעשה גדול (בבא מציעא פד ע״א). אחרי מות בעלה באה לפני רבי יוחנן ובכתה.', 'Rabbi Yochanan’s Sister', 'When Reish Lakish, who was a bandit, saw Rabbi Yochanan bathing in the Jordan, Rabbi Yochanan told him: "If you repent – I will give you my sister, who is more beautiful than I". Reish Lakish accepted, learned Torah and became great (Bava Metzia 84a). After her husband’s death she came before Rabbi Yochanan and wept.'),
  }),
  A({
    slug: 'nafcha', spot2: '"נפחא"?', cats: ['amoraim-family'], name: L('נפחא (אבי רבי יוחנן)', 'Nafcha – father of Rabbi Yochanan'),
    summary: L('אביו של רבי יוחנן, שמת לפני שנולד.', 'Rabbi Yochanan’s father, who died before he was born.'),
    rel: [], sources: [L('קידושין לא ע״ב', 'Kiddushin 31b'), L('סנהדרין צו ע״ב', 'Sanhedrin 96b')],
    sections: one('"נפחא"?', 'רבי יוחנן נקרא "בר נפחא" (סנהדרין צו ע״ב). באילן שלנו שם אביו כתוב "נפחא"?, משום שלא ברור אם נפחא היה שמו או כינוי – "הנפח", מי שעובד בברזל. הגמרא (קידושין לא ע״ב) אומרת על רבי יוחנן: "כי עברתו אמו – מת אביו, ילדתו – מתה אמו". בתו נישאה לריש לקיש.', '"Nafcha"?', 'Rabbi Yochanan is called "bar Nafcha" (Sanhedrin 96b). On our tree his father’s name is written "Nafcha"?, since it is not clear whether Nafcha was his name or a nickname – "the smith", one who works iron. The Gemara (Kiddushin 31b) says of Rabbi Yochanan: "when his mother conceived him, his father died; when she bore him, his mother died". His daughter married Reish Lakish.'),
  }),
];

// ── the transition generation (דור המעבר) ──
const transition = [
  A({
    slug: 'rabbi-shimon-berabbi', spot2: 'רבי שמעון ברבי', cats: ['amoraim-eretz'], roles: [GEN0, L('חכם', 'Chacham')],
    name: L('רבי שמעון ברבי', 'Rabbi Shimon son of Rebbi'),
    summary: L('בנו של רבי, שאביו מינהו ל"חכם": "שמעון בני – חכם".', 'Rebbi’s son, whom his father appointed "Chacham": "Shimon my son is a sage".'),
    rel: [to('father', 'rabbi-yehuda-hanasi'), to('sibling', 'rabban-gamliel-berabbi')], sources: [KET103, L('בבא מציעא פד ע״ב', 'Bava Metzia 84b')],
    sections: one('שמעון בני חכם', 'לפני פטירתו צוה רבי: "שמעון בני – חכם, גמליאל בני – נשיא, חנינא בר חמא – ישב בראש" (כתובות קג ע״ב). הגמרא (בבא מציעא פד ע״ב) מספרת על לימודו עם רבי אלעזר ברבי שמעון לפני רבי, ששניהם ישבו על הקרקע ושאלו והשיבו.', 'Shimon My Son Is a Sage', 'Before his death Rebbi commanded: "Shimon my son is the Chacham, Gamliel my son is the Nasi, Chanina bar Chama shall sit at the head" (Ketubot 103b). The Gemara (Bava Metzia 84b) tells of his learning with Rabbi Elazar son of Rabbi Shimon before Rebbi, when both sat on the ground and asked and answered.'),
  }),
  A({
    slug: 'rabban-gamliel-berabbi', spot2: 'רבן גמליאל ברבי', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN0, L('נשיא', 'Nasi')],
    name: L('רבן גמליאל ברבי', 'Rabban Gamliel son of Rebbi'),
    summary: L('בנו של רבי והנשיא אחריו: "יפה תלמוד תורה עם דרך ארץ".', 'Rebbi’s son and the Nasi after him: "Torah study is good together with a livelihood".'),
    rel: [to('father', 'rabbi-yehuda-hanasi'), to('sibling', 'rabbi-shimon-berabbi')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 3979, to: 4000, before: ['rabbi-yehuda-hanasi'], after: ['rabbi-yehuda-nesia-1'] }],
    sources: [KET103, L('משנה אבות ב, ב', 'Mishnah Avot 2:2')],
    sections: one('גמליאל בני נשיא', 'רבי מינה את בנו גמליאל לנשיא אחריו (כתובות קג ע״ב). במשנה (אבות ב, ב) הוא אומר: "יפה תלמוד תורה עם דרך ארץ, שיגיעת שניהם משכחת עוון". בניו היו רבי יהודה נשיאה הראשון, הנשיא אחריו, ורבי הלל.', 'Gamliel My Son Is Nasi', 'Rebbi appointed his son Gamliel as Nasi after him (Ketubot 103b). In the Mishnah (Avot 2:2) he says: "Torah study is good together with a livelihood, for the effort of both makes one forget sin". His sons were Rabbi Yehudah Nesiah I, the Nasi after him, and Rabbi Hillel.'),
  }),
  A({
    slug: 'rabbi-yose-ben-zimra', spot2: 'רבי יוסי בן זמרא', roles: [GEN0],
    name: L('רבי יוסי בן זמרא', 'Rabbi Yose ben Zimra'),
    summary: L('מבני דורו של רבי, שבתו נישאה לבנו של רבי.', 'Of Rebbi’s generation, whose daughter married Rebbi’s son.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('כתובות סב ע״ב', 'Ketubot 62b'), TTA],
    sections: one('רבי יוסי בן זמרא', 'הגמרא (כתובות סב ע״ב) מספרת שבנו של רבי שידך את בתו של רבי יוסי בן זמרא, ושנים עשר שנה למד בבית המדרש לפני החתונה. הוא למד מרבי, ותלמידו היה רבי אלעזר בן פדת.', 'Rabbi Yose ben Zimra', 'The Gemara (Ketubot 62b) relates that Rebbi’s son was betrothed to the daughter of Rabbi Yose ben Zimra, and learned twelve years in the study hall before the wedding. He learned from Rebbi, and his student was Rabbi Elazar ben Pedat.'),
  }),
  A({
    slug: 'rabbi-yitzhak-bar-avdimi', spot2: 'רבי יצחק בר אבדימי', roles: [GEN0],
    name: L('רבי יצחק בר אבדימי', 'Rabbi Yitzhak bar Avdimi'),
    summary: L('מתלמידי רבי, שמרבה להביא את המקור בפסוק לדברי חכמים.', 'One of Rebbi’s students, who often brings the source in a verse for the sages’ words.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('עירובין ק ע״ב', 'Eruvin 100b'), TTA],
    sections: one('רבי יצחק בר אבדימי', 'רבי יצחק בר אבדימי מוכר בגמרא בשאלה "מאי קרא?" – הוא מביא לדברי החכמים את הפסוק שעליו נסמכו. בעירובין (ק ע״ב) הוא מונה את עשר הקללות שנתקללה חוה. הוא היה מתלמידי רבי.', 'Rabbi Yitzhak bar Avdimi', 'Rabbi Yitzhak bar Avdimi is known in the Gemara for the question "what is the verse?" – he brings for the sages’ words the verse they relied on. In Eruvin (100b) he lists the ten curses with which Chavah was cursed. He was one of Rebbi’s students.'),
  }),
  A({
    slug: 'bar-kappara', spot2: 'בר קפרא', roles: [GEN0],
    name: L('בר קפרא', 'Bar Kappara'),
    summary: L('תלמיד רבי ורבם של רבי יהושע בן לוי ורבי אושעיא, שבישר על פטירת רבי.', 'Rebbi’s student and teacher of Rabbi Yehoshua ben Levi and Rabbi Oshaya, who announced Rebbi’s passing.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('כתובות קד ע״א', 'Ketubot 104a'), L('נדרים נ ע״ב – נא ע״א', 'Nedarim 50b–51a'), TTA],
    sections: one('"אראלים ומצוקים"', 'כשנפטר רבי, אמרו בני ציפורי: מי שיאמר שנפטר רבי – ידקר בחרב. עמד בר קפרא ואמר: "אראלים ומצוקים אחזו בארון הקודש – נצחו אראלים את המצוקים, ונשבה ארון הקודש" (כתובות קד ע״א). הוא היה תלמיד רבי, ותלמידיו היו רבי חנינא בר חמא, רבי יהושע בן לוי, רבי אושעיא רבה וריש לקיש.', '"Angels and Mortals"', 'When Rebbi died, the people of Tzippori said: whoever says that Rebbi has died will be stabbed with a sword. Bar Kappara stood and said: "Angels and mortals took hold of the holy ark – the angels overcame the mortals, and the holy ark was taken" (Ketubot 104a). He was Rebbi’s student, and his students were Rabbi Chanina bar Chama, Rabbi Yehoshua ben Levi, Rabbi Oshaya Rabba and Reish Lakish.'),
  }),
  A({
    slug: 'rabbi-chanina-bar-chama', spot2: 'רבי חנינא בר חמא', roles: [GEN0, L('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori')],
    name: L('רבי חנינא בר חמא', 'Rabbi Chanina bar Chama'),
    summary: L('תלמיד רבי, שרבי ציווה שישב בראש, וראש ישיבת ציפורי.', 'Rebbi’s student, whom Rebbi commanded to sit at the head, and head of the Yeshivah of Tzippori.'),
    rel: [muv('rabbi-yehuda-hanasi'), to('teacher', 'rabbi-yishmael-berabbi-yose'), to('teacher', 'bar-kappara')],
    offices: [HEAD('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori', 3980, 3990, ['rabbi-afes'], ['rabbi-yochanan'])],
    sources: [KET103, L('יומא מט ע״א', 'Yoma 49a'), TTA],
    sections: one('חנינא בר חמא ישב בראש', 'רבי ציווה לפני מותו: "חנינא בר חמא ישב בראש" (כתובות קג ע״ב). רבי חנינא לא קיבל את התפקיד, משום שרבי אפס היה גדול ממנו בשתיים ומחצה שנים, וישב בחוץ ולמד; רק אחרי מות רבי אפס נכנס לראש הישיבה. רבותיו היו רבי, רבי ישמעאל ברבי יוסי ובר קפרא, והוא עמד בראש ישיבת ציפורי אחרי רבי אפס. אחרי פטירתו פתח רבי יוחנן את הישיבה בטבריה, ועמד בראש התורה בארץ ישראל אחריו.', 'Chanina bar Chama Shall Sit at the Head', 'Rebbi commanded before his death: "Chanina bar Chama shall sit at the head" (Ketubot 103b). Rabbi Chanina did not take the post, since Rabbi Afes was older than he by two and a half years, and he sat outside and learned; only after Rabbi Afes died did he take the head of the yeshivah. His teachers were Rebbi, Rabbi Yishmael son of Rabbi Yose and Bar Kappara, and he headed the Yeshivah of Tzippori after Rabbi Afes. After his death Rabbi Yochanan opened the yeshivah in Tiberias, and stood at the head of the Torah of the Land of Israel after him.'),
  }),
  A({
    slug: 'rabbi-afes', spot2: 'רבי אפס', roles: [GEN0, L('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori')],
    name: L('רבי אפס', 'Rabbi Afes'),
    summary: L('סופרו של רבי, שעמד אחריו בראש ישיבת ציפורי.', 'Rebbi’s scribe, who followed him at the head of the Yeshivah of Tzippori.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')],
    offices: [HEAD('ראש ישיבת ציפורי', 'Head of the Yeshivah of Tzippori', 3979, 3979, ['rabbi-yehuda-hanasi'], ['rabbi-chanina-bar-chama'])],
    sources: [KET103, L('בראשית רבה עה, ה', 'Bereishit Rabbah 75:5')],
    sections: one('רבי אפס', 'רבי אפס היה "ספריה דרבי" – סופרו של רבי, שכתב את מכתביו (בראשית רבה עה, ה). אחרי פטירת רבי עמד בראש הישיבה בציפורי, משום שהיה זקן מרבי חנינא (כתובות קג ע״ב). הוא עמד בראש הישיבה אחרי רבי, ואחריו רבי חנינא בר חמא.', 'Rabbi Afes', 'Rabbi Afes was "Rebbi’s scribe", who wrote his letters (Bereishit Rabbah 75:5). After Rebbi’s death he headed the yeshivah in Tzippori, since he was older than Rabbi Chanina (Ketubot 103b). He headed the yeshivah after Rebbi, and after him came Rabbi Chanina bar Chama.'),
  }),
  A({
    slug: 'rabbi-yannai', spot2: 'רבי ינאי הכהן', roles: [GEN0, L('ראש ישיבת עכברא', 'Head of the Yeshivah of Akhbara')],
    name: L('רבי ינאי הכהן', 'Rabbi Yannai HaKohen'),
    summary: L('תלמיד רבי וראש הישיבה בעכברא: "בואי כלה, בואי כלה".', 'Rebbi’s student and head of the yeshivah in Akhbara: "Come, O bride, come, O bride".'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('שבת קיט ע״א', 'Shabbat 119a'), L('כתובות סב ע״ב', 'Ketubot 62b'), TTA],
    sections: one('בואי כלה', 'רבי ינאי היה עשיר, ונטע כרמים והקים ישיבה בעכברא שבגליל. בערב שבת היה מתעטף ועומד ואומר: "בואי כלה, בואי כלה" (שבת קיט ע״א). הוא היה תלמיד רבי, ותלמידיו היו רבי יהושע בן לוי וריש לקיש; בתו נישאה לרבי יהודה בן רבי חייא.', 'Come, O Bride', 'Rabbi Yannai was wealthy, planted vineyards and set up a yeshivah in Akhbara in the Galilee. On Shabbat eve he would wrap himself, stand and say: "Come, O bride, come, O bride" (Shabbat 119a). He was Rebbi’s student, and his students were Rabbi Yehoshua ben Levi and Reish Lakish; his daughter married Rabbi Yehudah son of Rabbi Chiya.'),
  }),
  A({
    slug: 'rabbi-chiya', spot2: 'רבי חייא רבה', roles: [GEN0, L('מסדר התוספתא', 'Compiler of the Tosefta')],
    name: L('רבי חייא רבה', 'Rabbi Chiya the Great'),
    summary: L('תלמידו וחברו של רבי, שעלה מבבל וסידר את התוספתא.', 'Rebbi’s student and colleague, who came up from Bavel and arranged the Tosefta.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('father', 'abba-bar-acha-karsla'), to('mother', 'em-rabbi-chiya'), to('spouse', 'yehudit-eshet-rabbi-chiya')],
    sources: [L('סוכה כ ע״א', 'Sukkah 20a'), L('בבא מציעא פה ע״ב', 'Bava Metzia 85b'), L('חולין קמא ע״א – ע״ב', 'Chullin 141a–b'), IRSG, PES4],
    sections: [
      sec('"כשנשתכחה תורה"', 'חז״ל אומרים: "בתחילה כשנשתכחה תורה מישראל – עלה עזרא מבבל ויסדה; חזרה ונשתכחה – עלה הלל הבבלי ויסדה; חזרה ונשתכחה – עלו רבי חייא ובניו ויסדוה" (סוכה כ ע״א). הגמרא (בבא מציעא פה ע״ב) מספרת שזרע פשתן, עשה רשתות, צד צבאים, כתב חמשה חומשי תורה על עורותיהם ולימד את התינוקות. הוא סידר את התוספתא, ו"כל מתניתא דלא תניא בי רבי חייא ובי רבי אושעיא – משבשתא היא" (חולין קמא ע״א).', '"When the Torah Was Forgotten"', 'Chazal say: "At first, when the Torah was forgotten in Israel, Ezra came up from Bavel and established it; it was forgotten again, and Hillel the Babylonian came up and established it; it was forgotten again, and Rabbi Chiya and his sons came up and established it" (Sukkah 20a). The Gemara (Bava Metzia 85b) relates that he sowed flax, made nets, hunted deer, wrote the five books of the Torah on their skins and taught the children. He arranged the Tosefta, and "any baraita not taught in the school of Rabbi Chiya and of Rabbi Oshaya is corrupt" (Chullin 141a).'),
      sec('רבותיו ותלמידיו', 'רבי חייא היה תלמיד חבר של רבי – תלמידו וגם חברו. תלמידיו היו רב, רבי אושעיא רבה ורבי יונתן בן אלעזר; בניו התאומים היו יהודה וחזקיה, ואשתו יהודית.', 'Teachers and Students', 'Rabbi Chiya was Rebbi’s talmid chaver – his student and also his colleague. His students were Rav, Rabbi Oshaya Rabba and Rabbi Yonatan ben Elazar; his twin sons were Yehudah and Chizkiyah, and his wife was Yehudit.'),
      FAMILY_CHIYA,
    ],
  }),
  A({
    slug: 'rav-shila', spot2: 'רב שילא', roles: [GEN0, L('ריש סידרא בנהרדעא', 'Head of the Order in Nehardea')],
    name: L('רב שילא', 'Rav Shila'),
    summary: L('ראש הסדר בנהרדעא לפני שמואל, ששמע מרבי.', 'Head of the order in Nehardea before Shmuel, who heard from Rebbi.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')],
    offices: [HEAD('ריש סידרא בנהרדעא', 'Head of the Order in Nehardea', null, 3979, [], ['shmuel'])],
    sources: [L('יומא כ ע״ב', 'Yoma 20b'), L('ברכות נח ע״א', 'Berachot 58a'), IRSG],
    sections: one('ריש סידרא', 'רב שילא היה "ריש סידרא" – ראש בית המדרש – בנהרדעא כשרב ירד לבבל. הגמרא (יומא כ ע״ב) מספרת שרב עמד לפניו כמתורגמן, ורב שילא לא ידע מי הוא. הוא למד מרבי, ועמד בראש נהרדעא לפני שמואל.', 'Head of the Order', 'Rav Shila was "Reish Sidra" – the head of the study hall – in Nehardea when Rav came down to Bavel. The Gemara (Yoma 20b) relates that Rav stood before him as interpreter, and Rav Shila did not know who he was. He learned from Rebbi, and headed Nehardea before Shmuel.'),
  }),
  A({
    slug: 'abba-bar-abba', spot2: 'אבא בר אבא', roles: [GEN0],
    name: L('אבא בר אבא (אבוה דשמואל)', 'Abba bar Abba (Shmuel’s father)'),
    summary: L('אביו של שמואל, מתלמידי רבי, שנקרא בגמרא "אבוה דשמואל".', 'Shmuel’s father, of Rebbi’s students, called in the Gemara "Shmuel’s father".'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('plugta', 'levi-bar-sisi')], sources: [L('ברכות יח ע״ב', 'Berachot 18b'), IRSG],
    sections: one('אבוה דשמואל', 'אבא בר אבא, שנקרא בגמרא בפשטות "אבוה דשמואל", היה ממנהיגי נהרדעא. הגמרא (ברכות יח ע״ב) מספרת שהיה ממונה על מעות יתומים, ונפטר בלי שבנו ידע היכן הפקידם, ושמואל הלך לבית הקברות לשאול אותו. הוא למד מרבי, והיה חברותא של לוי בר סיסי; בנו היה שמואל.', 'Shmuel’s Father', 'Abba bar Abba, called in the Gemara simply "Shmuel’s father", was one of the leaders of Nehardea. The Gemara (Berachot 18b) relates that he was in charge of orphans’ money, and died without his son knowing where he had placed it, and Shmuel went to the cemetery to ask him. He learned from Rebbi, and was Levi bar Sisi’s study partner; his son was Shmuel.'),
  }),
  A({
    slug: 'levi-bar-sisi', spot2: 'לוי בר סיסי', roles: [GEN0],
    name: L('לוי בר סיסי', 'Levi bar Sisi'),
    summary: L('תלמיד רבי, שירד לבבל ולימד את שמואל.', 'Rebbi’s student, who went down to Bavel and taught Shmuel.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('plugta', 'abba-bar-abba')], sources: [L('ירושלמי יבמות יב, ו', 'Yerushalmi Yevamot 12:6'), L('מגילה כב ע״ב', 'Megillah 22b'), IRSG],
    sections: one('לוי', 'לוי, שנקרא בגמרא בפשטות "לוי", היה מתלמידי רבי וחבריו. הירושלמי (יבמות יב, ו) מספר שבני סימונייא ביקשו מרבי איש שיהיה דיין, חזן ומלמד, ושלח להם את לוי בר סיסי. הוא ירד לבבל לפני רב, וישב בנהרדעא. הוא למד מרבי, לימד את שמואל, והיה חברותא של אבוה דשמואל.', 'Levi', 'Levi, called in the Gemara simply "Levi", was of Rebbi’s students and colleagues. The Yerushalmi (Yevamot 12:6) relates that the people of Simonia asked Rebbi for a man to be judge, cantor and teacher, and he sent them Levi bar Sisi. He went down to Bavel before Rav, and lived in Nehardea. He learned from Rebbi, taught Shmuel, and was the study partner of Shmuel’s father.'),
  }),
  A({
    slug: 'rabbi-abba-bar-acha', spot2: 'רבי אבא בר אחא', roles: [GEN0],
    name: L('רבי אבא בר אחא', 'Rabbi Abba bar Acha'),
    summary: L('מתלמידי רבי, מחכמי בבל.', 'One of Rebbi’s students, of the sages of Bavel.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [TTA, SDH],
    sections: one('רבי אבא בר אחא', 'רבי אבא בר אחא נמנה בין תלמידי רבי שבאו מבבל. הוא היה מחכמי בבל, ולמד מרבי.', 'Rabbi Abba bar Acha', 'Rabbi Abba bar Acha is counted among Rebbi’s students who came from Bavel. He was one of the sages of Bavel, and learned from Rebbi.'),
  }),
  A({
    slug: 'natan-2-rosh-hagola', spot2: 'נתן ב׳', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('נתן ב׳', 'Natan II, Head of the Exile'),
    summary: L('בנו של רב הונא קמא, ראש הגולה אחריו.', 'Son of Rav Huna I, Head of the Exile after him.'),
    rel: [to('father', 'rav-huna-kama')], offices: [RG(['rav-huna-kama'], ['nechemya-rosh-hagola'], 3960, 3980)], sources: [SOZ],
    sections: one('נתן ב׳', 'לפי סדר עולם זוטא, אחרי רב הונא קמא עמד בראש הגולה בנו נתן, ואחריו בנו נחמיה.', 'Natan II', 'According to Seder Olam Zuta, after Rav Huna I his son Natan headed the Exile, and after him his son Nechemyah.'),
  }),
];

// ── the first generation of the Amoraim ──
const gen1 = [
  A({
    slug: 'rabbi-yehuda-nesia-1', spot2: 'רבי יהודה נשיאה א׳', cats: ['nesiim', 'amoraim-eretz'], roles: [GEN1, L('נשיא', 'Nasi')],
    name: L('רבי יהודה נשיאה א׳', 'Rabbi Yehudah Nesiah I'),
    summary: L('נכדו של רבי והנשיא אחרי אביו, שהתיר את שמן הגויים.', 'Rebbi’s grandson and the Nasi after his father, who permitted the oil of gentiles.'),
    rel: [to('father', 'rabban-gamliel-berabbi')],
    offices: [{ label: L('שנות נשיאות', 'Years as Nasi'), from: 4000, to: 4030, before: ['rabban-gamliel-berabbi'], after: ['rabban-gamliel-4'] }],
    sources: [L('עבודה זרה לו ע״א', 'Avodah Zarah 36a'), L('משנה עבודה זרה ב, ו', 'Mishnah Avodah Zarah 2:6')],
    sections: one('רבי יהודה נשיאה', 'רבי יהודה נשיאה, בן רבן גמליאל ברבי, עמד בראש הנשיאות בימי רבי יוחנן. הוא ובית דינו התירו את שמן הגויים, שנאסר בגזירה בימי שמאי והלל (עבודה זרה לו ע״א).', 'Rabbi Yehudah Nesiah', 'Rabbi Yehudah Nesiah, son of Rabban Gamliel son of Rebbi, headed the patriarchate in the days of Rabbi Yochanan. He and his court permitted the oil of gentiles, which had been forbidden by decree in the days of Shammai and Hillel (Avodah Zarah 36a).'),
  }),
  A({
    slug: 'rabbi-hillel-ben-rabban-gamliel', spot2: 'רבי הלל', cats: ['amoraim-eretz'], roles: [GEN1],
    name: L('רבי הלל', 'Rabbi Hillel son of Rabban Gamliel'),
    summary: L('נכדו ותלמידו של רבי, אחי רבי יהודה נשיאה.', 'Rebbi’s grandson and student, brother of Rabbi Yehudah Nesiah.'),
    rel: [to('father', 'rabban-gamliel-berabbi'), to('sibling', 'rabbi-yehuda-nesia-1'), to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('תוספתא מועד קטן ב, טו', 'Tosefta Moed Katan 2:15')],
    sections: one('רבי הלל', 'התוספתא מספרת על רבי יהודה ורבי הלל, בני רבן גמליאל, שהלכו לכבול ונהגו שם בזהירות כדי שלא ילמדו מהם להקל. הוא למד תורה מסבו, רבי.', 'Rabbi Hillel', 'The Tosefta tells of Rabbi Yehudah and Rabbi Hillel, sons of Rabban Gamliel, who went to Kavul and acted there with care so that people would not learn from them to be lenient. He learned Torah from his grandfather, Rebbi.'),
  }),
  A({
    slug: 'rabbi-yochanan', spot2: 'רבי יוחנן בר נפחא', roles: [GEN1, L('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias'), L('מסדר התלמוד הירושלמי', 'Compiler of the Jerusalem Talmud')],
    name: L('רבי יוחנן בר נפחא', 'Rabbi Yochanan bar Nafcha'),
    summary: L('מייסד ישיבת טבריה ומסדר התלמוד הירושלמי, גדול אמוראי ארץ ישראל.', 'Founder of the Yeshivah of Tiberias and compiler of the Jerusalem Talmud, the greatest of the Amoraim of the Land of Israel.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('father', 'nafcha'), to('plugta', 'reish-lakish')],
    offices: [HEAD('ראש ישיבת טבריה', 'Head of the Yeshivah of Tiberias', 3990, 4039, ['rabbi-chanina-bar-chama'], ['rabbi-elazar-ben-pedat'])],
    sources: [L('בבא מציעא פד ע״א', 'Bava Metzia 84a'), L('ברכות ה ע״ב', 'Berachot 5b'), L('קידושין לא ע״ב', 'Kiddushin 31b'), L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to the Mishneh Torah')],
    sections: [
      sec('רבי יוחנן', 'רבי יוחנן נולד יתום, ולמד בצעירותו לפני רבי. הוא ייסד את הישיבה בטבריה ועמד בראשה כחמישים שנה, ולפי הרמב״ם הוא שסידר את התלמוד הירושלמי. הוא היה יפה מאוד, ואחרי שמתו עשרה מבניו היה נושא עמו עצם של בנו העשירי ומנחם בה אבלים: "דין גרמא דעשיראה ביר" (ברכות ה ע״ב).', 'Rabbi Yochanan', 'Rabbi Yochanan was born an orphan, and learned in his youth before Rebbi. He founded the yeshivah in Tiberias and headed it for about fifty years, and according to the Rambam it was he who arranged the Jerusalem Talmud. He was very handsome, and after ten of his sons died he would carry a bone of his tenth son and comfort mourners with it: "this is the bone of my tenth son" (Berachot 5b).'),
      sec('רבי יוחנן וריש לקיש', 'רבי יוחנן ראה את ריש לקיש, שהיה ראש ליסטים, קופץ אחריו לירדן, והשיב אותו לתורה ונתן לו את אחותו לאשה. הם היו "בר פלוגתא" זה של זה, וכשמת ריש לקיש הצטער רבי יוחנן מאוד: "בר לקיש, כשהייתי אומר דבר – היה מקשה לי עשרים וארבע קושיות" (בבא מציעא פד ע״א). רבי יוחנן העמיד תלמידים רבים מאוד בדור שאחריו.', 'Rabbi Yochanan and Reish Lakish', 'Rabbi Yochanan saw Reish Lakish, a bandit chief, leap after him into the Jordan, brought him back to Torah and gave him his sister as a wife. They were each other’s "bar plugta" (sparring partner), and when Reish Lakish died Rabbi Yochanan grieved greatly: "Bar Lakish – when I would say something, he would raise twenty-four questions" (Bava Metzia 84a). Rabbi Yochanan raised very many students in the next generation.'),
      sec('רבותיו ותלמידיו', 'רבי יוחנן למד מרבי, והוא חוליה בשלשלת הקבלה שמונה הרמב״ם; הוא ייסד את ישיבת טבריה אחרי פטירת רבי חנינא בר חמא, ועמד בראש התורה בארץ ישראל אחריו. אחותו נישאה לריש לקיש.', 'Teachers and Students', 'Rabbi Yochanan learned from Rebbi, and is a link in the chain of tradition listed by the Rambam; he founded the Yeshivah of Tiberias after the death of Rabbi Chanina bar Chama, and stood at the head of the Torah of the Land of Israel after him. His sister married Reish Lakish.'),
    ],
  }),
  A({
    slug: 'reish-lakish', spot2: 'רבי שמעון בן לקיש', roles: [GEN1],
    name: L('רבי שמעון בן לקיש (ריש לקיש)', 'Rabbi Shimon ben Lakish (Reish Lakish)'),
    summary: L('ראש הליסטים שחזר בתשובה ונעשה חברו ובר פלוגתיה של רבי יוחנן.', 'The bandit chief who repented and became Rabbi Yochanan’s colleague and sparring partner.'),
    rel: [to('teacher', 'bar-kappara'), to('teacher', 'rabbi-chanina-bar-chama'), to('teacher', 'rabbi-yannai'), to('spouse', 'achot-rabbi-yochanan'), to('plugta', 'rabbi-yochanan')],
    sources: [L('בבא מציעא פד ע״א', 'Bava Metzia 84a'), L('יומא ט ע״ב', 'Yoma 9b'), L('גיטין מז ע״א', 'Gittin 47a')],
    sections: one('ריש לקיש', 'ריש לקיש היה גיבור ונמכר פעם ללודאים (גיטין מז ע״א), ועמד בראש ליסטים, עד שראה את רבי יוחנן רוחץ בירדן וקפץ אחריו. רבי יוחנן אמר לו: "חילך לאורייתא", ונתן לו את אחותו. הוא נעשה מגדולי הדור, ודבריו ממלאים את שני התלמודים. רבותיו היו בר קפרא, רבי חנינא בר חמא ורבי ינאי, והוא היה בר פלוגתיה של רבי יוחנן.', 'Reish Lakish', 'Reish Lakish was a strong man who once sold himself to the gladiators (Gittin 47a), and led a band of robbers, until he saw Rabbi Yochanan bathing in the Jordan and leapt after him. Rabbi Yochanan told him: "Your strength for Torah", and gave him his sister. He became one of the greatest of the generation, and his words fill both Talmuds. His teachers were Bar Kappara, Rabbi Chanina bar Chama and Rabbi Yannai, and he was Rabbi Yochanan’s sparring partner.'),
  }),
  A({
    slug: 'ilfa', spot2: 'אילפא', roles: [GEN1],
    name: L('אילפא', 'Ilfa'),
    summary: L('תלמיד רבי וחברו של רבי יוחנן, שעסק במסחר.', 'Rebbi’s student and Rabbi Yochanan’s companion, who went into trade.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi')], sources: [L('תענית כא ע״א', 'Taanit 21a'), L('תענית כד ע״א', 'Taanit 24a')],
    sections: one('אילפא ורבי יוחנן', 'הגמרא (תענית כא ע״א) מספרת שאילפא ורבי יוחנן היו לומדים יחד בעוני גדול, ואמרו: נלך ונעסוק במסחר. רבי יוחנן שמע מלאך אומר "נפיל עלייהו האי גודא" וחזר ללימודו, ואילפא הלך. כשחזר, כבר מלך רבי יוחנן, ואילפא הראה שהוא בקי בכל ברייתות רבי חייא ורבי אושעיא. הוא היה מתלמידי רבי.', 'Ilfa and Rabbi Yochanan', 'The Gemara (Taanit 21a) relates that Ilfa and Rabbi Yochanan learned together in great poverty, and said: let us go and engage in trade. Rabbi Yochanan heard an angel say "let us drop this wall on them" and went back to his learning, and Ilfa went. When he returned, Rabbi Yochanan already headed the yeshivah, and Ilfa showed that he knew all the baraitot of Rabbi Chiya and Rabbi Oshaya. He was one of Rebbi’s students.'),
  }),
  A({
    slug: 'pazi', spot2: 'פזי', roles: [GEN1],
    name: L('פזי', 'Pazi'),
    summary: L('אביו של רבי שמעון בן פזי.', 'Father of Rabbi Shimon ben Pazi.'),
    rel: [], sources: [TTA],
    sections: one('פזי', 'פזי ידוע בעיקר כאביו של רבי שמעון בן פזי, מאמוראי ארץ ישראל.', 'Pazi', 'Pazi is known mainly as the father of Rabbi Shimon ben Pazi, of the Amoraim of the Land of Israel.'),
  }),
  A({
    slug: 'rabbi-yehoshua-ben-levi', spot2: 'רבי יהושע בן לוי', roles: [GEN1],
    name: L('רבי יהושע בן לוי', 'Rabbi Yehoshua ben Levi'),
    summary: L('גדול חכמי הדרום בלוד, שאליהו הנביא היה מתגלה אליו.', 'The greatest of the sages of the south in Lod, to whom Eliyahu the prophet would appear.'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('teacher', 'bar-kappara'), to('teacher', 'rabbi-yannai')],
    sources: [L('סנהדרין צח ע״א', 'Sanhedrin 98a'), L('כתובות עז ע״ב', 'Ketubot 77b'), L('מכות יא ע״א', 'Makkot 11a')],
    sections: one('רבי יהושע בן לוי', 'רבי יהושע בן לוי ישב בלוד. הגמרא (סנהדרין צח ע״א) מספרת שאליהו הנביא הראה לו את המשיח יושב בשערי רומי בין העניים, ואמר לו שיבוא "היום – אם בקולו תשמעו". הוא היה מתדבק במוכי ראתן ולומד תורה, ומסופר שנכנס לגן עדן בחייו (כתובות עז ע״ב). רבותיו היו רבי, בר קפרא ורבי ינאי.', 'Rabbi Yehoshua ben Levi', 'Rabbi Yehoshua ben Levi lived in Lod. The Gemara (Sanhedrin 98a) relates that Eliyahu the prophet showed him the Mashiach sitting at the gates of Rome among the poor, and told him he would come "today – if you listen to His voice". He would sit with those afflicted with ra’atan and learn Torah, and it is told that he entered Gan Eden alive (Ketubot 77b). His teachers were Rebbi, Bar Kappara and Rabbi Yannai.'),
  }),
  A({
    slug: 'rabbi-yonatan-ben-elazar', spot2: 'רבי יונתן בן אלעזר', roles: [GEN1],
    name: L('רבי יונתן בן אלעזר', 'Rabbi Yonatan ben Elazar'),
    summary: L('תלמיד רבי חייא, רבו של רבי שמואל בר נחמני.', 'Student of Rabbi Chiya, teacher of Rabbi Shmuel bar Nachmani.'),
    rel: [to('teacher', 'rabbi-chiya')], sources: [L('סנהדרין צז ע״ב', 'Sanhedrin 97b'), TTA],
    sections: one('רבי יונתן', 'רבי יונתן בן אלעזר, שנקרא בגמרא לרוב "רבי יונתן", ישב בציפורי. הרבה ממאמריו נמסרו על ידי תלמידו רבי שמואל בר נחמני, ובהם "תיפח עצמן של מחשבי קיצין" (סנהדרין צז ע״ב). הוא היה תלמיד רבי חייא, ותלמידיו היו רבי שמואל בר נחמני ורבי חייא בר אבא.', 'Rabbi Yonatan', 'Rabbi Yonatan ben Elazar, usually called in the Gemara "Rabbi Yonatan", lived in Tzippori. Many of his sayings were handed down by his student Rabbi Shmuel bar Nachmani, among them "May the bones of those who calculate the end be blasted" (Sanhedrin 97b). He was Rabbi Chiya’s student, and his students were Rabbi Shmuel bar Nachmani and Rabbi Chiya bar Abba.'),
  }),
  A({
    slug: 'rabbi-oshaya-rabba', spot2: 'רבי אושעיא רבה', roles: [GEN1, L('מסדר ברייתות', 'Compiler of baraitot')],
    name: L('רבי אושעיא רבה', 'Rabbi Oshaya the Great'),
    summary: L('בנו של רבי חמא בר ביסא, שסידר ברייתות ונקרא "אבי המשנה".', 'Son of Rabbi Chama bar Bisa, who arranged baraitot and was called "father of the Mishnah".'),
    rel: [to('father', 'rabbi-chama-bar-bisa'), to('teacher', 'bar-kappara'), muv('rabbi-chiya')],
    sources: [L('חולין קמא ע״א – ע״ב', 'Chullin 141a–b'), L('כתובות סב ע״ב', 'Ketubot 62b'), L('ירושלמי בבא קמא ד, ו', 'Yerushalmi Bava Kamma 4:6')],
    sections: one('רבי אושעיא', 'רבי אושעיא סידר ברייתות, כמו רבי חייא: "כל מתניתא דלא תניא בי רבי חייא ובי רבי אושעיא – משבשתא היא" (חולין קמא ע״א). בירושלמי הוא נקרא "אבוהון דמתניתא" – אבי המשנה. רבותיו היו בר קפרא ורבי חייא.', 'Rabbi Oshaya', 'Rabbi Oshaya arranged baraitot, like Rabbi Chiya: "any baraita not taught in the school of Rabbi Chiya and of Rabbi Oshaya is corrupt" (Chullin 141a). In the Yerushalmi he is called "the father of the Mishnah". His teachers were Bar Kappara and Rabbi Chiya.'),
  }),
  A({
    slug: 'rabbi-yehuda-ben-rabbi-chiya', spot2: 'רבי יהודה ((בן רבי חייא))', roles: [GEN1],
    name: L('רבי יהודה (בן רבי חייא)', 'Rabbi Yehudah son of Rabbi Chiya'),
    summary: L('בנו של רבי חייא, אחי חזקיה התאום, וחתנו של רבי ינאי.', 'Rabbi Chiya’s son, twin of Chizkiyah, and Rabbi Yannai’s son-in-law.'),
    rel: [to('father', 'rabbi-chiya'), to('mother', 'yehudit-eshet-rabbi-chiya'), to('sibling', 'chizkiya-ben-rabbi-chiya'), to('spouse', 'bat-rabbi-yannai')],
    sources: [L('סנהדרין לח ע״א', 'Sanhedrin 38a'), L('כתובות סב ע״ב', 'Ketubot 62b'), L('יבמות סה ע״ב', 'Yevamot 65b')],
    sections: one('בני רבי חייא', 'יהודה וחזקיה, בני רבי חייא, היו תאומים. הגמרא (סנהדרין לח ע״א) מספרת שישבו בסעודה לפני רבי ולא אמרו דבר, עד שנתנו להם יין, ואז אמרו: "אין בן דוד בא עד שיכלו שני בתי אבות מישראל" – וחז״ל למדו: "נכנס יין – יצא סוד". רבי יהודה נשא את בת רבי ינאי, ומת בצעירותו (כתובות סב ע״ב).', 'The Sons of Rabbi Chiya', 'Yehudah and Chizkiyah, the sons of Rabbi Chiya, were twins. The Gemara (Sanhedrin 38a) relates that they sat at a meal before Rebbi and said nothing, until they were given wine, and then they said: "the son of David will not come until the two fathers’ houses of Israel come to an end" – and Chazal learned: "wine enters, a secret goes out". Rabbi Yehudah married Rabbi Yannai’s daughter, and died young (Ketubot 62b).'),
  }),
  A({
    slug: 'chizkiya-ben-rabbi-chiya', spot2: 'חזקיה ((בן רבי חייא))', roles: [GEN1],
    name: L('חזקיה (בן רבי חייא)', 'Chizkiyah son of Rabbi Chiya'),
    summary: L('בנו של רבי חייא, שעמד בראש בית מדרש בטבריה.', 'Rabbi Chiya’s son, who headed a study hall in Tiberias.'),
    rel: [to('father', 'rabbi-chiya'), to('mother', 'yehudit-eshet-rabbi-chiya'), to('sibling', 'rabbi-yehuda-ben-rabbi-chiya')],
    sources: [L('סנהדרין לח ע״א', 'Sanhedrin 38a'), L('יבמות סה ע״ב', 'Yevamot 65b'), TTA],
    sections: one('חזקיה', 'חזקיה, אחיו התאום של רבי יהודה, היה מגדולי הדור הראשון לאמוראים בארץ ישראל, ובית מדרשו היה בטבריה. בגמרא מרבים להביא את מחלוקותיו עם רבי יוחנן, ו"תנא דבי חזקיה" – הברייתות של בית מדרשו – מובאות בה פעמים רבות.', 'Chizkiyah', 'Chizkiyah, twin brother of Rabbi Yehudah, was one of the greatest of the first generation of Amoraim in the Land of Israel, and his study hall was in Tiberias. The Gemara often brings his disputes with Rabbi Yochanan, and "it was taught in the school of Chizkiyah" – the baraitot of his study hall – appears in it many times.'),
  }),
  A({
    slug: 'rabba-bar-chana', spot2: 'רבה בר חנה?', roles: [GEN1],
    name: L('רבה בר חנה', 'Rabba bar Chana'),
    summary: L('בן אחיו של רבי חייא, שעלה עמו לארץ ישראל וחזר לבבל.', 'Rabbi Chiya’s nephew, who went up with him to the Land of Israel and returned to Bavel.'),
    rel: [to('father', 'chana-ben-karsla')], sources: [PES4, SAN5],
    sections: one('רבה בר חנה', 'רבה בר חנה היה בנו של חנה, אחיו של רבי חייא, ועלה עם דודו ועם רב לארץ ישראל. הוא חזר לבבל, ומוזכר בגמרא יחד עם רב. באילן ליד שמו יש סימן שאלה, משום שיש דעה שרבה בר חנה הוא רבה בר בר חנה – בעל הסיפורים המופלאים – ששמו נכתב בקיצור.', 'Rabba bar Chana', 'Rabba bar Chana was the son of Chana, Rabbi Chiya’s brother, and went up with his uncle and with Rav to the Land of Israel. He returned to Bavel, and is mentioned in the Gemara together with Rav. There is a question mark beside his name, since there is an opinion that Rabba bar Chana is Rabba bar bar Chana – the teller of the wondrous tales – with his name written short.'),
  }),
  A({
    slug: 'rav-assi-bavli', spot2: 'רב אסי', roles: [GEN1],
    name: L('רב אסי', 'Rav Assi'),
    summary: L('חכם בבלי זקן, תלמידו וחברו של רב.', 'An elder Babylonian sage, Rav’s student and colleague.'),
    rel: [to('teacher', 'rav-abba-arikha')], sources: [TTA, SDH],
    sections: one('רב אסי', 'רב אסי (בלי יו״ד – לא רבי אסי מארץ ישראל) היה מחכמי בבל בדור הראשון, ונשא ונתן עם רב. הוא היה תלמיד חבר של רב – למד ממנו, אך היה גם חברו.', 'Rav Assi', 'Rav Assi (not Rabbi Assi of the Land of Israel) was one of the sages of Bavel in the first generation, and debated with Rav. He was Rav’s talmid chaver – he learned from him, but was also his colleague.'),
  }),
  A({
    slug: 'rav-abba-arikha', spot2: 'אבא בר אייבו "רב"', roles: [GEN1, L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)'), L('מייסד ישיבת סורא', 'Founder of the Sura yeshivah')],
    name: L('רב (אבא בר אייבו)', 'Rav (Abba bar Ibo)'),
    summary: L('תלמיד רבי ורבי חייא, שייסד את ישיבת סורא; "הלכתא כרב באיסורי".', 'Student of Rebbi and Rabbi Chiya, who founded the Sura yeshivah; "the law follows Rav in prohibitions".'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('teacher', 'rabbi-chiya'), to('father', 'aivu'), to('mother', 'ima-em-rav'), to('plugta', 'shmuel')],
    offices: [HEAD('ראש ישיבת סורא', 'Head of the Sura yeshivah', 3979, 4003, [], ['rav-huna'])],
    sources: [IRSG, SAN5, L('עירובין נ ע״ב', 'Eruvin 50b'), L('בכורות מט ע״ב', 'Bechorot 49b'), L('ירושלמי ראש השנה א, ג', 'Yerushalmi Rosh Hashanah 1:3')],
    sections: [
      sec('בבית מדרשו של רבי', 'רב, ששמו אבא בר אייבו, נולד בבבל ועלה לארץ ישראל עם דודו רבי חייא, ולמד תורה מפי רבי יהודה הנשיא. בשל גדולתו נקרא בפי כל "רב" סתם, כרבן של כל בני הגולה. חז״ל אומרים עליו "רב תנא הוא ופליג": מעמדו כמעמד תנא, ולכן הוא רשאי לחלוק על דברי תנאים (עירובין נ ע״ב).', 'In the Study Hall of Rebbi', 'Rav, whose name was Abba bar Ibo, was born in Babylon and went up to the Land of Israel with his uncle Rabbi Chiya, where he learned Torah from Rabbi Yehudah HaNasi. Because of his greatness he was called simply "Rav", the teacher of all the Diaspora. Chazal say of him "Rav is a Tanna and may disagree": his standing was like that of a Tanna, so he could disagree with Tannaim (Eruvin 50b).'),
      sec('ישיבת סורא', 'בשנת ג׳תתקע״ט ירד רב לבבל, ולפי איגרת רב שרירא גאון ייסד את ישיבת סורא, שהייתה במשך מאות שנים, יחד עם פומבדיתא, מרכז התורה של העם היהודי. הוא עמד בראשה עד פטירתו בשנת ד׳ג׳.', 'The Sura Yeshivah', 'In the year 3979 Rav went down to Babylon, and according to the Letter of Rav Sherira Gaon he founded the Sura yeshivah, which for hundreds of years, together with Pumbedita, was the center of Torah for the Jewish people. He headed it until his passing in 4003.'),
      sec('רב ושמואל', 'רב וחברו שמואל, ראש ישיבת נהרדעא, נחלקו בהלכות רבות, ומחלוקותיהם ממלאות את התלמוד הבבלי. נקבע: "הלכתא כרב באיסורי, וכשמואל בדיני" (בכורות מט ע״ב). לפי המסורת רב חיבר את נוסח "עלינו לשבח" ואת ברכות מלכויות, זכרונות ושופרות של ראש השנה, הנקראות בירושלמי "תקיעתא דבי רב".', 'Rav and Shmuel', 'Rav and his colleague Shmuel, head of the Nehardea academy, disagreed in many laws, and their disputes fill the Babylonian Talmud. The rule was set: "The halachah follows Rav in matters of prohibition, and Shmuel in monetary law" (Bechorot 49b). According to tradition Rav composed the prayer "Aleinu LeShabeach" and the blessings of Kingship, Remembrance and Shofar of Rosh Hashanah, which the Jerusalem Talmud calls "the shofar blessings of the school of Rav".'),
      sec('רבותיו ותלמידיו', 'רב היה ראש המתיבתא הכוללת – הישיבה הראשית של בבל בדורו. הוא למד מרבי – והוא חוליה בשלשלת הקבלה שמונה הרמב״ם – ומדודו רבי חייא. שמואל היה בר פלוגתיה, ורב אסי היה תלמיד חבר שלו.', 'Teachers and Students', 'Rav was Rosh HaMetivta HaKolelet – head of the leading yeshivah of Bavel in his generation. He learned from Rebbi – a link in the chain of tradition listed by the Rambam – and from his uncle Rabbi Chiya. Shmuel was his sparring partner, and Rav Assi was his talmid chaver.'),
      FAMILY_CHIYA,
    ],
  }),
  A({
    slug: 'shmuel', spot2: 'שמואל (מייסד ישיבת נהרדעא 3979-4010)', roles: [GEN1, L('ראש המתיבתא הכוללת', 'Rosh HaMetivta HaKolelet (head of the general yeshivah)'), L('ראש ישיבת נהרדעא', 'Head of the Nehardea yeshivah')],
    name: L('שמואל (האמורא)', 'Shmuel (the Amora)'),
    summary: L('ראש ישיבת נהרדעא, חברו של רב, רופא ותוכן: "דינא דמלכותא דינא".', 'Head of the Nehardea yeshivah, Rav’s colleague, physician and astronomer: "the law of the land is the law".'),
    rel: [to('teacher', 'rabbi-yehuda-hanasi'), to('teacher', 'levi-bar-sisi'), to('father', 'abba-bar-abba'), to('plugta', 'rav-abba-arikha')],
    offices: [HEAD('ראש ישיבת נהרדעא', 'Head of the Nehardea yeshivah', 3979, 4010, ['rav-shila'], ['rav-nachman'])],
    sources: [L('ברכות נח ע״ב', 'Berachot 58b'), L('נדרים כה ע״א', 'Nedarim 25a'), L('בבא קמא קיג ע״א', 'Bava Kamma 113a'), L('בכורות מט ע״ב', 'Bechorot 49b'), IRSG],
    sections: [
      sec('שמואל ירחינאה', 'שמואל היה בקי באסטרונומיה, ואמר: "נהירין לי שבילי דשמיא כשבילי דנהרדעא" (ברכות נח ע״ב), ולכן נקרא "ירחינאה". הוא היה גם רופא, ופסק "דינא דמלכותא דינא" – חוק המדינה מחייב (בבא קמא קיג ע״א). ההלכה כמותו בדיני ממונות: "הלכתא כרב באיסורי, וכשמואל בדיני".', 'Shmuel Yarchina’ah', 'Shmuel was expert in astronomy, and said: "the paths of the heavens are as clear to me as the paths of Nehardea" (Berachot 58b), and so he was called "Yarchina’ah" (of the moon). He was also a physician, and ruled "the law of the land is the law" (Bava Kamma 113a). The law follows him in monetary matters: "the law follows Rav in prohibitions, and Shmuel in money law".'),
      sec('רבותיו ותלמידיו', 'שמואל היה ראש המתיבתא הכוללת, בנהרדעא. הוא למד מרבי – והוא חוליה בשלשלת הקבלה שמונה הרמב״ם – ומלוי בר סיסי. רב היה בר פלוגתיה. הוא עמד בראש נהרדעא אחרי רב שילא.', 'Teachers and Students', 'Shmuel was Rosh HaMetivta HaKolelet, in Nehardea. He learned from Rebbi – a link in the chain of tradition listed by the Rambam – and from Levi bar Sisi. Rav was his sparring partner. He headed Nehardea after Rav Shila.'),
    ],
  }),
  A({
    slug: 'rav-yechezkel', spot2: 'רב יחזקאל', roles: [GEN1],
    name: L('רב יחזקאל', 'Rav Yechezkel'),
    summary: L('אביהם של רב יהודה ורמי בר יחזקאל, שנודע בחסידותו.', 'Father of Rav Yehudah and Rami bar Yechezkel, known for his piety.'),
    rel: [], sources: [TTA, SDH],
    sections: one('רב יחזקאל', 'רב יחזקאל, מחכמי נהרדעא בדור הראשון, ידוע בעיקר כאביהם של רב יהודה – מייסד ישיבת פומבדיתא – ושל רמי בר יחזקאל.', 'Rav Yechezkel', 'Rav Yechezkel, of the sages of Nehardea in the first generation, is known mainly as the father of Rav Yehudah – founder of the Pumbedita yeshivah – and of Rami bar Yechezkel.'),
  }),
  A({
    slug: 'rav-shmuel-bar-marta', spot2: 'רב שמואל בר מרתא', roles: [GEN1],
    name: L('רב שמואל בר מרתא', 'Rav Shmuel bar Marta'),
    summary: L('בנו של מרתא, אחי רבי חייא – בן דודו של רב.', 'Son of Marta, Rabbi Chiya’s brother – Rav’s cousin.'),
    rel: [to('father', 'marta-ben-karsla')], sources: [PES4, TTA],
    sections: one('רב שמואל בר מרתא', 'רב שמואל בר מרתא, מחכמי סורא בדור הראשון, היה בנו של מרתא, מבני אבא בר אחא כרסלא.', 'Rav Shmuel bar Marta', 'Rav Shmuel bar Marta, of the sages of Sura in the first generation, was the son of Marta, of the sons of Abba bar Acha Karsla.'),
  }),
  A({
    slug: 'rav-kahana-1', spot2: 'רב כהנא א׳', roles: [GEN1],
    name: L('רב כהנא א׳', 'Rav Kahana I'),
    summary: L('מחכמי בבל בדורו של רב.', 'One of the sages of Bavel in Rav’s generation.'),
    rel: [], sources: [TTA, SDH],
    sections: one('רב כהנא', 'בתלמוד יש כמה חכמים בשם רב כהנא, ובאילן שלנו הם ממוספרים. רב כהנא הראשון היה מחכמי סורא בדור הראשון, בימי רב.', 'Rav Kahana', 'There are several sages named Rav Kahana in the Talmud, and on our tree they are numbered. Rav Kahana I was one of the sages of Sura in the first generation, in Rav’s days.'),
  }),
  A({
    slug: 'eliezer-zeira', spot2: 'אליעזר זעירא', roles: [GEN1],
    name: L('אליעזר זעירא', 'Eliezer Zeira'),
    summary: L('שנעל נעליים שחורות בנהרדעא, באבל על ירושלים.', 'Who wore black shoes in Nehardea, in mourning for Jerusalem.'),
    rel: [], sources: [L('בבא קמא נט ע״ב', 'Bava Kamma 59b')],
    sections: one('נעליים שחורות', 'הגמרא (בבא קמא נט ע״ב) מספרת שאליעזר זעירא נעל נעליים שחורות והלך בשוק של נהרדעא. אנשי ריש גלותא שאלו אותו למה, ואמר: "דקא מאבילנא אירושלים" – אני מתאבל על ירושלים. הם אסרו אותו, והוא הוכיח שהוא חכם, ושוחרר.', 'Black Shoes', 'The Gemara (Bava Kamma 59b) relates that Eliezer Zeira wore black shoes and walked in the market of Nehardea. The Exilarch’s men asked him why, and he said: "because I am mourning for Jerusalem". They imprisoned him, and he proved that he was a sage, and was released.'),
  }),
  A({
    slug: 'karna', spot2: 'קרנא', roles: [GEN1, L('דיין', 'Judge')],
    name: L('קרנא', 'Karna'),
    summary: L('"דיינא דגולה" בנהרדעא, בדורם של רב ושמואל.', '"Judge of the Exile" in Nehardea, in the generation of Rav and Shmuel.'),
    rel: [], sources: [L('סנהדרין יז ע״ב', 'Sanhedrin 17b'), L('כתובות קה ע״א', 'Ketubot 105a')],
    sections: one('דיינא דגולה', 'קרנא היה מ"דייני גולה" (סנהדרין יז ע״ב). הגמרא (כתובות קה ע״א) מספרת שהיה לוקח איסתרא מן הזכאי ואיסתרא מן החייב, ודן להם – שכר על שהיה מניח מלאכתו, ולא שוחד. כשרב ירד לבבל, בחן אותו קרנא בשאלות כדי לדעת מי הוא.', 'Judge of the Exile', 'Karna was one of the "judges of the Exile" (Sanhedrin 17b). The Gemara (Ketubot 105a) relates that he would take a coin from the innocent party and a coin from the guilty, and judge them – payment for leaving his work, not a bribe. When Rav came down to Bavel, Karna tested him with questions to know who he was.'),
  }),
  A({
    slug: 'nechemya-rosh-hagola', spot2: 'נחמיה', roles: [L('ראש הגולה', 'Head of the Exile')],
    name: L('נחמיה ראש הגולה', 'Nechemyah, Head of the Exile'),
    summary: L('בנו של נתן ב׳, ראש הגולה בימי רב ושמואל.', 'Son of Natan II, Head of the Exile in the days of Rav and Shmuel.'),
    rel: [to('father', 'natan-2-rosh-hagola')], offices: [RG(['natan-2-rosh-hagola'], ['mar-ukva-1'], 3980, 4000)], sources: [SOZ],
    sections: one('נחמיה', 'לפי סדר עולם זוטא עמד נחמיה בראש הגולה אחרי אביו נתן, בדורם של רב ושמואל. אחריו עמד בראש הגולה בנו, מר עוקבא. ילתא, אשת רב נחמן, מצאצאיו בסימן שאלה – לא ידוע בוודאות בתו של מי הייתה.', 'Nechemyah', 'According to Seder Olam Zuta, Nechemyah headed the Exile after his father Natan, in the generation of Rav and Shmuel. After him his son Mar Ukva headed the Exile. Yalta, Rav Nachman’s wife, is his descendant with a question mark – it is not known for certain whose daughter she was.'),
  }),
];

module.exports = [...tannaim, ...family, ...transition, ...gen1];
