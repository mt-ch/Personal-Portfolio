import React from "react";
import styled from "styled-components";

import GetSocials from '../utils/getSocials';

import Github from "../assets/icons/github";
import Linkedin from "../assets/icons/linkedin";

const StyledSocials = styled.div`
  display: flex;
  justify-content: center;

  .social-icon {
    transition: all 1s;
  }

  a {
    margin: 0 10px 0 10px;
  }

  .social-icon:hover {
    fill: #9570c5;
    width: 45px;
    height: 45px;
    transition: all 1s;
  }
`;


const socialButtons = () => {
  GetSocials();
  return (
    <StyledSocials>
      <a href="">
        <Github className={'social-icon'} width={"40"} height={"40"} />
      </a>
      <a href="">
        <Linkedin className={'social-icon'} width={"40"} height={"40"} />
      </a>
    </StyledSocials>
  );
};

export default socialButtons;
