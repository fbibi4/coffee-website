import React from "react";
import "./Footer.css";
import Logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-description">
        <p className="footer-subscription-heading">
          For more details or quotes on our services, get in touch with us
          today!
        </p>
        <div className="address">
          <div className="address-line-1">720 Manchester Road</div>
          <div className="divider">|</div>
          <div className="address-line-2">Bradford BD57QS </div>
        </div>
        <div className="address">
          <div className="number">07789493324</div>
          <div className="divider">|</div>
          <div className="website-rights">Bean to Cup © 2023</div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
              <img src={Logo} height={160} width={200} alt="Logo" />
            </Link>
          </div>

          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
        <div className="rightFooter">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.2289604095437!2d-1.787286785781315!3d53.79457253673739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be9e5bfc13245%3A0x4c372132d934933!2s720%20Manchester%20Rd%2C%20Bradford%20BD5%207QS%2C%20UK!5e0!3m2!1sen!2sng!4v1583717214251!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Footer;
