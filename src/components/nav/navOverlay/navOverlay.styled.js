import styled from "styled-components";

export const StyledNavOverlay = styled.nav`
position: absolute;
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-right: 1px solid black;
  z-index: 100;
  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-100%)"};
  transition: transform .75s ease-in-out;

  .nav-overlay-text{
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .nav-overlay-socials{
    margin-top: 10px; 
  }

  .nav-overlay-button:hover{
    .nav-overlay-text{
      color: #9570c5;
      transition: color .5s;
    }
  }
`;
