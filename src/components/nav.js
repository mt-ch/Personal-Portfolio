import React from "react";

import SocialButtons from "./socialButtons";
import "../css/App.scss";

const Nav = () => {
  return (
    <div className="nav">
      <a className='title-link' href="/">
        <h2 className="title-text">
          <strong>mc</strong>
        </h2>
      </a>
      <div className="nav-mobile">
        <p className="nav-title nav-text">
          <strong>Navigation</strong>
        </p>
      </div>
      <ul className="nav-desktop nav-text">
        <li>
          <p>Projects</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
        <li>
          <SocialButtons />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
