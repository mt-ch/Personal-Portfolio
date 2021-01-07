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
  padding: 2vh ${({ theme }) => theme.padding} 2vh;
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

  .line-wrap {
    overflow: hidden;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    .nav-title {
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-options {
      p {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledNav = styled.div`
  position: fixed;
  z-index: 99;

  .nav {
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 5em;
    justify-content: space-between;
    align-items: start;

    .nav-title {
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-options {
      position: fixed;
      bottom: 0;

      p {
        text-decoration: underline;
        line-height: 1.3;
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
  /* img{
    width: 100%;
    object-fit: contain;
    margin-bottom: 1em;
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
  height: 100%auto;
  .border {
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.black};
  }

  .projects-section-title {
    padding: 0em 0 0.5em 0;

    .line-wrap {
      overflow: hidden;
    }
  }

  .project {
    display: grid;
    grid-template-areas: "info photo";
    grid-template-columns: 1fr 5fr;
    padding: 1em 0 1em 0;
    pointer-events: all;

    .project-title {
      padding-top: 0.5em;
    }

    .project-photo {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: end;
      grid-area: photo;
      h2 {
        text-align: end;
      }

      .photo {
        width: 100%;
        max-width: 10em;
        object-fit: contain;
      }
    }

    .project-info {
      grid-area: info;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;

      .arrow {
        transform: scaleY(-1);
        height: 2em;
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
  padding-top: 3em;

  .line-wrap {
    overflow: hidden;
    height: 100%;
  }

  .outro {
    h1 {
      font-weight: bold;
    }

    .email {
      text-transform: uppercase;
      padding-top: 3em;
    }
  }

  .contact-bottom {
    p {
      a {
        color: ${({ theme }) => theme.white};
      }
    }

    .socials {
      padding-top: 1em;
      .socials-header {
        padding-bottom: 0.5em;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2em;
      .arrow {
        width: 2em;
        transform: rotate(-90deg);
        fill: white;
      }
      h1 {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 750px) {
    .contact-bottom {
      display: flex;
      justify-content: space-between;
      align-items: end;

      .socials {
        padding: 0 10vw 0 10vw;
      }

      .footer {
        padding: 0;
      }
    }
  }
`;

export const HomeDesktop = styled.div`
  display: flex;
  padding-left: 6em;
`;
