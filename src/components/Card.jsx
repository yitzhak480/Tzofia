import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Context';

const Card = ({ id, image, title, price, description }) => {

  const { addToCart, cartItems, t, formatPrice } = useContext(CartContext); 

  const itemInCart = cartItems.find((item) => item.id === id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {

    addToCart({ id, image, title, price });
  };

  return (
    <div className="biblical-card">
        <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
        </div>

        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            
          
            <div className="card-price">{formatPrice(price)}</div>
            
            <p className="card-description">{description}</p>
            
            <div className="card-actions-container" style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                <button 
                    className={`card-button ${quantity > 0 ? 'active' : ''}`} 
                    onClick={handleAddToCart}
                    style={{ flex: 1 }}
                >
                    {quantity > 0 ? `${t.added_to_cart} (${quantity})` : t.add_to_cart}
                </button>

                {quantity > 0 && (
                    <Link to="/cart" className="view-cart-mini-btn" title={t.view_cart_tooltip}>
                        🛒
                    </Link>
                )}
            </div>
        </div>
    </div>
  );
};

export default Card;
