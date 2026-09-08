import React, { useContext } from 'react';
import { CartContext } from '../context/context';
import Header from '../components/Header'; // ודא שהנתיב הזה נכון לפי מבנה התיקיות שלך!

const Accessibility = () => {
  const { lang } = useContext(CartContext);

  return (
    // העטיפה הזו מבטיחה שהכיווניות (ימין/שמאל) תעבוד כמו בשאר האתר
    <div className="page-wrapper" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      
      {/* הנה ההדר עם הלוגו והכפתורים! */}
      <Header />

      <main className="accessibility-page">
        <h1 className="page-title">
          {lang === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
        </h1>
        
        <div className="accessibility-content">
          {lang === 'he' ? (
            <>
              <p>אנו ב-<strong>Tzofia Art</strong> רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות.</p>
              <p>על פי תקנות שוויון זכויות לאנשים עם מוגבלות, אתר זה פטור בשלב זה מחובת הנגשה מלאה בשל פטור כלכלי לעסקים קטנים (היקף מחזור עסקאות מתחת לרף הקבוע בחוק).</p>
              <p>עם זאת, אנו שואפים לאפשר לכל אדם ליהנות מיצירותינו. בניית האתר נעשית תוך חשיבה קדימה ושילוב פרקטיקות של קוד נגיש כדי להקל על הגלישה ככל הניתן.</p>
              <p>במידה ונתקלתם בקושי בגלישה באתר, בקריאת המידע על אילנות היוחסין, או בתהליך הרכישה – אנו מציעים שירות חלופי ומותאם אישית.</p>
              <p><strong>נשמח לעמוד לשירותכם ולסייע בביצוע הזמנה או במתן מידע בכל אחד מהאמצעים הבאים:</strong></p>
              <ul>
                 <li><strong>טלפון / וואטסאפ:</strong> 054-8177702</li>
              <li><strong>דוא"ל:</strong> yitzhak480@gmail.com</li>
              </ul>
            </>
          ) : (
            <>
              <p>At <strong>Tzofia Art</strong>, we believe in providing equal service to all our customers.</p>
              <p>According to the Equal Rights for Persons with Disabilities Regulations in Israel, this website is currently exempt from full accessibility requirements due to the small business economic exemption.</p>
              <p>However, we strive to make our creations accessible to everyone. The site is built with accessible coding practices in mind to facilitate browsing as much as possible.</p>
              <p>If you experience any difficulty browsing the site, reading about our family trees, or during the purchasing process, we offer alternative, personalized service.</p>
              <p><strong>We will be happy to assist you with placing an order or providing information through any of the following methods:</strong></p>
              <ul>
               <li><strong>Phone / WhatsApp:</strong> 0548177702</li>
              <li><strong>Email:</strong> yitzhak480@gmail.com</li>
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Accessibility;
   