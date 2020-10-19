import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { StyledTopNav } from "./topNav.styled";
import { bool, func } from "prop-types";


import Projects from '../../../pages/projects/projects';
import Info from '../../../pages/info/info';
import Home from '../../../pages/home/home';

// Top navigation
const TopNav = ({ active, setActive, openInfo, setOpenInfo }) => {
  // Set state
  const [nav, setNav] = useState("Navigation");
  const mediaQuery = window.matchMedia("(min-width: 576px");
  const openNav = () => setActive(!active);
  const closeInfo = () => setOpenInfo(!openInfo);

  async function handleNav() {
    openNav();
    if (openInfo) {
      closeInfo();
    }
  }

  function handleWindowResize(e) {
    // Check if the media query is true
    if (e.matches) {
      setActive(false);
    } else return;
  }

  mediaQuery.addListener(handleWindowResize);
  handleWindowResize(mediaQuery);

  useEffect(() => {
    // Change state of navigation text
    if (active) {
      setNav("Close");
    } else if (!active) {
      setNav("Navigation");
    }
  });

  return (
    <Router>
      <StyledTopNav>
        <Link className="title-link" to='/'>
          <p className="title-text">mc</p>
        </Link>
        <a className="nav-mobile" onClick={handleNav}>
          <p className="nav-title">{nav}</p>
        </a>
        <ul className="nav-desktop">
          <li>
            <Link to='/work'>
              <p>Work</p>
            </Link>
          </li>
          <li>
            <Link to='/info'>
              <p>Info</p>
            </Link>
          </li>
        </ul>
      </StyledTopNav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Projects />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
};

// Validation of changing state
TopNav.propTypes = {
  active: bool.isRequired,
  setActive: func.isRequired
};

export default TopNav;
