import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../context/context';
import '../styles/card-preview.css';

// A hidden page (not linked from the site): ten designs for the picture
// cards, shown with the three cards of the home page, to choose from.
const CARDS = [
  {
    img: '/images/tilt.jpg',
    he: ['אילנות היוחסין שלנו', 'צפו בשני הכרכים המקיפים שלנו: תקופת המקרא, ותקופת המשנה והגאונים.'],
    en: ['Our Family Trees', 'View our two comprehensive volumes: The Biblical Era, and the Mishnaic to Geonic Era.'],
  },
  {
    img: '/images/temple.jpg',
    he: ['לומדות האילן', 'העמיקו את הידע: הכירו את הקבוצות והדמויות המופיעות באילנות שלנו ולמדו עליהן בהרחבה.'],
    en: ['Tree Learning Guides', 'Get to know the groups and figures featured in our trees and learn about them in detail.'],
  },
  {
    img: '/images/knesset.jpg',
    he: ['אודותינו', 'קראו על החזון מאחורי Tzofia Art, על תהליך המחקר המעמיק, והכירו את הצוות שמאחורי היצירות.'],
    en: ['About Us', 'Read about the vision behind Tzofia Art, the deep research process, and meet the team.'],
  },
];

const STYLES = [
  ['קלף אופקי', 'Horizontal Parchment', 'במחשב – כרטיס עומד; בטלפון – שורה נמוכה: תמונה בצד וטקסט לידה.'],
  ['חלון קשת', 'Arched Window', 'התמונה בתוך קשת, כמו חלון של בית כנסת עתיק, במסגרת זהב.'],
  ['תמונה מלאה', 'Full Picture', 'התמונה ממלאת את כל הכרטיס, והכותרת בזהב על רקע כהה בתחתית.'],
  ['מסגרת זהב דקה', 'Fine Gold Frame', 'נקי ושקט: תמונה רחבה, קו זהב דק, טקסט קצר וקישור "לכניסה".'],
  ['חותם', 'Seal', 'התמונה בעיגול עם טבעת זהב, כמו חותם; בטלפון – החותם בצד.'],
  ['ספר פתוח', 'Open Book', 'כרטיס רחב: תמונה בעמוד אחד וטקסט בעמוד השני, עם שדרה באמצע.'],
  ['מגילה', 'Scroll', 'כרטיס קלף עם עמודי מגילה מגולגלים למעלה ולמטה.'],
  ['דיו וזהב', 'Ink and Gold', 'כרטיס כהה בצבע הדיו של האתר, עם כותרת ומסגרת בזהב.'],
  ['תמונה ממוסגרת', 'Framed Print', 'התמונה כמו הדפס ממוסגר על הקיר, ומתחתיה שלט קטן כמו במוזיאון.'],
  ['תוכן עניינים', 'Table of Contents', 'רשימה של שורות: אות במעגל זהב, תמונה קטנה, כותרת וחץ. הכי קומפקטי בטלפון.'],
];

const LETTERS = ['א', 'ב', 'ג'];

const Card = ({ card, i, lang }) => {
  const [title, text] = card[lang] || card.he;
  return (
    <a href="#top" className="cp-card" onClick={(e) => e.preventDefault()}>
      <span className="cp-num" aria-hidden="true">{LETTERS[i]}</span>
      <div className="cp-img"><img src={card.img} alt="" loading="lazy" /></div>
      <div className="cp-body">
        <h3>{title}</h3>
        <div className="cp-sep" />
        <p>{text}</p>
        <span className="cp-cta">{lang === 'he' ? 'לכניסה ←' : 'Enter →'}</span>
      </div>
    </a>
  );
};

const CardPreview = () => {
  const { lang } = useContext(CartContext);
  const he = lang !== 'en';
  return (
    <div className="page-wrapper" id="top">
      <Helmet><title>Tzofia Art | תצוגה מקדימה של כרטיסים</title><meta name="robots" content="noindex" /></Helmet>
      <Header title="" />
      <main className="cp-page" dir={he ? 'rtl' : 'ltr'}>
        <section className="home-hero">
          <h1>{he ? 'ברוכים הבאים לצופיה ארט' : 'Welcome to Tzofia Art'}</h1>
          <p>{he ? 'עמוד לדוגמה: עשרה עיצובים לכרטיסים של דף הבית, דף האילנות ולומדות האילן. בחרו את המועדף – כדאי לבדוק גם בטלפון.' : 'A sample page: ten designs for the cards of the home page, the trees page and the learning guides. Choose your favourite – check on a phone too.'}</p>
        </section>

        <nav className="cp-jump" aria-label={he ? 'מעבר לעיצוב' : 'Jump to a design'}>
          {STYLES.map((s, n) => <a key={s[0]} href={`#style-${n + 1}`}>{n + 1}</a>)}
        </nav>

        {STYLES.map(([nameHe, nameEn, desc], n) => (
          <section key={nameHe} id={`style-${n + 1}`} className={`cp-section cp-s${n + 1}`}>
            <header className="cp-section-head">
              <span className="cp-badge">{n + 1}</span>
              <div>
                <h2>{he ? nameHe : nameEn}</h2>
                {he && <p>{desc}</p>}
              </div>
            </header>
            <div className="cp-row">
              {CARDS.map((c, i) => <Card key={c.img} card={c} i={i} lang={he ? 'he' : 'en'} />)}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CardPreview;
