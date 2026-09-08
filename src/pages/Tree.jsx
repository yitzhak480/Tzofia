import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartContext } from '../context/context';

const Tree = () => {
  const { lang } = useContext(CartContext);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>
          {lang === 'he' ? 'Tzofia Art | אילנות היוחסין' : 'Tzofia Art | Family Trees'}
        </title>
      </Helmet>

      <Header />

      <main className="home-main">
        {/* אזור הפתיח של הדף */}
        <section className="home-hero" style={{ paddingBottom: '2rem' }}>
          <h1>{lang === 'he' ? 'אילנות היוחסין שלנו' : 'Our Family Trees'}</h1>
          <p>
            {lang === 'he' 
              ? 'בחרו את התקופה ההיסטורית שברצונכם לחקור. כל אילן יוחסין הוא תוצר של מחקר מעמיק, שנועד לפרוס בפניכם את תמונת הדורות המלאה.'
              : 'Choose the historical era you wish to explore. Each family tree is the result of deep research, designed to lay out the full picture of the generations.'}
          </p>
        </section>

        {/* תצוגת הכרכים (כרטיסיות רוחביות גדולות) */}
        <section className="trees-showcase-container">
          
{/* כרך 1: תקופת המקרא */}
          <Link to="/Biblical" className="tree-showcase-card">
            <div className="showcase-image-wrapper">
                  <img src="/images/torah-tree.jpg" alt="אילן יוחסין תנ״ך" />
            </div>
            <div className="showcase-content">
              <h2>{lang === 'he' ? 'חלק ראשון: מאדם לתנאים' : 'Volume 1: From Adam to the Tanaim'}</h2>
              <div className="title-separator" style={{ margin: '15px 0' }}></div>
              <p>
                {lang === 'he' 
                  ? 'מאדם וחווה דרך תקופת האבות, יציאת מצרים, שלטון המלכים וחורבן בית ראשון ושני ועד לימי חתימת המשנה.'
                  : 'From Adam and Eve through the era of the Patriarchs, the Exodus, the reigns of the Kings, the destruction of the First and Second Temples, up to the sealing of the Mishna.'}
              </p>
              <span className="showcase-btn">
                {lang === 'he' ? 'צפו באילן המלא ←' : 'View Full Tree ←'}
              </span>
            </div>
          </Link>
          {/* כרך 2: משנה וגאונים */}
          <Link to="/Gmara" className="tree-showcase-card">
            <div className="showcase-image-wrapper">
              {/* אפשר לשנות לתמונה המתאימה בתיקיית public */}
              <img src="../public/images/talmud-tree.jpg" alt="אילן יוחסין משנה וגאונים" />
            </div>
            <div className="showcase-content">
              <h2>{lang === 'he' ? 'חלק שני: אמוראים לגאונים' : 'Volume 2: Mishna to Geonim'}</h2>
              <div className="title-separator" style={{ margin: '15px 0' }}></div>
              <p>
                {lang === 'he' 
                  ? 'הדורות שעיצבו את התורה שבעל פה. מאחרוני התנאים, דרך האמוראים בבבל ובארץ ישראל, ועד תקופת הגאונים.'
                  : 'The generations that shaped the Oral Torah. From the Zugot and Tannaim, through the Amoraim, to the Geonic period.'}
              </p>
              <span className="showcase-btn">
                {lang === 'he' ? 'צפו באילן המלא ←' : 'View Full Tree ←'}
              </span>
            </div>
          </Link>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tree;