import React, { useEffect, useState } from "react";
import { StyledProjects } from "../styled/projects.styled";
import {
  RevealBorder,
  RevealSectionTitle,
} from "./animations";
import Project from "./project";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }) => {
  useEffect(() => {
    gsap.from(".work-number", {
      duration: 2,
      opacity: 0,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".projectBorder",
        start: "top 100%"
      }
    });
  }, [])
  return (
    <StyledProjects id="section-work">
      <div class="section-header">
      <RevealSectionTitle text={"WORK"} id={".projectBorder"} />
      <h3 className="section-number work-number">02</h3>
      </div>
      <div className="projectBorder">
        <RevealBorder id={"Border"} />
      </div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
