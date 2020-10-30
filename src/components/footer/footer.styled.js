import styled from "styled-components";

export const StyledFooter = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #212121;
  padding: 4em;

  a {
    cursor: pointer;
  }

  svg {
    flex-shrink: 0;
  }

  h1 {
    font-size: 8rem;
    line-height: 1.2;
    color: #f5f5f5;
  }

  .text-projects {
    margin-left: 1.25em;
  }

  .text-projects:hover {
    color: green;
  }

  .text-info {
    margin-left: 0em;
  }

  .text-info:hover {
    color: green;
  }

  .text-email {
    margin-left: 1.5em;
  }

  .text-email:hover {
    color: green;
  }

  .backToTop {
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: hidden;
    margin-bottom: 1em;
    transition: all 0.5s ease;

    .arrow-rotate {
      transform: rotate(270deg);
    }
  }

  .backToTop:hover {
    transform: translateY(-20px);
    transition: transform 0.5s ease;
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 3em;
  }

  .footer-social-github {
    cursor: pointer;
    padding: 1em;
    margin-right: 2em;
    background-color: #ffffff00;
    transition: all 0.5s ease;

    .social-border {
      display: flex;
      width: 200px;
      height: auto;
      justify-content: space-between;
      align-items: center;
      border-top: 1px #f5f5f5 solid;
      padding: 1em 0 0em 0;

      p {
        color: #f5f5f5;
        font-size: 1.6rem;
      }
    }
  }

  .footer-social-github:hover {
    background-color: green;
  }

  .footer-social-linkedin {
    cursor: pointer;
    padding: 1em;
    transition: all 0.5s ease;

    .social-border {
      display: flex;
      width: 200px;
      height: auto;
      justify-content: space-between;
      align-items: center;
      border-top: 1px #f5f5f5 solid;
      padding: 1em 0 0em 0;

      p {
        color: #f5f5f5;
        font-size: 1.6rem;
      }
    }
  }

  .footer-social-linkedin:hover {
    background-color: green;
  }

  .footer-bottom {
    color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 3em;
    padding-right: 4em;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    padding: 2em;

    h1 {
      font-size: 5rem;
    }

    .footer-social-github {
      margin-right: 0;
      margin-bottom: 1em;
      .social-border {
        width: 130px;
        p {
          font-size: 1.5rem;
        }
      }
    }

    .footer-social-linkedin {
      .social-border {
        width: 130px;
        p {
          font-size: 1.5rem;
        }
      }
    }

    .arrow-rotate {
      height: 25px;
      width: 25px;
    }

    .backToTop:hover {
      transform: translateY(-10px);
    }

    .footer-bottom {
      padding-right: 2em;
      padding-bottom: 2em;
    }

    .footer-social {
      margin-top: 6em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .text-projects {
      margin-left: 0.6em;
      margin-top: 1em;
    }

    .text-info {
      margin-right: 2.25em;
    }

    .text-email {
      margin-left: 1em;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 3.5rem;
    }

    .text-projects {
      margin-left: 0.5em;
      text-align: center;
    }
    .text-email {
      margin-left: 0.5em;
      text-align: center;
    }
    .text-info {
      margin-right: 2.5em;
      text-align: center;
    }
  }
`;
