import styled from "styled-components"

export const StyledAccordion = styled.div`
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 3em 0 3em 0;
    border-top: solid ${({ text }) => text} 2px;

    .project-title {
      font-weight: bold;
      color: ${({ text }) => text};
      font-size: clamp(2rem, 6vw, 5rem);
    }

    .project-tech {
      color: ${({ text }) => text};
      font-size: clamp(1rem, 2vw, 2rem);
    }
  }

  // Arrow
  .accordion-icon {
    margin-left: auto;
    transition: transform 0.4s ease;
  }
  .rotate {
    transform: rotate(90deg);
  }

  .accordion-content {
    height: 500px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    overflow: hidden;
    transition: max-height 0.4s ease;

    .coverPhoto {
      object-fit: cover;
      height: 100%;
      width: 100%;
      min-width: 200px;
    }

    .content-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;

      padding: 2rem;
      p {
        color: ${({ openText }) => openText}!important;
        font-size: 2rem;
      }

      .project-roles{
        font-weight: bold;
        margin-bottom: 1em;
      }

      .view-project{
        display: flex;
        align-items: center;
        margin-top: 2rem;
        svg{
          margin-left: 15px;
        }
      }

      .project-links {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        /* margin-top: 20px; */
        a {
          display: flex;
          align-items: center;
          .project-link-text {
            margin-right: 10px;
          }
        }
      }
    }
  }
`
