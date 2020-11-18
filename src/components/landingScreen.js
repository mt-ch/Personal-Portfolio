import React, { PureComponent } from "react";
import { LiquidDistortionText } from "react-text-fun";

export class LandingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //listening for media query
    //   matches: window.matchMedia("(min-width: 576px)").matches,
      matchesTablet: window.matchMedia("(min-width: 650px)").matches,
      matchesMobile: window.matchMedia("(min-width: 550px)").matches,
      title: [{ txt: "MATT CHAN" }, { txt: "CODING" }, { txt: "DESIGN" }],
    };
  }

  componentDidMount() {
    // const handler = (e) => this.setState({ matches: e.matches });
    const handlerTablet = (e) => this.setState({ matchesTablet: e.matches });
    const handlerMobile = (e) => this.setState({ matchesTablet: e.matches });
    window.matchMedia("(min-width: 650px)").addListener(handlerTablet);
    window.matchMedia("(min-width: 550px)").addListener(handlerMobile);
    // window.matchMedia("(min-width: 576px)").addListener(handler);
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        {this.state.matchesMobile && (
          <>
            {title.map((name) => (
              <LiquidDistortionText
                fontSize={"55"}
                speed={0.3}
                fill={"#f5f5f5"}
                text={name.txt}
                fontFamily={"Monument Extended"}
                lineHeight={1}
              />
            ))}
          </>
        )}
        {!this.state.matchesMobile && (
          <>
            {title.map((name) => (
              <LiquidDistortionText
                fontSize={"25"}
                speed={0.3}
                fill={"#f5f5f5"}
                text={name.txt}
                fontFamily={"Monument Extended"}
                lineHeight={1}
              />
            ))}
          </>
        )}
       
      </div>
    );
  }
}

export default LandingScreen;
