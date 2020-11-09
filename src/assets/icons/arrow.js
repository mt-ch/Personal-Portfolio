import React from "react";

function Arrow(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      x="0px"
      y="0px"
      viewBox="3 3 17 17"
    >
      <path
        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
        fill={props.fill}
      />
    </svg>
  );
}

export default Arrow;
