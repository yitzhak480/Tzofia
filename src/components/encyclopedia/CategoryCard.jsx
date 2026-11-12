import React, { useContext } from 'react';
import { CartContext } from '../../context/context';
import { tr } from '../../api';
import CardBack from './CardBack';
import PictureCard from '../PictureCard';

// A category card, in the site's picture-card design. A category without a
// picture shows the patterned card back in its colour.
const CategoryCard = ({ category }) => {
  const { lang } = useContext(CartContext);
  const name = tr(category.name, lang);
  const description = tr(category.description, lang);

  return (
    <PictureCard to={`/encyclopedia/${category.slug}`} image={category.image?.url} alt={name} title={name} text={description}>
      <CardBack color={category.cardColor} />
    </PictureCard>
  );
};

export default CategoryCard;
