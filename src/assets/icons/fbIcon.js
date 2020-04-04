import React from "react";

const SVG = ({
  style = {},
  width = "24.5",
  className = "",
  viewBox="0 0 10.5 24.16"
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
    <g xmlns="http://www.w3.org/2000/svg" transform="translate(-16 -11)"><path className="a" d="M48.117,33.386H44.932V45.054H40.107V33.386H37.812v-4.1h2.295V26.632c0-1.9.9-4.869,4.868-4.869l3.574.015v3.98H45.956a.982.982,0,0,0-1.024,1.118v2.413h3.606Z" transform="translate(-21.812 -10.763)"/></g>
  </svg>
);

export default SVG;
