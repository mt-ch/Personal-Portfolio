import React, { PureComponent } from "react";
import { DistortionText } from "react-text-fun";
import styled from "styled-components";

const StyledNav = styled.div`
  ul {
    canvas {
      display: block;
      transition: all 0.5s ease;
      &:hover {
        cursor: pointer;
        transform: translateX(1em);
        transition: transform 0.5s ease;
      }
    }
    li {
      list-style: none;
    }
  }
`;

const scroll = (e) => {
  const section = document.querySelectorAll(".section-title");
  switch (e.target.innerHTML) {
    case "ABOUT":
      section[0].scrollIntoView({
        block: "start",
      });
      break;
    case "WORK":
      section[1].scrollIntoView({
        block: "start",
      });
      break;
    case "DMS":
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
      //listening for media query
      matches: window.matchMedia("(min-width: 576px)").matches,
      nav: [{ txt: "ABOUT" }, { txt: "WORK" }, { txt: "DMS" }],
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 576px)").addListener(handler);
  }

  render() {
    const { nav } = this.state;
    return (
      <StyledNav>
        <ul className="nav" >
          
          {this.state.matches && (
            <>
            {nav.map((option) => (
              <li onClick={(e) => scroll(e)}>
                <DistortionText
                  fontSize={"40"}
                  speed={0.3}
                  fill={"#f5f5f5"}
                  text={option.txt}
                fontFamily={'Space Grotesk'}
                />
              </li>
            ))}
            </>
          )}
          {!this.state.matches && (
            <>
            {nav.map((option) => (
              <li onClick={(e) => scroll(e)}>
                <DistortionText
                  fontSize={"25"}
                  speed={0.3}
                  fill={"#f5f5f5"}
                  text={option.txt}
                  fontFamily={'Space Grotesk'}
                />
              </li>
            ))}
            </>
          )}
        </ul>
      </StyledNav>
    );
  }
}

export default nav;

// const Nav = () => {
//   const scroll = (e) => {
//     const section = document.querySelectorAll(".section-title");
//     switch (e.target.innerHTML) {
//       case "ABOUT":
//         section[0].scrollIntoView({
//           block: "start",
//         });
//         break;
//       case "WORK":
//         section[1].scrollIntoView({
//           block: "start",
//         });
//         break;
//       case "DMS":
//         section[2].scrollIntoView({
//           block: "start",
//         });
//         break;
//     }
//   };
//   return (
// <StyledNav>
//   <ul className="nav" style={{}}>
//     <li onClick={(e) => scroll(e)}>
//       <DistortionText fontSize={"25"} speed={0.3} fill={'#f5f5f5'} text="ABOUT" />
//     </li>
//     <li onClick={(e) => scroll(e)}>
//       <DistortionText fontSize={"25"} speed={0.3} fill={'#f5f5f5'} text="WORK" />
//     </li>
//     <li onClick={(e) => scroll(e)}>
//       <DistortionText fontSize={"25"} speed={0.3} fill={'#f5f5f5'} text="DMS" />
//     </li>
//   </ul>
// </StyledNav>
//   );
// };

// export default Nav;
