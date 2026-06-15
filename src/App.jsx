import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, CartContext } from './context/Context';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Tree from './pages/Tree';
import './App.css';
// קומפוננטת המבנה שמנהלת אך ורק את כיוון הדף (RTL/LTR) לפי השפה, בלי שום קשר לעגלה
const MainLayout = ({ children }) => {
  const { lang } = useContext(CartContext);

  // משנה את כיווניות הגלישה בדפדפן באופן אוטומטי כשמחליפים שפה
  useEffect(() => {
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  return <div className={`app-container ${lang}`}>{children}</div>;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <MainLayout>
          <Routes>
            {/* הדרכים הקיים באתר - נקיות לחלוטין מדפי עגלה או צור קשר */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tree" element={<Tree />} />
          </Routes>
        </MainLayout>
      </Router>
    </CartProvider>
  );
}

export default App;