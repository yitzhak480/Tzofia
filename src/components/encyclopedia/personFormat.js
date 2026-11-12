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
  { id: 'teacher', he: 'רב / מורה', en: 'Teacher', heMany: 'רבותיו', enMany: 'Teachers' },
  { id: 'student', he: 'תלמיד', en: 'Student', heMany: 'תלמידיו', enMany: 'Students' },
  { id: 'related', he: 'ערך קשור', en: 'Related', heMany: 'ערכים קשורים', enMany: 'Related' },
];

// Words that change with the person's gender ("רבותיו" / "רבותיה").
export const genderWords = (person, lang) => {
  const female = person.gender === 'female';
  if (lang !== 'he') {
    return {
      teachers: 'Teachers', students: 'Students', siblings: 'and siblings', family: 'Family',
      spouses: female ? 'Husband' : 'Wives', before: 'Before in the role', after: 'After in the role', succession: 'role',
    };
  }
  return {
    teachers: female ? 'רבותיה' : 'רבותיו',
    students: female ? 'תלמידיה' : 'תלמידיו',
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
    (g.parents.length || g.siblings.length || g.spouses.length || g.children.length) && w.family,
    g.teachers.length && w.teachers,
    g.students.length && w.students,
    (successionOf(person).before.length || successionOf(person).after.length) && w.succession,
  ].filter(Boolean);
  if (parts.length <= 1) return parts[0] || '';
  const last = parts[parts.length - 1];
  const rest = parts.slice(0, -1).join(', ');
  return lang === 'he' ? `${rest} ו${last}` : `${rest} and ${last.toLowerCase()}`;
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
    teachers: of('teacher'),
    students: of('student'),
  };
};
