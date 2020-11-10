import styled from "styled-components"

export const StyledProjects = styled.div`
  padding: 0 ${({ theme }) => theme.padding} 4rem ${({ theme }) => theme.padding};
  .project-header {
    h1 {
      border-top: 2px solid black;
      padding: 1.2em 0 1em 0;
    }
  }
`
