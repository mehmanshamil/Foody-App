import React from "react";
import "./Footer.module.css"
const Footer = () => {
  return (
    <footer className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 text-center col-sm-12 mt-2">
            <p className="fw-bold">MENU</p>
            <ul className="minimenu" >
              <li>FOODY</li>
              <li>Recipes</li>
              <li>Home</li>
              <li>Action</li>
              <li> Another action</li>
            </ul>
          </div>
          <div className="col-xl-4 col-md-6 text-center col-sm-12 mt-2">
          <p className="fw-bold">SERVICES</p>
            <ul className="minimenu" >
              <li>FOODY</li>
              <li>Recipes</li>
              <li>Home</li>
              <li>Action</li>
              <li> Another action</li>
            </ul>
          </div>
          <div className="col-xl-4 col-md-6 text-center col-sm-12 mt-2">
          <p className="fw-bold">LOCATION</p>
            <ul className="minimenu" >
              <li>FOODY</li>
              <li>Recipes</li>
              <li>Home</li>
              <li>Action</li>
              <li> Another action</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
