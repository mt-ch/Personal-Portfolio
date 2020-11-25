import styled from "styled-components";

export const StyledLanding = styled.div`
  height: 100vh;
  width: 100%;

  .content {
    width: 100%;
    height: 100%;
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .border-top,
    .border-bottom {
      border-top: solid black 1px;
      width: 100%;
    }

    h1 {
      letter-spacing: -0.1rem;
      line-height: 1;
      padding: 5vh 0 0vh 0;
    }

    .line-wrap {
      overflow: hidden;
      height: 100%;
    }

    .sub-text {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding: 0vh 0 3vh 0;
      .spinner {
        width: clamp(4em, 15vw, 9em);
        height: clamp(4em, 15vw, 9em);
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
