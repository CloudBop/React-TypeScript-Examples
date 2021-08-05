import React from "react";

interface ChildProps {
  color: string;
}

function Child({ color }: ChildProps) {
  return <div>Hi there.</div>;
}

export { Child };
