const Category = require('../models/Category');

// Returns the chain of categories from the top level down to `categoryId`
// (inclusive), used for breadcrumbs: Kings > Kings of Judah.
const ancestorChain = async (categoryId) => {
  const chain = [];
  const seen = new Set();
  let current = categoryId ? await Category.findById(categoryId).lean() : null;
  while (current && !seen.has(String(current._id))) {
    seen.add(String(current._id));
    chain.unshift(current);
    current = current.parent ? await Category.findById(current.parent).lean() : null;
  }
  return chain;
};

// True if `candidateParentId` is `categoryId` itself or one of its descendants
// (setting it as the parent would create a loop).
const wouldCreateLoop = async (categoryId, candidateParentId) => {
  if (!candidateParentId) return false;
  const chain = await ancestorChain(candidateParentId);
  return chain.some((c) => String(c._id) === String(categoryId));
};

// Public ids of images that were in `before` but are gone from `after`.
const removedImages = (before, after) => {
  const keep = new Set(after.filter(Boolean).map((img) => img.publicId).filter(Boolean));
  return before.filter((img) => img && img.publicId && !keep.has(img.publicId));
};

module.exports = { ancestorChain, wouldCreateLoop, removedImages };
