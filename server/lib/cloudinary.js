const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const isConfigured = () =>
  Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  );

// Best-effort delete of images that are no longer used. Images without a
// publicId (the old ones in /public/images) are skipped.
const deleteImages = async (images) => {
  if (!isConfigured()) return;
  const ids = images.filter((img) => img && img.publicId).map((img) => img.publicId);
  await Promise.allSettled(ids.map((id) => cloudinary.uploader.destroy(id)));
};

module.exports = { cloudinary, isConfigured, deleteImages };
