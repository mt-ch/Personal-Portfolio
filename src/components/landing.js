import React, { useEffect } from "react";
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
import LandingScreen from './landingScreen'

gsap.registerPlugin(CSSPlugin);

const StyledLoading = styled.div`
  background-color: ${({ theme }) => theme.primary};
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
  const { countUp } = useCountUp({
    end: 100,
    start: 0,
    duration: 1,
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
      .to(".loading", {
        height: "0%",
        duration: 0.5,
        delay: 0,
        ease: "Expo.easeInOut",
      })
      .from(".content", {
        y: '100vh',
        duration: 0.5,
        ease: "Expo.easeInOut",
      })
      // .to(".content", {
      //   height: "100%",
      //   top: 0,
      //   delay: 0.5,
      //   duration: 0.5,
      //   ease: "Expo.easeInOut",
      // });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLanding>
        <StyledLoading className="loading">
          <h2 className="counter">{countUp}</h2>
          <div className="progress" style={{ width: countUp }}></div>
        </StyledLoading>

        <div className="content">
          <div className="txt">
            <LandingScreen/>
          </div>
        </div>
      </StyledLanding>
    </ThemeProvider>
  );
};

export default Landing;
