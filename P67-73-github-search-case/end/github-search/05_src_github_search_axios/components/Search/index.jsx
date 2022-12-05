import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  search = () => {
    // 1. get the user input

    // method 1 - common method via chain
    // const userInput = this.keyWordElement.value;

    // method 2 - continuous deconstruct with rename
    const {
      keyWordElement: { value: userInput },
    } = this;
    // console.log(userInput);

    this.props.setAppState({ isFirstTimeShowWelcome: false, isLoading: true });

    // 2. send request
    // you can using proxy to bypass the api lock out issue.
    // axios.get(`http://localhost:3000/api1/search/users2?q=${userInput}`).then(
    //   (response) => {
    //     console.log("success", response.data);
    //   },
    //   (error) => {
    //     console.log("failed", error);
    //   }
    // );

    // or, we can use github api directly.
    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${userInput}`,
      timeout: 2000,
    }).then(
      (response) => {
        this.props.setAppState({
          isLoading: false,
          users: response.data.items,
        });
        console.log("success", response.data);
      },
      (error) => {
        this.props.setAppState({ isLoading: false, reqError: error });
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
