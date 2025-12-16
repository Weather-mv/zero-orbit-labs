import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close menu after clicking a link (mobile)
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // Close menu on window resize (if going from mobile to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <img src={Logo} alt="Logo" className="header-logo" />

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
          <button
            onClick={() => scrollToSection("hero")}
            className="nav-button"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("solutions")}
            className="nav-button"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("clients")}
            className="nav-button"
          >
            Clients
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-button"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`mobile-nav-overlay ${isMenuOpen ? "active " : ""}`}
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;