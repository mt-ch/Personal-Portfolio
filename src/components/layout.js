import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { FontStyles } from "../globals/fonts";
import { theme } from "../globals/theme";

// Components
import Overlay from "./overlay";
import Footer from "./footer";

gsap.registerPlugin(ScrollTrigger);

const ChangeColor = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    
      gsap.fromTo(
        revealRef.current,
        {
          backgroundColor: " #59d1ae ",
          color: "black",
          duration: 0.5,
          ease: "power2.inOut",
        },
        {
          backgroundColor: "#212121",
          color: "white",
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
      gsap.fromTo(
        "p, h1, svg",
        {
          color: "black",
          fill: "black",
          duration: 0.5,
          ease: "power2.inOut",
        },
        {
          color: "white",
          fill: "white",
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

      gsap.fromTo(
        ".featured-header",
        {
          // borderTop: "2px solid black",
          color: "black",
          duration: 0.5,
          ease: "power2.inOut",
        },
        {
          borderTop: "2px solid white",
          color: "white",
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

      gsap.fromTo(
        ".accordion-header",
        {
          borderTop: "4px solid black",
          color: "black",
          duration: 0.5,
          ease: "power2.inOut",
        },
        {
          borderTop: "4px solid white",
          color: "white",
          duration: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".layout",
            scrub: true,
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
  /* position: absolute; */
  width: 100vw;
  height: auto;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles />
      <StyledLayout className="layout" >
        {/* <ChangeColor> */}
        {/* <Overlay/> */}
        {children}
        {/* </ChangeColor> */}
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
