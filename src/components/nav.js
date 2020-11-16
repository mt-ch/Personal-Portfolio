import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNav = styled.div`
.nav-about,
  .nav-work,
  .nav-contact {
    transition: all 0.3s ease;
  }

  .nav-about:hover,
  .nav-work:hover,
  .nav-contact:hover {
    transform: translateX(0.5em);
    transition: transform 0.3s ease;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul className="nav" style={{ lineHeight: 1.2 }}>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            offset={-100}
          >
            <p className="nav-about">ABOUT</p>
          </Link>
        </li>
        <li>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={300}
            offset={-100}
          >
            <p className="nav-work">WORK</p>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            offset={-100}
          >
            <p className="nav-contact">DMS</p>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
