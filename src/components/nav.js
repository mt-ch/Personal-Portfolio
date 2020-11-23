import React, { PureComponent } from "react";
import { DistortionText } from "react-text-fun";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2vh 0 2vh 0;
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
          <p>mc</p>
          <p>menu</p>
          {/* {this.state.matches && (
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
          )} */}
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
