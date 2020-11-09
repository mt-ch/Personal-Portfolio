import React, { PureComponent } from "react";
import { StyledFeatured, StyledFeaturedDesktop } from "./featuredWork.styled";
import GetFeaturedProjects from "../../utils/getFeaturedProjects";
import Accordion from "../../components/accordion/accordion";
import ProjectGrid from "../projectGrid/projectGrid";

export class FeaturedWork extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 576px)").matches,
      projects: [],
    };
  }

  componentDidMount() {
    //media query for mobile detection
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 576px)").addListener(handler);
    //fetch project data
    GetFeaturedProjects().then((data) => this.setState({ projects: data }));
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default FeaturedWork;
