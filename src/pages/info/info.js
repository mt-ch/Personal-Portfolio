import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  padding: 1em;
  background-color: white;
  z-index: 99;
  border-bottom: 1px solid black;
  transform: ${({ openInfo }) =>
    openInfo ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.75s ease-in-out;

  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  p {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }

  li {
    line-height: 1.5;

    svg {
      margin: 10px 10px 0 0;
    }
  }
`;

async function GetInfo(setInfo) {
  const parseJSON = resp => (resp.json ? resp.json() : resp);
  const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
    return parseJSON(resp).then(resp => {
      throw resp;
    });
  };
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const infos = await fetch("http://localhost:1337/infos", {
      method: "GET",
      headers: headers
    })
      .then(checkStatus)
      .then(parseJSON);
    return setInfo(infos);
  } catch (error) {
    return console.error(error);
  }
}

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
          <svg x="0px" y="0px" viewBox="0 0 22.88 22.88">
            <path
              d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
      l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
      c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
      c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"
            ></path>
          </svg>
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
              <svg width="35" height="35" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a href="">
              <svg width="35" height="35" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </li>
        </ul>
      ))}
    </StyledInfo>
  );
};

export default Info;
