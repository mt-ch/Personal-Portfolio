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
  z-index: 50;
  padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};

  .arrow {
    transform: scaleX(-1);
    height: 2.5em;
    position: fixed;
    top: 3vh;
    right: 0;
    z-index: 99;
    padding-left: ${({ theme }) => theme.padding};
  }

  .project {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 10vh;

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
            /* border: 2px ${({ theme }) => theme.black} solid;
            padding: 0.25em 0.5em 0.25em 0.5em; */
            /* border-radius: 2em; */
            /* color: ${({ theme }) => theme.black}; */
            margin-right: 3vw;
          }

          .project-link:hover {
            /* background-color: ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.white}; */
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
      padding-bottom: 1vh;
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
      grid-template-columns: repeat(auto-fit, minmax(400px, 100%));
      grid-gap: 1rem;
      grid-auto-flow: row;
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
  width: 100%;

  .line-wrap{
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

  .about-text{
    margin-bottom: 1em;
  }
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
    padding: 3vh 0 3vh 0;

    .line-wrap{
      overflow: hidden;
    }
  }

  .project {
    display: grid;
    /* flex: 3em 6fr; */
    grid-template-areas: "info photo";
    grid-template-columns: 1fr 5fr;
    padding: 5vh 0 3vh 0;
    pointer-events: all;

    .project-title {
      padding-top: 1vh;
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
    height: 90vh;

    .header-wrapper {
      padding: 7em 0 3em 0;
    }

    .line-wrap {
      overflow: hidden;
      height: 100%;
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
  padding-top: 5em;

  .line-wrap {
    overflow: hidden;
    height: 100%;
  }

  .outro {
    /* padding: 0rem ${({ theme }) => theme.padding} 0rem;
    ${({ theme }) => theme.padding}; */
    h1 {
      font-weight: bold;
      /* font-size: clamp(2.75rem, 9vw, 7rem); */
      letter-spacing: -0.1rem;
      line-height: 0.9;
    }

    .email {
      text-transform: uppercase;
      text-decoration: underline;
      padding-top: 3vh;
    }
  }

  .contact-bottom {
    /* padding: 0rem ${({ theme }) => theme.padding} 0rem;
    ${({ theme }) => theme.padding}; */
    p {
      letter-spacing: 0.9;
      a {
        color: ${({ theme }) => theme.black};
        font-size: 0.7em;
        font-family: "Monument Extended Regular";
      }
    }
    .credits {
    }
    .socials {
      padding-top: 3vh;
    }
    .footer {
      padding-top: 3vh;
      font-weight: bold;
      text-align: end;
      letter-spacing: -0.1rem;
      line-height: 0.9;
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
