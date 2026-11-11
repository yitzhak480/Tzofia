// Our family-tree posters. A person can be marked on one or more of them.
// `image` is shown whole; `zoomImage` is a sharper copy used for close-ups.
// `ratio` is width / height of the poster.
export const TREES = [
  {
    id: 'biblical',
    name: { he: 'אילן יוחסין מאדם עד רבי יהודה הנשיא', en: 'Family Tree: From Adam to Rabbi Yehuda HaNasi' },
    image: '/images/torah-tree.jpg',
    zoomImage: '/images/torah-tree-hd.jpg',
    ratio: 2011 / 3000,
    page: '/Biblical',
  },
  {
    id: 'gmara',
    name: { he: 'אילן יוחסין מאחרוני התנאים ועד הגאונים', en: 'Family Tree: From the Last Tannaim to the Geonim' },
    image: '/images/talmud-tree.jpg',
    zoomImage: '/images/talmud-tree.jpg',
    ratio: 1373 / 2048, // when a sharper copy exists, set zoomImage to it
    page: '/Gmara',
  },
];

export const treeById = (id) => TREES.find((t) => t.id === id);

// How much the close-up enlarges the poster.
export const ZOOM = 6;
