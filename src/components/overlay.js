import React from "react";
import Nav from "../components/nav";
import Spinner from "../assets/img/Spinner.png";
import styled from "styled-components";

export const StyledOverlay = styled.div`
  padding: 4rem ${({ theme }) => theme.navPadding} 4rem;
  ${({ theme }) => theme.navPadding};
  position: fixed;
  top: 0;
  z-index: -10;
  mix-blend-mode: difference;

  .nav {
    width: 150px;
    height: 150px;
  }

  .spinner {
    position: absolute;
    top: 75vh;
    left: 88vw;
    filter: invert(1);
    width: 150px;
    height: 150px;
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
`;

const Overlay = () => {
  return (
    <StyledOverlay>
      <Nav class="nav" />
      <img class="spinner" src={Spinner} />
    </StyledOverlay>
  );
};

export default Overlay;
