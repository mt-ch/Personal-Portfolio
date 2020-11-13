import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInfo from "../functions/getInfo";
import { StyledContact } from "../styled/contact.styled";

const Contact = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    AOS.init();
    GetInfo(setInfo);
  }, []);
  return (
    <StyledContact id='contact'>
      <div
        class="contact-header"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2>(003) SLIDE IN MY DMS</h2>

      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <div className="email">
          <p className="email-header">SAY HI -</p>
          <p>{info.Email}</p>
        </div>

        <a>
          <p className='email-button'>SHOOT A MSG</p>
        </a>

          <div className="socials">
            <a  href='/'>
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
