import React, { useEffect } from "react";
import { gsap } from "gsap";
import { StyledLanding } from "../styled/landing.styled";
import About from "./about";

const Landing = () => {
  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    gsap.from(".landing-line", {
      delay: 2,
      duration: 3,
      yPercent: 200,
      stagger: {
        amount: 1,
      },
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledLanding>
      <div>
        <span className="line-wrap">
          <h1 className="landing-line landing-line-1">FOLIO / 21 </h1>
        </span>
        <span className="line-wrap">
          <h1 className="landing-line landing-line-2" >CODER</h1>
        </span>
        <span className="line-wrap">
          <h1 className="landing-line landing-line-3">+ DIGITAL</h1>
        </span>
        <span className="line-wrap">
          <h1 className="landing-line landing-line-4">DESIGNER</h1>
        </span>
      </div>
      <div class="landing-bottom">
        <About />
        <div className="landing-subtext">
          <span className="line-wrap">
            <p className="landing-line">Available for freelance work:</p>
          </span>
          <span className="line-wrap">
            <p className="landing-line">Feb, 21</p>
          </span>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
