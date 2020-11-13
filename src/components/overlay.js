import React from "react";
import Nav from "../components/nav";
import Spinner from "../assets/img/Spinner.png";
import styled from "styled-components";
import * as Scroll from "react-scroll";
import Arrow from "../assets/icons/arrow";

export const StyledOverlay = styled.div`
  padding: 3rem ${({ theme }) => theme.navPadding} 3rem;
  ${({ theme }) => theme.navPadding};
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  mix-blend-mode: difference;
  display: grid;
  grid-template-areas: "nav arrow" "spinner spinner";

  .nav {
    width: 150px;
    height: 150px;
    filter: invert(1);
    grid-area: nav;
  }

  .spinner {
    filter: invert(1);
    width: 8em;
    height: 8em;
    animation: rotation 8s infinite linear;
    grid-area: spinner;
    justify-self: end;
    align-self: end;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .arrow {
    transform: rotate(270deg);
  }

  .to-top {
    transition: all 0.5s ease;
    width: 50px;
    height: 50px;
    grid-area: arrow;
    justify-self: end;
    align-self: start;
  }

  .to-top:hover {
    transform: translateY(-20px);
    transition: transform 0.5s ease;
  }
`;

function ScrollToTopFunc() {
  return window.scrollTo(0, 0);
}

const Overlay = () => {
  return (
    <StyledOverlay>
      <Nav class="nav" />
      <a className="to-top" onClick={ScrollToTopFunc}>
        <Arrow className="arrow" height={"3em"} width={"3em"} fill={"#f5f5f5"} />
      </a>
      <img class="spinner" src={Spinner} />
    </StyledOverlay>
  );
};

export default Overlay;
