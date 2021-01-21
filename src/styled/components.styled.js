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

    /* .border {
      height: 2px;
      width: 100%;
      margin: 0.5em 0;
      background-color: black;
    } */

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

    .heading{
      margin-bottom: 1vw;
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
    .underline-nav-mobile {
      height: 1px;
      width: 100%;
      background-color: black;
    }
  }
`;

export const StyledNav = styled.div`
  position: relative;
  width: 25vw;
  max-width: 10em;

  .line-wrap {
    position: relative;
    overflow: hidden;
  }

  .nav {
    position: fixed;
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

            .nav-underline {
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

export const StyledAbout = styled.div`
  position: relative;
  margin: 4em 0 4em;
  width: 100%;

  .about-header {
    width: 100%auto;
    display: flex;
    justify-content: space-between;
    align-items: end;

    h1.about-header-text {
      margin-bottom: 1vw;
    }
  }

  .border-about {
    margin: 1em 0 1em;
  }

  .line-wrap {
    overflow: hidden;
  }

  .about-info {
    margin-bottom: 2em;

    .about-section-title {
      margin-bottom: 0.5vh;
    }
  }

  @media(min-width: 550px){
    .about-area{
      /* max-width: 60%; */
    }

    h1.about-header-text {
      margin-bottom: 2vw!important;
    }
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
/* 
    .border {
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.black};
      margin-bottom: 3vh;
    } */

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

  .project-section-header {
    display: flex;
    width: 100%auto;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 1em;
  }

  h1.project-header-text {
    margin-bottom: 1vw;
  }

  .project {
    display: flex;
    width: 100%;
    height: 10em;
    justify-content: space-between;
    padding: 1em 0 1em;

    .photo {
      width: 28vw;
      min-width: 6em;
      min-height: 4em;
      object-fit: contain;
    }

    .project-info {
      width: 100%auto;
      height: 100%auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 60vw;

      .project-title {
        text-transform: uppercase;
        font-weight: 500;
      }

      .project-tech {
        text-transform: uppercase;
      }
    }
  }

  .lower-info{
    display: flex;
    align-items: center;
  }

  .arrow{
    width: 4vw;
    transform: rotate(-45deg);
    margin-left: .25em;
  }

  @media(min-width: 550px){
    h1.project-header-text {
      margin-bottom: 2vw!important;
    }
  }
`;

export const StyledLanding = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1.landing-line {
    margin-bottom: 1vw;
  }

  .subtext-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 1em;

    .sub-text {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 550px) {
    h1.landing-line {
      margin-bottom: 2vw;
    }
  }
`;

export const StyledContact = styled.div`
  position: relative;
  /* height: 100%;
  width: 100%; */
  /* display: flex;
  flex-direction: column; */
  /* justify-content: s; */
  margin: 5em 0 0.5em;
  padding-top: 2em;

  .contact-header {
    display: flex;
    width: 100%auto;
    justify-content: space-between;
    align-items: end;

    h1.contact-header-text{
      margin-bottom: 1vw;
    }
  }

  .contact-info {
    .contact-border {
      height: 2px;
      width: 100%auto;
      background-color: black;
      margin: 1.5em 0;
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
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: end;
      width: 100%auto;

      h1.footer-line{
        margin-bottom: 1vw;
        font-weight: bold;
        font-size: 2.5em;
      }
    }
  }

  .text-credits{
    margin-bottom:.3vw;
  }

  .footer-button{
    margin-top: 2em;
    .underline-footer{
      height: 1px;
      width: 100%;
      background-color: black;
    }
  }

  @media(min-width: 550px){
    h1.contact-header-text {
      margin-bottom: 2vw!important;
    }
  }

`;
