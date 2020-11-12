import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css?family=Open+Sans:bold,regular"); */

h1,
h2,
h3,
h4,
h5,
p{
  color: ${({text}) => text};
}

 h1 {
  font-size: clamp(3rem, 9vw, 6rem);
}

//Section headers
h2 {
  font-size: clamp(2rem, 10vw, 10rem);
} 
h3{
  font-size: clamp(1.65rem, 10vw, 6rem);
}
h4{
  /* font-size: clamp(2.25rem, 9vw, 3.5rem); */
}
h5{
  font-size: clamp(1.25rem, 6vw, 2rem);
  font-weight: 500;
  color: #fff;
}
p {
  font-size: clamp(1.5rem, 6vw, 5rem);
}
`;
