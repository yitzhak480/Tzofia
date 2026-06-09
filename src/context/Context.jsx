// ייבוא של כלים נחוצים מהספרייה של ריאקט
import React, { createContext, useState } from 'react';
// ייבוא של התרגומים מקובץ חיצוני
import { translations } from '../data/translations';
// ייבוא של נתוני המוצרים מקובץ JSON
import productsData from '../data.json'; 

// יצירת קונטקסט חדש שישמש לשיתוף נתונים בין קומפוננטות
export const CartContext = createContext();

// יצירת קומפוננטת ספק שתעטוף את האפליקציה ותספק את הנתונים
export const CartProvider = ({ children }) => {
  // הגדרת משתנה מצב לשפה הנוכחית, עם ערך התחלתי 'he' (עברית)
  const [lang, setLang] = useState('he'); 
  
  // בחירת התרגום המתאים על פי השפה הנוכחית
  const t = translations[lang]; 

  // פונקציה לשינוי השפה בין עברית לאנגלית
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  // יצירת מערך מוצרים לתצוגה עם התרגומים הנכונים
  const displayProducts = productsData.map(product => ({
    id: product.id, // מזהה ייחודי של המוצר
    image: product.image, // נתיב לתמונת המוצר
    price: product.price, // מחיר המוצר
    title: product[lang].title, // שם המוצר בשפה הנוכחית
    description: product[lang].description // תיאור המוצר בשפה הנוכחית
  }));

  // פונקציה לעיצוב מחיר עם סמל שקל
  const formatPrice = (price) => lang === 'he' ? `₪${price}` : `₪${price}`;

  // הגדרת משתנה מצב לעגלת הקניות, עם ערך התחלתי של מערך ריק
  const [cartItems, setCartItems] = useState([]);

  // פונקציה להוספת מוצר לעגלת הקניות
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // בדיקה אם המוצר כבר קיים בעגלה
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // אם המוצר קיים, הגדלת הכמות שלו
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      // אם המוצר לא קיים, הוספתו לעגלה עם כמות 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // פונקציה להסרת מוצר מהעגלה
  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  
  // פונקציה להגדלת כמות של מוצר בעגלה
  const increaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // פונקציה להקטנת כמות של מוצר בעגלה, עם הגבלה למינימום 1
  const decreaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item));
  };

  // החזרת קומפוננטת הספק עם כל הנתונים והפונקציות שיועברו לקומפוננטות הילדים
  return (
    <CartContext.Provider value={{ 
        cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,
        lang, setLang, toggleLanguage, t,
        displayProducts, formatPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};