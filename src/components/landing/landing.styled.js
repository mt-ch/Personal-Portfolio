import styled from "styled-components";

export const StyledLanding = styled.div`
  .shapes {
    height: 60vh;
    background-color: green;
  }
  .sub-text {
    border-bottom: 1px solid black;
    padding: 1em;

    p {
      font-size: 2.25rem;
      margin: 0;
      line-height: 1.3;
    }

    .explore {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 20px;

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
