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
      delay: 3.5,
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
        <About />
        <div className="landing-subtext">
          <span className="line-wrap">
            <p className="landing-line">
              Available for freelance work: Feb, 21
            </p>
          </span>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
