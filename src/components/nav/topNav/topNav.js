import React from "react";
// import { bool, func } from "prop-types";
import { Link } from 'react-router-dom';
import { StyledTopNav } from "./topNav.styled";

// Top navigation
const TopNav = ({ active, setActive, openInfo, setOpenInfo }) => {
  // Set state
  // const [nav, setNav] = useState("Navigation");
  // const mediaQuery = window.matchMedia("(min-width: 576px");
  // const openNav = () => setActive(!active);
  // const closeInfo = () => setOpenInfo(!openInfo);

  // async function handleNav() {
  //   openNav();
  //   if (openInfo) {
  //     closeInfo();
  //   }
  // }

  // function handleWindowResize(e) {
  //   // Check if the media query is true
  //   if (e.matches) {
  //     setActive(false);
  //   } else return;
  // }

  // mediaQuery.addListener(handleWindowResize);
  // handleWindowResize(mediaQuery);

  // useEffect(() => {
  //   // Change state of navigation text
  //   if (active) {
  //     setNav("Close");
  //   } else if (!active) {
  //     setNav("Navigation");
  //   }
  // });

  return (
    <StyledTopNav>
      <Link className="title-link" to="/">
        <p className="title-text">mc</p>
      </Link>
      {/* <a className="nav-mobile" onClick={handleNav}>
        <p className="nav-title">{nav}</p>
      </a> */}
      <ul className="nav-desktop">
        <li>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to="/info">
            <p>Info</p>
          </Link>
        </li>
      </ul>
    </StyledTopNav>
  );
};

// // Validation of changing state
// TopNav.propTypes = {
//   active: bool.isRequired,
//   setActive: func.isRequired
// };

export default TopNav;
