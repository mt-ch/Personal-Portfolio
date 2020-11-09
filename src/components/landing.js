import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StyledLanding } from "../styled/landing.styled";
import Arrow from "../assets/icons/arrow";
import GetLanding from "../functions/getLanding";

gsap.registerPlugin(ScrollTrigger);

const MoveText = ({ children, from, to }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        x: from,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        x: to,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".movingText",
          scrub: true,
          end: "1000px",
        },
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

const Landing = () => {
  const [landing, setLanding] = useState([]);
  useEffect(() => {
    GetLanding(setLanding);
  }, []);
  return (
    <StyledLanding>
      <div className="movingText">
        <MoveText from={"-3000"} to={"-1000"}>
          <h1>
            Programming.Design.WebDevelopment.Construct.Sketch.Create.Effect
          </h1>
        </MoveText>
        <MoveText from={"-4000"} to={"-7000"}>
          <h1>
            Programming.Design.WebDevelopment.Construct.Sketch.Create.Effect
          </h1>
        </MoveText>
        <MoveText from={"-8000"} to={"-6000"}>
          <h1>
            Programming.Design.WebDevelopment.Construct.Sketch.Create.Effect
          </h1>
        </MoveText>
      </div>
      <div className="sub-text">
        <p>{landing.landingText}</p>
        <a className="explore" href="">
          <p>Explore</p>
          <Arrow width={"37"} height={"37"} />
        </a>
      </div>
    </StyledLanding>
  );
};

export default Landing;
