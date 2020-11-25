import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 20%;
  width: 100%;
  z-index: 99;
  padding: 0vh ${({ theme }) => theme.padding} 0rem;
  ${({ theme }) => theme.padding};
  mix-blend-mode: difference;
  p {
    color: #fff;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* mix-blend-mode: difference; */
    padding: 3vh 0 2vh 0;

    .nav-title {
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }
    
    .nav-options {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      p {
        margin-left: 3vw;
        cursor: pointer;
      }
    }
  }
`;

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
      <StyledNav open={this.props.open}>
        <div className="nav">
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            <p className="nav-title">matt chan</p>
          </NavLink>

          {!this.state.matches && <p onClick={() => this.props.setOpen(!this.props.open)}>menu</p>}
          {this.state.matches && (
            <>
              <div className="nav-options">
                <NavLink
                  to={"/work"}
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  <p>work</p>
                </NavLink>
                <NavLink
                  to="/about"
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  <p>about</p>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </StyledNav>
    );
  }
}

export default nav;
