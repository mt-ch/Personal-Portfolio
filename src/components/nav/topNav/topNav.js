import React, { useState, useEffect } from "react";
import { StyledTopNav } from "./topNav.styled";
import { bool, func } from "prop-types";

// Top navigation
const TopNav = ({ active, setActive }) => {
  // Set state
  const [nav, setNav] = useState("Navigation");

  useEffect(() => {
    // Change state of navigation text
    if (active) {
      setNav("Close");
    } else {
      setNav("Navigation");
    }
  });

  return (
    <StyledTopNav>
      <a className="title-link" href="/">
        <p className="title-text">mc</p>
      </a>
      <a className="nav-mobile" onClick={() => setActive(!active)}>
        <p className="nav-title">{nav}</p>
      </a>
      <ul className="nav-desktop">
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
    </StyledTopNav>
  );
};

// Validation of changing state
TopNav.propTypes = {
  active: bool.isRequired,
  setActive: func.isRequired
};

export default TopNav;
