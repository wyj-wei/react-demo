import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";

export class search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.searchUsers(values.username);
      }
    });
  };
    
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                // { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="Search user" />)}
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              search
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const searchForm = Form.create({ name: "normal_search" })(search);


export default searchForm;
