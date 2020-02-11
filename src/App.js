import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import { getUserList } from "./api/api";
export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    getUserList().then(res => {
      this.setState({
        users: res,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github" icon="fa fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
