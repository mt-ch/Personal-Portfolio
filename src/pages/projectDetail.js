import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import { StyledProject } from "../styled/components.styled";
import GetProjectDetail from "../functions/getProjectDetail";
import { useParams, useHistory } from "react-router-dom";
import CurvedArrow from "../assets/icons/curvedArrow";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import { gsap } from "gsap";
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
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      GetProjectDetail(id).then((data) => setProject(data));
      ScrollTrigger.refresh(true);
      mounted.current = true;
    } else {
      const results = Splitting({ target: textDescTarget, by: "lines" });
      console.log(results);
      results[0].lines.forEach((line, index) => {
        $(line).wrapAll("<div style=overflow:hidden;></div>");
        gsap.from(line, {
          y: "150%",
          delay: index / 4,
          scrollTrigger: {
            trigger: revealDescRef.current,
            markers: true,
            start: "top 80%",
          },
        });

        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });
    }
  });

  return (
    <>
      <Layout>
        <StyledProject>
          {/* <a
            href={null}
            onClick={() => {
              history.goBack();
            }}
          >
            <CurvedArrow className="arrow" />
          </a> */}
          {project.map((project) => (
            <div className="project">
              <div ref={revealTitleRef}>
                <p ref={(el) => (textTitleTarget = el)}>
                  {project.name}
                </p>
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <div className="roles">
                    <p>{project.roles}</p>
                    <p>{project.technologies}</p>
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
                    <a href={project.git}>
                      <p className="project-link">Github</p>
                    </a>
                    <a href={project.website}>
                      <p className="project-link">Website</p>
                    </a>
                  </div>
                </div>
                <p className="info-end">Photos</p>
              </div>

              <div className="photos">
                {project.photos.map((photo) => (
                  <img
                    className="photo"
                    src={"https://strapi-z1gs.onrender.com" + photo.url}
                  />
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
