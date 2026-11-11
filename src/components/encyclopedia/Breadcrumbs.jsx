import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';

// "Encyclopedia › Kings › Kings of Judah" — every part except the last is a link.
const Breadcrumbs = ({ categories = [], current }) => {
  const { lang } = useContext(CartContext);
  const sep = <span className="encyc-crumb-sep" aria-hidden="true">{lang === 'he' ? '‹' : '›'}</span>;

  return (
    <nav className="encyc-breadcrumbs" aria-label={lang === 'he' ? 'מיקום בדף' : 'Breadcrumb'}>
      <Link to="/encyclopedia">{lang === 'he' ? 'לומדות האילן' : 'Tree Learning Guides'}</Link>
      {categories.map((c) => (
        <React.Fragment key={c._id}>
          {sep}
          <Link to={`/encyclopedia/${c.slug}`}>{tr(c.name, lang)}</Link>
        </React.Fragment>
      ))}
      {current && (
        <>
          {sep}
          <span aria-current="page">{current}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
