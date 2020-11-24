import React, { PureComponent } from "react";
import GetProjects from "../functions/getProjects";
import { Link } from "react-router-dom";
import {
  StyledProjects,
  StyledProjectsDesktop,
} from "../styled/projects.styled";
import CurvedArrow from "../assets/icons/curvedArrow";

export class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 700px)").matches,
      projects: [],
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 700px)").addListener(handler);
    GetProjects().then((data) => this.setState({ projects: data }));
  }

  render() {
    const { projects } = this.state;
    return (
      <>
        {!this.state.matches && (
          <StyledProjects id="projects" className="section-title projects">
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3>0{project.id}/</h3>
                <img
                  className="photo"
                  src={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
                />

                <Link to={"/projects/" + project.id}>
                  <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>

                    <div className="project-header">
                      <CurvedArrow className="arrow" />
                      <p className="project-tech">{project.technologies}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </StyledProjects>
        )}
        {this.state.matches && (
          <StyledProjectsDesktop
            id="projects"
            className="section-title projects"
          >
            {projects.map((project) => (
              <Link to={"/projects/" + project.id}>
                <div key={project.id} className="project">
                  <div className="project-photo">
                    <img
                      className="photo"
                      src={
                        "https://strapi-z1gs.onrender.com" + project.coverPhoto
                      }
                    />
                    <h3 className="project-title">{project.name}</h3>
                  </div>

                  <div className="project-info">
                    <div className="top-info">
                      <p>
                        <strong>{project.roles}</strong>
                      </p>
                      <p>
                        <strong>{project.technologies}</strong>
                      </p>
                    </div>
                    <CurvedArrow className="arrow" />
                  </div>
                </div>
              </Link>
            ))}
          </StyledProjectsDesktop>
        )}
      </>
    );
  }
}

export default Projects;
