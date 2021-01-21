import React, { useEffect, useRef } from "react";
import { StyledNav } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/all";

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
      duration: 0.5,
      ease: "Power3.ease",
      scrollTo: {
        y: "#section-about",
        offsetY: 100,
      },
    });
  };

  const mouseOverAbout = (e) => {
    e.stopPropagation();
    var about = document.querySelector(".u-about");
    about.classList.add("hover");
  };

  const mouseLeaveAbout = (e) => {
    e.stopPropagation();
    var about = document.querySelector(".u-about");
    about.classList.remove("hover");
  };

  const mouseOverWork = (e) => {
    e.stopPropagation();
    var work = document.querySelector(".u-work");
    work.classList.add("hover");
  };

  const mouseLeaveWork = (e) => {
    e.stopPropagation();
    var work = document.querySelector(".u-work");
    work.classList.remove("hover");
  };

  const mouseOverContact = (e) => {
    e.stopPropagation();
    var contact = document.querySelector(".u-contact");
    contact.classList.add("hover");
  };

  const mouseLeaveContact = (e) => {
    e.stopPropagation();
    var contact = document.querySelector(".u-contact");
    contact.classList.remove("hover");
  };

  const handleClickWork = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 0.8,
      ease: "Power3.ease",
      scrollTo: {
        y: "#section-work",
        offsetY: 10,
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
        offsetY: -20,
      },
    });
  };

  useEffect(() => {
    reveal();
    gsap.to(".nav-title", {
      top: "-100%",
      scrollTrigger: {
        end: "1500px",
        scrub: true,
      },
    });
    gsap.to(".nav-date", {
      top: "-50%",
      scrollTrigger: {
        end: "1500px",
        scrub: true,
      },
    });
    gsap.to(".nav-options", {
      top: 0,
      scrollTrigger: {
        end: "1500px",
        scrub: true,
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
        scrub: true,
        onEnter: () => about.classList.toggle("active"),
        onLeaveBack: () => about.classList.remove("active"),
        onLeave: () => about.classList.remove("active"),
        onEnterBack: () => about.classList.toggle("active"),
      },
    });
    gsap.to(".u-work", {
      scrollTrigger: {
        trigger: "#section-about",
        start: "bottom+=100 center",
        end: "top center",
        endTrigger: "#section-contact",
        scrub: true,
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
        scrub: true,
        markers: true,
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
      duration: 2.5,
      yPercent: 100,
      stagger: {
        amount: 1,
      },
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
          <p>
            <div class="line-wrap">
              <div class="nav-text">Matt Chan</div>
            </div>
          </p>
        </a>

        <div class="nav-date">
          <p>
            <div class="line-wrap">
              <div class="nav-text">2016-2020</div>
            </div>
          </p>
        </div>

        <div className="nav-options">
          <ul>
            <li>
              <a
                className="nav-link"
                onClick={handleClickAbout}
                onMouseOver={mouseOverAbout}
                onMouseLeave={mouseLeaveAbout}
              >
                <p class="nav-text">About</p>
                <span class="nav-underline">
                  <span class="underline u-about"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={handleClickWork}
                onMouseOver={mouseOverWork}
                onMouseLeave={mouseLeaveWork}
              >
                <p class="nav-text">Work</p>
                <span class="nav-underline">
                  <span class="underline u-work"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={handleClickContact}
                onMouseOver={mouseOverContact}
                onMouseLeave={mouseLeaveContact}
              >
                <p class="nav-text">Contact</p>
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
