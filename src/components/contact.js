import React, { useState, useEffect, useRef } from "react";
import GetInfo from "../functions/getInfo";
import { TimelineLite, gsap, CSSPlugin, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledContact } from "../styled/components.styled";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

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
          start: "top 85%",
          // markers: true,
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
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        y: "100%",
        delay: index / 4,
        scrollTrigger: {
          trigger: revealCreditsRef.current,
          markers: true,
          start: "top 80%",
        },
      });

      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);
  return (
    <div className="contact">
      <StyledContact className="section-contact section-area">
        <div class="outro">
          <RevealTitle text={"FEEL FREE TO GET IN TOUCH"} />
          <div className="email">
            <h5>{info.Email}</h5>
          </div>
        </div>

        <div class="contact-bottom">
          <div class="credits" ref={revealCreditsRef}>
            <p ref={(el) => (textCreditsTarget = el)}>
              Design, crafted and developed by{" "}
              <a href={info.Github}>Matt Chan</a>
              <br />
              Using Monumnet Extended from {""}
              <a href="https://pangrampangram.com/products/monument-extended?variant=32840652914742">
                Pangram Pangram Foundry
              </a>
              <br />
              Paired with Space Grotesk from <a href="">Google Fonts</a>
            </p>
          </div>
          <div className="socials">
            <p>Follow me elsewhere</p>
            <p>
              <a href={info.LinkedIn}>Instagram</a>
            </p>
            <p>
              <a href={info.Github}>Github</a>
            </p>
            <p>
              <a href={info.LinkedIn}>LinkedIn</a>
            </p>
          </div>
          <div className="footer">
            <RevealTitle text={"©2020"} />
          </div>
        </div>
      </StyledContact>
    </div>
  );
};

export default Contact;
