import React from "react";

const SVG = ({
  style = {},
  width = "24.5",
  className = "",
  viewBox="0 0 24.5 20.16"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <g xmlns="http://www.w3.org/2000/svg" transform="translate(-12 -14)"><g transform="translate(12 14)"><path className="a" d="M47.647,36.2a9.228,9.228,0,0,1-2.657.727,4.638,4.638,0,0,0,2.034-2.558,9.259,9.259,0,0,1-2.937,1.122,4.629,4.629,0,0,0-7.882,4.219,13.129,13.129,0,0,1-9.533-4.833A4.63,4.63,0,0,0,28.1,41.049a4.592,4.592,0,0,1-2.095-.579c0,.02,0,.039,0,.059a4.628,4.628,0,0,0,3.71,4.535,4.643,4.643,0,0,1-2.089.08,4.63,4.63,0,0,0,4.321,3.212A9.337,9.337,0,0,1,25.1,50.271,13.153,13.153,0,0,0,45.352,39.189c0-.2,0-.4-.013-.6A9.379,9.379,0,0,0,47.647,36.2Z" transform="translate(-25.103 -34.028)"/></g></g>
  </svg>
);

export default SVG;
