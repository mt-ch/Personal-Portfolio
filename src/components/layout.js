import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals/fonts.css";
import { StyledLayout } from "../styled/components.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import classNames from "classnames";
import { theme } from "../globals/theme";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  if (typeof navigator !== "undefined" && isMobile()) return null;

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

// const ChangeColor = ({ children }) => {
//   const revealRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       revealRef.current,
//       {
//         backgroundColor: theme.primary,
//         color: theme.black,
//         duration: 0.5,
//         ease: "power0.inOut",
//       },
//       {
//         backgroundColor: theme.dark,
//         color: theme.white,
//         duration: 0.5,
//         ease: "power0.inOut",
//         scrollTrigger: {
//           scrub: true,
//           start: "1000px",
//           end: "1500px",
//         },
//       }
//     );
//     gsap.fromTo(
//       "h2, .section-header",
//       {
//         color: theme.black,
//         // borderTop: "solid #010101 2px",
//         // borderBottom: "solid #010101 2px",
//         duration: 0.5,
//         ease: "power0.inOut",
//       },
//       {
//         color: theme.primary,
//         // borderTop: "solid #C7B6F6 2px",
//         // borderBottom: "solid #C7B6F6 2px",
//         duration: 0.5,
//         ease: "power0.inOut",
//         scrollTrigger: {
//           scrub: true,
//           start: "1000px",
//           end: "1500px",
//         },
//       }
//     );
//   }, []);

//   return <div ref={revealRef}>{children}</div>;
// };

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLayout className="layout">
        {/* <div class="bg"></div> */}
        {children}
        <Cursor />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
