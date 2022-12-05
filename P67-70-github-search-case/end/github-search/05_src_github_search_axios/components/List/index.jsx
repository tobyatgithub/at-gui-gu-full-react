import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { users, isFirstTimeShowWelcome, isLoading, reqError } = this.props;
    return (
      <div className="row">
        {isFirstTimeShowWelcome ? (
          <h2>Type in keywords to search github users.</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : reqError ? (
          <h2 style={{ color: "red" }}>{reqError.message}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    alt="github avatar"
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
