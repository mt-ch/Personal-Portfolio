import React, { useState, useEffect } from "react";
import { StyledInfo } from "./info.styled";

import GetInfo from "../../utils/getInfo";

import Cross from "../../assets/icons/cross";
import Github from "../../assets/icons/github";
import Linkedin from "../../assets/icons/linkedin";

const Info = ({ openInfo, setOpenInfo }) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    GetInfo(setInfo);
  }, []);
  return (
    <StyledInfo openInfo={openInfo}>
      <div className="info-header">
        <p>
          <strong>Information</strong>
        </p>
        <a onClick={() => setOpenInfo(!openInfo)}>
          <Cross height={"35"} width={"35"} fill={"black"} />
        </a>
      </div>
      {info.map(infos => (
        <ul className="infoList" key={infos.id}>
          <li>
            <p>{infos.name}</p>
          </li>
          <li>
            <p>{infos.jobTitle}</p>
          </li>
          <li>
            <p>{infos.email}</p>
          </li>
          <li>
            <p>{infos.phoneNumber}</p>
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
      ))}
    </StyledInfo>
  );
};

export default Info;
