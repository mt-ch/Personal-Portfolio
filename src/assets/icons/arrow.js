import React from "react";

function Arrow(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      x="0px"
      y="0px"
      viewBox="0 0 476.213 476.213"
    >
      <polygon
        points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
	345.606,368.713 476.213,238.106 "
        fill={props.fill}
      />
    </svg>
  );
}

export default Arrow;
