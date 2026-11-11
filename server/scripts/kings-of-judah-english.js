// English for the Kings of the House of David: roles, notes under the reign
// years, family names, sources and the article. The Hebrew is not changed.
// Run AFTER kings-of-judah-details.js. Safe to run more than once.
//
// Run from the server folder:  node scripts/kings-of-judah-english.js
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const Person = require('../models/Person');

const p = (title, text) => `<h2>${title}</h2><p>${text}</p>`;

// Hebrew name -> English, for family members who don't have a page.
const NAMES = {
  'ישי': 'Yishai (Jesse)',
  'נצבת בת עדאל': 'Nitzevet daughter of Adael',
  'אליאב': 'Eliav',
  'אבינדב': 'Avinadav',
  'שמעא': 'Shimma',
  'נתנאל': 'Netanel',
  'רדי': 'Raddai',
  'אוצם': 'Otzem',
  'צרויה': 'Tzeruyah',
  'אביגיל': 'Avigayil (Abigail)',
  'מיכל בת שאול': 'Michal daughter of Shaul',
  'בת שבע': 'Bat-Sheva (Bathsheba)',
  'אמנון': 'Amnon',
  'אבשלום': 'Avshalom (Absalom)',
  'אדוניהו': 'Adoniyahu (Adonijah)',
  'תמר': 'Tamar',
  'שמואל הנביא': 'Shmuel the Prophet (Samuel)',
  'אחיתופל': 'Achitofel (Ahithophel)',
  'נעמה העמונית': 'Naamah the Ammonite',
  'בת פרעה': "Pharaoh's daughter",
  'שמעי בן גרא': 'Shimi son of Gera',
  'מעכה בת אבישלום': 'Maachah daughter of Avishalom',
  'מחלת': 'Machalat',
  'עזובה בת שלחי': 'Azuvah daughter of Shilchi',
  'עזריה': 'Azaryah',
  'יחיאל': 'Yechiel',
  'זכריהו': 'Zecharyahu',
  'עזריהו': 'Azaryahu',
  'מיכאל': 'Michael',
  'שפטיהו': 'Shefatyahu',
  'יהושבע': 'Yehoshava (Jehosheba)',
  'אחאב': 'Achav (Ahab)',
  'צביה מבאר שבע': "Tzivyah of Be'er Sheva",
  'יהוידע הכהן': 'Yehoyada the Kohen (Jehoiada)',
  'יהועדן מירושלים': 'Yehoaddan of Jerusalem',
  'אמוץ': 'Amotz (Amoz)',
  'יכליה מירושלים': 'Yecholyah of Jerusalem',
  'זכריהו המבין במראות האלוהים': 'Zecharyahu, who understood the visions of God',
  'ירושה בת צדוק': 'Yerushah daughter of Tzadok',
  'אביה בת זכריה': 'Aviyah daughter of Zecharyah',
  'חפצי-בה': 'Chefzi-Bah (Hephzibah)',
  'משלמת בת חרוץ מן יטבה': 'Meshullemet daughter of Charutz of Yotvah',
  'ידידה בת עדיה מבצקת': 'Yedidah daughter of Adayah of Botzkat',
  'חמוטל בת ירמיהו מלבנה': 'Chamutal daughter of Yirmeyahu of Livnah',
  'זבידה בת פדיה מן רומה': 'Zevidah daughter of Pedayah of Rumah',
  'נחושתא בת אלנתן מירושלים': 'Nechushta daughter of Elnatan of Jerusalem',
  'שאלתיאל': 'Shealtiel',
  'פדיה': 'Pedayah',
};

const KINGS = {
  david: {
    roles: ['King of Israel', 'Prophet', 'Sweet Singer of Israel'],
    note: '7 years in Hebron, 33 in Jerusalem',
    sources: ['I Samuel 16 – II Samuel 24', 'I Kings 1–2', 'I Chronicles 11–29', 'Ruth 4:17–22', 'Psalms', 'Bava Batra 14b; 91a', 'Zevachim 54b', 'Avot 6:3'],
    content:
      p('Childhood and Anointing', 'David, the youngest son of Yishai of Beit Lechem in the territory of Judah, tended his father’s sheep as a boy. Shmuel the Prophet was sent to the house of Yishai and anointed him king while he was still a youth, at a time when Shaul still reigned over Israel. David went out alone against Golyat the Philistine and struck him down with a stone from his sling, and from then on his name was known throughout Israel.') +
      p('In Shaul’s Court and in Flight', 'David was brought to Shaul’s court to play the harp, became an officer in the army and married Michal, Shaul’s daughter. His successes stirred the king’s jealousy, and David was forced to flee. He stayed with Shmuel in Nayot in Ramah, and according to Chazal they studied together the place of the Holy Temple (Zevachim 54b). In this period the famous bond of friendship between David and Yehonatan son of Shaul was formed.') +
      p('His Reign', 'After Shaul’s death David reigned for seven years in Hebron over the tribe of Judah, and then thirty-three years in Jerusalem over all Israel. He captured Jerusalem from the Jebusites and made it his capital, brought the Ark of Hashem up to it with great joy, and prepared everything needed to build the Holy Temple, which was built by his son Shlomo. Natan the Prophet told him that the kingdom of the House of David would stand forever.') +
      p('Sweet Singer of Israel', 'Chazal teach that David wrote the Book of Psalms with the help of ten elders (Bava Batra 14b): songs of praise, prayer and supplication that accompany the Jewish people to this day. From the House of David came the dynasty of the kings of Judah, and from him, according to tradition, the Mashiach will come.'),
  },

  shlomo: {
    roles: ['King of Israel', 'Builder of the Holy Temple', 'Wisest of All Men'],
    sources: ['I Kings 1–11', 'II Chronicles 1–9', 'II Samuel 12:24–25', 'Berachot 8a', 'Bava Batra 15a'],
    content:
      p('Rise to the Throne', 'Shlomo, the son of David and Bat-Sheva, was anointed king during his father’s lifetime at David’s command, with the blessing of Natan the Prophet and Tzadok the Kohen, and came to the throne at a very young age. Natan the Prophet also called him Yedidyah. Chazal relate that Shimi son of Gera was his teacher (Berachot 8a).') +
      p('The Wisest of All Men', 'At Givon Hashem appeared to him in a dream, and Shlomo asked for an understanding heart to judge the people. Hashem gave him wisdom like no other, together with wealth and honor. The judgment of the two women who came before him with one baby became a symbol of his wisdom. Chazal attribute to him the books of Proverbs, Song of Songs and Ecclesiastes.') +
      p('Building the Holy Temple', 'In the four hundred and eightieth year after the Exodus from Egypt, Shlomo began building the Holy Temple in Jerusalem. At its dedication fire came down from heaven and the Divine Presence rested in the House. The days of his reign were days of peace and prosperity, "every man under his vine and under his fig tree".') +
      p('His Later Years', 'In his old age his foreign wives turned his heart, and he was told that the kingdom would be torn from his son, except for one tribe that would remain with the House of David. After his death the kingdom was divided into the Kingdom of Judah and the Kingdom of Israel.'),
  },

  rechavam: {
    roles: ['King of Judah'],
    sources: ['I Kings 12; 14:21–31', 'II Chronicles 10–12'],
    content:
      p('The Division of the Kingdom', 'Rehavam son of Shlomo became king at the age of forty-one. The people gathered in Shechem and asked him to lighten the heavy burden that Shlomo had placed on them. Rehavam rejected the advice of the elders and followed the advice of the young men who had grown up with him, answering the people harshly. The ten tribes rebelled and made Yeravam son of Nevat their king, and Rehavam remained king over Judah and Binyamin alone.') +
      p('His Reign', 'Rehavam wanted to go to war against Israel, but Shemayah the man of God told him in the name of Hashem not to fight his brothers, and the people returned home. Rehavam fortified many cities in Judah, and at the start of his reign the Kohanim and Levites from all of Israel came to Jerusalem and strengthened the service of Hashem.') +
      p('Shishak’s Campaign', 'In the fifth year of his reign, after the people had abandoned the Torah of Hashem, Shishak king of Egypt came up against Jerusalem and took the treasures of the House of Hashem and of the king’s palace, among them the gold shields Shlomo had made. Rehavam made copper shields in their place. Because he humbled himself before Hashem, the destruction was not complete.'),
  },

  abiyam: {
    roles: ['King of Judah'],
    note: 'In Tanach: three years (I Kings 15:2)',
    sources: ['I Kings 15:1–8', 'II Chronicles 13'],
    content:
      p('His Reign', 'Aviyam, called Aviyah in the Book of Chronicles, reigned after his father Rehavam for three years in Jerusalem. The Book of Kings testifies that he followed all the sins of his father, but for David’s sake Hashem gave him a lamp in Jerusalem.') +
      p('The War against Yeravam', 'Aviyah went to war against Yeravam king of Israel. Standing on Mount Tzemarayim, he addressed the army of Israel: he reminded them that Hashem had given the kingship to David and his sons by a covenant of salt, and that in Jerusalem the Kohanim, the sons of Aharon, still served Hashem in order. Although Yeravam’s army surrounded Judah on every side, the men of Judah cried out to Hashem, the Kohanim sounded the trumpets, and Judah won a great victory.'),
  },

  asa: {
    roles: ['King of Judah'],
    sources: ['I Kings 15:9–24', 'II Chronicles 14–16'],
    content:
      p('An Upright King', 'Asa reigned forty-one years in Jerusalem and did what was right in the eyes of Hashem, like his father David. He removed the idols from the land, and even removed Maachah from being queen mother because of the abominable image she had made for the Asherah. Azaryahu son of Oded the Prophet encouraged him, and the people made a covenant to seek Hashem with all their heart.') +
      p('The War with Zerach the Kushite', 'Zerach the Kushite came out against Judah with a huge army. Asa called out to Hashem: "Help us, Hashem our God, for we rely on You", and Hashem struck the Kushites before Judah.') +
      p('His Later Years', 'When Baasha king of Israel built up Ramah, Asa sent treasures from the House of Hashem to Ben-Hadad king of Aram so that he would break his treaty with Israel. Chanani the seer rebuked him for relying on the king of Aram and not on Hashem. In the thirty-ninth year of his reign he became ill in his feet, and even in his illness he turned to physicians.'),
  },

  yehoshafat: {
    roles: ['King of Judah'],
    note: 'In Tanach: 25 years (I Kings 22:42)',
    sources: ['I Kings 22', 'II Kings 3', 'II Chronicles 17–20'],
    content:
      p('Teacher of Torah to the People', 'Yehoshafat followed the ways of David, and in the third year of his reign he sent officers, Levites and Kohanim to all the cities of Judah, "and with them was the book of the Torah of Hashem", to teach the people. He appointed judges in every city and told them: "Consider what you do, for you judge not for man but for Hashem".') +
      p('The Alliance with Achav', 'Yehoshafat made a marriage alliance with the house of Achav king of Israel and went out with him to war at Ramot Gilad, even though Michayhu son of Yimlah had prophesied defeat. Yehu son of Chanani the Prophet rebuked him for this: "Should you help the wicked?"') +
      p('The Miracle of the War with Moav and Ammon', 'When Moav, Ammon and Mount Seir came against him, Yehoshafat proclaimed a fast and stood in prayer in the House of Hashem. Yachaziel the Levite prophesied: "The battle is not yours but God’s". Yehoshafat sent singers at the head of the army, and the enemies struck each other down. From then on the place was called the Valley of Blessing.'),
  },

  yehoram: {
    roles: ['King of Judah'],
    sources: ['II Kings 8:16–24', 'II Chronicles 21'],
    content:
      p('His Reign', 'Yehoram son of Yehoshafat became king at the age of thirty-two and reigned eight years in Jerusalem. Once his rule was secure he killed all his brothers. He married Atalyah daughter of Achav and followed the ways of the kings of Israel.') +
      p('Edom’s Revolt and Eliyahu’s Letter', 'In his days Edom rebelled against Judah and set up its own king, and Livnah rebelled as well. A letter from Eliyahu the Prophet reached him, telling him that because he had not followed the ways of his father and of Asa, and had killed his brothers who were better than he, he would be punished with a severe illness. The Philistines and Arabs raided Judah and carried off his sons and wives, except the youngest of his sons. Yehoram died of his illness and was not buried in the tombs of the kings.'),
  },

  achazyahu: {
    roles: ['King of Judah'],
    sources: ['II Kings 8:25 – 9:29', 'II Chronicles 22:1–9'],
    content:
      p('His Reign', 'Ahazyahu son of Yehoram reigned one year in Jerusalem, and following the counsel of his mother Atalyah he walked in the ways of the house of Achav.') +
      p('His Death', 'Ahazyahu went out with Yoram son of Achav, king of Israel, to war at Ramot Gilad, and afterwards went down to Yizre’el to visit the wounded Yoram. At that time Yehu son of Nimshi was anointed king over Israel by the messenger of Elisha the Prophet, in order to cut off the house of Achav. Yehu killed Yoram, and Ahazyahu, who fled, was struck and died at Megiddo.'),
  },

  atalyah: {
    roles: ['Queen'],
    note: 'In Tanach: six years',
    sources: ['II Kings 8:18; 8:26', 'II Kings 11', 'II Chronicles 22:10 – 23:21'],
    content:
      p('Daughter of the House of Achav', 'Atalyah, of the house of Achav king of Israel, married Yehoram king of Judah, and her son Ahazyahu reigned after him. She influenced her husband and her son to follow the ways of the house of Achav.') +
      p('Her Reign', 'When Atalyah saw that her son Ahazyahu was dead, she rose up and killed all the royal family and seized power. But Yehoshava, daughter of King Yoram and sister of Ahazyahu, stole the infant Yoash from among the king’s sons and hid him in the House of Hashem for six years, while Atalyah reigned over the land.') +
      p('The End of Her Reign', 'In the seventh year Yehoyada the Kohen made a covenant with the army officers, brought out Yoash and crowned him in the House of Hashem. Atalyah heard the noise of the people and came, tore her clothes and cried "Treason, treason!", but she was taken out of the House of Hashem and put to death. The people tore down the house of Baal and made a covenant to be a people of Hashem.'),
  },

  yehoash: {
    roles: ['King of Judah'],
    note: 'In Tanach: 40 years',
    sources: ['II Kings 11–12', 'II Chronicles 23–24', 'Gittin 57b'],
    content:
      p('The Child Who Was Saved', 'Yehoash son of Ahazyahu was saved as a baby from his grandmother Atalyah: his aunt Yehoshava hid him in the House of Hashem for six years. At the age of seven he was crowned by Yehoyada the Kohen, who brought the people into a covenant with Hashem.') +
      p('Repairing the House of Hashem', '"Yehoash did what was right in the eyes of Hashem all his days, as Yehoyada the Kohen instructed him". He saw to the repair of the House of Hashem: he prepared a chest with a hole in its lid beside the altar, and the money the people donated into it was given to the craftsmen who repaired the House.') +
      p('After Yehoyada’s Death', 'After Yehoyada died, Yehoash listened to the princes of Judah, and the people returned to serving the Asherim and idols. Zecharyah son of Yehoyada the Kohen rebuked them, and at the king’s command they stoned him in the courtyard of the House of Hashem. Chazal relate that the blood of Zecharyah kept seething until the days of the Destruction (Gittin 57b). At the end of his days the army of Aram came against Judah, and Yehoash was killed by his servants.'),
  },

  amatzyah: {
    roles: ['King of Judah'],
    note: 'In Tanach: 29 years (II Kings 14:2)',
    sources: ['II Kings 14:1–22', 'II Chronicles 25', 'Megillah 10b'],
    content:
      p('The Start of His Reign', 'Amatzyah son of Yehoash became king at the age of twenty-five and did what was right in the eyes of Hashem, but not with a whole heart. When his rule was secure he executed the servants who had killed his father, but he did not put their sons to death, as it is written in the Torah: "Each man shall die for his own sin". Chazal teach that Amotz, the father of Yeshayahu the Prophet, was his brother (Megillah 10b).') +
      p('The War with Edom', 'Amatzyah defeated Edom in the Valley of Salt, but afterwards brought back the gods of the people of Seir and bowed down to them. A prophet who came to rebuke him was rudely sent away.') +
      p('The War with Yehoash King of Israel', 'Amatzyah challenged Yehoash king of Israel to face him, and despite Yehoash’s warning went out to war. Judah was defeated at Beit Shemesh, Amatzyah was captured, and Yehoash broke through the wall of Jerusalem and took the vessels of the House of Hashem. At the end of his days a conspiracy was formed against him in Jerusalem; he fled to Lachish and was killed there.'),
  },

  uziyahu: {
    roles: ['King of Judah'],
    sources: ['II Kings 15:1–7', 'II Chronicles 26', 'Isaiah 6:1', 'Amos 1:1', 'Zechariah 14:5'],
    content:
      p('Days of Greatness', 'Uziyahu, also called Azaryah in the Book of Kings, became king at the age of sixteen and reigned fifty-two years in Jerusalem. "He sought God in the days of Zecharyahu, who understood the visions of God, and as long as he sought Hashem, God made him prosper." He defeated the Philistines, fortified Jerusalem, dug many cisterns and loved the soil. His fame spread far and wide.') +
      p('The Incense and the Tzara’at', 'When he grew strong his heart became proud, and he entered the Sanctuary of Hashem to burn incense on the incense altar. Azaryahu the Kohen and eighty Kohanim stood against him: "It is not for you, Uziyahu, to burn incense to Hashem, but for the Kohanim, the sons of Aharon". Uziyahu grew angry, and at that moment tzara’at broke out on his forehead. He remained afflicted until the day of his death and lived in a separate house, while his son Yotam judged the people.') +
      p('The Earthquake', 'In his days there was a great earthquake, mentioned by the prophets Amos and Zechariah ("as you fled from the earthquake in the days of Uziyah king of Judah"). In the year of his death Yeshayahu saw the vision of holiness: "I saw Hashem sitting upon a throne, high and lifted up".'),
  },

  yotam: {
    roles: ['King of Judah'],
    sources: ['II Kings 15:32–38', 'II Chronicles 27', 'Sukkah 45b'],
    content:
      p('His Reign', 'Yotam son of Uziyahu became king at the age of twenty-five and reigned sixteen years in Jerusalem. Already during his father’s illness he was in charge of the palace and judged the people. He did what was right in the eyes of Hashem, as his father Uziyahu had done, "except that he did not enter the Sanctuary of Hashem".') +
      p('Building and Victory', 'Yotam built the upper gate of the House of Hashem and did much building on the wall of the Ofel. He built cities in the hills of Judah and fortresses in the forests, and he defeated the Ammonites, who paid him tribute for three years. "Yotam grew strong, because he directed his ways before Hashem his God." Chazal count him among the great righteous men, and praise the honor he showed his father (Sukkah 45b).'),
  },

  achaz: {
    roles: ['King of Judah'],
    sources: ['II Kings 16', 'II Chronicles 28', 'Isaiah 7–8', 'Bereishit Rabbah 42:3'],
    content:
      p('His Reign', 'Ahaz son of Yotam became king at the age of twenty and reigned sixteen years in Jerusalem, and he did not do what was right in the eyes of Hashem. He followed the ways of the kings of Israel, made molten images for the Baalim and even passed his son through the fire. Chazal expounded that he was called Ahaz because he "seized" (achaz) the synagogues and study halls and shut them (Bereishit Rabbah 42:3).') +
      p('The War with Aram and Israel', 'Retzin king of Aram and Pekach son of Remalyahu king of Israel came up against Jerusalem. Yeshayahu the Prophet went out to meet Ahaz and told him: "Be careful and keep calm, do not fear", and offered him to ask for a sign from Hashem. Ahaz refused, and instead of trusting in Hashem he sent a bribe to Tiglat-Pileser king of Assyria and asked for his help.') +
      p('The Altar from Damascus', 'When Ahaz went to Damascus to meet the king of Assyria, he saw an altar there and sent its design to Uriyah the Kohen, who built an altar like it in Jerusalem. Ahaz cut up the vessels of the House of Hashem, shut the doors of the Sanctuary, and made himself altars in every corner of Jerusalem.'),
  },

  chizkiyahu: {
    roles: ['King of Judah'],
    sources: ['II Kings 18–20', 'Isaiah 36–39', 'II Chronicles 29–32', 'Berachot 10a–b', 'Sanhedrin 94b', 'Bava Batra 15a'],
    content:
      p('Restoring the Service', 'Hizkiyahu son of Ahaz became king at the age of twenty-five, and in the first month of his reign he opened the doors of the House of Hashem that his father had shut, purified the Temple and restored the service of the Kohanim and Levites. He sent invitations to all Israel, including the ten tribes, to celebrate Pesach in Jerusalem, and he broke the copper serpent Moshe had made, because the people were burning incense to it.') +
      p('Spreading the Torah', 'Chazal relate that Hizkiyahu planted a sword at the entrance of the study hall and declared that whoever did not occupy himself with Torah would be pierced by the sword. They searched from Dan to Be’er Sheva and found no ignorant person; even small boys and girls were expert in the laws of purity and impurity (Sanhedrin 94b). Hizkiyahu and his circle wrote down the books of Isaiah, Proverbs, Song of Songs and Ecclesiastes (Bava Batra 15a).') +
      p('The Miracle of Sancheriv', 'Sancheriv king of Assyria came up against the cities of Judah and besieged Jerusalem, and Ravshakeh blasphemed Hashem. Hizkiyahu spread the letters before Hashem and prayed, and Yeshayahu the Prophet promised that the king of Assyria would not enter the city. That night an angel of Hashem went out and struck down one hundred and eighty-five thousand in the camp of Assyria.') +
      p('His Illness', 'Hizkiyahu fell mortally ill, and Yeshayahu came to him on Hashem’s mission. Hizkiyahu turned his face to the wall and prayed, and Hashem added fifteen years to his life; the sign was that the shadow went back on the steps of Ahaz.'),
  },

  menashe: {
    roles: ['King of Judah'],
    sources: ['II Kings 21:1–18', 'II Chronicles 33:1–20', 'Yevamot 49b', 'Mishnah Sanhedrin 10:2'],
    content:
      p('His Reign', 'Menashe son of Hizkiyahu became king at the age of twelve and reigned fifty-five years in Jerusalem, longer than any other king of the House of David. He rebuilt the high places his father Hizkiyahu had destroyed, set up altars to Baal and to all the host of heaven, even in the courtyards of the House of Hashem, passed his son through the fire and placed the image of the Asherah in the House. He also shed much innocent blood; Chazal relate that he killed Yeshayahu the Prophet (Yevamot 49b).') +
      p('Exile and Repentance', 'Hashem brought against him the army commanders of the king of Assyria, who captured him with hooks, bound him in copper chains and led him to Babylon. "In his distress he entreated Hashem his God and humbled himself greatly", and Hashem heard his plea and brought him back to Jerusalem to his kingdom. Menashe removed the foreign gods and returned to serving Hashem.') +
      p('The View of Chazal', 'In the Mishnah (Sanhedrin 10:2) Menashe is counted among the three kings who have no share in the World to Come, but Rabbi Yehudah says he does have a share, because it is said "He prayed to Him, and He was entreated by him".'),
  },

  amon: {
    roles: ['King of Judah'],
    sources: ['II Kings 21:19–26', 'II Chronicles 33:21–25'],
    content:
      p('His Reign', 'Amon son of Menashe became king at the age of twenty-two and reigned two years in Jerusalem. He did evil in the eyes of Hashem as his father Menashe had done, and served the idols his father had made, but he did not humble himself before Hashem as Menashe had: "for Amon increased his guilt".') +
      p('His Death', 'His servants conspired against him and killed him in his house. The people of the land struck down the conspirators and made his son Yoshiyahu king in his place.'),
  },

  yoshiyahu: {
    roles: ['King of Judah'],
    sources: ['II Kings 22 – 23:30', 'II Chronicles 34–35', 'Lamentations 4:20', 'Yoma 52b', 'Taanit 22b'],
    content:
      p('A Righteous King', 'Yoshiyahu son of Amon became king at the age of eight and reigned thirty-one years in Jerusalem. "He did what was right in the eyes of Hashem and walked in all the ways of his father David, and did not turn aside to the right or to the left." While still young he began to seek the God of his father David and to purify Judah and Jerusalem of the high places and the Asherim.') +
      p('The Torah Scroll', 'In the eighteenth year of his reign, while the House was being repaired, Chilkiyahu the Kohen Gadol found a Torah scroll in the House of Hashem. When the king heard the words of the scroll he tore his clothes, and sent to inquire of Hashem through Chuldah the Prophetess. Yoshiyahu gathered all the people, read the Book of the Covenant to them and made a covenant before Hashem. He uprooted idolatry from the whole land and held a great Pesach, the like of which had not been held since the days of the Judges. Chazal relate that he hid away the Ark of the Covenant, so that it would not be exiled to Babylon (Yoma 52b).') +
      p('His Death', 'Yoshiyahu went out against Pharaoh Necho king of Egypt, who was passing through his land, and was wounded by the archers at Megiddo and died. Yirmeyahu lamented him, and the lament is remembered throughout Israel. Chazal relate that at the time of his death he said "Hashem is righteous, for I rebelled against His word" (Taanit 22b).'),
  },

  yehoachaz: {
    roles: ['King of Judah'],
    note: 'Three months',
    sources: ['II Kings 23:30–34', 'II Chronicles 36:1–4', 'Horayot 11b'],
    content:
      p('His Reign', 'After Yoshiyahu’s death the people of the land took his son Yehoahaz and anointed him king in his place, even though his brother Yehoyakim was older; Chazal explain that this is why he needed to be anointed (Horayot 11b). Yehoahaz became king at the age of twenty-three and reigned only three months.') +
      p('His Exile', 'Pharaoh Necho imprisoned him at Rivlah in the land of Chamat, imposed a heavy tax on the land, and made his brother Elyakim king in his place, changing his name to Yehoyakim. Yehoahaz was taken to Egypt and died there.'),
  },

  yehoyakim: {
    roles: ['King of Judah'],
    sources: ['II Kings 23:34 – 24:6', 'II Chronicles 36:4–8', 'Jeremiah 22; 26; 36'],
    content:
      p('His Reign', 'Pharaoh Necho made Elyakim son of Yoshiyahu king in place of his brother Yehoahaz and changed his name to Yehoyakim. He became king at the age of twenty-five, reigned eleven years in Jerusalem, and did evil in the eyes of Hashem. He collected money from the people to pay the tax to Pharaoh. In his days Nevuchadnetzar king of Babylon came up, and Yehoyakim served him for three years and then rebelled against him.') +
      p('Yirmeyahu’s Scroll', 'Yirmeyahu the Prophet warned him and the people again and again. When the scroll that Baruch son of Neriyah had written from Yirmeyahu’s dictation was read before the king, Yehoyakim cut it with a knife and burned it in the fire of the brazier, and he was not afraid and did not tear his clothes. Yirmeyahu prophesied of him: "He shall be buried with the burial of a donkey".'),
  },

  yehoyachin: {
    roles: ['King of Judah'],
    note: 'Three months',
    sources: ['II Kings 24:8–16; 25:27–30', 'Jeremiah 22:24–30; 52:31–34', 'II Chronicles 36:9–10', 'Gittin 88a'],
    content:
      p('The Exile of Yehoyahin', 'Yehoyahin, also called Yechonyah, became king at the age of eighteen and reigned three months in Jerusalem. Nevuchadnetzar besieged the city, and Yehoyahin went out to him with his mother, his servants and his officers. Nevuchadnetzar exiled him to Babylon, together with the princes of Jerusalem, the mighty men of valor, "and the craftsmen and the smiths"; Chazal teach that these were the Torah scholars (Gittin 88a).') +
      p('In Babylon', 'For thirty-seven years Yehoyahin sat in prison in Babylon. When Evil-Merodach became king, he released him from prison, spoke kindly to him and set his throne above the thrones of the kings who were with him in Babylon, and all his days he ate at the king’s table. From his descendants came the Exilarchs and the line of the House of David in exile.'),
  },

  tzidkiyahu: {
    roles: ['King of Judah', 'The Last King of the First Temple Era'],
    sources: ['II Kings 24:17 – 25:7', 'Jeremiah 34; 37–39; 52', 'II Chronicles 36:11–21', 'Ezekiel 17'],
    content:
      p('His Reign', 'After the exile of Yehoyahin, Nevuchadnetzar made Matanyah king, the uncle of Yehoyahin and a son of Yoshiyahu, and changed his name to Tzidkiyahu. He became king at the age of twenty-one and reigned eleven years in Jerusalem. He swore by God to Nevuchadnetzar to be loyal to him, but rebelled against him.') +
      p('Yirmeyahu and the Siege', 'Yirmeyahu the Prophet warned Tzidkiyahu again and again to surrender to the king of Babylon in order to save the city. Tzidkiyahu sought to hear the word of Hashem in secret, but did not stand up to his officers, who imprisoned Yirmeyahu in a pit. In the ninth year of his reign the siege of Jerusalem began.') +
      p('The Destruction', 'On the ninth of Tammuz, in the eleventh year of his reign, the city was breached. Tzidkiyahu fled by way of the plains of Yericho and was captured. At Rivlah his sons were slaughtered before his eyes, his eyes were put out, and he was led in copper chains to Babylon. On the ninth of Av the Holy Temple was burned, and the Kingdom of Judah came to its end.'),
  },
};

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const missing = new Set();

  for (const [slug, data] of Object.entries(KINGS)) {
    const person = await Person.findOne({ slug });
    if (!person) {
      console.log(`✗ ${slug}: not found, skipped`);
      continue;
    }
    person.roles = person.roles.map((r, i) => ({ he: r.he, en: data.roles[i] || r.en || '' }));
    if (data.note && person.offices[0]) {
      person.offices[0].note = { he: person.offices[0].note?.he || '', en: data.note };
    }
    if (person.offices[0]) person.offices[0].label = { he: person.offices[0].label.he, en: 'Reign' };
    person.relations = person.relations.map((r) => {
      const en = r.person ? r.name.en : NAMES[r.name.he];
      if (!r.person && !en) missing.add(r.name.he);
      return { type: r.type, person: r.person, name: { he: r.name.he, en: en || r.name.en || '' } };
    });
    person.sourcesEn = data.sources;
    person.content = { he: person.content.he, en: data.content };
    await person.save();
    console.log(`✓ ${person.name.en || person.name.he}`);
  }

  if (missing.size) console.log('No English name for:', [...missing].join(', '));
  await mongoose.disconnect();
};

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
