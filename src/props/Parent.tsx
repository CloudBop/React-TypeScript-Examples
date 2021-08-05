import React from "react";
import { Child } from "./Child";

function Parent() {
  const color: string = "red";

  return <Child color={color} />;
}

export default Parent;
