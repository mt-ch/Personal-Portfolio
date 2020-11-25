import React, { useEffect, useRef } from "react";
import { TimelineLite, gsap, CSSPlugin, Expo } from "gsap";
import { StyledLanding } from "../styled/landing.styled";
import Overlay from "./overlay";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCountUp } from "react-countup";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";
import Spinner from "../assets/img/Spinner.png";
gsap.registerPlugin(CSSPlugin);

const StyledLoading = styled.div`
  background-color: #f2f2f2;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: end;

  .follow {
    position: absolute;
    background-color: peachpuff;
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
  }

  .greeting {
    position: relative;
    z-index: 2;
  }

  .counter {
    position: absolute;
    z-index: 1;
    opacity: 1;
    color: #fff;
    mix-blend-mode: difference;
    padding: 0 ${({ theme }) => theme.loadingPadding} 0rem;
    font-size: clamp(3rem, 20vw, 20rem);
  }

  .progress {
    position: absolute;
    height: 100vh;
    background-color: ${({ theme }) => theme.dark};
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;

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
      duration: .5,
      delay: 0.5,
      width: "0%",
    });
    gsap.from([borderBottom], {
      duration: .5,
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
      duration: .8,
      delay: 2.3,
      opacity: 0,
    });
  }, [line1, line2, line3, line4, line5, borderTop, borderBottom, spinner]);

  const { countUp } = useCountUp({
    end: 100,
    start: 0,
    duration: 1,
    suffix: "%",
    // onEnd: () => reveal(),
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // const reveal = () => {
  //   const t1 = new TimelineLite({
  //     onComplete: () => {
  //       showContent();
  //     },
  //   });
  //   t1.to(".loading", {
  //     height: "0%",
  //     duration: 0.5,
  //     delay: 0,
  //     ease: "Expo.easeInOut",
  //   }).from(".content", {
  //     y: "100vh",
  //     duration: 0.5,
  //     ease: "Expo.easeInOut",
  //   });
  //   // .to(".content", {
  //   //   height: "100%",
  //   //   top: 0,
  //   //   delay: 0.5,
  //   //   duration: 0.5,
  //   //   ease: "Expo.easeInOut",
  //   // });
  // };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLanding>
        {/* <StyledLoading className="loading">
          <h2 className="counter">{countUp}</h2>
          <div className="progress" style={{ width: countUp }}></div>
        </StyledLoading> */}

        <div className="content">
          <div className='header-wrapper'>
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
              <img ref={(el) => (spinner = el)}  class="spinner" src={Spinner} />
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
