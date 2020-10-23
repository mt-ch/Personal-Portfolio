import styled from "styled-components";

export const StyledAccordion = styled.div`

  p {
    font-size: 2.25rem;
    margin: 0;
  }

  svg {
    flex-shrink: 0;
  }

  .accordion-section {
    display: flex;
    flex-direction: column;
    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  }

  /* Main project button */
  .accordion {
    height: 100%;
    width: 100%;
    min-height: 210px;
    min-width: 200px;
    background-color: white;
    cursor: pointer;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: start;
    transition: background-color 0.4s ease;
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
    border-bottom: 1px solid black;
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

  /* @media (min-width: ${({ theme }) => theme.mobile}) {
    .project-id{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  } */
    
`;
