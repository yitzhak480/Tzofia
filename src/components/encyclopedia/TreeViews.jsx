import React from 'react';
import { ZOOM } from '../../data/trees';

// The whole poster with a glowing ring around the person.
export const TreeHighlight = ({ tree, spot, alt = '' }) => (
  <div className="encyc-tree" style={{ aspectRatio: tree.ratio }}>
    <img src={tree.image} alt={alt} loading="lazy" />
    <span className="encyc-tree-ring" style={{ left: `${spot.x}%`, top: `${spot.y}%` }} />
  </div>
);

// A close-up of the poster around the person (uses the sharper image).
// The box has the poster's proportions, so zooming around the spot keeps
// the person in the middle.
export const TreeZoom = ({ tree, spot, zoom = ZOOM, alt = '', onPick }) => {
  const handleClick = onPick
    ? (e) => {
        // Turn a click inside the close-up back into a spot on the poster.
        const box = e.currentTarget.getBoundingClientRect();
        const u = ((e.clientX - box.left) / box.width) * 100;
        const v = ((e.clientY - box.top) / box.height) * 100;
        onPick({
          x: clamp(spot.x + (u - spot.x) / zoom),
          y: clamp(spot.y + (v - spot.y) / zoom),
        });
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
        style={{ transformOrigin: `${spot.x}% ${spot.y}%`, transform: `scale(${zoom})` }}
      />
    </div>
  );
};

const clamp = (n) => Math.round(Math.min(100, Math.max(0, n)) * 100) / 100;
