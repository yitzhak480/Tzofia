import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryCard from '../../components/encyclopedia/CategoryCard';
import PersonCard from '../../components/encyclopedia/PersonCard';
import Breadcrumbs from '../../components/encyclopedia/Breadcrumbs';
import LoadingState from '../../components/encyclopedia/LoadingState';
import { CartContext } from '../../context/context';
import { tr, useApi } from '../../api';

// /encyclopedia/kings — shows the subcategories of a category (as large cards)
// and/or the people in it (as person cards).
const EncyclopediaCategory = () => {
  const { slug } = useParams();
  const { lang } = useContext(CartContext);
  const he = lang === 'he';
  const { data, loading, error } = useApi(`/categories/${encodeURIComponent(slug)}`);

  const name = data ? tr(data.category.name, lang) : '';
  const description = data ? tr(data.category.description, lang) : '';

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{`Tzofia Art | ${name || (he ? 'האנציקלופדיה' : 'Encyclopedia')}`}</title>
      </Helmet>

      <Header />

      <main className="home-main">
        {!data ? (
          <LoadingState loading={loading} error={error} />
        ) : (
          <>
            <section className="home-hero encyc-hero" style={{ paddingBottom: '2rem' }}>
              <h1>{name}</h1>
              <Breadcrumbs categories={data.ancestors} current={name} />
              {description && <p>{description}</p>}
            </section>

            {data.children.length > 0 && (
              <section className="home-cards-grid encyc-cards-grid">
                {data.children.map((c) => <CategoryCard key={c._id} category={c} />)}
              </section>
            )}

            {data.people.length > 0 && (
              <div className="gallery-grid encyc-bottom-space">
                {data.people.map((p) => <PersonCard key={p._id} person={p} />)}
              </div>
            )}

            {data.children.length === 0 && data.people.length === 0 && (
              <div className="encyc-status">
                <p>{he ? 'עדיין אין תוכן בקטגוריה זו.' : 'Nothing here yet.'}</p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default EncyclopediaCategory;
