import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';

// Shown while a page loads, or when it fails / isn't found.
// The free Render server "sleeps" when unused and can take up to a minute to
// wake, so after a few seconds we tell the visitor why it's slow.
const LoadingState = ({ loading, error }) => {
  const { lang } = useContext(CartContext);
  const he = lang === 'he';
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => setSlow(true), 5000);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className="encyc-status" role="status">
        <p>{he ? 'טוען...' : 'Loading...'}</p>
        {slow && (
          <p className="encyc-status-note">
            {he ? 'השרת מתעורר, זה עשוי לקחת עד דקה.' : 'The server is waking up, this can take up to a minute.'}
          </p>
        )}
      </div>
    );
  }

  if (error?.status === 404) {
    return (
      <div className="encyc-status">
        <h3>{he ? 'הדף לא נמצא' : 'Page not found'}</h3>
        <Link to="/encyclopedia" className="text-btn">
          {he ? 'חזרה ללומדות האילן' : 'Back to Tree Learning Guides'}
        </Link>
      </div>
    );
  }

  return (
    <div className="encyc-status">
      <h3>{he ? 'אירעה שגיאה בטעינה' : 'Something went wrong'}</h3>
      <button className="text-btn" onClick={() => window.location.reload()}>
        {he ? 'נסו שוב' : 'Try again'}
      </button>
    </div>
  );
};

export default LoadingState;
