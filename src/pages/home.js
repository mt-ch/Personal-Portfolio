import React, { useRef, useState } from "react";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import { useEffect } from "react";
import { HomeStyled } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import GetInfo from "../functions/getInfo";
import GetProjects from "../functions/getProjects";
import Pace from "pace-js";
import "../styled/loader.css";

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
  const [info, setInfo] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const GetData = () => [GetProjects(setProjects).then(GetInfo(setInfo))];

  useEffect(() => {
    gsap.from(".loader-letter", {
      duration: 2,
      yPercent: 100,
      stagger: 0.2,
      ease: "Power3.easeInOut",
    });

    Pace.options = {
      ajax: true,
      document: false,
      eventLag: false,
    };

    Pace.track(function () {
      GetData();
    });

    Pace.on("done", function () {
      setIsLoading(false);
      gsap.to(".wrapper", {
        delay: 2,
        duration: 1.5,
        top: "-100%",
        ease: "Power3.easeInOut",
      });
    });
  }, []);

  useEffect(() => {
    const scroller = document.querySelector(".scroller");

    // const scrollbar = Scrollbar.init(scroller, {
    //   delegateTo: document,
    //   alwaysShowTracks: false,
    // });

    // ScrollTrigger.scrollerProxy(".scroller", {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       scrollbar.scrollTop = value; // setter
    //     }
    //     return scrollbar.scrollTop; // getter
    //   },
    // });

    // scrollbar.addListener(ScrollTrigger.update);
    // ScrollTrigger.defaults({ scroller: ".scroller" });

    gsap.from(".progress", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  }, [ScrollTrigger]);

  return (
    <>
      <Layout className="disable-scrollbars">
        <div class="wrapper">
          <span className="line-wrap">
            <h3 className="loader-letter">m</h3>
          </span>
          <span className="line-wrap">
            <h3 className="loader-letter">c</h3>
          </span>
        </div>
        <div className="progress-wrap">
          <div className="progress"></div>
        </div>
        {/* <div className="scroller"> */}
        <HomeStyled>
          {width < breakpoint ? (
            isLoading ? null : (
              <>
                <NavMobile />
                <Landing />
                <Projects projects={projects} id="section-work" />
                <Contact data={info} />
              </>
            )
          ) : isLoading ? null : (
            <div className="desktop">
              <div class="desktop-nav">
                <Nav />
              </div>
              <div className="desktop-side">
                <Landing />
                <Projects projects={projects} id="section-work" />
                <Contact data={info} id="section-contact" />
              </div>
            </div>
          )}
        </HomeStyled>
        {/* </div> */}
      </Layout>
    </>
  );
};

export default Home;
