import React from "react";
import "../navbar.css";
import logo from "../../Images/logo.png";

const Navegat = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="/">
          <img src={logo} alt="nav-logo" />
        </a>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/career">
                Career
              </a>
            </li>
          </ul>
        </div>
        <input
          type="submit"
          name="name"
          id="name"
          className="nav-btn"
          value={"Contact us"}
        />
      </div>
    </nav>
  );
};

export default Navegat;
