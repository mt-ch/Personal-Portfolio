import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals/fonts.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";

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
        ease: "power0.inOut",
      },
      {
        backgroundColor: theme.dark,
        color: theme.white,
        duration: 0.5,
        ease: "power0.inOut",
        scrollTrigger: {
          scrub: true,
          start: "1000px",
          end: "1500px",
        },
      }
    );
    gsap.fromTo(
      "h2, .section-header",
      {
        color: theme.black,
        // borderTop: "solid #010101 2px",
        // borderBottom: "solid #010101 2px",
        duration: 0.5,
        ease: "power0.inOut",
      },
      {
        color: theme.primary,
        // borderTop: "solid #C7B6F6 2px",
        // borderBottom: "solid #C7B6F6 2px",
        duration: 0.5,
        ease: "power0.inOut",
        scrollTrigger: {
          scrub: true,
          start: "1000px",
          end: "1500px",
        },
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
`;

const Layout = ({ children }) => {
  // let layout = useRef(null);
  // useEffect(() => {
  //   gsap.from([layout], {
  //     duration: 1,
  //     delay: 0,
  //     ease: "power4.Out",
  //     y: "130vh",
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   });
  // }, [layout]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <StyledLayout className="layout">
    {children}
        </StyledLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
