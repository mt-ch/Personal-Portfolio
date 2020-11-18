import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MoveText = ({ children }) => {
  const revealRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        x: "-600vw",
        ease: "power0.in",
      },
      {
        x: "-100vw",
        duration: 0.5,
        ease: "power0.in",
        scrollTrigger: {
          scrub: true,
          start: "0px",
          endTrigger: '.projects',
        },
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

const StyledHeader = styled.div`
  padding: 5vh 0 0vh 0;
  h2 {
    mix-blend-mode: difference;
    color: #000;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const ProjectHeader = ({ title }) => {
  return (
    <StyledHeader className="section-header">
      <MoveText>
        <h2>
        • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} • {title} •
        </h2>
      </MoveText>
    </StyledHeader>
  );
};

export default ProjectHeader;
