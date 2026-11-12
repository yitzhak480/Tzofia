// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json({ limit: '2mb' })); // articles can be long
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/people', require('./routes/people'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/products', require('./routes/products'));
app.use('/api/checklist', require('./routes/checklist'));

// Basic route just to check it works
app.get('/', (req, res) => {
  res.send('Tzofia Art API is running');
});

// Turn errors into clear JSON messages for the admin page.
// (Express 5 sends errors from async routes here automatically.)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const details = Object.values(err.errors).map((e) => e.message).join(', ');
    return res.status(400).json({ message: `Invalid data: ${details}` });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: `Invalid value for ${err.path}` });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: 'That URL name (slug) is already used' });
  }
  if (err.name === 'MulterError' || err.message === 'Only image files are allowed') {
    return res.status(400).json({ message: err.code === 'LIMIT_FILE_SIZE' ? 'Image is larger than 10 MB' : err.message });
  }
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
