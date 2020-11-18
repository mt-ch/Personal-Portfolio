import styled from "styled-components";

export const StyledContact = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: relative;
  /* margin: 10vw 0 5vw 0; */

  .contact {
    padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
    margin: 10vh 0 10vh 0;
  }

  .email {
    /* position: relative; */
    text-transform: uppercase;
    z-index: 1;
    margin: 0vh 0 5vh 0;

    .email-txt {
      font-size: clamp(1.3rem, 6vw, 7rem);
    }

    .email-header {
      /* margin-bottom: 1vh; */
      text-decoration: underline;
      font-weight: bold;
    }
    .email-button {
      /* position: absolute; */
      bottom: -5vh;
      left: 50vw;
      z-index: 1;
      height: 10em;
      width: 10em;
      text-align: center;
      border-radius: 10em;
      border: 2px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.black};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2em 0 2em 0;
      /* transition: all 0.5s ease; */
    }
  }

  .socials {
    /* position: relative; */
    display: flex;

    .socials-link {
      text-align: center;
      text-transform: uppercase;
      border: 2px ${({ theme }) => theme.white} solid;
      padding: 0.25em 0.5em 0.25em 0.5em;
      border-radius: 2em;
      color: ${({ theme }) => theme.white};
      margin-right: 1em;
    }

    .socials-link:hover {
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.black};
    }
  }
`;
