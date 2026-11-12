import React, { useEffect, useState } from 'react';

// A loading animation of a growing family tree, in the colours of our
// posters: one box, then two branches, then four, then eight, then again.
const COLORS = {
  green: '#9db86e', // the Avot
  gold: '#d8b84a', // the tribes and judges
  blue: '#86b6d6', // the House of David
  red: '#e07b5f', // the Kohanim
};

// Each generation: y position, box size, and colour for each box (left→right).
const GENERATIONS = [
  { y: 16, w: 64, h: 26, colors: ['green'] },
  { y: 66, w: 54, h: 22, colors: ['gold', 'gold'] },
  { y: 112, w: 44, h: 18, colors: ['blue', 'blue', 'red', 'red'] },
  { y: 154, w: 30, h: 14, colors: ['blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red'] },
];
const WIDTH = 320;
const STEP_MS = 520;
const HOLD_STEPS = 3; // pause on the full tree before starting again

// Centre x of box i in a generation of n boxes.
const xOf = (i, n) => (WIDTH / n) * (i + 0.5);

const TreeLoader = ({ label }) => {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [step, setStep] = useState(reduceMotion ? GENERATIONS.length - 1 : 0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const total = GENERATIONS.length + HOLD_STEPS;
    const timer = setInterval(() => setStep((s) => (s + 1) % total), STEP_MS);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const fading = step >= GENERATIONS.length + HOLD_STEPS - 1;

  return (
    <div className="tree-loader" role="status" aria-live="polite">
      <svg viewBox={`0 0 ${WIDTH} 172`} className={`tree-loader-svg ${fading ? 'is-fading' : ''}`} aria-hidden="true">
        {GENERATIONS.map((g, gi) => {
          const n = g.colors.length;
          const visible = step >= gi;
          return (
            <g key={gi}>
              {/* connectors from the previous generation, poster style */}
              {gi > 0 &&
                g.colors.map((_, i) => {
                  const parent = GENERATIONS[gi - 1];
                  const px = xOf(Math.floor(i / 2), parent.colors.length);
                  const top = parent.y + parent.h;
                  const mid = (top + g.y) / 2;
                  const x = xOf(i, n);
                  const d = `M${px} ${top} V${mid} H${x} V${g.y}`;
                  return (
                    <path
                      key={`l${i}`}
                      d={d}
                      className={`tree-loader-line ${visible ? 'is-on' : ''}`}
                      stroke={COLORS[g.colors[i]]}
                      pathLength="1"
                    />
                  );
                })}
              {g.colors.map((c, i) => {
                const x = xOf(i, n);
                return (
                  <g
                    key={`b${i}`}
                    className={`tree-loader-box ${visible ? 'is-on' : ''}`}
                    style={{ transformOrigin: `${x}px ${g.y + g.h / 2}px`, transitionDelay: visible ? `${180 + i * 25}ms` : '0ms' }}
                  >
                    <rect x={x - g.w / 2} y={g.y} width={g.w} height={g.h} rx={g.h * 0.28} fill={COLORS[c]} />
                    <rect
                      x={x - g.w * 0.3}
                      y={g.y + g.h * 0.42}
                      width={g.w * 0.6}
                      height={Math.max(2, g.h * 0.16)}
                      rx="1"
                      fill="rgba(44, 36, 27, 0.55)"
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      {label && <p className="tree-loader-label">{label}</p>}
    </div>
  );
};

export default TreeLoader;
