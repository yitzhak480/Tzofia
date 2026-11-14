// The symbols on the cards of entries without a picture. Each entry keeps its
// own symbol (Person.icon); a new entry gets the symbol of its first category.
// Keep in step with src/components/encyclopedia/categoryIcons.js.
const ICON_KEYS = [
  'magenDavid', 'crown', 'scroll', 'menorah', 'scales', 'banner', 'temple', 'vessel', 'hourglass', 'star', 'book',
  'quill', 'inkwell', 'talmudPage', 'bookStack', 'torahScroll', 'kterTorah', 'oilLamp', 'candle', 'tablets',
  'shtender', 'archGate', 'pillars', 'oliveBranch', 'laurel', 'palmTree', 'grapes', 'pomegranate', 'key', 'shofar',
  'magen', 'tikTorah', 'tefillin', 'tallit', 'shtreimel', 'niggun', 'river', 'mountain', 'wheat', 'tree', 'scepter',
  'throne', 'tent', 'well', 'ladder', 'stars', 'cave', 'ship', 'shulchanAruch', 'letter', 'lantern', 'cityWalls',
  'kotel', 'sunrise', 'moon', 'chanukiah', 'kinor', 'yad', 'kiddushCup', 'dove', 'rainbow',
];
const DEFAULT_ICON = 'magenDavid';

// the symbol a category gives: the one chosen in the admin, or one that fits its web address
const iconForCategory = (slug = '', chosen = '') => {
  if (chosen && ICON_KEYS.includes(chosen)) return chosen;
  if (/king/.test(slug)) return 'crown';
  if (/prophet/.test(slug)) return 'scroll';
  if (/kohan|priest/.test(slug)) return 'menorah';
  if (/judge/.test(slug)) return 'scales';
  if (/tribe/.test(slug)) return 'banner';
  if (/vessel/.test(slug)) return 'vessel';
  if (/temple|mishkan/.test(slug)) return 'temple';
  if (/event/.test(slug)) return 'hourglass';
  if (/tanna/.test(slug)) return 'pillars';
  if (/amora/.test(slug)) return 'talmudPage';
  if (/savora/.test(slug)) return 'shofar';
  if (/geon/.test(slug)) return 'archGate';
  if (/nesi/.test(slug)) return 'laurel';
  if (/sage|rabbi/.test(slug)) return 'book';
  return DEFAULT_ICON;
};

module.exports = { ICON_KEYS, DEFAULT_ICON, iconForCategory };
