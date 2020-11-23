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
        height: 2em;
      }
    }

    .project-info {
      position: relative;
      z-index: 5;
      padding: 2vh 0 2vh 0;

      .project-desc {
        display: none;
      }

      .project-links {
        display: none;
        margin-top: 5vh;
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
            background-color: ${({ theme }) => theme.white};
            color: ${({ theme }) => theme.black};
          }
        }
      }
    }
  }

  @media (min-width: 550px) {
    
  }
`;
