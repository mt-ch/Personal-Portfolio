import React, { useEffect, useState } from "react";
import GetFeatured from "../functions/getFeaturedProjects";
import Accordion from "./accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const StyledFeatured = styled.div`
  .para {
    margin-top: 13vw;

    h1{
        font-size: 10vw;
    }

    h2{
        font-size: 9vw;
        color: white;
    }

    p{
        font-size: 6vw;
        line-height: 1.3;
    }
  }
`;

const FeaturedWork = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    GetFeatured(setFeatured);
    AOS.init();
  }, []);
  return (
    <StyledFeatured>
      <div
        class="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h1 className="section-title">
          {" "}
          <small> (002) </small> MY WORK
        </h1>
      </div>
      {/* {featured.map((project) => (
        <Accordion
          title={project.name}
          roles={project.roles}
          technologies={project.technologies}
          description={project.description}
          github={project.git}
          website={project.website}
          coverPhoto={project.coverPhoto}
          photoAlbum={project.photos}
          text={"white"}
          openText={"black"}
          link={project.id}
        />
      ))} */}
    </StyledFeatured>
  );
};

export default FeaturedWork;
