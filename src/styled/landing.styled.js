import styled from "styled-components";

export const StyledLanding = styled.div`
  position: relative;
  padding: 20vh 0 1em 0;
  display: flex;
  height: 95vh;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5em;

  .landing-line-1 {
    font-family: "Harmond";
    margin: 3vw 0 -2vw 0vw;
    font-size: clamp(1em, 20.5vw, 12em);
  }

  .landing-line-3 {
    font-family: "Harmond";
    margin: 3vw 0 -2vw 5vw;
    font-size: clamp(1em, 20.5vw, 12em);
  }

  .landing-text-split {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .section-number {
      height: 50%;
    }
  }

  .landing-subtext {
    max-width: 30vw;
  }

  .landing-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
  }
  .landing-letter{
    letter-spacing: -.3rem;
  }

  @media (min-width: 550px) {
    padding: 0;
    .landing-line {
      margin-bottom:.1vw
    }

    .landing-subtext {
      max-width: 15vw;
    }

    .landing-line-1 {
      margin: 3vw 2.25vw 0 2vw;
      font-size: clamp(1em, 13vw, 12em);
    }
    .landing-line-2 {
      margin: 0.8vw 0 1.5vw 25vw;
    }
    .landing-line-4 {
      margin: 0.8vw 0 1.5vw 15vw;
    }

    .landing-line-3 {
      margin: 3vw 2.25vw 0 2vw;
      font-size: clamp(1em, 13vw, 12em);
    }
  }
`;
