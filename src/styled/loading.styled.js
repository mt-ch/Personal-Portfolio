import styled from "styled-components";

export const StyledLoading = styled.div`
  .pace.pace-inactive {
    display: none;
  }

  /* loader  */

  .wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgb(17, 17, 17);
    z-index: 1;
    display: flex;
    align-items: end;
    justify-content: start;
  }

  .loader-text {
    display: flex;
    align-items: end;
    height: 100%;
    justify-content: start;
    overflow: hidden;
    padding: 0 0 0.5em 1em;
    position: relative;
    z-index: 5;
  }

  .loader-letters {
    color: white;
    font-size: clamp(1.5em, 6vw, 6em);
    font-family: "Harmond";
    margin: 2vw 2vw 0vw 0vw;
    letter-spacing: 0.01rem;
  }

  .loader-letters-name {
    color: white;
    font-size: clamp(0.9em, 1.5vw, 1.5em);
    margin: 2vw 2vw 1vw 2vw;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  .loading-in {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #f7f3f0;
    z-index: 6;
  }

  .loading-line {
    height: 8vw;
    width: 1px;
    margin: 0 0.2em 0 0.65em;
    background-color: white;
    transform: rotate(30deg);
  }

  @media (min-width: 700px) {
    .loading-line {
      height: 5vw;
    }
  }
`;
