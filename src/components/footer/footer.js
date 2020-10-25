import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow";
import { StyledFooter } from "./footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      {/* <ul>
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
      </ul> */}
      <p className='footer-text'>Let's get in touch!</p>

      <p className='footer-email'>me@matt.chan</p>

      <div className="footer-social">
        <div className="footer-social-div">
          <p className='footer-social-text'>Socials</p>
          <Arrow height={"20"} width={"20"} fill={"hsla(0,0%,100%,.2)"} />
        </div>
        <p className='footer-social-text'>Github · LinkedIn</p>
      </div>

      <p className='footer-cr'>© 2020 Matthew Chan</p>
    </StyledFooter>
  );
};

export default Footer;
