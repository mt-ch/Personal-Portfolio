import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0vh ${({ theme }) => theme.padding} 0rem;
  ${({ theme }) => theme.padding};

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 0 2vh 0;

    .nav-options {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      p {
        margin-left: 3vw;
      }
    }
  }
`;

const scroll = (e) => {
  const section = document.querySelectorAll(".section-title");
  switch (e.target.innerHTML) {
    case "work":
      section[0].scrollIntoView({
        block: "start",
      });
      break;
    case "contact":
      section[1].scrollIntoView({
        block: "start",
      });
      break;
  }
};

export class nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 576px)").matches,
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 576px)").addListener(handler);
  }

  render() {
    return (
      <StyledNav>
        <div className="nav">
          <Link to="/">
            <p>mc</p>
          </Link>

          {!this.state.matches && <p>menu</p>}
          {this.state.matches && (
            <>
              <div className="nav-options">
                <p onClick={(e) => scroll(e)}>work</p>
                <p>contact</p>
              </div>
            </>
          )}
        </div>
      </StyledNav>
    );
  }
}

export default nav;
