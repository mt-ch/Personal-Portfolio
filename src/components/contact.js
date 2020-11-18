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
        <ProjectHeader title={"SLIDE IN MY DMS"} />
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
          <h3 className="">SAY HI -</h3>
          {/* <p>{info.Email}</p> */}
          <h3 className="email-header">me@mattc.com</h3>
          {/* <a>
          <p className='email-button' style={{bottom: '-10vh', left: '-18vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-16vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-14vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-12vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-10vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-8vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-6vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-4vw',}}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '-2vw', }}></p>
          <p className='email-button' style={{bottom: '-10vh', left: '0vw', }}></p>
        </a> */}
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
