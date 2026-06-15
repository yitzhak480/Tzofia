import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// ייבוא באותיות קטנות למניעת שגיאות רגישות-לאותיות
import { CartContext } from '../context/context';

const Header = ({ title }) => {
  const { t, toggleLanguage, lang } = useContext(CartContext);

  return (
    <header className="biblical-header">
      
      <button onClick={toggleLanguage} className="lang-toggle-btn">
        {lang === 'he' ? '🇺🇸 English' : '🇮🇱 עברית'}
      </button>

      {/* הלוגו המקורי שלך */}
      <img src="/images/Asset 5.svg" alt="Logo" className="header-logo" />

      <h1 className="header-title">{title}</h1>

      <nav className="header-nav">
        <NavLink to="/" className="nav-item">{t.nav_home}</NavLink>
        <NavLink to="/tree" className="nav-item">{t.nav_tree}</NavLink>
        <NavLink to="/gallery" className="nav-item">{t.nav_gallery}</NavLink>
      </nav>

    </header>
  );
};

export default Header;