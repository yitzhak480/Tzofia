import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';
import { cardLine, cardSummary } from './personFormat';
import CardBack from './CardBack';
import CategoryIcon from './CategoryIcon';
import { iconForCategory } from './categoryIcons';
import { CARD_COLORS, entryColor } from './cardColors';

// A person card in the same style as the old Kings gallery cards.
// Without a picture it shows a decorated card back in the entry's colour,
// with the symbol of its category. The whole card opens the person's page.
const PersonCard = ({ person, category }) => {
  const { lang } = useContext(CartContext);
  const name = tr(person.name, lang);
  const line = cardLine(person, lang);
  const summary = cardSummary(person, lang);
  const color = entryColor(person);

  return (
    <Link to={`/encyclopedia/person/${person.slug}`} className="biblical-card encyc-person-card">
      <div className={`card-image-container ${person.mainImage?.url ? '' : 'encyc-card-art'}`}>
        {person.mainImage?.url ? (
          <img src={person.mainImage.url} alt={name} className="card-image" />
        ) : (
          <>
            <CardBack color={color} medallion={false} />
            <div className="encyc-card-symbol" style={{ color: CARD_COLORS[color].marble ? '#8a6a2c' : '#d9b56b' }}>
              <CategoryIcon kind={iconForCategory(category?.slug, category?.icon)} />
            </div>
          </>
        )}
      </div>

      <div className="card-content">
        <h2 className="card-title" dir="auto">{name}</h2>
        {line && <div className="card-reign" dir="auto">{line}</div>}
        {summary && <p className="card-description" dir="auto">{summary}</p>}
        <span className="wiki-learn-more-btn encyc-card-btn">
          {lang === 'he' ? 'קרא עוד' : 'Read More'}
        </span>
      </div>
    </Link>
  );
};

export default PersonCard;
