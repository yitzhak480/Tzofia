import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; 
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaBookOpen, FaSearch, FaHistory, FaInfoCircle } from 'react-icons/fa'; 
// ייבוא הקונטקסט שלנו
import { CartContext } from '../context/context';

const Home = () => {
  // מושכים את השפה הנוכחית
  const { lang } = useContext(CartContext);

  return (
    <div className="page-wrapper">
      
      <Helmet>
        <title>
          {lang === 'he' 
            ? 'Tzofia Art | אילנות יוחסין, אמנות והיסטוריה יהודית' 
            : 'Tzofia Art | Family Trees, Art & Jewish History'}
        </title>
        <meta 
          name="description" 
          content={lang === 'he' 
            ? 'ברוכים הבאים לצופיה ארט. גלו את הפאזל המרתק של ההיסטוריה יהודית דרך אילנות יוחסין מעוצבים המבוססים על מחקר מעמיק, כנות מחקרית וערך חינוכי.' 
            : 'Welcome to Tzofia Art. Discover the fascinating puzzle of Jewish history through beautifully designed family trees based on deep research, academic honesty, and educational value.'} 
        />
      </Helmet>

      {/* כותרת מותאמת אישית ל-Header בעמוד הבית אפשר להשאיר את הלוגו לדבר בעד עצמו */}
      <Header title="" />

      <main className="home-main">
        
        {/* אזור פתיחה (Hero) */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              {lang === 'he' ? (
                <>לגלות את השורשים. <br/>לחיות את ההיסטוריה.</>
              ) : (
                <>Discover Your Roots. <br/>Live the History.</>
              )}
            </h1>
            <p>
              {lang === 'he' 
                ? 'החיבור לעבר הוא הפאזל המרתק מכל. מתוך מסע עמוק של חקר שורשים, נולד החזון של צופיה ארט: להפוך את ההיסטוריה, התנ"ך והמורשת היהודית ליצירות אמנות המעניקות ערך חינוכי ויופי לכל בית.'
                : 'Connecting to the past is the most fascinating puzzle of all. From a deep journey of exploring roots, the vision of Tzofia Art was born: to turn history, the Bible, and Jewish heritage into works of art that provide educational value and beauty to every home.'}
            </p>
            <Link to="/tree" className="cta-button">
              {lang === 'he' ? 'צפו באילן התנ"כי שלנו' : 'View Our Biblical Tree'}
            </Link>
          </div>
        </section>

        {/* אזור המתודולוגיה */}
        <section className="methodology-section">
          <div className="methodology-header">
            <h2>
              {lang === 'he' ? 'כנות מחקרית ושקיפות' : 'Research Integrity & Transparency'}
            </h2>
            <div className="title-separator"></div>
            <p className="methodology-subtitle">
              {lang === 'he' 
                ? 'כל יצירה שלנו מבוססת על מחקר קפדני ויראת כבוד למקורות. אלו העקרונות המנחים אותנו בבניית אילנות היוחסין:'
                : 'Every creation of ours is based on meticulous research and reverence for the sources. These are the guiding principles in building our family trees:'}
            </p>
          </div>

          <div className="features-grid">
            
            {/* כרטיסייה 1: סוגי המחקר */}
            <div className="feature-card">
              <FaSearch className="feature-icon" />
              <h3>{lang === 'he' ? 'שלושה רבדי חקר' : 'Three Layers of Research'}</h3>
              <p>
                {lang === 'he' ? (
                  <>
                    <strong>תנ"ך מפורש:</strong> שושלות הכתובות במפורש בכתובים.<br/>
                    <strong>מקורות חז"ל:</strong> שילוב מידע מהגמרא והמדרשים. במקרי מחלוקת, הוספנו כוכבית (*).<br/>
                    <strong>הבנת הפשט:</strong> חיבורים מסופקים סומנו בהגינות בסימן שאלה (?).
                  </>
                ) : (
                  <>
                    <strong>Explicit Bible:</strong> Lineages explicitly written in the scriptures.<br/>
                    <strong>Sages\' Sources:</strong> Integrating information from the Gemara and Midrashim. In cases of dispute, we added an asterisk (*).<br/>
                    <strong>Contextual Understanding:</strong> Doubtful connections were fairly marked with a question mark (?).
                  </>
                )}
              </p>
            </div>

            {/* כרטיסייה 2: סינון דמויות */}
            <div className="feature-card">
              <FaBookOpen className="feature-icon" />
              <h3>{lang === 'he' ? 'מעל 500 דמויות' : 'Over 500 Figures'}</h3>
              <p>
                {lang === 'he' 
                  ? 'התנ"ך עמוס באלפי שמות. כדי לשמור על קריאות וערך לימודי גבוה, ביררנו בקפידה את הדמויות המרכזיות, המשפיעות והחשובות ביותר לעיצוב ההיסטוריה המקראית.'
                  : 'The Bible is filled with thousands of names. To maintain readability and high educational value, we carefully selected the most central, influential, and important figures in shaping biblical history.'}
              </p>
            </div>

            {/* כרטיסייה 3: זמנים */}
            <div className="feature-card">
              <FaHistory className="feature-icon" />
              <h3>{lang === 'he' ? 'ציר זמן מדויק' : 'Accurate Timeline'}</h3>
              <p>
                {lang === 'he' 
                  ? 'השנים באילן חושבו למניין בריאת העולם. הזמנים מבוססים על הספר "סדר הדורות הקצר" (הרב שלמה בניזרי) וחקירת שלשלת הקבלה לפי "דור דור ודורשיו" (הרב אלקנה אליאסי זצ"ל).'
                  : 'The years in the tree were calculated according to the creation of the world. The timeline is based on the book "Seder HaDorot HaKatzar" (Rabbi Shlomo Benizri) and the research of the tradition chain according to "Dor Dor VeDorshav" (Rabbi Elkana Eliasi, ZT"L).'}
              </p>
            </div>

            {/* כרטיסייה 4: מטרת העץ */}
            <div className="feature-card">
              <FaInfoCircle className="feature-icon" />
              <h3>{lang === 'he' ? 'למידה והעשרה' : 'Learning and Enrichment'}</h3>
              <p>
                {lang === 'he' 
                  ? 'האילן הינו תוצאה של מחקר פרטי ענף שנועד להוות כלי עזר חינוכי, ויזואלי ומרתק. הוא מיועד ללמידה והעשרה, ואין להסיק ממנו הלכה למעשה.'
                  : 'The tree is the result of extensive private research intended to serve as a fascinating, visual educational aid. It is designed for learning and enrichment, and one should not derive practical Halacha from it.'}
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;