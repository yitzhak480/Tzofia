// Chronological order "by the tree": an entry's year comes from its role
// (office) or years of life, and when it has no years, from where it stands
// on our poster (the posters run top to bottom in time).

// (height on the poster in %, year) — read from the poster's timeline on the
// left and from the kings of Judah, whose years are written on their boxes.
const ANCHORS = {
  biblical: [
    [15.3, 1948], [17.5, 2048], [21.0, 2108], [23.9, 2238], [29.5, 2448], [36.2, 2884], [38.8, 2928],
    [41.1, 2964], [43.0, 2981], [44.6, 2983], [46.15, 3024], [47.65, 3047], [49.05, 3055], [50.5, 3061],
    [52.35, 3100], [53.85, 3115], [55.5, 3167], [57.05, 3183], [58.85, 3199], [59.6, 3228], [60.95, 3283],
    [62.75, 3285], [64.55, 3316], [65.7, 3327], [66.1, 3338], [69.3, 3408], [79.1, 3622], [85.55, 3728],
  ],
  gmara: [[11.9, 3979], [41.4, 4236], [88.45, 4688]],
};

const fromHeight = (tree, y) => {
  const a = ANCHORS[tree];
  if (!a) return null;
  if (y <= a[0][0]) return a[0][1] - (a[0][0] - y) * ((a[1][1] - a[0][1]) / (a[1][0] - a[0][0]));
  for (let i = 1; i < a.length; i += 1) {
    if (y <= a[i][0]) {
      const [y0, t0] = a[i - 1];
      const [y1, t1] = a[i];
      return t0 + ((y - y0) / (y1 - y0)) * (t1 - t0);
    }
  }
  const [yA, tA] = a[a.length - 2];
  const [yB, tB] = a[a.length - 1];
  return tB + ((y - yB) * (tB - tA)) / (yB - yA);
};

const has = (n) => n !== null && n !== undefined && !Number.isNaN(Number(n));

// The year used for sorting (Infinity = unknown, goes last).
const yearOf = (p) => {
  const office = (p.offices || []).find((o) => has(o.from));
  if (office) return Number(office.from);
  if (has(p.life?.from)) return Number(p.life.from);
  const spot = (p.treeSpots || [])[0];
  if (spot) {
    const y = fromHeight(spot.tree, spot.y);
    if (y !== null) return y;
  }
  return Infinity;
};

module.exports = { yearOf };
