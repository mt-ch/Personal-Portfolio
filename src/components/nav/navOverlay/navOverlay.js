import React, { useEffect } from "react";
import { bool, func } from "prop-types";
import SocialButtons from "../../socialButtons";
import { StyledNavOverlay } from "./navOverlay.styled";

const NavOverlay = ({ active, setActive, openInfo, setOpenInfo }) => {
  useEffect(() => {
    // Change state of navigation text
    if (openInfo) {
      setActive(false);
    } else if(!openInfo) {
      return
    }
  });
  return (
    //iterate nav items
    <div className="nav-overlay">
      <StyledNavOverlay active={active}>
        <ul>
          <li>
            <a className="nav-overlay-button" href="">
              <p className="nav-overlay-text">Work</p>
            </a>
          </li>
          <li>
            <a className="nav-overlay-button" onClick={() => setOpenInfo(!openInfo)}>
              <p className="nav-overlay-text">Info</p>
            </a>
          </li>
          <li>
            <a className="nav-overlay-button" href="">
              <p className="nav-overlay-text">Contact</p>
            </a>
          </li>
          <li className="nav-overlay-socials">
            <SocialButtons />
          </li>
        </ul>
      </StyledNavOverlay>
    </div>
  );
};

NavOverlay.propTypes = {
  active: bool.isRequired,
  openInfo: bool.isRequired,
  setOpenInfo: func.isRequired
};

export default NavOverlay;
