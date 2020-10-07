import React from "react";
import { bool } from "prop-types";
import SocialButtons from "../../socialButtons";
import { StyledNavOverlay } from "./navOverlay.styled";

const NavOverlay = ({ active }) => {
  return (
    //iterate nav items
    <StyledNavOverlay className="nav-overlay" active={active}>
      <ul>
        <li>
          <a className="nav-overlay-button" href="">
            <p className="nav-overlay-text">Projects</p>
          </a>
        </li>
        <li>
          <a className="nav-overlay-button" href="">
            <p className="nav-overlay-text">About</p>
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
  );
};

NavOverlay.propTypes = {
  active: bool.isRequired
};

export default NavOverlay;
