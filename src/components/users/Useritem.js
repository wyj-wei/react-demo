import React from "react";
import PropTypes from "prop-types";

const Useritem = ({ data: {  html_url, login } }) => {
  //   let { avatar_url, html_url, login } = props.data;
  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      /> */}
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        more
      </a>
    </div>
  );
};

Useritem.propTypes = {
  data: PropTypes.object.isRequired
};

export default Useritem;
