import React, { useState, useRef } from "react";
import TopNav from "./topNav/topNav";

// Main nav
const MainNav = () => {
  // const [active, setActive] = useState(false);
  // const node = useRef();
  // useOnClickOutside(node, () => setActive(false));
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
      <TopNav/>
      {/* <NavOverlay active={active} setActive={setActive} openInfo={openInfo} setOpenInfo={setOpenInfo}/> */}
    </div>
  );
};

export default MainNav;

