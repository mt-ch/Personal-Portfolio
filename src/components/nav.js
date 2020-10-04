import React from "react";

import SocialButtons from "./socialButtons";
import "../css/App.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h2><strong>mc</strong></h2>
      <p className='nav-title'>Navigation</p>
      <ul className="nav-list">
        <li>
          <p>Projects</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
      <div style={{ display: "none" }}>
        <SocialButtons />
      </div>
    </div>
  );
};

export default Nav;
