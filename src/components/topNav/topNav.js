import React, { useState, useEffect } from "react";
import { StyledTopNav } from "./topNav.styled";
import { bool, func } from "prop-types";

const TopNav = ({ active, setActive }) => {
  const [nav, setNav] = useState("Navigation");

  useEffect(() => {
    if(active){
      setNav('Close')
    }
    else{
      setNav('Navigation')
    }
  });
  // onClick={() => setActive(!active)}

  return (
    <StyledTopNav>
      <a className="title-link" href="/">
        <p className="title-text">mc</p>
      </a>
      <a className="nav-mobile" onClick={() => setActive(!active)} >
        <p className="nav-title nav-text">{nav}</p>
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

TopNav.propTypes = {
  active: bool.isRequired,
  setActive: func.isRequired
};

export default TopNav;
