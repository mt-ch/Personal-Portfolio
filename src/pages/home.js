import React, { useRef, useState } from "react";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";
import Nav from "../components/nav";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import { useEffect } from "react";
import { HomeStyled } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetInfo from "../functions/getInfo";
import GetProjects from "../functions/getProjects";
import Pace from "pace-js";
import "../styled/loader.css";
import { RevealLoadingTitle } from "../components/animations";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

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
  const body = document.body;

  useEffect(() => {
    disableBodyScroll(body);
    gsap.from(".loading-line", {
      delay: .5,
      duration: 2,
      scaleY: 0,
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
      gsap.from(".loading-in", {
        delay: 3.1,
        duration: 1.5,
        transform: "scale(0)",
        ease: "Power3.easeInOut",
        onComplete: enableScroll,
      });
    });
  }, []);

  function enableScroll() {
    return enableBodyScroll(body);
  }

  useEffect(() => {
    // const scroller = document.querySelector(".scroller");

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
        <div className="wrapper">
          <div class="loader-text">
            <RevealLoadingTitle
              text={"LOADING"}
              className={"loader-letters"}
              delay={.5}
              letterClass={"loader-letter"}
            />
            <div className="loading-line"></div>
            <RevealLoadingTitle
              text={"mt-ch"}
              className={"loader-letters-name"}
              delay={.5}
              letterClass={"loader-letter-name"}
            />
          </div>
          <div className="loading-in"></div>
        </div>

        {width < breakpoint ? null : isLoading ? null : (
          <>
            <div className="progress-wrap">
              <div className="progress"></div>
            </div>
            {/* <Nav /> */}
          </>
        )}

        <div className="scroller">
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
        </div>
      </Layout>
    </>
  );
};

export default Home;
