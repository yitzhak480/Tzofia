// Shared text helpers for showing a person.
import { tr } from '../../api';

const hasYear = (n) => n !== null && n !== undefined && n !== '' && !Number.isNaN(Number(n));

// { from: 2854, to: 2924 } -> "2854–2924 (70 שנה)"
export const yearsText = (span, lang = 'he') => {
  if (!span) return '';
  const { from, to } = span;
  if (hasYear(from) && hasYear(to)) {
    const n = Number(to) - Number(from);
    if (n === 0) return String(from); // e.g. a reign of a few months
    const count = lang === 'he' ? `${n} שנה` : `${n} years`;
    return n > 0 ? `${from}–${to} (${count})` : `${from}–${to}`;
  }
  if (hasYear(from)) return `${from}–?`;
  if (hasYear(to)) return `?–${to}`;
  return '';
};

// The short line under the name on a person's card.
export const cardLine = (person, lang) => {
  const period = tr(person.period, lang);
  if (period) return period;
  const office = person.offices?.find((o) => yearsText(o));
  if (office) return `${tr(office.label, lang)}: ${yearsText(office, lang)}`;
  return yearsText(person.life, lang);
};

// The short text on a person's card.
export const cardSummary = (person, lang) => tr(person.summary, lang) || tr(person.autoSummary, lang);

// Relation groups, in the order the family tree shows them.
export const RELATION_TYPES = [
  { id: 'father', he: 'אב', en: 'Father', heMany: 'הורים', enMany: 'Parents' },
  { id: 'mother', he: 'אם', en: 'Mother', heMany: 'הורים', enMany: 'Parents' },
  { id: 'sibling', he: 'אח / אחות', en: 'Sibling', heMany: 'אחים', enMany: 'Siblings' },
  { id: 'spouse', he: 'בן / בת זוג', en: 'Spouse', heMany: 'בני זוג', enMany: 'Spouses' },
  { id: 'child', he: 'ילד / ילדה', en: 'Child', heMany: 'ילדים', enMany: 'Children' },
  { id: 'ancestor', he: 'מאבותיו (כמה דורות קודם)', en: 'Ancestor (generations earlier)', heMany: 'מאבותיו', enMany: 'Ancestors' },
  { id: 'descendant', he: 'מצאצאיו (כמה דורות אחר כך)', en: 'Descendant (generations later)', heMany: 'מצאצאיו', enMany: 'Descendants' },
  { id: 'teacher', he: 'רב / מורה', en: 'Teacher', heMany: 'רבותיו', enMany: 'Teachers' },
  { id: 'student', he: 'תלמיד', en: 'Student', heMany: 'תלמידיו', enMany: 'Students' },
  { id: 'plugta', he: 'בר פלוגתא / חברותא', en: 'Study partner (bar plugta)', heMany: 'בני פלוגתא', enMany: 'Study partners' },
  { id: 'related', he: 'ערך קשור', en: 'Related', heMany: 'ערכים קשורים', enMany: 'Related' },
  { id: 'prophet', he: 'נביא בימיו', en: 'Prophet in his days', heMany: 'נביאים בימיו', enMany: 'Prophets in his days' },
  { id: 'king', he: 'מלך בימיו', en: 'King in his days', heMany: 'מלכים בימיו', enMany: 'Kings in his days' },
];

// Words that change with the person's gender ("רבותיו" / "רבותיה").
export const genderWords = (person, lang) => {
  const female = person.gender === 'female';
  if (lang !== 'he') {
    return {
      teachers: 'Teachers', students: 'Students', plugta: 'study partners', siblings: 'and siblings', family: 'Family',
      spouses: female ? 'Husband' : 'Wives', before: 'Before in the role', after: 'After in the role', succession: 'role',
    };
  }
  return {
    teachers: female ? 'רבותיה' : 'רבותיו',
    students: female ? 'תלמידיה' : 'תלמידיו',
    plugta: 'בני פלוגתא',
    siblings: female ? 'ואחיה' : 'ואחיו',
    family: 'משפחה',
    spouses: female ? 'בעלה' : 'נשותיו',
    before: female ? 'לפניה בתפקיד' : 'לפניו בתפקיד',
    after: female ? 'אחריה בתפקיד' : 'אחריו בתפקיד',
    succession: female ? 'תפקידה' : 'תפקידו',
  };
};

// The title above the family tree, naming only what the person has:
// "משפחה", "משפחה ורבותיו", "משפחה, רבותיו ותלמידיו", "רבותיו ותלמידיו"...
export const familyTitle = (person, lang) => {
  const g = groupRelations(person.relations);
  const w = genderWords(person, lang);
  const parts = [
    (g.parents.length || g.siblings.length || g.spouses.length || g.children.length || g.ancestors.length || g.descendants.length) && w.family,
    g.teachers.length && w.teachers,
    g.students.length && w.students,
    g.plugta.length && w.plugta,
    (successionOf(person).before.length || successionOf(person).after.length) && w.succession,
  ].filter(Boolean);
  if (parts.length <= 1) return parts[0] || '';
  const last = parts[parts.length - 1];
  const rest = parts.slice(0, -1).join(', ');
  return lang === 'he' ? `${rest} ו${last}` : `${rest} and ${last.toLowerCase()}`;
};

// The role's name inside a sentence: "שנות מלוכה" -> "מלוכה",
// "ראש ישיבת סורא" -> "ראשות ישיבת סורא", "Years as judge" -> "judge".
const roleNoun = (label, lang) => {
  const t = (label || '').trim();
  if (lang !== 'he') return t.replace(/^years as /i, '').replace(/^years of /i, '').toLowerCase();
  return t
    .replace(/^שנות /, '')
    .replace(/^ראש /, 'ראשות ')
    .replace(/^גאון /, 'גאונות ');
};

// Before / after, grouped by role (someone with two roles gets two groups),
// each with its own title: "לפניו במלוכה", "אחריו בכהונה גדולה".
export const successionGroups = (person, lang = 'he') => {
  const female = person.gender === 'female';
  const he = lang === 'he';
  return (person.offices || [])
    .filter((o) => o.before?.length || o.after?.length)
    .map((o) => {
      const noun = roleNoun(he ? o.label?.he : o.label?.en || o.label?.he, lang);
      return {
        beforeTitle: he ? `${female ? 'לפניה' : 'לפניו'} ב${noun}` : `Before, as ${noun}`,
        afterTitle: he ? `${female ? 'אחריה' : 'אחריו'} ב${noun}` : `After, as ${noun}`,
        before: o.before || [],
        after: o.after || [],
      };
    });
};

// Everyone before / after this person in any of their roles (no repeats).
export const successionOf = (person) => {
  const collect = (key) => {
    const seen = new Set();
    const out = [];
    for (const o of person.offices || []) {
      for (const p of o[key] || []) {
        const k = p.slug || p.name?.he;
        if (k && !seen.has(k)) {
          seen.add(k);
          out.push(p);
        }
      }
    }
    return out;
  };
  return { before: collect('before'), after: collect('after') };
};

// Splits a person's relations into the groups the family tree uses.
export const groupRelations = (relations = []) => {
  const of = (...types) => relations.filter((r) => types.includes(r.type));
  return {
    parents: of('father', 'mother', 'parent'),
    siblings: of('sibling'),
    spouses: of('spouse'),
    children: of('child'),
    ancestors: of('ancestor'),
    descendants: of('descendant'),
    teachers: of('teacher'),
    students: of('student'),
    plugta: of('plugta'),
  };
};

// The writing direction of a piece of text, from its first letter: 'rtl' for
// Hebrew, 'ltr' for English. Text with no letters at all (years, dashes)
// returns undefined, so it keeps the direction of the page around it.
// (dir="auto" would turn such text left-to-right, even on the Hebrew site.)
export const textDir = (text) => {
  const m = String(text ?? '').match(/[A-Za-z\u00C0-\u024F]|[\u0590-\u05FF\uFB1D-\uFB4F]/);
  if (!m) return undefined;
  return /[A-Za-z\u00C0-\u024F]/.test(m[0]) ? 'ltr' : 'rtl';
};
