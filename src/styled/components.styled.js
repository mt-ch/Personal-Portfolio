import styled from "styled-components";

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0rem ${({ theme }) => theme.padding} 0rem;
  ${({ theme }) => theme.padding};
`;

export const StyledProject = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 1vh;

  .project {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 10vh;

    .arrow {
      transform: scaleX(-1);
      height: 2.5em;
      position: fixed;
      top: 3vh;
      right: 0;
      z-index: 99;
      cursor: pointer;
      padding-left: ${({ theme }) => theme.padding};
    }

    .info {
      padding-bottom: 1vh;
      margin-bottom: 2vh;
      .roles {
        padding: 1vh 0 5vh;
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
    .info-end {
      padding: 5vh 0 1vh 0;
      margin-bottom: 1vh;
      text-align: end;
      border-bottom: 1px solid black;
    }
    .photos {
      border-bottom: 1px solid black;
      padding-bottom: 1vh;
    }
    img {
      position: relative;
      z-index: 0;
      height: 40vh;
      width: 100%;
      object-fit: cover;
      padding: 1vh 0;
    }
  }

  @media (min-width: 500px) {
    .info {
      display: grid;
      grid-template-areas: "roles desc" "links desc";
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 0fr 1fr;
      grid-gap: 2vh;
      padding: 0;
      padding-top: 2vh;

      .project-desc {
        grid-area: desc;
      }

      .project-links {
        grid-area: links;
        padding: 0;
      }

      .roles {
        grid-area: roles;
        padding: 0;
      }
    }

    .photos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
      grid-gap: 1rem;
      grid-auto-flow: row;
      img:last-child {
        grid-column: span 2;
      }
    }
  }
`;

export const StyledTitle = styled.div`
  h1 {
    letter-spacing: -0.1rem;
    line-height: 1;
  }

  .line-wrap {
    overflow: hidden;
    height: 100%;
  }
`;

export const StyledMenu = styled.div`
  position: fixed;
  background-color: grey;
  color: #fff;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: ${({ open }) => (open ? "translateY(0px)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 20%;
  width: 100%;
  z-index: 99;
  padding: 0vh ${({ theme }) => theme.padding} 0rem;
  ${({ theme }) => theme.padding};
  mix-blend-mode: difference;
  p {
    color: #fff;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* mix-blend-mode: difference; */
    padding: 3vh 0 2vh 0;

    .nav-title {
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-options {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      p {
        margin-left: 3vw;
        cursor: pointer;
      }
    }
  }
`;

export const StyledLoading = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: end;

  p {
    color: white;
  }
  .loading-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    text-align: center;
    z-index: 5;
    font-size: clamp(1rem, 4vw, 4rem);
  }

  .progress-wrapper {
    padding: 0 ${({ theme }) => theme.padding} 10vh
      ${({ theme }) => theme.padding};
    .progress {
      height: 2px;
      background-color: ${({ theme }) => theme.white};
    }
  }
`;

export const StyledAbout = styled.div`
  border-bottom: black 1px solid;
  padding-bottom: 0vh;
  .text {
    will-change: transform;
    margin: 0vh 0 10vh 0;

    h5 {
      line-height: 1.5;
    }
  }
`;

export const StyledProjects = styled.div`
  position: relative;
  z-index: 1;
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

export const StyledLanding = styled.div`
  width: 100%;

  .content {
    width: 100%;
    height: 100%;
    padding: 10vh ${({ theme }) => theme.padding} 10vh;
    ${({ theme }) => theme.padding};
    display: flex;
    flex-direction: column;
    justify-content: start;

    .border-top,
    .border-bottom {
      border-top: solid black 1px;
      width: 100%;
    }

    h1 {
      letter-spacing: -0.1rem;
      line-height: 0.9;
      padding: 5vh 0 0vh 0;
    }

    .line-wrap {
      overflow: hidden;
      height: 100%;
    }

    .sub-text {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding: 10vh 0 3vh 0;
      .spinner {
        width: clamp(4em, 11vw, 8em);
        height: clamp(4em, 11vw, 8em);
        animation: rotation 8s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  @media (min-width: 900px) {
    height: 100%;
    .content {
      justify-content: space-between;
      padding: 10vh ${({ theme }) => theme.padding} 10vh;
      ${({ theme }) => theme.padding};

      .sub-text {
        padding: 0vh 0 3vh 0;
      }
    }
  }
`;

export const StyledContact = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0 5vh;

  .email {
    text-transform: uppercase;
    .email-txt {
      text-decoration: underline;
    }
  }

  .socials {
    display: flex;
    padding-top: 5vh;

    .socials-link {
      text-align: center;
      text-transform: uppercase;
      border: 2px ${({ theme }) => theme.black} solid;
      padding: 0.25em 0.5em 0.25em 0.5em;
      border-radius: 2em;
      color: ${({ theme }) => theme.black};
      margin-right: 1em;
    }

    .socials-link:hover {
      background-color: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.white};
    }
  }
`;
