import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaScroll, FaEnvelope, FaPhoneAlt, FaCartPlus, FaCheck } from 'react-icons/fa'; 
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Tree = () => {
  const { t, addToCart, lang, cartItems } = useContext(CartContext);
  
  const TREE_ID = 999; 
  const itemInCart = cartItems.find(item => item.id === TREE_ID);
  
  const handleAddToCart = () => {
    const product = {
        id: TREE_ID,
        title: lang === 'he' ? "אילן יוחסין (פוסטר)" : "Family Tree Poster",
        price: 60,
        image: "/images/tree.jpg",
        description: lang === 'he' ? "פוסטר אילן יוחסין מהודר" : "Family Tree Poster"
    };
    
    addToCart(product);
  };

  return (
    <div className="page-wrapper">
      <Header title={t.nav_tree} />

      <main className="tree-page-container-v2">
        
        <div className="tree-scroll-card">
            
            <div className="tree-image-section">
                <div className="gold-frame-wrapper">
                    <img 
                        src="/images/tree.jpg" 
                        alt="Family Tree Poster" 
                        className="tree-poster-image-v2" 
                    />
                </div>
            </div>

            <div className="tree-content-section">
                
                <header className="tree-header-group">
                    <h2 className="tree-title-he">{t.tree_title}</h2>
                    <div className="title-separator"></div>
                </header>

                <div className="tree-size-banner">
                    <FaScroll className="size-icon" />
                    <span className="size-text">{t.tree_size}</span>
                </div>

                <div className="tree-body-text">
                    <p className="desc-he">{t.tree_desc}</p>
                </div>

                <div className="tree-purchase-area">
                    <div className="tree-price-tag">
                        ₪60
                    </div>
                    
                    <button 
                        className={`tree-add-btn ${itemInCart ? 'added' : ''}`} 
                        onClick={handleAddToCart}
                    >
                        {itemInCart ? (
                            <> <FaCheck /> {t.added_to_cart} ({itemInCart.quantity}) </>
                        ) : (
                            <> <FaCartPlus /> {t.add_to_cart} </>
                        )}
                    </button>

                    {itemInCart && (
                        <Link to="/cart" className="tree-view-cart-link">
                           {t.view_cart_tooltip} ➔
                        </Link>
                    )}
                </div>

                <div className="tree-contact-ribbon">
                    <h4 className="contact-heading">{t.contact_label}</h4>
                    <div className="contact-links">
                        <a href="mailto:yitzhak480@gmail.com" className="contact-link-item">
                            <FaEnvelope /> yitzhak480@gmail.com
                        </a>
                        <span className="separator">|</span>
                        <a href="tel:054-8177702" className="contact-link-item">
                            <FaPhoneAlt /> 054-8177702
                        </a>
                    </div>
                </div>

            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Tree;