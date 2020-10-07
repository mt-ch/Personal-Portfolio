import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`

/* Import fonts */
@import url("https://fonts.googleapis.com/css?family=Kanit:bold,regular");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:bold,regular");

h1,
h2,
h3,
h4,
h5,
p {
    color: ${({ theme }) => theme.darkText};
    /* font-family: "Open Sans";
    font-family: "SuisseIntl",helvetica,arial,sans-serif; */
}

p {
    /* font-size: clamp(1.25rem, 3vw, 1.75rem); */
    font-size: 1.35rem;
}

h1 {
  font-family: "Kanit";
  font-weight: bold;
  text-transform: uppercase;
  font-size: clamp(2rem, 6vw, 6rem);
  line-height: 1;
  letter-spacing: 0.15rem;
  color: #9570c500;
  -webkit-text-stroke: 2px whitesmoke;
}

h2 {
  font-family: "Kanit";
  /* // font-size: clamp(2rem, 6vw, 6rem); */
  line-height: 0;
  /* // letter-spacing: 0.15rem; */
}

`;
