import React from 'react';
import { ZOOM } from '../../data/trees';

// The whole poster with a glowing ring around the person.
export const TreeHighlight = ({ tree, spot, alt = '' }) => (
  <div className="encyc-tree" style={{ aspectRatio: tree.ratio }}>
    <img src={tree.image} alt={alt} loading="lazy" />
    <span className="encyc-tree-ring" style={{ left: `${spot.x}%`, top: `${spot.y}%` }} />
  </div>
);

// How far to shift the enlarged poster (in % of the box) so the spot lands in
// the middle — but never so far that empty space shows past the poster's edge.
const shiftFor = (pos, zoom) => Math.min(0, Math.max(100 - 100 * zoom, 50 - pos * zoom));

const clamp = (n) => Math.round(Math.min(100, Math.max(0, n)) * 100) / 100;

// A close-up of the poster, centred on the person (uses the sharper image).
// The box has the poster's proportions. With `onPick`, clicking inside it
// moves the spot to the clicked place (used in the admin).
export const TreeZoom = ({ tree, spot, zoom = ZOOM, alt = '', onPick }) => {
  const tx = shiftFor(spot.x, zoom);
  const ty = shiftFor(spot.y, zoom);

  const handleClick = onPick
    ? (e) => {
        const box = e.currentTarget.getBoundingClientRect();
        const u = ((e.clientX - box.left) / box.width) * 100;
        const v = ((e.clientY - box.top) / box.height) * 100;
        onPick({ x: clamp((u - tx) / zoom), y: clamp((v - ty) / zoom) });
      }
    : undefined;

  return (
    <div
      className={`encyc-zoom ${onPick ? 'is-pickable' : ''}`}
      style={{ aspectRatio: tree.ratio }}
      onClick={handleClick}
    >
      <img
        src={tree.zoomImage || tree.image}
        alt={alt}
        loading="lazy"
        draggable={false}
        style={{ transformOrigin: '0 0', transform: `translate(${tx}%, ${ty}%) scale(${zoom})` }}
      />
    </div>
  );
};
