import styled from "styled-components";

export const StyledInfo = styled.div`
  background-color: white;
  z-index: 5;
  padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};

  .info-header {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 4rem 0 4rem 0;
  }
  .info-social {
    padding: 4rem 0 4rem 0;
    display: flex;
    align-items: center;
    justify-content: start;

    a {
      display: flex;
      align-items: center;
      margin-right: 2rem;
    }
  }
  
  svg {
    flex-shrink: 0;
    margin-left: 1rem;
  }
`;
