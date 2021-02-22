import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/all";
import { mouseOverButton, mouseLeaveButton } from "../functions/interactions";
import {StyledNav} from "../styled/nav.styled";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const handleToTop = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 1,
      ease: "Power3.ease",
      scrollTo: {
        y: 0,
        offsetY: 0,
      },
    });
  };

  const handleClickAbout = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 1,
      ease: "Power3.ease",
      scrollTo: {
        y: 0,
        offsetY: 0,
      },
    });
  };

  const handleClickWork = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 1,
      ease: "Power3.ease",
      scrollTo: {
        y: "#section-work",
        offsetY: 50,
      },
    });
  };

  const handleClickContact = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 1,
      ease: "Power3.ease",
      scrollTo: {
        y: "#section-contact",
        offsetY: -150,
      },
    });
  };

  useEffect(() => {
    reveal();
    gsap.to(".nav-title", {
      top: "-100%",
      scrollTrigger: {
        end: "1500px",
        scrub: .1,
      },
    });
    gsap.to(".nav-date", {
      top: "-50%",
      scrollTrigger: {
        end: "1500px",
        scrub: .1,
      },
    });
    gsap.to(".nav-options", {
      top: "0%",
      scrollTrigger: {
        end: "1500px",
        scrub: .1,
      },
    });

    var about = document.querySelector(".u-about");
    var work = document.querySelector(".u-work");
    var contact = document.querySelector(".u-contact");

    gsap.to(".u-about", {
      scrollTrigger: {
        trigger: "#section-about",
        start: "-1500px center",
        end: "top center",
        endTrigger: "#section-work",
        onEnter: () => about.classList.toggle("active"),
        onLeaveBack: () => about.classList.remove("active"),
        onLeave: () => about.classList.remove("active"),
        onEnterBack: () => about.classList.toggle("active"),
      },
    });
    gsap.to(".u-work", {
      scrollTrigger: {
        trigger: "#section-work",
        start: "top center",
        end: "top center",
        endTrigger: "#section-contact",
        onEnter: () => work.classList.toggle("active"),
        onLeaveBack: () => work.classList.remove("active"),
        onLeave: () => work.classList.remove("active"),
        onEnterBack: () => work.classList.toggle("active"),
      },
    });
    gsap.to(".u-contact", {
      scrollTrigger: {
        trigger: "#section-contact",
        start: "top center",
        end: "bottom center",
        onEnter: () => contact.classList.toggle("active"),
        onLeaveBack: () => contact.classList.remove("active"),
        onLeave: () => contact.classList.remove("active"),
        onEnterBack: () => contact.classList.toggle("active"),
      },
    });
    ScrollTrigger.refresh(true);
  }, [ScrollTrigger]);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".nav-text", {
      delay: 2.5,
      duration: 2.5,
      yPercent: 150,
      stagger: .3,
      ease: "Power3.easeInOut",
    }).from(".underline", {
      duration: 1,
      width: 0,
      ease: "Power3.easeInOut",
    });
  };

  return (
    <StyledNav>
      <div className="nav">
        <a className="nav-title" onClick={handleToTop}>
          <div class="line-wrap">
            <p class="nav-text"><strong>Matt Chan</strong></p>
          </div>
        </a>
        <div class="nav-date">
          <div class="line-wrap">
            <p class="nav-text">2016-2021</p>
          </div>
        </div>
        <div className="nav-options">
          <ul>
            <li>
              <a
                className="nav-link link--kale"
                onClick={handleClickAbout}
                // onMouseOver={() => mouseOverButton(".u-about")}
                // onMouseLeave={() => mouseLeaveButton(".u-about")}
              >
                <p class="nav-text nav-option-text">About</p>
                <span class="nav-underline">
                  <span class="underline u-about"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={handleClickWork}
                onMouseOver={() => mouseOverButton(".u-work")}
                onMouseLeave={() => mouseLeaveButton(".u-work")}
              >
                <p class="nav-text nav-option-text">Work</p>
                <span class="nav-underline">
                  <span class="underline u-work"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={handleClickContact}
                onMouseOver={() => mouseOverButton(".u-contact")}
                onMouseLeave={() => mouseLeaveButton(".u-contact")}
              >
                <p class="nav-text nav-option-text">Contact</p>
                <span class="nav-underline">
                  <span class="underline u-contact"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
