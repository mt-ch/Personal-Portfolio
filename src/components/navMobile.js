import React from "react";
import { StyledNavMobile } from "../styled/components.styled";

const scroll = (e) => {
  const section = document.querySelectorAll(".section-contact");
  switch (e.target.innerHTML) {
    case "Contact":
      section[0].scrollIntoView({
        block: "start",
      });
      break;
  }
};

const NavMobile = () => {
  return (
    <StyledNavMobile className="nav">
      <div className="nav">
        <a className="nav-title">
          <p>
            <div className="line-wrap">
              <div className="line">
                <strong>Matt Chan</strong>
              </div>
            </div>
          </p>
          <p>
            <div className="line-wrap">
              <div className="line">2016-2020</div>
            </div>
          </p>
        </a>

        <div className="nav-options">
          <a onClick={(e) => scroll(e)}>
            <p>
              {" "}
              <div className="line-wrap">
                <div className="line">Contact</div>
              </div>
            </p>
          </a>
        </div>
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
