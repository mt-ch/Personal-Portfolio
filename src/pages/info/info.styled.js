import styled from "styled-components";

export const StyledInfo = styled.div`
  position: absolute;
  top: 49px;
  width: 100vw;
  height: auto;
  background-color: white;
  z-index: 5;

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
    padding: 2rem;
    border-bottom: solid black 1px;
  }

  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    line-height: 1.5;
  }

  li {
    line-height: 1.5;

    svg {
      margin: 10px 10px 0 0;
    }
  }
`;
