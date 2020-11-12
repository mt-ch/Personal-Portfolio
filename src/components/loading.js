import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { FontStyles } from "../globals/fonts";
import { theme } from "../globals/theme";

const StyledLoading = styled.div`
  /* height: 100vh; */
  background-color: #59d1ae;
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
      color: white;
    }
    .greeting {
      z-index: 10;
      font-size: clamp(1.25rem, 8vw, 2.5rem);
      color: white;
    }
  }
  .loader {
    position: absolute;
    background-color: #212121;
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
    duration: 7,
    suffix: "%",
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles />
      <StyledLoading countUp={countUp}>
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
