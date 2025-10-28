import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center px-20 py-10 shadow-md bg-black fixed w-full z-50 text-20p">
      <img src={Logo} alt="" className="w-11 "/>
      <nav className="flex gap-6">
        <button onClick={() => scrollToSection("home")} className="text-white-700 hover:text-red-600">Home</button>
        <button onClick={() => scrollToSection("solutions")} className="text-white-700 hover:text-red-600">Solutions</button>
        <button onClick={() => scrollToSection("works")} className="text-white-700 hover:text-red-600">Works</button>
        <button onClick={() => scrollToSection("contact")} className="text-white-700 hover:text-red-600">Contact</button>
      </nav>
    </header>
  );
};

export default Header;
