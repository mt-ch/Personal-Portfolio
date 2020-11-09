import styled from "styled-components";

export const StyledProject = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: end;

    .project-link-text {
      margin-right: 10px;
    }
  }

  .project-detail {
    padding: 2rem ${({ theme }) => theme.padding} 2rem
      ${({ theme }) => theme.padding};

    .project-desc {
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
