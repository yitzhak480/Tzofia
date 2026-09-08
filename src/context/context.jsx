import React, { createContext, useState, useEffect } from 'react'; 
import { translations } from '../data/translations';
import productsData from '../data.json'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [lang, setLang] = useState('he'); 
  
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

  const displayProducts = productsData;

  return (
    <CartContext.Provider value={{ 
        lang, 
        setLang, 
        toggleLanguage, 
        t, 
        displayProducts,
        cartItems,      
        addToCart,      
        removeFromCart,
        clearCart // הוספנו את זה כאן כדי שיהיה זמין לשימוש ב-Cart.jsx
    }}>
      {children}
    </CartContext.Provider>
  );
};