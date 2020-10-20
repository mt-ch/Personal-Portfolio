import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const StyledFade = styled.div`
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

const Fade = ({ loading, children }) => {
  const [shouldRender, setRender] = useState(loading);

  useEffect(() => {
    if (loading) setRender(true);
  }, [loading]);

  const onAnimationEnd = () => {
    if (!loading) setRender(false);
  };

  return (
    shouldRender && (
      <StyledFade
        style={{ animation: `${loading ? "fadeIn" : "fadeOut"} 1s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </StyledFade>
    )
  );
};

export default Fade;
