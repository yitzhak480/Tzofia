import React, { useId } from 'react';
import { CARD_COLORS } from './cardColors';

// A decorative "back of a playing card" for categories without a picture:
// a coloured background with a gold lattice, a double frame and a medallion.
// The admin picks the colour per category.
// medallion={false} leaves only the pattern and frame (for a symbol on top).
const CardBack = ({ color = 'burgundy', medallion = true }) => {
  const c = CARD_COLORS[color] || CARD_COLORS.burgundy;
  const id = useId().replace(/:/g, '');
  const cx = 305;
  const cy = 285;

  const corner = (x, y) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" fill={c.line} />
      <rect x="-4" y="-4" width="8" height="8" transform="rotate(45)" fill={c.base} />
    </g>
  );

  return (
    <svg className="encyc-card-back" viewBox="0 0 610 910" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <pattern id={`lattice-${id}`} width="38" height="38" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="38" height="38" fill={c.base} />
          <path d="M0 0H38M0 0V38" stroke={c.line} strokeOpacity={c.marble ? 0.18 : c.light ? 0.3 : 0.45} strokeWidth="1.4" />
          <circle cx="19" cy="19" r="2.2" fill={c.line} fillOpacity={c.marble ? 0.3 : c.light ? 0.4 : 0.6} />
        </pattern>
        <radialGradient id={`glow-${id}`} cx="50%" cy="31%" r="45%">
          <stop offset="0%" stopColor={c.glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c.base} stopOpacity="0" />
        </radialGradient>
        {c.marble && (
          <filter id={`marble-${id}`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.022" numOctaves="4" seed="7" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.42  0 0 0 0 0.38  0 0 0 -2.2 1.25" />
          </filter>
        )}
      </defs>

      <rect width="610" height="910" fill={`url(#lattice-${id})`} />
      {c.marble && (
        <>
          <rect width="610" height="910" filter={`url(#marble-${id})`} opacity="0.55" />
          <g fill="none" stroke="#9c958a" strokeLinecap="round" opacity="0.45">
            <path d="M-20 140 C 120 180, 180 90, 320 150 S 520 120, 640 210" strokeWidth="1.6" />
            <path d="M-10 420 C 140 360, 230 470, 380 400 S 560 460, 640 380" strokeWidth="1.2" />
            <path d="M60 -10 C 90 120, 40 240, 120 360" strokeWidth="0.9" />
            <path d="M470 -10 C 430 160, 520 260, 470 420" strokeWidth="1" />
          </g>
        </>
      )}
      <rect width="610" height="910" fill={`url(#glow-${id})`} />

      {/* double frame */}
      <rect x="22" y="22" width="566" height="866" rx="16" fill="none" stroke={c.line} strokeWidth="4" />
      <rect x="36" y="36" width="538" height="838" rx="10" fill="none" stroke={c.line} strokeWidth="1.5" />
      {corner(36, 36)}
      {corner(574, 36)}
      {corner(36, 874)}
      {corner(574, 874)}

      {/* medallion */}
      {medallion && (
        <>
          <circle cx={cx} cy={cy} r="118" fill={c.base} stroke={c.line} strokeWidth="4" />
          <circle cx={cx} cy={cy} r="104" fill="none" stroke={c.line} strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
          <g fill="none" stroke={c.accent} strokeWidth="3">
            <rect x={cx - 58} y={cy - 58} width="116" height="116" />
            <rect x={cx - 58} y={cy - 58} width="116" height="116" transform={`rotate(45 ${cx} ${cy})`} />
          </g>
          <circle cx={cx} cy={cy} r="34" fill="none" stroke={c.accent} strokeWidth="2" />
          <circle cx={cx} cy={cy} r="14" fill={c.accent} />
          {[0, 90, 180, 270].map((a) => (
            <circle key={a} cx={cx} cy={cy - 140} r="6" fill={c.line} transform={`rotate(${a} ${cx} ${cy})`} />
          ))}
        </>
      )}
    </svg>
  );
};

export default CardBack;
