import React from "react";
import { Link } from "react-router-dom";
import { StyledTopNav } from "./topNav.styled";

import Logo from '../../../assets/icons/logo'

// Top navigation
const TopNav = () => {
  return (
    <StyledTopNav>
      <Link className="title-link" to="/">
        <p className="title-text">mc</p>
      </Link>

      <ul className="nav-desktop">
        <li>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to="/info">
            <p>Info</p>
          </Link>
        </li>
      </ul>
    </StyledTopNav>
  );
};

export default TopNav;
