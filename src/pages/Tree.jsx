import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaScroll, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; 
// ייבוא הקונטקסט עם אותיות קטנות בהתאם לנתיב המעודכן
import { CartContext } from '../context/context'; 

const Tree = () => {
  // מושכים אך ורק את השפה והתרגומים
  const { t, lang } = useContext(CartContext);

  // סכמת המוצר עבור גוגל (השארתי את זה כי זה מצוין ל-SEO ולקידום)
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
      "url": "https://tzofia.art", 
      "priceCurrency": "ILS",
      "price": "60",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="page-wrapper">
      
      <Helmet>
        <title>{lang === 'he' ? 'אילן יוחסין תנ"כי ותורני - מאדם עד רבי יהודה הנשיא | Tzofia Art' : 'Biblical Family Tree | Tzofia Art'}</title>
        <meta name="description" content={lang === 'he' ? 'מחפשים אילן יוחסין תורני? גלו את השושלת המפוארת מאדם הראשון ועד רבי יהודה הנשיא בעיצוב מרהיב מבית Tzofia Art. היכנסו לפרטים והזמנה.' : 'Discover the biblical family tree poster from Adam to Rabbi Yehuda HaNasi.'} />
        
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header title={t?.nav_tree || (lang === 'he' ? 'האילן התנ"כי' : 'The Tree')} />

      <main className="tree-page-container-v2">
        
        <div className="tree-scroll-card">
            
            <div className="tree-image-section">
                <div className="gold-frame-wrapper">
                    <img 
                        src="/images/tree.jpg" 
                        alt={lang === 'he' ? 'אילן יוחסין תנ"כי ותורני מאדם עד רבי יהודה הנשיא' : 'Biblical Family Tree Poster'} 
                        className="tree-poster-image-v2" 
                    />
                </div>
            </div>

            <div className="tree-content-section">
                
                <header className="tree-header-group">
                    <h1 className="tree-title-he">{t?.tree_title || (lang === 'he' ? 'אילן יוחסין תנ"כי' : 'Biblical Family Tree')}</h1>
                    <div className="title-separator"></div>
                </header>

                <div className="tree-size-banner">
                    <FaScroll className="size-icon" />
                    <span className="size-text">{t?.tree_size || '100x70 cm'}</span>
                </div>

                <div className="tree-body-text">
                    <p className="desc-he">{t?.tree_desc}</p>
                </div>

                {/* אזור המחיר נשאר נקי וללא כפתורי הוספה לעגלה */}
                <div className="tree-purchase-area">
                    <div className="tree-price-tag">
                        ₪60
                    </div>
                </div>

                <div className="tree-contact-ribbon">
                    <h4 className="contact-heading">{t?.contact_label || (lang === 'he' ? 'לרכישה ופרטים נוספים:' : 'For orders and details:')}</h4>
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