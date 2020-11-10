import styled from "styled-components"

export const StyledLanding = styled.div`
  border-top: solid 2px black;
  padding-top: 4rem;

  .movingText {
      height: 100%;
      position: relative;
      overflow: hidden;
      padding: 0 0 4em 0;
    h1 {
      font-size: 15rem;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  .sub-text {
    margin-bottom: 4rem;
    .explore {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 4rem;
      p {
        margin-right: 10px;
      }
      svg {
        flex-shrink: 0;
      }
    }
  }
  .explore:hover {
    svg {
    }
    p {
    }
  }
`
