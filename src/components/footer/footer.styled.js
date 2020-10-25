import styled from "styled-components";

export const StyledFooter = styled.div`
  /* border-top: black solid 1px; */

  /* ul {
    margin-bottom: 1em;
    a {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100px;
    }
  } */

  background-color: #212121;
  /* padding: 1em; */
  .footer-text{
    padding: 3.5rem 2rem 0rem 2rem;
    font-size: 4rem;
    font-weight: bold;
    color: #fcec62;
  }

  .footer-email{
    padding: 4rem 2rem 4rem 2rem;
    font-size: 3rem;
    text-decoration: underline;
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid hsla(0, 0%, 100%, 0.2) 1px;
    padding: 1rem 2rem 1rem 2rem;

    .footer-social-div {
      display: flex;
      align-items: center;
    }

    .footer-social-text {
      color: hsla(0, 0%, 100%, 0.2);
    }
  }

  .footer-cr {
    color: hsla(0, 0%, 100%, 0.2);
    padding: 1rem 2rem 1rem 2rem;
  }

  p {
    /* margin-right: 5px; */
    font-size: 1.5rem;
    color: white;
  }

  svg {
    flex-shrink: 0;
    margin-left: 5px;
  }
`;
