import styled from "styled-components";

export const StyledNavOverlay = styled.nav`
  position: absolute;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  z-index: 100;
  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.75s ease-in-out;

  .nav-overlay-text {
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
    line-height: 3rem;
    transition: all 1s;
  }

  .nav-overlay-socials {
    margin-top: 10px;
  }

  .nav-overlay-button:hover {
    .nav-overlay-text {
      color: #9570c5;
      font-size: 2.55rem;
      transition: font-size 1s, color 0.75s;
    }
  }
`;
