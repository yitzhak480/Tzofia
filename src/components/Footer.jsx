import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // הוספנו את הייבוא הזה
import { CartContext } from '../context/context';

const Footer = () => {
  const { t, lang } = useContext(CartContext);

  return (
    <footer className="biblical-footer">
      {/* הוספתי display: flex כדי שהם ישבו יפה אחד מעל השני במרכז */}
      <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <p className="copyright-text" style={{ margin: 0 }}>
          {t?.footer_rights || (lang === 'he' ? '© כל הזכויות שמורות ליצחק צופיוף - צופיה ארט' : '© All Rights Reserved')}
        </p>
        
        {/* קישור להצהרת הנגישות */}
        <Link 
          to="/accessibility" 
          style={{ 
            fontSize: '0.9rem', 
            color: 'inherit', 
            textDecoration: 'underline',
            opacity: 0.8 /* עושה את זה טיפה יותר עדין מזכויות היוצרים */
          }}
          aria-label={lang === 'he' ? 'קרא את הצהרת הנגישות שלנו' : 'Read our accessibility statement'}
        >
          {lang === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;