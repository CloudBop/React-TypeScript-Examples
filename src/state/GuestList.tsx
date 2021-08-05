import { useState } from "react";

const GuestList: React.FC = () => {
  // infers type as string
  const [name, setName] = useState("");
  // TS cannot infer from an empty array
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <>
      <h3>Guest List</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
      <ul>
        {guests.map((guest) => (
          <li>{guest}</li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
