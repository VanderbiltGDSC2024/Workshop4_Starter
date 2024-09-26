import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="name">
        Name
      </a>

      <nav className="navbar">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
        <Link to="social" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
};
