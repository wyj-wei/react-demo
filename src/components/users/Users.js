import React from "react";
import UserItem from "./Useritem";
import { Spin } from "antd";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div style={userStyle}>
      {users.map(item => (
        <UserItem key={item.id} data={item}></UserItem>
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
