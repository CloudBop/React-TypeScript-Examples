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

  // arrow fns are bound to this
  onClick = () => {
    const user = this.props.users.find((user) => user.name === this.state.name);
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        User Search
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {
            // typescript will warn of undefined errors
            user && user.name
          }
          {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
