// The events on the left side of the first tree ("the time line by events"):
// the big events in the round boxes, and the small events between them.
// `y` = height on the poster (the list is ordered by it); years from Seder
// Olam where known. `rel`: the people (and places) the event relates to.
const { L, sec, to, nm } = require('./helpers');

const BOX_X = 9.45; // the boxes' column on the poster
const NOTE_X = 6.6; // the small events' column

const box = (e) => ({ box: true, x: BOX_X, ...e });
const small = (e) => ({ box: false, x: NOTE_X, ...e });
const one = (titleHe, he, titleEn, en) => [sec(titleHe, he, titleEn, en)];
const R = (...slugs) => slugs.map((s) => to('related', s));
const N = (...pairs) => pairs.map(([he, en]) => nm('related', he, en));

module.exports = [
  box({
    slug: 'beriat-haadam', y: 5.03, year: [1, null], name: L('בריאת האדם', 'The Creation of Man'),
    summary: L('ביום השישי נברא האדם, ומכאן נמנות השנים לבריאת העולם.', 'Man was created on the sixth day, and the years from Creation are counted from here.'),
    rel: R('adam-harishon', 'chava'),
    sources: [L('בראשית א – ב', 'Genesis 1–2'), L('סנהדרין לח ע״ב', 'Sanhedrin 38b')],
    sections: [
      sec('ויברא אלהים את האדם', 'בששת ימי בראשית ברא ה׳ את העולם, וביום השישי "ויברא אלהים את האדם בצלמו". האדם נוצר עפר מן האדמה, וה׳ נפח באפיו נשמת חיים והניח אותו בגן עדן "לעבדה ולשמרה". מבריאת האדם נמנות שנות העולם, ולכן כל השנים באילן שלנו כתובות "לבריאה".', 'God Created Man', 'In the six days of Creation Hashem made the world, and on the sixth day "God created man in His image". Man was formed of dust from the ground, and Hashem breathed into his nostrils the breath of life and placed him in Gan Eden "to work it and to guard it". The years of the world are counted from the creation of man, which is why all the years on our tree are written "from Creation".'),
      sec('האדם הראשון', 'הגמרא (סנהדרין לח ע״ב) מתארת את היום הראשון של אדם שעה אחר שעה: בשעה הרביעית נפחה בו נשמה, בשעה העשירית חטא ובשעה השתים עשרה גורש מגן עדן. חז״ל אומרים שנברא יחידי ללמד ש"כל המאבד נפש אחת – כאילו איבד עולם מלא".', 'The First Man', 'The Gemara (Sanhedrin 38b) describes Adam’s first day hour by hour: in the fourth hour a soul was breathed into him, in the tenth he sinned, and in the twelfth he was driven out of Gan Eden. Chazal say he was created alone to teach that "whoever destroys one life, it is as though he destroyed a whole world".'),
    ],
  }),
  small({
    slug: 'chet-etz-hadaat', y: 5.83, year: [1, null], name: L('חטא עץ הדעת', 'The Sin of the Tree of Knowledge'),
    summary: L('אדם וחוה אכלו מעץ הדעת וגורשו מגן עדן.', 'Adam and Chava ate from the Tree of Knowledge and were driven out of Gan Eden.'),
    rel: R('adam-harishon', 'chava'), sources: [L('בראשית ג', 'Genesis 3')],
    sections: one('חטא עץ הדעת', 'הנחש פיתה את חוה לאכול מעץ הדעת טוב ורע, והיא נתנה גם לאדם. ה׳ גזר על האדם עמל ומיתה, על האשה צער הלידה ועל הנחש ללכת על גחונו, וגירש אותם מגן עדן.', 'The Sin of the Tree of Knowledge', 'The serpent enticed Chava to eat from the Tree of Knowledge of good and evil, and she gave to Adam as well. Hashem decreed toil and death for man, the pains of childbirth for woman, and that the serpent go on its belly, and drove them out of Gan Eden.'),
  }),
  small({
    slug: 'kayin-vehevel', y: 6.17, name: L('קין רוצח את הבל', 'Kayin Kills Hevel'),
    summary: L('הרצח הראשון: קין קם על הבל אחיו והרגו.', 'The first murder: Kayin rose against his brother Hevel and killed him.'),
    rel: R('kayin', 'hevel'), sources: [L('בראשית ד, א – טז', 'Genesis 4:1–16')],
    sections: one('השומר אחי אנכי', 'קין והבל הביאו מנחות לה׳, ומנחת הבל נתקבלה. קין קם על הבל בשדה והרגו, וכשנשאל "אי הבל אחיך" השיב "השמר אחי אנכי". ה׳ גזר עליו להיות "נע ונד בארץ".', 'Am I My Brother’s Keeper', 'Kayin and Hevel brought offerings to Hashem, and Hevel’s was accepted. Kayin rose against Hevel in the field and killed him, and when asked "Where is Hevel your brother" he answered "Am I my brother’s keeper". Hashem decreed that he be "a wanderer on the earth".'),
  }),
  box({
    slug: 'hamabul', y: 10.93, year: [1656, null], name: L('המבול', 'The Flood'),
    summary: L('בשנת 1656 הביא ה׳ מבול על הארץ, ורק נח ומשפחתו ניצלו בתיבה.', 'In the year 1656 Hashem brought a flood upon the earth, and only Noach and his family were saved in the ark.'),
    rel: [...R('noach', 'naama', 'shem', 'cham', 'yefet', 'metushelach')],
    sources: [L('בראשית ו – ט', 'Genesis 6–9'), L('סנהדרין קח ע״א – ע״ב', 'Sanhedrin 108a–b'), L('סדר עולם רבה ד', 'Seder Olam Rabbah 4')],
    sections: [
      sec('ותשחת הארץ', '"ותשחת הארץ לפני האלהים, ותמלא הארץ חמס". ה׳ ציווה את נח לבנות תיבה, ומאה ועשרים שנה בנה אותה כדי שיראו בני דורו וישובו. בי״ז בחשון שנת 1656 "נבקעו כל מעינות תהום רבה", והגשם ירד ארבעים יום וארבעים לילה.', 'The Earth Was Corrupt', '"The earth was corrupt before God, and the earth was filled with violence". Hashem commanded Noach to build an ark, and he built it for a hundred and twenty years so that his generation would see and repent. On the 17th of Cheshvan in the year 1656 "all the fountains of the great deep burst open", and rain fell forty days and forty nights.'),
      sec('הקשת בענן', 'שנה שלמה היו נח ומשפחתו ובעלי החיים בתיבה. כשיצאו בנה נח מזבח, וה׳ כרת ברית שלא יביא עוד מבול לשחת את הארץ, וסימן הברית – הקשת בענן. לפי סדר עולם מת מתושלח בשנת המבול, והמבול עוכב שבעה ימים בשל ימי האבל עליו.', 'The Rainbow in the Cloud', 'A full year Noach, his family and the animals were in the ark. When they came out Noach built an altar, and Hashem made a covenant never again to bring a flood to destroy the earth, with the rainbow in the cloud as its sign. According to Seder Olam Metushelach died in the year of the Flood, and the Flood was delayed seven days for the mourning over him.'),
    ],
  }),
  box({
    slug: 'leidat-avraham', y: 15.3, year: [1948, null], name: L('לידת אברהם', 'The Birth of Avraham'),
    summary: L('בשנת 1948 נולד אברהם אבינו באור כשדים.', 'In the year 1948 Avraham our father was born in Ur Kasdim.'),
    rel: R('avraham-avinu', 'terach', 'amtelai', 'sarah-imenu'),
    sources: [L('בראשית יא – יב', 'Genesis 11–12'), L('סדר עולם רבה א', 'Seder Olam Rabbah 1'), L('עבודה זרה ט ע״א', 'Avodah Zarah 9a')],
    sections: [
      sec('אברהם אבינו', 'אברהם נולד לתרח בשנת 1948, עשרים דורות אחרי בריאת האדם. בדור שעבד עבודה זרה הכיר את בוראו, ויצא "לך לך מארצך וממולדתך" אל הארץ שה׳ הראה לו.', 'Avraham Our Father', 'Avraham was born to Terach in the year 1948, twenty generations after the creation of man. In a generation that worshipped idols he recognized his Creator, and went out – "Go forth from your land and your birthplace" – to the land Hashem showed him.'),
      sec('שני אלפים תוהו', 'הגמרא (עבודה זרה ט ע״א) מחלקת את שנות העולם: "שני אלפים תוהו, שני אלפים תורה". אלפיים שנות התורה מתחילות כשאברהם, בן חמישים ושתיים, "עשה נפשות בחרן" – בשנת 2000 לבריאה.', 'Two Thousand Years of Void', 'The Gemara (Avodah Zarah 9a) divides the years of the world: "two thousand years of void, two thousand years of Torah". The two thousand years of Torah begin when Avraham, aged fifty-two, "made souls in Charan" – in the year 2000 from Creation.'),
    ],
  }),
  small({
    slug: 'migdal-bavel', y: 16.14, year: [1996, null], name: L('בניית מגדל בבל ופילוג הארץ', 'The Tower of Bavel and the Dispersion'),
    summary: L('בני האדם בנו מגדל בבקעת שנער, וה׳ בלל את שפתם והפיץ אותם.', 'Mankind built a tower in the valley of Shinar, and Hashem confused their language and scattered them.'),
    rel: R('nimrod', 'peleg', 'avraham-avinu'), sources: [L('בראשית יא, א – ט', 'Genesis 11:1–9'), L('סדר עולם רבה א', 'Seder Olam Rabbah 1')],
    sections: one('הבה נבנה לנו עיר', '"הבה נבנה לנו עיר ומגדל וראשו בשמים ונעשה לנו שם". ה׳ בלל את שפתם, "ויפץ ה׳ אתם משם על פני כל הארץ". לפי סדר עולם היה זה בשנת 1996, שנת מותו של פלג, כשאברהם היה בן ארבעים ושמונה.', 'Let Us Build a City', '"Come, let us build us a city and a tower with its top in the heavens, and make a name for ourselves". Hashem confused their language, "and Hashem scattered them from there over all the earth". According to Seder Olam this was in the year 1996, the year Peleg died, when Avraham was forty-eight.'),
  }),
  small({
    slug: 'brit-bein-habetarim', y: 16.6, year: [2018, null], name: L('ברית בין הבתרים', 'The Covenant Between the Pieces'),
    summary: L('ה׳ כרת ברית עם אברהם והבטיח לו את הארץ, ובישר על גלות מצרים.', 'Hashem made a covenant with Avraham, promised him the land, and foretold the Egyptian exile.'),
    rel: R('avraham-avinu'), sources: [L('בראשית טו', 'Genesis 15'), L('סדר עולם רבה א', 'Seder Olam Rabbah 1')],
    sections: one('ידע תדע', 'אברהם ביתר את הבהמות, ובחשכה עבר "תנור עשן ולפיד אש" בין הבתרים. ה׳ אמר לו "ידע תדע כי גר יהיה זרעך בארץ לא להם... ארבע מאות שנה", והבטיח: "לזרעך נתתי את הארץ הזאת". לפי סדר עולם הייתה הברית כשאברהם היה בן שבעים, ובדיוק ארבע מאות ושלושים שנה לפני יציאת מצרים.', 'Know For Certain', 'Avraham cut the animals in pieces, and in the dark "a smoking furnace and a flaming torch" passed between the pieces. Hashem told him "Know for certain that your seed shall be strangers in a land not theirs... four hundred years", and promised: "To your seed I have given this land". According to Seder Olam the covenant was when Avraham was seventy, exactly four hundred and thirty years before the Exodus.'),
  }),
  small({
    slug: 'milchemet-hamelachim', y: 17.1, name: L('מלחמת ארבעת המלכים בחמישה', 'The War of the Four Kings Against the Five'),
    summary: L('אברהם רדף אחרי ארבעת המלכים והציל את לוט.', 'Avraham pursued the four kings and rescued Lot.'),
    rel: [...R('avraham-avinu', 'lot', 'eliezer-eved-avraham', 'shem', 'nimrod')], sources: [L('בראשית יד', 'Genesis 14'), L('נדרים לב ע״א', 'Nedarim 32a')],
    sections: one('ויחלק עליהם לילה', 'אמרפל ושלושה מלכים נוספים ניצחו את חמשת מלכי ככר הירדן ושבו את לוט. אברהם יצא עם שלוש מאות ושמונה עשר חניכיו – ולפי חז״ל עם אליעזר לבדו, שגימטריית שמו 318 – והציל אותו. מלכי צדק מלך שלם, הוא שם, יצא לקראתו בלחם ויין. חז״ל מזהים את אמרפל עם נמרוד.', 'He Divided Against Them by Night', 'Amrafel and three other kings defeated the five kings of the plain of the Jordan and took Lot captive. Avraham went out with his three hundred and eighteen trained men – according to Chazal with Eliezer alone, whose name has the numerical value 318 – and rescued him. Malki-Tzedek king of Shalem, who is Shem, came out to meet him with bread and wine. Chazal identify Amrafel with Nimrod.'),
  }),
  small({
    slug: 'hafichat-sedom', y: 17.57, year: [2047, null], name: L('הפיכת סדום ועמורה', 'The Overturning of Sedom and Amorah'),
    summary: L('ה׳ המטיר גפרית ואש על סדום ועמורה, ולוט ניצל.', 'Hashem rained sulfur and fire on Sedom and Amorah, and Lot was saved.'),
    rel: R('avraham-avinu', 'lot', 'bechorat-lot', 'tzeirat-lot'), sources: [L('בראשית יח – יט', 'Genesis 18–19')],
    sections: one('השופט כל הארץ', 'אברהם התפלל על סדום: "השפט כל הארץ לא יעשה משפט", וה׳ הסכים לחוס על העיר בזכות עשרה צדיקים – ולא נמצאו. המלאכים הוציאו את לוט ובנותיו, ואשת לוט הביטה מאחריה והייתה נציב מלח. זה היה שנה לפני לידת יצחק.', 'Shall the Judge of All the Earth', 'Avraham prayed for Sedom: "Shall the Judge of all the earth not do justice", and Hashem agreed to spare the city for the sake of ten righteous men – and they were not found. The angels brought out Lot and his daughters, and Lot’s wife looked back and became a pillar of salt. This was a year before Yitzhak’s birth.'),
  }),
  box({
    slug: 'leidat-yitzhak', y: 18.45, year: [2048, null], name: L('לידת יצחק', 'The Birth of Yitzhak'),
    summary: L('בשנת 2048 נולד יצחק לאברהם בן המאה ולשרה בת התשעים.', 'In the year 2048 Yitzhak was born to Avraham, a hundred years old, and Sarah, ninety.'),
    rel: R('yitzchak-avinu', 'avraham-avinu', 'sarah-imenu'), sources: [L('בראשית יח, י – טו; כא, א – ח', 'Genesis 18:10–15; 21:1–8')],
    sections: [
      sec('צחוק עשה לי אלהים', 'המלאכים בישרו לאברהם "למועד אשוב אליך כעת חיה ולשרה בן", ושרה צחקה בקרבה. בשנה שאחרי הפיכת סדום נולד יצחק, ושרה אמרה "צחק עשה לי אלהים, כל השמע יצחק לי". הוא היה הראשון שנימול לשמונה ימים.', 'God Has Made Laughter for Me', 'The angels told Avraham "At this season next year I will return to you, and Sarah shall have a son", and Sarah laughed within herself. The year after Sedom was overturned Yitzhak was born, and Sarah said "God has made laughter for me; all who hear will laugh with me". He was the first to be circumcised at eight days.'),
      sec('ממנו נמנו ארבע מאות שנה', 'את ארבע מאות שנות "גר יהיה זרעך" מונים חז״ל מלידת יצחק ועד יציאת מצרים: 2048 + 400 = 2448.', 'The Four Hundred Years Are Counted From Him', 'Chazal count the four hundred years of "your seed shall be strangers" from Yitzhak’s birth to the Exodus: 2048 + 400 = 2448.'),
    ],
  }),
  small({
    slug: 'akedat-yitzhak', y: 19.4, year: [2085, null], name: L('עקידת יצחק', 'The Binding of Yitzhak'),
    summary: L('אברהם עקד את יצחק בנו על המזבח בהר המוריה.', 'Avraham bound his son Yitzhak on the altar on Mount Moriah.'),
    rel: R('avraham-avinu', 'yitzchak-avinu', 'sarah-imenu'), sources: [L('בראשית כב', 'Genesis 22'), L('סדר עולם רבה א', 'Seder Olam Rabbah 1'), L('רש״י, בראשית כג, ב', 'Rashi, Genesis 23:2')],
    sections: one('הר המוריה', '"קח נא את בנך את יחידך אשר אהבת את יצחק". אברהם ויצחק הלכו "שניהם יחדו" להר המוריה, ושם אמר המלאך "אל תשלח ידך אל הנער". לפי סדר עולם היה יצחק בן שלושים ושבע, ורש״י מביא שמיד אחר כך מתה שרה כששמעה על העקידה. הר המוריה הוא מקום בית המקדש.', 'Mount Moriah', '"Take your son, your only one, whom you love, Yitzhak". Avraham and Yitzhak went "the two of them together" to Mount Moriah, and there the angel said "Do not lay your hand on the boy". According to Seder Olam Yitzhak was thirty-seven, and Rashi brings that Sarah died right after, when she heard of the binding. Mount Moriah is the place of the Holy Temple.'),
  }),
  box({
    slug: 'leidat-yaakov', y: 21.06, year: [2108, null], name: L('לידת יעקב', 'The Birth of Yaakov'),
    summary: L('בשנת 2108 נולדו יעקב ועשו, התאומים של יצחק ורבקה.', 'In the year 2108 Yaakov and Esav were born, the twins of Yitzhak and Rivka.'),
    rel: R('yaakov-avinu', 'esav', 'yitzchak-avinu', 'rivka-imenu'), sources: [L('בראשית כה, יט – לד', 'Genesis 25:19–34')],
    sections: [
      sec('שני גוים בבטנך', 'עשרים שנה התפללו יצחק ורבקה לבנים. ה׳ אמר לרבקה "שני גוים בבטנך... ורב יעבד צעיר", ויעקב יצא "וידו אחזת בעקב עשו". הוא נולד כשיצחק היה בן שישים.', 'Two Nations in Your Womb', 'For twenty years Yitzhak and Rivka prayed for children. Hashem told Rivka "Two nations are in your womb... and the elder shall serve the younger", and Yaakov came out "his hand holding Esav’s heel". He was born when Yitzhak was sixty.'),
      sec('בית ישראל', 'מיעקב, שנקרא ישראל, יצאו שנים עשר השבטים. הוא היה איש תם יושב אוהלים, ולפי חז״ל למד בבית מדרשם של שם ועבר. בשנה שנולד יעקב היה אברהם בן מאה ושישים, והוא חי עוד חמש עשרה שנה.', 'The House of Israel', 'From Yaakov, called Israel, came the twelve tribes. He was a simple man dwelling in tents, and according to Chazal studied in the study hall of Shem and Ever. In the year Yaakov was born Avraham was a hundred and sixty, and lived fifteen more years.'),
    ],
  }),
  small({
    slug: 'mechirat-yosef', y: 22.65, year: [2216, null], name: L('מכירת יוסף', 'The Sale of Yosef'),
    summary: L('האחים מכרו את יוסף לישמעאלים, והוא הורד למצרים.', 'The brothers sold Yosef to the Yishmaelites, and he was taken down to Egypt.'),
    rel: R('yosef-hatzadik', 'yaakov-avinu', 'shevet-reuven', 'shevet-yehuda'), sources: [L('בראשית לז', 'Genesis 37')],
    sections: one('כתונת הפסים', 'יעקב אהב את יוסף ועשה לו כתונת פסים, ויוסף חלם שאחיו משתחווים לו. כשבא אליהם לשכם השליכוהו לבור, ובעצת יהודה מכרו אותו לישמעאלים בעשרים כסף. ראובן ביקש להצילו. יוסף היה אז בן שבע עשרה.', 'The Coat of Many Colours', 'Yaakov loved Yosef and made him a coat of many colours, and Yosef dreamed that his brothers bowed to him. When he came to them at Shechem they threw him into a pit, and on Yehudah’s advice sold him to the Yishmaelites for twenty pieces of silver. Reuven sought to save him. Yosef was then seventeen.'),
  }),
  small({
    slug: 'yehuda-vetamar', y: 22.93, name: L('מעשה יהודה ותמר', 'Yehudah and Tamar'),
    summary: L('יהודה הודה "צדקה ממני", ומתמר נולדו פרץ וזרח.', 'Yehudah admitted "She is more righteous than I", and from Tamar Peretz and Zerach were born.'),
    rel: R('shevet-yehuda', 'tamar-eshet-er', 'peretz', 'zerach'), sources: [L('בראשית לח', 'Genesis 38'), L('סוטה י ע״ב', 'Sotah 10b')],
    sections: one('צדקה ממני', 'מיד אחרי מכירת יוסף מספרת התורה על יהודה, שירד מאת אחיו. כשתמר כלתו הוצאה להישרף שלחה לו את החותמת, הפתילים והמטה, ויהודה הודה "צדקה ממני". מתמר נולדו פרץ וזרח, וממנה יצא בית דוד.', 'She Is More Righteous Than I', 'Right after the sale of Yosef the Torah tells of Yehudah, who went down from his brothers. When his daughter-in-law Tamar was taken out to be burned she sent him the seal, cord and staff, and Yehudah admitted "She is more righteous than I". From Tamar Peretz and Zerach were born, and from her came the house of David.'),
  }),
  box({
    slug: 'yerida-lemitzrayim', y: 23.93, year: [2238, null], name: L('ירידה למצרים', 'The Descent to Egypt'),
    summary: L('בשנת 2238 ירדו יעקב ובניו, שבעים נפש, למצרים.', 'In the year 2238 Yaakov and his sons, seventy souls, went down to Egypt.'),
    rel: R('yaakov-avinu', 'yosef-hatzadik', 'shevet-yehuda', 'serach-bat-asher', 'yocheved', 'chetzron', 'kehat'),
    sources: [L('בראשית מה – מז', 'Genesis 45–47'), L('סוטה יב ע״א', 'Sotah 12a')],
    sections: [
      sec('עוד יוסף חי', 'בשנות הרעב ירדו האחים לשבור אוכל במצרים, ויוסף התוודע אליהם: "אני יוסף, העוד אבי חי". יעקב שמע "עוד יוסף חי" ושמח, וה׳ אמר לו "אל תירא מרדה מצרימה... ואנכי אעלך גם עלה". יעקב היה בן מאה ושלושים.', 'Yosef Is Still Alive', 'In the years of famine the brothers went down to buy food in Egypt, and Yosef revealed himself to them: "I am Yosef – is my father still alive". Yaakov heard "Yosef is still alive" and rejoiced, and Hashem told him "Do not fear to go down to Egypt... and I will also surely bring you up again". Yaakov was a hundred and thirty.'),
      sec('שבעים נפש', 'כל הנפש הבאה מצרימה הייתה שבעים. חז״ל מונים בהן את יוכבד בת לוי, שנולדה בין החומות בשעת הכניסה למצרים (סוטה יב ע״א). בני ישראל ישבו בארץ גושן, וחצרון וחמול, נכדי יהודה, היו בין היורדים.', 'Seventy Souls', 'All the souls who came to Egypt were seventy. Chazal count among them Yocheved daughter of Levi, born between the walls as they entered Egypt (Sotah 12a). Israel settled in the land of Goshen, and Chetzron and Chamul, Yehudah’s grandsons, were among those who went down.'),
    ],
  }),
  small({
    slug: 'avodat-perech', y: 25.88, year: [2332, null], name: L('תחילת עבודת הפרך במצרים', 'The Beginning of the Hard Labour in Egypt'),
    summary: L('אחרי מות לוי, אחרון השבטים, החל השעבוד הקשה.', 'After the death of Levi, the last of the tribes, the hard bondage began.'),
    rel: R('shevet-levi'), sources: [L('שמות א, ו – יד', 'Exodus 1:6–14'), L('סדר עולם רבה ג', 'Seder Olam Rabbah 3')],
    sections: one('ויקם מלך חדש', '"וימת יוסף וכל אחיו וכל הדור ההוא", "ויקם מלך חדש על מצרים אשר לא ידע את יוסף". חז״ל אומרים שכל זמן שאחד מן השבטים היה בחיים לא התחיל השעבוד, ולוי היה האחרון שמת. אז "וימררו את חייהם בעבדה קשה בחמר ובלבנים".', 'A New King Arose', '"Yosef died, and all his brothers, and all that generation", "and a new king arose over Egypt who did not know Yosef". Chazal say that as long as one of the tribes was alive the bondage did not begin, and Levi was the last to die. Then "they embittered their lives with hard labour, in mortar and in brick".'),
  }),
  small({
    slug: 'gezerat-hayeor', y: 26.24, name: L('גזירת "כל הבן הילוד היארה תשליכהו"', 'The Decree "Every Son Born, Cast Into the River"'),
    summary: L('פרעה גזר להשליך ליאור כל בן שייוולד לעברים.', 'Pharaoh decreed that every son born to the Hebrews be cast into the river.'),
    rel: R('amram', 'yocheved', 'miriam-haneviah'), sources: [L('שמות א, טו – כב', 'Exodus 1:15–22'), L('סוטה יא ע״ב – יב ע״א', 'Sotah 11b–12a')],
    sections: one('המילדות', 'פרעה ציווה את המיילדות שפרה ופועה להמית את הבנים, "ותיראן המילדת את האלהים". אחר כך גזר על כל עמו "כל הבן הילוד היארה תשליכהו". חז״ל אומרים שהמיילדות הן יוכבד ומרים, ושעמרם גירש את אשתו בעקבות הגזירה עד שמרים בתו שכנעה אותו להחזירה.', 'The Midwives', 'Pharaoh commanded the midwives Shifra and Puah to kill the sons, "but the midwives feared God". Then he decreed to all his people "Every son that is born you shall cast into the river". Chazal say the midwives were Yocheved and Miriam, and that Amram divorced his wife because of the decree until his daughter Miriam persuaded him to take her back.'),
  }),
  small({
    slug: 'leidat-moshe', y: 26.55, year: [2368, null], name: L('לידת משה רבנו', 'The Birth of Moshe Rabbeinu'),
    summary: L('משה נולד בז׳ באדר, ואמו הצפינה אותו בתיבה על היאור.', 'Moshe was born on the 7th of Adar, and his mother hid him in a basket on the river.'),
    rel: R('moshe-rabbeinu', 'amram', 'yocheved', 'miriam-haneviah'), sources: [L('שמות ב, א – י', 'Exodus 2:1–10'), L('מגילה יג ע״ב', 'Megillah 13b')],
    sections: one('כי מן המים משיתהו', 'יוכבד הצפינה את משה שלושה ירחים, ואז שמה אותו בתיבת גומא בסוף. בת פרעה מצאה אותו, ומרים אחותו הביאה את אמו להיניקו. בת פרעה קראה לו משה "כי מן המים משיתהו". חז״ל אומרים שנולד ונפטר בז׳ באדר.', 'For I Drew Him From the Water', 'Yocheved hid Moshe three months, and then placed him in a basket of reeds among the rushes. Pharaoh’s daughter found him, and his sister Miriam brought his mother to nurse him. Pharaoh’s daughter named him Moshe, "for I drew him from the water". Chazal say he was born and died on the 7th of Adar.'),
  }),
  small({
    slug: 'moshe-borech-lemidyan', y: 27.26, name: L('משה הורג את המצרי ובורח למדין', 'Moshe Kills the Egyptian and Flees to Midyan'),
    summary: L('משה הרג את המצרי שהכה עברי, וברח מפני פרעה למדין.', 'Moshe killed the Egyptian who was striking a Hebrew, and fled from Pharaoh to Midyan.'),
    rel: R('moshe-rabbeinu', 'datan', 'aviram', 'yitro', 'tziporah'), sources: [L('שמות ב, יא – כב', 'Exodus 2:11–22'), L('נדרים סד ע״ב', 'Nedarim 64b')],
    sections: one('ויגדל משה', 'משה יצא אל אחיו וראה בסבלותם, והרג את האיש המצרי שהכה עברי. למחרת ראה "שני אנשים עברים נצים" – לפי חז״ל דתן ואבירם – והדבר נודע. משה ברח למדין, ישב ליד הבאר והושיע את בנות יתרו, ונשא את ציפורה.', 'Moshe Grew Up', 'Moshe went out to his brothers and saw their burdens, and killed the Egyptian who was striking a Hebrew. The next day he saw "two Hebrew men fighting" – according to Chazal Datan and Aviram – and the matter became known. Moshe fled to Midyan, sat by the well and saved Yitro’s daughters, and married Tziporah.'),
  }),
  small({
    slug: 'hasne', y: 28.17, year: [2447, null], name: L('משה והסנה הבוער', 'Moshe and the Burning Bush'),
    summary: L('ה׳ נגלה למשה בסנה ושלח אותו להוציא את ישראל ממצרים.', 'Hashem appeared to Moshe in the bush and sent him to bring Israel out of Egypt.'),
    rel: R('moshe-rabbeinu', 'aharon-hakohen'), sources: [L('שמות ג – ד', 'Exodus 3–4')],
    sections: one('והסנה איננו אכל', 'משה רעה את צאן יתרו בחורב, וראה "והנה הסנה בער באש, והסנה איננו אכל". ה׳ קרא אליו מתוך הסנה ושלח אותו לפרעה: "שלח את עמי". משה ביקש שבעה ימים שישלח אחר, וה׳ נתן לו את אהרן אחיו לפה.', 'The Bush Was Not Consumed', 'Moshe was tending Yitro’s sheep at Chorev, and saw "the bush was burning with fire, and the bush was not consumed". Hashem called to him from the bush and sent him to Pharaoh: "Let My people go". Moshe asked for seven days that another be sent, and Hashem gave him his brother Aharon as his spokesman.'),
  }),
  small({
    slug: 'eser-hamakot', y: 28.67, year: [2447, 2448], name: L('עשר המכות', 'The Ten Plagues'),
    summary: L('ה׳ הכה את מצרים בעשר מכות עד שפרעה שילח את ישראל.', 'Hashem struck Egypt with ten plagues until Pharaoh sent Israel out.'),
    rel: R('moshe-rabbeinu', 'aharon-hakohen'), sources: [L('שמות ז – יב', 'Exodus 7–12'), L('הגדה של פסח', 'The Pesach Haggadah')],
    sections: one('דצ״ך עד״ש באח״ב', 'דם, צפרדע, כינים, ערוב, דבר, שחין, ברד, ארבה, חושך ומכת בכורות – רבי יהודה היה נותן בהם סימנים: דצ״ך עד״ש באח״ב. לפי חז״ל נמשכו המכות כשנה. במכת בכורות, בליל ט״ו בניסן, שילח פרעה את בני ישראל.', 'Detzach Adash Be’achav', 'Blood, frogs, lice, wild beasts, pestilence, boils, hail, locusts, darkness and the slaying of the firstborn – Rabbi Yehudah gave them a mnemonic: Detzach Adash Be’achav. According to Chazal the plagues lasted about a year. At the slaying of the firstborn, on the night of the 15th of Nisan, Pharaoh sent the children of Israel out.'),
  }),
  box({
    slug: 'yetziat-mitzrayim', y: 29.55, year: [2448, null], name: L('יציאת מצרים ומעמד הר סיני', 'The Exodus and the Revelation at Mount Sinai'),
    summary: L('בשנת 2448 יצאו ישראל ממצרים, נבקע לפניהם ים סוף, ובחודש השלישי קיבלו את התורה בהר סיני.', 'In the year 2448 Israel left Egypt, the Red Sea split before them, and in the third month they received the Torah at Mount Sinai.'),
    rel: [...R('moshe-rabbeinu', 'aharon-hakohen', 'miriam-haneviah', 'nachshon-ben-aminadav', 'yehoshua-bin-nun', 'chur', 'yitro'), to('related', 'mishkan-bamidbar')],
    sources: [L('שמות יב – כ', 'Exodus 12–20'), L('סוטה לז ע״א', 'Sotah 37a'), L('שבת פו ע״ב', 'Shabbat 86b')],
    sections: [
      sec('קריעת ים סוף', 'בט״ו בניסן יצאו שש מאות אלף רגלי "ביד רמה". כשפרעה רדף אחריהם נבקע הים, וחז״ל מספרים שנחשון בן עמינדב קפץ ראשון למים. בצד השני שרו משה ובני ישראל את שירת הים, ומרים יצאה בתופים ובמחולות.', 'The Splitting of the Sea', 'On the 15th of Nisan six hundred thousand men on foot went out "with a high hand". When Pharaoh pursued them the sea split, and Chazal relate that Nachshon son of Aminadav jumped into the water first. On the other side Moshe and Israel sang the Song of the Sea, and Miriam went out with timbrels and dances.'),
      sec('מעמד הר סיני', 'בחודש השלישי חנו ישראל "נגד ההר" "כאיש אחד בלב אחד", ובשישי בסיון נתן ה׳ את עשרת הדברות לעיני כל העם. משה עלה להר ארבעים יום והוריד את הלוחות. משם נמשכה שרשרת המסורה – "משה קיבל תורה מסיני ומסרה ליהושע".', 'The Revelation at Mount Sinai', 'In the third month Israel encamped "opposite the mountain" "as one man with one heart", and on the 6th of Sivan Hashem gave the Ten Commandments before all the people. Moshe went up the mountain forty days and brought down the Tablets. From there ran the chain of tradition – "Moshe received the Torah from Sinai and handed it to Yehoshua".'),
    ],
  }),
  small({
    slug: 'kibush-haaretz', y: 30.38, year: [2488, 2516], name: L('כיבוש הארץ וחלוקתה ותחילת תקופת השופטים', 'The Conquest and Division of the Land, and the Start of the Judges'),
    summary: L('יהושע ובני ישראל כבשו את ארץ כנען וחילקו אותה בין השבטים; אחרי מות יהושע החלה תקופת השופטים.', 'Yehoshua and Israel conquered the Land of Kenaan and divided it among the tribes; after Yehoshua’s death the period of the Judges began.'),
    rel: R('yehoshua-bin-nun', 'elazar-ben-aharon', 'kalev-ben-yefuneh', 'rachav', 'otniel-ben-kenaz'), sources: [L('ספר יהושע', 'The Book of Joshua'), L('שופטים א – ג', 'Judges 1–3')],
    sections: one('ארבע עשרה שנה', 'בשנת 2488 עברו ישראל את הירדן ונכבשה יריחו. שבע שנים כבשו ושבע שנים חילקו את הארץ בגורל, על ידי יהושע ואלעזר הכהן. אחרי מות יהושע, בשנת 2516, החלה תקופת השופטים, ועתניאל בן קנז היה השופט הראשון.', 'Fourteen Years', 'In the year 2488 Israel crossed the Jordan and Yericho was captured. Seven years they conquered and seven years they divided the land by lot, through Yehoshua and Elazar the Kohen. After Yehoshua’s death, in the year 2516, the period of the Judges began, and Otniel son of Kenaz was the first judge.'),
  }),
  small({
    slug: 'hamlachat-shaul', y: 33.5, year: [2882, 2884], name: L('המלכת שאול ומלחמת שאול ודוד', 'Shaul Is Made King; Shaul and David'),
    summary: L('שמואל המליך את שאול וסיים את תקופת השופטים, ואחר כך משח את דוד; שאול ובניו נפלו בגלבוע.', 'Shmuel made Shaul king, ending the period of the Judges, then anointed David; Shaul and his sons fell at Gilboa.'),
    rel: R('shmuel-hanavi', 'shaul-hamelech', 'david', 'yehonatan-ben-shaul'), sources: [L('שמואל א׳ ח – לא', 'I Samuel 8–31')],
    sections: one('שימה לנו מלך', 'העם ביקשו משמואל "שימה לנו מלך לשפטנו ככל הגוים", ושמואל משח את שאול בן קיש. אחרי ששאול הפר את ציווי ה׳ במלחמת עמלק, משח שמואל את דוד בן ישי. שאול רדף את דוד שנים, עד שנפל הוא ובניו במלחמה בפלשתים בהר הגלבוע.', 'Give Us a King', 'The people asked Shmuel "Make us a king to judge us like all the nations", and Shmuel anointed Shaul son of Kish. After Shaul violated Hashem’s command in the war with Amalek, Shmuel anointed David son of Yishai. Shaul pursued David for years, until he and his sons fell in the war with the Philistines on Mount Gilboa.'),
  }),
  small({
    slug: 'malchut-ish-boshet', y: 35.2, year: [2884, 2891], name: L('מלכות איש בושת ואיחוד הממלכה', 'Ish-Boshet’s Reign and the Uniting of the Kingdom'),
    summary: L('אחרי מות שאול המליך שבט יהודה את דוד, ואבנר המליך את איש בושת על שאר ישראל.', 'After Shaul’s death the tribe of Yehudah made David king, and Avner made Ish-Boshet king over the rest of Israel.'),
    rel: R('david', 'ish-boshet', 'avner', 'yoav'), sources: [L('שמואל ב׳ ב – ה', 'II Samuel 2–5')],
    sections: one('שתי ממלכות', 'אחרי מות שאול מלך דוד על יהודה בחברון, ואבנר בן נר שר צבא שאול המליך את איש בושת בן שאול על שאר ישראל. שנתיים מלך איש בושת, ואחרי שנרצח באו כל שבטי ישראל אל דוד חברונה ומשחו אותו למלך על כל ישראל.', 'Two Kingdoms', 'After Shaul’s death David reigned over Yehudah in Chevron, and Avner son of Ner, Shaul’s commander, made Ish-Boshet son of Shaul king over the rest of Israel. Ish-Boshet reigned two years, and after he was murdered all the tribes of Israel came to David at Chevron and anointed him king over all Israel.'),
  }),
  box({
    slug: 'david-molech-bechevron', y: 36.25, year: [2884, null], name: L('דוד מתחיל למלוך בחברון', 'David Begins to Reign in Chevron'),
    summary: L('בשנת 2884 החל דוד למלוך בחברון: שבע שנים בחברון ושלושים ושלוש בירושלים.', 'In the year 2884 David began to reign in Chevron: seven years in Chevron and thirty-three in Jerusalem.'),
    rel: R('david', 'shmuel-hanavi', 'avner', 'ish-boshet', 'yoav', 'michal', 'avigayil-haneviah'),
    sources: [L('שמואל ב׳ ב – ה', 'II Samuel 2–5'), L('סדר עולם זוטא ה', 'Seder Olam Zuta 5')],
    sections: [
      sec('מלך ישראל', 'דוד היה בן שלושים במולכו, וארבעים שנה מלך: שבע שנים וששה חודשים בחברון על יהודה, ושלושים ושלוש שנה בירושלים על כל ישראל ויהודה. בימיו נקבעה מלכות בית דוד לדורות: "ונאמן ביתך וממלכתך עד עולם לפניך".', 'King of Israel', 'David was thirty when he began to reign, and he reigned forty years: seven years and six months in Chevron over Yehudah, and thirty-three years in Jerusalem over all Israel and Yehudah. In his days the kingdom of the house of David was established for all generations: "your house and your kingdom shall be established forever before you".'),
      sec('מחברון לירושלים', 'מחברון, עיר האבות, עבר דוד לירושלים שכבש מן היבוסים, והעלה אליה את ארון ה׳. הוא הכין את כל הדרוש לבניין המקדש, אך ה׳ אמר לו "לא תבנה בית לשמי... כי דמים רבים שפכת", ושלמה בנו בנה אותו.', 'From Chevron to Jerusalem', 'From Chevron, the city of the Patriarchs, David moved to Jerusalem, which he captured from the Yevusites, and brought up the Ark of Hashem. He prepared all that was needed to build the Temple, but Hashem told him "You shall not build a house for My name... for you have shed much blood", and his son Shlomo built it.'),
    ],
  }),
  small({
    slug: 'kibush-yerushalayim', y: 37.0, year: [2891, null], name: L('דוד כובש את ירושלים', 'David Captures Jerusalem'),
    summary: L('דוד כבש את ירושלים מידי היבוסים, וקבע בה את בירתו.', 'David captured Jerusalem from the Yevusites and made it his capital.'),
    rel: R('david', 'yoav'), sources: [L('שמואל ב׳ ה, ו – י', 'II Samuel 5:6–10'), L('דברי הימים א׳ יא, ד – ט', 'I Chronicles 11:4–9')],
    sections: one('מצודת ציון', 'דוד ואנשיו עלו על היבוסי יושב הארץ, "וילכד דוד את מצדת ציון היא עיר דוד". יואב בן צרויה עלה ראשון ונעשה לראש ושר.', 'The Stronghold of Zion', 'David and his men went up against the Yevusites who lived in the land, "and David captured the stronghold of Zion, which is the City of David". Yoav son of Tzeruyah went up first and became chief and commander.'),
  }),
  small({
    slug: 'mered-avshalom', y: 37.3, name: L('מרד אבשלום', 'Avshalom’s Rebellion'),
    summary: L('אבשלום מרד בדוד אביו, ונהרג ביער אפרים.', 'Avshalom rebelled against his father David, and was killed in the forest of Efraim.'),
    rel: R('avshalom', 'david', 'achitofel', 'yoav', 'tzadok-hakohen', 'evyatar-ben-achimelech', 'achimaatz-ben-tzadok'), sources: [L('שמואל ב׳ טו – יט', 'II Samuel 15–19')],
    sections: one('בני אבשלום', 'אבשלום גנב את לב אנשי ישראל והמליך את עצמו בחברון, ואחיתופל הצטרף אליו. דוד ברח מירושלים בבכי. בקרב ביער אפרים נאחז אבשלום באלה, ויואב הרגו, ודוד קונן "בני אבשלום, בני בני".', 'My Son Avshalom', 'Avshalom stole the hearts of the men of Israel and made himself king in Chevron, and Achitofel joined him. David fled Jerusalem weeping. In the battle in the forest of Efraim Avshalom was caught in a terebinth, and Yoav killed him, and David lamented "My son Avshalom, my son, my son".'),
  }),
  small({
    slug: 'maase-bat-sheva', y: 37.6, name: L('מעשה בת-שבע', 'The Episode of Bat-Sheva'),
    summary: L('דוד לקח את בת-שבע אשת אוריה, ונתן הנביא הוכיח אותו.', 'David took Bat-Sheva, Uriyah’s wife, and Natan the prophet rebuked him.'),
    rel: R('david', 'bat-sheva', 'uriya-hachiti', 'natan-hanavi', 'shlomo'), sources: [L('שמואל ב׳ יא – יב', 'II Samuel 11–12'), L('שבת נו ע״א', 'Shabbat 56a')],
    sections: one('אתה האיש', 'דוד לקח את בת-שבע, ואוריה בעלה נהרג במלחמה בעקבות מכתבו של דוד ליואב. נתן הנביא בא אל דוד וסיפר את משל כבשת הרש, ואמר "אתה האיש". דוד הודה "חטאתי לה׳" ונענה "גם ה׳ העביר חטאתך". בנה השני של בת-שבע היה שלמה.', 'You Are the Man', 'David took Bat-Sheva, and her husband Uriyah was killed in battle following David’s letter to Yoav. Natan the prophet came to David with the parable of the poor man’s lamb, and said "You are the man". David admitted "I have sinned against Hashem" and was answered "Hashem has also put away your sin". Bat-Sheva’s second son was Shlomo.'),
  }),
  small({
    slug: 'mered-adoniyahu', y: 37.95, year: [2924, null], name: L('מרד אדוניהו', 'Adoniyahu’s Rebellion'),
    summary: L('אדוניהו ניסה למלוך בסוף ימי דוד, ושלמה נמשח למלך.', 'Adoniyahu tried to reign at the end of David’s days, and Shlomo was anointed king.'),
    rel: R('adoniyahu', 'shlomo', 'bat-sheva', 'natan-hanavi', 'tzadok-hakohen', 'benayahu', 'yoav', 'evyatar-ben-achimelech'), sources: [L('מלכים א׳ א – ב', 'I Kings 1–2')],
    sections: one('יחי המלך שלמה', 'אדוניהו אמר "אני אמלך", ויואב ואביתר תמכו בו. נתן ובת-שבע הזכירו לדוד את שבועתו, ודוד ציווה למשוח את שלמה בגיחון. צדוק ונתן משחו אותו, ובניהו והכרתי והפלתי ליוו אותו, והעם קרא "יחי המלך שלמה".', 'Long Live King Shlomo', 'Adoniyahu said "I will be king", and Yoav and Evyatar supported him. Natan and Bat-Sheva reminded David of his oath, and David ordered Shlomo anointed at the Gichon. Tzadok and Natan anointed him, Benayahu and the Kerethites and Pelethites escorted him, and the people cried "Long live King Shlomo".'),
  }),
  box({
    slug: 'binyan-bayit-rishon', y: 38.8, year: [2928, 2935], name: L('בניית בית ראשון', 'The Building of the First Temple'),
    summary: L('בשנת 2928, ארבע מאות ושמונים שנה ליציאת מצרים, החל שלמה לבנות את בית המקדש.', 'In the year 2928, four hundred and eighty years after the Exodus, Shlomo began to build the Holy Temple.'),
    rel: [...R('shlomo', 'david', 'tzadok-hakohen', 'natan-hanavi'), to('related', 'beit-hamikdash-harishon'), to('related', 'aron-habrit')],
    sources: [L('מלכים א׳ ו – ח', 'I Kings 6–8'), L('דברי הימים ב׳ ג – ז', 'II Chronicles 3–7')],
    sections: [
      sec('ויבן שלמה את הבית', '"ויהי בשמונים שנה וארבע מאות שנה לצאת בני ישראל מארץ מצרים... ויבן הבית לה׳". שלמה בנה את הבית בהר המוריה, במקום העקידה, שבע שנים, בשיתוף חירם מלך צור. האבנים הובאו שלמות, "ומקבות והגרזן כל כלי ברזל לא נשמע בבית בהבנותו".', 'Shlomo Built the House', '"In the four hundred and eightieth year after the children of Israel left the land of Egypt... he built the House of Hashem". Shlomo built the House on Mount Moriah, the place of the binding, for seven years, together with Chiram king of Tzor. The stones were brought finished, "and no hammer or axe or any iron tool was heard in the House while it was being built".'),
      sec('חנוכת הבית', 'בחג הסוכות הכניסו הכהנים את ארון הברית לקודש הקדשים, "ויהי בצאת הכהנים מן הקדש והענן מלא את בית ה׳". שלמה התפלל את תפילת חנוכת הבית, שבה ביקש שכל תפילה שתופנה אל הבית הזה – גם של נכרי – תישמע. הבית עמד ארבע מאות ועשר שנים.', 'The Dedication of the House', 'On Sukkot the Kohanim brought the Ark of the Covenant into the Holy of Holies, "and when the Kohanim came out of the Sanctuary, the cloud filled the House of Hashem". Shlomo prayed the prayer of the dedication, asking that every prayer turned toward this House – even a stranger’s – be heard. The House stood four hundred and ten years.'),
    ],
  }),
  box({
    slug: 'pilug-hamamlacha', y: 41.1, year: [2964, null], name: L('התפצלות הממלכה', 'The Division of the Kingdom'),
    summary: L('בשנת 2964, אחרי מות שלמה, נחלקה הממלכה: עשרה שבטים מלכו אחרי ירבעם, ויהודה ובנימין נשארו עם רחבעם.', 'In the year 2964, after Shlomo’s death, the kingdom split: ten tribes followed Yeravam, and Yehudah and Binyamin stayed with Rechavam.'),
    rel: R('rechavam', 'yeravam-ben-nevat', 'achiyah-hashiloni', 'shemayah-ish-haelokim', 'shlomo'),
    sources: [L('מלכים א׳ יא – יב', 'I Kings 11–12'), L('דברי הימים ב׳ י – יא', 'II Chronicles 10–11')],
    sections: [
      sec('אבי יסר אתכם בשוטים', 'אחיה השילוני קרע את שלמתו לשנים עשר קרעים ונתן עשרה לירבעם. אחרי מות שלמה ביקש העם מרחבעם להקל את העול, ורחבעם שמע לעצת הילדים: "אבי יסר אתכם בשוטים ואני איסר אתכם בעקרבים". העם אמר "מה לנו חלק בדוד", ועשרת השבטים המליכו את ירבעם.', 'My Father Chastised You With Whips', 'Achiyah HaShiloni tore his garment into twelve pieces and gave ten to Yeravam. After Shlomo’s death the people asked Rechavam to lighten the yoke, and Rechavam followed the young men’s advice: "My father chastised you with whips, but I will chastise you with scorpions". The people said "What portion have we in David", and the ten tribes made Yeravam king.'),
      sec('שתי ממלכות', 'רחבעם רצה לצאת למלחמה, ושמעיה איש האלהים אמר בשם ה׳ "לא תעלו ולא תלחמון עם אחיכם". מאז היו שתי ממלכות: ממלכת יהודה, בבית דוד, וממלכת ישראל בצפון. ירבעם הציב עגלי זהב בבית אל ובדן, כדי שהעם לא יעלה לירושלים.', 'Two Kingdoms', 'Rechavam wanted to go to war, and Shemayah the man of God said in Hashem’s name "Do not go up or fight against your brothers". From then on there were two kingdoms: the Kingdom of Judah, under the house of David, and the Kingdom of Israel in the north. Yeravam set up golden calves in Beit El and Dan, so that the people would not go up to Jerusalem.'),
    ],
  }),
  small({
    slug: 'aliyat-shishak', y: 41.9, year: [2969, null], name: L('עליית שישק מלך מצרים על ירושלים', 'Shishak King of Egypt Comes Up Against Jerusalem'),
    summary: L('בשנה החמישית לרחבעם עלה שישק על ירושלים ולקח את אוצרות בית ה׳.', 'In Rechavam’s fifth year Shishak came up against Jerusalem and took the treasures of the House of Hashem.'),
    rel: R('rechavam', 'shemayah-ish-haelokim'), sources: [L('מלכים א׳ יד, כה – כח', 'I Kings 14:25–28'), L('דברי הימים ב׳ יב', 'II Chronicles 12')],
    sections: one('מגיני הזהב', 'שישק לקח את אוצרות בית ה׳ ובית המלך ואת מגיני הזהב שעשה שלמה, ורחבעם עשה תחתם מגיני נחושת. שמעיה הנביא אמר לשרי יהודה "אתם עזבתם אתי", והם נכנעו, ולכן לא הושחתה ירושלים.', 'The Golden Shields', 'Shishak took the treasures of the House of Hashem and of the king’s house and the golden shields Shlomo had made, and Rechavam made bronze shields in their place. Shemayah the prophet told the princes of Judah "You have forsaken Me", and they humbled themselves, and so Jerusalem was not destroyed.'),
  }),
  small({
    slug: 'koach-ashur', y: 42.3, name: L('אשור נעשית הכוח החזק במזרח התיכון', 'Assyria Becomes the Greatest Power in the Near East'),
    summary: L('בתקופה זו עלתה ממלכת אשור והייתה לכוח החזק ביותר באזור.', 'In this period the kingdom of Assyria rose and became the strongest power in the region.'),
    rel: R('ashur'), sources: [L('בראשית י, יא', 'Genesis 10:11'), L('ישעיהו י, ה', 'Isaiah 10:5')],
    sections: one('אשור שבט אפי', 'מאשור בן שם יצאה ממלכת אשור, שבירתה נינוה. בתקופת הממלכות עלתה אשור לגדולה, ולימים הגלתה את עשרת השבטים ועלתה על יהודה. ישעיהו קרא לה "הוי אשור שבט אפי" – הכלי שבו ה׳ מעניש את עמו.', 'Assyria, the Rod of My Anger', 'From Ashur son of Shem came the kingdom of Assyria, whose capital was Nineveh. In the period of the kingdoms Assyria rose to greatness, and later exiled the ten tribes and came up against Judah. Yeshayahu called it "Woe, Assyria, the rod of My anger" – the instrument by which Hashem punishes His people.'),
  }),
  small({
    slug: 'malchut-omri', y: 44.2, year: [3010, 3021], name: L('מלכות עמרי ובניין שומרון', 'Omri’s Reign and the Building of Shomron'),
    summary: L('אחרי מות זמרי נלחם עמרי בתבני על המלוכה, ניצח ובנה את העיר שומרון.', 'After Zimri’s death Omri fought Tivni for the throne, won, and built the city of Shomron.'),
    rel: R('zimri', 'tivni', 'omri'), sources: [L('מלכים א׳ טז, ט – כח', 'I Kings 16:9–28'), L('סנהדרין קב ע״ב', 'Sanhedrin 102b')],
    sections: one('הר שמרון', 'זמרי מלך שבעה ימים ושרף את עצמו בארמון. העם נחלק בין תבני בן גינת לעמרי משבט אפרים, ואחרי ארבע שנים גבר עמרי. הוא קנה את הר שמרון מאת שמר בכיכרים כסף ובנה עליו את שומרון, בירת ממלכת ישראל. חז״ל אומרים שזכה למלכות כי הוסיף כרך לארץ ישראל.', 'Mount Shomron', 'Zimri reigned seven days and burned himself in the palace. The people were split between Tivni son of Ginat and Omri of the tribe of Efraim, and after four years Omri prevailed. He bought the hill of Shomron from Shemer for two talents of silver and built Shomron on it, the capital of the Kingdom of Israel. Chazal say he merited the kingship because he added a city to the Land of Israel.'),
  }),
  box({
    slug: 'maamad-har-hacarmel', y: 45.75, year: [3036, null], name: L('מעמד הר הכרמל', 'The Gathering at Mount Carmel'),
    summary: L('בשנת 3036 העמיד אליהו את נביאי הבעל מול כל העם בהר הכרמל, והאש ירדה מן השמים.', 'In the year 3036 Eliyahu set the prophets of Baal before all the people at Mount Carmel, and fire came down from heaven.'),
    rel: R('eliyahu-hanavi', 'achav', 'izevel', 'ovadyah-hanavi', 'elisha-hanavi'),
    sources: [L('מלכים א׳ יז – יט', 'I Kings 17–19')],
    sections: [
      sec('עד מתי אתם פוסחים', 'אחרי שלוש שנות בצורת אסף אליהו את כל ישראל ואת ארבע מאות וחמישים נביאי הבעל להר הכרמל, ואמר "עד מתי אתם פסחים על שתי הסעפים". נביאי הבעל קראו מן הבוקר עד הצהריים ולא נענו. אליהו בנה מזבח משתים עשרה אבנים, הציף אותו במים והתפלל, "ותפל אש ה׳".', 'How Long Will You Waver', 'After three years of drought Eliyahu gathered all Israel and the four hundred and fifty prophets of Baal to Mount Carmel, and said "How long will you waver between two opinions". The prophets of Baal called from morning until noon and were not answered. Eliyahu built an altar of twelve stones, flooded it with water and prayed, "and the fire of Hashem fell".'),
      sec('ה׳ הוא האלהים', 'כל העם נפלו על פניהם ואמרו "ה׳ הוא האלהים, ה׳ הוא האלהים", ונביאי הבעל נהרגו. אחר כך ירד גשם. איזבל איימה על אליהו, והוא ברח למדבר ועד חורב, ושם שמע את "קול דממה דקה" ונצטווה למשוח את אלישע תחתיו.', 'Hashem Is God', 'All the people fell on their faces and said "Hashem is God, Hashem is God", and the prophets of Baal were killed. Then rain came. Izevel threatened Eliyahu, and he fled to the desert and to Chorev, and there heard "a still small voice" and was commanded to anoint Elisha in his place.'),
    ],
  }),
  small({
    slug: 'mered-yehu', y: 47.95, year: [3055, null], name: L('מרד יהוא', 'Yehu’s Revolt'),
    summary: L('אלישע שלח למשוח את יהוא, שהרג את בית אחאב ואת אחזיהו מלך יהודה.', 'Elisha sent to anoint Yehu, who killed the house of Achav and Achazyahu king of Judah.'),
    rel: R('yehu', 'elisha-hanavi', 'yehoram-ben-achav', 'achazyahu', 'izevel'), sources: [L('מלכים ב׳ ח, כח – י', 'II Kings 8:28–10')],
    sections: one('כמנהג יהוא', 'חזאל מלך ארם הכה את יהורם מלך ישראל ואת אחזיהו מלך יהודה ברמות גלעד. אלישע שלח אחד מבני הנביאים למשוח את יהוא בן יהושפט בן נמשי, ויהוא "בשגעון ינהג" אל יזרעאל. הוא הרג את יהורם ואת אחזיהו, השליך את איזבל מן החלון, והכרית את כל בית אחאב ואת עובדי הבעל.', 'Driving Like Yehu', 'Chazael king of Aram struck Yehoram king of Israel and Achazyahu king of Judah at Ramot-Gilad. Elisha sent one of the sons of the prophets to anoint Yehu son of Yehoshafat son of Nimshi, and Yehu "drove furiously" to Yizre’el. He killed Yehoram and Achazyahu, had Izevel thrown from the window, and cut off all the house of Achav and the worshippers of Baal.'),
  }),
  small({
    slug: 'malchut-atalya', y: 49.1, year: [3055, 3061], name: L('מלכות עתליה', 'Atalyah’s Reign'),
    summary: L('עתליה מלכה על יהודה שש שנים והרגה את כל בית דוד, חוץ מיהואש שהוחבא.', 'Atalyah reigned over Judah six years and killed all the house of David, apart from Yehoash who was hidden.'),
    rel: R('atalyah', 'yehoash', 'yehoshavat', 'yehoyada-hakohen'), sources: [L('מלכים ב׳ יא, א – ג', 'II Kings 11:1–3')],
    sections: one('זרע הממלכה', 'כשמת אחזיהו בנה, קמה עתליה בת אחאב "ותאבד את כל זרע הממלכה". יהושבע אחות אחזיהו גנבה את יואש התינוק, ושש שנים היה מוסתר בבית ה׳ – לפי סדר עולם בעליית בית קודשי הקודשים – בעוד עתליה מולכת על הארץ.', 'The Royal Seed', 'When her son Achazyahu died, Atalyah daughter of Achav rose "and destroyed all the royal seed". Yehosheva, Achazyahu’s sister, stole away the infant Yoash, and for six years he was hidden in the House of Hashem – according to Seder Olam in the upper chamber of the Holy of Holies – while Atalyah reigned over the land.'),
  }),
  small({
    slug: 'hamlachat-yehoash', y: 50.2, year: [3061, null], name: L('המלכת יהואש', 'Yehoash Is Made King'),
    summary: L('בשנה השביעית לעתליה הוציא יהוידע את יהואש והמליך אותו, ועתליה נהרגה.', 'In Atalyah’s seventh year Yehoyada brought out Yehoash and made him king, and Atalyah was killed.'),
    rel: R('yehoyada-hakohen', 'yehoash', 'atalyah', 'yehoshavat'), sources: [L('מלכים ב׳ יא, ד – כ', 'II Kings 11:4–20')],
    sections: one('יחי המלך', 'יהוידע כרת ברית עם שרי המאות, הוציא את בן המלך, ונתן עליו את הנזר ואת העדות, "ויכו כף ויאמרו יחי המלך". עתליה קראה "קשר קשר" והומתה, וכל עם הארץ נתץ את בית הבעל.', 'Long Live the King', 'Yehoyada made a covenant with the officers of hundreds, brought out the king’s son, and put the crown and the testimony on him, "and they clapped their hands and said, Long live the king". Atalyah cried "Treason, treason" and was put to death, and all the people of the land tore down the house of Baal.'),
  }),
  small({
    slug: 'raash-uziyahu', y: 53.7, name: L('הרעש בימי עוזיהו', 'The Earthquake in Uziyahu’s Days'),
    summary: L('רעידת אדמה חזקה פגעה בארץ, כשעוזיהו נכנס להקטיר בהיכל ונצטרע.', 'A great earthquake struck the land when Uziyahu entered the Sanctuary to burn incense and was struck with tzara’at.'),
    rel: R('uziyahu', 'yotam', 'amos-hanavi', 'zecharyahu-hamevin'), sources: [L('עמוס א, א', 'Amos 1:1'), L('זכריה יד, ה', 'Zechariah 14:5'), L('דברי הימים ב׳ כו, טז – כא', 'II Chronicles 26:16–21')],
    sections: one('שנתים לפני הרעש', 'עמוס ניבא "שנתים לפני הרעש", וגם זכריה מזכיר את הנוס "מפני הרעש בימי עוזיה מלך יהודה". חז״ל קושרים את הרעש ליום שבו נכנס עוזיהו להיכל להקטיר קטורת, נגד דברי עזריהו הכהן, והצרעת זרחה במצחו. מאז ישב עוזיהו בבית החפשית, ויותם בנו שפט את העם.', 'Two Years Before the Earthquake', 'Amos prophesied "two years before the earthquake", and Zecharyah also mentions fleeing "from the earthquake in the days of Uziyah king of Judah". Chazal connect the earthquake to the day Uziyahu entered the Sanctuary to burn incense, against the words of Azaryahu the Kohen, and tzara’at broke out on his forehead. From then Uziyahu lived in a separate house, and his son Yotam judged the people.'),
  }),
  box({
    slug: 'churban-mamlechet-yisrael', y: 58.4, year: [3205, null], name: L('חורבן ממלכת ישראל', 'The Destruction of the Kingdom of Israel'),
    summary: L('בשנת 3205 כבשה אשור את שומרון והגלתה את עשרת השבטים.', 'In the year 3205 Assyria captured Shomron and exiled the ten tribes.'),
    rel: R('hoshea-ben-elah', 'shevet-reuven', 'shevet-gad', 'shevet-naftali', 'shevet-efraim', 'hoshea-ben-beeri'),
    sources: [L('מלכים ב׳ יז', 'II Kings 17'), L('סנהדרין קי ע״ב', 'Sanhedrin 110b'), L('סדר עולם רבה כב', 'Seder Olam Rabbah 22')],
    sections: [
      sec('ויגל את ישראל אשורה', 'בשנה התשיעית להושע בן אלה עלה שלמנאסר מלך אשור על שומרון, צר עליה שלוש שנים ולכד אותה, "ויגל את ישראל אשורה". עוד קודם לכן הגלה תגלת פלאסר את הגלעד, הגליל ונפתלי, ובני ראובן וגד וחצי שבט מנשה. מקום הארץ התיישבו עמים מארצות אחרות, הכותים.', 'He Exiled Israel to Assyria', 'In the ninth year of Hoshea son of Elah, Shalmaneser king of Assyria came up against Shomron, besieged it three years and captured it, "and exiled Israel to Assyria". Even before that Tiglat-Pileser had exiled Gilad, the Galilee and Naftali, and the sons of Reuven and Gad and half the tribe of Menashe. In their place peoples from other lands settled the country – the Kutim.'),
      sec('על אשר חטאו', 'ספר מלכים מסביר את החורבן "כי חטאו בני ישראל לה׳ אלהיהם", בעבודה זרה ובחטאות ירבעם. מאז נקראים "עשרת השבטים", ובגמרא נחלקו אם עתידים לחזור (סנהדרין קי ע״ב).', 'Because They Sinned', 'The Book of Kings explains the destruction: "because the children of Israel had sinned against Hashem their God", through idolatry and the sins of Yeravam. Since then they are called "the ten tribes", and the Gemara records a dispute whether they will return (Sanhedrin 110b).'),
    ],
  }),
  small({
    slug: 'mapalat-sancheriv', y: 59.2, year: [3213, null], name: L('מפלת סנחריב', 'The Downfall of Sancheriv'),
    summary: L('צבא סנחריב מלך אשור הוכה בידי מלאך ה׳ מחוץ לחומות ירושלים.', 'The army of Sancheriv king of Assyria was struck by the angel of Hashem outside the walls of Jerusalem.'),
    rel: R('chizkiyahu', 'yeshayahu-hanavi'), sources: [L('מלכים ב׳ יח – יט', 'II Kings 18–19'), L('ישעיהו לו – לז', 'Isaiah 36–37'), L('סנהדרין צד ע״ב', 'Sanhedrin 94b')],
    sections: one('ויצא מלאך ה׳', 'בשנה הארבע עשרה לחזקיהו עלה סנחריב על ערי יהודה ושלח את רבשקה לחרף את ירושלים. חזקיהו התפלל, וישעיהו ניבא "לא יבוא אל העיר הזאת". בלילה, ליל הפסח, "ויצא מלאך ה׳ ויך במחנה אשור מאה שמונים וחמשה אלף". סנחריב שב לנינוה, ובניו הרגו אותו בחרב.', 'The Angel of Hashem Went Out', 'In Chizkiyahu’s fourteenth year Sancheriv came up against the cities of Judah and sent Ravshakeh to taunt Jerusalem. Chizkiyahu prayed, and Yeshayahu prophesied "he shall not come into this city". That night, the night of Pesach, "the angel of Hashem went out and struck the camp of Assyria, a hundred and eighty-five thousand". Sancheriv returned to Nineveh, and his sons killed him with the sword.'),
  }),
  small({
    slug: 'metziat-sefer-hatorah', y: 61.6, year: [3303, null], name: L('מציאת ספר התורה ותשובת יאשיהו', 'The Finding of the Torah Scroll and Yoshiyahu’s Repentance'),
    summary: L('חלקיהו הכהן הגדול מצא את ספר התורה, ויאשיהו חזר בתשובה וביער את העבודה הזרה.', 'Chilkiyahu the High Priest found the Torah scroll, and Yoshiyahu repented and removed idolatry.'),
    rel: R('chilkiyahu-hakohen', 'yoshiyahu', 'shafan', 'chulda-haneviah', 'achikam', 'yirmeyahu-hanavi'), sources: [L('מלכים ב׳ כב – כג', 'II Kings 22–23'), L('דברי הימים ב׳ לד – לה', 'II Chronicles 34–35')],
    sections: one('ספר התורה מצאתי', 'בשנה השמונה עשרה ליאשיהו מצא חלקיהו הכהן הגדול ספר תורה בבית ה׳, ושפן הסופר קרא אותו לפני המלך. יאשיהו קרע את בגדיו ושלח לדרוש את ה׳ אצל חולדה הנביאה. הוא כרת ברית עם כל העם, ביער את העבודה הזרה מיהודה ומערי ממלכת ישראל שנכבשו, ועשה פסח "כי לא נעשה כפסח הזה מימי השפטים".', 'I Have Found the Torah Scroll', 'In Yoshiyahu’s eighteenth year Chilkiyahu the High Priest found a Torah scroll in the House of Hashem, and Shafan the scribe read it before the king. Yoshiyahu tore his garments and sent to inquire of Hashem through Chuldah the prophetess. He made a covenant with all the people, removed idolatry from Judah and from the cities of the Kingdom of Israel he took, and kept a Pesach "for no such Pesach had been kept since the days of the Judges".'),
  }),
  small({
    slug: 'mot-yoshiyahu', y: 62.6, year: [3316, null], name: L('מות יאשיהו במלחמה בפרעה נכה', 'Yoshiyahu Dies Fighting Pharaoh Necho'),
    summary: L('יאשיהו יצא להילחם בפרעה נכה ונהרג; אחריו מלכו יהואחז ויהויקים.', 'Yoshiyahu went out to fight Pharaoh Necho and was killed; after him reigned Yehoachaz and Yehoyakim.'),
    rel: R('yoshiyahu', 'yehoachaz', 'yehoyakim', 'yirmeyahu-hanavi'), sources: [L('מלכים ב׳ כג, כט – לו', 'II Kings 23:29–36'), L('דברי הימים ב׳ לה, כ – כה', 'II Chronicles 35:20–25'), L('תענית כב ע״ב', 'Taanit 22b')],
    sections: one('במגידו', 'פרעה נכה עלה להילחם בבבל, ויאשיהו יצא לקראתו כדי שלא יעבור בארץ ישראל, ונהרג במגידו. ירמיהו קונן עליו. חז״ל אומרים שיאשיהו סמך על הבטחת "וחרב לא תעבור בארצכם", ולא ידע שדורו לא היה ראוי לה. אחריו מלך יהואחז בנו שלושה חודשים, ואז יהויקים אחד עשרה שנה.', 'At Megiddo', 'Pharaoh Necho went up to fight Bavel, and Yoshiyahu went out against him so that he would not pass through the Land of Israel, and was killed at Megiddo. Yirmeyahu lamented him. Chazal say Yoshiyahu relied on the promise "and no sword shall pass through your land", not knowing his generation was not worthy of it. After him his son Yehoachaz reigned three months, and then Yehoyakim eleven years.'),
  }),
  small({
    slug: 'galut-yehoyachin', y: 64.0, year: [3327, null], name: L('גלות יהויכין', 'The Exile of Yehoyachin'),
    summary: L('בבל ירשה את מקומה של אשור, ונבוכדנצר הגלה את יהויכין עם חכמי ירושלים והמליך את צדקיהו.', 'Bavel took Assyria’s place, and Nevuchadnetzar exiled Yehoyachin with the sages of Jerusalem and made Tzidkiyahu king.'),
    rel: R('yehoyachin', 'tzidkiyahu', 'yechezkel-hanavi', 'mordechai-hayehudi', 'daniel'), sources: [L('מלכים ב׳ כד', 'II Kings 24'), L('גיטין פח ע״א', 'Gittin 88a')],
    sections: one('החרש והמסגר', 'הבבלים הביסו את אשור וירשו את כוחה. נבוכדנצר עלה על ירושלים, ויהויכין בן יהויקים יצא אליו והוגלה לבבל עם אמו, שריו "והחרש והמסגר אלף". חז״ל אומרים שהחרש והמסגר הם חכמי התורה, וש"גלות החרש והמסגר" קדמה לחורבן כדי שתורה תהיה בבבל. עם הגולים היו יחזקאל ומרדכי. נבוכדנצר המליך את צדקיהו, דודו של יהויכין.', 'The Craftsmen and the Smiths', 'The Babylonians defeated Assyria and took its power. Nevuchadnetzar came up against Jerusalem, and Yehoyachin son of Yehoyakim went out to him and was exiled to Bavel with his mother, his officials "and the craftsmen and the smiths, a thousand". Chazal say the craftsmen and smiths were the Torah scholars, and that this exile came before the destruction so that there would be Torah in Bavel. With the exiles were Yechezkel and Mordechai. Nevuchadnetzar made Tzidkiyahu, Yehoyachin’s uncle, king.'),
  }),
  box({
    slug: 'churban-bayit-rishon', y: 66.07, year: [3338, null], name: L('חורבן בית ראשון', 'The Destruction of the First Temple'),
    summary: L('בתשעה באב שנת 3338 החריב נבוכדנצר מלך בבל את ירושלים ואת בית המקדש, והגלה את העם לבבל.', 'On the 9th of Av 3338 Nevuchadnetzar king of Bavel destroyed Jerusalem and the Holy Temple, and exiled the people to Bavel.'),
    rel: [...R('tzidkiyahu', 'yirmeyahu-hanavi', 'seraya-ben-azaryah', 'gedalya', 'yechezkel-hanavi', 'baruch-ben-neriyah'), to('related', 'beit-hamikdash-harishon'), nm('related', 'נבוכדנצר', 'Nevuchadnetzar')],
    sources: [L('מלכים ב׳ כה', 'II Kings 25'), L('ירמיהו לט; נב', 'Jeremiah 39; 52'), L('מגילת איכה', 'Lamentations'), L('יומא ט ע״ב', 'Yoma 9b'), L('תענית כט ע״א', 'Taanit 29a')],
    sections: [
      sec('החורבן', 'בשנה התשיעית לצדקיהו החל המצור על ירושלים. בי״ז בתמוז נפרצה חומת העיר, ובתשעה באב שרף נבוזראדן רב טבחים את בית ה׳, את בית המלך ואת כל בתי ירושלים. צדקיהו נתפס ביריחו, בניו נשחטו לעיניו ועיניו עוורו. שריה הכהן הגדול נהרג ברבלה, והעם גלה לבבל. בית ראשון עמד ארבע מאות ועשר שנים.', 'The Destruction', 'In Tzidkiyahu’s ninth year the siege of Jerusalem began. On the 17th of Tammuz the city wall was breached, and on the 9th of Av Nevuzaradan the captain of the guard burned the House of Hashem, the king’s house and all the houses of Jerusalem. Tzidkiyahu was caught at Yericho, his sons were slaughtered before his eyes and his eyes put out. Seraya the High Priest was killed at Rivlah, and the people went into exile in Bavel. The First Temple stood four hundred and ten years.'),
      sec('על מה חרבה', 'הגמרא (יומא ט ע״ב) אומרת שבית ראשון חרב בגלל שלושה דברים: עבודה זרה, גילוי עריות ושפיכות דמים. ירמיהו, שהזהיר שנים רבות, קונן על החורבן במגילת איכה. אחרי החורבן מינו הבבלים את גדליה בן אחיקם על השארית, ורציחתו בתשרי הביאה לגלות האחרונה.', 'Why It Was Destroyed', 'The Gemara (Yoma 9b) says the First Temple was destroyed because of three things: idolatry, immorality and bloodshed. Yirmeyahu, who warned for many years, lamented the destruction in the Book of Eichah. After the destruction the Babylonians appointed Gedalyah son of Achikam over the remnant, and his murder in Tishrei brought the last exile.'),
    ],
  }),
  small({
    slug: 'evil-merodach', y: 66.95, year: [3364, null], name: L('אויל מרודך מוציא את יהויכין מבית הכלא', 'Evil-Merodach Releases Yehoyachin From Prison'),
    summary: L('אויל מרודך בן נבוכדנצר הוציא את יהויכין מבית האסורים וכיבד אותו מעל כל המלכים.', 'Evil-Merodach son of Nevuchadnetzar released Yehoyachin from prison and honoured him above all the kings.'),
    rel: R('yehoyachin', 'shaltiel', 'pedaya-rosh-hagola'), sources: [L('מלכים ב׳ כה, כז – ל', 'II Kings 25:27–30'), L('ירמיהו נב, לא – לד', 'Jeremiah 52:31–34')],
    sections: one('וישא את ראש יהויכין', 'בשנה השלושים ושבע לגלות יהויכין, כשמלך אויל מרודך בבבל, "נשא... את ראש יהויכין מלך יהודה מבית כלא", נתן את כיסאו "מעל כסא המלכים אשר אתו בבבל", והוא אכל לפניו תמיד. בניו שאלתיאל ופדיה היו ראשי הגולה הראשונים.', 'He Lifted Up the Head of Yehoyachin', 'In the thirty-seventh year of Yehoyachin’s exile, when Evil-Merodach became king in Bavel, "he lifted up the head of Yehoyachin king of Judah from prison", set his seat "above the seats of the kings who were with him in Bavel", and he ate before him always. His sons Shaltiel and Pedayah were the first Heads of the Exile.'),
  }),
  small({
    slug: 'hatzharat-koresh', y: 68.0, year: [3390, null], name: L('הצהרת כורש', 'The Declaration of Koresh'),
    summary: L('פרס הביסה את בבל, וכורש התיר ליהודים לשוב לירושלים ולבנות את בית המקדש.', 'Persia defeated Bavel, and Koresh allowed the Jews to return to Jerusalem and build the Temple.'),
    rel: R('zerubavel', 'yehoshua-ben-yehotzadak', 'daniel'), sources: [L('עזרא א', 'Ezra 1'), L('ישעיהו מה, א', 'Isaiah 45:1'), L('דניאל ה – ו', 'Daniel 5–6')],
    sections: one('מי בכם מכל עמו', 'בליל הסעודה של בלשאצר נכבשה בבל בידי מדי ופרס. בשנה הראשונה לכורש מלך פרס יצאה הכרזתו: "מי בכם מכל עמו... ויעל לירושלם... ויבן את בית ה׳". בראש העולים עמדו זרובבל בן שאלתיאל, הפחה, ויהושע בן יהוצדק הכהן הגדול.', 'Whoever Among You of His People', 'On the night of Belshatzar’s feast Bavel was captured by Media and Persia. In the first year of Koresh king of Persia his declaration went out: "Whoever among you is of His people... let him go up to Jerusalem... and build the House of Hashem". At the head of those returning were Zerubavel son of Shaltiel, the governor, and Yehoshua son of Yehotzadak the High Priest.'),
  }),
  small({
    slug: 'nes-purim', y: 68.3, year: [3404, 3405], name: L('נס פורים', 'The Miracle of Purim'),
    summary: L('בימי אחשורוש ביטלו מרדכי ואסתר את גזרת המן, אחרי הצהרת כורש ולפני בניין הבית השני.', 'In Achashverosh’s days Mordechai and Esther overturned Haman’s decree, after Koresh’s declaration and before the Second Temple was built.'),
    rel: [...R('mordechai-hayehudi', 'esther-hamalka'), nm('related', 'אחשורוש', 'Achashverosh')], sources: [L('מגילת אסתר', 'The Book of Esther'), L('מגילה יא ע״ב – יב ע״א', 'Megillah 11b–12a')],
    sections: one('ונהפוך הוא', 'אחשורוש, שעצר את בניין הבית, מלך מהודו ועד כוש. המן ביקש להשמיד את כל היהודים בי״ג באדר, ואסתר, בעצת מרדכי, באה אל המלך וביקשה על עמה. הגזירה התהפכה, "ליהודים היתה אורה ושמחה וששון ויקר", ונקבעו ימי הפורים. על האילן נכתב שהנס היה אחרי הכרזת כורש ולפני בניין הבית השני.', 'It Was Turned Around', 'Achashverosh, who halted the building of the House, reigned from India to Kush. Haman sought to destroy all the Jews on the 13th of Adar, and Esther, on Mordechai’s advice, came to the king and pleaded for her people. The decree was overturned, "the Jews had light and gladness, joy and honour", and the days of Purim were set. On our tree it is noted that the miracle was after Koresh’s declaration and before the building of the Second Temple.'),
  }),
  box({
    slug: 'shivat-tzion-binyan-bayit-sheni', y: 69.45, year: [3408, null], name: L('שיבת ציון ובניית בית שני', 'The Return to Zion and the Building of the Second Temple'),
    summary: L('בשנת 3408, שבעים שנה אחרי החורבן, נבנה הבית השני בירושלים.', 'In the year 3408, seventy years after the destruction, the Second Temple was built in Jerusalem.'),
    rel: [...R('zerubavel', 'yehoshua-ben-yehotzadak', 'chaggai-hanavi', 'zecharyah-hanavi'), to('related', 'beit-hamikdash-hasheni')],
    sources: [L('עזרא ג – ו', 'Ezra 3–6'), L('חגי א – ב', 'Haggai 1–2'), L('זכריה ד', 'Zechariah 4'), L('ירמיהו כט, י', 'Jeremiah 29:10')],
    sections: [
      sec('שבעים שנה', 'ירמיהו ניבא "כי לפי מלאת לבבל שבעים שנה אפקד אתכם". העולים בנו את המזבח והניחו את היסוד, אך הבנייה נעצרה בידי צרי יהודה ובנימין. בשנה השנית לדריוש עוררו חגי וזכריה את זרובבל ויהושע לחזור למלאכה, ובשנת 3408 – שבעים שנה מן החורבן – נשלם הבית.', 'Seventy Years', 'Yirmeyahu prophesied "When seventy years are fulfilled for Bavel I will remember you". Those who returned built the altar and laid the foundation, but the building was halted by the enemies of Judah and Binyamin. In the second year of Darius, Chaggai and Zecharyah roused Zerubavel and Yehoshua to return to the work, and in the year 3408 – seventy years from the destruction – the House was finished.'),
      sec('גדול יהיה כבוד הבית', 'הזקנים שראו את הבית הראשון בכו כשראו את יסוד השני, וחגי ניבא "גדול יהיה כבוד הבית הזה האחרון מן הראשון". חז״ל אומרים שבבית השני חסרו חמישה דברים – הארון, האש מן השמים, השכינה, רוח הקודש והאורים ותומים – ובכל זאת עמד ארבע מאות ועשרים שנה.', 'The Glory of This House Shall Be Greater', 'The elders who had seen the First House wept when they saw the foundation of the Second, and Chaggai prophesied "the glory of this latter House shall be greater than the former". Chazal say five things were missing from the Second House – the Ark, the fire from heaven, the Divine Presence, the holy spirit and the Urim and Tumim – and yet it stood four hundred and twenty years.'),
    ],
  }),
  small({
    slug: 'aliyat-ezra-unechemya', y: 70.3, year: [3413, 3426], name: L('עזרא ונחמיה עולים לירושלים', 'Ezra and Nechemyah Go Up to Jerusalem'),
    summary: L('עזרא עלה מבבל ללמד תורה, ונחמיה עלה לבנות את חומות ירושלים.', 'Ezra came up from Bavel to teach Torah, and Nechemyah came up to build the walls of Jerusalem.'),
    rel: R('ezra-hasofer', 'nechemya', 'elyashiv'), sources: [L('עזרא ז – י', 'Ezra 7–10'), L('נחמיה א – ח', 'Nehemiah 1–8')],
    sections: one('עלייה שנייה', 'עזרא עלה מבבל בימי ארתחשסתא עם קבוצת עולים, "כי עזרא הכין לבבו לדרוש את תורת ה׳ ולעשת וללמד בישראל חק ומשפט". שנים אחדות אחריו עלה נחמיה, בנה את חומות ירושלים בחמישים ושנים יום, ועם עזרא כינס את העם לקריאת התורה ולברית "האמנה".', 'The Second Ascent', 'Ezra came up from Bavel in the days of Artachshasta with a group of returnees, "for Ezra had set his heart to seek the Torah of Hashem, to do it and to teach statute and law in Israel". Some years after him Nechemyah came up, built the walls of Jerusalem in fifty-two days, and with Ezra gathered the people for the reading of the Torah and the covenant of "the firm agreement".'),
  }),
  small({
    slug: 'knesset-hagedola', y: 70.8, name: L('אנשי כנסת הגדולה', 'The Men of the Great Assembly'),
    summary: L('עזרא הקים את הכנסת הגדולה, שסידרה את התנ״ך ותיקנה תקנות.', 'Ezra established the Great Assembly, which arranged Tanach and enacted ordinances.'),
    rel: R('ezra-hasofer', 'nechemya', 'mordechai-hayehudi', 'daniel', 'chananya-chaver-daniel', 'mishael', 'azarya-chaver-daniel', 'chaggai-hanavi', 'zecharyah-hanavi', 'malachi-hanavi', 'shimon-hatzadik'),
    sources: [L('אבות א, א – ב', 'Avot 1:1–2'), L('בבא בתרא טו ע״א', 'Bava Batra 15a'), L('ברכות לג ע״א', 'Berachot 33a')],
    sections: one('הוו מתונים בדין', 'מאה ועשרים זקנים, ובהם נביאים, ישבו בכנסת הגדולה. הם "כתבו יחזקאל ושנים עשר, דניאל ומגילת אסתר" (בבא בתרא טו ע״א), תיקנו את ברכות התפילה, ואמרו שלושה דברים: "הוו מתונים בדין, והעמידו תלמידים הרבה, ועשו סייג לתורה". על האילן נמנים בין אנשיה עזרא, נחמיה, מרדכי היהודי, דניאל, חנניה, מישאל ועזריה, חגי, זכריה ומלאכי, ושמעון הצדיק היה "משירי כנסת הגדולה".', 'Be Deliberate in Judgment', 'A hundred and twenty elders, among them prophets, sat in the Great Assembly. They "wrote Yechezkel and the Twelve, Daniel and the Book of Esther" (Bava Batra 15a), established the blessings of prayer, and said three things: "Be deliberate in judgment, raise up many students, and make a fence for the Torah". Our tree counts among its members Ezra, Nechemyah, Mordechai, Daniel, Chananyah, Mishael and Azaryah, Chaggai, Zecharyah and Malachi, and Shimon HaTzadik was "of the last of the Great Assembly".'),
  }),
  small({
    slug: 'sof-hanevua', y: 71.9, name: L('סוף הנבואה', 'The End of Prophecy'),
    summary: L('עם מות חגי, זכריה ומלאכי נסתלקה רוח הקודש מישראל.', 'With the deaths of Chaggai, Zecharyah and Malachi the holy spirit departed from Israel.'),
    rel: R('chaggai-hanavi', 'zecharyah-hanavi', 'malachi-hanavi'), sources: [L('יומא ט ע״ב', 'Yoma 9b'), L('בבא בתרא יב ע״א', 'Bava Batra 12a')],
    sections: one('נסתלקה רוח הקודש', 'הגמרא אומרת: "משמתו נביאים האחרונים חגי זכריה ומלאכי, נסתלקה רוח הקודש מישראל, ועדיין היו משתמשין בבת קול" (יומא ט ע״ב). ועוד: "מיום שחרב בית המקדש ניטלה נבואה מן הנביאים וניתנה לחכמים" (בבא בתרא יב ע״א). מכאן ואילך עוברת שרשרת המסורה אל החכמים.', 'The Holy Spirit Departed', 'The Gemara says: "When the last prophets, Chaggai, Zecharyah and Malachi, died, the holy spirit departed from Israel, but they still used a heavenly voice" (Yoma 9b). And: "From the day the Temple was destroyed prophecy was taken from the prophets and given to the sages" (Bava Batra 12a). From here on the chain of tradition passes to the sages.'),
  }),
  small({
    slug: 'alexander-mokdon', y: 72.5, year: [3448, null], name: L('אלכסנדר מוקדון כובש את ארץ ישראל', 'Alexander the Great Conquers the Land of Israel'),
    summary: L('אלכסנדר כבש את האימפריה הפרסית, ובימי שמעון הצדיק הפיץ את התרבות היוונית.', 'Alexander conquered the Persian Empire, and in the days of Shimon HaTzadik spread Greek culture.'),
    rel: R('shimon-hatzadik'), sources: [L('יומא סט ע״א', 'Yoma 69a'), L('מגילת תענית', 'Megillat Taanit'), L('דניאל ח', 'Daniel 8')],
    sections: one('שמעון הצדיק ואלכסנדר', 'אלכסנדר מוקדון ניצח את מלכות פרס, וארץ ישראל עברה לשלטון יוון. הגמרא (יומא סט ע״א) מספרת ששמעון הצדיק יצא לקראתו לבוש בגדי כהונה, ואלכסנדר ירד ממרכבתו והשתחווה לפניו, ולא נתן לכותים להחריב את בית המקדש. בעקבותיו התפשטה התרבות היוונית-ההלניסטית.', 'Shimon HaTzadik and Alexander', 'Alexander of Macedon defeated the kingdom of Persia, and the Land of Israel passed to Greek rule. The Gemara (Yoma 69a) relates that Shimon HaTzadik went out to meet him dressed in the priestly garments, and Alexander got down from his chariot and bowed before him, and did not let the Kutim destroy the Temple. After him Greek-Hellenistic culture spread.'),
  }),
  small({
    slug: 'chalukat-haimperia', y: 73.1, name: L('חלוקת ממלכת אלכסנדר: התלמיים והסלאוקים', 'Alexander’s Empire Divided: the Ptolemies and the Seleucids'),
    summary: L('אחרי מות אלכסנדר נחלקה ממלכתו; ארץ ישראל נשלטה בידי התלמיים ממצרים ואחר כך בידי הסלאוקים מסוריה.', 'After Alexander’s death his empire was divided; the Land of Israel was ruled by the Ptolemies of Egypt and then by the Seleucids of Syria.'),
    rel: [], sources: [L('דניאל יא', 'Daniel 11')],
    sections: one('מלך הנגב ומלך הצפון', 'ממלכת אלכסנדר נחלקה בין מפקדיו. ארץ ישראל, שבין מצרים לסוריה, הייתה בתחילה בידי בית תלמי ממצרים, ואחר כך עברה לבית סלאוקוס בסוריה. המפרשים מוצאים בנבואת דניאל על "מלך הנגב" ו"מלך הצפון" את המלחמות בין שתי הממלכות.', 'The King of the South and the King of the North', 'Alexander’s empire was divided among his generals. The Land of Israel, between Egypt and Syria, was first in the hands of the house of Ptolemy of Egypt, and later passed to the house of Seleucus in Syria. The commentators find in Daniel’s prophecy of "the king of the south" and "the king of the north" the wars between the two kingdoms.'),
  }),
  small({
    slug: 'targum-hashivim', y: 73.8, name: L('תרגום השבעים', 'The Septuagint'),
    summary: L('התורה תורגמה ליוונית בהזמנת תלמי המלך.', 'The Torah was translated into Greek at the request of King Ptolemy.'),
    rel: R('yefet'), sources: [L('מגילה ט ע״א – ע״ב', 'Megillah 9a–b'), L('מסכת סופרים א, ז – ח', 'Tractate Soferim 1:7–8')],
    sections: one('שבעים ושנים זקנים', 'הגמרא (מגילה ט ע״א) מספרת שתלמי המלך כינס שבעים ושנים זקנים, הכניס כל אחד לחדר לבדו ואמר "כתבו לי תורת משה רבכם", "ונתן הקב״ה בלב כל אחד ואחד עצה, והסכימו כולן לדעת אחת". במסכת סופרים נאמר שהיום ההוא היה קשה לישראל כיום שנעשה בו העגל. ההיתר לתרגם ליוונית נלמד מ"יפת אלהים ליפת וישכן באהלי שם".', 'Seventy-Two Elders', 'The Gemara (Megillah 9a) relates that King Ptolemy gathered seventy-two elders, put each in a room alone and said "Write for me the Torah of Moshe your teacher", "and the Holy One put counsel in the heart of each, and they all agreed on one meaning". Tractate Soferim says that day was as hard for Israel as the day the calf was made. Permission to translate into Greek is learned from "May God enlarge Yefet, and may he dwell in the tents of Shem".'),
  }),
  small({
    slug: 'kat-hatzedukim', y: 74.6, name: L('צדוק וביתוס: כת הצדוקים והביתוסים', 'Tzadok and Baitos: the Sadducees and Boethusians'),
    summary: L('צדוק וביתוס, תלמידי אנטיגנוס איש סוכו, ייסדו כתות שכפרו בתורה שבעל פה.', 'Tzadok and Baitos, students of Antigonus of Socho, founded sects that denied the Oral Torah.'),
    rel: N(['אנטיגנוס איש סוכו', 'Antigonus of Socho'], ['צדוק (תלמיד אנטיגנוס)', 'Tzadok (student of Antigonus)'], ['ביתוס', 'Baitos']), sources: [L('אבות א, ג', 'Avot 1:3'), L('אבות דרבי נתן ה', 'Avot DeRabbi Natan 5')],
    sections: one('על מנת לקבל פרס', 'אנטיגנוס איש סוכו לימד "אל תהיו כעבדים המשמשין את הרב על מנת לקבל פרס". לפי אבות דרבי נתן, צדוק וביתוס תלמידיו הסיקו מכך שאין שכר ואין עולם הבא, ופרשו מן התורה. מהם יצאו הצדוקים והביתוסים, שכפרו בתורה שבעל פה, ונאבקו בפרושים כל ימי הבית השני.', 'For the Sake of a Reward', 'Antigonus of Socho taught "Do not be like servants who serve their master for the sake of a reward". According to Avot DeRabbi Natan, his students Tzadok and Baitos concluded from this that there is no reward and no World to Come, and broke away from the Torah. From them came the Sadducees and Boethusians, who denied the Oral Torah, and struggled with the Pharisees all the days of the Second Temple.'),
  }),
  small({
    slug: 'tkufat-hazugot', y: 75.5, name: L('תקופת הזוגות', 'The Period of the Pairs'),
    summary: L('מיוסי בן יועזר ויוסי בן יוחנן ועד הלל ושמאי עמדו בראש החכמים זוגות של נשיא ואב בית דין.', 'From Yose ben Yoezer and Yose ben Yochanan to Hillel and Shammai, pairs of a Nasi and an Av Beit Din led the sages.'),
    rel: [...N(['יוסי בן יועזר', 'Yose ben Yoezer'], ['יוסי בן יוחנן', 'Yose ben Yochanan']), to('related', 'hillel-hazaken')], sources: [L('אבות א, ד – יב', 'Avot 1:4–12'), L('חגיגה טז ע״א', 'Chagigah 16a')],
    sections: one('מחלוקת הסמיכה', 'בתקופה זו התחילה תקופת הזוגות: בכל דור עמדו בראש הסנהדרין נשיא ואב בית דין. הזוג הראשון, יוסי בן יועזר ויוסי בן יוחנן, נחלקו במחלוקת הראשונה – אם סומכים ידיים על הקרבן ביום טוב – ובמחלוקת זו נחלקו כל הזוגות עד הלל ושמאי (חגיגה טז ע״א).', 'The Dispute Over Semichah', 'In this time the period of the Pairs began: in every generation a Nasi and an Av Beit Din headed the Sanhedrin. The first pair, Yose ben Yoezer and Yose ben Yochanan, disagreed in the first dispute – whether one leans hands on an offering on a festival – and all the pairs disagreed over it until Hillel and Shammai (Chagigah 16a).'),
  }),
  small({
    slug: 'gzerot-antiochus', y: 76.3, year: [3621, null], name: L('גזירות אנטיוכוס', 'The Decrees of Antiochus'),
    summary: L('אנטיוכוס הרביעי גזר גזירות שמד, ומתתיהו ובניו פתחו במרד.', 'Antiochus IV issued decrees of persecution, and Matityahu and his sons began the revolt.'),
    rel: N(['מתתיהו', 'Matityahu'], ['יהודה המכבי', 'Yehudah the Maccabee']), sources: [L('ספר החשמונאים (מגילת אנטיוכוס)', 'Megillat Antiochus'), L('שבת כא ע״ב', 'Shabbat 21b')],
    sections: one('מי לה׳ אלי', 'המלך הסלאוקי אנטיוכוס הרביעי אסר על שמירת שבת, ברית מילה וקידוש החודש, וטימא את בית המקדש. מתתיהו בן יוחנן הכהן ממודיעין קרא "מי לה׳ אלי", ויצא עם בניו להרים. המרד הוביל לניצחון החשמונאים ולעצמאות יהודית.', 'Whoever Is for Hashem, Come to Me', 'The Seleucid king Antiochus IV forbade keeping Shabbat, circumcision and sanctifying the new month, and defiled the Temple. Matityahu son of Yochanan the Kohen of Modiin cried "Whoever is for Hashem, come to me", and went out to the hills with his sons. The revolt led to the Hasmonean victory and Jewish independence.'),
  }),
  box({
    slug: 'nes-chanuka', y: 77.95, year: [3622, null], name: L('מרד החשמונאים ונס חנוכה', 'The Hasmonean Revolt and the Miracle of Chanukah'),
    summary: L('בשנת 3622 טיהרו החשמונאים את בית המקדש, ונעשה נס פך השמן.', 'In the year 3622 the Hasmoneans purified the Temple, and the miracle of the cruse of oil took place.'),
    rel: [...N(['מתתיהו', 'Matityahu'], ['יהודה המכבי', 'Yehudah the Maccabee'], ['יונתן הוופסי', 'Yonatan Haphus'], ['שמעון התרסי', 'Shimon Thassi']), to('related', 'beit-hamikdash-hasheni')],
    sources: [L('שבת כא ע״ב', 'Shabbat 21b'), L('מגילת אנטיוכוס', 'Megillat Antiochus'), L('רמב״ם, הלכות חנוכה ג, א', 'Rambam, Laws of Chanukah 3:1')],
    sections: [
      sec('רבים ביד מעטים', 'יהודה המכבי ואחיו ניצחו את צבאות היוונים, "גבורים ביד חלשים ורבים ביד מעטים". בכ״ה בכסלו נכנסו למקדש, טיהרו אותו וחנכו מזבח חדש.', 'The Many in the Hands of the Few', 'Yehudah the Maccabee and his brothers defeated the Greek armies, "the mighty in the hands of the weak and the many in the hands of the few". On the 25th of Kislev they entered the Temple, purified it and dedicated a new altar.'),
      sec('פך השמן', 'הגמרא (שבת כא ע״ב) מספרת שמצאו רק פך אחד של שמן חתום בחותמו של כהן גדול, שהספיק ליום אחד, "ונעשה בו נס והדליקו ממנו שמונה ימים". לשנה אחרת קבעו את שמונת ימי החנוכה בהלל ובהודאה. מכאן החלה מלכות בית חשמונאי, שהייתה כהונה ומלכות יחד.', 'The Cruse of Oil', 'The Gemara (Shabbat 21b) relates that they found only one cruse of oil sealed with the seal of the High Priest, enough for one day, "and a miracle was done and they lit from it eight days". The next year they set the eight days of Chanukah for praise and thanksgiving. From here began the kingdom of the house of Chashmonai, which was priesthood and kingship together.'),
    ],
  }),
  small({
    slug: 'yanai-veshlomtzion', y: 80.6, year: [3670, 3697], name: L('ינאי המלך ושלומציון המלכה', 'King Yannai and Queen Shlomtzion'),
    summary: L('ינאי המלך צידד בצדוקים וגרם למלחמת אזרחים; אחריו מלכה שלומציון, והפרושים ניצחו.', 'King Yannai sided with the Sadducees and caused a civil war; after him Shlomtzion reigned, and the Pharisees prevailed.'),
    rel: N(['אלכסנדר ינאי', 'Alexander Yannai'], ['שלומציון המלכה', 'Queen Shlomtzion'], ['שמעון בן שטח', 'Shimon ben Shetach'], ['יוחנן הורקנוס ב׳', 'Yochanan Hyrcanus II']),
    sources: [L('קידושין סו ע״א', 'Kiddushin 66a'), L('ברכות מח ע״א', 'Berachot 48a'), L('תענית כג ע״א', 'Taanit 23a')],
    sections: one('ניצחון הפרושים', 'אלכסנדר ינאי, מלך וכהן גדול, צידד בצדוקים והרג רבים מחכמי ישראל, ומלחמת אזרחים פרצה. אחרי מותו מלכה אלמנתו שלומציון, אחות שמעון בן שטח הנשיא, ובנה הורקנוס כיהן ככהן גדול. בימיה החזירו שלומציון ושמעון בן שטח את התורה ליושנה, והפרושים ניצחו את הצדוקים. חז״ל מספרים שבימיה נעשו החיטים ככליות.', 'The Victory of the Pharisees', 'Alexander Yannai, king and High Priest, sided with the Sadducees and killed many of the sages of Israel, and civil war broke out. After his death his widow Shlomtzion reigned, the sister of Shimon ben Shetach the Nasi, and her son Hyrcanus served as High Priest. In her days Shlomtzion and Shimon ben Shetach restored the Torah, and the Pharisees prevailed over the Sadducees. Chazal relate that in her days the grains of wheat grew as large as kidneys.'),
  }),
  small({
    slug: 'pompeius', y: 82.2, year: [3698, null], name: L('מלחמת האחים ופומפיוס', 'The War of the Brothers and Pompey'),
    summary: L('הורקנוס ואריסטובולוס נלחמו על המלוכה, ופומפיוס הרומאי עלה על ירושלים וסיפח את הארץ לרומא.', 'Hyrcanus and Aristobulus fought over the throne, and the Roman Pompey came up against Jerusalem and annexed the land to Rome.'),
    rel: N(['יוחנן הורקנוס ב׳', 'Yochanan Hyrcanus II'], ['יהודה אריסטובולוס ב׳', 'Yehudah Aristobulus II']), sources: [L('סוטה מט ע״ב', 'Sotah 49b'), L('בבא קמא פב ע״ב', 'Bava Kamma 82b')],
    sections: one('כשצרו בית חשמונאי זה על זה', 'אחרי מות שלומציון נלחמו בניה הורקנוס ואריסטובולוס על המלוכה, ופנו שניהם אל פומפיוס, המצביא הרומאי, שיפסוק ביניהם. פומפיוס עלה על ירושלים, שם את הורקנוס כנשיא העם בלי כתר מלך, וסיפח את ארץ ישראל לרומא. הגמרא (סוטה מט ע״ב) מספרת על המצור שבימיהם ועל החזיר שהועלה על החומה.', 'When the Hasmoneans Besieged Each Other', 'After Shlomtzion’s death her sons Hyrcanus and Aristobulus fought over the throne, and both turned to Pompey, the Roman general, to decide between them. Pompey came up against Jerusalem, made Hyrcanus leader of the people without a royal crown, and annexed the Land of Israel to Rome. The Gemara (Sotah 49b) tells of the siege in their days and the pig raised onto the wall.'),
  }),
  small({
    slug: 'hordos-lokeach-hamalchut', y: 84.2, year: [3721, 3724], name: L('הורדוס לוקח את המלוכה מבית חשמונאי', 'Herod Takes the Kingdom From the Hasmoneans'),
    summary: L('הורדוס האדומי לקח את המלוכה מן החשמונאים בסיוע הרומאים, והרג את כל בית חשמונאי.', 'Herod the Edomite took the kingdom from the Hasmoneans with Roman help, and killed all the house of Chashmonai.'),
    rel: N(['הורדוס', 'Herod'], ['מתתיהו אנטיגונוס ב׳', 'Matityahu Antigonus II'], ['מרים החשמונאית', 'Mariamne the Hasmonean']), sources: [L('בבא בתרא ג ע״ב', 'Bava Batra 3b')],
    sections: one('עבד בית חשמונאי', 'הגמרא (בבא בתרא ג ע״ב) מספרת שהורדוס היה עבד בבית חשמונאי, ונתן עיניו בנערה מבנות הבית. הוא מרד באדוניו והרג את כל בית חשמונאי, ונשאר רק הנערה, שהשליכה את עצמה מן הגג. "כל מאן דאמר מבית חשמונאי קאתינא – עבדא הוא".', 'A Servant of the House of Chashmonai', 'The Gemara (Bava Batra 3b) relates that Herod was a servant in the house of Chashmonai, and set his eyes on a girl of the house. He rebelled against his masters and killed all the house of Chashmonai, leaving only the girl, who threw herself from the roof. "Whoever says, I come from the house of Chashmonai – is a slave".'),
  }),
  box({
    slug: 'hordos-veharomaim', y: 85.4, year: [3724, null], name: L('הורדוס והרומאים', 'Herod and the Romans'),
    summary: L('משנת 3724 מלך הורדוס בחסות רומא; הוא הרג את החכמים, ובנה מחדש את בית המקדש.', 'From the year 3724 Herod reigned under Roman protection; he killed the sages, and rebuilt the Temple.'),
    rel: [...N(['הורדוס', 'Herod'], ['בבא בן בוטא', 'Bava ben Buta'], ['הלל הזקן', 'Hillel HaZaken'], ['שמאי הזקן', 'Shammai HaZaken']), to('related', 'beit-hamikdash-hasheni')],
    sources: [L('בבא בתרא ג ע״ב – ד ע״א', 'Bava Batra 3b–4a'), L('סוכה נא ע״ב', 'Sukkah 51b')],
    sections: [
      sec('בבא בן בוטא', 'הורדוס הרג את כל חכמי ישראל, והשאיר רק את בבא בן בוטא, שאת עיניו עיוור. הוא בא אליו בתחפושת וניסה לגרום לו לקלל את המלך, ובבא בן בוטא לא קילל. כשהורדוס שאל איך יתקן את מה שעשה, השיב לו: "הוא כבה אורו של עולם... ילך ויעסוק באורו של עולם" – בבית המקדש.', 'Bava ben Buta', 'Herod killed all the sages of Israel, leaving only Bava ben Buta, whose eyes he put out. He came to him in disguise and tried to make him curse the king, and Bava ben Buta would not curse. When Herod asked how he could repair what he had done, he answered: "He put out the light of the world... let him go and engage with the light of the world" – the Holy Temple.'),
      sec('בניין הורדוס', 'הורדוס בנה מחדש את בית המקדש בפאר רב, ואמרו חז״ל: "מי שלא ראה בניין הורדוס לא ראה בניין נאה מימיו" (בבא בתרא ד ע״א). בימיו עמדו בראש החכמים הלל ושמאי.', 'Herod’s Building', 'Herod rebuilt the Temple with great splendour, and Chazal said: "Whoever has not seen Herod’s building has never seen a beautiful building" (Bava Batra 4a). In his days Hillel and Shammai headed the sages.'),
    ],
  }),
  small({
    slug: 'chalukat-malchut-hordos', y: 86.6, year: [3761, null], name: L('חלוקת ממלכת הורדוס ושלטון הנציבים', 'Herod’s Kingdom Divided and the Rule of the Governors'),
    summary: L('אחרי מות הורדוס נחלקה ממלכתו בין בניו ואחותו; ארכלאוס גלה, והחל שלטון נציבים רומאים.', 'After Herod’s death his kingdom was divided among his sons and his sister; Archelaus was exiled, and the rule of Roman governors began.'),
    rel: N(['ארכלאוס', 'Archelaus'], ['הורדוס אנטיפס', 'Herod Antipas'], ['פיליפוס', 'Philip'], ['שלומית', 'Salome']), sources: [L('יוסף בן מתתיהו, קדמוניות היהודים יז', 'Josephus, Antiquities 17')],
    sections: one('ארכלאוס והנציבים', 'אחרי מות הורדוס חולקה ממלכתו לארבעה: יהודה לארכלאוס, הגליל לאנטיפס, עבר הירדן הצפוני לפיליפוס, ונחלה קטנה לשלומית אחותו. ארכלאוס הוגלה בידי הרומאים, ויהודה עברה לשלטון ישיר של נציבים רומאים.', 'Archelaus and the Governors', 'After Herod’s death his kingdom was divided into four: Judea to Archelaus, the Galilee to Antipas, the northern land beyond the Jordan to Philip, and a small estate to his sister Salome. Archelaus was exiled by the Romans, and Judea passed to the direct rule of Roman governors.'),
  }),
  small({
    slug: 'agripas', y: 87.3, name: L('אגריפס המלך', 'King Agrippa'),
    summary: L('אגריפס הראשון, נכד הורדוס, מלך תקופה קצרה על יהודה; אחריו חזר שלטון הנציבים, ואגריפס השני מלך בגליל.', 'Agrippa I, Herod’s grandson, reigned briefly over Judea; after him the governors returned, and Agrippa II reigned in the Galilee.'),
    rel: N(['אגריפס א׳', 'Agrippa I'], ['אגריפס ב׳', 'Agrippa II']), sources: [L('סוטה מא ע״א – ע״ב', 'Sotah 41a–b'), L('משנה סוטה ז, ח', 'Mishnah Sotah 7:8')],
    sections: one('אחינו אתה', 'אגריפס הראשון החזיר שלום לממלכה. המשנה מספרת שבהקהל קרא בתורה, וכשהגיע ל"לא תוכל לתת עליך איש נכרי" זלגו עיניו דמעות, כי היה מבית הורדוס, וקראו לו העם "אחינו אתה, אחינו אתה". אחרי מותו חזרה יהודה לשלטון הנציבים, ובנו אגריפס השני קיבל תואר מלך בגליל.', 'You Are Our Brother', 'Agrippa I brought peace back to the kingdom. The Mishnah relates that at Hakhel he read the Torah, and when he reached "you may not set a foreigner over you" his eyes ran with tears, for he was of the house of Herod, and the people called to him "You are our brother, you are our brother". After his death Judea returned to the rule of the governors, and his son Agrippa II received the title of king in the Galilee.'),
  }),
  small({
    slug: 'harigat-rashbag', y: 88.05, name: L('הריגת רבן שמעון בן גמליאל ורבי ישמעאל כהן גדול', 'The Killing of Rabban Shimon ben Gamliel and Rabbi Yishmael the High Priest'),
    summary: L('רבן שמעון בן גמליאל הנשיא ורבי ישמעאל כהן גדול נהרגו בידי הרומאים, הראשונים מעשרת הרוגי מלכות.', 'Rabban Shimon ben Gamliel the Nasi and Rabbi Yishmael the High Priest were killed by the Romans, the first of the Ten Martyrs.'),
    rel: N(['רבן שמעון בן גמליאל (הנהרג)', 'Rabban Shimon ben Gamliel (the martyr)'], ['רבי ישמעאל כהן גדול', 'Rabbi Yishmael the High Priest']), sources: [L('אבל רבתי (שמחות) ח', 'Avel Rabbati (Semachot) 8'), L('מדרש אלה אזכרה', 'Midrash Eleh Ezkerah')],
    sections: one('עשרת הרוגי מלכות', 'בתקופת החורבן נהרגו רבן שמעון בן גמליאל, נשיא ישראל, ורבי ישמעאל כהן גדול. כל אחד ביקש להיהרג ראשון כדי שלא יראה במות חברו. הם נמנים ראשונים בין עשרת הרוגי מלכות, שעליהם אומרים את קינת "אלה אזכרה" ביום הכיפורים.', 'The Ten Martyrs', 'In the time of the destruction Rabban Shimon ben Gamliel, the Nasi of Israel, and Rabbi Yishmael the High Priest were killed. Each asked to be killed first so as not to see his friend’s death. They are counted first among the Ten Martyrs, for whom the lament "Eleh Ezkerah" is said on Yom Kippur.'),
  }),
  box({
    slug: 'churban-bayit-sheni', y: 89.7, year: [3828, null], name: L('המרד הגדול וחורבן בית שני', 'The Great Revolt and the Destruction of the Second Temple'),
    summary: L('בתשעה באב שנת 3828, אחרי מרד של ארבע שנים, החריב טיטוס את ירושלים ואת בית המקדש השני.', 'On the 9th of Av 3828, after a four-year revolt, Titus destroyed Jerusalem and the Second Temple.'),
    rel: [...N(['רבן יוחנן בן זכאי', 'Rabban Yochanan ben Zakkai'], ['רבן גמליאל דיבנה', 'Rabban Gamliel of Yavneh'], ['רבי צדוק', 'Rabbi Tzadok']), to('related', 'beit-hamikdash-hasheni')],
    sources: [L('גיטין נה ע״ב – נז ע״ב', 'Gittin 55b–57b'), L('יומא ט ע״ב', 'Yoma 9b'), L('אבות דרבי נתן ד', 'Avot DeRabbi Natan 4')],
    sections: [
      sec('קמצא ובר קמצא', 'ארבע שנים נמשך המרד ברומא. הגמרא (גיטין נה ע״ב) מספרת ש"אקמצא ובר קמצא חרוב ירושלים", ושהקנאים שרפו את מחסני המזון כדי לאלץ את העם להילחם. בתשעה באב נשרף בית המקדש, וטיטוס לקח את כלי המקדש לרומא. הגמרא אומרת שבית שני, שהיו בו תורה ומצוות, חרב בגלל שנאת חינם (יומא ט ע״ב).', 'Kamtza and Bar Kamtza', 'The revolt against Rome lasted four years. The Gemara (Gittin 55b) relates that "because of Kamtza and Bar Kamtza Jerusalem was destroyed", and that the zealots burned the food stores to force the people to fight. On the 9th of Av the Temple was burned, and Titus took the Temple vessels to Rome. The Gemara says the Second Temple, in which there was Torah and mitzvot, was destroyed because of baseless hatred (Yoma 9b).'),
      sec('תן לי יבנה וחכמיה', 'רבן יוחנן בן זכאי יצא מירושלים בארון, נפגש עם אספסיאנוס וביקש: "תן לי יבנה וחכמיה, ושושילתא דרבן גמליאל, ואסוותא דמסיין ליה לרבי צדוק". הסנהדרין והחכמים גלו ליבנה, ומשם המשיכה התורה אחרי החורבן.', 'Give Me Yavneh and Its Sages', 'Rabban Yochanan ben Zakkai left Jerusalem in a coffin, met Vespasian and asked: "Give me Yavneh and its sages, and the dynasty of Rabban Gamliel, and physicians to heal Rabbi Tzadok". The Sanhedrin and the sages went to Yavneh, and from there Torah continued after the destruction.'),
    ],
  }),
  small({
    slug: 'nefilat-metzada', y: 90.3, year: [3833, null], name: L('נפילת מצדה', 'The Fall of Masada'),
    summary: L('המבצר האחרון של המורדים נפל בידי הרומאים כמה שנים אחרי החורבן.', 'The last fortress of the rebels fell to the Romans a few years after the destruction.'),
    rel: [], sources: [L('יוסף בן מתתיהו, מלחמות היהודים ז', 'Josephus, The Jewish War 7')],
    sections: one('מצדה', 'מצדה, המבצר שבנה הורדוס על צוק במדבר יהודה, הייתה המעוז האחרון של המורדים. כשהרומאים בנו סוללה ופרצו אליה, מצאו את מגיניה מתים. בכך הסתיים המרד הגדול.', 'Masada', 'Masada, the fortress Herod built on a cliff in the Judean desert, was the last stronghold of the rebels. When the Romans built a ramp and broke in, they found its defenders dead. With this the Great Revolt ended.'),
  }),
  box({
    slug: 'mered-hatfutzot', y: 91.9, year: [3877, null], name: L('מרד התפוצות', 'The Diaspora Revolt'),
    summary: L('בשנת 3877 מרדו יהודי התפוצות – בעיקר בלוב, במצרים ובבבל – בשלטון רומא, והמרד דוכא.', 'In the year 3877 the Jews of the Diaspora – mainly in Libya, Egypt and Bavel – rebelled against Rome, and the revolt was crushed.'),
    rel: N(['רבי יהושע בן חנניה', 'Rabbi Yehoshua ben Chananyah']), sources: [L('סוכה נא ע״ב', 'Sukkah 51b'), L('ירושלמי סוכה ה, א', 'Yerushalmi Sukkah 5:1')],
    sections: [
      sec('מרד התפוצות', 'כחמישים שנה אחרי החורבן מרדו היהודים בתפוצות – בלוב (קירנאיקה), במצרים, בקפריסין ובבבל – בשלטון הרומאי. שנתיים נמשך המרד, עד שהרומאים דיכאו אותו בכוח רב.', 'The Diaspora Revolt', 'About fifty years after the destruction the Jews of the Diaspora – in Libya (Cyrenaica), Egypt, Cyprus and Bavel – rebelled against Roman rule. The revolt lasted two years, until the Romans crushed it with great force.'),
      sec('הדיופלוסטון', 'חז״ל מתארים את גדולתה של קהילת אלכסנדריה ואת בית הכנסת הגדול שלה, ה"דיופלוסטון", "מי שלא ראה דיופלוסטון של אלכסנדריא לא ראה בכבודן של ישראל". הגמרא (סוכה נא ע״ב) מספרת שקהילה זו נהרגה בידי "טרגיינוס" – הוא טריאנוס, הקיסר שבימיו היה מרד התפוצות.', 'The Great Synagogue', 'Chazal describe the greatness of the community of Alexandria and its great synagogue, the "Diplostion": "whoever has not seen the Diplostion of Alexandria has not seen the glory of Israel". The Gemara (Sukkah 51b) relates that this community was killed by "Traginus" – Trajan, the emperor in whose days was the Diaspora Revolt.'),
    ],
  }),
  box({
    slug: 'mered-bar-kochva', y: 94.2, year: [3880, 3893], name: L('מרד בר כוכבא', 'The Bar Kochva Revolt'),
    summary: L('היהודים בארץ ישראל בראשות שמעון בן כוסבא מרדו ברומא; המרד הסתיים בנפילת ביתר.', 'The Jews of the Land of Israel led by Shimon ben Kosiba rebelled against Rome; the revolt ended with the fall of Beitar.'),
    rel: [...N(['שמעון בן כוזיבא', 'Shimon ben Koziva'], ['רבי אלעזר המודעי', 'Rabbi Elazar HaModai']), to('related', 'rabbi-akiva')],
    sources: [L('גיטין נז ע״א', 'Gittin 57a'), L('ירושלמי תענית ד, ה', 'Yerushalmi Taanit 4:5'), L('איכה רבה ב, ד', 'Eichah Rabbah 2:4'), L('רמב״ם, הלכות מלכים יא, ג', 'Rambam, Laws of Kings 11:3')],
    sections: [
      sec('דרך כוכב מיעקב', 'שמעון בן כוסבא עמד בראש מרד גדול ברומא, ושלוש שנים וחצי החזיק בחלק מן הארץ. רבי עקיבא אמר עליו "דרך כוכב מיעקב" – "זה מלכא משיחא", ומכאן כינויו בר כוכבא. הרמב״ם כותב שרבי עקיבא וכל חכמי דורו חשבו שהוא המלך המשיח, עד שנהרג.', 'A Star Shall Go Forth From Yaakov', 'Shimon ben Kosiba led a great revolt against Rome, and for three and a half years held part of the land. Rabbi Akiva said of him "A star shall go forth from Yaakov" – "this is the King Messiah", and from this came his name Bar Kochva. The Rambam writes that Rabbi Akiva and all the sages of his generation thought he was the King Messiah, until he was killed.'),
      sec('חורבן ביתר', 'המרד נגמר בתשעה באב בנפילת ביתר. בר כוכבא הרג את רבי אלעזר המודעי, דודו, בחשד שבגד, ונהרג. במהלך המרד ואחריו נהרגו שאר עשרת הרוגי מלכות, ובהם רבי עקיבא. ירושלים נחרשה, ונבנתה במקומה עיר רומאית, איליה קפיטולינה.', 'The Destruction of Beitar', 'The revolt ended on the 9th of Av with the fall of Beitar. Bar Kochva killed Rabbi Elazar HaModai, his uncle, on suspicion of treason, and was himself killed. During the revolt and after it the rest of the Ten Martyrs were killed, among them Rabbi Akiva. Jerusalem was ploughed, and a Roman city, Aelia Capitolina, was built in its place.'),
    ],
  }),
  small({
    slug: 'sefer-hazohar', y: 95.6, name: L('ספר הזהר', 'The Book of the Zohar'),
    summary: L('ספר הזוהר נכתב מפי רבי שמעון בר יוחאי.', 'The Book of the Zohar was written from the mouth of Rabbi Shimon bar Yochai.'),
    rel: N(['רבי שמעון בר יוחאי', 'Rabbi Shimon bar Yochai'], ['רבי אלעזר ברבי שמעון', 'Rabbi Elazar son of Rabbi Shimon']), sources: [L('שבת לג ע״ב', 'Shabbat 33b'), L('ספר הזהר', 'The Zohar')],
    sections: one('במערה', 'רבי שמעון בר יוחאי ורבי אלעזר בנו הסתתרו מפני הרומאים במערה שתים עשרה שנה, ולמדו תורה (שבת לג ע״ב). לפי המסורת, את תורת הסוד שלימד רשב״י כתבו תלמידיו בספר הזוהר, שנגלה לעולם בדורות מאוחרים.', 'In the Cave', 'Rabbi Shimon bar Yochai and his son Rabbi Elazar hid from the Romans in a cave for twelve years, and studied Torah (Shabbat 33b). According to tradition, the hidden teaching Rashbi taught was written by his students in the Book of the Zohar, which was revealed to the world in later generations.'),
  }),
  box({
    slug: 'sidur-hamishna', y: 96.85, year: [3978, null], name: L('סידור המשנה', 'The Arrangement of the Mishnah'),
    summary: L('בשנת 3978 סידר רבי יהודה הנשיא את התורה שבעל פה בששה סדרי המשנה, ובכך הסתיימה תקופת התנאים.', 'In the year 3978 Rabbi Yehudah HaNasi arranged the Oral Torah in the six orders of the Mishnah, and so the period of the Tannaim ended.'),
    rel: [...N(['רבי יהודה הנשיא', 'Rabbi Yehudah HaNasi']), to('related', 'rav-abba-arikha')],
    sources: [L('רמב״ם, הקדמה למשנה תורה', 'Rambam, Introduction to Mishneh Torah'), L('איגרת רב שרירא גאון', 'The Epistle of Rav Sherira Gaon'), L('גיטין ס ע״א', 'Gittin 60a')],
    sections: [
      sec('עת לעשות לה׳', 'רבי יהודה הנשיא ראה שהתלמידים מתמעטים והצרות מתגברות, וחשש שהתורה שבעל פה תשתכח. הוא כינס את דברי החכמים מימי הזוגות ועד זמנו, וסידר אותם בששה סדרים – זרעים, מועד, נשים, נזיקין, קדשים וטהרות. חז״ל למדו מ"עת לעשות לה׳ הפרו תורתך" שמותר היה לכתוב.', 'A Time to Act for Hashem', 'Rabbi Yehudah HaNasi saw that students were dwindling and troubles growing, and feared the Oral Torah would be forgotten. He gathered the words of the sages from the days of the Pairs to his own time, and arranged them in six orders – Zeraim, Moed, Nashim, Nezikin, Kodashim and Taharot. Chazal learned from "It is a time to act for Hashem, they have voided Your Torah" that it was permitted to write it.'),
      sec('סוף תקופת התנאים', 'עם סידור המשנה ופטירת רבי הסתיימה תקופת התנאים, והחלה תקופת האמוראים, שפירשו את המשנה בארץ ישראל ובבבל – ומכאן נמשך האילן השני שלנו.', 'The End of the Tannaim', 'With the arrangement of the Mishnah and Rebbi’s passing the period of the Tannaim ended, and the period of the Amoraim began, who explained the Mishnah in the Land of Israel and in Bavel – and from here our second tree continues.'),
    ],
  }),
];
