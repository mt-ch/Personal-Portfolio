import React, { useState, useRef } from "react";
import NavOverlay from "./navOverlay/navOverlay";
import TopNav from "./topNav/topNav";
import { useOnClickOutside } from "./hooks";

import "../../css/App.scss";

// Main nav
const MainNav = () => {
  const [active, setActive] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setActive(false));
  return (
    <div ref={node} style={{ position: "sticky", top: 0, zIndex: 10 }}>
      <TopNav active={active} setActive={setActive} />
      <NavOverlay active={active} setActive={setActive} />
    </div>
  );
};

export default MainNav;

