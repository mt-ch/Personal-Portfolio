import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
    
    /* animation: fadeIn 2s ease;

  .preload-finish {
    opacity: 0;
    pointer-events: none;
  } */

  p {
    font-size: 4rem;
    font-weight: bold;
    color: green;
    text-align: center;
  }

  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;

const PreLoader = () => {
  return (
    <StyledLoader>
        <p>Matthew Chan</p>
    </StyledLoader>
  );
};

export default PreLoader;
