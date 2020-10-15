import styled from "styled-components";

export const StyledProject = styled.div`
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  p {
    font-size: 2.25rem;
    margin: 0;
  }

  .project-info {
    padding: 1em;
    border-bottom: solid black 1px;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      svg {
        flex-shrink: 0;
      }
    }

    .project-description {
      display: none;
    }
  }
`;
