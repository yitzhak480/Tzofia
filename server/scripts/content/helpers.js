// Small helpers for writing encyclopedia content in scripts.
const L = (he, en) => ({ he, en });

// One article section in both languages.
const sec = (titleHe, textHe, titleEn, textEn) => ({ titleHe, textHe, titleEn, textEn });
const article = (sections) => ({
  he: sections.map((s) => `<h2>${s.titleHe}</h2><p>${s.textHe}</p>`).join(''),
  en: sections.map((s) => `<h2>${s.titleEn}</h2><p>${s.textEn}</p>`).join(''),
});

const office = (he, en, from, to, noteHe = '', noteEn = '') => ({ label: L(he, en), from, to, note: L(noteHe, noteEn) });
const reign = (from, to, noteHe = '', noteEn = '') => office('שנות מלוכה', 'Reign', from, to, noteHe, noteEn);
const judged = (from, to, noteHe = '', noteEn = '') => office('שנות שפיטה', 'Years as judge', from, to, noteHe, noteEn);

const biblical = (x, y) => [{ tree: 'biblical', x, y }];

// "N שנה" in correct Hebrew, and English.
const yearsCount = (n) => {
  if (n === 1) return L('שנה אחת', '1 year');
  if (n === 2) return L('שנתיים', '2 years');
  if (n <= 10) return L(`${n} שנים`, `${n} years`);
  return L(`${n} שנה`, `${n} years`);
};

// rel helpers: link to a page by slug, or a name only
const to = (type, slug) => ({ type, slug });
const nm = (type, he, en) => ({ type, he, en });

module.exports = { L, sec, article, office, reign, judged, biblical, yearsCount, to, nm };
