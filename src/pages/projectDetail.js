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
import { TimelineLite, gsap, Power2, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const RevealPhoto = ({ photo }) => {
  const revealRef = useRef(null);
  let container = useRef(null);
  let image = useRef(null);
  const mounted = useRef();
  ScrollTrigger.refresh(true);
  useEffect(() => {
    // if (!mounted.current) {
    //   ScrollTrigger.refresh(true);
    //   mounted.current = true;
    // } else {
    // const imageReveal = CSSRulePlugin.getRule(".img-container:after");
    ScrollTrigger.refresh(true);
    // const tl = new TimelineLite({
    //   scrollTrigger: {
    //     trigger: revealRef.current,
    //     markers: true,
    //     start: "top 80%",
    //   },
    // });
    // tl
    // .to(container, { duration: 0, visibility: "visible" })
      //   .to(imageReveal, { duration: 1.4, width: "0%", ease: Power2.easeInOut })
      //   .from(image, {
      //     duration: 1.4,
      //     scale: 1.6,
      //     ease: Power2.easeInOut,
      //     delay: -1.4,
      //   });
      // .from(image, {
      //   duration: 1.4,
      //   height: 0,
      //   ease: Power2.easeInOut,
      // });

      gsap.from(revealRef.current, {
        // height: '0%',
        duration: .8,
        delay: 1,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top 70%",
          markers: true,
        },
      });
      ScrollTrigger.refresh(true);
    // }
  });

  return (
    // <div ref={(el) => (container = el)}>
      <>
        <div>
          <img ref={revealRef} src={photo} data-srcset={photo}/>
        </div>
      </>
    // </div>
  );
};

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
      const title = Splitting({ target: textTitleTarget, by: "lines" });
      const desc = Splitting({ target: textDescTarget, by: "lines" });
      const roles = Splitting({ target: textRolesTarget, by: "lines" });
      ScrollTrigger.refresh(true);
      title[0].lines.forEach((line, index) => {
        $(line).wrapAll("<div style=overflow:hidden;></div>");
        gsap.from(line, {
          y: "100%",
          delay: index / 4,
          scrollTrigger: {
            trigger: revealDescRef.current,
            start: "top 80%",
          },
        });

        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      desc[0].lines.forEach((line, index) => {
        $(line).wrapAll("<div style=overflow:hidden;></div>");
        gsap.from(line, {
          y: "150%",
          delay: index / 4,
          scrollTrigger: {
            trigger: revealTitleRef.current,
            start: "top 80%",
          },
        });

        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      roles[0].lines.forEach((line, index) => {
        $(line).wrapAll("<div style=overflow:hidden;></div>");
        gsap.from(line, {
          y: "150%",
          delay: index / 4,
          scrollTrigger: {
            trigger: revealRolesRef.current,
            start: "top 80%",
          },
        });

        line.forEach((word) => {
          word.style.marginRight = ".25em";
        });
      });

      gsap.from(".line", {
        y: "150%",
        delay: 0.2,
        stagger: 0.3,
      });

      gsap.from(".border", {
        duration: 1,
        width: "0%",
        delay: 0.8,
        ease: Power3.easeInOut,
      });
    }
  });

  return (
    <>
      <Layout>
        <StyledProject>
          <a
            href={null}
            onClick={() => {
              history.goBack();
            }}
          >
            <CurvedArrow className="arrow" />
          </a>
          {project.map((project) => (
            <div className="project">
              <div ref={revealTitleRef}>
                <h1 ref={(el) => (textTitleTarget = el)}>{project.name}</h1>
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <div className="roles" ref={revealRolesRef}>
                    <p ref={(el) => (textRolesTarget = el)}>
                      {project.roles}
                      <br />
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
                  // <img
                  //   className="photo"
                  //   src={"https://strapi-z1gs.onrender.com" + photo.url}
                  // />
                  <RevealPhoto photo={"https://strapi-z1gs.onrender.com" + photo.url}/>
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
