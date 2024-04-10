import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Abount</li>
          <li>Contact</li>
       </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a target="_blank" href="https://www.instagram.com/nadynebarbieri_/">
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a target="_blank" href="https://br.pinterest.com/nadynebarbieri/">
            <img src={pinterest_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a target="_blank" href="https://wa.me/message/MC2PQAVCWKBQA1">
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
          
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2023 Nadyne Barbieri. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
