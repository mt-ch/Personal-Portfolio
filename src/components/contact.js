import React, { useState, useEffect } from "react";
import GetInfo from "../functions/getInfo";
import { StyledContact } from "../styled/contact.styled";

const Contact = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    GetInfo(setInfo);
  }, []);
  return (
    <StyledContact id="contact" className="section-title">
        <div className="email">
          <h3>SAY HI -</h3>
          <h3 className="email-txt">{info.Email}</h3>
        </div>
        <div className="socials">
          <a href={info.Github}>
            <p className="socials-link">Github</p>
          </a>
          <a href={info.LinkedIn}>
            <p className="socials-link">LinkedIn</p>
          </a>
        </div>
    </StyledContact>
  );
};

export default Contact;
