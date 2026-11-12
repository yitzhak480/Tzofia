// Turns a person's stored relations into what the page shows:
// - links names to existing pages (by id, or by exact Hebrew name),
// - adds relations written on OTHER people's pages (if Shlomo lists David as
//   his father, David's page shows Shlomo as his child automatically),
// - removes duplicates.
const Person = require('../models/Person');

// How a relation looks from the other person's side.
const INVERSE = {
  father: 'child',
  mother: 'child',
  child: 'parent', // we don't know if it's the father or the mother
  sibling: 'sibling',
  spouse: 'spouse',
  teacher: 'student',
  student: 'teacher',
  related: 'related',
  prophet: 'king',
  king: 'prophet',
  ancestor: 'descendant', // a line on the tree that skips generations
  descendant: 'ancestor',
};

// Relations that count as the same group when removing duplicates.
const GROUP = { father: 'parent', mother: 'parent', parent: 'parent' };
const groupOf = (type) => GROUP[type] || type;

const resolveRelations = async (person) => {
  const own = person.relations || [];
  const nameHe = person.name?.he;

  const linkedIds = own.filter((r) => r.person).map((r) => r.person);
  const plainNames = own.filter((r) => !r.person && r.name?.he).map((r) => r.name.he.trim());

  const [byId, byName, pointingHere] = await Promise.all([
    linkedIds.length
      ? Person.find({ _id: { $in: linkedIds }, published: true }).select('slug name').lean()
      : [],
    plainNames.length
      ? Person.find({ 'name.he': { $in: plainNames }, published: true }).select('slug name').lean()
      : [],
    Person.find({
      _id: { $ne: person._id },
      published: true,
      $or: [{ 'relations.person': person._id }, ...(nameHe ? [{ 'relations.name.he': nameHe }] : [])],
    })
      .select('slug name relations')
      .lean(),
  ]);

  const idMap = new Map(byId.map((p) => [String(p._id), p]));
  // Only link a plain name when exactly one page has that name.
  const nameCounts = new Map();
  for (const p of byName) nameCounts.set(p.name.he, (nameCounts.get(p.name.he) || 0) + 1);
  const nameMap = new Map(byName.filter((p) => nameCounts.get(p.name.he) === 1).map((p) => [p.name.he, p]));

  const out = [];
  const seen = new Set();
  const add = (type, name, linked, uncertain = false) => {
    const key = `${groupOf(type)}|${linked ? String(linked._id) : name?.he?.trim()}`;
    if (!name?.he || seen.has(key)) return;
    seen.add(key);
    out.push({
      type,
      name: linked ? linked.name : name,
      slug: linked ? linked.slug : null,
      uncertain: Boolean(uncertain),
    });
  };

  for (const r of own) {
    const linked = r.person ? idMap.get(String(r.person)) : nameMap.get(r.name?.he?.trim());
    // A link to a page that was deleted or hidden: show the saved name only.
    add(r.type, r.person && !linked ? r.name : linked ? linked.name : r.name, linked, r.uncertain);
  }

  for (const other of pointingHere) {
    for (const r of other.relations || []) {
      const pointsHere = r.person ? String(r.person) === String(person._id) : r.name?.he?.trim() === nameHe;
      if (pointsHere && INVERSE[r.type]) add(INVERSE[r.type], other.name, other, r.uncertain);
    }
  }

  return out;
};

module.exports = { resolveRelations };
