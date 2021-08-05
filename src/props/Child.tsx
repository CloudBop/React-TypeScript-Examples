import React from "react";

interface ChildProps {
  color: string;
}

function Child(props: ChildProps) {
  return <div>Hi there.</div>;
}

export { Child };
