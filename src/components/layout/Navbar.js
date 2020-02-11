import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {" "}
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

//设置默认属性值
Navbar.defaultProps = {
  title: "Github"
};
//定义属性类型
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
