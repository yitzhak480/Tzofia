import React, { useContext } from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { CartContext } from '../context/Context';

const Footer = () => {
  const { t } = useContext(CartContext);

  return (
    <footer className="biblical-footer">
      <div className="footer-content">
        
        <div className="social-links">
          <a href="#" className="social-icon"><FaTiktok /></a>
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>

        <p className="copyright-text">
           {t.footer_rights}
        </p>

      </div>
    </footer>
  );
};

export default Footer;