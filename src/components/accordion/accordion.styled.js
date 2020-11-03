import styled from "styled-components";

export const StyledAccordion = styled.div`
  background-color: #ffffff00;

  svg {
    flex-shrink: 0;
  }

  .accordion {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-top: solid black 2px;
    /* transition: background-color 0.4s ease; */
  }

  /* Hover change color */
  .accordion:hover,
  .active {
    background-color: #f2f2f2;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0 2em;
  }

  .accordion-icon {
    margin-left: auto;
    transition: transform 0.4s ease;
  }

  /* rotate arrow when project is active */
  .rotate {
    transform: rotate(90deg);
  }

  /* Style project content */
  .accordion-content {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.4s ease;

    .project-links {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;
      margin-top: 20px;

      a {
        display: flex;
        align-items: center;

        .project-link-text {
          margin-right: 10px;
        }
      }
    }
  }
`;
