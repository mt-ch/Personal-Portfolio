import React, { useState, useEffect, useRef } from "react";
import GetInfo from "../functions/getInfo";
import { TimelineLite, gsap, CSSPlugin, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledContact } from "../styled/components.styled";

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

// const RevealTitle = ({ children }) => {
//   const revealRef = useRef(null);

//   useEffect(() => {
//     gsap.from(revealRef.current, {
//       y: "15vh",
//       duration: 0.5,
//       ease: "power3.inOut",
//       scrollTrigger: {
//         trigger: ".contact",
//         start: "top",
//         markers: true,
//         end: "top",
//       },
//       stagger: 2.5,
//     });
//   }, []);

//   return (
//     <div style={{ overflow: "hidden", height: "100%" }}>
//       <div ref={revealRef}>{children}</div>
//     </div>
//   );
// };

// const RevealText = ({ text }) => {
//   const revealRef = useRef(null);
//   let textTarget = useRef(null);

//   useEffect(() => {
//     const results = Splitting({ target: textTarget, by: "lines" });
//     results[0].lines.forEach((line, index) => {
//       $(line).wrapAll("<div style=overflow:hidden;></div>");
//       gsap.from(line, {
//         y: "10vh",
//         delay: index / 4,
//         scrollTrigger: {
//           trigger: revealRef.current,
//           start: "top 80%",
//         },
//       });
//       line.forEach((word) => {
//         word.style.marginRight = ".25em";
//       });
//     });
//   }, []);

//   return (
//     <div ref={revealRef}>
//       <h1 ref={(el) => (textTarget = el)}>
//         {text}
//       </h1>
//     </div>
//   );
// };

const Contact = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    // GetInfo(setInfo);
    // gsap.from(".line", {
    //   y: "15vh",
    //   delay: 1,
    //   duration: 2,
    //   ease: "power3.inOut",
    //   scrollTrigger: {
    //     trigger: ".contact",
    //     start: "top bottom",
    //     markers: true,
    //     end: "top bottom",
    //   },
    //   stagger: 2.5,
    // });
    // reveal();
  //   const t1 = new TimelineLite({
  //   });
  //   gsap.from(".line", {
  //     duration: 0.6,
  //     y: "25vh",
  //     // stagger: {
  //     //   amount: 1.25,
  //     // },
  //     scrollTrigger: {
  //       trigger: "body",
  //       markers: true,
  //                 start: "top 80%",

  //       // end: 'bottom bottom'
  //     },
  //     ease: Power3.easeInOut,
  //   });
  }, []);

  // useEffect(() => {
  //   gsap.to("h1, h2, h3, h4, p, h5", {
  //     color: "white",
  //     duration: 0.5,
  //     ease: "power0.inOut",
  //     scrollTrigger: {
  //       scrub: true,
  //       markers: true,
  //       start: "500px",
  //       end: "700px",
  //     },
  //   });
  //   gsap.to("body", {
  //     backgroundColor: "black",
  //     duration: 0.5,
  //     ease: "power0.inOut",
  //     scrollTrigger: {
  //       scrub: true,
  //       markers: true,
  //       start: "500px",
  //       end: "700px",
  //     },
  //   });
  // }, []);

  return (
    <div className="contact">
      <StyledContact className="section-contact section-area">
        <div class="outro">
          <h1>
            <div className="line-wrap">
              <div className="line">FEEL FREE</div>
            </div>
            <div className="line-wrap">
              <div className="line">TO GET IN TOUCH</div>
            </div>
          </h1>
          <div className="email">
            <h5>{info.email}</h5>
          </div>
        </div>

        <div class="contact-bottom">
          <div class="credits">
            <p>
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
          <h1 className="footer">
            <div className="line-wrap">
              <div className="line">©2020</div>
            </div>
          </h1>
        </div>
      </StyledContact>
    </div>
  );
};

export default Contact;
