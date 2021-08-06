import { Component } from "react";

interface IUserSearchProps {
  users: {
    // an array of objects of this shape
    name: string;
    age: number;
  }[];
}

class UserSearch extends Component<IUserSearchProps> {
  state = {
    name: "",
    user: undefined,
  };

  // render() {
  //   this.state.name;
  // }
}

export default UserSearch;
