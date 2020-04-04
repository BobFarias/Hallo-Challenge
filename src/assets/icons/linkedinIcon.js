import React from "react";

const SVG = ({
  style = {},
  width = "24.5",
  className = "",
  viewBox="0 0 24.5 24.16"
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
  <g xmlns="http://www.w3.org/2000/svg" transform="translate(-10.127 -10)"><g transform="translate(10.127 10)"><path className="a" d="M51.27,38.147V47.1H46.081V38.747c0-2.1-.749-3.528-2.628-3.528a2.838,2.838,0,0,0-2.661,1.9,3.551,3.551,0,0,0-.172,1.264V47.1H35.432s.07-14.141,0-15.6h5.189V33.7c-.01.017-.025.034-.034.051h.034V33.7A5.152,5.152,0,0,1,45.3,31.125c3.414,0,5.973,2.23,5.973,7.022ZM30,23.969a2.7,2.7,0,1,0-.068,5.393h.034A2.7,2.7,0,1,0,30,23.969ZM27.376,47.1h5.187v-15.6H27.376Z" transform="translate(-27.068 -23.969)"/></g></g>
  </svg>
);

export default SVG;
