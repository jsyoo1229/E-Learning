// Nav.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ isLoggedIn, setIsLoggedIn, userEmail }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <i className="fa fa-book me-3"></i>eLEARNING
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/courses" className="nav-item nav-link">
            Courses
          </Link>
          <div className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </button>

            <div className="dropdown-menu fade-down m-0">
              <Link to="/team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="/404" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="position-relative">
            <span className="me-2 text-light">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="btn btn-outline-light btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex">
            <Link to="/signup" className="btn btn-outline-light btn-sm mx-2">
              SignUp
            </Link>
            <Link to="/login" className="btn btn-light btn-sm mx-2">
              Login
            </Link>
          </div>
        )}
        <Link
          to="/join"
          className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >
          Join Now
          <i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
