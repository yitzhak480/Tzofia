import React from 'react';

// The bar that appears when rows are chosen: move them all together.
const ReorderBar = ({ count, onEdge, onStep, onClear, busy }) => {
  if (!count) return null;
  return (
    <div className="admin-reorder-bar">
      <strong>{count === 1 ? 'נבחר ערך אחד' : `נבחרו ${count}`}</strong>
      <div className="admin-reorder-actions">
        <button type="button" className="admin-btn" disabled={busy} onClick={() => onEdge(-1)}>⇈ להתחלה</button>
        <button type="button" className="admin-btn" disabled={busy} onClick={() => onStep(-1)}>▲ למעלה</button>
        <button type="button" className="admin-btn" disabled={busy} onClick={() => onStep(1)}>▼ למטה</button>
        <button type="button" className="admin-btn" disabled={busy} onClick={() => onEdge(1)}>⇊ לסוף</button>
        <button type="button" className="admin-btn" disabled={busy} onClick={onClear}>ביטול הבחירה</button>
      </div>
    </div>
  );
};

export default ReorderBar;
