import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { bool, func } from "prop-types";

import Projects from '../../../pages/projects/projects';
import Info from '../../../pages/info/info';
import Contact from '../../contact';

import SocialButtons from "../../socialButtons";
import { StyledNavOverlay } from "./navOverlay.styled";

const NavOverlay = ({ active, setActive, openInfo, setOpenInfo }) => {
  useEffect(() => {
    // Change state of navigation text
    if (openInfo) {
      setActive(false);
    } else if (!openInfo) {
      return;
    }
  });
  return (
    <Router>
      <div className="nav-overlay">
        <StyledNavOverlay active={active}>
          <ul>
            <li>
              <Link className="nav-overlay-button" to='/work'>
                <p className="nav-overlay-text">Work</p>
              </Link>
            </li>
            <li>
              <Link
                className="nav-overlay-button"
                onClick={() => setOpenInfo(!openInfo)}
                to='/info'
              >
                <p className="nav-overlay-text">Info</p>
              </Link>
            </li>
            <li>
              <Link className="nav-overlay-button" to='/contact'>
                <p className="nav-overlay-text">Contact</p>
              </Link>
            </li>
            <li className="nav-overlay-socials">
              <SocialButtons />
            </li>
          </ul>
        </StyledNavOverlay>

        <Switch>
          <Route path="/work">
            <Projects />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

NavOverlay.propTypes = {
  active: bool.isRequired,
  openInfo: bool.isRequired,
  setOpenInfo: func.isRequired
};

export default NavOverlay;
