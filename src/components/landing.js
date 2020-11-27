import React, { useEffect, useRef } from "react";
import { TimelineLite, gsap, CSSPlugin } from "gsap";
import { StyledLanding, StyledLoading } from "../styled/components.styled";
import { useCountUp } from "react-countup";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";
import Spinner from "../assets/img/Spinner.png";

gsap.registerPlugin(CSSPlugin);

const Landing = ({ showContent }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let borderTop = useRef(null);
  let borderBottom = useRef(null);
  let spinner = useRef(null);

  useEffect(() => {
    gsap.from([borderTop], {
      duration: 0.5,
      delay: 0.5,
      width: "0%",
    });
    gsap.from([borderBottom], {
      duration: 0.5,
      delay: 1,
      width: "0%",
    });
    gsap.from([line1, line2, line3, line4, line5], {
      duration: 0.8,
      delay: 1.5,
      y: "18vw",
      stagger: {
        amount: 0.15,
      },
    });
    gsap.from([spinner], {
      duration: 0.8,
      delay: 2.3,
      opacity: 0,
    });
  }, [line1, line2, line3, line4, line5, borderTop, borderBottom, spinner]);

  const { countUp } = useCountUp({
    end: 100,
    start: 0,
    duration: 3,
    suffix: "%",
    onEnd: () => reveal(),
  });

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to(".loading", {
      height: "0%",
      y: "-50vh",
      duration: 1,
      delay: 0,
      ease: "Expo.easeInOut",
    }).from(".content", {
      y: "100vh",
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLanding>
        <StyledLoading className="loading">
          <p className="loading-txt">Patience is key</p>
          <div className="progress-wrapper">
            <div className="counter">
              <p>{countUp}</p>
            </div>
            <div className="progress" style={{ width: countUp }}></div>
          </div>
        </StyledLoading>

        <div className="content">
          <div className="header-wrapper">
            <div ref={(el) => (borderTop = el)} className="border-top"></div>
            <h1>
              <div className="line-wrap">
                <div ref={(el) => (line1 = el)} className="line">
                  CODER
                </div>
              </div>
              <div className="line-wrap">
                <div ref={(el) => (line2 = el)} className="line">
                  +DIGITAL
                </div>
              </div>
              <div className="line-wrap">
                <div ref={(el) => (line3 = el)} className="line">
                  DESIGNER
                </div>
              </div>
              <div className="line-wrap">
                <div ref={(el) => (line4 = el)} className="line">
                  ↓
                </div>
              </div>
            </h1>
          </div>

          <div className="subtext-wrapper">
            <div className="sub-text">
              <div className="line-wrap">
                <p ref={(el) => (line5 = el)}>Selected Work</p>
              </div>
              <img ref={(el) => (spinner = el)} class="spinner" src={Spinner} />
            </div>
            <div
              ref={(el) => (borderBottom = el)}
              className="border-bottom"
            ></div>
          </div>
        </div>
      </StyledLanding>
    </ThemeProvider>
  );
};

export default Landing;
