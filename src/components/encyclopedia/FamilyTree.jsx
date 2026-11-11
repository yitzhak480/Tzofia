import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';
import { genderWords, groupRelations } from './personFormat';

// A small family tree: teachers on top, parents, the person among the
// siblings, spouses, children, and students at the bottom.
// Names that have a page in the encyclopedia are links.
const FamilyTree = ({ person, name }) => {
  const { lang } = useContext(CartContext);
  const he = lang === 'he';
  const g = groupRelations(person.relations);
  const w = genderWords(person, lang);

  const chip = (r, i) => {
    const label = tr(r.name, lang);
    return r.slug ? (
      <Link key={`${r.slug}-${i}`} to={`/encyclopedia/person/${r.slug}`} className="encyc-chip is-link" dir="auto">{label}</Link>
    ) : (
      <span key={`${label}-${i}`} className="encyc-chip" dir="auto">{label}</span>
    );
  };

  const row = (title, items, extraClass = '') =>
    items.length > 0 && (
      <div className={`encyc-family-group ${extraClass}`}>
        <div className="encyc-family-label">{title}</div>
        <div className="encyc-family-row">{items.map(chip)}</div>
      </div>
    );

  const half = Math.ceil(g.siblings.length / 2);
  const line = <div className="encyc-family-line" aria-hidden="true" />;

  return (
    <div className="encyc-family">
      {row(w.teachers, g.teachers, 'is-side')}
      {g.teachers.length > 0 && line}
      {row(he ? 'הורים' : 'Parents', g.parents)}
      {g.parents.length > 0 && line}

      <div className="encyc-family-group">
        {g.siblings.length > 0 && <div className="encyc-family-label">{w.siblings}</div>}
        <div className="encyc-family-row">
          {g.siblings.slice(0, half).map(chip)}
          <span className="encyc-chip encyc-chip-self" dir="auto">{name}</span>
          {g.siblings.slice(half).map((r, i) => chip(r, i + half))}
        </div>
      </div>

      {row(he ? 'בני זוג' : 'Spouses', g.spouses, 'is-side')}
      {g.children.length > 0 && line}
      {row(he ? 'ילדים' : 'Children', g.children)}
      {g.students.length > 0 && line}
      {row(w.students, g.students, 'is-side')}
    </div>
  );
};

export default FamilyTree;
