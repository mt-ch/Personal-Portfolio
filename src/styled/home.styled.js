import styled from "styled-components";

export const HomeStyled = styled.div`
  position: relative;
  z-index: 3;
  padding: 0.5em ${({ theme }) => theme.padding} 0.5em;
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
      width: 70vw;
    }
  }

  @media (min-width: 700px) {
    padding: 1em ${({ theme }) => theme.padding} 0.5em 0;
  }
`;
