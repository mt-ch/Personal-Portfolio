import React, { useEffect } from "react";
import { gsap, TimelineLite } from "gsap/all";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { StyledNavMobile } from "../styled/nav.styled";

gsap.registerPlugin(ScrollToPlugin);

const NavMobile = () => {
  useEffect(() => {
    revealMenu();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 2,
      ease: "Power3.easeInOut",
      scrollTo: {
        y: "#section-contact",
        offsetY: -20,
      },
    });
  };

  const revealMenu = () => {
    const textTimeline = new TimelineLite();

    textTimeline.from(".mobileMenu-text", {
      delay: 4,
      duration: 2,
      yPercent: 100,
      stagger: 0.2,
      ease: "Power3.easeInOut",
    });
    gsap.from(".underline-nav-mobile", {
      duration: 1.5,
      delay: 5,
      width: 0,
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledNavMobile>
      <a className="nav-title">
        <div className="line-wrap">
          <p className="mobileMenu-text">
            <strong>Matt Chan</strong>
          </p>
        </div>
        <div className="line-wrap">
          <p className="mobileMenu-text">2016-2021</p>
        </div>
      </a>

      <a className="contact-button" onClick={handleClick}>
        <div className="contact-button-text">
          <div className="line-wrap">
            <p className="mobileMenu-text">Contact</p>
            <div className="underline-nav-mobile"></div>
          </div>
        </div>
      </a>
    </StyledNavMobile>
  );
};

export default NavMobile;
