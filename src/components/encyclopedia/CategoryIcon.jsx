import React from 'react';

// Simple line symbols for each kind of category, drawn in gold.
// `kind` is chosen from the category's web address (see iconForCategory).
const ICONS = {
  crown: (
    <>
      <path d="M14 46 L10 22 L22 32 L32 14 L42 32 L54 22 L50 46 Z" />
      <path d="M14 52 H50" />
      <circle cx="10" cy="20" r="2.5" /><circle cx="32" cy="12" r="2.5" /><circle cx="54" cy="20" r="2.5" />
    </>
  ),
  scroll: (
    <>
      <rect x="18" y="14" width="28" height="36" rx="2" />
      <path d="M14 14 h8 v36 h-8 a4 4 0 0 1 0-8 v-20 a4 4 0 0 1 0-8 Z" />
      <path d="M50 14 h-8 v36 h8 a4 4 0 0 0 0-8 v-20 a4 4 0 0 0 0-8 Z" />
      <path d="M24 24 H40 M24 31 H40 M24 38 H36" />
    </>
  ),
  menorah: (
    <>
      {/* seven branches, all reaching the same height */}
      <path d="M32 12 V48" />
      <path d="M26 12 A6 6 0 0 0 38 12" />
      <path d="M20 12 A12 12 0 0 0 44 12" />
      <path d="M14 12 A18 18 0 0 0 50 12" />
      <path d="M32 48 L22 56 M32 48 L42 56 M32 48 V56 M20 56 H44" />
      <path d="M12 10 H16 M18 10 H22 M24 10 H28 M30 10 H34 M36 10 H40 M42 10 H46 M48 10 H52" />
      <path d="M14 7 V5 M20 7 V5 M26 7 V5 M32 7 V5 M38 7 V5 M44 7 V5 M50 7 V5" />
    </>
  ),
  book: (
    <>
      <path d="M32 18 Q22 12 10 14 V48 Q22 46 32 52 Q42 46 54 48 V14 Q42 12 32 18 Z" />
      <path d="M32 18 V52" />
      <path d="M16 24 Q22 22 27 25 M16 32 Q22 30 27 33 M37 25 Q42 22 48 24 M37 33 Q42 30 48 32" />
    </>
  ),
  scales: (
    <>
      <path d="M32 10 V50 M22 54 H42 M14 18 H50" />
      <path d="M14 18 L8 34 H20 Z M50 18 L44 34 H56 Z" />
      <circle cx="32" cy="10" r="2.5" />
    </>
  ),
  banner: (
    <>
      <path d="M18 10 V56" />
      <path d="M18 12 H48 L42 22 L48 32 H18" />
      <circle cx="18" cy="9" r="2.5" />
    </>
  ),
  temple: (
    <>
      {/* the Heichal facade with its gold crown, side walls and towers */}
      <path d="M19 15 L21 11 L23 15 L25 11 L27 15 L29 11 L31 15 L33 11 L35 15 L37 11 L39 15 L41 11 L43 15 L45 11 L47 15" />
      <rect x="17" y="15" width="30" height="5" />
      <path d="M19 20 V46 M45 20 V46" />
      <path d="M23 21 V46 M41 21 V46" />
      <path d="M28 46 V31 a4 4 0 0 1 8 0 V46" />
      <path d="M4 46 H60" />
      <path d="M4 46 V34 H12 V46 M52 46 V34 H60 V46" />
      <path d="M12 38 H19 M45 38 H52" />
      <path d="M24 50 H40 M20 54 H44" />
    </>
  ),
  vessel: (
    <>
      <rect x="12" y="26" width="40" height="20" rx="2" />
      <path d="M12 26 H52 M8 46 H56" />
      <path d="M18 26 Q22 14 32 20 Q42 14 46 26" />
      <path d="M8 34 H12 M52 34 H56" />
    </>
  ),
  hourglass: (
    <>
      <path d="M16 10 H48 M16 54 H48" />
      <path d="M20 10 Q20 26 32 32 Q44 26 44 10 M20 54 Q20 38 32 32 Q44 38 44 54" />
      <path d="M26 50 Q32 44 38 50 Z" />
    </>
  ),
  star: (
    <>
      <path d="M32 8 L50 40 H14 Z" />
      <path d="M32 56 L14 24 H50 Z" />
    </>
  ),

  /* ----- symbols for the sages ----- */
  quill: (
    <>
      <path d="M46 8 C58 12 54 30 40 38 L20 50 C24 34 32 18 46 8 Z" />
      <path d="M46 8 L14 56" />
      <path d="M40 18 L34 22 M36 26 L30 30 M32 34 L26 38" />
    </>
  ),
  inkwell: (
    <>
      <path d="M16 38 H48 V52 a3 3 0 0 1 -3 3 H19 a3 3 0 0 1 -3 -3 Z" />
      <path d="M23 38 V32 H41 V38" />
      <path d="M34 32 L50 8" />
      <path d="M50 8 C58 13 53 23 44 25" />
      <path d="M20 46 H44" />
    </>
  ),
  talmudPage: (
    <>
      <rect x="12" y="6" width="40" height="52" rx="1.5" />
      <rect x="23" y="16" width="18" height="20" />
      <path d="M20 11 H44" />
      <path d="M26 21 H38 M26 26 H38 M26 31 H38" />
      <path d="M15 17 H20 M15 22 H20 M15 27 H20 M15 32 H20 M44 17 H49 M44 22 H49 M44 27 H49 M44 32 H49" />
      <path d="M15 41 H49 M15 46 H49 M15 51 H40" />
    </>
  ),
  bookStack: (
    <>
      <rect x="12" y="42" width="40" height="10" rx="1.5" />
      <rect x="16" y="32" width="36" height="10" rx="1.5" />
      <rect x="10" y="22" width="38" height="10" rx="1.5" />
      <path d="M18 42 V52 M44 32 V42 M16 22 V32" />
      <path d="M22 14 L40 10 L42 20" />
    </>
  ),
  torahScroll: (
    <>
      <rect x="10" y="12" width="8" height="40" rx="4" />
      <rect x="46" y="12" width="8" height="40" rx="4" />
      <path d="M14 12 V6 M14 52 V58 M50 12 V6 M50 52 V58" />
      <path d="M18 16 H46 M18 48 H46" />
      <path d="M24 24 H40 M24 30 H40 M24 36 H40 M24 42 H34" />
    </>
  ),
  kterTorah: (
    <>
      <rect x="12" y="42" width="40" height="8" rx="1" />
      <path d="M14 42 L10 22 Q32 14 54 22 L50 42" />
      <path d="M32 18 V42 M32 18 Q20 26 21 42 M32 18 Q44 26 43 42" />
      <circle cx="32" cy="12" r="3.5" />
      <path d="M16 46 H18 M31 46 H33 M46 46 H48" />
      <circle cx="18" cy="55" r="2.2" /><circle cx="32" cy="55" r="2.2" /><circle cx="46" cy="55" r="2.2" />
      <path d="M18 50 V53 M32 50 V53 M46 50 V53" />
    </>
  ),
  oilLamp: (
    <>
      <path d="M10 40 Q12 30 28 30 H42 Q52 30 56 35 L46 40 Q40 46 26 46 Q12 46 10 40 Z" />
      <path d="M53 31 Q50 23 54 16 Q59 24 56 31" />
      <path d="M12 36 Q4 34 8 27" />
      <circle cx="30" cy="34" r="2.5" />
      <path d="M20 46 L18 52 H40 L38 46" />
    </>
  ),
  candle: (
    <>
      <path d="M32 6 Q39 16 32 24 Q25 16 32 6 Z" />
      <rect x="25" y="28" width="14" height="22" rx="1" />
      <path d="M32 24 V28" />
      <path d="M16 54 H48 M20 50 H44" />
    </>
  ),
  tablets: (
    <>
      <rect x="10" y="10" width="20" height="44" rx="1.5" />
      <rect x="34" y="10" width="20" height="44" rx="1.5" />
      <path d="M15 18 H25 M15 25 H25 M15 32 H25 M15 39 H25 M15 46 H25 M39 18 H49 M39 25 H49 M39 32 H49 M39 39 H49 M39 46 H49" />
    </>
  ),
  shtender: (
    <>
      <path d="M12 24 L50 14 L52 22 L14 32 Z" />
      <path d="M20 22 Q26 16 32 19 Q38 14 44 16" />
      <path d="M32 28 V50" />
      <path d="M20 56 L32 50 L44 56" />
    </>
  ),
  archGate: (
    <>
      <path d="M12 56 V26 Q12 8 32 8 Q52 8 52 26 V56" />
      <path d="M22 56 V30 Q22 18 32 18 Q42 18 42 30 V56" />
      <path d="M8 56 H56" />
      <path d="M12 26 H22 M42 26 H52" />
      <circle cx="32" cy="13" r="1.5" />
    </>
  ),
  pillars: (
    <>
      <path d="M8 12 L32 4 L56 12 Z" />
      <path d="M10 16 H54" />
      <path d="M16 20 V48 M24 20 V48 M40 20 V48 M48 20 V48" />
      <path d="M13 20 H27 M37 20 H51 M13 48 H27 M37 48 H51" />
      <path d="M8 54 H56 M10 50 H54" />
    </>
  ),
  oliveBranch: (
    <>
      <path d="M12 56 Q28 38 52 8" />
      <path d="M22 44 Q10 44 8 36 Q18 34 22 44 Z" />
      <path d="M28 36 Q30 24 38 22 Q38 32 28 36 Z" />
      <path d="M34 30 Q22 28 22 20 Q32 20 34 30 Z" />
      <path d="M42 20 Q44 10 52 8 Q52 18 42 20 Z" />
      <circle cx="18" cy="52" r="2.5" /><circle cx="40" cy="28" r="2.5" />
    </>
  ),
  laurel: (
    <>
      <path d="M30 56 Q12 50 12 26" />
      <path d="M34 56 Q52 50 52 26" />
      <path d="M14 44 Q6 42 6 36 Q12 36 14 44 Z M12 34 Q6 30 8 24 Q14 26 12 34 Z M20 52 Q12 54 10 48 Q16 46 20 52 Z" />
      <path d="M50 44 Q58 42 58 36 Q52 36 50 44 Z M52 34 Q58 30 56 24 Q50 26 52 34 Z M44 52 Q52 54 54 48 Q48 46 44 52 Z" />
      <path d="M26 58 L32 54 L38 58" />
    </>
  ),
  palmTree: (
    <>
      <path d="M32 58 Q29 42 32 24" />
      <path d="M29 50 H33 M29 42 H33 M30 34 H34" />
      <path d="M32 24 Q20 14 6 20" />
      <path d="M32 24 Q24 8 12 8" />
      <path d="M32 24 Q40 8 52 8" />
      <path d="M32 24 Q44 14 58 20" />
      <path d="M32 24 Q32 12 34 4" />
      <path d="M22 58 H42" />
    </>
  ),
  grapes: (
    <>
      <path d="M32 14 Q32 8 38 6" />
      <path d="M38 10 Q48 6 52 14 Q44 16 38 10 Z" />
      <circle cx="20" cy="22" r="5" /><circle cx="30" cy="22" r="5" /><circle cx="40" cy="22" r="5" />
      <circle cx="25" cy="31" r="5" /><circle cx="35" cy="31" r="5" />
      <circle cx="20" cy="40" r="5" /><circle cx="30" cy="40" r="5" /><circle cx="40" cy="40" r="5" />
      <circle cx="25" cy="49" r="5" /><circle cx="35" cy="49" r="5" />
      <circle cx="30" cy="57" r="4" />
    </>
  ),
  pomegranate: (
    <>
      <circle cx="32" cy="38" r="17" />
      <path d="M25 22 L26 12 L30 17 L32 10 L34 17 L38 12 L39 22" />
      <path d="M32 22 Q27 38 32 55" />
      <circle cx="24" cy="36" r="1.6" /><circle cx="25" cy="44" r="1.6" /><circle cx="39" cy="34" r="1.6" /><circle cx="40" cy="42" r="1.6" /><circle cx="37" cy="49" r="1.6" />
    </>
  ),
  key: (
    <>
      <circle cx="20" cy="20" r="10" />
      <circle cx="20" cy="20" r="4" />
      <path d="M27 27 L54 54" />
      <path d="M44 44 L50 38 M49 49 L55 43" />
    </>
  ),
  shofar: (
    <>
      <path d="M8 46 Q20 56 36 44 Q50 32 52 12 L58 14 Q58 36 40 50 Q20 62 8 52 Z" />
      <path d="M52 12 Q55 10 58 14" />
      <path d="M20 50 L22 56 M30 46 L33 52 M40 38 L45 42" />
    </>
  ),
  magen: (
    <>
      <path d="M32 6 L54 44 H10 Z" />
      <path d="M32 58 L10 20 H54 Z" />
      <circle cx="32" cy="32" r="5" />
    </>
  ),

  /* ----- more symbols ----- */
  tikTorah: (
    <>
      {/* Sephardic Sefer Torah in its standing case (tik) with rimonim */}
      <path d="M18 18 H46 V54 H18 Z" />
      <path d="M18 18 Q32 8 46 18" />
      <path d="M32 12 V54" />
      <path d="M18 24 H46 M18 48 H46" />
      <path d="M24 13 V5 M40 13 V5" />
      <circle cx="24" cy="4" r="2.5" /><circle cx="40" cy="4" r="2.5" />
      <path d="M25 32 L28 36 L25 40 L22 36 Z M39 32 L42 36 L39 40 L36 36 Z" />
    </>
  ),
  tefillin: (
    <>
      <path d="M20 22 H44 V42 H20 Z" />
      <path d="M16 42 H48 V48 H16 Z" />
      <path d="M26 28 Q26 37 32 37 Q38 37 38 28 M32 28 V37" />
      <path d="M16 45 Q6 46 8 58 M48 45 Q58 46 56 58" />
    </>
  ),
  tallit: (
    <>
      <rect x="8" y="14" width="48" height="32" rx="1" />
      <rect x="22" y="14" width="20" height="6" />
      <path d="M14 14 V46 M17 14 V46 M47 14 V46 M50 14 V46" />
      <path d="M10 46 V56 M13 46 V54 M51 46 V54 M54 46 V56" />
    </>
  ),
  shtreimel: (
    <>
      <path d="M20 32 Q20 16 32 16 Q44 16 44 32" />
      <ellipse cx="32" cy="36" rx="24" ry="9" />
      <ellipse cx="32" cy="34" rx="13" ry="4" />
      <path d="M10 33 L8 30 M16 29 L15 26 M24 27 L24 24 M40 27 L40 24 M48 29 L49 26 M54 33 L56 30 M14 42 L12 45 M24 45 L23 48 M40 45 L41 48 M50 42 L52 45" />
    </>
  ),
  niggun: (
    <>
      <ellipse cx="20" cy="48" rx="6" ry="4.5" />
      <ellipse cx="44" cy="42" rx="6" ry="4.5" />
      <path d="M26 48 V18 M50 42 V12" />
      <path d="M26 18 L50 12 L50 18 L26 24 Z" />
      <path d="M8 22 Q12 16 16 22 M54 50 Q58 44 62 50" />
    </>
  ),
  river: (
    <>
      <path d="M4 22 Q11 16 18 22 T32 22 T46 22 T60 22" />
      <path d="M4 32 Q11 26 18 32 T32 32 T46 32 T60 32" />
      <path d="M4 42 Q11 36 18 42 T32 42 T46 42 T60 42" />
      <path d="M10 52 H22 M30 52 H42 M48 52 H56" />
    </>
  ),
  mountain: (
    <>
      <path d="M4 54 L24 16 L34 34 L42 24 L60 54 Z" />
      <path d="M18 27 L24 16 L30 27 L26 25 L22 28 Z" />
      <path d="M38 30 L42 24 L46 30" />
    </>
  ),
  wheat: (
    <>
      <path d="M32 58 V18 M32 58 L20 22 M32 58 L44 22" />
      <path d="M26 44 H38" />
      <path d="M32 18 L28 13 M32 18 L36 13 M32 25 L28 20 M32 25 L36 20 M32 32 L28 27 M32 32 L36 27" />
      <path d="M21 25 L16 22 M21 25 L22 19 M23 31 L18 28 M23 31 L24 25" />
      <path d="M43 25 L48 22 M43 25 L42 19 M41 31 L46 28 M41 31 L40 25" />
    </>
  ),
  tree: (
    <>
      <path d="M32 36 Q14 38 14 25 Q14 11 32 9 Q50 11 50 25 Q50 38 32 36 Z" />
      <path d="M30 36 V56 M34 36 V56" />
      <path d="M30 56 Q24 56 21 59 M34 56 Q40 56 43 59" />
      <path d="M32 36 L24 25 M32 36 L41 23 M32 30 V18" />
    </>
  ),
  scepter: (
    <>
      <path d="M18 54 L42 22" />
      <circle cx="45" cy="18" r="5" />
      <path d="M41 12 L43 8 L45 11 L47 8 L49 12" />
      <circle cx="16" cy="57" r="2.5" />
      <path d="M24 46 L28 49 M34 32 L38 35" />
    </>
  ),
  throne: (
    <>
      <path d="M16 8 H48 M18 8 V32 M46 8 V32" />
      <path d="M24 8 Q32 2 40 8" />
      <path d="M18 18 H46" />
      <path d="M12 32 H52 V38 H12 Z" />
      <path d="M16 38 V56 M48 38 V56 M12 46 H52" />
    </>
  ),
  tent: (
    <>
      <path d="M6 52 L32 12 L58 52 Z" />
      <path d="M24 52 L32 32 L40 52" />
      <path d="M32 12 V6 M32 6 L37 8 L32 10" />
      <path d="M6 52 L2 58 M58 52 L62 58 M4 58 H60" />
    </>
  ),
  well: (
    <>
      <path d="M14 34 H50 V54 H14 Z" />
      <path d="M14 41 H50 M14 48 H50 M24 34 V41 M40 34 V41 M32 41 V48 M20 48 V54 M44 48 V54" />
      <path d="M18 34 V14 M46 34 V14" />
      <path d="M12 16 L32 6 L52 16" />
      <path d="M32 14 V24" />
      <path d="M28 24 H36 V30 H28 Z" />
    </>
  ),
  ladder: (
    <>
      <path d="M18 58 L28 6 M36 58 L46 6" />
      <path d="M20 48 H38 M22 38 H40 M24 28 H42 M26 18 H44" />
      <path d="M52 22 L54 26 L58 27 L54 28 L52 32 L50 28 L46 27 L50 26 Z" />
    </>
  ),
  stars: (
    <>
      <path d="M32 14 L35.5 24 L46 24 L37.5 30 L41 40 L32 34 L23 40 L26.5 30 L18 24 L28.5 24 Z" />
      <path d="M12 44 V52 M8 48 H16" />
      <path d="M52 8 V14 M49 11 H55" />
      <path d="M50 46 V52 M47 49 H53" />
      <path d="M10 14 V18 M8 16 H12" />
    </>
  ),
  cave: (
    <>
      <path d="M4 54 Q8 20 32 14 Q56 20 60 54 Z" />
      <path d="M20 54 Q20 34 32 32 Q44 34 44 54" />
      <path d="M10 36 L16 38 M48 30 L54 34 M30 22 L36 24" />
    </>
  ),
  ship: (
    <>
      <path d="M8 40 H56 L48 52 H16 Z" />
      <path d="M32 40 V8" />
      <path d="M34 12 L50 36 H34 Z" />
      <path d="M30 14 L16 36 H30 Z" />
      <path d="M32 8 L38 10 L32 12" />
      <path d="M6 58 Q12 54 18 58 T30 58 T42 58 T54 58" />
    </>
  ),
  shulchanAruch: (
    <>
      <path d="M8 30 H56 V35 H8 Z" />
      <path d="M14 35 V56 M50 35 V56" />
      <path d="M14 48 H50" />
      <path d="M32 28 Q24 20 14 22 V28 M32 28 Q40 20 50 22 V28" />
      <path d="M32 28 V22" />
    </>
  ),
  letter: (
    <>
      <rect x="8" y="16" width="48" height="32" rx="1.5" />
      <path d="M8 16 L32 36 L56 16" />
      <path d="M8 48 L26 31 M56 48 L38 31" />
      <circle cx="32" cy="38" r="4" />
    </>
  ),
  lantern: (
    <>
      <circle cx="32" cy="7" r="3.5" />
      <path d="M22 16 H42 L38 11 H26 Z" />
      <path d="M24 16 V44 H40 V16" />
      <path d="M24 21 H40 M24 39 H40" />
      <path d="M32 24 Q36 30 32 35 Q28 30 32 24 Z" />
      <path d="M20 44 H44 V49 H20 Z" />
    </>
  ),
  cityWalls: (
    <>
      <path d="M4 56 H60" />
      <path d="M6 56 V24 H18 V56 M46 56 V24 H58 V56" />
      <path d="M6 24 V19 H9 V24 M12 24 V19 H15 V24 M46 24 V19 H49 V24 M52 24 V19 H55 V24" />
      <path d="M18 34 H46" />
      <path d="M20 34 V30 H24 V34 M28 34 V30 H32 V34 M36 34 V30 H40 V34" />
      <path d="M26 56 V46 a6 6 0 0 1 12 0 V56" />
    </>
  ),
  kotel: (
    <>
      <rect x="6" y="10" width="52" height="44" />
      <path d="M6 21 H58 M6 32 H58 M6 43 H58" />
      <path d="M20 10 V21 M40 10 V21 M12 21 V32 M30 21 V32 M50 21 V32 M22 32 V43 M42 32 V43 M14 43 V54 M34 43 V54 M52 43 V54" />
      <path d="M26 21 Q27 16 30 17 M45 43 Q47 38 50 40" />
    </>
  ),
  sunrise: (
    <>
      <path d="M4 46 H60" />
      <path d="M16 46 A16 16 0 0 1 48 46" />
      <path d="M32 24 V14 M18 32 L11 25 M46 32 L53 25 M12 42 H5 M52 42 H59" />
      <path d="M12 54 H24 M30 54 H50" />
    </>
  ),
  moon: (
    <>
      <path d="M40 8 A24 24 0 1 0 56 44 A18 18 0 1 1 40 8 Z" />
      <path d="M52 14 V20 M49 17 H55" />
      <path d="M46 30 V34 M44 32 H48" />
    </>
  ),
  chanukiah: (
    <>
      <path d="M8 30 H56" />
      <path d="M8 30 V22 M14 30 V22 M20 30 V22 M26 30 V22 M38 30 V22 M44 30 V22 M50 30 V22 M56 30 V22" />
      <path d="M32 30 V14" />
      <circle cx="8" cy="19" r="1.8" /><circle cx="14" cy="19" r="1.8" /><circle cx="20" cy="19" r="1.8" /><circle cx="26" cy="19" r="1.8" />
      <circle cx="38" cy="19" r="1.8" /><circle cx="44" cy="19" r="1.8" /><circle cx="50" cy="19" r="1.8" /><circle cx="56" cy="19" r="1.8" />
      <circle cx="32" cy="11" r="1.8" />
      <path d="M32 30 V50 M22 56 H42 M32 50 L24 56 M32 50 L40 56" />
    </>
  ),
  kinor: (
    <>
      <path d="M18 54 Q8 30 16 8 M46 54 Q56 30 48 8" />
      <path d="M13 14 H51" />
      <path d="M16 54 H48" />
      <path d="M24 14 V54 M29 14 V54 M35 14 V54 M40 14 V54" />
    </>
  ),
  yad: (
    <>
      <path d="M14 54 L41 23" />
      <circle cx="12" cy="56" r="3" />
      <circle cx="44" cy="20" r="4" />
      <path d="M47 17 L56 8" />
      <path d="M20 47 L23 50 M30 36 L33 39" />
    </>
  ),
  kiddushCup: (
    <>
      <path d="M18 10 H46 Q46 30 32 34 Q18 30 18 10 Z" />
      <path d="M20 17 H44" />
      <path d="M32 34 V48" />
      <path d="M22 56 H42 M32 48 L24 56 M32 48 L40 56" />
    </>
  ),
  dove: (
    <>
      <path d="M8 36 Q24 28 40 31 L54 25 L48 33 Q42 45 26 45 Q14 45 8 36 Z" />
      <path d="M24 33 Q26 15 40 9 Q38 25 34 31" />
      <path d="M54 25 L60 23" />
      <path d="M58 24 Q60 18 63 20" />
      <circle cx="48" cy="29" r="1" />
    </>
  ),
  rainbow: (
    <>
      <path d="M6 50 A26 26 0 0 1 58 50" />
      <path d="M14 50 A18 18 0 0 1 50 50" />
      <path d="M22 50 A10 10 0 0 1 42 50" />
      <path d="M2 56 Q2 50 8 51 Q10 46 15 50 Q20 50 18 56 Z" />
      <path d="M46 56 Q46 50 52 51 Q54 46 59 50 Q64 50 62 56 Z" />
    </>
  ),
};

const CategoryIcon = ({ kind = 'star', className = '' }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICONS[kind] || ICONS.star}
  </svg>
);

export default CategoryIcon;
