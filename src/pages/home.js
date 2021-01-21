import React, { useRef, useState } from "react";
import ProjectsDesktop from "../components/projectsDesktop";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import { useEffect } from "react";
import { HomeDesktop } from "../styled/components.styled";
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
    Pace.options = {
      ajax: true,
      document: false,
      eventLag: false,
    };

    Pace.track(function(){
      GetData();
    });

    Pace.on("done", function () {
      setIsLoading(false);
      gsap.to(".loader-text", {
        duration: 2.5,
        y: -50,
        opacity: 0,
        ease: "Power3.easeInOut",
      });
      gsap.to("#preloader",{
        delay: 1,
        duration: 2,
        top: "-100%",
        ease: "Power3.easeInOut",
      });
    });
  }, []);
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

  return (
    // <div className="scrollable">
    <>
      <div id="preloader">
        <div class="loader-container">
        <p class="loader-text">Matt Chan</p>
        </div>
      </div>
      {isLoading ? null : (
        <Layout>
          {width < breakpoint ? (
            <>
              <NavMobile />
              <Landing />
              <About />
              <ProjectsDesktop projects={projects} id="section-work" />
              <Contact data={info} />
            </>
          ) : (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <Nav />
              <div>
                <Landing />
                <About />
                <ProjectsDesktop projects={projects} id="section-work" />
                <Contact data={info} />
              </div>
            </div>
          )}
        </Layout>
       )} 
    </>
  );
};

export default Home;
