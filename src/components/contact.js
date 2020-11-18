import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInfo from "../functions/getInfo";
import { StyledContact } from "../styled/contact.styled";
import ProjectHeader from "./projectHeader";

const Contact = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    AOS.init();
    GetInfo(setInfo);
  }, []);
  return (
    <StyledContact id="contact" className='section-title'>
      <div class="contact-header">
        <ProjectHeader title={"DM ME"} />
      </div>
      
      <div
        class='contact'
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <div className="email">
          <h3 className="email-txt">SAY HI -</h3>
          <h3 className="email-header email-txt">{info.Email}</h3>
        </div>

        <div className="socials">
          <a href="/">
            <p className="socials-link">Github</p>
          </a>
          <a href={info.LinkedIn}>
            <p className="socials-link">LinkedIn</p>
          </a>
        </div>
        
      </div>
      
    </StyledContact>
  );
};

export default Contact;
