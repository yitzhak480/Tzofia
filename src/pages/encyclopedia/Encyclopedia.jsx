import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryCard from '../../components/encyclopedia/CategoryCard';
import PersonCard from '../../components/encyclopedia/PersonCard';
import LoadingState from '../../components/encyclopedia/LoadingState';
import { CartContext } from '../../context/context';
import { api, useApi } from '../../api';
import { LOADER_CYCLE_MS, useMinTime } from '../../components/encyclopedia/treeLoaderTiming';

// /encyclopedia — the top-level categories (Kings, Prophets, Rabbis...) and a
// search box that finds a person anywhere in the encyclopedia.
const Encyclopedia = () => {
  const { lang } = useContext(CartContext);
  const he = lang === 'he';
  const { data: categories, loading: fetching, error } = useApi('/categories');
  // Show the growing tree at least once, even when the server answers fast.
  const shownOnce = useMinTime(LOADER_CYCLE_MS);
  const loading = fetching || !shownOnce;

  const [search, setSearch] = useState('');
  const [found, setFound] = useState({ q: '', people: [] });
  const query = search.trim();

  // Search after the visitor stops typing for a moment.
  useEffect(() => {
    if (!query) return undefined;
    let cancelled = false;
    const timer = setTimeout(() => {
      api(`/people?q=${encodeURIComponent(query)}`)
        .then((people) => !cancelled && setFound({ q: query, people }))
        .catch(() => !cancelled && setFound({ q: query, people: [] }));
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  // null = not searching; otherwise the results for what's typed now
  // (the previous results stay visible while the next search is on its way).
  const results = query ? (found.q ? found.people : null) : null;

  const topLevel = (categories || []).filter((c) => !c.parent);
  const categoryOf = (p) => (categories || []).find((c) => c._id === p.categories?.[0]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{he ? 'Tzofia Art | לומדות האילן' : 'Tzofia Art | Tree Learning Guides'}</title>
      </Helmet>

      <Header />

      <main className="home-main">
        <section className="home-hero encyc-hero" style={{ paddingBottom: '2rem' }}>
          <h1>{he ? 'לומדות האילן' : 'Tree Learning Guides'}</h1>
          <p>
            {he
              ? 'הכירו את הדמויות המופיעות באילנות שלנו. בחרו קבוצה כדי להתחיל, או חפשו דמות לפי שם.'
              : 'Meet the figures featured in our trees. Choose a group to begin, or search for a figure by name.'}
          </p>
        </section>

        <div className="gallery-toolbar">
          <div className="toolbar-top">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder={he ? 'חפשו דמות...' : 'Search a figure...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label={he ? 'חיפוש דמות' : 'Search a figure'}
              />
              {search && (
                <button className="clear-search-btn" onClick={() => setSearch('')} aria-label={he ? 'נקה' : 'Clear'}>
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {results ? (
          results.length > 0 ? (
            <div className="gallery-grid encyc-bottom-space">
              {results.map((p) => <PersonCard key={p._id} person={p} category={categoryOf(p)} />)}
            </div>
          ) : (
            <div className="no-results">
              <h3>{he ? 'לא נמצאו תוצאות' : 'No results found'}</h3>
              <button className="text-btn" onClick={() => setSearch('')}>
                {he ? 'נקה חיפוש' : 'Clear search'}
              </button>
            </div>
          )
        ) : loading || error ? (
          <LoadingState loading={loading} error={error} />
        ) : topLevel.length > 0 ? (
          <section className="picture-cards">
            {topLevel.map((c) => <CategoryCard key={c._id} category={c} />)}
          </section>
        ) : (
          <div className="encyc-status">
            <p>{he ? 'עדיין אין קטגוריות.' : 'No categories yet.'}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Encyclopedia;
