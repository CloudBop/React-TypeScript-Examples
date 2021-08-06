import ReactDOM from "react-dom";
import UserSearch from "./classes/UserSearch";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
