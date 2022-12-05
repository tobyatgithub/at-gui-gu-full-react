import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  search = () => {
    // 1. get the user input
    const {
      keyWordElement: { value: userInput },
    } = this;
    PubSub.publish("atguigu", {
      isFirstTimeShowWelcome: false,
      isLoading: true,
    });

    // 2. search
    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${userInput}`,
      timeout: 2000,
    }).then(
      (response) => {
        PubSub.publish("atguigu", {
          isLoading: false,
          users: response.data.items,
        });
        console.log("success", response.data);
      },
      (error) => {
        PubSub.publish("atguigu", {
          isLoading: false,
          reqError: error.message,
        });
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
