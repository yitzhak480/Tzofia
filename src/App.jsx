import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, CartContext } from './context/context';
import { Toaster } from 'react-hot-toast'; 
import Home from './pages/Home';
import Accessibility from './pages/Accessibility';
import Encyclopedia from './pages/encyclopedia/Encyclopedia';
import EncyclopediaCategory from './pages/encyclopedia/EncyclopediaCategory';
import EncyclopediaPerson from './pages/encyclopedia/EncyclopediaPerson';
import Tree from './pages/Tree';
import Cart from './pages/Cart';
import Biblical from './pages/Biblical';
import Gmara from './pages/Gmara';
import About from './pages/About'; // הנה הייבוא של עמוד האודות
import './App.css';

// The admin page (with its text editor) loads only when someone opens /admin.
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));

const MainLayout = ({ children }) => {
  const { lang } = useContext(CartContext);

  useEffect(() => {
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  return <div className={`app-container ${lang}`}>{children}</div>;
};

function App() {
  return (
    <CartProvider>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'var(--color-parchment, #f4e4bc)',
            color: 'var(--color-ink, #2c241b)', 
            border: '2px solid var(--color-gold, #c5a059)', 
            fontFamily: "'Frank Ruhl Libre', serif",
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '16px',
            direction: 'rtl' 
          },
          duration: 3000, 
        }}
      />

      <Router>
        <MainLayout>
          <Routes>
            <Route path="/Biblical" element={<Biblical />} />
            <Route path="/Gmara" element={<Gmara/>} />
            <Route path="/admin" element={<Suspense fallback={<p className="loading-text">טוען...</p>}><AdminPage /></Suspense>} />
            <Route path="/" element={<Home />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route path="/encyclopedia/person/:slug" element={<EncyclopediaPerson />} />
            <Route path="/encyclopedia/:slug" element={<EncyclopediaCategory />} />
            {/* the old Gallery address now leads to the Encyclopedia */}
            <Route path="/gallery" element={<Navigate to="/encyclopedia" replace />} />
            <Route path="/tree" element={<Tree />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/about" element={<About />} /> {/* והנה הנתיב עצמו! */}
          </Routes>
        </MainLayout>
      </Router>
    </CartProvider>
  );
}

export default App;