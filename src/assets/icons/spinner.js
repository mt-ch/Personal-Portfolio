import React from "react";

function Spinner(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
    >
      <path
        d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
      l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
      c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
      c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"
        fill={props.fill}
      />
      <path
        d="M 250, 250m -250, 0a 250,250 0 0,1 500,0a 250,250 0 0,1 -500,0"
        fill="none"
        id="intro-textcircle"
      ></path>
      <text dy="70" textLength="300%">
        <textPath textLength="300%">
          High speed matters!
        </textPath>
      </text>
    </svg>
  );
}

export default Spinner;
