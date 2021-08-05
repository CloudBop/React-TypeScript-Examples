import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  // children:
}

// problem
// TS doesn't know this is React, JSX can be Vue
function Child({
  color,
  onClick,
}: // children must be defined interface ot TS will complain in this syntax
ChildProps) {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
// should be valid, but typescript won't like it. propery displayName does not exist on Child()
// VSCode won't provide intelisense options
// Child.displayName;
// but it can be set
Child.displayName = "Child";

export { Child };

// Whereas...
// implies we're in React, won't need to put children in interface
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
      {children}
    </div>
  );
};
// this is understood and provided by intelisense
ChildAsFC.displayName = "ChildAsFC";

// const test = ChildAsFC.displayName;

ChildAsFC.defaultProps = {
  color: "blue",
};
