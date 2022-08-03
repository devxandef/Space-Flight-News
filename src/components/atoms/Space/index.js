import React from "react";
import * as Style from "./styles";

// L - left Space
// R - right Space
// t - top Space
// b - bottom space

function Space({ L, R, T, B }) {
  return (
    <Style.Space L={L ? L : 0} R={R ? R : 0} T={T ? T : 0} B={B ? B : 0} />
  );
}

export default Space;
