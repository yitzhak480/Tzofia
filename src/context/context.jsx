import React, { createContext, useState } from 'react';
import { translations } from '../data/translations';
import productsData from '../data.json'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [lang, setLang] = useState('he'); 
  
  // טעינת מילון התרגומים לפי השפה הנוכחית
  const t = translations[lang]; 

  // פונקציה להחלפת שפה
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  // מעבירים את ה-JSON כפי שהוא, בלי לעשות לו .map() מיותר
  // ככה כל המידע (כולל reign_display) זמין תמיד
  const displayProducts = productsData;

  return (
    <CartContext.Provider value={{ 
        lang, 
        setLang, 
        toggleLanguage, 
        t, 
        displayProducts 
    }}>
      {children}
    </CartContext.Provider>
  );
};