import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow";
import { StyledFooter } from "./footer.styled";

function ScrollToTopFunc() {
  return window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <StyledFooter>
      <a className="backToTop" onClick={ScrollToTopFunc}>
        <p className="backToTop-text">Back to the top</p>
        <Arrow
          className="arrow-rotate"
          height={"20"}
          width={"20"}
          fill={"hsla(0,0%,100%,.2)"}
        />
      </a>

      <p className="footer-text">Let's get in touch!</p>

      <a>
        <p className="footer-email">me@matt.chan</p>
      </a>

      <div className="footer-social">
        <div className="footer-social-div">
          <p className="footer-social-text">Socials</p>
          <Arrow height={"20"} width={"20"} fill={"hsla(0,0%,100%,.2)"} />
        </div>
        <div className="footer-social-links">
          <a>
            <p className="footer-social-github">Github</p>
          </a>
          <p className="footer-social-spacer"> · </p>
          <a>
            <p className="footer-social-linkedin">LinkedIn</p>
          </a>
        </div>
      </div>

      <p className="footer-cr">© 2020 Matthew Chan</p>
    </StyledFooter>
  );
};

export default Footer;
