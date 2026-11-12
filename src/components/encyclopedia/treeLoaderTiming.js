import { useEffect, useState } from 'react';

// Timing of the growing-tree loader (used by TreeLoader and the splash).
export const STEP_MS = 520;
export const GENERATION_COUNT = 4;
export const HOLD_STEPS = 3; // pause on the full tree before starting again

// One full cycle: the tree grows, holds, and fades.
export const LOADER_CYCLE_MS = (GENERATION_COUNT + HOLD_STEPS) * STEP_MS;

// true once `ms` have passed since the component appeared.
export const useMinTime = (ms) => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), ms);
    return () => clearTimeout(t);
  }, [ms]);
  return done;
};
