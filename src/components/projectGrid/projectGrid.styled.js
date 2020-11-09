import styled from "styled-components";

export const StyledProjectGrid = styled.div`
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  .project-header {
    height: auto;
    width: 100%;
    min-height: 100px;
    min-width: 200px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: white;
    transition: background-color 0.4s ease;
    .project-title {
      display: flex;
      justify-content: space-between;
      align-items: start;

      svg{
        flex-shrink: 0;
      }
    }
    p {
      font-size: ${({ theme }) => theme.primaryFontSize};
    }
  }

  .project-header:hover {
    background-color: #f2f2f2;

    .project-arrow {
      animation: arrowMove 1s infinite;
    }
  }

  @keyframes arrowMove {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;