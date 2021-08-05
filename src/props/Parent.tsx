import React from "react";
import { Child } from "./Child";

function Parent() {
  const color: string = "red";

  const onClick = () => {
    console.log("do something");
  };

  return <Child color={color} onClick={onClick} />;
}

export default Parent;
