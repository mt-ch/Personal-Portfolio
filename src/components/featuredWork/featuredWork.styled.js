import styled from "styled-components";

export const StyledFeatured = styled.div`
  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
  }
`;
