import React, { Component } from "react";
import { Row, Col } from "antd";
import "../QuestionBox/style.css";

import { createRequire } from "module";

class QuestionBox extends Component {
  state = {};
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                    <input
                      type="checkbox"
                      id={this.props.id}
                      name={this.props.name}
                      value={this.props.id}
                    />
                    <label for={this.props.id}>◦ {this.props.text}</label>
                  </div>
    );
  }
}

export default QuestionBox;
