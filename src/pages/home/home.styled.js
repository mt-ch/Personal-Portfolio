import styled from "styled-components";

export const StyledHome = styled.div`
position: absolute;
top: 49px;
left: 0;
right: 0;

p {
  font-size: ${({ theme }) => theme.primaryFontSize};
  margin: 0;
}

.featured-title {
  padding: 2rem;
  text-align: end;
}
`;