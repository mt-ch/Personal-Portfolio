import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

export const RevealSectionTitle = ({ text, id }) => {
  let lineTarget = useRef(null);

  useEffect(() => {
    const landingLine = Splitting({
      target: lineTarget,
      type: "chars",
    });
    landingLine[0].chars.forEach((char, index) => {
      $(char).wrapAll("<span style=overflow:hidden;> </span>");
      char.style.marginRight = "-.2em";
      gsap.from(char, {
        delay: index / 10,
        duration: 3,
        yPercent: 200,
        ease: "Power3.easeInOut",
        scrollTrigger: {
          trigger: id,
          start: "top 100%",
        },
      });
    });
  }, []);

  return (
    <div className="line-wrap">
      <h1 className="section-title" ref={(el) => (lineTarget = el)}>
        {text}
      </h1>
    </div>
  );
};

export const RevealTextTitle = ({ text, id }) => {
  let titleTarget = useRef(null);

  useEffect(() => {
    const title = Splitting({ target: titleTarget, by: "words" });
    title[0].words.forEach((word) => {
      $(word).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(word, {
        duration: 2,
        yPercent: 200,
        stagger: 0.3,
        ease: "Power3.easeInOut",
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 90%",
        },
      });
      word.style.marginRight = "1.5vw";
    });
  }, []);

  return (
    <h2 className="project-title" ref={(el) => (titleTarget = el)}>
      {text}
    </h2>
  );
};

export const RevealBorder = ({ id }) => {
  const borderRef = useRef(null);
  useEffect(() => {
    gsap.from(borderRef.current, {
      width: 0,
      duration: 3,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 90%",
      },
    });
  }, []);
  return <div ref={borderRef} className="border"></div>;
};

export const RevealPhoto = ({ photo, id }) => {
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      duration: 4,
      yPercent: -100,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div class="wrapper-img">
      <div ref={imageRef} class="box"></div>
      <div>
        <img className="cover-img" src={photo} />
      </div>
    </div>
  );
};

export const RevealSubText = ({ text, id }) => {
  let subTextTarget = useRef(null);

  useEffect(() => {
    const subText = Splitting({ target: subTextTarget, by: "lines" });
    subText[0].lines.forEach((line) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        duration: 2,
        ease: "Power3.easeInOut",
        yPercent: 150,
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 90%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <h5 class="project-tech" ref={(el) => (subTextTarget = el)}>
      <strong>{text}</strong>
    </h5>
  );
};

export const RevealTextNoTrigger = ({ text }) => {
  let subTextTarget = useRef(null);

  useEffect(() => {
    const subText = Splitting({ target: subTextTarget, by: "lines" });
    subText[0].lines.forEach((line) => {
      $(line).wrapAll(
        "<div style=overflow:hidden;><div class='pop-out-text' style=white-space:nowrap;></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
  }, []);

  return <p ref={(el) => (subTextTarget = el)}>{text}</p>;
};

export const RevealPhotoNoTrigger = ({ photo }) => {
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      duration: 4,
      yPercent: -100,
      ease: "Power3.easeInOut",
    });
  }, []);

  return (
    <div class="wrapper-img">
      <div ref={imageRef} class="box"></div>
      <div>
        <img className="project-pop-out-photo" src={photo} />
      </div>
    </div>
  );
};

export const RevealTitleNoTrigger = ({ text }) => {
  let titleTarget = useRef(null);

  useEffect(() => {
    const title = Splitting({ target: titleTarget, by: "words" });
    title[0].words.forEach((word) => {
      $(word).wrapAll(
        "<div style=overflow:hidden;><div class='pop-out-text'></div></div>"
      );
      gsap.from(word, {
        duration: 2,
        yPercent: 200,
        stagger: 0.3,
        ease: "Power3.easeInOut",
      });
      word.style.marginRight = "1.5vw";
    });
  }, []);

  return (
    <h3
      className="project-pop-out-header-text"
      ref={(el) => (titleTarget = el)}
    >
      {text}
    </h3>
  );
};

export const RevealLandingTitle = ({ text, className }) => {
  let lineTarget = useRef(null);

  useEffect(() => {
    const landingLine = Splitting({
      target: lineTarget,
      type: "chars",
      whitespace: true,
    });
    landingLine[0].chars.forEach((char, index) => {
      $(char).wrapAll("<span style=overflow:hidden;> </span>");
      char.style.marginLeft = "-.15em";
      gsap.from(char, {
        delay: 3 + index / 10,
        duration: 3,
        yPercent: 200,
        ease: "Power3.easeInOut",
      });
    });

    const whitespace = document.querySelectorAll(".whitespace");
    whitespace.forEach((space) => {
      space.style.marginLeft = 0;
    });
  }, []);
  return (
    <span className="line-wrap">
      <h1 className={className} ref={(el) => (lineTarget = el)}>
        {text}
      </h1>
    </span>
  );
};

export const RevealLandingTitleOther = ({ text, className }) => {
  let lineTarget = useRef(null);

  useEffect(() => {
    const landingLine = Splitting({
      target: lineTarget,
      type: "chars",
    });
    landingLine[0].chars.forEach((char, index) => {
      $(char).wrapAll("<span style=overflow:hidden;> </span>");
      char.style.marginLeft = "-.25em";
      gsap.from(char, {
        delay: 3 + index / 10,
        duration: 3,
        yPercent: 200,
        ease: "Power3.easeInOut",
      });
    });
  }, []);
  return (
    <span className="line-wrap">
      <h1 className={className} ref={(el) => (lineTarget = el)}>
        {text}
      </h1>
    </span>
  );
};

export const RevealLoadingTitle = ({ text, className, delay, letterClass }) => {
  let lineTarget = useRef(null);

  useEffect(() => {
    const landingLine = Splitting({
      target: lineTarget,
      type: "chars",
    });
    landingLine[0].chars.forEach((char, index) => {
      char.classList.add(letterClass);
    });

    const lineClass = "." + letterClass;

    gsap.from(lineClass, {
      delay: delay,
      stagger: 0.1,
      duration: 1,
      yPercent: 200,
      ease: "Power3.easeInOut",
    });
  }, []);
  return (
    <span className="line-wrap">
      <h1 className={className} ref={(el) => (lineTarget = el)}>
        {text}
      </h1>
    </span>
  );
};
