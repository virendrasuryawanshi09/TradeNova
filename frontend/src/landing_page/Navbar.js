import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* 🔹 Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "130px", objectFit: "contain" }}
          />
        </Link>

        {/* 🔹 Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔹 Nav links aligned to right */}
        <div
          className="collapse navbar-collapse justify-content-end navbar-el"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
