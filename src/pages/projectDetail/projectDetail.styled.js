import styled from "styled-components";

export const StyledProject = styled.div`
p {
  font-size: ${({ theme }) => theme.primaryFontSize};
}

a {
  display: flex;
  align-items: center;
  justify-content: end;

  .project-link-text{
      margin-right: 10px;
  }
}

.project-detail{
    padding: 2rem;

    .project-desc{
        margin: 2rem 0 2rem 0;
    }
}

.project-photos {
  display: flex;
  align-items: center;
  justify-content: center;

  .gallery {
    height: 300px;
    width: 100%;
    min-width: 200px;
    object-fit: cover;
  }
}
`;
