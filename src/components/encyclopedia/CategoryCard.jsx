import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';
import CardBack from './CardBack';

// A category card in the same style as the cards on the Home page.
const CategoryCard = ({ category }) => {
  const { lang } = useContext(CartContext);
  const name = tr(category.name, lang);
  const description = tr(category.description, lang);

  return (
    <Link to={`/encyclopedia/${category.slug}`} className="tzofia-card encyc-category-card">
      <div className={`card-image-wrapper ${category.image?.url ? '' : 'encyc-no-image'}`}>
        {category.image?.url ? (
          <img src={category.image.url} alt={name} />
        ) : (
          // Default design when the category has no picture yet.
          <CardBack color={category.cardColor} />
        )}
      </div>
      <div className="card-content">
        <h2 dir="auto">{name}</h2>
        <div className="title-separator"></div>
        {description && <p dir="auto">{description}</p>}
      </div>
    </Link>
  );
};

export default CategoryCard;
