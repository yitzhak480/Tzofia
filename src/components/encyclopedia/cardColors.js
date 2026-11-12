// Colours for the decorative card of a category or entry without a picture.
// The keys must match COLOR_KEYS in server/models/shared.js.
export const CARD_COLORS = {
  burgundy: { he: 'בורדו', base: '#7a2b23', glow: '#a8483a', line: '#c5a059', accent: '#c5a059' },
  blue: { he: 'כחול עמוק', base: '#1d3150', glow: '#35517d', line: '#c5a059', accent: '#c5a059' },
  purple: { he: 'סגול', base: '#47254f', glow: '#6c3d77', line: '#c5a059', accent: '#c5a059' },
  brown: { he: 'חום', base: '#4b3322', glow: '#6e4c33', line: '#c5a059', accent: '#c5a059' },
  marble: { he: 'שיש', base: '#ece7df', glow: '#ffffff', line: '#a07a36', accent: '#8a6a2c', marble: true },
  emerald: { he: 'ירוק אמרלד', base: '#1e4636', glow: '#336a52', line: '#c5a059', accent: '#c5a059' },
  teal: { he: 'טורקיז עמוק', base: '#18454a', glow: '#2e6a70', line: '#c5a059', accent: '#c5a059' },
  ink: { he: 'שחור דיו', base: '#25211d', glow: '#463f37', line: '#c5a059', accent: '#c5a059' },
  olive: { he: 'זית', base: '#46441f', glow: '#686533', line: '#d0ad66', accent: '#d0ad66' },
  slate: { he: 'אפור צפחה', base: '#353c48', glow: '#535c6c', line: '#c5a059', accent: '#c5a059' },
};

export const COLOR_KEYS = Object.keys(CARD_COLORS);

// The colour of an entry's card: the one chosen in the admin, or a fixed
// "random" one picked from its web address (so it never changes by itself).
export const entryColor = (entry) => {
  if (entry?.cardColor && CARD_COLORS[entry.cardColor]) return entry.cardColor;
  let h = 0;
  for (const ch of entry?.slug || '') h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return COLOR_KEYS[h % COLOR_KEYS.length];
};
