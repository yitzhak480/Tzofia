// Turns the flat list of categories into a tree in display order:
// rows = [{...category, depth}], byParent = Map(parentId|'root' -> children)
export const buildTree = (categories) => {
  const byParent = new Map();
  for (const c of categories) {
    const key = c.parent || 'root';
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key).push(c);
  }
  for (const list of byParent.values()) {
    list.sort((a, b) => a.order - b.order || String(a.createdAt).localeCompare(String(b.createdAt)));
  }

  const rows = [];
  const walk = (key, depth) => {
    for (const c of byParent.get(key) || []) {
      rows.push({ ...c, depth });
      walk(c._id, depth + 1);
    }
  };
  walk('root', 0);
  return { rows, byParent };
};

// All ids under a category (its subcategories, their subcategories...).
export const descendantsOf = (id, byParent) => {
  const ids = new Set([id]);
  const stack = [id];
  while (stack.length) {
    for (const child of byParent.get(stack.pop()) || []) {
      ids.add(child._id);
      stack.push(child._id);
    }
  }
  return ids;
};
