import React, { useEffect, useRef, useState } from "react";
import GetProjects from "../functions/getProjects";
import { StyledProjects } from "../styled/projects.styled";
import ProjectHeader from "../components/projectHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MovePhoto = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        x: getRandomArbitrary(0, 60, "vw"),
        y: getRandomArbitrary(-50, -10, "vh"),
        duration: 5,
        ease: "power2.inOut",
      },
      {
        x: getRandomArbitrary(0, 60, "vw"),
        y: getRandomArbitrary(-50, -10, "vh"),
        duration: 5,
        ease: "power2.inOut",
        scrollTrigger: {
          // trigger: ".project",
          scrub: true,
          // start: "300px",
          // end: "1000px",
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
  const testProject = [
    {
      name: "F1 Scraper",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      roles: "Frontend + Design",
      tech: "React / Material UI",
      photo: "https://picsum.photos/900/1200",
    },
  ];

  useEffect(() => {
    AOS.init();
    GetProjects(setProjects);
  }, []);
  return (
    <StyledProjects id="projects" className='section-title projects'>
      <div>
        <ProjectHeader title={"WORK"} />
      </div>
      {testProject.map((project) => (
        <div className="project">
          <div class="photos">
            <MovePhoto>
              <img
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay={getRandomArbitrary(100, 500, "")}
                data-aos-duration="800"
                data-aos-easing="ease"
                className="photo"
                style={{
                  width: getRandomArbitrary(20, 40, "vw"),
                  height: getRandomArbitrary(20, 40, "vh"),
                }}
                src="https://picsum.photos/200/300"
              />
            </MovePhoto>
            <MovePhoto>
              <img
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay={getRandomArbitrary(100, 500, "")}
                data-aos-duration={getRandomArbitrary(300, 3000, "")}
                data-aos-easing="ease"
                className="photo"
                style={{
                  width: getRandomArbitrary(10, 25, "vw"),
                  height: getRandomArbitrary(30, 60, "vh"),
                }}
                src="https://picsum.photos/200/300"
              />
            </MovePhoto>
            <MovePhoto>
              <img
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay={getRandomArbitrary(100, 500, "")}
                data-aos-duration="800"
                data-aos-easing="ease"
                className="photo"
                style={{
                  width: getRandomArbitrary(10, 25, "vw"),
                  height: getRandomArbitrary(30, 60, "vh"),
                }}
                src="https://picsum.photos/200/300"
              />
            </MovePhoto>
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
              <p>{project.tech}</p>
            </div>

            <div>
              <p className="project-desc">{project.desc}</p>

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
        //   <Accordion
        //   title={project.name}
        //   roles={project.roles}
        //   technologies={project.tech}
        //   description={project.desc}
        //   github={''}
        //   website={''}
        //   // coverPhoto={project.photo}
        //   // photos={project.photos}
        //   link={'/'}
        // />
      ))}
    </StyledProjects>
  );
};

export default Projects;
