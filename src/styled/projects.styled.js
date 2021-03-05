import styled from "styled-components";

export const StyledProject = styled.div`
  .project-title-wrapper {
    display: flex;

  }

  .arrow {
    height: 5vw;
    transform: rotate(-270deg) scaleX(-1);
  }


  .pop-out-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    height: 100vh;
    width: 100vw;
    background-color: #00000050;
  }
  .project-pop-out {
    position: fixed;
    top: 0;
    left: 100%;
    /* width: 100vw; */
    width: 85vw;
    margin: 1em 0 1em 1em;
    z-index: 99;
    background-color: #f7f3f0;
    padding: 1em 2em 1em 1em;
    border-left: black 1px solid;
    border-top: black 1px solid;
    border-bottom: black 1px solid;

    .project-pop-out-header {
      display: flex;
      /* width: 100%; */
      justify-content: space-between;

      .project-pop-out-header-text {
        text-transform: uppercase;
        max-width: 60vw;
      }

      .project-pop-out-cross {
        width: 1em;
      }
    }

    .project-pop-out-info {
      margin-top: 0.5em;

      .project-pop-out-tech {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.5em;
      }
    }

    .project-pop-out-buttons {
      display: flex;
      margin-top: 0.5em;

      .project-pop-out-git {
        margin-right: 1em;
      }
    }

    .project-pop-out-photos {
      margin-top: 0.5em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .project-pop-out-photo {
        height: 100%;
        min-height: 20vh;
        width: 100%;
        max-height: 40vh;
        object-fit: contain;
      }
    }
  }

  .pop-out-text {
    margin-bottom: 0.5vw;
  }

  .mobile-sub-text {
    display: block;
  }

  .desk-sub-text {
    display: none;
  }

  @media (min-width: 550px) {
    .project-pop-out {
      position: fixed;
      top: 0;
      left: 100%;
      width: 50vw;
      margin: 1em 0 1em 1em;
      z-index: 99;
      background-color: #f7f3f0;
      padding: 1em 2em 0.5em 1em;
    }

    .project-info{
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
    }

    .pop-out-text {
      margin-bottom: 0.25vw;
    }

    .mobile-sub-text {
      display: none;
    }

    .desk-sub-text {
      display: block;
    }
  }
`;

export const StyledProjects = styled.div`
  position: relative;
  width: 100%;

  .wrapper-img {
    overflow: hidden;
    position: relative;
  }

  .cover-img {
    width: 28vw;
    height: 100%;
    object-fit: contain;
  }

  .box {
    background: #f7f3f0;
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }

  .projectBorder {
    padding-top: 1em;
  }

  .project {
    display: flex;
    min-height: 10em;
    width: 100%;
    justify-content: space-between;
    padding: 1.5em 0 1.5em;

    .project-info {
      height: 100%auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 60vw;

      .project-title {
        text-transform: uppercase;
      }

      .project-tech {
        text-transform: uppercase;
      }
    }
  }

  .lower-info {
    display: flex;
    align-items: center;
  }

  @media (min-width: 550px) {
    .project-info {
      max-width: 30vw;
    }
    .cover-img {
      width: 14vw;
      height: 10em;
      object-fit: cover;
    }
    .project-tech {
      text-transform: uppercase;
      max-width: 12vw;
    }

    .project-info-side {
      display: flex;
      justify-content: space-between;
      width: 30vw;
    }
  }
`;
