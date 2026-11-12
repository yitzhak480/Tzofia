import React from 'react';
import CardBack from '../encyclopedia/CardBack';
import { COLOR_GROUPS } from '../encyclopedia/cardColors';

// Choose a card colour: the ten main colours, plus two drawers with the
// colours of our two tree posters. With `autoColor`, an "automatic" option
// is shown first (value '').
const ColorPicker = ({ value, onChange, autoColor, autoLabel = 'אוטומטי' }) => {
  const option = (key, label, color) => (
    <button
      key={key || 'auto'}
      type="button"
      role="radio"
      aria-checked={value === key}
      className={`admin-color-option ${value === key ? 'is-selected' : ''}`}
      onClick={() => onChange(key)}
    >
      <span className="admin-color-swatch"><CardBack color={color} medallion={false} /></span>
      {label}
    </button>
  );

  const [main, ...drawers] = COLOR_GROUPS;

  return (
    <div className="admin-color-groups">
      <div className="admin-color-picker" role="radiogroup">
        {autoColor && option('', autoLabel, autoColor)}
        {Object.entries(main.colors).map(([key, c]) => option(key, c.he, key))}
      </div>
      {drawers.map((g) => (
        <details key={g.id} className="admin-color-drawer" open={Boolean(g.colors[value])}>
          <summary>{g.he}</summary>
          <div className="admin-color-picker" role="radiogroup">
            {Object.entries(g.colors).map(([key, c]) => option(key, c.he, key))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default ColorPicker;
