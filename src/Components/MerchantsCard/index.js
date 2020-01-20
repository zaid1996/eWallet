import React from "react";
import {Link} from "react-router-dom"
import "./style.css";
import "antd/dist/antd.css";
import { Input, Menu, Row, Col, Divider } from "antd";
import StarRatings from "react-star-ratings";
import { Button } from "antd";
import { Select } from "antd";
import { Item } from "rc-menu";

const { Search } = Input;
const { Option } = Select;
class MerchantsCard extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  render() {
    return (
      <Link to="/savingSimulation">
      <div className="merchant-card-main-div">
        {this.props.preffered ? (
          <img
            src={require("../Images/prefferedstripe1.png")}
            className="merchant-preffered-stripe1"
          ></img>
        ) : (
          ""
        )}
        <div className="merchant-card-inner-main-div">
          <center>
            <img
              className="merchant-brand-imaage"
              src={this.props.image_link}
            ></img>
            <div className="merchant-star-rating">
              <StarRatings
                starRatedColor="rgb(249, 109, 0)"
                numberOfStars={5}
                name="rating"
                starDimension="12px"
                rating={this.props.rating}
              />
            </div>

            <p className="merchant-brand-reviews">
              {this.props.reviews} reviews
            </p>
            <h3 className="merchant-brand-name">{this.props.name}</h3>
            <div className="merchant-location-div">
              <img
                src={require("../Images/location.png")}
                className="merchant-location-logo"
              ></img>
              <h3 className="merchant-brand-name">{this.props.location}</h3>
            </div>
          </center>
        </div>
        {this.props.preffered ? (
          <img
            src={require("../Images/prefferedstripe2.png")}
            className="merchant-preffered-stripe2"
          ></img>
        ) : (
          ""
        )}
      </div>
      </Link>
    );
  }
}

export default MerchantsCard;
