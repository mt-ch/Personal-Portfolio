import React, { useEffect } from "react";
import { StyledNavMobile } from "../styled/components.styled";
import { gsap, TimelineLite } from "gsap/all";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavMobile = () => {
  useEffect(() => {
    reveal();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 1,
      ease: "Power3.ease",
      scrollTo: {
        y: "#section-contact",
        offsetY: -20,
      },
    });
  };

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".menu-text", {
      delay: 2,
      duration: 2,
      yPercent: 100,
      stagger: {
        amount: 0.4,
      },
      ease: "Power3.easeInOut",
    });
    gsap.from(".underline-nav-mobile", {
      duration: 1,
      delay: 3.5,
      width: 0,
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledNavMobile>
      <a className="nav-title">
        <h5>
          <div className="line-wrap">
            <div className="menu-text">
              <strong>Matt Chan</strong>
            </div>
          </div>
        </h5>
        <h5>
          <div className="line-wrap">
            <div className="menu-text">2016-2021</div>
          </div>
        </h5>
      </a>

      <a className="contact-button" onClick={handleClick}>
        <h5 className="contact-button-text">
          <div className="line-wrap">
            <div className="menu-text">
              Contact
            </div>
            <div className="underline-nav-mobile"></div>
          </div>
        </h5>
      </a>
    </StyledNavMobile>
  );
};

export default NavMobile;
