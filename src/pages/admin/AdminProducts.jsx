import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    slug: ''
  });

const fetchProducts = async () => {
    try {
      const response = await fetch('https://tzofia-backend.onrender.com/api/products');
      
      // אם השרת מחזיר שגיאה (כמו 500), אנחנו עוצרים פה ולא מנסים לקרוא את הנתונים
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // מוודא שאכן קיבלנו רשימה (מערך) כדי למנוע את קריסת ה-map
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Expected an array but got:', data);
        setProducts([]); 
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // במקרה של שגיאה, נציג רשימה ריקה במקום להקריס את האתר
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tzofia-backend.onrender.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('המוצר נוסף בהצלחה!');
        setFormData({ title: '', description: '', price: '', imageUrl: '', slug: '' });
        fetchProducts();
      } else {
        alert('שגיאה בהוספת המוצר');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="page-wrapper" dir="rtl">
      <Header />

      <main className="admin-container">
        <h1 className="admin-main-title">ניהול מוצרים (אדמין)</h1>
        
        {/* אזור הוספת מוצר */}
        <div className="admin-card">
          <h2>הוסף מוצר חדש</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>שם המוצר:</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>תיאור:</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label>מחיר (₪):</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="form-group half">
                <label>מזהה URL (Slug באנגלית):</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="form-group">
              <label>קישור לתמונה (URL):</label>
              <input type="text" name="imageUrl" dir="ltr" value={formData.imageUrl} onChange={handleChange} />
            </div>
            
            <button type="submit" className="admin-submit-btn">הוסף מוצר +</button>
          </form>
        </div>

        {/* רשימת המוצרים */}
        <div className="admin-card">
          <h2>מוצרים קיימים במסד הנתונים</h2>
          {loading ? (
            <p className="loading-text">טוען מוצרים מהשרת...</p>
          ) : products.length === 0 ? (
            <p className="loading-text">אין עדיין מוצרים במסד הנתונים.</p>
          ) : (
            <ul className="admin-products-list">
              {products.map((product) => (
                <li key={product._id} className="admin-product-item">
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p>מחיר: ₪{product.price}</p>
                  </div>
                  <button className="admin-edit-btn">ערוך</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminProducts;