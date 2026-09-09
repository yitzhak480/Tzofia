// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: false // בשלב הראשון נשמור כאן כתובת תמונה פשוטה
  },
  inStock: { 
    type: Boolean, 
    default: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true // מזהה ייחודי לשורת הכתובת (למשל: 'mishna-poster')
  }
}, { timestamps: true }); // מוסיף אוטומטית תאריכי יצירה ועדכון

module.exports = mongoose.model('Product', productSchema);