import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PictureCard from "../components/PictureCard";
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
        <section className="picture-cards">
          <PictureCard
            to="/tree" image="/images/tilt.jpg" alt={lang === 'he' ? 'אילנות היוחסין' : 'Our family trees'}
            title={lang === 'he' ? 'אילנות היוחסין שלנו' : 'Our Family Trees'}
            text={lang === 'he'
              ? 'צפו בשני הכרכים המקיפים שלנו: תקופת המקרא, ותקופת המשנה והגאונים.'
              : 'View our two comprehensive volumes: The Biblical Era, and the Mishnaic to Geonic Era.'}
          />
          <PictureCard
            to="/encyclopedia" image="/images/temple.jpg" alt={lang === 'he' ? 'לומדות האילן' : 'Tree Learning Guides'}
            title={lang === 'he' ? 'לומדות האילן' : 'Tree Learning Guides'}
            text={lang === 'he'
              ? 'העמיקו את הידע: הכירו את הקבוצות והדמויות המופיעות באילנות שלנו ולמדו עליהן בהרחבה.'
              : 'Deepen your knowledge: Get to know the groups and figures featured in our trees and learn about them in detail.'}
          />
          <PictureCard
            to="/about" image="/images/knesset.jpg" alt={lang === 'he' ? 'אודותינו' : 'About Us'}
            title={lang === 'he' ? 'אודותינו' : 'About Us'}
            text={lang === 'he'
              ? 'קראו על החזון מאחורי Tzofia Art, על תהליך המחקר המעמיק, והכירו את הצוות שמאחורי היצירות.'
              : 'Read about the vision behind Tzofia Art, the deep research process, and meet the team behind the creations.'}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;