import React from "react";
import PropTypes from "prop-types";

const Useritem = ({ data: { avatar_url, html_url, name, login } }) => {
  //   let { avatar_url, html_url, login } = props.data;
  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      /> */}
      <h3>{login || name}</h3>
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
