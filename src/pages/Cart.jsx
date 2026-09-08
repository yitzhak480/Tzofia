import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/context";
import { FaTrash } from "react-icons/fa"; 
import toast from "react-hot-toast"; 
import emailjs from '@emailjs/browser';

const Cart = () => {
  // הוספנו פה את הייבוא של clearCart
  const { cartItems, removeFromCart, lang, clearCart } = useContext(CartContext);
  
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmitOrder = async (e) => {
    e.preventDefault();

    const orderDetails = cartItems
      .map(
        (item) =>
          `• ${item.title} - כמות: ${item.quantity} (₪${item.price * item.quantity})`
      )
      .join("\n");

    const templateParams = {
      customer_name: formData.name,
      customer_phone: formData.phone,
      customer_email: formData.email,
      customer_address: formData.address,
      order_details: orderDetails,
      total_price: totalPrice,
    };

    const loadingToast = toast.loading(
      lang === "he" ? "שולח הזמנה..." : "Sending order..."
    );

    try {
      await emailjs.send(
        "service_zbnfhxh",   
        "template_l0u8mwd",  
        templateParams,
        "PzrkjhMkJ8u7s6D-U"    
      );

      toast.dismiss(loadingToast);

      toast.success(
        lang === "he"
          ? "הזמנתך נשלחה לבדיקה! ניצור קשר בהקדם."
          : "Order sent for review! We will contact you soon.",
        { duration: 5000, icon: "✉️" }
      );

      // מרוקנים את העגלה כאן!
      clearCart();
      
      setFormData({ name: "", phone: "", email: "", address: "" });
      setShowForm(false);

    } catch (error) {
      console.error("Failed to send order email:", error);
      toast.dismiss(loadingToast);
      toast.error(
        lang === "he"
          ? "אירעה שגיאה בשליחת ההזמנה. נסה שוב או פנה אלינו ישירות."
          : "Failed to submit order. Please try again or contact us directly."
      );
    }
  };

  return (
    <div className="page-wrapper" dir={lang === "he" ? "rtl" : "ltr"}>
      <Header title={lang === "he" ? "עגלת קניות" : "Shopping Cart"} />

      <main className="cart-page-container">
        <h1 className="cart-heading">
          {lang === "he" ? "עגלת הקניות שלי" : "My Shopping Cart"}
        </h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "3rem", fontFamily: "'Frank Ruhl Libre', serif" }}>
            <p>{lang === "he" ? "העגלה שלך ריקה כרגע." : "Your cart is currently empty."}</p>
          </div>
        ) : (
          <>
            {!showForm ? (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div className="cart-card" key={item.id}>
                      <div className="cart-card-image">
                        <img src={item.image} alt={item.title} />
                      </div>

                      <div className="cart-card-details">
                        <h3 className="cart-item-title">{item.title}</h3>
                        <p className="cart-item-price">
                          ₪{item.price * item.quantity}
                          <span style={{ fontSize: "1rem", color: "var(--color-ink)", margin: "0 10px", fontWeight: "normal" }}>
                            ({lang === "he" ? `כמות: ${item.quantity}` : `Qty: ${item.quantity}`})
                          </span>
                        </p>
                      </div>

                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                        title={lang === "he" ? "הסר מהעגלה" : "Remove item"}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>{lang === "he" ? "סך הכל:" : "Total:"}</span>
                    <span className="total-price">₪{totalPrice}</span>
                  </div>
                  <button className="checkout-button" onClick={() => setShowForm(true)}>
                    {lang === "he" ? "המשך לאישור הזמנה" : "Proceed to Order Review"}
                  </button>
                </div>
              </>
            ) : (
              <div className="checkout-form-container">
                <p className="checkout-notice">
                  {lang === "he" 
                    ? "מכיוון שהפוסטרים שלנו מטופלים אישית, אנו נוודא את פרטי ההזמנה ונחזור אליך בהקדם לאישור ותשלום (פייפאל / מזומן / פייבוקס)"
                    : "Since our posters are handled personally, we will verify your order details and contact you shortly for confirmation and payment."}
                </p>

                <form onSubmit={handleSubmitOrder} className="checkout-form">
                  <div className="form-group">
                    <label>{lang === "he" ? "שם מלא" : "Full Name"}</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  
                  <div className="form-group">
                    <label>{lang === "he" ? "טלפון" : "Phone"}</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label>{lang === "he" ? "אימייל" : "Email"}</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label>{lang === "he" ? "כתובת מלאה (עיר, רחוב, בית)" : "Full Address"}</label>
                    <textarea name="address" rows="3" required value={formData.address} onChange={handleInputChange}></textarea>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                      {lang === "he" ? "חזור לעגלה" : "Back to Cart"}
                    </button>
                    <button type="submit" className="submit-order-btn">
                      {lang === "he" ? "שלח הזמנה לבדיקה" : "Submit Order for Review"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

