import React, { useContext } from 'react';
import { CartContext } from '../context/context';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaGlobe, FaHome } from 'react-icons/fa'; // הוספנו את אייקון הבית

const Header = () => {
  const { toggleLanguage, lang, cartItems } = useContext(CartContext);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // מביא לנו את הנתיב הנוכחי שהלקוח נמצא בו
  const location = useLocation();

  return (
    <header className="biblical-header">
      
      <div className="header-tools">
        
        {/* כפתור שפה (תמיד מופיע, יהיה הכי שמאלי) */}
        <button onClick={toggleLanguage} className="square-tool-btn" title={lang === 'he' ? 'Change to English' : 'החלף לעברית'}>
          <FaGlobe className="tool-icon" />
          {/* שינינו מ-HE ל-עב */}
          <span className="tool-text">{lang === 'he' ? 'EN' : 'עב'}</span>
        </button>

        {/* כפתור עגלה - מופיע רק אם אנחנו *לא* בדף העגלה */}
        {location.pathname !== '/cart' && (
          <Link to="/cart" className="square-tool-btn cart-link-btn" title={lang === 'he' ? 'עגלת קניות' : 'Shopping Cart'}>
            <FaShoppingCart className="tool-icon" />
            <span className="tool-text">{lang === 'he' ? 'סל' : 'Cart'}</span>
            {totalItemsInCart > 0 && (
              <span className="cart-badge">{totalItemsInCart}</span>
            )}
          </Link>
        )}

        {/* כפתור בית - מופיע רק אם אנחנו *לא* בדף הבית */}
        {location.pathname !== '/' && (
          <Link to="/" className="square-tool-btn" title={lang === 'he' ? 'דף הבית' : 'Home'}>
            <FaHome className="tool-icon" />
            <span className="tool-text">{lang === 'he' ? 'בית' : 'Home'}</span>
          </Link>
        )}

      </div>

      <Link to="/" className="logo-link">
        <img src="/images/Asset 5.svg" alt="Tzofia Art Logo" className="header-logo" />
      </Link>
      
    </header>
  );
};

export default Header;