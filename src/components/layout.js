import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals/fonts.css";
import { StyledLayout } from "../styled/components.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import classNames from "classnames";
import { theme } from "../globals/theme";
import Cursor from "./cursor";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [linkHovered, setLinkHovered] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//   }, []);

//   if (typeof navigator !== "undefined" && isMobile()) return null;

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseenter", onMouseEnter);
//     document.removeEventListener("mouseleave", onMouseLeave);
//     document.removeEventListener("mousedown", onMouseDown);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseDown = () => {
//     setClicked(true);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const handleLinkHoverEvents = () => {
//     document.querySelectorAll("a").forEach((el) => {
//       el.addEventListener("mouseover", () => setLinkHovered(true));
//       el.addEventListener("mouseout", () => setLinkHovered(false));
//     });
//   };

//   const cursorClasses = classNames("cursor", {
//     "cursor--clicked": clicked,
//     "cursor--hidden": hidden,
//     "cursor--link-hovered": linkHovered,
//   });

//   return (
//     <div
//       className={cursorClasses}
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     />
//   );
// };

const Layout = ({ children }) => {
  
  useEffect(() => {
    // const cursor = new Cursor(document.querySelector(".cursor"));
    // [...document.querySelectorAll("a")].forEach((el) => {
    //   el.addEventListener("mouseenter", () => cursor.emit("enter"));
    //   el.addEventListener("mouseleave", () => cursor.emit("leave"));
    // });
    
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <StyledLayout className="layout">
        {children}

      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
