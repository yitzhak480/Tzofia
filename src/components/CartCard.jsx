import React from 'react';

const CartCard = ({ image, title, price, quantity, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="cart-card-details">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">{price}</p>
      </div>

      <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '20px' }}>
        <button className="qty-btn" onClick={onDecrease}>-</button>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{quantity}</span>
        <button className="qty-btn" onClick={onIncrease}>+</button>
      </div>

      <button className="remove-item-btn" onClick={onRemove}>
        ✕
      </button>
    </div>
  );
};

export default CartCard;