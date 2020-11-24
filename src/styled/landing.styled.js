import styled from "styled-components";

export const StyledLanding = styled.div`
  /* height: 100%; */
  width: 100%;

  .content {
    width: 100%;
    height: 100%;
    padding-top: 10vh;

    h1 {
      border-top: solid black 1px;
      line-height: 0.8;
      padding: 5vh 0 0vh 0;
    }

    .sub-text {
      display: flex;
      justify-content: space-between;
      align-items: end;
      border-bottom: solid black 1px;
      padding: 15vh 0 3vh 0;
      .spinner {
        width: clamp(4em, 7vw, 9em);
        height: clamp(4em, 7vw, 9em);
        animation: rotation 8s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }
`;
