import React, { useEffect } from "react";
import Nav from "../components/nav";
import Spinner from "../assets/img/Spinner.png";
import styled from "styled-components";
import Arrow from "../assets/icons/arrow";
import gsap from "gsap";

export const StyledOverlay = styled.div`
  padding: 3rem ${({ theme }) => theme.navPadding} 3rem;
  ${({ theme }) => theme.navPadding};
  position: fixed;
  /* height: 100%; */
  width: 100%; 
  z-index: 1;
  mix-blend-mode: difference;
  display: grid;
  grid-template-areas: "nav arrow" "spinner spinner";
  transform: translate3d(0,0,0);

  .nav {
    grid-area: nav;
  }

  .spinner {
    filter: invert(1);
    width: clamp(6em, 9vw, 9em);
    height: clamp(6em, 9vw, 9em);
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
    width: clamp(2.5em, 4.5vw, 4.5em);
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
  useEffect(() => {
    gsap.from('.overlay', {
      duration: .7,
      ease: "power4.Out",
      delay: 2,
      // opacity: 0,
      transform: 'scale(1.8)'
    }
    );     
  }, []);
  return (
    <StyledOverlay className='overlay'>
      <Nav class="nav" />
      {/* <a className="to-top" onClick={ScrollToTopFunc}>
        <Arrow className="arrow" fill={"#f5f5f5"} />
      </a>
      <img class="spinner" src={Spinner} /> */}
    </StyledOverlay>
  );
};

export default Overlay;
