import React, { useEffect } from "react";
import { TimelineLite, gsap, CSSPlugin, Power3 } from "gsap";
import { StyledLanding } from "../styled/components.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";
import Spinner from "../assets/img/Spinner.png";

gsap.registerPlugin(CSSPlugin);

const Landing = () => {
  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1
      .from(".line", {
        duration: 2,
        y: "18vh",
        stagger: {
          amount: 2,
        },
        ease: Power3.easeInOut,
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLanding>
        <div className="content">
          <div className="header-wrapper">
            <h1>
              <div className="line-wrap">
                <div className="line">CODER</div>
              </div>
              <div className="line-wrap">
                <div className="line" style={{marginLeft:'0em'}}>+DIGITAL</div>
              </div>
              <div className="line-wrap">
                <div className="line" style={{marginLeft:'0em'}}>DESIGNER</div>
              </div>
              <div className="line-wrap">
                <div className="line" style={{marginLeft:'0em'}}>↓</div>
              </div>
            </h1>
          </div>

          <div className="subtext-wrapper">
            <div className="sub-text">
              <div className="line-wrap">
                <div className="line">
                  <p>Available for freelance work:</p>
                </div>
              </div>
              <div className="line-wrap">
                <div className="line">
                  <p>Jan, 21</p>
                </div>
              </div>
            </div>
            {/* <img class="spinner" src={Spinner} /> */}
          </div>
        </div>
      </StyledLanding>
    </ThemeProvider>
  );
};

export default Landing;
