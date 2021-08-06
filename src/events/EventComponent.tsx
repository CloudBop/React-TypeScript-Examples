import React from "react";

const EventComponent: React.FC = () => {
  // TS needs e to by typed
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) =>
    console.log(`Im being dragged: ${e}`);
  return (
    <div>
      <input
        onChange={
          onChange
          // TS handles inline events ok
          // (e) => console.log(e)
        }
        type="text"
      />

      <div draggable onDragStart={onDragStart}>
        DragMe
      </div>
    </div>
  );
};

export default EventComponent;
