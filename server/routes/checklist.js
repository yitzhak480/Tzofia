const express = require('express');
const ChecklistItem = require('../models/ChecklistItem');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// How far (in % of the poster) an entry's tree spot may be from a name and
// still count as that name. A box is about 3% wide and 1% tall.
const MAX_DX = 1.8;
const MAX_DY = 0.8;

// GET /api/checklist/:tree -> the names on that poster, each with the entry
// whose tree spot sits on it (if any).
router.get('/:tree', requireAdmin, async (req, res) => {
  const tree = req.params.tree;
  const [items, people] = await Promise.all([
    ChecklistItem.find({ tree }).sort({ order: 1 }).lean(),
    Person.find({ 'treeSpots.tree': tree }).select('slug name treeSpots published').lean(),
  ]);
  // Each spot goes to the nearest name only, so stacked boxes don't share one entry.
  const found = new Map();
  for (const p of people) {
    for (const s of p.treeSpots.filter((t) => t.tree === tree)) {
      let best = null;
      let bestD = Infinity;
      for (const it of items) {
        const dx = Math.abs(it.x - s.x);
        const dy = Math.abs(it.y - s.y);
        if (dx > MAX_DX || dy > MAX_DY) continue;
        const d = (dx / MAX_DX) ** 2 + (dy / MAX_DY) ** 2;
        if (d < bestD) { bestD = d; best = it; }
      }
      if (best && !found.has(String(best._id))) {
        found.set(String(best._id), { slug: p.slug, name: p.name, published: p.published });
      }
    }
  }
  res.json(items.map((it) => ({ ...it, entry: found.get(String(it._id)) || null })));
});

// PATCH /api/checklist/item/:id { done } -> tick or untick by hand
router.patch('/item/:id', requireAdmin, async (req, res) => {
  const item = await ChecklistItem.findByIdAndUpdate(
    req.params.id,
    { done: Boolean(req.body.done) },
    { new: true, runValidators: true }
  ).lean();
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

module.exports = router;
