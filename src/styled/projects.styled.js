import styled from "styled-components";

export const StyledProjects = styled.div`
  .project-title {
    color: ${({ theme }) => theme.primary};
    small {
      margin-right: 5vw;
      font-size: clamp(1rem, 3vw, 3rem);
    }
  }
  .project {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
    margin: 10vh 0 10vh 0;

    .photos {
      position: relative;
      .photo {
        /* height: calc(rand()); */
        /* width: 15em; */
        object-fit: cover;
        z-index: 0;
        position: absolute;
      }
    }

    .project-info {
      position: relative;
      /* display: flex;
      align-items: center;
      justify-content: space-between; */
      z-index: 5;
      mix-blend-mode: difference;

      .project-desc {
        z-index: 5;
        max-width: 400px;
        margin-top: 5vh;
      }

      .project-links {
        display: flex;
        margin-top: 5vh;
        a {
          .project-link {
            /* width: 6em; */
            text-align: center;
            text-transform: uppercase;
            border: 2px ${({ theme }) => theme.white} solid;
            padding: .25em 0.5em .25em 0.5em;
            border-radius: 2em;
            color: ${({ theme }) => theme.white};
            /* margin-right: 1em; */
          }

          .project-link:hover {
            background-color: ${({ theme }) => theme.white};
            color: ${({ theme }) => theme.black};
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    .project-info {
      display: flex;
      justify-content: space-between;
      .project-desc {
        margin: 0 0 0 5vw !important;
      }
      .project-links {
        justify-content: end;
        .project-link {
          margin: 0 0 0 1em !important;
        }
      }
    }
  }
`;
