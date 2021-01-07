import React, { useEffect } from "react";
import { StyledNavMobile } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavMobile = () => {

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        scrollTo: ".section-contact",
        offsetY: 70,
      },
    });
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
          <a>
            <div className="line-wrap">
              <p className="line">Contact</p>
            </div>
          </a>
        </div>
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
