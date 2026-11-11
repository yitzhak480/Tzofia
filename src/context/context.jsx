import React, { createContext, useState, useEffect } from 'react'; 
import { translations } from '../data/translations';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // The chosen language is remembered, so refreshing the page keeps it.
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('tzofia_lang') === 'en' ? 'en' : 'he';
    } catch {
      return 'he';
    }
  });
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("tzofia_cart");
    return savedCart ? JSON.parse(savedCart) : []; 
  });
  
  const t = translations[lang]; 

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  useEffect(() => {
    localStorage.setItem("tzofia_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('tzofia_lang', lang);
    } catch {
      // private browsing: the language just isn't remembered
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const addToCart = (product, quantity, price) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity, price }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
        lang, 
        setLang, 
        toggleLanguage, 
        t,
        cartItems,      
        addToCart,      
        removeFromCart,
        clearCart // הוספנו את זה כאן כדי שיהיה זמין לשימוש ב-Cart.jsx
    }}>
      {children}
    </CartContext.Provider>
  );
};