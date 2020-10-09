import styled from "styled-components";

export const StyledProject = styled.div`
    border-bottom: solid black 1px;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  p {
      font-size: 2rem;
      margin: 0;
      line-height: 1;
      white-space: pre-wrap;
    }

  .project-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 1em;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
    }

    .project-description{
        display: none;
    }
  }
`;

//       .project-view {
//         display: flex;
//         flex-direction: column;
//         .icon {
//           width: 100%;
//           height: auto;
//           max-width: 1.5em;
//           margin: 0 5px 0 0;
//           filter: invert(1) grayscale(1);
//         }
//       }
//     }
//   }
