import React from "react";

function Logo({ width, height, src }) {
  return <img alt=" " style={{ width, height }} src={src}></img>;
}

export default Logo;
