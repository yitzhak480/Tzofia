import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../context/context';
import CardBack from '../components/encyclopedia/CardBack';
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

// round 2: variations on design 3 (the picture fills the card)
const STYLES = [
  ['קלף ופינות זהב (2 ו־5)', 'Parchment and gold corners (2 and 5)', 'השילוב שביקשת: התמונה בתוך שולי קלף עם קו זהב (2), עם עיטורי זהב בפינות, כותרת בזהב וקישוט ◆ (5).'],
  ['3 המקורי', 'The original 3', 'כמו שהיה בסיבוב הקודם, להשוואה.'],
  ['במסגרת קלף', 'In a parchment mount', 'התמונה המלאה בתוך שוליים של קלף וקו זהב, כמו תמונה במסגרת.'],
  ['נמס לקלף', 'Melting into parchment', 'בלי רקע כהה: התמונה נמסה בתחתית לצבע הקלף, והכותרת באדום – בהיר ורך.'],
  ['שלט כותרת', 'Title plaque', 'הכותרת על שלט קלף קטן שיושב על התמונה, והטקסט מתחתיו.'],
  ['פינות זהב', 'Gold corners', 'עיטורי זהב בפינות, כותרת בזהב וקישוט ◆ קטן.'],
  ['רחב ונמוך', 'Wide and low', 'כרטיס רוחבי גם במחשב, עם כפתור זהב "לכניסה".'],
  ['נגלה במגע', 'Revealed on hover', 'במחשב רואים רק את הכותרת, והטקסט עולה כשמעבירים את העכבר; בטלפון הכל גלוי.'],
  ['קשת', 'Arched', 'הכרטיס כולו בצורת קשת, עם התמונה המלאה.'],
  ['כריכת ספר', 'Book cover', 'הכותרת באמצע הכרטיס בין שני קווי זהב, כמו כריכה של ספר.'],
  ['פס דיו', 'Ink band', 'התמונה למעלה, ופס בצבע דיו מתחתיה עם הכותרת בזהב – בלי מעבר מטושטש.'],
];

// the two tree posters (the cards of the trees page)
const TREES = [
  {
    img: '/images/torah-tree.jpg', cta: ['צפו באילן המלא ←', 'View Full Tree →'],
    he: ['חלק ראשון: מאדם לתנאים', 'מאדם וחווה דרך תקופת האבות, יציאת מצרים, שלטון המלכים וחורבן בית ראשון ושני ועד לימי חתימת המשנה.'],
    en: ['Volume 1: From Adam to the Tanaim', 'From Adam and Eve through the Patriarchs, the Exodus, the Kings and the two Temples, up to the sealing of the Mishna.'],
  },
  {
    img: '/images/talmud-tree.jpg', cta: ['צפו באילן המלא ←', 'View Full Tree →'],
    he: ['חלק שני: אמוראים לגאונים', 'הדורות שעיצבו את התורה שבעל פה: מאחרוני התנאים, דרך האמוראים בבבל ובארץ ישראל, ועד תקופת הגאונים.'],
    en: ['Volume 2: Mishna to Geonim', 'The generations that shaped the Oral Torah: from the last Tannaim, through the Amoraim, to the Geonim.'],
  },
];

// encyclopedia categories without a picture: the patterned card back
const CATS = [
  { color: 'burgundy', he: ['מלכים', 'מלכי בית דוד, מלכי ישראל, ומלכי בית חשמונאי ובית הורדוס'], en: ['Kings', 'The kings of the house of David and of Israel, the Hasmoneans and the Herodians'] },
  { color: 'purple', he: ['נביאים', 'הנביאים שהעבירו את דבר ה׳ לעם ישראל'], en: ['Prophets', 'The prophets who brought the word of G-d to Israel'] },
  { color: 'brown', he: ['תנאים', 'חכמי המשנה, עד רבי יהודה הנשיא'], en: ['Tannaim', 'The sages of the Mishnah, up to Rabbi Yehudah HaNasi'] },
];

const LETTERS = ['א', 'ב', 'ג'];

const Card = ({ card, i, lang }) => {
  const [title, text] = card[lang] || card.he;
  return (
    <a href="#top" className="cp-card" onClick={(e) => e.preventDefault()}>
      <span className="cp-num" aria-hidden="true">{LETTERS[i]}</span>
      <div className="cp-img">{card.img ? <img src={card.img} alt="" loading="lazy" /> : <CardBack color={card.color} />}</div>
      <div className="cp-body">
        <h3>{title}</h3>
        <div className="cp-sep" />
        <p>{text}</p>
        <span className="cp-cta">{card.cta ? card.cta[lang === 'he' ? 0 : 1] : (lang === 'he' ? 'לכניסה ←' : 'Enter →')}</span>
      </div>
      <span className="cp-corners" aria-hidden="true" />
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
          <p>{he ? 'סיבוב שני: עשר וריאציות על עיצוב 3, שבו התמונה ממלאת את הכרטיס. בחרו את המועדף, או ספרו לי מה לשנות – כדאי לבדוק גם בטלפון.' : 'Round two: ten variations on design 3, where the picture fills the card. Choose your favourite, or tell me what to change – check on a phone too.'}</p>
        </section>

        <nav className="cp-jump" aria-label={he ? 'מעבר לעיצוב' : 'Jump to a design'}>
          {STYLES.map((s, n) => <a key={s[0]} href={`#style-${n}`}>{n === 0 ? '★' : n}</a>)}
        </nav>

        {STYLES.map(([nameHe, nameEn, desc], n) => (
          <section key={nameHe} id={`style-${n}`} className={`cp-section cp-v cp-v${n}`}>
            <header className="cp-section-head">
              <span className="cp-badge">{n === 0 ? '★' : n}</span>
              <div>
                <h2>{he ? nameHe : nameEn}</h2>
                {he && <p>{desc}</p>}
              </div>
            </header>
            <h4 className="cp-row-label">{he ? 'דף הבית' : 'Home page'}</h4>
            <div className="cp-row">
              {CARDS.map((c, i) => <Card key={c.img} card={c} i={i} lang={he ? 'he' : 'en'} />)}
            </div>
            <h4 className="cp-row-label">{he ? 'דף האילנות – תמונות המוצר' : 'Trees page – the product pictures'}</h4>
            <div className="cp-row cp-row-trees">
              {TREES.map((c, i) => <Card key={c.img} card={c} i={i} lang={he ? 'he' : 'en'} />)}
            </div>
            <h4 className="cp-row-label">{he ? 'לומדות האילן – קטגוריה בלי תמונה' : 'Learning guides – a category without a picture'}</h4>
            <div className="cp-row cp-row-cats">
              {CATS.map((c, i) => <Card key={c.color} card={c} i={i} lang={he ? 'he' : 'en'} />)}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CardPreview;
