import React from "react";
import Logo from "../assets/Logo.png";
import "../css/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <header className="header">
      <img src={Logo} alt="Logo" className="header-logo" />
      <nav className="header-nav">
        <button onClick={() => scrollToSection("hero")} className="nav-button">
          Home
        </button>
        <button onClick={() => scrollToSection("solutions")} className="nav-button">
          Solutions
        </button>
        <button onClick={() => scrollToSection("clients")} className="nav-button">
         Clients
        </button>
        <button onClick={() => scrollToSection("contact")} className="nav-button">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
