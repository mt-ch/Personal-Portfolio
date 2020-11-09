import React, { PureComponent, useEffect, useState } from "react";
import {
  StyledFeatured,
} from "../../components/featuredWork/featuredWork.styled";
import GetProjects from "../../utils/getProjects";
import Accordion from "../../components/accordion/accordion";
import styled from "styled-components";
import Layout from "../../components/layout";

const StyledProjects = styled.div`
  padding:  0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
  .project-header {
    h1 {
      border-top: 2px solid black;
      padding: 1.2em 0 1em 0;
    }
  }
`;

export class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 576px)").matches,
      projects: [],
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 576px)").addListener(handler);
    GetProjects().then((data) => this.setState({ projects: data }));
  }

  render() {
    const { projects } = this.state;
    return (
      <Layout>
        <StyledProjects>
          {/* <Shapes title={"Projects"} /> */}
          <div className="project-header">
            <h1>Projects</h1>
          </div>
          {!this.state.matches && (
            <StyledFeatured>
              {projects.map((project) => (
                <Accordion
                  title={project.name}
                  roles={project.roles}
                  technologies={project.technologies}
                  description={project.description}
                  github={project.git}
                  website={project.website}
                  coverPhoto={project.coverPhoto}
                  photoAlbum={project.photos}
                />
              ))}
            </StyledFeatured>
          )}
          {this.state.matches && (
            <StyledFeatured>
              {projects.map((project) => (
                <Accordion
                  key={project.id}
                  title={project.name}
                  roles={project.roles}
                  technologies={project.technologies}
                  description={project.description}
                  github={project.git}
                  website={project.website}
                  coverPhoto={project.coverPhoto}
                  photoAlbum={project.photos}
                  link={project.id}
                />
              ))}
            </StyledFeatured>
          )}
          {/* <Footer /> */}
        </StyledProjects>
      </Layout>
    );
  }
}

export default Projects;
