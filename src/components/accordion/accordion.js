import React, { useState, useRef } from "react";
import { StyledAccordion } from "./accordion.styled";
import Arrow from '../../assets/icons/arrow';
import Website from '../../assets/icons/website';
import Github from '../../assets/icons/github';

const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  // declare reference for height of project content
  const content = useRef(null);

  //Project button handler
  function toggleAccordion() {
    // Open/close project state
    setActiveState(setActive === "" ? "active" : "");
    // height of content state
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    // rotate arrow state
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }

  return (
    <StyledAccordion>
      <div className="accordion-section">
        <a className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <div className="accordion-header">
            <p>
              <strong>{props.title}</strong>
            </p>
            <Arrow className={`${setRotate}`} width={'37'} height={'37'} fill={'black'}/>
          </div>
          <p>{props.roles}</p>
          <p>{props.technologies}</p>
        </a>

        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-content"
        >
          <div style={{ padding: "1em" }}>
            <p>{props.description}</p>
            <div className="project-links">
              <a>
                <p className="project-link-text">View</p>
                <Website width={'35'} height={'35'} fill={'black'}/>
              </a>
              <a>
                <p className="project-link-text">GitHub</p>
                <Github width={'35'} height={'35'} fill={'black'}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
