import React from "react";
import Logo from "./img/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        {/* Logo and name start*/}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="d-flex">
            <img
              src={Logo}
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block  me-2"
            />
            <span className="fs-4 fw-bolder text-uppercase  me-2 text-black">
              Flipboard
            </span>
          </div>
        </Link>

        {/* Logo and name end*/}

        {/* Collapse Button  start */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Button  end */}

        <div
          className="collapse navbar-collapse nav justify-content-end"
          id="navbarSupportedContent"
        >
          {/* Important Links start */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link to="/Entertainment" style={{ textDecoration: "none" }}>
                <span  className="nav-link active">ENTERTAINMENT</span>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/Technology" style={{ textDecoration: "none" }}>
                <span className="nav-link active ">TECHNOLOGY</span>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/Health" style={{ textDecoration: "none" }}>
                <span className="nav-link active">HEALTH</span>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/Sports" style={{ textDecoration: "none" }}>
                <span className="nav-link active">SPORTS</span>
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link to="/Business" style={{ textDecoration: "none" }}>
                <span className="nav-link active">BUSINESS</span>
              </Link>
            </li>
          </ul>
          {/* Important Links end */}
        </div>
      </div>
    </nav>
  );
};

export default navbar;
