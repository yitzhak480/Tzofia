import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/context';
import TreeLoader from './encyclopedia/TreeLoader';
import { LOADER_CYCLE_MS, useMinTime } from './encyclopedia/treeLoaderTiming';

const MAX_MS = 6000; // never block the site longer than this

// The opening screen when someone enters the website: the growing tree plays
// at least once, and stays until the page's pictures have loaded.
const SiteSplash = () => {
  const { lang } = useContext(CartContext);
  const minDone = useMinTime(LOADER_CYCLE_MS);
  const maxDone = useMinTime(MAX_MS);
  const [pageLoaded, setPageLoaded] = useState(() => document.readyState === 'complete');
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (pageLoaded) return undefined;
    const onLoad = () => setPageLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [pageLoaded]);

  const leaving = (minDone && pageLoaded) || maxDone;

  // Remove it from the page after the fade-out.
  useEffect(() => {
    if (!leaving) return undefined;
    const t = setTimeout(() => setGone(true), 500);
    return () => clearTimeout(t);
  }, [leaving]);

  if (gone) return null;

  return (
    <div className={`site-splash ${leaving ? 'is-leaving' : ''}`} aria-hidden={leaving}>
      <img src="/images/Asset 5.svg" alt="Tzofia Art" className="site-splash-logo" />
      <TreeLoader label={lang === 'he' ? 'טוען...' : 'Loading...'} />
    </div>
  );
};

export default SiteSplash;
