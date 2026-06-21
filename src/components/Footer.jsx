import React, { useContext } from 'react';
import { CartContext } from '../context/context';

const Footer = () => {
  const { t, lang } = useContext(CartContext);

  return (
    // Removed the inline style completely
    <footer className="biblical-footer">
      <div className="footer-content">
        <p className="copyright-text">
          {t?.footer_rights || (lang === 'he' ? '© כל הזכויות שמורות' : '© All Rights Reserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;