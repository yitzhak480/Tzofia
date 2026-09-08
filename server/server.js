// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ייבוא הראוטר של המוצרים
const productsRoute = require('./routes/products');

// כל בקשה שתתחיל ב- /api/products תופנה לקובץ הראוטר שלנו
app.use('/api/products', productsRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Basic route just to check it works
app.get('/', (req, res) => {
  res.send('Tzofia Art API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});