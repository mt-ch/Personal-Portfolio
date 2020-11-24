import styled from "styled-components";

export const StyledProjects = styled.div`
  .project {
    height: 100%;
    width: 100%;
    padding: 0vh ${({ theme }) => theme.padding} 0vh
      ${({ theme }) => theme.padding};

    .photo {
      height: 30vh;
      width: 100%;
      border-top: 1px black solid;
      object-fit: cover;
      z-index: 0;
      padding-top: 10vh;
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
  padding: 0vh ${({ theme }) => theme.padding} 0vh
      ${({ theme }) => theme.padding};
  .project {
    display: grid;
    grid-template-areas: "info photo";
    grid-template-columns: 40vw 1fr;
    border-top: 1px black solid;
    padding: 10vh 0 5vh 0;
    grid-gap: 2vw;

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
    }

    .project-desc{
      margin-top: 5vh;
    }

    .project-links {
      margin-top: 5vh;
      display: flex;
      a {
        .project-link {
          text-align: center;
          text-transform: uppercase;
          border: 2px ${({ theme }) => theme.black} solid;
          padding: 0.25em 0.5em 0.25em 0.5em;
          border-radius: 2em;
          color: ${({ theme }) => theme.black};
          margin-right: 3vw;
        }

        .project-link:hover {
          background-color: ${({ theme }) => theme.black};
          color: ${({ theme }) => theme.white};
        }
      }
    }
  }
`;
