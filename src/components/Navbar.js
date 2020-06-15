import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
