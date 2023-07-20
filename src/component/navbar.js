import React, { Component } from "react";
import Logo from "./logo.svg";
import "./navbar.css";
import {Link} from 'react-router-dom';

export class navbar extends Component {




  render() {
    
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
        <Link to="/" style={{textDecoration:"none"}}>
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
          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/ENTERTAINMENT" style={{textDecoration:"none"}}>
                <span className="nav-link active">
                  ENTERTAINMENT
                </span>
              </Link>
              </li>
              <Link to="/TECHNOLOGY" style={{textDecoration:"none"}}>
              <li className="nav-item">
                <button className="nav-link active">
                  TECHNOLOGY
                </button>
              </li>
              </Link>
              <Link to="/HEALTH" style={{textDecoration:"none"}}>
              <li className="nav-item">
                <span className="nav-link active">
                  HEALTH
                </span>
              </li>
              </Link>
              <Link to="/SPORTS" style={{textDecoration:"none"}}>
              <li className="nav-item">
                <span className="nav-link active">
                  SPORTS
                </span>
              </li>
              </Link>

              <Link to="/BUSINESS" style={{textDecoration:"none"}}>
              <li className="nav-item">
                <span className="nav-link active">
                BUSINESS
                </span>
              </li>
              </Link>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Flipboard"
                aria-label="Search"
                onChange={(e)=>{
                  this.setState({custom_query:e.target.value})
                }}
              />
              <button
                className="btn btn-outline-danger bg-danger text-white"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      </>
    );
  }
}

export default navbar;
