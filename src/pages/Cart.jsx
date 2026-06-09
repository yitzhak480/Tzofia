import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartCard from '../components/CartCard';
import { CartContext } from '../context/Context'; 

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, t, formatPrice } = useContext(CartContext);

 const totalPrice = cartItems.reduce((total, item) => {
   
    const cleanPrice = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;

    return total + (cleanPrice * item.quantity);
  }, 0);
  return (
    <div className="page-wrapper">
      <Header title={t.cart_title} />
      
      <main className="cart-page-container">
        
        <h2 className="cart-heading">{t.order_summary}</h2>

        {cartItems.length === 0 ? (
            <div style={{textAlign: 'center', fontSize: '1.5rem'}}>{t.cart_empty}</div>
        ) : (
            <>
                <div className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <CartCard 
                      key={`${item.id}-${index}`} 
                      title={item.title}
                      price={formatPrice(item.price)}
                      image={item.image}
                      quantity={item.quantity}
                      onIncrease={() => increaseQuantity(item.id)}
                      onDecrease={() => decreaseQuantity(item.id)}
                      onRemove={() => removeFromCart(item.id)}
                    />
                  ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span>{t.cart_total}</span>
                        <span className="total-price">{formatPrice(totalPrice)}</span>
                    </div>
                    <button className="checkout-button">{t.cart_checkout}</button>
                </div>
            </>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Cart;