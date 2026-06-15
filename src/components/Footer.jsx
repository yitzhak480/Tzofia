import React, { useContext } from 'react';
// שים לב: שינינו את הנתיב ל-context.jsx עם אותיות קטנות בהתאם לשם הקובץ שלך
import { CartContext } from '../context/context';

const Footer = () => {
  // אנחנו שואבים רק את השפה והתרגומים, בלי שום קשר לעגלה
  const { t, lang } = useContext(CartContext);

  return (
    <footer className="biblical-footer" style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
      <div className="footer-content">
        <p>
          {t?.footer_rights || (lang === 'he' ? '© כל הזכויות שמורות' : '© All Rights Reserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;