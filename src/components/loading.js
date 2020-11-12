import React, { useEffect } from "react";
import {useCountUp} from "react-countup";
import styled from 'styled-components';

const StyledLoading = styled.div`
    height: 100vh;
    background-color: #212121;
    p{
        position: absolute;
        z-index: 10;
        font-size: 25vw;
        bottom: 0;
        padding: 4rem;

    }
    h5{
        position: absolute;
        z-index: 10;
        font-size: 5vw;
        right: 0;
        padding: 4rem;
    }
    .loader{
        position: absolute;
        background-color: red;
        top: 0;
        z-index:0;
        height: 100vh;
        width: ${({ countUp }) => countUp};
    }
`

const Loading = () => {
    const { countUp } = useCountUp({ end: 100, start: 0, duration: 7, suffix: '%' });
  return (
    <StyledLoading countUp={countUp}>
      <h5>Patience is key</h5>
      <p>{countUp}</p>
      <div className='loader'></div>
    </StyledLoading>
  );
};

export default Loading;
