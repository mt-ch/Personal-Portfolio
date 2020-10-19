import styled from "styled-components";

export const StyledFeatured = styled.div`
  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    margin: 0;
  }

  .featured-title{
    padding: .5em;
    text-align: end;
  }
`;
