import styled from "styled-components";

export const StyledPhotoReveal = styled.div`
  .container {
    width: 20em;
    visibility: hidden;
  }

  .img-container {
    width: 20em;
    height: 10em;
    position: relative;
    overflow: hidden;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: #fff;
      top: 0;
      right: 0;
    }
    .photo {
      width: 20em;
      margin: 0 auto;
    }
  }
`;

export const StyledViewPort = styled.div`
  margin: 0 0 0 0;
  /* width: 100%; */
  overflow-x: hidden;
  position: fixed;
  padding-right: ${({ theme }) => theme.padding};
`;

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1em ${({ theme }) => theme.padding} 1em;
  ${({ theme }) => theme.padding};

  .cursor {
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 9999;
    mix-blend-mode: difference;
  }

  .cursor--hidden {
    opacity: 0;
  }

  .cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
    background-color: #fefefe;
  }

  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
  }

  .bg {
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent
      url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
    background-repeat: repeat;
    animation: bg-animation 0.2s infinite;
    opacity: 0.9;
    visibility: visible;
  }

  @keyframes bg-animation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 0);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(5%, 0);
    }
  }
`;

export const StyledProject = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 1vh;
  padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};

  .arrow {
    transform: scaleX(-1);
    height: 1.5em;
    top: 1em;
    right: 0;
    z-index: 99;
    padding-left: ${({ theme }) => theme.padding};
  }

  .project {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 2em;

    .project-header {
      display: flex;
      justify-content: space-between;

      .back {
        /* position: absolute; */
        /* transform: rotate(90deg); */
        text-decoration: underline;
      }
    }

    .info {
      .roles {
        padding: 1em 0 1em;
      }

      .project-links {
        margin: 1em 0 1em 0;
        display: flex;
        a {
          .project-link {
            text-align: center;
            text-transform: capitalize;
            margin-right: 1em;
          }
        }
      }
    }

    .info-end {
      text-align: end;
    }

    .border {
      height: 2px;
      width: 100%;
      margin: 0.5em 0;
      background-color: black;
    }

    .photos {
      padding-bottom: 1vh;

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        position: relative;

        .reveal {
          visibility: hidden;
          position: relative;
          width: 80%;
          height: 80%;
          max-width: 500px;
          overflow: hidden;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transform-origin: left;
          }
        }
      }
    }
    img {
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding: 1vh 0;
    }
  }

  @media (min-width: 500px) {
    .info {
      display: grid;
      grid-template-areas: "roles desc" "links desc";
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 0fr 0fr;
      grid-gap: 2vh;
      padding: 0;
      padding-top: 1em;

      .project-desc {
        grid-area: desc;
      }

      .project-links {
        grid-area: links;
        padding: 0;
      }

      .roles {
        grid-area: roles;
        padding: 0 !important;
      }
    }

    .photos {
      /* display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 100%));
      grid-gap: 1rem;
      grid-auto-flow: row; */
      /* img:last-child {
        grid-column: span 2;
      } */
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
  transform: ${({ open }) => (open ? "translateY(0px)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNavMobile = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  .line-wrap {
    overflow: hidden;
  }

  .nav-title {
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
  }

  .contact-button-text {
    width: 100%;
    .underline {
      height: 1px;
      width: 100%;
      background-color: black;
      margin-top: 2px;
    }
  }
`;

export const StyledNav = styled.div`
  position: fixed;

  .line-wrap {
    position: relative;
    overflow: hidden;
  }

  .nav {
    height: 50vh;

    .nav-title {
      position: absolute;
      top: 0;
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-date {
      position: absolute;
      top: 50%;
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-options {
      position: absolute;
      top: 100%;

      ul {
        list-style: none;

        li {
          position: relative;
          overflow: hidden;

          .nav-link {
            display: table;
            position: relative;
            cursor: pointer;
            pointer-events: all;

            .nav-underline{
              display: block;
              position: absolute;
              bottom: 0;
              right: 0;
              left: 0;
              overflow: hidden;
            }

            .underline {
              display: block;
              width: 100%;
              transform: translateX(-120%);
              content: "";
              border-bottom: 1px black solid;
              transition: transform 1.3s ease;
            }
          }
        }
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
  position: relative;
  margin-bottom: 5em;
  width: 100%;
  height: 100%;
  /* .about-header{
    display: flex;
    align-items: center;
    .curved-arrow{
      width: 1em;
      transform: rotate(90deg);
      margin-left: .5em;
    }
  } */
  /* .border{
    height: 2px;
    width: 100%auto;
    background-color: black;
    margin: .5em 0 1em;
  } */
`;

export const StyledProjects = styled.div`
  position: relative;
  padding-top: 3vh;

  .project {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 3vh;
    display: flex;
    flex-direction: column;

    .border {
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.black};
      margin-bottom: 3vh;
    }

    /* .photo {
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding-top: 1vh;
    } */

    .project-name {
      text-transform: uppercase;
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
      padding: 2vh 0 2vh 0;
    }
  }
`;

export const StyledProjectsDesktop = styled.div`
  position: relative;

  .border {
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.black};
  }

  .projects-section-title {
    padding-bottom: 0.25em;

    .line-wrap {
      overflow: hidden;
    }
  }

  .project {
    display: flex;
    width: 100%;
    height: 7em;
    justify-content: space-between;
    padding: 0.5em 0 0.5em;

    .photo {
      width: 20vw;
      min-width: 6em;
      min-height: 3.5em;
      object-fit: contain;
    }

    .project-info {
      width: 100%auto;
      height: 100%auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 8em;

      .project-title {
        text-transform: uppercase;
        font-weight: 500;
      }

      .project-tech {
      }
    }
  }
`;

export const StyledLanding = styled.div`
  .content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 15vh;
    h1 {
      font-weight: 900;
    }
    .header-wrapper {
      padding-bottom: 2em;
    }

    .line-wrap {
      overflow: hidden;
    }

    .subtext-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: start;

      .spinner {
        width: 4em;
        height: 4em;
        animation: rotation 8s infinite linear;
      }

      .sub-text {
        display: flex;
        flex-direction: column;
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
`;

export const StyledContact = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5em 0 0.5em;
  padding-top: 5em;

  .outro {
    h1 {
      position: relative;
      font-weight: bold;
      z-index: 2;
    }

    /* .arrow{
      position: relative;
      bottom: 0;
      right: 0;
      width: .6em;
      transform: rotate(90deg);
      z-index: 1;
      transition: all .7s ease;

      &:hover{
        transform: rotate(270deg);
        transition: all .7s ease;
      }
    } */
  }

  .contact-info {
    .contact-border {
      height: 2px;
      width: 100%auto;
      background-color: black;
      margin: 1em 0;
    }

    h3 {
      font-weight: 500;
    }

    .mail {
      .email {
        text-transform: uppercase;
      }
    }
  }

  .contact-bottom {
    p {
      a {
        color: ${({ theme }) => theme.black};
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: end;
      width: 100%auto;

      h1 {
        font-weight: bold;
        font-size: 2.5em;
      }
    }
  }

  @media (min-width: 750px) {
    padding-top: 2em;

    /* .contact-bottom {
      display: flex;
      justify-content: space-between;
      align-items: end;

      .socials {
        padding: 0 10vw 0 10vw;
      }

      .footer {
        padding: 0;
      }
    } */
  }
`;

export const HomeDesktop = styled.div`
  position: absolute;
  left: 25vw;
  padding-right: ${({ theme }) => theme.padding};
`;
