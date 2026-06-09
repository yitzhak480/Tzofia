import React, { useContext, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CartContext } from '../context/Context';

const Gallery = () => {
  const { t, displayProducts } = useContext(CartContext);

  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  // --- CONFIGURATION ---
  // We define this INSIDE the component so 't' updates when language changes
  const categories = [
    { id: 'all', label: t.cat_all || 'All' }, 
    { id: 'trees', label: t.cat_trees || 'Family Trees' },
    { id: 'digital', label: t.cat_digital || 'Digital Art' },
    { id: 'custom', label: t.cat_custom || 'Custom Orders' }
  ];

  // --- FILTERING ENGINE ---
  const processedProducts = useMemo(() => {
    let data = [...displayProducts];

    // 1. Search Filter
    if (searchTerm) {
      data = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Category Filter
    // Note: Ensure your products in products.json have a "category" field!
    if (selectedCategory !== 'all') {
      data = data.filter(item => item.category === selectedCategory);
    }

    // 3. Sorting
    if (sortOption === 'price-low') {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      data.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'alpha') {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [displayProducts, searchTerm, selectedCategory, sortOption]);

  // --- HANDLER ---
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOption('default');
  };

  return (
    <div className="page-wrapper">
      <Header title={t.gallery_title} />
      
      <main className="home-main">
         
         {/* --- TOOLBAR START --- */}
         <div className="gallery-toolbar">
            
            {/* Top Row: Sort & Search */}
            <div className="toolbar-top">
              {/* Sort Dropdown */}
              <select 
                className="sort-dropdown" 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">{t.sort_default || "Sort By..."}</option>
                <option value="price-low">{t.sort_low_high || "Price: Low to High"}</option>
                <option value="price-high">{t.sort_high_low || "Price: High to Low"}</option>
                <option value="alpha">{t.sort_az || "Name: A-Z"}</option>
              </select>

              {/* Search Input */}
              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder={t.search_placeholder || "Search..."} 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={() => setSearchTerm('')}>✕</button>
                )}
              </div>
            </div>

            {/* Bottom Row: Category Buttons */}
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
              
              {/* Reset Button (only visible if filters are on) */}
              {(selectedCategory !== 'all' || searchTerm || sortOption !== 'default') && (
                 <button className="reset-btn" onClick={handleReset}>
                    {t.reset_filters || "Reset"}
                 </button>
              )}
            </div>

         </div>
         {/* --- TOOLBAR END --- */}

         {/* --- PRODUCT GRID --- */}
         <div className="gallery-grid">
            {processedProducts.length > 0 ? (
                processedProducts.map((item) => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title} 
                        price={item.price}
                        description={item.description}
                    />
                ))
            ) : (
                <div className="no-results">
                    <h3>{t.no_results_title || "No items found"}</h3>
                    <p>{t.no_results_desc || "Try changing your filters"}</p>
                    <button className="text-btn" onClick={handleReset}>
                        {t.clear_all || "Clear Filters"}
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