import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { StyledTopNav } from "./topNav.styled";
import styled from "styled-components";

//https://github.com/glweems/react-peekaboo-navbar code from here
export default class TopNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }
  // className={this.state.show ? "active" : "hidden"}
  render() {
    return (
      <Transition>
        <StyledTopNav>
          <Link className="title-link" to="/">
            <h4 className="title-text">mc</h4>
          </Link>

          <ul className="nav-desktop">
            <li>
              <Link to="/projects">
                <h5>Projects</h5>
              </Link>
            </li>
            <li>
              <Link to="/info">
                <h5>Info</h5>
              </Link>
            </li>
          </ul>
        </StyledTopNav>
      </Transition>
    );
  }
}

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
