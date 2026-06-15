import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
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

  // יצירת סכמת המוצר עבור גוגל בצורה דינמית
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "אילן יוחסין תנ\"כי ותורני - מאדם עד רבי יהודה הנשיא",
    "image": "https://tzofia.art/images/tree.jpg",
    "description": "אילן יוחסין תנ\"כי ותורני מהודר המציג את השושלת המפוארת מאדם הראשון ועד רבי יהודה הנשיא.",
    "brand": {
      "@type": "Brand",
      "name": "Tzofia Art"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://tzofia.art", // ניתן לעדכן לנתיב המדויק של העמוד אם קיים
      "priceCurrency": "ILS",
      "price": "60",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="page-wrapper">
      
      {/* אזור ה-SEO שמזריק נתונים ל-Head של העמוד */}
      <Helmet>
        <title>{lang === 'he' ? 'אילן יוחסין תנ"כי ותורני - מאדם עד רבי יהודה הנשיא | Tzofia Art' : 'Biblical Family Tree | Tzofia Art'}</title>
        <meta name="description" content={lang === 'he' ? 'מחפשים אילן יוחסין תורני? גלו את השושלת המפוארת מאדם הראשון ועד רבי יהודה הנשיא בעיצוב מרהיב מבית Tzofia Art. היכנסו לפרטים והזמנה.' : 'Discover the biblical family tree poster from Adam to Rabbi Yehuda HaNasi.'} />
        
        {/* קוד Schema שיעזור לגוגל להציג את המחיר והמוצר בתוצאות החיפוש */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header title={t.nav_tree} />

      <main className="tree-page-container-v2">
        
        <div className="tree-scroll-card">
            
            <div className="tree-image-section">
                <div className="gold-frame-wrapper">
                    <img 
                        src="/images/tree.jpg" 
                        /* שילבנו את מילות המפתח בטקסט החלופי של התמונה */
                        alt={lang === 'he' ? 'אילן יוחסין תנ"כי ותורני מאדם עד רבי יהודה הנשיא' : 'Biblical Family Tree Poster'} 
                        className="tree-poster-image-v2" 
                    />
                </div>
            </div>

            <div className="tree-content-section">
                
                <header className="tree-header-group">
                    {/* שונה מ-H2 ל-H1 כי זו הכותרת החשובה ביותר בעמוד */}
                    <h1 className="tree-title-he">{t.tree_title}</h1>
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