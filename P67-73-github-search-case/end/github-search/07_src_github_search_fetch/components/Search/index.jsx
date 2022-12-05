import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  search = async () => {
    // 1. get the user input
    const {
      keyWordElement: { value: userInput },
    } = this;
    PubSub.publish("atguigu", {
      isFirstTimeShowWelcome: false,
      isLoading: true,
    });

    // 2. search fetch optimize
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${userInput}`
      );
      const data = await response.json();
      PubSub.publish("atguigu", {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
      console.log(error);
      PubSub.publish("atguigu", { isLoading: false, reqError: error.message });
    }
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
