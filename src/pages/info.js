import React, { useState, useEffect } from "react";
import { StyledInfo } from "../styled/info.styled";
import GetInfo from "../functions/getInfo";
import Layout from "../components/layout";
import Github from "../assets/icons/github";
import Linkedin from "../assets/icons/linkedin";

const Info = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    GetInfo(setInfo);
  }, []);
  return (
    <Layout isHome={false} color={'#212121'} text={'white'}>
      <StyledInfo>
        <div className="info-header">
          <h1>Get in touch</h1>
          <p><strong>{info.Email}</strong></p>
        </div>
        <div className="info-social">
          <a href="">
            <p>Github</p>
            <Github className={"social-icon"} width={"40"} height={"40"} fill={'white'} />
          </a>
          <a href="">
            <p>LinkedIn</p>
            <Linkedin className={"social-icon"} width={"40"} height={"40"} fill={'white'}/>
          </a>
        </div>
        <div className="info-about">
          <p>{info.About}</p>
        </div>
      </StyledInfo>
    </Layout>
  );
};

export default Info;
