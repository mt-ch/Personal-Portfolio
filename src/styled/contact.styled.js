import styled from "styled-components";

export const StyledContact = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .contact {
    padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
  }

  .email {
    text-transform: uppercase;
    padding-top: 5vh;
    border-top: solid 1px black;

    .email-txt{
      text-decoration: underline;
    }
  }

  .socials {
    display: flex;
    padding-top: 5vh;

    .socials-link {
      text-align: center;
      text-transform: uppercase;
      border: 2px ${({ theme }) => theme.black} solid;
      padding: 0.25em 0.5em 0.25em 0.5em;
      border-radius: 2em;
      color: ${({ theme }) => theme.black};
      margin-right: 1em;
    }

    .socials-link:hover {
      background-color: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.white};
    }
  }
`;
