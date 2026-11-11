// Copy only the allowed fields from a request body, so the admin page can't
// accidentally overwrite things like _id or timestamps.
const pick = (body, fields) => {
  const out = {};
  for (const field of fields) {
    if (body && body[field] !== undefined) out[field] = body[field];
  }
  return out;
};

module.exports = { pick };
