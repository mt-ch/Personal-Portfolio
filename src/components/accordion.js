import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { StyledAccordion } from "../styled/accordion.styled";
import Arrow from "../assets/icons/arrow";
import Website from "../assets/icons/website";
import Github from "../assets/icons/github";

const Accordion = (props) => {
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
    setHeightState(setActive === "active" ? "0px" : "800px");
    // rotate arrow state
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }

  // `${content.current.scrollHeight}px`

  return (
    <StyledAccordion
      className="project-id"
      text={props.text}
      openText={props.openText}
    >
      <div>
        <a className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <div className="accordion-header">
            {/* <div>
              <p className="project-tech">{props.technologies}</p> */}
            <p className="project-title">{props.title}</p>
            {/* </div> */}
            <Arrow
              className={`${setRotate}`}
              width={"40"}
              height={"40"}
              fill={props.text}
            />
          </div>
        </a>

        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-content"
        >
          <div className="photos">
            <img class="photos" src={"https://picsum.photos/300/500"} />
            <img class="photos" src={"https://picsum.photos/300/500"} />
            <img class="photos" src={"https://picsum.photos/300/500"} />
          </div>
          {/* <div class="content-info">
            <p class="project-roles">{props.roles}</p>
            <p>{props.description}</p>
            <Link to={"/projects/" + props.link} className="view-project">
              <p><strong>View</strong></p>
              <Arrow width={"35"} height={"35"} fill={"black"} />
            </Link>
            <div className="project-links">
             <a href={props.website}>
                <p className="project-link-text">View</p>
                <Website width={"35"} height={"35"} fill={"black"} />
              </a>
              <a href={props.github}>
                <p className="project-link-text">GitHub</p>
                <Github width={"35"} height={"35"} fill={"black"} />
              </a> 
            </div>
          </div> */}
        </div>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
