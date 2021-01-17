import React, { useRef, useState } from "react";
import Projects from "../components/projects";
import ProjectsDesktop from "../components/projectsDesktop";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import { useEffect } from "react";
import { HomeDesktop } from "../styled/components.styled";
import SmoothScroll from "../components/SmoothScroll";
import { preloader } from "../preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

const Home = () => {
  const { width } = useViewport();
  const breakpoint = 550;
  const scrollRef = useRef(null);
  const revealRef = useRef(null);
  let textTarget = useRef(null);

  // useEffect(() => {
  //   const scroller = document.querySelector(".scrollable");
  //   const bodyScrollBar = Scrollbar.init(scroller);

  //   // code for gsap and smooth scrollbar work together
  //   ScrollTrigger.scrollerProxy(".scrollable", {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         bodyScrollBar.scrollTop = value;
  //       }
  //       return bodyScrollBar.scrollTop;
  //     },
  //   });

  //   bodyScrollBar.addListener(ScrollTrigger.update);

  //   ScrollTrigger.defaults({ scroller: scroller });
  // }, []);

  // useEffect(() => {
  //   const results = Splitting({ target: textTarget, by: "lines" });
  //   results[0].lines.forEach((line, index) => {
  //     $(line).wrapAll(
  //       "<div style=overflow:hidden;><div class='about'></div></div>"
  //     );
  //     line.forEach((word) => {
  //       word.style.marginRight = ".2em";
  //     });
  //   });
  //   gsap.from(".about", {
  //     duration: 2,
  //     yPercent: 150,
  //     stagger: 0.2,
  //     ease: 'Power3.easeInOut',
  //     scrollTrigger: {
  //       trigger: revealRef.current,
  //       start: "top 90%",
  //       markers: true,
  //     },
  //   });
  // }, [])

  return (
    // <div className="scrollable">
      <Layout>
        {width < breakpoint ? (
          <>
            <NavMobile />
            <Landing />
            <About />
            <Projects />
            <Contact />
          </>
        ) : (
          <>
            <Nav />
            <HomeDesktop>
              <Landing />
              <About/>
              <Projects className='section-work'/>
              <Contact/>
            </HomeDesktop>
          </>
        )}
      </Layout>
    // </div>
  );
};

export default Home;
