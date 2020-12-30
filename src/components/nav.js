import React, { useEffect } from "react";
import { StyledNav } from "../styled/components.styled";
import { gsap, CSSPlugin, Power3 } from "gsap";

gsap.registerPlugin(CSSPlugin);

const scroll = (e) => {
  const section = document.querySelectorAll(".section-area");
  switch (e.target.innerHTML) {
    case "About":
      section[0].scrollIntoView({
        block: "start",
      });
      break;
    case "Work":
      section[1].scrollIntoView({
        block: "start",
      });
      break;
    case "Contact":
      section[2].scrollIntoView({
        block: "start",
      });
      break;
  }
};

const Nav = () => {
  useEffect(() => {
    gsap.from(".nav", {
      delay: 0.4,
      duration: 0.8,
      opacity: 0,
      y: -50,
      ease: Power3.easeInOut,
    });
    gsap.fromTo(
      ".nav-options",
      {
        bottom: 0,
      },
      {
        duration: 10,
        top: 0,
        ease: "Linear.easeNone",
        scrollTrigger: {
          start: "top top",
          end: "150%",
          scrub: true,
        },
      }
    );
    gsap.to(".nav-title", {
      duration: 7,
      y: -500,
      scrollTrigger: {
        start: "top top",
        end: '150%',
        scrub: true,
      },
    });
  }, []);
  return (
    <StyledNav className="nav">
      <div className="nav">
        <a className="nav-title">
          <p>
            <strong>Matt Chan</strong>
          </p>
          <p>2016-2020</p>
        </a>

        <div className="nav-options">
          <a onClick={(e) => scroll(e)}>
            <p>About</p>
          </a>
          <a onClick={(e) => scroll(e)}>
            <p>Work</p>
          </a>
          <a onClick={(e) => scroll(e)}>
            <p>Contact</p>
          </a>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
