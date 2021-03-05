import React, { useEffect } from "react";
import { gsap, TimelineLite } from "gsap/all";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { StyledNavMobile } from "../styled/nav.styled";

gsap.registerPlugin(ScrollToPlugin);

const NavMobile = () => {
  useEffect(() => {
    reveal();
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
        <p>
          <div className="line-wrap">
            <div className="menu-text">
              <strong>Matt Chan</strong>
            </div>
          </div>
        </p>
        <p>
          <div className="line-wrap">
            <div className="menu-text">2016-2021</div>
          </div>
        </p>
      </a>

      {/* <a className="contact-button" onClick={handleClick}>
        <p className="contact-button-text">
          <div className="line-wrap">
            <div className="menu-text">
              Contact
            </div>
            <div className="underline-nav-mobile"></div>
          </div>
        </p>
      </a> */}
        <a href="#" class="link link--metis">
          <p>About us</p>
        </a>
    </StyledNavMobile>
  );
};

export default NavMobile;
