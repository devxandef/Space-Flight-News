import React from "react";
import * as Style from "./styles";

function Container(props) {
  return <Style.Container>{props.children}</Style.Container>;
}

export default Container;
