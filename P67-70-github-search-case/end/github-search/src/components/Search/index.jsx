import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  search = () => {
    // get the user input

    // method 1 - common method via chain
    // const userInput = this.keyWordElement.value;

    // method 2 - continuous deconstruct with rename
    const {
      keyWordElement: { value: userInput },
    } = this;

    console.log(userInput);

    // send request
    axios.get(`https://api.github.com/search/users?q=${userInput}`).then(
      (response) => {},
      (error) => {}
    );
  };

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => (this.keyWordElement = c)}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
