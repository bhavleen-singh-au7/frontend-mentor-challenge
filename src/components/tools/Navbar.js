import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light shadow-sm mb-3">
      <div className="container">
        <Link className=" navbar-brand" to="/">
          <strong>Where in the world?</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <Link className="ml-auto text-dark">
            <i className="far fa-moon"></i> Dark Mode
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
