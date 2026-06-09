import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import Tree from "./pages/Tree"; 
import { CartProvider, CartContext } from "./context/Context"; 
import { useContext } from "react";


const MainLayout = () => {
  const { lang } = useContext(CartContext);
  
  return (
    
    <div dir={lang === 'he' ? 'rtl' : 'ltr'} className={lang}>
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tree" element={<Tree />} /> 
      </Routes>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;