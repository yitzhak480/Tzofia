// Admin tables for checking the data: every entry of a category (and its
// sub-categories) with its links, including the links written only on the
// other person's page.
const express = require('express');
const Category = require('../models/Category');
const Person = require('../models/Person');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// a link on someone else's page, seen from this page: [their type] -> [our column]
const FROM_OTHER = {
  student: 'teachers', // they say I am their student -> they are my teacher
  child: 'parents', // they list me as their child -> they are my parent
  sibling: 'siblings',
  spouse: 'spouses',
};
const OWN = { teacher: 'teachers', father: 'parents', mother: 'parents', parent: 'parents', sibling: 'siblings', spouse: 'spouses' };

// GET /api/tables/:category -> [{ slug, name, generation, places, teachers, parents, siblings, spouses, roles }]
router.get('/:category', requireAdmin, async (req, res) => {
  const cats = await Category.find().select('slug name parent').lean();
  const root = cats.find((c) => c.slug === req.params.category);
  if (!root) return res.status(404).json({ message: 'Category not found' });

  // the category and everything under it
  const inTree = new Set([String(root._id)]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const c of cats) {
      if (c.parent && inTree.has(String(c.parent)) && !inTree.has(String(c._id))) { inTree.add(String(c._id)); grew = true; }
    }
  }
  const catById = new Map(cats.map((c) => [String(c._id), c]));

  const all = await Person.find().select('slug name roles relations offices categories orders order published').lean();
  const byId = new Map(all.map((p) => [String(p._id), p]));
  const rows = all.filter((p) => (p.categories || []).some((c) => inTree.has(String(c))));
  const rowIds = new Set(rows.map((p) => String(p._id)));

  const link = (p, extra = {}) => ({ name: p.name?.he || '', slug: p.slug || null, ...extra });
  const out = new Map(rows.map((p) => [String(p._id), { teachers: [], parents: [], siblings: [], spouses: [], before: new Map() }]));
  const add = (list, item) => {
    const key = item.slug || item.name;
    const old = list.find((x) => (x.slug || x.name) === key);
    if (old) { old.uncertain = old.uncertain && item.uncertain; old.muvhak = old.muvhak || item.muvhak; return; }
    list.push(item);
  };

  for (const p of rows) {
    const o = out.get(String(p._id));
    for (const r of p.relations || []) {
      const col = OWN[r.type];
      if (!col) continue;
      const other = r.person ? byId.get(String(r.person)) : null;
      add(o[col], other ? link(other, { uncertain: r.uncertain, muvhak: r.muvhak, type: r.type })
        : { name: r.name?.he || '', slug: null, uncertain: r.uncertain, muvhak: r.muvhak, type: r.type });
    }
    for (const off of p.offices || []) {
      const label = off.label?.he || '';
      if (!o.before.has(label)) o.before.set(label, []);
      for (const b of off.before || []) {
        const other = b.person ? byId.get(String(b.person)) : null;
        add(o.before.get(label), other ? link(other) : { name: b.name?.he || '', slug: null });
      }
    }
  }
  // links written on other pages
  for (const q of all) {
    for (const r of q.relations || []) {
      const col = FROM_OTHER[r.type];
      if (!col || !r.person || !rowIds.has(String(r.person))) continue;
      add(out.get(String(r.person))[col], link(q, { uncertain: r.uncertain, muvhak: r.muvhak, type: r.type === 'child' ? 'parent' : r.type }));
    }
    for (const off of q.offices || []) {
      for (const a of off.after || []) {
        if (!a.person || !rowIds.has(String(a.person))) continue;
        const o = out.get(String(a.person));
        // their office, under my office of the same name (or my only office)
        const me = byId.get(String(a.person));
        const mine = (me.offices || []).find((x) => x.label?.he === off.label?.he) || (me.offices || [])[0];
        const label = mine?.label?.he || off.label?.he || '';
        if (!o.before.has(label)) o.before.set(label, []);
        add(o.before.get(label), link(q));
      }
    }
  }

  const genOf = (p) => {
    const g = (p.roles || []).map((r) => r.he || '').find((r) => r.startsWith('אמורא'));
    return g || '';
  };
  const result = rows.map((p) => {
    const o = out.get(String(p._id));
    const places = (p.categories || []).map((c) => catById.get(String(c))).filter((c) => c && inTree.has(String(c._id)) && String(c._id) !== String(root._id)).map((c) => c.name?.he);
    const orderIn = Math.min(...(p.categories || []).filter((c) => inTree.has(String(c))).map((c) => (p.orders?.[String(c)] ?? p.order ?? 9999)));
    return {
      slug: p.slug, name: p.name?.he || '', published: p.published,
      generation: genOf(p), places, order: Number.isFinite(orderIn) ? orderIn : 9999,
      roles: (p.roles || []).map((r) => r.he).filter((r) => r && !r.startsWith('אמורא')),
      offices: (p.offices || []).map((off) => ({ label: off.label?.he || '', from: off.from ?? null, to: off.to ?? null, before: o.before.get(off.label?.he || '') || [] })),
      teachers: o.teachers, parents: o.parents, siblings: o.siblings, spouses: o.spouses,
    };
  });
  result.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, 'he'));
  res.json(result);
});

module.exports = router;
