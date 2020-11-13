import styled from "styled-components";

export const StyledContact = styled.div`
  height: 100vh;

  .contact-header {

    .arrow {
      transform: rotate(270deg);
    }

    .to-top {
      transition: all 0.5s ease;
    }

    .to-top:hover {
      transform: translateY(-20px);
      transition: transform 0.5s ease;
    }

    h2 {
      font-size: 6vw;
    }
  }

  .email {
    margin-top: 7vh;

    .email-header {
      margin-bottom: 1vh;
      font-weight: bold;
    }
  }

  .social {
    margin-top: 7vh;
    .socials-header {
      margin-bottom: 1vh;
      font-weight: bold;
    }
    .socials {
      display: flex;
      .socials-link {
        display: flex;
        align-items: center;
        margin-right: 8vw;

        svg {
          margin-left: 2vw;
        }
      }
    }
  }
`;
