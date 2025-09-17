import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";
const Footer=()=> {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section about">
          <h2 className="logo">ShopEase</h2>
          <p>Your one-stop destination for fashion, electronics, and more. Shop with ease and style.</p>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
             <a href="#"><FaMapMarkerAlt/></a>
              <a href="#"><FaPhoneAlt/></a>
               <a href="#"><FaEnvelope /></a>
            
            
          </div>
        </div>

        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Women’s Wear</a></li>
            <li><a href="#">Men’s Wear</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Home & Living</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><FaMapMarkerAlt /> 123 Market Street, New Delhi, India</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@shopease.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
