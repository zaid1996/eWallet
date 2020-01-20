import React, { Component } from "react";
import { Row, Col } from "antd";
import "../RatingCard/style.css";

import { createRequire } from "module";

class RatingCard extends Component {
  state = {};
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="card-box" >
        <center><p className='title'>{this.props.title}</p>
        <p className='value'>{this.props.value}</p></center>
      </div>
    );
  }
}

export default RatingCard;
