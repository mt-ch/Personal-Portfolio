import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow";
import { StyledProjectGrid } from "./projectGrid.styled";

const ProjectGrid = (props) => {
  return (
    <StyledProjectGrid>
      <img src={"http://localhost:1337" + props.coverPhoto} />
      <Link to={"/projects/" + props.link}>
        <div className="project-header">
          <div className="project-title">
            <p>
              <strong>{props.title}</strong>
            </p>
            <Arrow
              className={"project-arrow"}
              width={"37"}
              height={"37"}
              fill={"black"}
            />
          </div>
          <p>{props.roles}</p>
          <p>{props.technologies}</p>
        </div>
      </Link>
    </StyledProjectGrid>
  );
};

export default ProjectGrid;
