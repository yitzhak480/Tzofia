import React, { useState, useEffect } from 'react';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // משתנה שיחזיק את הנתונים מהטופס
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    slug: ''
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // פונקציה לעדכון הסטייט כשמקלידים בשדות הטופס
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // פונקציה לשליחת הטופס לשרת
  const handleSubmit = async (e) => {
    e.preventDefault(); // מונע מהדף להתרענן
    try {
      const response = await fetch('http://localhost:5001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('המוצר נוסף בהצלחה!');
        // איפוס הטופס
        setFormData({ title: '', description: '', price: '', imageUrl: '', slug: '' });
        // רענון רשימת המוצרים
        fetchProducts();
      } else {
        alert('שגיאה בהוספת המוצר');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  if (loading) return <div>טוען מוצרים...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">ניהול מוצרים</h1>
      
      {/* אזור טופס הוספת מוצר */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">הוסף מוצר חדש</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">שם המוצר:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">תיאור:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1">מחיר (₪):</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full border p-2 rounded" />
            </div>
            <div className="flex-1">
              <label className="block mb-1">מזהה URL (Slug, אנגלית בלי רווחים):</label>
              <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="w-full border p-2 rounded" />
            </div>
          </div>
          <div>
            <label className="block mb-1">קישור לתמונה:</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            הוסף מוצר
          </button>
        </form>
      </div>

      {/* רשימת המוצרים הקיימים */}
      <h2 className="text-xl font-semibold mb-4">מוצרים קיימים</h2>
      <div className="bg-white shadow rounded-lg p-4">
        {products.length === 0 ? (
          <p>אין מוצרים במסד הנתונים.</p>
        ) : (
          <ul className="divide-y">
            {products.map((product) => (
              <li key={product._id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-500">מחיר: ₪{product.price}</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">ערוך</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;