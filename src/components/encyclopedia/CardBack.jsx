import React, { useId } from 'react';

// A decorative "back of a playing card" for categories without a picture:
// burgundy with a gold diamond lattice, a double gold frame and a medallion.
const GOLD = '#c5a059';
const BURGUNDY = '#7a2b23';

const corner = (x, y) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" fill={GOLD} />
    <rect x="-4" y="-4" width="8" height="8" transform="rotate(45)" fill={BURGUNDY} />
  </g>
);

const CardBack = () => {
  const id = useId().replace(/:/g, '');
  const cx = 305;
  const cy = 285;

  return (
    <svg className="encyc-card-back" viewBox="0 0 610 910" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <pattern id={`lattice-${id}`} width="38" height="38" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="38" height="38" fill={BURGUNDY} />
          <path d="M0 0H38M0 0V38" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.4" />
          <circle cx="19" cy="19" r="2.2" fill={GOLD} fillOpacity="0.6" />
        </pattern>
        <radialGradient id={`glow-${id}`} cx="50%" cy="31%" r="45%">
          <stop offset="0%" stopColor="#a8483a" stopOpacity="0.55" />
          <stop offset="100%" stopColor={BURGUNDY} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="610" height="910" fill={`url(#lattice-${id})`} />
      <rect width="610" height="910" fill={`url(#glow-${id})`} />

      {/* double frame */}
      <rect x="22" y="22" width="566" height="866" rx="16" fill="none" stroke={GOLD} strokeWidth="4" />
      <rect x="36" y="36" width="538" height="838" rx="10" fill="none" stroke={GOLD} strokeWidth="1.5" />
      {corner(36, 36)}
      {corner(574, 36)}
      {corner(36, 874)}
      {corner(574, 874)}

      {/* medallion */}
      <circle cx={cx} cy={cy} r="118" fill={BURGUNDY} stroke={GOLD} strokeWidth="4" />
      <circle cx={cx} cy={cy} r="104" fill="none" stroke={GOLD} strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      <g fill="none" stroke={GOLD} strokeWidth="3">
        <rect x={cx - 58} y={cy - 58} width="116" height="116" />
        <rect x={cx - 58} y={cy - 58} width="116" height="116" transform={`rotate(45 ${cx} ${cy})`} />
      </g>
      <circle cx={cx} cy={cy} r="34" fill="none" stroke={GOLD} strokeWidth="2" />
      <circle cx={cx} cy={cy} r="14" fill={GOLD} />
      {[0, 90, 180, 270].map((a) => (
        <circle key={a} cx={cx} cy={cy - 140} r="6" fill={GOLD} transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
    </svg>
  );
};

export default CardBack;
