import React from 'react';

// הוספנו את learnMoreText לרשימה
const Card = ({ image, title, reignDisplay, description, wikiLink, learnMoreText }) => {
  return (
    <div className="biblical-card">
        <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
        </div>

        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            
            {reignDisplay && (
                <div className="card-reign">
                    {reignDisplay}
                </div>
            )}
            
            <p className="card-description">{description}</p>
            
            {wikiLink && (
                <a 
                    href={wikiLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="wiki-learn-more-btn"
                >
                    {/* מדפיס את הטקסט המותאם לשפה שהגיע מהגלריה */}
                    {learnMoreText}
                </a>
            )}
        </div>
    </div>
  );
};

export default Card;