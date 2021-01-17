import React, { useState, useEffect, useRef } from "react";
import GetInfo from "../functions/getInfo";
import { TimelineLite, gsap, CSSPlugin, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledContact } from "../styled/components.styled";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import Arrow from "../assets/icons/arrow";

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

const Contact = () => {
  const [info, setInfo] = useState([]);
  const revealCreditsRef = useRef(null);
  let textCreditsTarget = useRef(null);
  const revealTitleRef = useRef(null);
  let textTitleTargetLine1 = useRef(null);
  let textTitleTargetLine2 = useRef(null);

  useEffect(() => {
    GetInfo(setInfo);
    const titleLine1 = Splitting({ target: textTitleTargetLine1, by: "lines" });
    // const titleLine2 = Splitting({ target: textTitleTargetLine2, by: "lines" });
    const credits = Splitting({ target: textCreditsTarget, by: "lines" });
    const tl = new TimelineLite({
      scrollTrigger: {
        trigger: revealTitleRef.current,
        start: "top 70%",
      },
    });
    titleLine1[0].lines.forEach((line, index) => {
      $(line).wrapAll("<span class='text-title'></span>");
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });

    // titleLine2[0].lines.forEach((line, index) => {
    //   $(line).wrapAll(
    //     "<span class='text-title'></span>"
    //   );
    //   line.forEach((word) => {
    //     word.style.marginRight = ".25em";
    //   });
    // });

    $(".text-title").wrap("<span style=overflow:hidden;></span>");

    credits[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=overflow:hidden;><div class='text-credits'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });

    gsap.from(".contact-border", {
      width: 0,
      stagger: 0.3,
      duration: 3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 70%",
      },
    });

    gsap.from(".text-credits", {
      duration: 1.5,
      yPercent: 100,
      stagger: 0.2,
      scrollTrigger: {
        trigger: revealCreditsRef.current,
        start: "top 95%",
      },
    });
    // gsap.from(".footer-line", {
    //   duration: 1,
    //   yPercent: 150,
    //   scrollTrigger: {
    //     trigger: revealCreditsRef.current,
    //     start: "top 95%",
    //   },
    // });
    tl.from(".text-title", {
      duration: 1.5,
      yPercent: 150,
      stagger: 0.4,
    });
    gsap.from(".contact-line", {
      duration: 1,
      yPercent: 150,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 70%",
      },
    });
  }, []);
  return (
    <>
      <StyledContact id="section-contact" className="contact">
        <div class="outro">
          <div ref={revealTitleRef}>
            <h1 ref={(el) => (textTitleTargetLine1 = el)}>CONTACT</h1>
            {/* <h1 ref={(el) => (textTitleTargetLine2 = el)}>SAY HI.</h1> */}
          </div>
          {/* <a onClick={null}>
            <Arrow className="arrow" />
          </a> */}
        </div>
        <div class="contact-info">
          <div class="contact-border"></div>
          <div class="mail">
            <p>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">Mail</div>
              </div>
            </p>
            <h3>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line email">{info.Email}</div>
              </div>
            </h3>
          </div>
          <div class="contact-border"></div>
          <div class="git">
            <p>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">Github</div>
              </div>
            </p>
            <h3>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">GITHUB</div>
              </div>
            </h3>
          </div>
          <div class="contact-border"></div>
          <div class="linkedin">
            <p>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">LinkedIn</div>
              </div>
            </p>
            <h3>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">LINKEDIN</div>
              </div>
            </h3>
          </div>
          <div class="contact-border"></div>
        </div>
        <div class="contact-bottom">
          <div className="footer">
            <div class="credits" ref={revealCreditsRef}>
              <p
                ref={(el) => (textCreditsTarget = el)}
                style={{ fontSize: ".5em" }}
              >
                Designed, crafted and developed by{" "}
                <a href={info.Github}>Matt Chan.</a>
                <br />
                Using Be Vietnam from <a href="">Google Fonts.</a>
              </p>
            </div>
            <div>
              <h1>
                <span style={{ overflow: "hidden" }}>
                  <span class="footer-line">©2020</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
