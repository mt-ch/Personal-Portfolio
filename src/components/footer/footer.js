import React from "react";
import { Link } from 'react-router-dom';
import Arrow from "../../assets/icons/arrow";
import { StyledFooter } from "./footer.styled";

const Footer = () => {
  return (
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
  );
};

export default Footer;
