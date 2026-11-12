// "Before" and "after" in a role (who held it before / after this person).
// Like relations, it only needs to be written once: if David's reign says
// "after: Shlomo", Shlomo's reign shows "before: David" automatically.
const Person = require('../models/Person');

const keyOf = (link) => (link.person ? `id:${link.person}` : `name:${(link.name?.he || '').trim()}`);

const resolveOffices = async (person) => {
  const offices = (person.offices || []).map((o) => ({ ...o, before: [...(o.before || [])], after: [...(o.after || [])] }));
  if (!offices.length) return offices;
  const nameHe = person.name?.he;

  // other people whose offices point at this person
  const others = await Person.find({
    _id: { $ne: person._id },
    published: true,
    $or: [
      { 'offices.before.person': person._id },
      { 'offices.after.person': person._id },
      ...(nameHe ? [{ 'offices.before.name.he': nameHe }, { 'offices.after.name.he': nameHe }] : []),
    ],
  })
    .select('slug name offices')
    .lean();

  const pointsHere = (l) => (l.person ? String(l.person) === String(person._id) : (l.name?.he || '').trim() === nameHe);
  const officeFor = (label) => offices.find((o) => o.label?.he === label) || offices[0];
  for (const other of others) {
    for (const o of other.offices || []) {
      const self = { person: other._id, name: other.name };
      // they say I came after them -> they are "before" me (and the reverse)
      if ((o.after || []).some(pointsHere)) officeFor(o.label?.he).before.push(self);
      if ((o.before || []).some(pointsHere)) officeFor(o.label?.he).after.push(self);
    }
  }

  // link names to pages, drop duplicates
  const ids = offices.flatMap((o) => [...o.before, ...o.after]).filter((l) => l.person).map((l) => l.person);
  const names = offices.flatMap((o) => [...o.before, ...o.after]).filter((l) => !l.person && l.name?.he).map((l) => l.name.he.trim());
  const [byId, byName] = await Promise.all([
    ids.length ? Person.find({ _id: { $in: ids }, published: true }).select('slug name').lean() : [],
    names.length ? Person.find({ 'name.he': { $in: names }, published: true }).select('slug name').lean() : [],
  ]);
  const idMap = new Map(byId.map((p) => [String(p._id), p]));
  const counts = new Map();
  for (const p of byName) counts.set(p.name.he, (counts.get(p.name.he) || 0) + 1);
  const nameMap = new Map(byName.filter((p) => counts.get(p.name.he) === 1).map((p) => [p.name.he, p]));

  const finish = (list) => {
    const seen = new Set();
    const out = [];
    for (const l of list) {
      const linked = l.person ? idMap.get(String(l.person)) : nameMap.get((l.name?.he || '').trim());
      const item = linked ? { person: linked._id } : l;
      const k = keyOf(item);
      if (seen.has(k) || !(linked?.name?.he || l.name?.he)) continue;
      seen.add(k);
      out.push({ name: linked ? linked.name : l.name, slug: linked ? linked.slug : null });
    }
    return out;
  };

  return offices.map((o) => ({ ...o, before: finish(o.before), after: finish(o.after) }));
};

module.exports = { resolveOffices };
