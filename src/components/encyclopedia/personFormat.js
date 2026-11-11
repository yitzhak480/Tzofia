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
];

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
