import React, { PureComponent } from "react";
import { StyledNav } from "../styled/components.styled";

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
    case "about":
      section[2].scrollIntoView({
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
      <StyledNav open={this.props.open}>
        <div className="nav">
          <a>
            <p className="nav-title">matt chan</p>
          </a>

          {!this.state.matches && (
            <p onClick={() => this.props.setOpen(!this.props.open)}>menu</p>
          )}
          {this.state.matches && (
            <>
              <div className="nav-options">
                <a onClick={(e) => scroll(e)}>
                  <p>work</p>
                </a>
                <a onClick={(e) => scroll(e)}>
                  <p>about</p>
                </a>
                <a onClick={(e) => scroll(e)}>
                  <p>contact</p>
                </a>
              </div>
            </>
          )}
        </div>
      </StyledNav>
    );
  }
}

export default nav;
