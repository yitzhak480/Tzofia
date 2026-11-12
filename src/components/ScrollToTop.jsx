import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// The page's scroll position. (With "overflow-x: hidden" on html and body,
// some phone browsers scroll the body instead of the window, so both.)
const getY = () => Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
const setY = (y) => {
  window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y;
};

const KEY = 'scroll-positions';
const load = () => { try { return JSON.parse(sessionStorage.getItem(KEY)) || {}; } catch { return {}; } };
const save = (all) => { try { sessionStorage.setItem(KEY, JSON.stringify(all)); } catch { /* not available */ } };

// Opening a new page starts at its top (or at the #part named in the link).
// Going back (or forward) returns to where you were on that page – once its
// content has loaded, since most pages load their lists after they open.
const ScrollToTop = () => {
  const location = useLocation();
  const type = useNavigationType();
  const { key, pathname, search, hash } = location;

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // remember this page's place while reading it
  useEffect(() => {
    let timer = null;
    const remember = () => {
      clearTimeout(timer);
      timer = setTimeout(() => { const all = load(); all[key] = getY(); save(all); }, 120);
    };
    window.addEventListener('scroll', remember, { passive: true });
    document.body.addEventListener('scroll', remember, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', remember);
      document.body.removeEventListener('scroll', remember);
    };
  }, [key]);

  useLayoutEffect(() => {
    if (type !== 'POP') {
      if (hash) {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) { el.scrollIntoView(); return undefined; }
      }
      setY(0);
      return undefined;
    }
    // back / forward: wait until the page is long enough, then go to the old place
    const target = load()[key];
    if (!target) return undefined;
    let stopped = false;
    const stop = () => { stopped = true; };
    window.addEventListener('touchstart', stop, { once: true, passive: true });
    window.addEventListener('wheel', stop, { once: true, passive: true });
    const started = Date.now();
    const tryRestore = () => {
      if (stopped) return;
      setY(target);
      if (Math.abs(getY() - target) > 2 && Date.now() - started < 4000) requestAnimationFrame(tryRestore);
    };
    tryRestore();
    return () => {
      stopped = true;
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('wheel', stop);
    };
  }, [key, type, pathname, search, hash]);

  return null;
};

export default ScrollToTop;
