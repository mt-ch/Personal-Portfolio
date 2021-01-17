import React, { useEffect, useRef } from "react";
import { TimelineLite, gsap, Power3 } from "gsap";
import { StyledLanding } from "../styled/components.styled";

const Landing = () => {
  let textTitleTargetLine1 = useRef(null);
  let textTitleTargetLine2 = useRef(null);
  let textTitleTargetLine3 = useRef(null);
  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1
      .from(".line", {
        duration: 2,
        y: "18vh",
        stagger: {
          amount: 2,
        },
        ease: Power3.easeInOut,
      })
  };

  return (
      <StyledLanding>
        <div className="content">
          <div className="header-wrapper">
            <h1 ref={(el) => (textTitleTargetLine1 = el)}>CODER</h1>
            <h1 ref={(el) => (textTitleTargetLine2 = el)}>+ DIGITAL</h1>
            <h1 ref={(el) => (textTitleTargetLine3 = el)}>DESIGNER</h1>
          </div>

          <div className="subtext-wrapper">
            <div className="sub-text">
              <div className="line-wrap">
                <div className="line">
                  <h5>Available for freelance work:</h5>
                </div>
              </div>
              <div className="line-wrap">
                <div className="line">
                  <h5>Jan, 21</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledLanding>
  );
};

export default Landing;
