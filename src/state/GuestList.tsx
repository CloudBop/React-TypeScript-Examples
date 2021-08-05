import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <>
      <h3>Guest List</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add Guest</button>
    </>
  );
};

export default GuestList;
