import React, { useEffect } from "react";
import { StyledNavMobile } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavMobile = () => {

  function handleScroll() {
    gsap.to(window, {duration: 2, scrollTo: "#contact"})
  };
  return (
    <StyledNavMobile className="nav">
      <div className="nav">
        <a className="nav-title">
          <p>
            <div className="line-wrap">
              <div className="line">
                <strong>Matt Chan</strong>
              </div>
            </div>
          </p>
          <p>
            <div className="line-wrap">
              <div className="line">2016-2020</div>
            </div>
          </p>
        </a>

        <div className="nav-options">
          <a onClick={handleScroll}>
            <p>
              {" "}
              <div className="line-wrap">
                <div className="line">Contact</div>
              </div>
            </p>
          </a>
        </div>
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
