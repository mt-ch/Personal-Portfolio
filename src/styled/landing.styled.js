import styled from "styled-components";

export const StyledLanding = styled.div`
  height: 100vh;
  width: 100vw;

  .content {
    position: relative;
    z-index: 10;
    /* height: 0; */
    /* opacity: 0; */
    width: 100vw;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    .txt {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem ${({ theme }) => theme.padding} 3rem;
      mix-blend-mode: difference;

      canvas {
      display: block;
      }
    }
  }
`;
