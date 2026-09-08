import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; 
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartContext } from '../context/context';

const Home = () => {
  const { lang } = useContext(CartContext);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>
          {lang === 'he' ? 'Tzofia Art | אילנות יוחסין, אמנות והיסטוריה יהודית' : 'Tzofia Art | Family Trees, Art & Jewish History'}
        </title>
      </Helmet>

      <Header title="" />

      <main className="home-main">
        
        {/* אזור הפתיח */}
        <section className="home-hero">
          <h1>{lang === 'he' ? 'ברוכים הבאים לצופיה ארט' : 'Welcome to Tzofia Art'}</h1>
          <p>
            {lang === 'he' 
              ? 'מזמינים אתכם לצלול אל מעמקי ההיסטוריה היהודית דרך אילנות יוחסין ויזואליים. כאן תוכלו לחקור את השורשים שלנו, להכיר את הדמויות המרכזיות לאורך הדורות, ולהביא את ההיסטוריה אליכם הביתה.'
              : 'We invite you to dive into the depths of Jewish history through visual family trees. Here you can explore our roots, meet key figures, and bring history into your home.'}
          </p>
        </section>

        {/* רשת הכרטיסיות */}
        <section className="home-cards-grid">
          
          {/* כרטיסייה 1: אילנות היוחסין -> מוביל לדף העצים */}
          <Link to="/tree" className="tzofia-card">
            <div className="card-image-wrapper">
              <img src="/images/tilt.jpg" alt="רכישת אילנות היוחסין" />
            </div>
            <div className="card-content">
              <h2>{lang === 'he' ? 'אילנות היוחסין שלנו' : 'Our Family Trees'}</h2>
              <div className="title-separator"></div>
              <p>
                {lang === 'he' 
                  ? 'צפו בשני הכרכים המקיפים שלנו: תקופת המקרא, ותקופת המשנה והגאונים.'
                  : 'View our two comprehensive volumes: The Biblical Era, and the Mishnaic to Geonic Era.'}
              </p>
            </div>
          </Link>

          {/* כרטיסייה 2: לומדות האילן -> מוביל זמנית לגלריה */}
          <Link to="/gallery" className="tzofia-card">
            <div className="card-image-wrapper">
              <img src="/images/temple.jpg" alt="לומדות האילן" />
            </div>
            <div className="card-content">
              <h2>{lang === 'he' ? 'לומדות האילן' : 'Tree Learning Guides'}</h2>
              <div className="title-separator"></div>
              <p>
                {lang === 'he' 
                  ? 'העמיקו את הידע: הכירו את הקבוצות והדמויות המופיעות באילנות שלנו ולמדו עליהן בהרחבה.'
                  : 'Deepen your knowledge: Get to know the groups and figures featured in our trees and learn about them in detail.'}
              </p>
            </div>
          </Link>

          {/* כרטיסייה 3: אודותינו -> מוביל לדף שבנינו הרגע */}
          <Link to="/about" className="tzofia-card">
            <div className="card-image-wrapper">
              <img src="/images/knesset.jpg" alt="אודותינו" />
            </div>
            <div className="card-content">
              <h2>{lang === 'he' ? 'אודותינו' : 'About Us'}</h2>
              <div className="title-separator"></div>
              <p>
                {lang === 'he' 
                  ? 'קראו על החזון מאחורי Tzofia Art, על תהליך המחקר המעמיק, והכירו את הצוות שמאחורי היצירות.'
                  : 'Read about the vision behind Tzofia Art, the deep research process, and meet the team behind the creations.'}
              </p>
            </div>
          </Link>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;