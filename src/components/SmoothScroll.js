import React, { PureComponent } from "react";
import { TweenLite, Power4 } from "gsap";
import {StyledViewPort} from '../styled/components.styled';

export class SmoothScroll extends PureComponent {
    state = {
        height: window.innerHeight
      };
    
      ro = new ResizeObserver(elements => {
        for (let elem of elements) {
          const crx = elem.contentRect;
          console.log(crx);
          this.setState({
            height: crx.height
          });
        }
      });
    
      componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        this.ro.observe(this.viewport);
      }
    
      onScroll = () => {
        TweenLite.to(this.viewport, 1, {
          y: -window.pageYOffset,
          ease: Power4.easeOut
        });
      };
    
      render() {
        return (
          <>
            <StyledViewPort className="viewport" ref={ref => (this.viewport = ref)}>
              {this.props.children}
            </StyledViewPort>
            <div
              ref={ref => (this.fake = ref)}
              style={{
                height: this.state.height
              }}
            />
          </>
        );
      }
}

export default SmoothScroll

