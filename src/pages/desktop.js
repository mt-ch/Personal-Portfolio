import React from 'react'

const Desktop = () => {
    useEffect(() => {
        const scroller = document.querySelector(".scroller");
    
        const scrollbar = Scrollbar.init(scroller, {
          delegateTo: document,
          alwaysShowTracks: false,
        });
    
        ScrollTrigger.scrollerProxy(".scroller", {
          scrollTop(value) {
            if (arguments.length) {
              scrollbar.scrollTop = value; // setter
            }
            return scrollbar.scrollTop; // getter
          },
        });
    
        scrollbar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: ".scroller" });
    
        gsap.from(".progress", {
          yPercent: -100,
          ease: "none",
          scrollTrigger: { scrub: 0.3 },
        });
      }, [ScrollTrigger]);
      
    return (
        <div>
            
        </div>
    )
}

export default Desktop
