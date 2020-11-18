import React, { useEffect, useRef, useState } from "react";
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
import { LiquidDistortionText } from "react-text-fun";

gsap.registerPlugin(CSSPlugin);

const StyledLoading = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* align-items: center; */

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
    font-size: 15rem;
    /* filter: blur(.5rem); */
  }

  .progress {
    position: absolute;
    height: 100vh;
    background-color: ${({ theme }) => theme.dark};
  }

  /* .loader-info {
    position: absolute;
    bottom: 0;
    z-index: 10;
    padding: 0 ${({ theme }) => theme.loadingPadding} 2rem;
    mix-blend-mode: difference;

    .counter {
      font-size: clamp(5rem, 25vw, 20rem);
      z-index: 10;
      line-height: 1;
      color: ${({ theme }) => theme.white};
    }
    .greeting {
      z-index: 10;
      font-size: clamp(1.25rem, 8vw, 2.5rem);
      color: ${({ theme }) => theme.white};
    }
  }
  .loader {
    position: absolute;
    background-color: ${({ theme }) => theme.dark};
    top: 0;
    z-index: 0;
    height: 100vh;
    width: ${({ countUp }) => countUp};
  } */

  .shape {
    width: 40vw;
    height: 80vh;
    position: relative;
    background-color: white;

    .rectangle {
      position: absolute;
      bottom: 0;
    }

    .triangle {
      position: absolute;
      left: 0;
    }

    .circle {
      position: absolute;
      right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* .loader-info {
      position: relative;
      height: 100vh;
      z-index: 10;
      padding: 0;
      .greeting {
        position: absolute;
        right: 0;
        z-index: 10;
        padding: 2rem ${({ theme }) => theme.loadingPadding} 0 0;
        font-size: clamp(3rem, 8vw, 4rem);
      }
      .counter {
        position: absolute;
        bottom: 0;
        z-index: 10;
        line-height: 1;
        padding: 0 0 2rem ${({ theme }) => theme.loadingPadding};
      }
    } */
  }
`;

const Landing = ({ showContent }) => {
  const { countUp } = useCountUp({
    end: 100,
    start: 0,
    duration: 3,
    suffix: "%",
    onEnd: () => reveal(),
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1
      // .to(
      //   ".follow",
      //   { width: "100%", ease: Expo.easeInOut, duration: 1.2 },
      //   "+=0.7"
      // )
      .to(".loading", {
        height: "0%",
        duration: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(".content", {
        height: "100%",
        duration: 0.5,
        ease: "Expo.easeInOut",
      });

    // .to('.hide', 0.1, { display: 'none' })
    // .to('.follow', 0.7, { height: '100%', ease: Expo.easeInOut }, '+=0.5')
    // .to('.content', 0.7, { width: '100%', ease: Expo.easeInOut })
    // .to('.title-lines', 0.1, { display: 'block' })
    // .to('.title-lines', 0.6, { opacity: 1, stagger: 0.15, ease: Expo.easeInOut })
    // .to('#scroll, li', 0.4, { opacity: 1 }, '-=0.3')
    // .to('main', 0.1, { marginBottom: '15vw' })
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLanding>
        <StyledLoading className="loading">
          {/* <p className="greeting">Patience is key</p> */}
          <h2 className="counter">{countUp}</h2>
          <div className="follow"></div>
          <div className="progress" style={{ width: countUp }}></div>
        </StyledLoading>

        <div className="content">
          <div className="txt">
            <LiquidDistortionText
              fontSize={"80"}
              speed={0.3}
              fill={"#f5f5f5"}
              text={"MATT CHAN"}
              fontFamily={'Monument Extended'}
              lineHeight={1}

            />
            <LiquidDistortionText
              fontSize={"80"}
              speed={0.3}
              fill={"#f5f5f5"}
              text={"CODING"}
              fontFamily={'Monument Extended'}
              lineHeight={1}

            />
            <LiquidDistortionText
              fontSize={"80"}
              speed={0.3}
              fill={"#f5f5f5"}
              text={"DESIGN"}
              fontFamily={'Monument Extended'}
              lineHeight={1}
            />
          </div>

          <Overlay />
        </div>
      </StyledLanding>
    </ThemeProvider>
  );
};

export default Landing;
