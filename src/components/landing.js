import React, { useEffect } from "react";
import { gsap } from "gsap";
import { StyledLanding } from "../styled/components.styled";

const Landing = () => {
  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    gsap.from(".landing-line", {
      delay: 2,
      duration: 3,
      yPercent: 150,
      stagger: {
        amount: 1,
      },
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledLanding>
      <div className="header-wrapper">
        <span className="line-wrap">
          <h1 className="landing-line">FOLIO - 21</h1>
        </span>
        {/* <span className="line-wrap">
          <h1 className="landing-line" style={{marginLeft: "10vw"}}>+ DIGITAL</h1>
        </span>
        <span className="line-wrap">
          <h1 className="landing-line">DESIGNER</h1>
        </span> */}
      </div>

      <div className="subtext-wrapper">
        <div className="sub-text">
          <div className="line-wrap">
            <div className="landing-line">
              <h5>Available for freelance work:</h5>
            </div>
          </div>
          <div className="line-wrap">
            <div className="landing-line">
              <h5>Jan, 21</h5>
            </div>
          </div>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
