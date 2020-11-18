import styled from "styled-components";

export const StyledLanding = styled.div`
  height: 100vh;
  width: 100vw;

  .content {
    position: absolute;
    z-index: 0;
    /* bottom: -100%; */
    top: 0;
    height: 0;
    /* opacity: 0; */
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    .txt {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding: 3rem ${({ theme }) => theme.padding} 3rem;
      mix-blend-mode: difference;

      canvas {
      display: block;
      }
    }
  }
`;
