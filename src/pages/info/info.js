import React, { useState, useEffect } from "react";
import { StyledInfo } from "./info.styled";
import GetInfo from "../../utils/getInfo";
import Layout from "../../components/layout";
import Github from "../../assets/icons/github";
import Linkedin from "../../assets/icons/linkedin";

const Info = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    GetInfo(setInfo);
  }, []);
  return (
    <Layout>
      <StyledInfo>
        <div className="info-header">
          <h1>Get in touch</h1>
          {/* <h1>{info.email}</h1> */}
        </div>
        <div className="info-social">
          <a href="">
            <p>Github</p>
            <Github className={"social-icon"} width={"40"} height={"40"} />
          </a>
          <a href="">
            <p>LinkedIn</p>
            <Linkedin className={"social-icon"} width={"40"} height={"40"} />
          </a>
        </div>
      </StyledInfo>
    </Layout>
  );
};

export default Info;
