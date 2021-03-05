import React from "react";
import { RevealLoadingTitle } from "../components/animations";
import { StyledLoading } from "../styled/loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <div className="wrapper">
        <div class="loader-text">
          <RevealLoadingTitle
            text={"LOADING"}
            className={"loader-letters"}
            delay={0.5}
            letterClass={"loader-letter"}
          />
          <div className="loading-line"></div>
          <RevealLoadingTitle
            text={"mt-ch"}
            className={"loader-letters-name"}
            delay={0.5}
            letterClass={"loader-letter"}
          />
        </div>
        <div className="loading-in"></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
