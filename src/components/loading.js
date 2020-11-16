import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";
import { useRef } from "react";
import gsap from "gsap";

const StyledLoading = styled.div`
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.primary};
  /* mix-blend-mode: difference; */

  .loader-info {
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
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .loader-info {
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
    }
  }
`;

const Loading = () => {
  const { countUp } = useCountUp({
    end: 100,
    start: 0,
    duration: 3,
    suffix: "%",
  });
  let loading = useRef(null);
  useEffect(() => {
    AOS.init();
    // setTimeout('', 5000)
    return function cleanup() {
      gsap.to('.loading', {
        duration: 1,
        ease: "power4.Out",
        delay: 3,
        // y: 150,
        y: '-130vh',
        // y: '150vh',
        opacity: 0,
        stagger: {
          amount: 0.5
        }
      });
    };
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLoading
      className="loading"
        countUp={countUp}
      >
        <div
          className="loader-info"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <p className="greeting">Patience is key</p>
          <p className="counter">{countUp}</p>
        </div>
        <div className="loader"></div>
      </StyledLoading>
    </ThemeProvider>
  );
};

export default Loading;
