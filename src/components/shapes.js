import React, { Children } from "react";
import styled from "styled-components";

export const StyledShapes = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid black 1px;

  .page-title {
    color: black;
    font-weight: bold;
    font-size: 5rem;
  }
`;

const Shapes = (props) => {
  return (
    <StyledShapes>
      <p className="page-title">{props.title}</p>
    </StyledShapes>
  );
};

export default Shapes;
