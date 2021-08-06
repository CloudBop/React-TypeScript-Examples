import { Component } from "react";

interface IUser {
  name: string;
  age: number;
}

interface IUserSearchProps {
  // an array of objects of this shape
  users: IUser[];
}

interface IUserSearchState {
  name: string;
  user: IUser | undefined;
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
