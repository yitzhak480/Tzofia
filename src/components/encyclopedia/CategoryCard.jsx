import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
import { tr } from '../../api';

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
          <div className="encyc-default-art" aria-hidden="true">
            <span className="encyc-default-ornament">❦</span>
            <span className="encyc-default-letter">{name.charAt(0)}</span>
            <span className="encyc-default-ornament is-flipped">❦</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <div className="title-separator"></div>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
};

export default CategoryCard;
