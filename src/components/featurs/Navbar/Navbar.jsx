import "./Navbar.css";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
const pages = ["Home", "About", "ContactUs", "PageNotFound","Devices","Movies"];

function Navbar() {
  return (
    <div id="navbar">
      <h1>
      YonatanWebSite
    </h1>
    <div id="navbar_links">
          {pages.map((pagePath) => (
            <Link to={pagePath}>{pagePath}</Link>
          ))}
    </div>
    </div>
    
  );
};

export default Navbar;
