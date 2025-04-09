import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">HOME</Link>
        <ul className="navbar-nav ml-auto">
          {user ? (
            <>
              <li className="nav-item user">
                <span className="nav-link">Welcome, {user.email}</span>
              </li>
              <li className="nav-item user">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className={`nav-item guest ${location.pathname === "/login" ? "active" : ""}`}>
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className={`nav-item guest ${location.pathname === "/register" ? "active" : ""}`}>
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;