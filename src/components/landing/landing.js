import React, { useEffect, useState } from "react";
import { StyledLanding } from "./landing.styled";
import Arrow from "../../assets/icons/arrow";
import GetLanding from '../../utils/getLanding';

const Landing = () => {
  const [landing, setLanding] = useState([]);
  useEffect(() => {
    GetLanding(setLanding);
  }, []);
  return (
    <StyledLanding>
      <div className="shapes" />
      <div className="sub-text">
        <p>{landing.subText}</p>
        <a className="explore" href="">
          <p>Explore</p>
          <Arrow width={"37"} height={"37"} />
        </a>
      </div>
    </StyledLanding>
  );
};

export default Landing;