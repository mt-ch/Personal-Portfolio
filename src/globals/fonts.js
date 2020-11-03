import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Open+Sans:bold,regular");

 h1 {
  font-size: clamp(3rem, 9vw, 6rem);
}

h2 {
  font-size: clamp(2rem, 6vw, 6rem);
} 

h4{
  font-size: clamp(2.25rem, 9vw, 3.5rem);
}

h5{
  font-size: clamp(1.25rem, 6vw, 2rem);
  color: ${({ theme }) => theme.darkText};
  font-weight: 500;
}

p {
  font-size: clamp(1.5rem, 6vw, 3rem);
  color: ${({ theme }) => theme.darkText};
}

`;
