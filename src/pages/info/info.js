import React, { useState, useEffect } from "react";
import { StyledInfo } from "./info.styled";

import GetInfo from "../../utils/getInfo";

import Shapes from '../../components/shapes';
import Github from "../../assets/icons/github";
import Linkedin from "../../assets/icons/linkedin";

import Footer from '../../components/footer/footer'

const Info = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    GetInfo(setInfo);
  }, []);
  return (
    <StyledInfo>
      <Shapes title={'Info'}/>
      <ul className="info-list" key={info.id}>
        <li>
          <p>{info.name}</p>
        </li>
        <li>
          <p>{info.jobTitle}</p>
        </li>
        <li>
          <p>{info.email}</p>
        </li>
        <li>
          <p>{info.phoneNumber}</p>
        </li>
        <li>
          <a href="">
            <Github className={"social-icon"} width={"40"} height={"40"} />
          </a>
          <a href="">
            <Linkedin className={"social-icon"} width={"40"} height={"40"} />
          </a>
        </li>
      </ul>
      <Footer/>
    </StyledInfo>
  );
};

export default Info;
