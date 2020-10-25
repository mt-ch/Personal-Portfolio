import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #212121;

  .footer-text{
    padding: 3.5rem 2rem 0rem 2rem;
    font-size: 4rem;
    font-weight: bold;
    color: #fcec62;
  }

  .footer-email{
    padding: 4rem 2rem 4rem 2rem;
    font-size: 3rem;
    transition: all 0.5s ease;
  }

  .footer-email:hover{
    color: hsla(0, 0%, 100%, 0.7);
    transition: all 0.5s ease;
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

  .footer-social-links{
    display: flex;
    align-items: center;

    .footer-social-github{
      color: hsla(0, 0%, 100%, 0.2);
      transition: all 0.5s ease;
    }

    .footer-social-github:hover{
      color: #fcec62;
      transition: all 0.5s ease;
    }

    .footer-social-linkedin{
      color: hsla(0, 0%, 100%, 0.2);
      transition: all 0.5s ease;
    }

    .footer-social-linkedin:hover{
      color: #fcec62;
      transition: all 0.5s ease;
    }

    .footer-social-spacer{
      color: hsla(0, 0%, 100%, 0.2);
      margin: 0 8px 0 8px;
    }
  }

  .footer-cr {
    color: hsla(0, 0%, 100%, 0.2);
    padding: 1rem 2rem 1rem 2rem;
  }

  p {
    /* margin-right: 5px; */
    font-size: 1.25rem;
    color: white;
  }

  svg {
    flex-shrink: 0;
    margin-left: 5px;
  }
`;
