import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Kaushal</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
