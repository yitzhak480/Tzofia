import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/encyclopedia/Breadcrumbs';
import LoadingState from '../../components/encyclopedia/LoadingState';
import FamilyTree from '../../components/encyclopedia/FamilyTree';
import { TreeHighlight, TreeZoom } from '../../components/encyclopedia/TreeViews';
import { cardSummary, familyTitle, yearsText } from '../../components/encyclopedia/personFormat';
import { treeById } from '../../data/trees';
import { CartContext } from '../../context/context';
import { tr, useApi } from '../../api';

// Links in the article open in a new tab.
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A' && node.getAttribute('href')) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

// /encyclopedia/person/david — a person's (or place's) page.
// Layout: info box (picture, details, sources) beside the article, then the
// person on our tree posters, then the family tree. Empty parts are hidden.
const EncyclopediaPerson = () => {
  const { slug } = useParams();
  const { lang } = useContext(CartContext);
  const he = lang === 'he';
  const { data, loading, error } = useApi(`/people/${encodeURIComponent(slug)}`);

  const person = data?.person;
  const name = person ? tr(person.name, lang) : '';
  const articleHtml = useMemo(
    () => (person ? DOMPurify.sanitize(tr(person.content, lang)) : ''),
    [person, lang]
  );

  if (!person) {
    return (
      <div className="page-wrapper">
        <Header />
        <main className="home-main">
          <LoadingState loading={loading} error={error} />
        </main>
        <Footer />
      </div>
    );
  }

  const isPlace = person.kind !== 'person' && Boolean(person.kind); // place, book, vessel, event...
  const roles = (person.roles || []).map((r) => tr(r, lang)).filter(Boolean);
  const lifeText = yearsText(person.life, lang);
  const offices = (person.offices || []).filter((o) => tr(o.label, lang));
  const sources = (!he && person.sourcesEn?.length ? person.sourcesEn : person.sources) || [];
  const spots = (person.treeSpots || []).map((s) => ({ ...s, tree: treeById(s.tree) })).filter((s) => s.tree);
  const related = (person.relations || []).filter((r) => r.type === 'related');
  const family = { ...person, relations: (person.relations || []).filter((r) => r.type !== 'related') };
  // On the English site, an article written only in Hebrew is shown right-to-left.
  const hebrewOnly = !he && !person.content?.en && Boolean(person.content?.he);

  const rows = [
    roles.length > 0 && [isPlace ? (he ? 'סוג' : 'Type') : he ? 'תפקידים' : 'Roles', roles.join(', ')],
    lifeText && [isPlace ? (he ? 'תקופה' : 'Period') : he ? 'שנות חיים' : 'Lifetime', lifeText],
    ...offices.map((o) => [
      tr(o.label, lang),
      <>
        {yearsText(o, lang) || '—'}
        {tr(o.note, lang) && <small dir="auto">{tr(o.note, lang)}</small>}
      </>,
    ]),
    data.categories.length > 0 && [
      he ? 'קטגוריות' : 'Categories',
      data.categories.map((c, i) => (
        <React.Fragment key={c._id}>
          {i > 0 && ', '}
          <Link to={`/encyclopedia/${c.slug}`} className="encyc-link">{tr(c.name, lang)}</Link>
        </React.Fragment>
      )),
    ],
  ].filter(Boolean);
  const hasInfobox = rows.length > 0 || person.mainImage?.url || sources.length > 0;
  const parent = data.ancestors[data.ancestors.length - 1];
  const arrow = he ? '←' : '→';

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{`Tzofia Art | ${name}`}</title>
        {cardSummary(person, lang) && <meta name="description" content={cardSummary(person, lang)} />}
      </Helmet>

      <Header />

      <main className="home-main">
        <section className="home-hero encyc-hero" style={{ paddingBottom: '1.5rem' }}>
          <h1 dir="auto">{name}</h1>
          <Breadcrumbs categories={data.ancestors} current={name} />
        </section>

        <article className={`encyc-article encyc-person ${hasInfobox ? '' : 'no-infobox'}`}>
          {hasInfobox && (
            <aside className="encyc-infobox">
              <div className="encyc-infobox-title" dir="auto">{name}</div>
              {person.mainImage?.url && <img src={person.mainImage.url} alt={name} className="encyc-infobox-image" />}
              {rows.length > 0 && (
                <table>
                  <tbody>
                    {rows.map(([label, value], i) => (
                      <tr key={i}>
                        <th scope="row" dir="auto">{label}</th>
                        <td dir="auto">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {sources.length > 0 && (
                <div className="encyc-infobox-sources">
                  <div className="encyc-infobox-subtitle">{he ? 'מקורות' : 'Sources'}</div>
                  <ol dir="auto">{sources.map((src, i) => <li key={i}>{src}</li>)}</ol>
                </div>
              )}
            </aside>
          )}

          {hebrewOnly && <p className="encyc-lang-note">This article is currently available in Hebrew only.</p>}
          {articleHtml ? (
            <div
              className="encyc-content"
              dir={hebrewOnly ? 'rtl' : undefined}
              lang={hebrewOnly ? 'he' : undefined}
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          ) : (
            cardSummary(person, lang) && <p className="encyc-content" dir="auto">{cardSummary(person, lang)}</p>
          )}

          {spots.length > 0 && (
            <section className="encyc-section">
              <h2 className="encyc-section-title">{he ? `${name} באילן היוחסין שלנו` : `${name} in Our Family Tree`}</h2>
              {spots.map((s) => (
                <div key={s.tree.id} className="encyc-in-tree">
                  <Link to={s.tree.page} className="encyc-in-tree-card" title={he ? 'לעמוד האילן' : 'Go to the tree'}>
                    <TreeHighlight tree={s.tree} spot={s} alt={tr(s.tree.name, lang)} />
                    <span className="encyc-caption">{tr(s.tree.name, lang)} {arrow}</span>
                  </Link>
                  <div className="encyc-in-tree-card">
                    <TreeZoom tree={s.tree} spot={s} alt={he ? `${name} באילן, מקרוב` : `${name} on the tree, close up`} />
                    <span className="encyc-caption">{he ? `מקרוב: ${name} באילן` : `Close up: ${name} on the tree`}</span>
                  </div>
                </div>
              ))}
            </section>
          )}

          {!isPlace && family.relations.length > 0 && (
            <section className="encyc-section">
              <h2 className="encyc-section-title">{familyTitle(family, lang)}</h2>
              <FamilyTree person={family} name={name} />
            </section>
          )}

          {related.length > 0 && (
            <section className="encyc-section">
              <h2 className="encyc-section-title">{he ? 'ערכים קשורים' : 'Related Entries'}</h2>
              <div className="encyc-family-row">
                {related.map((r, i) =>
                  r.slug ? (
                    <Link key={i} to={`/encyclopedia/person/${r.slug}`} className="encyc-chip is-link" dir="auto">{tr(r.name, lang)}</Link>
                  ) : (
                    <span key={i} className="encyc-chip" dir="auto">{tr(r.name, lang)}</span>
                  )
                )}
              </div>
            </section>
          )}

          {parent && (
            <div className="encyc-back">
              <Link to={`/encyclopedia/${parent.slug}`} className="text-btn">
                {he ? `חזרה ל${tr(parent.name, lang)}` : `Back to ${tr(parent.name, lang)}`}
              </Link>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default EncyclopediaPerson;
