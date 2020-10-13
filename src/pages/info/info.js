// import React, { PureComponent } from "react";
// import styled from "styled-components";

// const StyledInfo = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 30%;
//   padding: 1em;
//   background-color: red;
//   z-index: 99;
// `;

// export class info extends PureComponent {

//   state = {
//     infos: [],
//     error: null
//   };

//   // Fetch portfolio info
//   componentDidMount = async () => {
//     // Parses the JSON returned by a network request
//     const parseJSON = resp => (resp.json ? resp.json() : resp);

//     // Checks if a network request came back fine, and throws an error if not
//     const checkStatus = resp => {
//       if (resp.status >= 200 && resp.status < 300) {
//         return resp;
//       }
//       return parseJSON(resp).then(resp => {
//         throw resp;
//       });
//     };
//     const headers = {
//       "Content-Type": "application/json"
//     };

//     try {
//       const infos = await fetch("http://localhost:1337/infos", {
//         method: "GET",
//         headers: headers
//       })
//         .then(checkStatus)
//         .then(parseJSON);
//       this.setState({ infos });
//     } catch (error) {
//       this.setState({ error });
//     }
//   };

//   render() {
//     const { error, info } = this.state;

//     // Print errors if any
//     if (error) {
//       return <div>An error occured: {error.message}</div>;
//     }

//     return (
//       <StyledInfo openInfo={openInfo}>
//         <p>Information</p>
//         {this.state.infos.map(info => (
//           <ul className="infoList" key={info.id}>
//             <li>
//               <p>{info.name}</p>
//             </li>
//             <li>
//               <p>{info.jobTitle}</p>
//             </li>
//             <li>
//               <p>{info.email}</p>
//             </li>
//             <li>
//               <p>{info.phoneNumber}</p>
//             </li>
//           </ul>
//         ))}
//       </StyledInfo>
//     );
//   }
// }

// export default info;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  position: absolute;
  width: 100vw;
  height: 30%;
  padding: 1em;
  background-color: red;
  z-index: 99;
`;

async function GetInfo() {
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
    return infos;
  } catch (error) {
    return console.error(error);
  }
}

const Info = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const res = GetInfo();
    setInfo(res);
    console.log(res)
  });
  return (
    <StyledInfo>
      <p>Information</p>
      {/* {info.map(infos => (
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
        </ul>
      ))} */}
    </StyledInfo>
  );
};

export default Info;
