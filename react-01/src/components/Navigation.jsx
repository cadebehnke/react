import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="main-nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/sale" onClick={() => setMenuOpen(false)}>Sale</Link></li>
        <li><Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link></li>
        <li><Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link></li>
        <li><Link to="/messages" onClick={() => setMenuOpen(false)}>Leave a Message</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;