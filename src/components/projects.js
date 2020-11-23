import React, { useEffect, useRef, useState } from "react";
import GetProjects from "../functions/getProjects";
import { StyledProjects } from "../styled/projects.styled";
import ProjectHeader from "./projectHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MovePhoto = ({ children, x, y }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        x: x,
        y: y,
        duration: .5,
        ease: "power2.inOut",
      },
      {
        x: getRandomArbitrary(0, 45, "vw"),
        y: getRandomArbitrary(-45, -10, "vh"),
        duration: .5,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: true,
        },
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

function getRandomArbitrary(min, max, unit) {
  return Math.random() * (max - min) + min + unit;
}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init();
    GetProjects(setProjects);
  }, []);
  return (
    <StyledProjects id="projects" className="section-title projects">
      {/* <div>
        <ProjectHeader title={"WORK"} />
      </div> */}
      {projects.map((project) => (
        <div className="project">
          <div class="photos">
            {project.photos.map((photo) => (
              <MovePhoto x={getRandomArbitrary(20, 45, "vw")} y={getRandomArbitrary(-30, 0, "vh")}>
                <img
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-delay={getRandomArbitrary(100, 500, "")}
                  data-aos-duration="800"
                  data-aos-easing="ease"
                  className="photo"
                  style={{
                    width: getRandomArbitrary(15, 30, "vw"),
                    height: getRandomArbitrary(15, 30, "vh"),
                  }}
                  key={photo.id}
                  src={"http://localhost:1337" + photo.url}
                />
              </MovePhoto>
            ))}
          </div>
          <div
            className="project-info"
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease"
          >
            <div className="project-subtext">
              <h3>{project.name}</h3>
              <p>{project.roles}</p>
              <p>{project.technologies}</p>
            </div>

            <div className="project-sidetext">
              <p className="project-desc">{project.description}</p>

              <div className="project-links">
                <a>
                  <p className="project-link">Github</p>
                </a>
                <a>
                  <p className="project-link">Website</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
