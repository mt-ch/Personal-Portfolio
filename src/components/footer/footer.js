import React from "react";
import Arrow from "../../assets/icons/arrow";
import { StyledFooter } from "./footer.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from '../../pages/projects/projects';
import Info from '../../pages/info/info';

const Footer = () => {
  return (
    <Router>
      <StyledFooter>
        <ul>
          <li>
            <Link to="/projects">
              <p>Projects</p>
              <Arrow height={"20"} width={"20"} fill={"black"} />
            </Link>
          </li>
          <li>
            <Link to="/info">
              <p>Info</p>
              <Arrow height={"20"} width={"20"} fill={"black"} />
            </Link>
          </li>
        </ul>

        <p>© 2020 Matthew Chan</p>
      </StyledFooter>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
};

export default Footer;
