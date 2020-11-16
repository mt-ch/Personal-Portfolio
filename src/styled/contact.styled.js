import styled from "styled-components";

export const StyledContact = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: relative;
  margin: 10vw 0 5vw 0;
  h2 {
  position: relative;
    z-index: 0;
    color: ${({ theme }) => theme.primary};
    small {
      margin-right: 5vw;
      font-size:  clamp(1rem, 3vw, 3rem);
    }
  }
  .email {
    /* margin-top: 2em; */
    position: relative;
    text-transform: uppercase;
    z-index: 2;
    margin: 5vw 0 5vw 0;

    .email-header {
      /* margin-bottom: 1vh; */
      text-decoration: underline;
      font-weight: bold;
    }
    .email-button {
    position: absolute;
    bottom: -5vh;
    left: 50vw;
    z-index: 0;
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

  
  /* .email-button:hover {
    height: 12em;
    width: 12em;
    transition: all 0.5s ease;
  } */

  .socials {
    position: relative;
    display: flex;
    z-index: 2;

    .socials-link {
      width: 6em;
      text-align: center;
      text-transform: uppercase;
      border: 2px ${({ theme }) => theme.white} solid;
      padding: 0.5em;
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
