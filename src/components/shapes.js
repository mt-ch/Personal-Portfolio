import React, { Children } from "react";
import styled from "styled-components";

export const StyledShapes = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid black 1px;

  /* background: linear-gradient(
    143deg,
    #ff4242,
    #faa018,
    #56be3b,
    #c496ff,
    #f153ef
  );
  background-size: 1000% 1000%;

  -webkit-animation: AnimationName 16s ease infinite;
  -moz-animation: AnimationName 16s ease infinite;
  animation: AnimationName 16s ease infinite;

  @keyframes AnimationName {
    0% {
      background-position: 7% 0%;
    }
    50% {
      background-position: 94% 100%;
    }
    100% {
      background-position: 7% 0%;
    }
  } */

  .page-title {
    color: black;
    font-weight: bold;
    font-size: 5rem;
  }
`;

const Shapes = (props) => {
  return (
    <StyledShapes>
      <a href="#footer">
        <p className="page-title">{props.title}</p>
      </a>
    </StyledShapes>
  );
};

export default Shapes;
