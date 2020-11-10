import React from "react"
import { Link } from "react-router-dom";
import { StyledNav } from "../styled/nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <Link className="title-link" to="/">
        <h4 className="title-text">mc</h4>
      </Link>

      <ul className="nav-desktop">
        <li>
          <Link to="/projects">
            <h5>Projects</h5>
          </Link>
        </li>
        <li>
          <Link to="/info">
            <h5>Info</h5>
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
