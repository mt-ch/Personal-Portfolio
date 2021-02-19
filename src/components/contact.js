import React, { useEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledContact } from "../styled/contact.styled";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import { mouseOverButton, mouseLeaveButton } from "../functions/interactions";
import { RevealSectionTitle } from "./animations";

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

const Contact = ({ data }) => {
  const revealCredits = useRef(null);
  let textCreditsTarget = useRef(null);
  let textCreditsTarget2 = useRef(null);
  const revealFooter = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 2,
      ease: "Power3.easeInOut",
      scrollTo: {
        y: 0,
      },
    });
  };

  useEffect(() => {
    const credits = Splitting({ target: textCreditsTarget, by: "lines" });
    const credits2 = Splitting({ target: textCreditsTarget2, by: "lines" });

    credits[0].lines.forEach((line) => {
      $(line).wrapAll(
        "<div style=overflow:hidden;><div class='text-credits contact-sub-text'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });

    credits2[0].lines.forEach((line) => {
      $(line).wrapAll(
        "<div style=overflow:hidden;><div class='text-credits contact-sub-text'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });

    gsap.from(".contact-line", {
      duration: 2,
      yPercent: 150,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 90%",
      },
      ease: "Power3.easeInOut",
    });

    gsap.from(".text-credits", {
      duration: 1.5,
      yPercent: 100,
      stagger: 0.3,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealCredits.current,
        start: "top 90%",
      },
    });

    gsap.from(".text-socials", {
      duration: 1.5,
      yPercent: 100,
      stagger: 0.3,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealCredits.current,
        start: "top 90%",
      },
    });

    gsap.from(".footer-line", {
      duration: 1.2,
      yPercent: 150,
      stagger: 0.4,
      scrollTrigger: {
        trigger: revealFooter.current,
        start: "top 95%",
      },
    });

    gsap.from(".underline-footer", {
      duration: 1,
      delay: 3.5,
      width: 0,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealFooter.current,
        start: "top 95%",
      },
    });

    ScrollTrigger.refresh(true);
  }, [ScrollTrigger]);
  return (
    <>
      <StyledContact className="contact" id="section-contact">
        <div className="contact-info">
          <RevealSectionTitle text={"CONTACT"} id={".contact-info"} />
          <div className="mail">
            <div className="line-wrap">
              <h3 className="contact-line email">{data.Email}</h3>
            </div>
            <div className="line-wrap">
              <p className="contact-line contact-sub-text">
                Available for freelance work:
              </p>
            </div>
            <div className="line-wrap">
              <p className="contact-line contact-sub-text">February 2021</p>
            </div>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-container">
            <div className="socials">
              <div className="line-wrap">
                <p className="text-socials">
                  <strong>Socials</strong>
                </p>
              </div>
              <ul>
                <li>
                  <a
                    className="nav-link"
                    onMouseOver={() => mouseOverButton(".u-insta")}
                    onMouseLeave={() => mouseLeaveButton(".u-insta")}
                  >
                    <div class="line-wrap">
                      <p class="text-socials contact-sub-text">Instagram</p>
                    </div>
                    <span class="nav-underline">
                      <span class="underline u-insta"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href={data.Github}
                    onMouseOver={() => mouseOverButton(".u-git")}
                    onMouseLeave={() => mouseLeaveButton(".u-git")}
                  >
                    <div class="line-wrap">
                      <p class="text-socials contact-sub-text">Github</p>
                    </div>
                    <span class="nav-underline">
                      <span class="underline u-git"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href={data.LinkedIn}
                    onMouseOver={() => mouseOverButton(".u-linked")}
                    onMouseLeave={() => mouseLeaveButton(".u-linked")}
                  >
                    <div class="line-wrap">
                      <p class="text-socials contact-sub-text">Linkedin</p>
                    </div>
                    <span class="nav-underline">
                      <span class="underline u-linked"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="credits" ref={revealCredits}>
              <div class="line-wrap">
                <p class="text-credits">
                  <strong>Credits</strong>
                </p>
              </div>
              <p ref={(el) => (textCreditsTarget = el)}>
                Designed, crafted and developed by{" "}
                <a href={data.Github}>Matt Chan.</a>
                <br />
                Using Manrope from{" "}
                <a
                  href="https://manropefont.com/"
                  className="nav-link"
                  onMouseOver={() => mouseOverButton(".u-font1")}
                  onMouseLeave={() => mouseLeaveButton(".u-font1")}
                >
                  <div class="line-wrap">Manrope Font.</div>
                  <span class="nav-underline">
                    <span class="underline u-font1"></span>
                  </span>
                </a>
              </p>

              <p
                className="contact-credit-text-2"
                ref={(el) => (textCreditsTarget2 = el)}
              >
                Paired with Harmon from{" "}
                <a
                  href="https://dirtylinestudio.com/product/harmond-free-display-typeface/"
                  className="nav-link"
                  onMouseOver={() => mouseOverButton(".u-font2")}
                  onMouseLeave={() => mouseLeaveButton(".u-font2")}
                >
                  <div class="line-wrap">DirtyLine Studio.</div>
                  <span class="nav-underline">
                    <span class="underline u-font2"></span>
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="footer" ref={revealFooter}>
            <div class="line-wrap">
              <p class="footer-line contact-sub-text">©2021 mt-ch.net</p>
            </div>
            <a
              className="footer-button nav-link"
              onClick={handleClick}
              onMouseOver={() => mouseOverButton(".u-to-top")}
              onMouseLeave={() => mouseLeaveButton(".u-to-top")}
            >
              <div className="line-wrap">
                <p className="footer-line contact-sub-text">Back To Top</p>
              </div>
              <span class="nav-underline">
                <span class="underline u-to-top"></span>
              </span>
            </a>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
