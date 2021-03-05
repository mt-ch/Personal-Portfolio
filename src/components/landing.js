import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { StyledLanding } from "../styled/landing.styled";
import About from "./about";
import { RevealLandingTitle, RevealLandingTitleOther } from "./animations";

const Landing = () => {
  let lineTarget = useRef(null);

  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    gsap.from(".landing-line", {
      delay: 3.3,
      duration: 3,
      yPercent: 200,
      stagger: {
        amount: 1,
      },
      ease: "Power3.easeInOut",
    });
    gsap.from(".about-number", {
      delay: 4,
      duration: 2,
      opacity: 0,
      ease: "Power3.easeInOut",
    });
    gsap.from(".landing-wrapper", {
      delay: 4,
      duration: 2,
      opacity: 0,
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledLanding>
      
      <div>
        <div class="landing-text-split">
          <RevealLandingTitle
            className={"landing-line-1"}
            text={"FOLIO / 21"}
          />
          <div className="section-circle about-number">
            <h3 className="section-number">01</h3>
          </div>
        </div>
        <RevealLandingTitleOther className={"landing-line-2"} text={"CODER"} />

        <RevealLandingTitle className={"landing-line-3"} text={"+ DIGITAL"} />
        <RevealLandingTitleOther
          className={"landing-line-4"}
          text={"DESIGNER"}
        />
      </div>
      <div class="landing-bottom">
        <About
          text={
            "Hi! I'm Matt. I'm a recent Computer Science graduate from the University of Derby. I'm currently searching for Frontend Development positions, based in the UK."
          }
        />
        <div className="landing-subtext">
          <About text={"Available for freelance work: March, 21"} />
        </div>
      </div>
      <div className="landing-wrapper"></div>
    </StyledLanding>
  );
};

export default Landing;
