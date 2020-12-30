import React, { useEffect, useState } from "react";
import GetProjects from "../functions/getProjects";
import { TimelineLite, gsap, CSSPlugin, Power2, Expo, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./image.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ProjectsDesktop from "./projectsDesktop";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetProjects().then((data) => setProjects(data)).then(setLoading(false));

    gsap.from(".project-title-text", {
      duration: 1.5,
      y: "18vh",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".project-title-text",
        start: "top 90%",
      },
      ease: Power3.easeInOut,
    });
  }, []);

  if (loading){
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
  else if(!loading)
  return (
    <>
      <ProjectsDesktop projects={projects}/>
    </>
  );
};

export default Projects;
