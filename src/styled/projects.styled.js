import styled from "styled-components";

export const StyledProjects = styled.div`
  .project {
    height: 100%;
    width: 100%;
    border-bottom: 1px black solid;
    padding-top: 3vh;
    display: flex;
    flex-direction: column;

    .photo {
      height: 30vh;
      width: 100%;
      object-fit: cover;
      z-index: 0;
      padding-top: 1vh;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5vh;
      .arrow {
        transform: scaleY(-1);
        height: 2em;
      }
    }

    .project-info {
      position: relative;
      z-index: 5;
      padding: 2vh 0 2vh 0;
    }
  }
`;

export const StyledProjectsDesktop = styled.div`
  .project {
    display: grid;
    grid-template-areas: "info photo";
    grid-template-columns: 30vw 1fr;
    border-bottom: 1px black solid;
    padding: 10vh 0 2vh 0;
    grid-gap: 2vw;
    pointer-events: all;

    .project-photo {
      grid-area: photo;

      .photo {
        height: 50vh;
        width: 100%;
        object-fit: cover;
      }
    }

    .project-info {
      grid-area: info;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;

      .top-info {
      }
      .arrow {
        transform: scaleY(-1);
        height: 3em;
      }
    }
  }
`;
