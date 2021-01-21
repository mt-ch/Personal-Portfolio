import React, { useState, useEffect, useRef } from "react";
import { gsap, CSSPlugin, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledContact } from "../styled/components.styled";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

const Contact = ({ data }) => {
  const revealCreditsRef = useRef(null);
  let textCreditsTarget = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 3,
      ease: "Power3.easeInOut",
      scrollTo: {
        y: 0,
      },
    });
  };

  useEffect(() => {
    const credits = Splitting({ target: textCreditsTarget, by: "lines" });
    $(".text-title").wrap("<span style=overflow:hidden;></span>");

    credits[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=overflow:hidden;><div class='text-credits'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });

    gsap.from(".contact-header-text", {
      duration: 2.5,
      yPercent: 150,
      stagger: 0.6,
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 90%",
      },
      ease: "Power3.easeInOut",
    });

    gsap.from(".contact-border", {
      width: 0,
      stagger: 0.5,
      duration: 3,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 90%",
      },
    });

    gsap.from(".text-credits", {
      duration: 1.5,
      yPercent: 100,
      stagger: 0.4,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealCreditsRef.current,
        start: "top 95%",
      },
    });

    gsap.from(".footer-line", {
      duration: 1.2,
      yPercent: 150,
      stagger: .4,
      scrollTrigger: {
        trigger: revealCreditsRef.current,
        start: "top 95%",
      },
    });
    gsap.from(".underline-footer", {
      duration: 1,
      delay: 3.5,
      width: 0,
      ease: "Power3.easeInOut",
    });
    gsap.from(".contact-line", {
      duration: 2,
      yPercent: 150,
      stagger: 0.4,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 90%",
      },
    });
    ScrollTrigger.refresh(true);
  }, [ScrollTrigger]);
  return (
    <>
      <StyledContact id="section-contact" className="contact">
        <div class="contact-info">
          <div class="contact-header">
            <div class="line-wrap">
              <h1 class="contact-header-text">CONTACT</h1>
            </div>
            <div class="line-wrap">
              <p class="contact-header-text">/03</p>
            </div>
          </div>
          <div class="contact-border"></div>
          <div class="mail">
            <p>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">Mail</div>
              </div>
            </p>
            <h3>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line email">{data.Email}</div>
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
            <a href={data.Github}>
              <h3>
                <div style={{ overflow: "hidden" }}>
                  <div class="contact-line">GITHUB</div>
                </div>
              </h3>
            </a>
          </div>
          <div class="contact-border"></div>
          <div class="linkedin">
            <p>
              <div style={{ overflow: "hidden" }}>
                <div class="contact-line">LinkedIn</div>
              </div>
            </p>
            <a href={data.LinkedIn}>
              <h3>
                <div style={{ overflow: "hidden" }}>
                  <div class="contact-line">LINKEDIN</div>
                </div>
              </h3>
            </a>
          </div>
          <div class="contact-border"></div>
        </div>
        <div class="contact-bottom">
          <div class="credits" ref={revealCreditsRef}>
            <p>ACKNOWLEDGEMENTS</p>
            <p
              ref={(el) => (textCreditsTarget = el)}
              style={{ fontSize: ".5em" }}
            >
              Designed, crafted and developed by{" "}
              <a href={data.Github}>Matt Chan.</a>
              <br />
              Using Be Vietnam from{" "}
              <a href="https://fonts.google.com/specimen/Be+Vietnam?query=be+viet">
                Google Fonts.
              </a>
            </p>
          </div>
          <div className="footer">
            <a className="footer-button" onClick={handleClick}>
              <div className="line-wrap">
                <p className="footer-line">BACK TO TOP</p>
                <div className="underline-footer"></div>
              </div>
            </a>
            <div>
              <div class="line-wrap">
                <h1 class="footer-line">©2021</h1>
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
