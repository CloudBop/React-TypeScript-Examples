import { Component } from "react";

interface IUserSearchProps {
  users: {
    // an array of objects of this shape
    name: string;
    age: number;
  }[];
}

interface IUserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<IUserSearchProps> {
  state: IUserSearchState = {
    name: "",
    user: undefined,
  };

  // render() {
  //   this.state.name;
  // }
}

export default UserSearch;
