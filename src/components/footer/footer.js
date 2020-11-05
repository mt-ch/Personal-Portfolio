import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow";
import Github from "../../assets/icons/github";
import LinkedIn from "../../assets/icons/linkedin";
import { StyledFooter } from "./footer.styled";

function ScrollToTopFunc() {
  return window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <StyledFooter>
      <a className="backToTop" onClick={ScrollToTopFunc}>
        <Arrow
          className="arrow-rotate"
          height={"60"}
          width={"60"}
          fill={"#f5f5f5"}
        />
      </a>
      <div className="nav">
        <Link to="/projects">
          <h1 className="text-projects">Projects</h1>
        </Link>

        <Link to="/info">
          <h1 className="text-info">Info</h1>
        </Link>

        <h1 className="text-email">Email</h1>
      </div>

      <div className="footer-social">
        <div className="footer-social-github">
          <div className="social-border">
            <p>Github</p>
            <Github height={"30"} width={"30"} fill={"#f5f5f5"} />
          </div>
        </div>
        <div className="footer-social-linkedin">
          <div className="social-border">
            <p>LinkedIn</p>
            <LinkedIn height={"30"} width={"30"} fill={"#f5f5f5"} />
          </div>
        </div>
      </div>

      {/* <p className="footer-bottom">© 2020 Matthew Chan</p> */}
    </StyledFooter>
  );
};

export default Footer;
