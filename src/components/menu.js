import React from "react";
import { Link } from "react-router-dom";
import { bool, func } from "prop-types";
import { useEffect } from "react";
import { StyledMenu } from "../styled/components.styled";

const Menu = ({ open }) => {
  useEffect(() => {
    // No scroll when open
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    // Restore scroll on close
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
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
