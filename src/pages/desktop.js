import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import Projects from "../components/projects";
import Landing from "../components/landing";
import Nav from "../components/nav";
import Contact from "../components/contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Desktop = ({ projects, info }) => {
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
  }, [ScrollTrigger]);

  return (
    <div className="desktop">
      <div class="desktop-nav">
        <Nav />
      </div>
      <div className="scroller">
        <div className="desktop-side">
          <Landing />
          <Projects projects={projects} id="section-work" />
          <Contact data={info} id="section-contact" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
