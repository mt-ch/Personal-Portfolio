import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import { StyledProject } from "../styled/components.styled";
import GetProjectDetail from "../functions/getProjectDetail";
import { useParams, useHistory } from "react-router-dom";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const [project, setProject] = useState([]);
  let { id } = useParams();
  const history = useHistory();
  const revealDescRef = useRef(null);
  let textDescTarget = useRef(null);
  const revealTitleRef = useRef(null);
  let textTitleTarget = useRef(null);
  const revealRolesRef = useRef(null);
  let textRolesTarget = useRef(null);
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      GetProjectDetail(id).then((data) => setProject(data));
      mounted.current = true;
    } else {
      const desc = Splitting({ target: textDescTarget, by: "lines" });
      const roles = Splitting({ target: textRolesTarget, by: "lines" });
      const title = Splitting({ target: textTitleTarget, by: "lines" });

      title[0].lines.forEach((line, index) => {
        $(line).wrapAll(
          "<div style=overflow:hidden;><div class='heading'</div>"
        );
        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      gsap.from(".heading", {
        duration: 2.5,
        yPercent: 150,
        delay: 0.2,
        stagger: 0.3,
        ease: Power3.easeInOut,
      });

      roles[0].lines.forEach((line, index) => {
        $(line).wrapAll(
          "<div style=overflow:hidden;><div class='line'></div></div>"
        );
        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      desc[0].lines.forEach((line, index) => {
        $(line).wrapAll(
          "<div style=overflow:hidden;><div class='desc'></div></div>"
        );
        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      gsap.from(".desc", {
        duration: 2,
        yPercent: 150,
        delay: 0.3,
        stagger: 0.2,
        ease: Power3.easeInOut,
      });

      gsap.from(".line", {
        duration: 2,
        yPercent: 150,
        stagger: 0.3,
        delay: 1,
        ease: Power3.easeInOut,
      });
      gsap.from(".border", {
        duration: 2,
        delay: 1.3,
        width: "0%",
        ease: Power3.easeInOut,
      });

      let revealContainers = document.querySelectorAll(".reveal");
      let firstImg = document.querySelector(".reveal");
      let secondImg = document.querySelectorAll(".reveal")[1];
      gsap.from(firstImg, {
        duration: 1,
        delay: 1.3,
        y: 10,
        opacity: 0,
        ease: Power3.easeInOut,
      });

      gsap.from(secondImg, {
        duration: 1,
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Power3.easeInOut,
      });

      revealContainers.forEach((img) => {
        let image = img.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            toggleActions: "play none none none",
            start: "top 78%",
          },
        });

        tl.from(image, {
          duration: 1,
          opacity: 0,
          y: 10,
          ease: Power3.easeInOut,
        });
      });
    }
  });

  return (
    <>
      <Layout>
        <StyledProject>
          {project.map((project) => (
            <div className="project">
              <div class="project-header">
                <div ref={revealTitleRef}>
                  <h1 ref={(el) => (textTitleTarget = el)}>{project.name}</h1>
                </div>
                <a
                  href={null}
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p className="back heading">Back</p>
                  </div>
                </a>
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <div className="roles" ref={revealRolesRef}>
                    <p ref={(el) => (textRolesTarget = el)}>
                      {project.technologies}
                    </p>
                  </div>
                  <div ref={revealDescRef}>
                    <p
                      ref={(el) => (textDescTarget = el)}
                      className="project-desc"
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="project-links">
                    <a href={project.git} style={{ overflow: "hidden" }}>
                      <p className="project-link line">Github</p>
                    </a>
                    <a href={project.website} style={{ overflow: "hidden" }}>
                      <p className="project-link line">Website</p>
                    </a>
                  </div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <p className="info-end line">Photos</p>
                </div>
                <div class="border"></div>
              </div>

              <div className="photos">
                {project.photos.map((photo) => (
                  <div class="reveal" style={{ minHeight: "5em" }}>
                    <img
                      className="photo"
                      src={"https://strapi-z1gs.onrender.com" + photo.url}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StyledProject>
      </Layout>
    </>
  );
};

export default ProjectDetail;
