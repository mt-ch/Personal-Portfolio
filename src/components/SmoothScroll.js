import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({children}) => {
  useEffect(() => {
    // Setup
    const scroller = document.querySelector(".scroller");

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

  }, []);
  return <div className='scroller'>{children}</div>;
};

export default SmoothScroll;
