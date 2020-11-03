import styled from "styled-components";

export const StyledLanding = styled.div`
  border-top: solid 2px black;
  padding-top: 4rem;
  .landing-text {
    margin-bottom: 4rem;
  }

  .sub-text {
    /* border-bottom: 1px solid black; */
    /* display: flex;
    flex-direction: column;
    justify-content: end; */
    margin-bottom: 4rem;

    .explore {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 4rem;

      p {
        color: green;
        transition: all 1s;
        margin-right: 10px;
      }

      svg {
        fill: green;
        flex-shrink: 0;
        transition: all 1s;
      }
    }
  }

  .explore:hover {
    svg {
      fill: red;
      transition: fill 1s;
    }
    p {
      color: red;
      transition: color 1s;
    }
  }
`;
