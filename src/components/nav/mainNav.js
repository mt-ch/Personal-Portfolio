import React, { useState, useRef } from "react";
import NavOverlay from "./navOverlay/navOverlay";
import TopNav from "./topNav/topNav";
import { useOnClickOutside } from "./hooks";

import "../../css/App.scss";

// Main nav
const MainNav = ({openInfo, setOpenInfo}) => {
  const [active, setActive] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setActive(false));
  return (
    <div ref={node} style={{ position: "sticky", top: 0, zIndex: 10 }}>
      <TopNav active={active} setActive={setActive} openInfo={openInfo} setOpenInfo={setOpenInfo}/>
      <NavOverlay active={active} setActive={setActive} openInfo={openInfo} setOpenInfo={setOpenInfo}/>
    </div>
  );
};

export default MainNav;

