import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';
import { cardLine, cardSummary } from './personFormat';

// A person card in the same style as the old Kings gallery cards.
// The whole card opens the person's page.
const PersonCard = ({ person }) => {
  const { lang } = useContext(CartContext);
  const name = tr(person.name, lang);
  const line = cardLine(person, lang);
  const summary = cardSummary(person, lang);

  return (
    <Link to={`/encyclopedia/person/${person.slug}`} className="biblical-card encyc-person-card">
      <div className={`card-image-container ${person.mainImage?.url ? '' : 'encyc-card-no-image'}`}>
        {person.mainImage?.url ? (
          <img src={person.mainImage.url} alt={name} className="card-image" />
        ) : (
          <span className="encyc-card-initial" aria-hidden="true">{name.charAt(0)}</span>
        )}
      </div>

      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        {line && <div className="card-reign">{line}</div>}
        {summary && <p className="card-description">{summary}</p>}
        <span className="wiki-learn-more-btn encyc-card-btn">
          {lang === 'he' ? 'קרא עוד' : 'Read More'}
        </span>
      </div>
    </Link>
  );
};

export default PersonCard;
