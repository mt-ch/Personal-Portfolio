import styled from "styled-components";

export const StyledFeatured = styled.div`
  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    margin: 0;
  }
`;

export const StyledFeaturedDesktop = styled.div`
  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    margin: 0;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
`;