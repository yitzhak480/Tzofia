const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // מייבאים את המודל שיצרנו קודם

// POST: הוספת מוצר חדש למסד הנתונים
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

// GET: שליפת כל המוצרים
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

module.exports = router;