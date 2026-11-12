// A person in the encyclopedia, e.g. King David.
// Only the Hebrew name and the article text are really needed; everything
// else is optional and the page hides whatever is empty.
const mongoose = require('mongoose');
const { localized, imageSchema, slugField, COLOR_KEYS } = require('./shared');

// A span of years, e.g. 2854–2924. Either end may be missing.
const yearsSchema = new mongoose.Schema(
  {
    from: { type: Number, default: null },
    to: { type: Number, default: null },
  },
  { _id: false }
);

// A position held for some years: "שנות מלוכה 2884–2924".
// Someone who held the same role before / after (a page link or just a name).
const officeLinkSchema = new mongoose.Schema(
  {
    person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', default: null },
    name: { type: localized(), default: () => ({}) },
  },
  { _id: false }
);

const officeSchema = new mongoose.Schema(
  {
    label: { type: localized(true), required: true },
    from: { type: Number, default: null },
    to: { type: Number, default: null },
    note: { type: localized(), default: () => ({}) },
    // Several are allowed, e.g. after Shlomo: Rechavam and Yeravam.
    before: { type: [officeLinkSchema], default: [] },
    after: { type: [officeLinkSchema], default: [] },
  },
  { _id: false }
);

// 'related' connects any two entries, e.g. David and Jerusalem.
const RELATION_TYPES = ['father', 'mother', 'sibling', 'spouse', 'child', 'teacher', 'student', 'related'];

// A relative / teacher / student. If `person` is set it links to that page;
// otherwise only the name is shown (and linked automatically if a page with
// exactly that Hebrew name exists).
const relationSchema = new mongoose.Schema(
  {
    type: { type: String, enum: RELATION_TYPES, required: true },
    person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', default: null },
    name: { type: localized(), default: () => ({}) },
  },
  { _id: false }
);

// Where the person appears on one of our tree posters (percent of the image).
const treeSpotSchema = new mongoose.Schema(
  {
    tree: { type: String, required: true, trim: true },
    x: { type: Number, required: true, min: 0, max: 100 },
    y: { type: Number, required: true, min: 0, max: 100 },
  },
  { _id: false }
);

const plainText = (html) =>
  String(html || '')
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ' ') // headings aren't part of the summary
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

const excerpt = (html, max = 170) => {
  const text = plainText(html);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : max)}…`;
};

const personSchema = new mongoose.Schema(
  {
    slug: slugField,
    // A person (David) or anything else: a place, book, Temple vessel, event,
    // tribe... ('place' is an older name for 'other').
    kind: { type: String, enum: ['person', 'other', 'place'], default: 'person' },
    // The first category is the main one (used for "back to..." and breadcrumbs).
    categories: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
      validate: { validator: (v) => Array.isArray(v) && v.length > 0, message: 'Choose at least one category' },
      index: true,
    },
    name: { type: localized(true), required: true },
    // Used for wording on the page: "רבותיו" / "רבותיה".
    gender: { type: String, enum: ['male', 'female'], default: 'male' },
    roles: { type: [localized(true)], default: [] },
    life: { type: yearsSchema, default: () => ({}) },
    offices: { type: [officeSchema], default: [] },
    // Short line on the person's card. Old entries (the kings) use it; new ones
    // normally leave it empty and the card shows the office / life years.
    period: { type: localized(), default: () => ({}) },
    // Short text on the card. If empty, the start of the article is used.
    summary: { type: localized(), default: () => ({}) },
    autoSummary: { type: localized(), default: () => ({}) },
    // The article, written in the admin's text editor (HTML).
    content: { type: localized(), default: () => ({}) },
    mainImage: { type: imageSchema, default: null },
    relations: { type: [relationSchema], default: [] },
    sources: { type: [{ type: String, trim: true }], default: [] },
    // The same sources written in English (for the English site).
    sourcesEn: { type: [{ type: String, trim: true }], default: [] },
    treeSpots: { type: [treeSpotSchema], default: [] },
    order: { type: Number, default: 0 },
    // Unpublished people are visible only in the admin.
    published: { type: Boolean, default: true },
    // Card colour when there is no picture; empty = picked automatically.
    cardColor: { type: String, enum: ['', ...COLOR_KEYS], default: '' },
  },
  { timestamps: true }
);

personSchema.pre('validate', function cleanUp() {
  // Drop empty rows the admin form may send.
  this.sources = (this.sources || []).map((s) => String(s).trim()).filter(Boolean);
  this.sourcesEn = (this.sourcesEn || []).map((s) => String(s).trim()).filter(Boolean);
  this.roles = (this.roles || []).filter((r) => r && r.he && r.he.trim());
  this.relations = (this.relations || []).filter((r) => r.person || (r.name && r.name.he && r.name.he.trim()));
  this.autoSummary = { he: excerpt(this.content?.he), en: excerpt(this.content?.en) };
});

personSchema.statics.RELATION_TYPES = RELATION_TYPES;

module.exports = mongoose.model('Person', personSchema);
