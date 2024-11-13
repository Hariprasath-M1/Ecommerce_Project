import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h3>Contact Information:</h3>
        <p>Address: 123 Main Street, Marthahalli, Bangalore</p>
        <p>Phone: (+91) 12345-67890</p>
        <p>Email: info@Nike.com</p>
        <p>
          Website: <a href="http://www.Nike.com" className="link">www.Nike.com</a>
        </p>
      </div>
      <div className="section">
        <h3>Follow Us:</h3>
        <p>
          <a href="http://www.facebook.com/Nike" className="link"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
        </p>
        <p>
          <a href="http://www.twitter.com/Nike" className="link"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </p>
        <p>
          <a href="http://www.instagram.com/Nike" className="link"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        </p><br />
        <div className="section">
        <p>&copy; {new Date().getFullYear()} Sohes collection. All rights reserved.</p>
      </div>
      </div>
      
      <div className="section">
        <h3>About Us:</h3>
        <p>
          Our company is dedicated to providing the best service in the industry. We strive to exceed our customers' expectations with high-quality products and exceptional customer service.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
