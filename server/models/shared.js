// Shared schema pieces for the encyclopedia models.
const mongoose = require('mongoose');

// Text in two languages. Hebrew is the main language; English is optional
// and the site falls back to Hebrew when it is empty.
const localized = (heRequired = false) =>
  new mongoose.Schema(
    {
      he: { type: String, trim: true, required: heRequired, default: heRequired ? undefined : '' },
      en: { type: String, trim: true, default: '' },
    },
    { _id: false }
  );

// An image stored on Cloudinary (publicId lets us delete it later).
// Older images that live in /public/images have a url but no publicId.
const imageSchema = new mongoose.Schema(
  {
    url: { type: String, trim: true, required: true },
    publicId: { type: String, default: '' },
    caption: { type: localized(), default: () => ({}) },
  },
  { _id: false }
);

// URL names like "kings-of-judah" or "david".
const slugField = {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
  match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug may contain only English letters, numbers and dashes'],
};

// Colours for cards without a picture (must match src/components/encyclopedia/cardColors.js).
const COLOR_KEYS = ['burgundy', 'blue', 'purple', 'brown', 'marble', 'emerald', 'teal', 'ink', 'olive', 'slate'];

module.exports = { localized, imageSchema, slugField, COLOR_KEYS };
