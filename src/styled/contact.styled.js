import styled from "styled-components";

export const StyledContact = styled.div`
  height: 100vh;

  .email {
    margin-top: 2em;
    text-transform: uppercase;

    .email-header {
      margin-bottom: 1vh;
      font-weight: bold;
    }
  }

  .email-button {
    height: 10em;
    width: 10em;
    text-align: center;
    border-radius: 10em;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0 2em 0;
    transition: all 0.5s ease;
  }

  .email-button:hover {
    height: 12em;
    width: 12em;
    transition: all 0.5s ease;
  }

  .socials {
    display: flex;
    margin-top: 2em;
    .socials-link {
      width: 150px;
      text-align: center;
      text-transform: uppercase;
      border: 2px ${({ theme }) => theme.white} solid;
      padding: 0.5em;
      border-radius: 2em;
      color: ${({ theme }) => theme.white};
      margin-right: 3em;
    }

    .socials-link:hover {
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.black};
    }
  }
`;
