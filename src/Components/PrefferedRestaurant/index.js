import React from "react";
import logo from "../../logo.svg";
import "./style.css";
import "antd/dist/antd.css";
import { Input, Menu, Row, Col, Divider } from "antd";
import StarRatings from "react-star-ratings";
import { Button } from "antd";
import { Select } from "antd";
import { Item } from "rc-menu";

const { Search } = Input;
const { Option } = Select;
class prefferedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  render() {
    return (
      <div className="res-card-main-div">
        <img
          src={require("../Images/prefferedstripe1.png")}
          className="res-preffered-stripe1"
        ></img>

        <div className="res-card-inner-main-div">
          <center>
            <img className="res-brand-imaage" src={this.props.image_link}></img>
          </center>
        </div>

        <img
          src={require("../Images/prefferedstripe2.png")}
          className="res-preffered-stripe2"
        ></img>
        <div className="simulation-res-info-div">
          <img
            src={require("../Images/linkIMG.png")}
            className="simulation-res-info-upload-img"
          ></img>
          <h3 className="simulation-res-info-name">{this.props.name}</h3>
          <div>
            <img
              src={require("../Images/star.png")}
              className="simulation-res-info-upload-img"
            ></img>
            <span className="simulation-res-info-rating">
              {this.props.rating}
            </span>
          </div>
        </div>
        <div>
          <img
            src={require("../Images/location.png")}
            className="simulation-res-info-upload-img"
          ></img>
          <span className="simulation-res-info-location">
            Off Jalan Bangsar, 59100 Kuala Lampur
          </span>
        </div>
      </div>
    );
  }
}

export default prefferedRestaurant;
