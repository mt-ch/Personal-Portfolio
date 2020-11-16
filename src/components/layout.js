import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../globals/fonts.css';

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
      "h2",
      {
        color: theme.black,
        duration: 0.5,
        ease: "power2.inOut",
      },
      {
        color: theme.primary,
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
        filter: "invert(1)",
        duration: 0.5,
        ease: "power2.inOut",
      },
      {
        filter: "invert(0)",
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
  let home = useRef(null);
  useEffect(() => {
    gsap.from([home], {
      duration: 1,
      delay: 0,
      ease: "power4.Out",
      // y: 150,
      y: '130vh',
      // opacity: 0,
      stagger: {
        amount: 0.4
      }
    });
  }, [home]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap"
        rel="stylesheet"
      /> */}
      <StyledLayout ref={el => (home = el)} className="layout">
        <ChangeColor>
          <Overlay />
          {children}
        </ChangeColor>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
