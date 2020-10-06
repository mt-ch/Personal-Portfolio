import React from "react";

import SocialButtons from "./socialButtons";
import NavOverlay from "./navOverlay";
import "../css/App.scss";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <a className="title-link" href="/">
          <h2 className="title-text">mc</h2>
        </a>
        <div className="nav-mobile">
          <p className="nav-title nav-text">Navigation</p>
        </div>
        <ul className="nav-desktop">
          <li>
            <p className="nav-text">Projects</p>
          </li>
          <li>
            <p className="nav-text">About</p>
          </li>
          <li>
            <p className="nav-text">Contact</p>
          </li>
        </ul>
      </div>
      <NavOverlay />
    </div>
  );
};

export default Nav;
