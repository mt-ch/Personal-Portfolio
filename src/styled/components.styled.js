import styled from "styled-components";

export const StyledViewPort = styled.div`
  margin: 0 0 0 0;
  overflow-x: hidden;
  position: fixed;
  padding-right: ${({ theme }) => theme.padding};
`;

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;

  .cursor {
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 9999;
    mix-blend-mode: difference;
  }

  .cursor--hidden {
    opacity: 0;
  }

  .cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
    background-color: #fefefe;
  }

  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
  }
`;



export const HomeStyled = styled.div`
  padding: .5em ${({ theme }) => theme.padding} .5em;
  ${({ theme }) => theme.padding};

  .desktop {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .desktop-nav {
      /* position: absolute;
      top: 0; */
    }

    .desktop-side {
      width: 80vw;
    }
  }

  @media (min-width: 550px) {
    padding: .5em ${({ theme }) => theme.padding} .5em 0;
  }
`;
