import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
  scroll-behavior: smooth;
  background:  #f7f3f0;
  &::-webkit-scrollbar {
    display: none;
  }
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  text-rendering: optimizeLegibility;
  font-size: calc(1em + 1vw);
  /* overflow: hidden; */
  --cursor-stroke: #c3654e;
	--cursor-fill: none;
	--cursor-stroke-width: 1px;
}

.section-circle{
  height: 13vw;
  width: 13vw;
  border: 1px solid black;
  border-radius: 100%;
  padding: .45em .5em .2em .2em ;
}

@media(min-width: 550px){
  .section-circle{
  height: 7vw;
  width: 7vw;
}
}

.cursor{
  display: none;
}

@media (any-pointer: fine) {
	.cursor {
		position: fixed;
		top: 0;
		left: 0;
		display: block;
		pointer-events: none;
		opacity: 0;
    z-index: 1000;
	}
	.cursor__inner {
		fill: none;
		stroke: #60381e;
		stroke-width: 1px;
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	cursor: pointer;
}

.section-number{
  font-family: "Harmond";
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;


  /* margin: 3vw 0 -2vw 15vw;
  font-size: clamp(1em, 20.5vw, 12em); */


}

.section-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
  }

  .section-title{
    margin-right: 2vw;
  }
.line-wrap {
  display: block;
  overflow: hidden;
  z-index: 10;
}

.scroller {
  height: 100vh;
  z-index: 11;
  /* overflow: hidden; */
}

.progress-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    z-index: 99;
    overflow: hidden;

    .progress {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      background: #0d0900;
    }
  }
  
/* a{
  color: black;
  text-decoration: none;
} */

ul {
  list-style-type: none;
}

svg {
  flex-shrink: 0;
}

`;
