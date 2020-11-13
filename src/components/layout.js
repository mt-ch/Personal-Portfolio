import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
// import { FontStyles } from "../globals/fonts";
import { theme } from "../globals/theme";

// Components
import Overlay from "./overlay";

gsap.registerPlugin(ScrollTrigger);

const ChangeColor = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        backgroundColor: theme.primary,
        color: theme.black,
        duration: 0.5,
        ease: "power2.inOut",
      },
      {
        backgroundColor: theme.dark,
        color: theme.white,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".layout",
          scrub: true,
          // markers: true,
          start: "300px",
          end: "1000px",
        },
      }
    );
    gsap.fromTo(
      ".nav",
      {
        filter: 'invert(1)',
        duration: 0.5,
        ease: "power2.inOut",
      },
      {
        filter: 'invert(0)',
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".layout",
          scrub: true,
          // markers: true,
          start: "100px",
          end: "800px",
        },
      }
    );
    // gsap.fromTo(
    //   ".spinner",
    //   {
    //     filter: 'invert(0)',
    //     duration: 0.5,
    //     ease: "power2.inOut",
    //   },
    //   {
    //     filter: 'invert(1)',
    //     duration: 0.5,
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: ".layout",
    //       scrub: true,
    //       start: "100px",
    //       end: "800px",
    //     },
    //   }
    // );
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap"
        rel="stylesheet"
      />      
      <StyledLayout className="layout">
      <ChangeColor>
        {/* <Overlay/> */}
        {children}
      </ChangeColor>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
