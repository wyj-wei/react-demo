import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { getUserList, getSearchList } from "./api/api";
export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount() {
    let params = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    };
    this.setState({
      loading: true
    });
    getUserList(params).then(res => {
      this.setState({
        users: res,
        loading: false
      });
    });
  }
  searchUsers = text => {
    let params = {
      q: text,
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    };
    this.setState({
      loading: true
    });
    getSearchList(params).then(res => {
      this.setState({
        users: res.items,
        loading: false
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github" icon="fa fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
