import React from "react";
import { Link } from "react-router-dom";
import { bool, func } from "prop-types";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  background-color: grey;
  color: #fff;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 0vh ${({ theme }) => theme.padding} 0vh;
  ${({ theme }) => theme.padding};
  transform: ${({ open }) => (open ? "translateY(0px)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="menu-links">
        <Link to="/work">
          <h1 className="menu-link">Work</h1>
        </Link>
        <Link to="/about">
          <h1 className="menu-link">About</h1>
        </Link>
      </div>

      {/* <div className="menu-info">
        <div className="menu-email">
          <p>Hit me up</p>
          <p class="email">me@mattc.com</p>
        </div>
      </div>

      <div className="socials">
        <a>
          <p className="socials-link">Github</p>
        </a>
        <a>
          <p className="socials-link">LinkedIn</p>
        </a>
      </div> */}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
