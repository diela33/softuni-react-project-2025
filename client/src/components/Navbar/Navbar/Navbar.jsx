import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">HOME</a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item user">
        <a className="nav-link">Welcome, email</a>
      </li>
      <li className="nav-item user">
        <a className="nav-link" href="#">Logout</a>
      </li>
      <li className="nav-item guest">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item guest">
        <a className="nav-link" href="#">Register</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
