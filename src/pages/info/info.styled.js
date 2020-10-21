import styled from "styled-components";

export const StyledInfo = styled.div`
  /* position: absolute; */
  width: 100vw;
  height: auto;

  background-color: white;
  z-index: 99;

  .shapes {
    height: 30vh;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid black 1px;

    .info-title {
      color: white;
      font-weight: bold;
      font-size: 5rem;
    }
  }

  .info-list {
    padding: 0em 1em 1em 1em;
    border-bottom: solid black 1px;
  }

  p {
    font-size: 2.25rem;
    padding: 0;
    margin: 0;
  }

  li {
    line-height: 1.5;

    svg {
      margin: 10px 10px 0 0;
    }
  }
`;
