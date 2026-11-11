// Image upload for the admin: the file goes straight to Cloudinary and we
// return its URL, which the admin page then saves on a category or person.
const express = require('express');
const multer = require('multer');
const { requireAdmin } = require('../middleware/auth');
const { cloudinary, isConfigured } = require('../lib/cloudinary');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

// POST /api/upload  (multipart form, field "image") -> { url, publicId }
router.post('/', requireAdmin, upload.single('image'), async (req, res) => {
  if (!isConfigured()) {
    return res.status(500).json({ message: 'Server is missing Cloudinary settings' });
  }
  if (!req.file) return res.status(400).json({ message: 'No image was sent' });

  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'encyclopedia', resource_type: 'image' },
      (error, uploaded) => (error ? reject(error) : resolve(uploaded))
    );
    stream.end(req.file.buffer);
  });

  res.status(201).json({ url: result.secure_url, publicId: result.public_id });
});

module.exports = router;
