import styled from "styled-components";

export const StyledInfo = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  padding: 1em;
  background-color: white;
  z-index: 99;
  border-bottom: 1px solid black;
  transform: ${({ openInfo }) =>
    openInfo ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.75s ease-in-out;

  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  p {
    font-size: 1.5rem;
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
