import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const clickNavi =() =>{
    navigate("/basket")
  }
  return (
    <header>
      <div className="container p-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" >
            <span className={styles.foody}>FOODY</span>
          </a>
          <button
            className="navbar-toggler bg-light"
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
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto gap-3">
              <li onClick={() => navigate("/")} className="nav-item active">
                <a
                  className={styles.navlink}
                >
                  Home
                </a>
              </li>
              <li onClick={clickNavi}  className="nav-item active">
                <a className={styles.navlink} >
                  Basket
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`${styles.navlink} dropdown-toggle`}
                  
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" >
                    Action
                  </a>
                  <a className="dropdown-item" >
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" >
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className={styles.navlink} >
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a className={styles.navlink} >
                  News
                </a>
              </li>
            </ul>
            <button className={styles.contact}>CONTACT US</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
