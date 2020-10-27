import React, { PureComponent, useEffect, useState } from "react";
import { StyledFeatured, StyledFeaturedDesktop } from "../../components/featuredWork/featuredWork.styled";
import GetProjects from "../../utils/getProjects";
import Accordion from "../../components/accordion/accordion";
import Shapes from "../../components/shapes";
import Footer from "../../components/footer/footer";
import ProjectGrid from "../../components/projectGrid/projectGrid";


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
      <div>
        <Shapes title={"Projects"} />
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
          <StyledFeaturedDesktop>
            {projects.map((project) => (
              <ProjectGrid
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
          </StyledFeaturedDesktop>
        )}
        <Footer/>
      </div>
    );
  }
}

export default Projects;
