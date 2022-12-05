import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = { users: [] };
  setUsers = (users) => {
    this.setState({ users });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search setUsers={this.setUsers} />
          <List users={this.state.users} />
        </div>
      </div>
    );
  }
}
