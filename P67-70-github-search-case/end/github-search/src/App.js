import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [],
    isFirstTimeShowWelcome: true,
    isLoading: false,
    reqError: "",
  };

  // setUsers = (users) => {
  //   this.setState({ users });
  // };

  setAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search setAppState={this.setAppState} />
          <List {...this.state} />
        </div>
      </div>
    );
  }
}
