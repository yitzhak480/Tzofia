// The Zugot, the Nesi'im of Hillel's house, and the sages around them.
// Brown arrows on the poster = teacher / student; black arrows = who came
// after whom in a role (Nasi, Av Beit Din).
const { L, sec, to, nm } = require('./helpers');

const p = (e) => ({ gender: 'male', cats: [], ...e });
const w = (e) => ({ gender: 'female', cats: [], ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const NASI = (before, after, from, to2, note) => ({ label: L('שנות נשיאות', 'Years as Nasi'), before, after, from, to: to2, note });
const ABD = (before, after) => ({ label: L('אב בית דין', 'Av Beit Din'), before, after });
const AVOT = (n) => L(`משנה אבות א, ${n}`, `Mishnah Avot 1:${n}`);
const CHAGIGA = L('משנה חגיגה ב, ב; חגיגה טז ע״ב', 'Mishnah Chagigah 2:2; Chagigah 16b');
const PAIR = sec('הזוגות', 'המשנה בחגיגה (ב, ב) מונה חמישה זוגות שעמדו בראש החכמים אחרי אנשי כנסת הגדולה, ואומרת: "הראשונים היו נשיאים, ושניים להם אבות בית דין". באילן שלנו החצים השחורים מראים מי בא אחרי מי בכל תפקיד, והחצים החומים מראים שכל זוג קיבל את התורה מהזוג שלפניו.',
  'The Pairs', 'The Mishnah in Chagigah (2:2) counts five pairs who led the sages after the Men of the Great Assembly, and says: "The first ones were Nesi’im, and the second ones were Heads of the Court". On our tree the black arrows show who came after whom in each role, and the brown arrows show that each pair received the Torah from the pair before it.');
const NASI_NOTE = sec('מי היה הנשיא?', 'באילן שלנו יש הערה: נחלקו בגמרא (חגיגה טז ע״ב) מי מבין יהודה בן טבאי ושמעון בן שטח היה הנשיא ומי היה אב בית הדין. לפי סדר המשנה יהודה בן טבאי, שנזכר ראשון, היה הנשיא; ויש ברייתא שאומרת ששמעון בן שטח היה הנשיא. באילן שמעון בן שטח מסומן כנשיא, ויהודה בן טבאי כאב בית דין.',
  'Who Was the Nasi?', 'Our tree has a note: the Gemara (Chagigah 16b) records a dispute over which of Yehudah ben Tabai and Shimon ben Shetach was the Nasi and which the Av Beit Din. By the order of the Mishnah, Yehudah ben Tabai, named first, was the Nasi; and a baraita says Shimon ben Shetach was the Nasi. On our tree Shimon ben Shetach is marked as Nasi, and Yehudah ben Tabai as Av Beit Din.');

const zugot = [
  p({
    slug: 'antigonus-ish-socho', name: L('אנטיגנוס איש סוכו', 'Antigonus of Socho'), spot: 'אנטיגנוס איש סוכו',
    summary: L('תלמיד שמעון הצדיק: "אל תהיו כעבדים המשמשין את הרב על מנת לקבל פרס".', 'Student of Shimon HaTzadik: "Do not be like servants who serve their master in order to receive a reward".'),
    rel: [to('teacher', 'shimon-hatzadik'), to('student', 'yose-ben-yoezer'), to('student', 'yose-ben-yochanan'), to('student', 'tzadok-talmid-antigonus'), to('student', 'baitos'), to('related', 'kat-hatzedukim')],
    sources: [AVOT(3), L('אבות דרבי נתן ה', 'Avot deRabbi Natan 5')],
    sections: one('אנטיגנוס', 'אנטיגנוס קיבל את התורה משמעון הצדיק, ואמר: "אל תהיו כעבדים המשמשין את הרב על מנת לקבל פרס, אלא הוו כעבדים המשמשין את הרב שלא על מנת לקבל פרס, ויהי מורא שמים עליכם". באילן שלנו יוצאים ממנו חצים חומים לארבעה תלמידים: יוסי בן יועזר ויוסי בן יוחנן, וצדוק וביתוס – שלפי אבות דרבי נתן לא הבינו את דבריו, ומהם יצאו הצדוקים והבייתוסים.',
      'Antigonus', 'Antigonus received the Torah from Shimon HaTzadik, and said: "Do not be like servants who serve their master in order to receive a reward, but be like servants who serve their master not in order to receive a reward, and let the fear of Heaven be upon you". On our tree brown arrows go from him to four students: Yose ben Yoezer and Yose ben Yochanan, and Tzadok and Baitos – who, according to Avot deRabbi Natan, misunderstood his words, and from them came the Sadducees and the Boethusians.'),
  }),
  p({
    slug: 'yose-ben-yoezer', cats: ['nesiim', 'levites'], name: L('יוסי בן יועזר', 'Yose ben Yoezer'), spot: 'יוסי בן יועזר',
    roles: [L('נשיא', 'Nasi')],
    summary: L('איש צרדה, נשיא הזוג הראשון: "יהי ביתך בית ועד לחכמים".', 'Of Tzereidah, Nasi of the first pair: "Let your house be a meeting place for the sages".'),
    rel: [to('father', 'yoezer'), to('teacher', 'antigonus-ish-socho'), to('related', 'yose-ben-yochanan'), to('student', 'yehoshua-ben-perachya'), to('student', 'nitai-haarbeli'), to('related', 'yakim-ish-tzerorot'), to('related', 'bat-yoezer')],
    offices: [NASI([], ['yehoshua-ben-perachya'])],
    sources: [AVOT(4), CHAGIGA, L('משנה חגיגה ב, ז', 'Mishnah Chagigah 2:7'), L('בראשית רבה סה, כב', 'Bereishit Rabbah 65:22'), L('סוטה מז ע״ב', 'Sotah 47b')],
    sections: [
      sec('יוסי בן יועזר', 'יוסי בן יועזר איש צרדה היה כהן, ונקרא "חסיד שבכהונה" (חגיגה ב, ז). הוא אמר: "יהי ביתך בית ועד לחכמים, והוי מתאבק בעפר רגליהם, והוי שותה בצמא את דבריהם". עליו ועל חברו אמרו חז״ל: "משמתו יוסי בן יועזר ויוסי בן יוחנן בטלו האשכולות" – "איש שהכל בו" (סוטה מז ע״ב).', 'Yose ben Yoezer', 'Yose ben Yoezer of Tzereidah was a Kohen, and was called "the pious one of the priesthood" (Chagigah 2:7). He said: "Let your house be a meeting place for the sages, sit in the dust of their feet, and drink their words thirstily". Of him and his colleague Chazal said: "When Yose ben Yoezer and Yose ben Yochanan died, the clusters (eshkolot) ceased" – "a man who has everything in him" (Sotah 47b).'),
      sec('מותו', 'המדרש (בראשית רבה סה, כב) מספר שיוסי בן יועזר נלקח לתלייה בגזירות היוונים, ובן אחותו יקים איש צרורות רכב לפניו על סוס בשבת ולעג לו. דבריו של יוסי נגעו בלבו, והוא עשה תשובה. באילן החץ מבת יועזר יוצא אל יקים.', 'His Death', 'The Midrash (Bereishit Rabbah 65:22) relates that Yose ben Yoezer was taken to be hanged under the Greek decrees, and his sister’s son, Yakim of Tzerorot, rode before him on a horse on Shabbat and mocked him. Yose’s words touched his heart, and he repented. On our tree the line from Yoezer’s daughter goes to Yakim.'),
      PAIR,
    ],
  }),
  p({
    slug: 'yose-ben-yochanan', cats: ['av-beit-din'], name: L('יוסי בן יוחנן', 'Yose ben Yochanan'), spot: 'יוסי בן יוחנן',
    roles: [L('אב בית דין', 'Av Beit Din')],
    summary: L('איש ירושלים, אב בית הדין בזוג הראשון: "יהי ביתך פתוח לרווחה, ויהיו עניים בני ביתך".', 'Of Jerusalem, Av Beit Din of the first pair: "Let your house be wide open, and let the poor be members of your household".'),
    rel: [to('teacher', 'antigonus-ish-socho'), to('related', 'yose-ben-yoezer'), to('student', 'yehoshua-ben-perachya'), to('student', 'nitai-haarbeli')],
    offices: [ABD([], ['nitai-haarbeli'])], sources: [AVOT(4), AVOT(5), CHAGIGA, L('סוטה מז ע״ב', 'Sotah 47b')],
    sections: [sec('יוסי בן יוחנן', 'יוסי בן יוחנן איש ירושלים קיבל מאנטיגנוס יחד עם יוסי בן יועזר, ואמר: "יהי ביתך פתוח לרווחה, ויהיו עניים בני ביתך, ואל תרבה שיחה עם האשה". הוא ויוסי בן יועזר נקראו "אשכולות".', 'Yose ben Yochanan', 'Yose ben Yochanan of Jerusalem received from Antigonus together with Yose ben Yoezer, and said: "Let your house be wide open, let the poor be members of your household, and do not talk too much with women". He and Yose ben Yoezer were called "clusters" (eshkolot).'), PAIR],
  }),
  p({
    slug: 'yehoshua-ben-perachya', cats: ['nesiim'], name: L('יהושע בן פרחיה', 'Yehoshua ben Perachya'), spot: 'יהושע בן פרחיה',
    roles: [L('נשיא', 'Nasi')],
    summary: L('נשיא הזוג השני: "עשה לך רב, וקנה לך חבר, והוי דן את כל האדם לכף זכות".', 'Nasi of the second pair: "Make for yourself a teacher, acquire for yourself a friend, and judge every person favourably".'),
    rel: [to('teacher', 'yose-ben-yoezer'), to('teacher', 'yose-ben-yochanan'), to('related', 'nitai-haarbeli'), to('student', 'shimon-ben-shetach'), to('student', 'yehuda-ben-tabai')],
    offices: [NASI(['yose-ben-yoezer'], ['shimon-ben-shetach'])], sources: [AVOT(6), CHAGIGA, L('סוטה מז ע״א', 'Sotah 47a')],
    sections: [sec('יהושע בן פרחיה', 'יהושע בן פרחיה אמר: "עשה לך רב, וקנה לך חבר, והוי דן את כל האדם לכף זכות". הגמרא (סוטה מז ע״א) מספרת שבימי ינאי המלך, כשהרג את החכמים, ברח לאלכסנדריה של מצרים, וחזר כששלח אליו שמעון בן שטח.', 'Yehoshua ben Perachya', 'Yehoshua ben Perachya said: "Make for yourself a teacher, acquire for yourself a friend, and judge every person favourably". The Gemara (Sotah 47a) relates that in the days of King Yannai, when he killed the sages, he fled to Alexandria in Egypt, and returned when Shimon ben Shetach sent for him.'), PAIR],
  }),
  p({
    slug: 'nitai-haarbeli', cats: ['av-beit-din'], name: L('נתאי הארבלי', 'Nitai of Arbel'), spot: 'נתאי הארבלי',
    roles: [L('אב בית דין', 'Av Beit Din')],
    summary: L('אב בית הדין בזוג השני: "הרחק משכן רע, ואל תתחבר לרשע".', 'Av Beit Din of the second pair: "Keep far from a bad neighbour, and do not join with the wicked".'),
    rel: [to('teacher', 'yose-ben-yoezer'), to('teacher', 'yose-ben-yochanan'), to('related', 'yehoshua-ben-perachya'), to('student', 'shimon-ben-shetach'), to('student', 'yehuda-ben-tabai')],
    offices: [ABD(['yose-ben-yochanan'], ['yehuda-ben-tabai'])], sources: [AVOT(7), CHAGIGA],
    sections: [sec('נתאי הארבלי', 'נתאי מארבל שבגליל אמר: "הרחק משכן רע, ואל תתחבר לרשע, ואל תתייאש מן הפורענות".', 'Nitai of Arbel', 'Nitai of Arbel in the Galilee said: "Keep far from a bad neighbour, do not join with the wicked, and do not give up belief in retribution".'), PAIR],
  }),
  p({
    slug: 'shimon-ben-shetach', cats: ['nesiim'], name: L('שמעון בן שטח', 'Shimon ben Shetach'), spot: 'שמעון בן שטח',
    roles: [L('נשיא', 'Nasi')],
    summary: L('אחי שלומציון המלכה, ש"החזיר את התורה ליושנה" אחרי שינאי הרג את החכמים.', 'Brother of Queen Shlomtzion, who "restored the Torah to its former glory" after Yannai killed the sages.'),
    rel: [to('sibling', 'shlomtzion'), to('teacher', 'yehoshua-ben-perachya'), to('teacher', 'nitai-haarbeli'), to('related', 'yehuda-ben-tabai'), to('student', 'shmaya'), to('student', 'avtalyon'), to('related', 'alexander-yanai'), to('related', 'choni-hamaagel'), to('related', 'yanai-veshlomtzion')],
    offices: [NASI(['yehoshua-ben-perachya'], ['shmaya'])],
    sources: [AVOT(9), CHAGIGA, L('קידושין סו ע״א', 'Kiddushin 66a'), L('ברכות מח ע״א', 'Berachot 48a'), L('שבת יד ע״ב; כתובות פב ע״ב', 'Shabbat 14b; Ketubot 82b'), L('תענית יט ע״א', 'Taanit 19a')],
    sections: [
      sec('שמעון בן שטח', 'שמעון בן שטח היה אחיה של שלומציון המלכה, אשת ינאי. כשינאי הרג את חכמי ישראל הסתתר, ואחר כך "החזיר את התורה ליושנה" (קידושין סו ע״א). הוא תיקן את הכתובה לאשה (כתובות פב ע״ב), ואמר: "הוי מרבה לחקור את העדים, והוי זהיר בדבריך, שמא מתוכם ילמדו לשקר". הוא גם שלח לחוני המעגל: "אלמלא חוני אתה – גוזרני עליך נידוי" (תענית יט ע״א).', 'Shimon ben Shetach', 'Shimon ben Shetach was the brother of Queen Shlomtzion, Yannai’s wife. When Yannai killed the sages of Israel he hid, and afterwards "restored the Torah to its former glory" (Kiddushin 66a). He instituted the ketubah for the wife (Ketubot 82b), and said: "Examine the witnesses thoroughly, and be careful with your words, lest from them they learn to lie". He also sent to Choni HaMe’agel: "Were you not Choni, I would decree excommunication upon you" (Taanit 19a).'),
      NASI_NOTE, PAIR,
    ],
  }),
  p({
    slug: 'yehuda-ben-tabai', cats: ['av-beit-din'], name: L('יהודה בן טבאי', 'Yehudah ben Tabai'), spot: 'יהודה בן טבאי',
    roles: [L('אב בית דין', 'Av Beit Din')],
    summary: L('בן זוגו של שמעון בן שטח: "אל תעש עצמך כעורכי הדיינין".', 'Shimon ben Shetach’s partner: "Do not act as an advocate".'),
    rel: [to('teacher', 'yehoshua-ben-perachya'), to('teacher', 'nitai-haarbeli'), to('related', 'shimon-ben-shetach'), to('student', 'shmaya'), to('student', 'avtalyon')],
    offices: [ABD(['nitai-haarbeli'], ['avtalyon'])], sources: [AVOT(8), CHAGIGA, L('מכות ה ע״ב', 'Makkot 5b')],
    sections: [sec('יהודה בן טבאי', 'יהודה בן טבאי אמר: "אל תעש עצמך כעורכי הדיינין; וכשיהיו בעלי הדין עומדים לפניך יהיו בעיניך כרשעים, וכשנפטרים מלפניך יהיו בעיניך כזכאין". הגמרא (מכות ה ע״ב) מספרת שפעם הרג עד זומם שלא כדין, ומאותו יום לא הורה אלא לפני שמעון בן שטח.', 'Yehudah ben Tabai', 'Yehudah ben Tabai said: "Do not act as an advocate; when the litigants stand before you, regard them both as guilty, and when they leave you, regard them both as innocent". The Gemara (Makkot 5b) relates that he once executed a false witness wrongly, and from that day he never ruled except before Shimon ben Shetach.'), NASI_NOTE, PAIR],
  }),
  p({
    slug: 'shmaya', cats: ['nesiim', 'gerei-tzedek'], name: L('שמעיה', 'Shemayah'), spot: 'שמעיה (הנשיא)',
    roles: [L('נשיא', 'Nasi')],
    summary: L('נשיא הזוג הרביעי, מצאצאי סנחריב: "אהוב את המלאכה ושנא את הרבנות".', 'Nasi of the fourth pair, a descendant of Sancheriv: "Love work and hate lordship".'),
    rel: [to('teacher', 'shimon-ben-shetach'), to('teacher', 'yehuda-ben-tabai'), to('related', 'avtalyon'), to('student', 'hillel-hazaken'), to('student', 'shammai')],
    offices: [NASI(['shimon-ben-shetach'], ['hillel-hazaken'])], sources: [AVOT(10), CHAGIGA, L('גיטין נז ע״ב', 'Gittin 57b'), L('יומא עא ע״ב', 'Yoma 71b'), L('פסחים סו ע״א', 'Pesachim 66a')],
    sections: [sec('שמעיה ואבטליון', 'שמעיה ואבטליון באו מן העמים: חז״ל אומרים שהיו מבני בניו של סנחריב, "ולימדו תורה ברבים" (גיטין נז ע״ב) – ולכן באילן הם בצבע גרי הצדק. שמעיה אמר: "אהוב את המלאכה, ושנא את הרבנות, ואל תתוודע לרשות". הלל עלה מבבל ללמוד אצלם, ובני בתירא מינו אותו לנשיא משום ש"שימש שני גדולי הדור, שמעיה ואבטליון" (פסחים סו ע״א).', 'Shemayah and Avtalyon', 'Shemayah and Avtalyon came from the nations: Chazal say they were descendants of Sancheriv, "and taught Torah in public" (Gittin 57b) – so on our tree they are in the colour of the righteous converts. Shemayah said: "Love work, hate lordship, and do not become close to the authorities". Hillel came up from Bavel to learn from them, and the Bnei Beteira appointed him Nasi because he "served the two great men of the generation, Shemayah and Avtalyon" (Pesachim 66a).'), PAIR],
  }),
  p({
    slug: 'avtalyon', cats: ['av-beit-din', 'gerei-tzedek'], name: L('אבטליון', 'Avtalyon'), spot: 'אבטליון',
    roles: [L('אב בית דין', 'Av Beit Din')],
    summary: L('אב בית הדין בזוג הרביעי, מצאצאי סנחריב: "חכמים, הזהרו בדבריכם".', 'Av Beit Din of the fourth pair, a descendant of Sancheriv: "Sages, be careful with your words".'),
    rel: [to('teacher', 'shimon-ben-shetach'), to('teacher', 'yehuda-ben-tabai'), to('related', 'shmaya'), to('student', 'hillel-hazaken'), to('student', 'shammai')],
    offices: [ABD(['yehuda-ben-tabai'], ['menachem-av-beit-din'])], sources: [AVOT(11), CHAGIGA, L('גיטין נז ע״ב', 'Gittin 57b'), L('יומא לה ע״ב', 'Yoma 35b')],
    sections: [sec('אבטליון', 'אבטליון אמר: "חכמים, הזהרו בדבריכם, שמא תחובו חובת גלות ותגלו למקום מים הרעים, וישתו התלמידים הבאים אחריכם וימותו". בבית המדרש שלו ושל שמעיה שכב הלל על הגג בשלג כדי לשמוע דברי תורה (יומא לה ע״ב).', 'Avtalyon', 'Avtalyon said: "Sages, be careful with your words, lest you incur exile and be exiled to a place of bad waters, and the students who come after you drink and die". It was at his and Shemayah’s study hall that Hillel lay on the roof in the snow to hear words of Torah (Yoma 35b).'), PAIR],
  }),
  p({
    slug: 'menachem-av-beit-din', cats: ['av-beit-din'], name: L('מנחם', 'Menachem'), spot: 'מנחם (אב בית דין)',
    roles: [L('אב בית דין', 'Av Beit Din')],
    summary: L('אב בית הדין לצד הלל, שיצא מתפקידו ושמאי נכנס תחתיו.', 'Av Beit Din beside Hillel, who left his post and Shammai entered in his place.'),
    rel: [to('related', 'hillel-hazaken'), to('related', 'shammai')], offices: [ABD(['avtalyon'], ['shammai'])], sources: [L('משנה חגיגה ב, ב', 'Mishnah Chagigah 2:2'), L('חגיגה טז ע״ב', 'Chagigah 16b'), L('ירושלמי חגיגה ב, ב', 'Yerushalmi Chagigah 2:2')],
    sections: one('מנחם', 'המשנה אומרת: "הלל ומנחם לא נחלקו; יצא מנחם, נכנס שמאי". בגמרא (חגיגה טז ע״ב) נחלקו לאן יצא: יש אומרים שיצא לעבודת המלך, ועימו שמונים זוגות תלמידים לבושים שיראים, ויש אומרים שיצא לתרבות רעה.', 'Menachem', 'The Mishnah says: "Hillel and Menachem did not disagree; Menachem left, and Shammai entered". In the Gemara (Chagigah 16b) they disagree about where he went: some say he went out to the king’s service, with eighty pairs of students dressed in silk, and some say he went astray.'),
  }),
  p({
    slug: 'shammai', cats: ['av-beit-din'], name: L('שמאי הזקן', 'Shammai the Elder'), spot: 'שמאי הזקן',
    roles: [L('אב בית דין', 'Av Beit Din'), L('ראש בית שמאי', 'Head of Beit Shammai')],
    summary: L('בן זוגו של הלל, ראש בית שמאי: "עשה תורתך קבע, אמור מעט ועשה הרבה".', 'Hillel’s partner, head of Beit Shammai: "Make your Torah fixed, say little and do much".'),
    rel: [to('teacher', 'shmaya'), to('teacher', 'avtalyon'), to('related', 'hillel-hazaken'), to('student', 'bava-ben-buta'), to('student', 'rabban-yochanan-ben-zakai')],
    offices: [ABD(['menachem-av-beit-din'], ['rabban-yochanan-ben-zakai'])], sources: [AVOT(15), L('משנה חגיגה ב, ב', 'Mishnah Chagigah 2:2'), L('שבת לא ע״א', 'Shabbat 31a'), L('עירובין יג ע״ב', 'Eruvin 13b')],
    sections: [
      sec('שמאי', 'שמאי נכנס לאב בית הדין אחרי שמנחם יצא. הוא אמר: "עשה תורתך קבע, אמור מעט ועשה הרבה, והוי מקבל את כל האדם בסבר פנים יפות". בית שמאי ובית הלל נחלקו במאות הלכות, ו"אלו ואלו דברי אלוקים חיים", אבל ההלכה כבית הלל ברוב המקרים (עירובין יג ע״ב).', 'Shammai', 'Shammai became Av Beit Din after Menachem left. He said: "Make your Torah fixed, say little and do much, and receive every person with a cheerful face". Beit Shammai and Beit Hillel disagreed in hundreds of laws, and "both these and those are the words of the living G-d", but the law follows Beit Hillel in most cases (Eruvin 13b).'),
      sec('באילן', 'באילן שלנו יוצא משמאי חץ חום אל בבא בן בוטא, מתלמידי בית שמאי, וחץ אל רבן יוחנן בן זכאי, שלמד מהלל ומשמאי.', 'On Our Tree', 'On our tree a brown arrow goes from Shammai to Bava ben Buta, one of the students of Beit Shammai, and an arrow to Rabban Yochanan ben Zakai, who learned from Hillel and from Shammai.'),
    ],
  }),
];

// the families around the Zugot and the early sages
const families = [
  p({
    slug: 'tzadok-talmid-antigonus', name: L('צדוק (תלמיד אנטיגנוס)', 'Tzadok (student of Antigonus)'), spot: 'צדוק (תלמיד אנטיגנוס)',
    summary: L('תלמיד אנטיגנוס איש סוכו, שממנו יצאו הצדוקים.', 'Student of Antigonus of Socho, from whom came the Sadducees.'),
    rel: [to('teacher', 'antigonus-ish-socho'), to('related', 'baitos'), to('related', 'kat-hatzedukim')], sources: [L('אבות דרבי נתן ה', 'Avot deRabbi Natan 5')],
    sections: one('הצדוקים', 'אבות דרבי נתן מספר שצדוק וביתוס שמעו מרבם אנטיגנוס "אל תהיו כעבדים המשמשין את הרב על מנת לקבל פרס", ואמרו: אילו ידעו אבותינו שיש עולם הבא ותחיית המתים, לא היו אומרים כך. הם פרשו מן התורה, ומהם יצאו שתי כתות: הצדוקים והבייתוסים, שכפרו בתורה שבעל פה.', 'The Sadducees', 'Avot deRabbi Natan relates that Tzadok and Baitos heard their teacher Antigonus say "Do not be like servants who serve their master in order to receive a reward", and said: had our fathers known that there is a World to Come and a resurrection of the dead, they would not have said this. They broke away from the Torah, and from them came two sects: the Sadducees and the Boethusians, who denied the Oral Torah.'),
  }),
  p({
    slug: 'baitos', name: L('ביתוס', 'Baitos (Boethus)'), spot: 'ביתוס',
    summary: L('תלמיד אנטיגנוס איש סוכו, שממנו יצאו הבייתוסים.', 'Student of Antigonus of Socho, from whom came the Boethusians.'),
    rel: [to('teacher', 'antigonus-ish-socho'), to('related', 'tzadok-talmid-antigonus'), to('related', 'kat-hatzedukim')], sources: [L('אבות דרבי נתן ה', 'Avot deRabbi Natan 5'), L('מנחות סה ע״א', 'Menachot 65a')],
    sections: one('הבייתוסים', 'ביתוס פרש עם צדוק מדרך רבו אנטיגנוס, וממנו יצאו הבייתוסים. הגמרא (מנחות סה ע״א) מספרת על ויכוחם עם החכמים על ספירת העומר, שלדבריהם מתחילה תמיד ביום ראשון בשבוע.', 'The Boethusians', 'Baitos broke away with Tzadok from the way of their teacher Antigonus, and from him came the Boethusians. The Gemara (Menachot 65a) tells of their argument with the sages over the counting of the Omer, which by their words always begins on a Sunday.'),
  }),
  p({
    slug: 'yoezer', cats: ['levites'], name: L('יועזר', 'Yoezer'), spot: 'יועזר',
    summary: L('אבי יוסי בן יועזר.', 'Father of Yose ben Yoezer.'),
    rel: [to('child', 'yose-ben-yoezer'), to('child', 'bat-yoezer')], sources: [AVOT(4)],
    sections: one('יועזר', 'יועזר, כהן, אביו של יוסי בן יועזר איש צרדה. באילן שלנו יוצאים ממנו בנו יוסי ובתו, אמו של יקים איש צרורות.', 'Yoezer', 'Yoezer, a Kohen, father of Yose ben Yoezer of Tzereidah. On our tree his son Yose and his daughter, the mother of Yakim of Tzerorot, come from him.'),
  }),
  w({
    slug: 'bat-yoezer', cats: ['levites'], name: L('בת יועזר', 'Daughter of Yoezer'), spot: 'בת יועזר',
    summary: L('אחות יוסי בן יועזר ואם יקים איש צרורות.', 'Sister of Yose ben Yoezer and mother of Yakim of Tzerorot.'),
    rel: [to('father', 'yoezer'), to('sibling', 'yose-ben-yoezer'), to('child', 'yakim-ish-tzerorot')], sources: [L('בראשית רבה סה, כב', 'Bereishit Rabbah 65:22')],
    sections: one('בת יועזר', 'המדרש מספר שיקים איש צרורות היה "בר אחתיה" – בן אחותו – של יוסי בן יועזר. שמה של האם לא נשמר.', 'Daughter of Yoezer', 'The Midrash relates that Yakim of Tzerorot was "bar achteih" – the son of the sister – of Yose ben Yoezer. The mother’s name has not been kept.'),
  }),
  p({
    slug: 'yakim-ish-tzerorot', cats: ['levites'], name: L('יקים איש צרורות', 'Yakim of Tzerorot'), spot: 'יקים איש צרורות',
    summary: L('בן אחותו של יוסי בן יועזר, שלעג לו בדרכו להריגה, ועשה תשובה.', 'Yose ben Yoezer’s nephew, who mocked him on his way to execution, and repented.'),
    rel: [to('mother', 'bat-yoezer'), to('related', 'yose-ben-yoezer'), to('related', 'alkimus')], sources: [L('בראשית רבה סה, כב', 'Bereishit Rabbah 65:22')],
    sections: [
      sec('"ראה סוסי שהרכיבני מרי"', 'כשיוסי בן יועזר נלקח לתלייה בשבת, רכב לפניו יקים על סוס ואמר לו: "ראה סוסי שהרכיבני מרי, וראה סוסך שהרכיבך מריך". ענה לו יוסי: "אם כך לעוברי רצונו, קל וחומר לעושי רצונו". הדברים נכנסו בו "כארס של עכנא", והוא עשה תשובה והמית את עצמו בארבע מיתות בית דין. יוסי בן יועזר ראה את מיטתו פורחת באוויר ואמר: "בשעה קלה קדמני זה לגן עדן".', '"See My Horse That My Master Gave Me"', 'When Yose ben Yoezer was taken to be hanged on Shabbat, Yakim rode before him on a horse and said: "See my horse that my master gave me to ride, and see yours that your Master gave you". Yose answered: "If so to those who transgress His will, how much more to those who do His will". The words entered him "like a snake’s venom", and he repented and put himself to death by the four deaths of the court. Yose ben Yoezer saw his bier flying in the air and said: "In a short hour this one has preceded me to Gan Eden".'),
      sec('יקים ואלקימוס', 'רבים זיהו את יקים איש צרורות עם אלקימוס הכהן הגדול המתייוון, שלפי ספר החשמונאים הרג שישים מן החסידים; ולכן קישרנו ביניהם.', 'Yakim and Alkimus', 'Many have identified Yakim of Tzerorot with Alkimus, the Hellenizing High Priest who according to the Book of Maccabees killed sixty of the pious; so we have linked them.'),
    ],
  }),
  p({
    slug: 'beteira', name: L('בתירא', 'Beteira'), spot: 'בתירא',
    summary: L('אבי בני בתירא, שעמדו בראש החכמים לפני הלל.', 'Father of the Bnei Beteira, who led the sages before Hillel.'),
    rel: [to('child', 'rabbi-yehoshua-ben-beteira'), to('child', 'rabbi-yehuda-ben-beteira')], sources: [L('פסחים סו ע״א', 'Pesachim 66a')],
    sections: one('בני בתירא', 'בני בתירא עמדו בראש החכמים בירושלים לפני הלל. כשחל ערב פסח בשבת ולא ידעו אם הפסח דוחה את השבת, שאלו את הלל, וכשהוכיח שהוא דוחה – הושיבו אותו בראש ומינו אותו לנשיא. באילן יוצאים מבתירא רבי יהושע בן בתירא ורבי יהודה בן בתירא, מן התנאים.', 'The Bnei Beteira', 'The Bnei Beteira led the sages in Jerusalem before Hillel. When Erev Pesach fell on Shabbat and they did not know whether the Pesach offering overrides Shabbat, they asked Hillel, and when he proved that it does, they seated him at the head and made him Nasi. On our tree Rabbi Yehoshua ben Beteira and Rabbi Yehudah ben Beteira, of the Tannaim, come from Beteira.'),
  }),
  w({
    slug: 'bat-choni', name: L('בת חוני המעגל', 'Daughter of Choni HaMe’agel'), spot: 'בת חוני',
    summary: L('בת חוני המעגל ואם חנן הנחבא.', 'Daughter of Choni HaMe’agel and mother of Chanan HaNechba.'),
    rel: [to('father', 'choni-hamaagel'), to('sibling', 'ben-choni'), to('child', 'chanan-hanechba')], sources: [L('תענית כג ע״ב', 'Taanit 23b')],
    sections: one('בת חוני', 'הגמרא (תענית כג ע״ב) אומרת: "חנן הנחבא בר ברתיה דחוני המעגל הוה" – בן בתו של חוני. שמה לא נשמר.', 'Choni’s Daughter', 'The Gemara (Taanit 23b) says: "Chanan HaNechba was the son of the daughter of Choni HaMe’agel". Her name has not been kept.'),
  }),
  p({
    slug: 'ben-choni', name: L('בן חוני המעגל', 'Son of Choni HaMe’agel'), spot: 'בן חוני',
    summary: L('בן חוני המעגל ואבי אבא חלקיה.', 'Son of Choni HaMe’agel and father of Abba Chilkiya.'),
    rel: [to('father', 'choni-hamaagel'), to('sibling', 'bat-choni'), to('child', 'abba-chilkiya')], sources: [L('תענית כג ע״א', 'Taanit 23a')],
    sections: one('בן חוני', 'הגמרא (תענית כג ע״א) אומרת: "אבא חלקיה בר בריה דחוני המעגל הוה" – בן בנו של חוני. שמו לא נשמר.', 'Choni’s Son', 'The Gemara (Taanit 23a) says: "Abba Chilkiya was the son of the son of Choni HaMe’agel". His name has not been kept.'),
  }),
];

const RG_LINE = sec('בית הלל', 'מהלל יצאה שושלת הנשיאים, אב אחר בן: הלל, רבן שמעון בנו, רבן גמליאל הזקן, רבן שמעון בן גמליאל, רבן גמליאל דיבנה, רבן שמעון בן גמליאל, ורבי יהודה הנשיא. הגמרא (שבת טו ע״א) אומרת: "הלל ושמעון, גמליאל ושמעון, נהגו נשיאותן בפני הבית מאה שנה". באילן החצים השחורים מראים את סדר הנשיאות, והנשיאים ממוספרים: רבן שמעון א׳ בן הלל, רבן גמליאל א׳ הזקן, רבן שמעון ב׳ בן גמליאל (שנהרג), רבן גמליאל ב׳ דיבנה, ורבן שמעון ג׳ בן גמליאל, אבי רבי.',
  'The House of Hillel', 'From Hillel came the line of Nesi’im, father to son: Hillel, his son Rabban Shimon, Rabban Gamliel the Elder, Rabban Shimon ben Gamliel, Rabban Gamliel of Yavneh, Rabban Shimon ben Gamliel, and Rabbi Yehudah HaNasi. The Gemara (Shabbat 15a) says: "Hillel and Shimon, Gamliel and Shimon held their office as Nasi while the Temple stood, a hundred years". On our tree the black arrows show the order of the Nesi’im, and they are numbered: Rabban Shimon I son of Hillel, Rabban Gamliel I the Elder, Rabban Shimon II ben Gamliel (who was killed), Rabban Gamliel II of Yavneh, and Rabban Shimon III ben Gamliel, Rebbi’s father.');

const nesiim = [
  p({
    slug: 'rabban-shimon-ben-hillel', cats: ['tannaim'], name: L('רבן שמעון בן הלל', 'Rabban Shimon son of Hillel'), spot: 'רבן שמעון בן הלל',
    roles: [L('נשיא', 'Nasi')],
    summary: L('בנו של הלל, שהיה נשיא אחריו.', 'Hillel’s son, who was Nasi after him.'),
    rel: [to('father', 'hillel-hazaken'), to('child', 'rabban-gamliel-hazaken')], offices: [NASI(['hillel-hazaken'], ['rabban-gamliel-hazaken'])],
    sources: [L('שבת טו ע״א', 'Shabbat 15a')],
    sections: [sec('רבן שמעון בן הלל', 'רבן שמעון בן הלל נזכר בגמרא רק ברשימת הנשיאים, ולא נשארו בידינו דברים בשמו.', 'Rabban Shimon son of Hillel', 'Rabban Shimon son of Hillel is mentioned in the Gemara only in the list of Nesi’im, and no sayings in his name have come down to us.'), RG_LINE],
  }),
  p({
    slug: 'rabban-gamliel-hazaken', cats: ['tannaim'], name: L('רבן גמליאל הזקן', 'Rabban Gamliel the Elder'), spot: 'רבן גמליאל הזקן',
    roles: [L('נשיא', 'Nasi')],
    summary: L('נכד הלל, נשיא בימי הבית: "עשה לך רב, והסתלק מן הספק".', 'Hillel’s grandson, Nasi while the Temple stood: "Make for yourself a teacher, and remove yourself from doubt".'),
    rel: [to('father', 'rabban-shimon-ben-hillel'), to('child', 'rabban-shimon-ben-gamliel-1')], offices: [NASI(['rabban-shimon-ben-hillel'], ['rabban-shimon-ben-gamliel-1'])],
    sources: [L('משנה אבות א, טז', 'Mishnah Avot 1:16'), L('משנה גיטין ד, ב – ג', 'Mishnah Gittin 4:2–3'), L('משנה סוטה ט, טו', 'Mishnah Sotah 9:15')],
    sections: [sec('רבן גמליאל הזקן', 'רבן גמליאל הזקן תיקן תקנות רבות "מפני תיקון העולם", כגון שהגט ייכתב בשמות המלאים של האיש והאשה (גיטין ד, ב). המשנה אומרת: "משמת רבן גמליאל הזקן בטל כבוד התורה, ומתה טהרה ופרישות".', 'Rabban Gamliel the Elder', 'Rabban Gamliel the Elder enacted many ordinances "for the betterment of the world", such as that a get be written with the full names of the man and the woman (Gittin 4:2). The Mishnah says: "When Rabban Gamliel the Elder died, the honour of the Torah ceased, and purity and separateness died".'), RG_LINE],
  }),
  p({
    slug: 'rabban-shimon-ben-gamliel-1', cats: ['tannaim'], name: L('רבן שמעון ב׳ בן גמליאל', 'Rabban Shimon II ben Gamliel'), spot: 'רבן שמעון בן גמליאל (הנהרג)',
    roles: [L('נשיא', 'Nasi')],
    summary: L('הנשיא בימי החורבן, מעשרת הרוגי מלכות: "לא מצאתי לגוף טוב אלא שתיקה".', 'The Nasi at the time of the Destruction, one of the Ten Martyrs: "I have found nothing better for the body than silence".'),
    rel: [to('father', 'rabban-gamliel-hazaken'), to('child', 'rabban-gamliel-deyavne'), to('related', 'harigat-rashbag'), to('related', 'churban-bayit-sheni')],
    offices: [NASI(['rabban-gamliel-hazaken'], ['rabban-gamliel-deyavne'])],
    sources: [L('משנה אבות א, יז', 'Mishnah Avot 1:17'), L('אבות דרבי נתן לח', 'Avot deRabbi Natan 38'), L('מסכת שמחות ח', 'Tractate Semachot 8')],
    sections: [
      sec('רבן שמעון בן גמליאל', 'רבן שמעון בן גמליאל היה הנשיא בימי המרד הגדול. הוא אמר: "כל ימי גדלתי בין החכמים, ולא מצאתי לגוף טוב אלא שתיקה; ולא המדרש הוא העיקר אלא המעשה".', 'Rabban Shimon ben Gamliel', 'Rabban Shimon ben Gamliel was the Nasi in the days of the Great Revolt. He said: "All my days I grew up among the sages, and I have found nothing better for the body than silence; not study is the main thing, but deed".'),
      sec('מעשרת הרוגי מלכות', 'באילן שלנו יש בעיגול אדום את המספר 2: הוא השני בסדר עשרת הרוגי מלכות. לפי אבות דרבי נתן נהרג יחד עם רבי ישמעאל כהן גדול, והם נהרגו ראשונים.', 'One of the Ten Martyrs', 'On our tree there is the number 2 in a red circle: he is second in the order of the Ten Martyrs. According to Avot deRabbi Natan he was killed together with Rabbi Yishmael the High Priest, and they were killed first.'),
      RG_LINE,
    ],
  }),
  p({
    slug: 'rabban-gamliel-deyavne', cats: ['tannaim'], name: L('רבן גמליאל דיבנה', 'Rabban Gamliel of Yavneh'), spot: 'רבן גמליאל דיבנה',
    roles: [L('נשיא', 'Nasi')],
    summary: L('הנשיא ביבנה אחרי החורבן, שאיחד את החכמים סביב בית הדין.', 'The Nasi in Yavneh after the Destruction, who united the sages around the court.'),
    rel: [to('father', 'rabban-shimon-ben-gamliel-1'), to('child', 'rabban-shimon-ben-gamliel-2'), to('related', 'rabban-yochanan-ben-zakai')],
    offices: [NASI(['rabban-shimon-ben-gamliel-1'], ['rabban-shimon-ben-gamliel-2'])],
    sources: [L('ברכות כז ע״ב – כח ע״א', 'Berachot 27b–28a'), L('ברכות כח ע״ב', 'Berachot 28b'), L('גיטין נו ע״ב', 'Gittin 56b'), L('ראש השנה כה ע״א', 'Rosh Hashanah 25a')],
    sections: [
      sec('רבן גמליאל ביבנה', 'כשרבן יוחנן בן זכאי ביקש מאספסיינוס "תן לי יבנה וחכמיה, ושושילתא דרבן גמליאל" (גיטין נו ע״ב), ניצלה שושלת הנשיאים. רבן גמליאל עמד בראש בית הדין ביבנה, תיקן עם החכמים את תפילת שמונה עשרה ואת ברכת המינים, והקפיד מאוד על כבוד בית הדין כדי לאחד את העם.', 'Rabban Gamliel in Yavneh', 'When Rabban Yochanan ben Zakai asked Vespasian "Give me Yavneh and its sages, and the dynasty of Rabban Gamliel" (Gittin 56b), the line of Nesi’im was saved. Rabban Gamliel led the court in Yavneh, arranged with the sages the Shemoneh Esrei prayer and the blessing against heretics, and was very strict about the honour of the court in order to unite the people.'),
      sec('"בו ביום"', 'אחרי שציער את רבי יהושע, העבירו אותו החכמים מן הנשיאות ומינו את רבי אלעזר בן עזריה. באותו יום נכנסו תלמידים רבים לבית המדרש. אחר כך התפייס עם רבי יהושע וחזר לנשיאותו, ורבי אלעזר בן עזריה דרש שבת אחת מכל שלוש (ברכות כח ע״א).', '"On That Day"', 'After he hurt Rabbi Yehoshua, the sages removed him from the office of Nasi and appointed Rabbi Elazar ben Azaryah. On that day many students entered the study hall. Afterwards he made peace with Rabbi Yehoshua and returned to his office, and Rabbi Elazar ben Azaryah taught one Shabbat in every three (Berachot 28a).'),
      RG_LINE,
    ],
  }),
  p({
    slug: 'rabban-shimon-ben-gamliel-2', cats: ['tannaim'], name: L('רבן שמעון ג׳ בן גמליאל', 'Rabban Shimon III ben Gamliel'), spot: 'רבן שמעון בן גמליאל (ג׳)',
    roles: [L('נשיא', 'Nasi')],
    summary: L('הנשיא באושא אחרי מרד בר כוכבא, אבי רבי יהודה הנשיא.', 'The Nasi in Usha after the Bar Kochba revolt, father of Rabbi Yehudah HaNasi.'),
    rel: [to('father', 'rabban-gamliel-deyavne'), to('child', 'rabbi-yehuda-hanasi')], offices: [NASI(['rabban-gamliel-deyavne'], ['rabbi-yehuda-hanasi'])],
    sources: [L('משנה אבות א, יח', 'Mishnah Avot 1:18'), L('הוריות יג ע״ב', 'Horayot 13b'), L('סוטה מט ע״ב', 'Sotah 49b')],
    sections: [
      sec('רבן שמעון בן גמליאל', 'רבן שמעון בן גמליאל ניצל בילדותו מהריגה בביתר (סוטה מט ע״ב), ואחרי גזירות אדריינוס עמד בראש החכמים באושא, עם רבי מאיר החכם ורבי נתן אב בית הדין (הוריות יג ע״ב). הוא אמר: "על שלושה דברים העולם קיים: על הדין, ועל האמת, ועל השלום". בכל מקום ששנה רבן שמעון בן גמליאל במשנתנו – הלכה כמותו.', 'Rabban Shimon ben Gamliel', 'Rabban Shimon ben Gamliel was saved as a child from the slaughter at Beitar (Sotah 49b), and after Hadrian’s decrees he led the sages in Usha, with Rabbi Meir the Chacham and Rabbi Natan the Av Beit Din (Horayot 13b). He said: "On three things the world stands: on justice, on truth, and on peace". Wherever Rabban Shimon ben Gamliel taught in our Mishnah, the law follows him.'),
      RG_LINE,
    ],
  }),
  p({
    slug: 'rabbi-yehuda-hanasi', cats: ['tannaim'], name: L('רבי יהודה הנשיא', 'Rabbi Yehudah HaNasi'), spot: 'רבי יהודה הנשיא',
    roles: [L('נשיא', 'Nasi'), L('עורך המשנה', 'Compiler of the Mishnah')],
    summary: L('"רבנו הקדוש", שסידר את המשנה; בו מסתיים האילן הראשון.', '"Our holy Rabbi", who arranged the Mishnah; with him the first tree ends.'),
    rel: [to('father', 'rabban-shimon-ben-gamliel-2')], offices: [NASI(['rabban-shimon-ben-gamliel-2'], [])],
    sources: [L('קידושין עב ע״ב', 'Kiddushin 72b'), L('כתובות קג ע״ב – קד ע״א', 'Ketubot 103b–104a'), L('שבת קיח ע״ב', 'Shabbat 118b'), L('איגרת רב שרירא גאון', 'Iggeret Rav Sherira Gaon'), L('עבודה זרה י ע״א – יא ע״א', 'Avodah Zarah 10a–11a')],
    sections: [
      sec('רבי', 'רבי יהודה הנשיא, שנקרא בפשטות "רבי" ו"רבנו הקדוש", נולד ביום שבו מת רבי עקיבא: "זרח השמש ובא השמש" (קידושין עב ע״ב). הוא היה עשיר גדול ונשיא חשוב, והגמרא מספרת על ידידותו עם הקיסר אנטונינוס.', 'Rebbi', 'Rabbi Yehudah HaNasi, called simply "Rebbi" and "our holy Rabbi", was born on the day Rabbi Akiva died: "the sun rises and the sun sets" (Kiddushin 72b). He was very wealthy and an important Nasi, and the Gemara tells of his friendship with the emperor Antoninus.'),
      sec('המשנה', 'רבי אסף וסידר את התורה שבעל פה בששה סדרי משנה, כדי שלא תשתכח. על המשנה שלו נבנה התלמוד כולו. לפני פטירתו מינה את בנו רבן גמליאל לנשיא, ואת בנו רבי שמעון לחכם. באילן שלנו "מאדם עד רבי יהודה הנשיא" – בו מסתיים האילן הראשון, ומכאן ממשיך אילן התלמוד.', 'The Mishnah', 'Rebbi gathered and arranged the Oral Torah in the six orders of the Mishnah, so that it would not be forgotten. The whole Talmud is built on his Mishnah. Before his death he appointed his son Rabban Gamliel as Nasi, and his son Rabbi Shimon as Chacham. Our tree runs "from Adam to Rabbi Yehudah HaNasi" – with him the first tree ends, and from here the Talmud tree continues.'),
      RG_LINE,
    ],
  }),
];

const tannaim = [
  p({
    slug: 'rabban-yochanan-ben-zakai', cats: ['av-beit-din'], name: L('רבן יוחנן בן זכאי', 'Rabban Yochanan ben Zakai'), spot: 'רבן יוחנן בן זכאי',
    roles: [L('אב בית דין', 'Av Beit Din'), L('ראש החכמים ביבנה', 'Head of the sages in Yavneh')],
    summary: L('הקטן שבתלמידי הלל, שהציל את התורה בחורבן: "תן לי יבנה וחכמיה".', 'The youngest of Hillel’s students, who saved the Torah at the Destruction: "Give me Yavneh and its sages".'),
    rel: [to('teacher', 'hillel-hazaken'), to('teacher', 'shammai'), to('related', 'rabban-gamliel-deyavne'), to('related', 'churban-bayit-sheni'),
      to('student', 'rabbi-eliezer-ben-hurkanos'), to('student', 'rabbi-yehoshua-ben-chananya'), to('student', 'rabbi-yose-hakohen'), to('student', 'rabbi-shimon-ben-netanel'),
      to('student', 'rabbi-elazar-ben-arach'), to('student', 'rabbi-chanina-ben-dosa'), to('student', 'rabbi-nechunya-ben-hakana'), to('student', 'rabbi-tarfon')],
    offices: [ABD(['shammai'], [])],
    sources: [L('משנה אבות ב, ח – ט', 'Mishnah Avot 2:8–9'), L('סוכה כח ע״א', 'Sukkah 28a'), L('גיטין נו ע״א – ע״ב', 'Gittin 56a–b'), L('ברכות כח ע״ב', 'Berachot 28b')],
    sections: [
      sec('רבן יוחנן בן זכאי', 'רבן יוחנן בן זכאי "קיבל מהלל ומשמאי". הגמרא אומרת שהיה הקטן שבשמונים תלמידי הלל, ובכל זאת "לא הניח מקרא ומשנה, גמרא, הלכות ואגדות" (סוכה כח ע״א). הוא אמר: "אם למדת תורה הרבה, אל תחזיק טובה לעצמך, כי לכך נוצרת".', 'Rabban Yochanan ben Zakai', 'Rabban Yochanan ben Zakai "received from Hillel and from Shammai". The Gemara says he was the youngest of Hillel’s eighty students, and still "he did not leave aside Scripture, Mishnah, Gemara, laws and aggadot" (Sukkah 28a). He said: "If you have learned much Torah, do not take credit for yourself, for that is what you were created for".'),
      sec('יבנה וחכמיה', 'בזמן המצור על ירושלים יצא מן העיר בארון, ובא לפני אספסיינוס. כשהתברר שאספסיינוס יהיה קיסר, ביקש: "תן לי יבנה וחכמיה, ושושילתא דרבן גמליאל, ואסוותא דמסיין ליה לרבי צדוק" (גיטין נו ע״ב). ביבנה הקים מחדש את בית הדין ותיקן תקנות אחרי החורבן.', 'Yavneh and Its Sages', 'During the siege of Jerusalem he left the city in a coffin, and came before Vespasian. When it turned out that Vespasian would be emperor, he asked: "Give me Yavneh and its sages, the dynasty of Rabban Gamliel, and doctors to heal Rabbi Tzadok" (Gittin 56b). In Yavneh he set up the court again and made ordinances after the Destruction.'),
      sec('באילן', 'באילן שלנו מגיעים אליו חצים חומים מהלל ומשמאי, ויוצאים ממנו חצים לתלמידיו: חמשת התלמידים שהמשנה מונה (אבות ב, ח) – רבי אליעזר בן הורקנוס, רבי יהושע בן חנניה, רבי יוסי הכהן, רבי שמעון בן נתנאל ורבי אלעזר בן ערך – וגם רבי חנינא בן דוסא, רבי נחוניה בן הקנה ורבי טרפון.', 'On Our Tree', 'On our tree brown arrows reach him from Hillel and Shammai, and arrows go from him to his students: the five the Mishnah counts (Avot 2:8) – Rabbi Eliezer ben Hurkanos, Rabbi Yehoshua ben Chananya, Rabbi Yose HaKohen, Rabbi Shimon ben Netanel and Rabbi Elazar ben Arach – and also Rabbi Chanina ben Dosa, Rabbi Nechunya ben HaKanah and Rabbi Tarfon.'),
    ],
  }),
  p({
    slug: 'yonatan-ben-uziel', name: L('יונתן בן עוזיאל', 'Yonatan ben Uziel'), spot: 'יונתן בן עוזיאל',
    summary: L('הגדול שבתלמידי הלל, שתרגם את הנביאים.', 'The greatest of Hillel’s students, who translated the Prophets.'),
    rel: [to('teacher', 'hillel-hazaken')], sources: [L('מגילה ג ע״א', 'Megillah 3a'), L('סוכה כח ע״א', 'Sukkah 28a')],
    sections: one('תרגום יונתן', 'הגמרא (סוכה כח ע״א) אומרת שהגדול שבשמונים תלמידי הלל היה יונתן בן עוזיאל, ו"בשעה שהיה יושב ועוסק בתורה, כל עוף שפורח עליו מיד נשרף". הוא תרגם את הנביאים לארמית "מפי חגי, זכריה ומלאכי", ויצאה בת קול ואמרה: "מי הוא זה שגילה סתריי לבני אדם?" (מגילה ג ע״א).', 'Targum Yonatan', 'The Gemara (Sukkah 28a) says that the greatest of Hillel’s eighty students was Yonatan ben Uziel, and "when he sat and occupied himself with Torah, any bird that flew over him was immediately burned". He translated the Prophets into Aramaic "from the mouths of Chaggai, Zecharyah and Malachi", and a heavenly voice came out and said: "Who is this who has revealed My secrets to people?" (Megillah 3a).'),
  }),
  p({
    slug: 'bava-ben-buta', name: L('בבא בן בוטא', 'Bava ben Buta'), spot: 'בבא בן בוטא',
    summary: L('מתלמידי שמאי, שהורדוס עיוור, ויעץ לו לבנות את בית המקדש.', 'One of Shammai’s students, whom Herod blinded, and who advised him to rebuild the Temple.'),
    rel: [to('teacher', 'shammai'), to('related', 'hordos'), to('related', 'hordos-veharomaim')], sources: [L('בבא בתרא ג ע״ב – ד ע״א', 'Bava Batra 3b–4a'), L('כריתות כה ע״א', 'Keritot 25a'), L('ביצה כ ע״א', 'Beitzah 20a')],
    sections: one('בבא בן בוטא והורדוס', 'הורדוס הרג את החכמים והשאיר רק את בבא בן בוטא, אחרי שעיוור את עיניו. הוא בא אליו בתחפושת וניסה להביא אותו לדבר נגד המלך, ובבא בן בוטא לא אמר מילה רעה. כשהורדוס התגלה ושאל מה תקנתו, אמר לו: "הוא כבה אורו של עולם – ילך ויעסוק באורו של עולם", כלומר שיבנה את בית המקדש (בבא בתרא ד ע״א). חז״ל מספרים שהביא קרבן אשם תלוי בכל יום, חוץ מיום הכיפורים.', 'Bava ben Buta and Herod', 'Herod killed the sages and left only Bava ben Buta, after blinding his eyes. He came to him in disguise and tried to get him to speak against the king, and Bava ben Buta did not say one bad word. When Herod revealed himself and asked how he could make amends, he told him: "He put out the light of the world – let him go and busy himself with the light of the world", that is, rebuild the Temple (Bava Batra 4a). Chazal relate that he brought a doubtful guilt-offering every day, except Yom Kippur.'),
  }),
  p({
    slug: 'choni-hamaagel', name: L('חוני המעגל', 'Choni HaMe’agel'), spot: 'חוני המעגל',
    summary: L('החסיד שעג עוגה ועמד בתוכה עד שירדו גשמים, וישן שבעים שנה.', 'The pious man who drew a circle and stood in it until rain fell, and who slept seventy years.'),
    rel: [to('child', 'bat-choni'), to('child', 'ben-choni'), to('related', 'shimon-ben-shetach')], sources: [L('משנה תענית ג, ח', 'Mishnah Taanit 3:8'), L('תענית כג ע״א', 'Taanit 23a')],
    sections: [
      sec('חוני המעגל', 'פעם אחת לא ירדו גשמים, ושלחו לחוני שיתפלל. הוא עג עוגה ועמד בתוכה, ואמר: "רבונו של עולם, בניך שמו פניהם עלי... נשבע אני בשמך הגדול שאיני זז מכאן עד שתרחם על בניך". ירדו גשמים, עד שביקש גשמי ברכה. שמעון בן שטח שלח אליו: "אלמלא חוני אתה גוזרני עליך נידוי; אבל מה אעשה לך, שאתה מתחטא לפני המקום כבן שמתחטא על אביו".', 'Choni HaMe’agel', 'Once rain did not fall, and they sent to Choni to pray. He drew a circle and stood inside it, and said: "Master of the world, Your children have turned to me... I swear by Your great name that I will not move from here until You have mercy on Your children". Rain fell, until he asked for rains of blessing. Shimon ben Shetach sent to him: "Were you not Choni, I would decree excommunication upon you; but what can I do to you, for you act like a child pampered before his father".'),
      sec('שבעים שנה', 'הגמרא (תענית כג ע״א) מספרת שראה אדם נוטע חרוב, שנותן פירות רק אחרי שבעים שנה, וישב לאכול ונרדם שבעים שנה. כשהתעורר ובא לבית המדרש, לא האמינו שהוא חוני, ואמר: "או חברותא או מיתותא".', 'Seventy Years', 'The Gemara (Taanit 23a) relates that he saw a man planting a carob tree, which gives fruit only after seventy years, and sat down to eat and fell asleep for seventy years. When he awoke and came to the study hall, they did not believe he was Choni, and he said: "Either companionship or death".'),
    ],
  }),
  p({
    slug: 'chanan-hanechba', name: L('חנן הנחבא', 'Chanan HaNechba'), spot: 'חנן הנחבא',
    summary: L('נכד חוני המעגל, שהיה מתחבא מרוב ענווה.', 'Grandson of Choni HaMe’agel, who hid himself out of humility.'),
    rel: [to('mother', 'bat-choni'), to('related', 'abba-chilkiya')], sources: [L('תענית כג ע״ב', 'Taanit 23b')],
    sections: one('חנן הנחבא', 'כשהעולם היה צריך גשמים, היו שולחים אליו תינוקות של בית רבן, והם אחזו בשולי בגדו ואמרו: "אבא, אבא, הב לן מיטרא". הוא אמר: "רבונו של עולם, עשה בשביל אלו שאינם מכירים בין אבא דיהיב מיטרא לאבא דלא יהיב מיטרא". הוא נקרא "הנחבא" משום שהיה מתחבא בבית הכסא מרוב ענווה.', 'Chanan HaNechba', 'When the world needed rain, they would send the schoolchildren to him, and they took hold of the hem of his garment and said: "Abba, Abba, give us rain". He said: "Master of the world, do it for the sake of these, who cannot tell the Father who gives rain from the father who does not". He was called "the one who hides" because he would hide out of humility.'),
  }),
  p({
    slug: 'abba-chilkiya', name: L('אבא חלקיה', 'Abba Chilkiya'), spot: 'אבא חלקיה',
    summary: L('נכד חוני המעגל, שתפילותיו ותפילות אשתו הורידו גשמים.', 'Grandson of Choni HaMe’agel, whose prayers and his wife’s brought down rain.'),
    rel: [to('father', 'ben-choni'), to('related', 'chanan-hanechba')], sources: [L('תענית כג ע״א – ע״ב', 'Taanit 23a–b')],
    sections: one('אבא חלקיה', 'כשהעולם היה צריך גשמים, שלחו אליו שני חכמים ומצאו אותו עודר בשדה. הוא ואשתו עלו לגג והתפללו, והעננים עלו מן הצד של אשתו – והוא הסביר: משום שהיא נותנת לחם לעניים, והוא נותן להם רק כסף שאינו נהנה ממנו מיד.', 'Abba Chilkiya', 'When the world needed rain, two sages were sent to him and found him hoeing in the field. He and his wife went up to the roof and prayed, and the clouds rose first from his wife’s side – and he explained: because she gives bread to the poor, while he gives them only money, from which they do not benefit at once.'),
  }),
  p({
    slug: 'rabbi-yehoshua-ben-beteira', name: L('רבי יהושע בן בתירא', 'Rabbi Yehoshua ben Beteira'), spot: 'רבי יהושע בן בתירא',
    summary: L('מבני בתירא, תנא שנזכר במשנה.', 'Of the Bnei Beteira, a Tanna mentioned in the Mishnah.'),
    rel: [to('father', 'beteira'), to('sibling', 'rabbi-yehuda-ben-beteira')], sources: [L('משנה יבמות ח, ד', 'Mishnah Yevamot 8:4'), L('פסחים סו ע״א', 'Pesachim 66a')],
    sections: one('רבי יהושע בן בתירא', 'רבי יהושע בן בתירא הוא מבני בתירא, המשפחה שעמדה בראש החכמים לפני הלל. במשנה (יבמות ח, ד) הוא מעיד שראה מגילת יוחסין בירושלים.', 'Rabbi Yehoshua ben Beteira', 'Rabbi Yehoshua ben Beteira was of the Bnei Beteira, the family that led the sages before Hillel. In the Mishnah (Yevamot 8:4) he testifies that he saw a scroll of genealogies in Jerusalem.'),
  }),
  p({
    slug: 'rabbi-yehuda-ben-beteira', name: L('רבי יהודה בן בתירא', 'Rabbi Yehudah ben Beteira'), spot: 'רבי יהודה בן בתירא',
    summary: L('מבני בתירא, שישב בנציבין שבבבל.', 'Of the Bnei Beteira, who lived in Netzivin in Bavel.'),
    rel: [to('father', 'beteira'), to('sibling', 'rabbi-yehoshua-ben-beteira')], sources: [L('פסחים ג ע״ב', 'Pesachim 3b'), L('סנהדרין צב ע״ב', 'Sanhedrin 92b')],
    sections: one('רבי יהודה בן בתירא', 'רבי יהודה בן בתירא ישב בנציבין. הגמרא (פסחים ג ע״ב) מספרת שגוי אחד התפאר שעלה לירושלים ואכל מן הפסח, ורבי יהודה בן בתירא שאל אותו אם נתנו לו מן האליה – והגוי ביקש אותה בפעם הבאה ונתפס, כי האליה מוקטרת על המזבח. אמרו לו: "שלום עליך רבי יהודה בן בתירא, שאתה בנציבין ומצודתך פרוסה בירושלים".', 'Rabbi Yehudah ben Beteira', 'Rabbi Yehudah ben Beteira lived in Netzivin. The Gemara (Pesachim 3b) relates that a gentile boasted that he went up to Jerusalem and ate of the Pesach offering, and Rabbi Yehudah ben Beteira asked him whether they gave him of the fat-tail – the gentile asked for it the next time and was caught, since the fat-tail is burned on the altar. They sent him: "Peace be upon you, Rabbi Yehudah ben Beteira, for you are in Netzivin and your net is spread in Jerusalem".'),
  }),
];

module.exports = { zugot, families, nesiim, tannaim };
