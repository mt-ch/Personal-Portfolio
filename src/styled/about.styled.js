import styled from "styled-components";

export const StyledAbout = styled.div`
  position: relative;
  max-width: 50vw;

  .about-line{
    white-space: nowrap;
  }
  @media (min-width: 550px) {
    max-width: 30vw;
    .about-line{
  }
  }
`;