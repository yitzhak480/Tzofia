import React from 'react';
import { Link } from 'react-router-dom';
import { textDir } from './encyclopedia/personFormat';

// The site's picture card (home page, trees page, encyclopedia categories):
// the picture fills the card inside a parchment mount with gold corners, and
// the title (in gold, with a small ◆) and the text sit on a soft shade at the
// bottom. Give it an image, or children for the picture area (e.g. CardBack).
// shape="poster" keeps the tall shape of the tree posters.
const PictureCard = ({ to, image, alt = '', title, text, cta, shape, children }) => (
  <Link to={to} className={`picture-card ${shape === 'poster' ? 'picture-card-poster' : ''} ${image ? '' : 'picture-card-art'}`}>
    <div className="picture-card-img">
      {image ? <img src={image} alt={alt} /> : children}
    </div>
    <div className="picture-card-body">
      <h2 dir={textDir(title)}>{title}</h2>
      <div className="picture-card-sep" />
      {text && <p dir={textDir(text)}>{text}</p>}
      {cta && <span className="picture-card-cta">{cta}</span>}
    </div>
    <span className="picture-card-corners" aria-hidden="true" />
  </Link>
);

export default PictureCard;
