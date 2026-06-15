import React, { useContext, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CartContext } from '../context/Context';

const Gallery = () => {
  const { t, displayProducts, lang } = useContext(CartContext);

  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  // --- CONFIGURATION ---
  const categories = [
    { id: 'all', label: t?.cat_all || (lang === 'he' ? 'הכל' : 'All') }
  ];

  // --- FILTERING ENGINE ---
  const processedProducts = useMemo(() => {
    let data = [...displayProducts];

    // 1. Search Filter
    if (searchTerm) {
      data = data.filter(item => {
        const title = item[lang]?.title || item.title || '';
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    // 2. Category Filter
    if (selectedCategory !== 'all') {
      data = data.filter(item => item.category === selectedCategory);
    }

    // 3. Sorting (לפי שנות מלוכה)
    if (sortOption === 'reign-low') {
      data.sort((a, b) => (a.reign_years || 0) - (b.reign_years || 0));
    } else if (sortOption === 'reign-high') {
      data.sort((a, b) => (b.reign_years || 0) - (a.reign_years || 0));
    } else if (sortOption === 'alpha') {
      data.sort((a, b) => {
        const titleA = a[lang]?.title || a.title || '';
        const titleB = b[lang]?.title || b.title || '';
        return titleA.localeCompare(titleB);
      });
    }

    return data;
  }, [displayProducts, searchTerm, selectedCategory, sortOption, lang]);

  // --- HANDLER ---
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOption('default');
  };

  return (
    <div className="page-wrapper">
      <Header title={t?.gallery_title || (lang === 'he' ? 'המלכים' : 'Kings')} />
      
      <main className="home-main">
         
         <div className="gallery-toolbar">
            <div className="toolbar-top">
              <select 
                className="sort-dropdown" 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">{t?.sort_default || (lang === 'he' ? 'מיין לפי...' : 'Sort By...')}</option>
                <option value="reign-low">{lang === 'he' ? 'שנות מלוכה: מהמעט להרבה' : 'Reign: Low to High'}</option>
                <option value="reign-high">{lang === 'he' ? 'שנות מלוכה: מהרבה למעט' : 'Reign: High to Low'}</option>
                <option value="alpha">{t?.sort_az || (lang === 'he' ? 'שם: א-ת' : 'Name: A-Z')}</option>
              </select>

              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder={t?.search_placeholder || (lang === 'he' ? 'חפש דמות...' : 'Search...') } 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={() => setSearchTerm('')}>✕</button>
                )}
              </div>
            </div>

            {categories.length > 1 && (
              <div className="toolbar-categories">
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
                
                {(selectedCategory !== 'all' || searchTerm || sortOption !== 'default') && (
                   <button className="reset-btn" onClick={handleReset}>
                      {t?.reset_filters || (lang === 'he' ? 'נקה סינון' : 'Reset')}
                   </button>
                )}
              </div>
            )}
         </div>

         <div className="gallery-grid">
            {processedProducts.length > 0 ? (
                processedProducts.map((item) => (
               <Card 
    key={item.id}
    image={item.image}
    title={item[lang]?.title || item.title} 
    reignDisplay={item[lang]?.reign_display || ''}
    description={item[lang]?.description || item.description}
    wikiLink={item[lang]?.wiki_link || ''}
    /* השורה החדשה שבודקת את השפה ושולחת את הטקסט הנכון */
    learnMoreText={lang === 'he' ? 'למד עוד' : 'Learn More'}
/>
                ))
            ) : (
                <div className="no-results">
                    <h3>{t?.no_results_title || (lang === 'he' ? 'לא נמצאו תוצאות' : 'No results found')}</h3>
                    <button className="text-btn" onClick={handleReset}>
                        {t?.clear_all || (lang === 'he' ? 'נקה הכל' : 'Clear All')}
                    </button>
                </div>
            )}
         </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;