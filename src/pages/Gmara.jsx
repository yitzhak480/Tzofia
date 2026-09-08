import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaScroll,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
  FaGem, // האייקון החדש שהוספנו
} from "react-icons/fa";
import { CartContext } from "../context/context";
import toast from 'react-hot-toast';
const Gmara = () => {
  const { t, lang, addToCart } = useContext(CartContext);
  // ניהול מצב הלייטבוקס
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- ניהול כמות ומחיר (זה מה שהיה חסר והפיל את המסך!) ---
  const [quantity, setQuantity] = useState(1);
  const basePrice = 65;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // מערך התמונות של כרך ב'
  const images = [
    "/images/talmud-tree.jpg",
    "/images/orange.jpg",
    "/images/red.jpg",
    "/images/green.jpg",
  ];

  // פונקציות לשליטה על הלייטבוקס
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // מאזין למקלדת
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;

      if (e.key === "ArrowRight") {
        prevImage();
      } else if (e.key === "ArrowLeft") {
        nextImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  // פונקציה להוספה לעגלה
  const handleAddToCart = () => {
    const product = {
      id: "gmara", // מזהה ייחודי לכרך ב'
      title: t?.gmara_title,
      image: "/images/talmud-tree.jpg", // התמונה של כרך ב'
    };

    addToCart(product, quantity, basePrice);

  toast.success(lang === 'he' ? 'נוסף לעגלת הקניות בהצלחה!' : 'Added to cart successfully!', {
  icon: '🛒',});
  };

  // SEO לכרך ב'
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: t?.gmara_title,
    image: "https://tzofia.art/images/talmud-tree.jpg", // עדכנתי לשם התמונה הנכון שלך
    description: t?.gmara_desc,
    brand: {
      "@type": "Brand",
      name: "Tzofia Art",
    },
    offers: {
      "@type": "Offer",
      url: "https://tzofia.art/Gmara",
      priceCurrency: "ILS",
      price: "60",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="page-wrapper" dir={lang === "he" ? "rtl" : "ltr"}>
      <Helmet>
        <title>
          {t?.gmara_title ? `${t.gmara_title} | Tzofia Art` : "Tzofia Art"}
        </title>
        <meta name="description" content={t?.gmara_desc} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header title={t?.gmara_title} />

      <main className="product-page-container">
        <header className="product-page-header">
      <h1 className="main-product-title long-title">{t?.gmara_title}</h1>
          <div className="title-separator"></div>
        </header>

        <div className="product-split-layout">
          <div className="product-gallery">
            <div className="main-poster-frame" onClick={() => openLightbox(0)}>
              <img
                src={images[0]}
                alt="אילן יוחסין מתקופת המשנה - תמונה ראשית"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className="thumbnails-column">
              <div className="thumb-frame" onClick={() => openLightbox(1)}>
                <img
                  src={images[1]}
                  alt="זום אין 1"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="thumb-frame" onClick={() => openLightbox(2)}>
                <img
                  src={images[2]}
                  alt="זום אין 2"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="thumb-frame" onClick={() => openLightbox(3)}>
                <img
                  src={images[3]}
                  alt="זום אין 3"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>

          <div className="product-content">
            <div className="product-info-top">
              <div className="product-description">
                {/* תוקן למשיכת התיאור של הגמרא */}
                <p className="desc-he">{t?.gmara_desc}</p>
              </div>

              <div className="product-sources">
                {/* תוקן למשיכת המקורות של הגמרא */}
                <p>{t?.gmara_sources}</p>
              </div>
              <div className="product-specs">
                <div className="spec-item">
                  <FaGem className="spec-icon" />
                  <span className="spec-text">{t?.tree_material}</span>
                </div>
                <div className="spec-item">
                  <FaScroll className="spec-icon" />
                  <span className="spec-text">
                    {t?.tree_size || "91x61 cm"}
                  </span>
                </div>
              </div>
            </div>

            <div className="ecommerce-section">
              <div className="purchase-row">
                <div className="product-price-tag">₪{basePrice * quantity}</div>

                <div className="custom-quantity-selector">
                  <label className="quantity-label">
                    {lang === "he" ? "כמות:" : "Quantity:"}
                  </label>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="qty-number">{quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                {lang === "he" ? "הוספה לסל הקניות" : "Add to Cart"}
              </button>

              <div className="secure-checkout">
             
              </div>
            </div>
          </div>
        </div>
      </main>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <FaChevronRight />
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex]}
              alt="תצוגה מוגדלת"
              className="lightbox-image"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <FaChevronLeft />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gmara;
