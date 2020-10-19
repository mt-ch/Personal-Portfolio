import styled from "styled-components";

export const StyledFooter = styled.div`
  padding: 1em;

  ul {
    margin-bottom: 1em;
    a {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100px;
    }
  }

  p {
    margin-right: 5px;
    font-size: 1.5rem;
  }

  svg{
    flex-shrink: 0;
  }
`;
