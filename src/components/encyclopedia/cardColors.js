// Colours for the decorative card of a category or entry without a picture.
// The keys must match COLOR_KEYS in server/models/shared.js.
//
// base = background, glow = soft light in the middle, line = pattern and
// frame, accent = medallion details, icon = the symbol's colour.

const GOLD = '#c5a059';
const dark = (base, glow) => ({ base, glow, line: GOLD, accent: GOLD, icon: '#d9b56b' });

// A light colour from our posters: lines and symbol in a darker shade.
const shade = (hex, f) =>
  `#${[1, 3, 5].map((i) => Math.round(parseInt(hex.slice(i, i + 2), 16) * f).toString(16).padStart(2, '0')).join('')}`;
const poster = (base) => ({ base, glow: '#ffffff', line: shade(base, 0.55), accent: shade(base, 0.45), icon: shade(base, 0.4), light: true });

export const COLOR_GROUPS = [
  {
    id: 'default',
    he: 'צבעים',
    colors: {
      burgundy: { he: 'בורדו', ...dark('#7a2b23', '#a8483a') },
      blue: { he: 'כחול עמוק', ...dark('#1d3150', '#35517d') },
      purple: { he: 'סגול', ...dark('#47254f', '#6c3d77') },
      brown: { he: 'חום', ...dark('#4b3322', '#6e4c33') },
      marble: { he: 'שיש', base: '#ece7df', glow: '#ffffff', line: '#a07a36', accent: '#8a6a2c', icon: '#8a6a2c', marble: true },
      emerald: { he: 'ירוק אמרלד', ...dark('#1e4636', '#336a52') },
      teal: { he: 'טורקיז עמוק', ...dark('#18454a', '#2e6a70') },
      ink: { he: 'שחור דיו', ...dark('#25211d', '#463f37') },
      olive: { he: 'זית', ...dark('#46441f', '#686533'), line: '#d0ad66', accent: '#d0ad66' },
      slate: { he: 'אפור צפחה', ...dark('#353c48', '#535c6c') },
    },
  },
  {
    id: 'tree1',
    he: 'צבעי האילן הראשון (מאדם עד רבי)',
    colors: {
      't1-bereshit': { he: 'חומש בראשית', ...poster('#9cb46c') },
      't1-levi': { he: 'שבט לוי', ...poster('#de725a') },
      't1-yehuda': { he: 'שבט יהודה', ...poster('#84bad2') },
      't1-shvatim': { he: 'שאר השבטים', ...poster('#d8ba48') },
      't1-gerim': { he: 'גרי צדק', ...poster('#72d2ae') },
      't1-hordos': { he: 'בית הורדוס', ...poster('#9c90c0') },
    },
  },
  {
    id: 'tree2',
    he: 'צבעי האילן השני (אמוראים לגאונים)',
    colors: {
      't2-nesiim': { he: 'נשיאי הסנהדרין', ...poster('#7ec0de') },
      't2-tveria': { he: 'טבריה', ...poster('#84c0ba') },
      't2-eretz': { he: 'שאר ארץ ישראל', ...poster('#90ba90') },
      't2-reshgaluta': { he: 'משפחת ראשי הגולה', ...poster('#a87eae') },
      't2-sura': { he: 'סורא, מתא מחסיא ונרש', ...poster('#eac036') },
      't2-nehardea': { he: 'נהרדעא, פומבדיתא ומחוזא', ...poster('#f0664e') },
      't2-bavel': { he: 'שאר בבל ופרס', ...poster('#ea9036') },
      't2-teiman': { he: 'תימן וערב', ...poster('#78909c') },
      't2-mitzrayim': { he: 'מצרים', ...poster('#c0ba66') },
      't2-kairuan': { he: 'קירואן', ...poster('#90ba60') },
      't2-africa': { he: 'שאר אפריקה', ...poster('#849c6c') },
      't2-sfarad': { he: 'ספרד', ...poster('#909cc6') },
      't2-italia': { he: 'איטליה ויוון', ...poster('#ea8484') },
      't2-ashkenaz': { he: 'אשכנז וצרפת', ...poster('#eaa8ba') },
      't2-kuzarim': { he: 'המלכים הכוזרים', ...dark('#48724e', '#6a9470') },
      't2-karaim': { he: 'קראים', ...dark('#72604e', '#94806c') },
    },
  },
];

export const CARD_COLORS = Object.assign({}, ...COLOR_GROUPS.map((g) => g.colors));
export const COLOR_KEYS = Object.keys(CARD_COLORS);
const DEFAULT_KEYS = Object.keys(COLOR_GROUPS[0].colors);

// The colour of an entry's card:
// 1. the one chosen for the entry in the admin,
// 2. otherwise its category's colour, if the category says so,
// 3. otherwise a fixed "random" one from the main ten, picked by its web address.
export const entryColor = (entry, category) => {
  if (entry?.cardColor && CARD_COLORS[entry.cardColor]) return entry.cardColor;
  if (category?.colorEntries && CARD_COLORS[category.cardColor]) return category.cardColor;
  let h = 0;
  for (const ch of entry?.slug || '') h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return DEFAULT_KEYS[h % DEFAULT_KEYS.length];
};
