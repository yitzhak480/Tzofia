// Builds web addresses ("slugs") like "david" or "kings-of-judah".

const HEBREW = {
  א: 'a', ב: 'b', ג: 'g', ד: 'd', ה: 'h', ו: 'v', ז: 'z', ח: 'ch', ט: 't', י: 'y',
  כ: 'k', ך: 'k', ל: 'l', מ: 'm', ם: 'm', נ: 'n', ן: 'n', ס: 's', ע: 'a', פ: 'p',
  ף: 'f', צ: 'tz', ץ: 'tz', ק: 'k', ר: 'r', ש: 'sh', ת: 't',
};

const toSlug = (text) =>
  String(text || '')
    .split('')
    .map((ch) => HEBREW[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '');

// A slug that isn't used yet by `Model` (adds -2, -3... if needed).
const uniqueSlug = async (Model, base, excludeId = null) => {
  const root = base || 'item';
  for (let i = 1; i < 1000; i += 1) {
    const candidate = i === 1 ? root : `${root}-${i}`;
    const clash = await Model.exists({ slug: candidate, ...(excludeId ? { _id: { $ne: excludeId } } : {}) });
    if (!clash) return candidate;
  }
  return `${root}-${Date.now()}`;
};

module.exports = { toSlug, uniqueSlug };
