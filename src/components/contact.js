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

const RevealTitle = ({ text }) => {
  let revealRef = useRef(null);
  let textTarget = useRef(null);

  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        y: "10vh",
        delay: index / 4,
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top 95%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <div ref={revealRef}>
      <h1 ref={(el) => (textTarget = el)}>{text}</h1>
    </div>
  );
};

const Contact = () => {
  const [info, setInfo] = useState([]);
  const revealCreditsRef = useRef(null);
  let textCreditsTarget = useRef(null);

  useEffect(() => {
    GetInfo(setInfo);
    ScrollTrigger.refresh(true);
    const results = Splitting({ target: textCreditsTarget, by: "lines" });
    // results[0].lines.forEach((line, index) => {
    //   $(line).wrapAll("<div style=overflow:hidden;></div>");
    //   gsap.from(line, {
    //     y: "100%",
    //     delay: index / 4,
    //     scrollTrigger: {
    //       trigger: revealCreditsRef.current,
    //       // markers: true,
    //       start: "top 70%",
    //     },
    //   });

    //   line.forEach((word) => {
    //     word.style.marginRight = ".25em";
    //   });
    // });
  }, []);
  return (
    <>
      <StyledContact className="contact">
        <div class="outro">
          <div>
            <h1>
              DON'T BE SHY,
              <br />
              SAY HI.
              <a onClick={null}>
              <Arrow className="arrow" />
            </a>
            </h1>
          </div>
        </div>
        <div class="contact-info">
          <div class="border"></div>
          <div class="mail">
            <p>Mail</p>
            <h3 class='email'>{info.Email}</h3>
          </div>
          <div class="border"></div>
          <div class="git">
            <p>Github</p>
            <h3>GITHUB</h3>
          </div>
          <div class="border"></div>
          <div class="linkedin">
            <p>LinkedIn</p>
            <h3>LINKEDIN</h3>
          </div>
          <div class="border"></div>
        </div>
        <div class="contact-bottom">
          
          <div className="footer">
          <div class="credits" ref={revealCreditsRef}>
            <p ref={(el) => (textCreditsTarget = el)} style={{fontSize: '.5em'}}>
              Designed, crafted and developed by{" "}
              <a href={info.Github}>Matt Chan.</a>
              <br />
              Using Be Vietnam from <a href="">Google Fonts.</a>
            </p>
          </div>
            <div>
              <h1>©2020</h1>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
