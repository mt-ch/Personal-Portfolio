import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="about" spy={true} smooth={true} duration={300} offset={-100}>
          <h5>- ABOUT</h5>
        </Link>
      </li>
      <li>
        <Link to="work" spy={true} smooth={true} duration={300} offset={-100}>
          <h5>- WORK</h5>
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
          <h5>- DMS</h5>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
