import styled from "styled-components";

export const StyledContact = styled.div`
  position: relative;
  min-height: 80vh;
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1.contact-header-text {
    margin-bottom: 1vw;
  }

  .contact-mid-section {
    display: flex;
    margin-top: 1.5em;
  }

  .contact-container {
    display: flex;

    .socials {
      min-width: 25vw;

      .text-socials {
      }
    }

    .credits {
      max-width: 55vw;
    }
  }

  .contact-info {
    .contact-border {
      height: 2px;
      width: 100%auto;
      background-color: black;
      margin: 1.5em 0;
    }
    .mail {
      padding: 0 0 0 25vw;
      .email {
        text-transform: capitalize;
        padding-bottom: 1.5vw;
        font-weight: 600;
      }
    }
  }

  .contact-sub-heading{
    margin-bottom: .2em;
  }

  .contact-bottom {
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: end;
      width: 100%;
      margin-top: 3em;

      h3.footer-line {
        margin-bottom: 1.5vh;
      }

      .footer-button {
        margin-top: 2em;
        .underline-footer {
          height: 1px;
          width: 100%;
          background-color: black;
        }
      }
    }
  }

  .contact-credit-text-2 {
    margin-top: 0.5em;
  }

  .contact-line {
    margin-bottom: 0vh;
  }

  .contact-sub-text {
    margin-bottom: 0.25vw;
  }

  @media (min-width: 550px) {
    min-height: 100vh;

    .contact-mid-section {
      display: flex;
      margin-top: 3em;
    }

    h1.contact-header-text {
      margin: 1.5vw 0 !important;
    }

    .mail {
      padding: 0 0 0 25vw !important;
    }

    .footer{
      margin: 0!important;
    }

    .contact-container {
      padding: 3em 0 0;
      .credits {
        max-width: 25vw;
      }
    }
  }
`;
