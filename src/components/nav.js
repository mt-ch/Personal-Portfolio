import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <ul className="nav" style={{lineHeight: 1}}>
      <li>
        <Link to="about" spy={true} smooth={true} duration={300} offset={-100}>
        <p>• ABOUT</p>
        </Link>
      </li>
      <li>
        <Link to="work" spy={true} smooth={true} duration={300} offset={-100}>
          <p>• WORK</p>
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
          <p>• DMS</p>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
