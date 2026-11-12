// All the symbols that can appear on a card without a picture, with their
// Hebrew names (shown in the admin when choosing a category's symbol).
export const ICON_LIST = [
  ['crown', 'כתר מלכות'], ['scroll', 'מגילה'], ['menorah', 'מנורה'], ['scales', 'מאזניים'], ['banner', 'דגל'],
  ['temple', 'בית המקדש'], ['vessel', 'כלי המקדש'], ['hourglass', 'שעון חול'], ['star', 'מגן דוד (פשוט)'],
  ['book', 'ספר פתוח'], ['quill', 'נוצת כתיבה'], ['inkwell', 'קסת וקולמוס'], ['talmudPage', 'דף גמרא'],
  ['bookStack', 'ערימת ספרים'], ['torahScroll', 'ספר תורה'], ['kterTorah', 'כתר תורה'], ['oilLamp', 'נר שמן'],
  ['candle', 'נר דולק'], ['tablets', 'לוחות הברית'], ['shtender', 'סטנדר'], ['archGate', 'שער בית המדרש'],
  ['pillars', 'עמודים'], ['oliveBranch', 'ענף זית'], ['laurel', 'זר עלים'], ['palmTree', 'דקל'],
  ['grapes', 'אשכול ענבים'], ['pomegranate', 'רימון'], ['key', 'מפתח'], ['shofar', 'שופר'], ['magen', 'מגן דוד'],
  ['tikTorah', 'ספר תורה ספרדי'], ['tefillin', 'תפילין'], ['tallit', 'טלית'], ['shtreimel', 'שטריימל'],
  ['niggun', 'ניגון'], ['river', 'נהר'], ['mountain', 'הר'], ['wheat', 'שיבולים'], ['tree', 'עץ'],
  ['scepter', 'שרביט'], ['throne', 'כסא מלכות'], ['tent', 'אוהל'], ['well', 'באר'], ['ladder', 'סולם'],
  ['stars', 'כוכבים'], ['cave', 'מערה'], ['ship', 'ספינה'], ['shulchanAruch', 'שולחן ערוך'], ['letter', 'איגרת'],
  ['lantern', 'פנס'], ['cityWalls', 'חומות עיר'], ['kotel', 'הכותל'], ['sunrise', 'זריחה'], ['moon', 'לבנה'],
  ['chanukiah', 'חנוכייה'], ['kinor', 'כינור'], ['yad', 'יד לקריאה'], ['kiddushCup', 'גביע'], ['dove', 'יונה'],
  ['rainbow', 'קשת בענן'],
];

export const ICON_LABELS = Object.fromEntries(ICON_LIST);

// The symbol of a category: the one chosen in the admin, or one that fits
// its web address.
export const iconForCategory = (slug = '', chosen = '') => {
  if (chosen && ICON_LABELS[chosen]) return chosen;
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
  return 'star';
};
