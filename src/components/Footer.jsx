import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Logo and CTA */}
          <div className="footer-left">
            <h2 className="footer-cta">
              LET'S <span className="cta-highlight">CHAT</span>
            </h2>
            <div className="footer-logo">
              <div className="logo-circle">
                <div className="logo-line"></div>
                <div className="logo-dot"></div>
              </div>
            </div>
          </div>

          {/* Middle Section - Company Links */}
          <div className="footer-middle">
            <h3 className="footer-heading">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Social & Contact */}
          <div className="footer-right">
            <div className="footer-social">
              <h3 className="footer-heading">FOLLOW US</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className="footer-heading">REACH OUT</h3>
              <a href="mailto:hello@zeroorbitlabs.in" className="contact-email">
                hello@zeroorbitlabs.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
