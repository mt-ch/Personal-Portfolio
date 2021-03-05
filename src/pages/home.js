import React, { useState, useEffect } from "react";
import { useMediaQueries } from "@react-hook/media-query";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pace from "pace-js";

import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import Loading from "../components/loading";
import Desktop from "./desktop";

import { HomeStyled } from "../styled/home.styled";

import GetInfo from "../functions/getInfo";
import GetProjects from "../functions/getProjects";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [info, setInfo] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTextTl = new TimelineLite({});
  const loadingLineTl = new TimelineLite({});
  const GetData = () => [GetProjects(setProjects).then(GetInfo(setInfo))];
  const { matches } = useMediaQueries({
    width: "(min-width: 700px)",
  });

  useEffect(() => {
    disableBodyScroll(document.body);

    loadingLineTl.from(".loading-line", {
      delay: 0.5,
      duration: 2,
      scaleY: 0,
      ease: "Power3.easeInOut",
    });
    loadingLineTl.to(".loading-line", {
      delay: 0.5,
      duration: 2,
      scaleY: 0,
      ease: "Power3.easeInOut",
    });

    loadingTextTl.from(".loader-letter", {
      delay: 0.5,
      stagger: 0.1,
      duration: 1,
      yPercent: 200,
      ease: "Power3.easeInOut",
    });
    loadingTextTl.to(".loader-letter", {
      delay: 0.5,
      stagger: 0.1,
      duration: 1,
      yPercent: 200,
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
    return enableBodyScroll(document.body);
  }

  return (
    <>
      <Layout>
        <Loading />
          <HomeStyled>
            {!matches.width ? (
              isLoading ? null : (
                <>
                  <NavMobile />
                  <Landing />
                  <Projects projects={projects} id="section-work" />
                  <Contact data={info} />
                </>
              )
            ) : isLoading ? null : (
              <Desktop projects={projects} info={info} />
            )}
          </HomeStyled>
      </Layout>
    </>
  );
};

export default Home;
