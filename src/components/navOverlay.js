import React from "react";
import SocialButtons from "./socialButtons";

const NavOverlay = () => {
  return (
      //iterate nav items
    <nav className="nav-overlay">
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
    </nav>
  );
};

export default NavOverlay;
