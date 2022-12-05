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
    // axios.get(`http://localhost:3000/api1/search/users2?q=${userInput}`).then(
    //   (response) => {
    //     console.log("success", response.data);
    //   },
    //   (error) => {
    //     console.log("failed", error);
    //   }
    // );
    // axios.get(`https://api.github.com/search/users?q=${userInput}`).then(

    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${userInput}`,
      timeout: 2000,
    }).then(
      (response) => {
        this.props.setUsers(response.data.items);
        console.log("success", response.data);
      },
      (error) => {
        console.log("failed", error);
      }
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
