import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/context";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

const About = () => {
  const { lang } = useContext(CartContext);

  // ניהול מצב עבור הגלריה הקופצת (Lightbox) של ההמלצות
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // מערך הנתונים של ההמלצות לטובת המעבר בגלריה
  const recommendationsData = [
    {
      id: 0,
      nameHe: "הרב אורי עמוס שרקי",
      nameEn: "Rabbi Uri Amos Sherki",
      descHe: 'יו"ר ברית עולם, ר"מ בישיבת מכון מאיר ורב קהילת "בית יהודה"',
      descEn: 'Chairman of Brit Olam, Ram at Machon Meir Yeshiva, and Rabbi of the "Beit Yehuda" Community',
      image: "/images/sherki.jpg" 
    },
    {
      id: 1,
      nameHe: "הרב חיים רבי",
      nameEn: "Rabbi Chaim Rabi",
      descHe: "נשיא מוסדות עטרת חכמים ומחבר ספרים: 'יקרא דחיי', 'עבד ה'', 'הנהגות' ועוד",
      descEn: "President of Ateret Chachamim Institutions and author of books: 'Yikra D'Chayei', 'Eved Hashem', 'Hanhagot', and more",
      image: "/images/rebi.jpg" 
    },
    {
      id: 2,
      nameHe: "הרב מתתיה שרים",
      nameEn: "Rabbi Matitya Sharim",
      descHe: 'ראש ישיבת "תורה והוראה" ונאמן הקדשות הרשב"י במירון',
      descEn: 'Head of "Torah VeHora\'ah" Yeshiva and Trustee of Rashbi Endowments in Meron',
      image: "/images/mati.jpg" 
    }
  ];

  // פונקציות לשליטה בגלריה
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % recommendationsData.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + recommendationsData.length) % recommendationsData.length);
  };

  return (
    <div className="page-wrapper" dir={lang === "he" ? "rtl" : "ltr"}>
      <Header title={lang === "he" ? "אודותינו" : "About Us"} />

      <main className="about-page-container">
        <h1 className="about-main-title">
          {lang === "he" ? "אודותינו" : "About Us"}
        </h1>

        <section className="about-history-section">
          {/* שורה 1: טקסט מימין, תמונה משמאל (בעברית) */}
          <div className="history-block">
            <div className="history-text-wrapper">
              <p>
                {lang === "he"
                  ? "כבר שנים רבות שאנחנו מחוברים עמוקות לנושא דברי הימים ותולדות העם היהודי. החשיבות של הבנת הדרך שעברנו – איך הגענו לכאן ומה חווינו לאורך השנים בארץ ישראל ובגולה – היא חלק מרכזי בחיינו."
                  : "For many years, we have been deeply connected to the chronicles and history of the Jewish people. The importance of understanding the journey we have taken – how we arrived here and what we experienced over the years in the Land of Israel and the diaspora – is a central part of our lives."}
              </p>
              <p>
                {lang === "he"
                  ? 'בשנת תשפ"ב נתקלנו באילן יוחסין תנ"כי באנגלית שיצר היוטיובר הקנדי מ-"UsefulCharts", ומאוד התחברנו לרעיון. תוך ימים ספורים הכנו את הגרסה הראשונה שלנו – העתק מדויק של האילן שלו, אבל בעברית.'
                  : 'In 2022, we came across an English biblical family tree created by the Canadian YouTuber from "UsefulCharts", and we deeply connected with the concept. Within a few days, we created our first version – an exact Hebrew replica of his tree.'}
              </p>
              <p>
                {lang === "he"
                  ? "בדומה לאילן המקורי, שילבנו תמונות להמחשת הדמויות, ותקופת בית שני הוצגה בפינה נפרדת במקום כהמשך ישיר לסוף התנ״ך."
                  : "Similar to the original tree, it included images to illustrate the figures, and the Second Temple period was placed in a separate corner rather than as a direct continuation of the end of the Bible."}
              </p>
            </div>
            <div className="history-image-wrapper">
              <img
                src="/images/tana.jpg"
                alt={lang === "he" ? "תחילת הדרך" : "The Beginning"}
                className="framed-history-image"
                onContextMenu={(e) => e.preventDefault()} 
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* שורה 2: תמונה מימין, טקסט משמאל (בעברית) */}
          <div className="history-block">
            <div className="history-image-wrapper">
              <img
                src="/images/torah-tree.jpg"
                alt={
                  lang === "he"
                    ? "אילן אדם הראשון עד התנאים"
                    : "Adam to Tannaim Tree"
                }
                className="framed-history-image"
                onContextMenu={(e) => e.preventDefault()} 
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <div className="history-text-wrapper">
              <p>
                {lang === "he"
                  ? "בעקבות השראה ותמיכה מחבר טוב, שבזכותו העסק הזה קם וקיים, התחלנו לעבוד על האילן המפורט מאדם הראשון ועד ימי התנאים. זהו האילן המפורט ביותר שנעשה אי פעם על התנ״ך, והוא כולל למעלה מ-500 דמויות."
                  : "Following the inspiration and support of a good friend, thanks to whom this entire business exists, we began working on the detailed tree from Adam to the era of the Tannaim. This is the most detailed family tree ever created for the Bible, featuring over 500 figures."}
              </p>
              <p>
                {lang === "he"
                  ? "בגרסה הזו הסרנו את התמונות הפחות מכבדות, הוספנו כ-70 תנאים, וכמובן יצרנו חיבור ישיר ורציף בין ימי בית ראשון לבית שני."
                  : "In this version, we removed images that were not entirely respectful, added about 70 Tannaim, and, of course, created a direct and continuous connection between the First and Second Temple periods."}
              </p>
              <p>
                {lang === "he"
                  ? "בנוסף, שילבנו שני צירי זמן – אחד של אירועים היסטוריים ואחד של מנהיגים ותקופות – כדי להמחיש ללומדים בצורה המדויקת ביותר את השתלשלות האירועים. בחסדי השם יתברך, מאילן זה נמכרו למעלה מ-100 עותקים."
                  : "Additionally, we incorporated two timelines—one for historical events and another for leaders and eras—to truly illustrate the sequence of events for learners. Thank God, over 100 copies of this tree have been sold."}
              </p>
            </div>
          </div>
          
          {/* שורה 3: טקסט מימין, תמונה משמאל (בעברית) */}
          <div className="history-block">
            <div className="history-text-wrapper">
              <p>
                {lang === "he"
                  ? "מיד לאחר שהדפסנו את האילן המפורט, התחלנו לעבוד על החלק השני – אילן יוחסין של האמוראים, אך לא הצלחנו לסיים אותו באותה תקופה."
                  : "Immediately after printing the detailed tree, we began working on its second part—the Amoraim family tree—but we were unable to complete it at that time."}
              </p>
              <p>
                {lang === "he"
                  ? "רק כעבור שנתיים חזרנו לעבוד עליו בשיא הרצינות, ולאחר שנת עבודה מאומצת, ברוך השם, הוצאנו אותו לאור."
                  : "It was only two years later that we returned to work on it in full force, and after another year of hard work, thank God, we published it."}
              </p>
              <p>
                {lang === "he"
                  ? "באילן זה ישנן למעלה מ-600 דמויות, והוא האילן היחיד שמציג גם את גדולי האמוראים, הסבוראים והגאונים, ואפילו את מלכי הכוזרים. עם הוצאת אילן זה, זכינו לקבל ברכות והמלצות על שני האילנות מגדולי ישראל, בהם הרב חיים רבי והרב אורי שרקי (ראו בהמשך)."
                  : "This tree contains over 600 figures and is the only family tree that displays the great Amoraim, Savoraim, and Geonim, and even the Khazar kings. Upon publishing this tree, we were also blessed to receive recommendations for both trees from Rabbi Chaim Rabi and Rabbi Uri Sherki (see below)."}
              </p>
            </div>
            <div className="history-image-wrapper">
              <img
                src="/images/talmud-tree.jpg"
                alt={
                  lang === "he"
                    ? "אילן האמוראים והגאונים"
                    : "Amoraim and Geonim Tree"
                }
                className="framed-history-image"
                onContextMenu={(e) => e.preventDefault()} 
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </section>

        {/* אזור הצוות */}
        <section className="team-section">
          <h2 className="team-main-title">
            {lang === "he" ? "אז מי אנחנו בעצם" : "So Who Are We Exactly?"}
          </h2>
          <div className="title-separator" style={{ margin: "0 auto 3rem auto" }}></div>

          <div className="team-grid">
            
            {/* כרטיס יצחק (יופיע מימין בעברית) */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/yitz.jpg" 
                  alt={lang === "he" ? "יצחק הכהן צופיוף" : "Yitzhak HaCohen Tsofiouf"} 
                  className="team-image"
                  onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <h3>{lang === "he" ? "יצחק הכהן צופיוף" : "Yitzhak HaCohen Tzofiof"}</h3>
              <p className="team-role">
                {lang === "he" 
                  ? "יצחק עושה את כל המחקר על הנושאים של האילנות, מעצב אותם בפועל ואחראי על בניית האתר." 
                  : "Yitzhak conducts all the research for the family trees, actively designs them, and is responsible for building the website."}
              </p>
              <p className="team-bio">
                {lang === "he"
                  ? "יצחק הוא בעל תעודת הוראה, טכנאי תוכנה ומעצב UI-UX."
                  : "Yitzhak holds a teaching certificate, is a software technician, and a UI-UX designer."}
              </p>
              <div className="team-contact">
                <p><strong>{lang === "he" ? "ליצירת קשר:" : "Contact:"}</strong></p>
                <p>{lang === "he" ? "טלפון:" : "Phone:"} 0548177702</p>
                <p>{lang === "he" ? "מייל:" : "Email:"} yitzhak480@gmail.com</p>
              </div>
            </div>

            {/* כרטיס דניאל (באמצע) */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/dan.jpg" 
                  alt={lang === "he" ? "דניאל חי זרגרוב כהן" : "Daniel Hai Zargarov Cohen"} 
                  className="team-image"
                  onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <h3>{lang === "he" ? "דניאל חי זרגרוב כהן" : "Daniel Hai Zargarov Cohen"}</h3>
              <p className="team-role">
                {lang === "he" 
                  ? 'דניאל הוא מעצב הלוגו ומי שהציע לקרוא לעסק "צופיה-ארט".' 
                  : 'Daniel is the logo designer and the one who suggested naming the business "Tzofia-Art".'}
              </p>
              <p className="team-bio">
                {lang === "he"
                  ? "יש לו תעודת הוראה, למד ספירת סת״ם, ומנהל צהרונים כבר 3 שנים. בנוסף הוא מעצב מתנות לאירוסין וכדו׳."
                  : "He holds a teaching certificate, studied Safrut STa\"M, and has been managing after-school programs for 3 years. Additionally, he designs engagement gifts and more."}
              </p>
              <div className="team-contact">
                <p><strong>{lang === "he" ? "ליצירת קשר:" : "Contact:"}</strong></p>
                <p>{lang === "he" ? "טלפון:" : "Phone:"} 0559588576</p>
                <p>{lang === "he" ? "מייל:" : "Email:"} danielzc260@gmail.com</p>
              </div>
            </div>

            {/* כרטיס הראל (יופיע משמאל בעברית) */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/har.jpg" 
                  alt={lang === "he" ? "הראל צדוק" : "Harel Tzadok"} 
                  className="team-image"
                  onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <h3>{lang === "he" ? "הראל צדוק" : "Harel Tzadok"}</h3>
              <p className="team-role">
                {lang === "he" 
                  ? "הראל הוא המפתח והיועץ הטכנולוגי של צופיה וכן פיתח את האתר הראשון שלנו." 
                  : "Harel is the developer and technological advisor for Tzofia, and developed our first website."}
              </p>
              <p className="team-bio">
                {lang === "he"
                  ? 'הוא מפתח fullstack עם 6 שנים של ניסיון וכרגע עובד בסטארטאפ "Helfy".'
                  : 'He is a fullstack developer with 6 years of experience and currently works at the startup "Helfy".'}
              </p>
              <div className="team-contact">
                <p><strong>{lang === "he" ? "ליצירת קשר:" : "Contact:"}</strong></p>
                <p>{lang === "he" ? "טלפון:" : "Phone:"} 0587305151</p>
                <p>{lang === "he" ? "אתר:" : "Website:"} harelzadok.com</p>
              </div>
            </div>

          </div>
        </section>

        {/* אזור המלצות רבנים המעודכן עם יכולת לחיצה */}
        <section className="recommendations-section">
          <h2 className="recommendations-main-title">
            {lang === "he" ? "ברכות והמלצות מרבנים" : "Rabbinical Blessings and Recommendations"}
          </h2>
          <div className="title-separator" style={{ margin: "0 auto 3rem auto" }}></div>

          <div className="recommendations-grid">
            {recommendationsData.map((rec, index) => (
              <div className="recommendation-card" key={rec.id}>
                <div className="recommendation-header">
                  <h3>{lang === "he" ? rec.nameHe : rec.nameEn}</h3>
                  <p>{lang === "he" ? rec.descHe : rec.descEn}</p>
                </div>
                {/* לחיצה פותחת את הגלריה */}
                <div className="recommendation-image-wrapper clickable" onClick={() => openLightbox(index)}>
                  <img 
                    src={rec.image} 
                    alt={lang === "he" ? rec.nameHe : rec.nameEn} 
                    className="recommendation-image"
                    onContextMenu={(e) => e.preventDefault()} 
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="hover-zoom-icon">🔍</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* הגלריה הקופצת (Lightbox Modal) */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <button className="lightbox-nav-btn prev-btn" onClick={prevImage}>
             {lang === 'he' ? <FaChevronRight /> : <FaChevronLeft />}
          </button>

          <img 
            src={recommendationsData[currentImageIndex].image} 
            alt="מכתב המלצה מוגדל" 
            className="lightbox-main-image"
            onClick={(e) => e.stopPropagation()} 
            onContextMenu={(e) => e.preventDefault()} 
            onDragStart={(e) => e.preventDefault()}
          />

          <button className="lightbox-nav-btn next-btn" onClick={nextImage}>
             {lang === 'he' ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default About;