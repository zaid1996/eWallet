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
class DiscountedWalletCard extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  render() {
    return (
      <div className="discounted-card-main-div">
        {this.props.preffered ? (
          <img
            src={require("../Images/prefferedstripe1.png")}
            className="discounted-preffered-stripe1"
          ></img>
        ) : (
          ""
        )}
        {this.props.bestchoice ? (
          <img
            src={require("../Images/bestchoicestripe.png")}
            className="discounted-preffered-stripe1"
          ></img>
        ) : (
          ""
        )}
        <div className="discounted-card-inner-main-div">
          <center>
            <img
              className="discounted-brand-imaage"
              src={this.props.image_link}
            ></img>

            <p className="discounted-brand-name">{this.props.name}</p>
            <div className="discounted-sale-logo-main-div">
              <img
                src={require("../Images/sale.png")}
                className="discounted-sale-img"
              ></img>
              <p className="discounted-sale-img-salepercentage">
                {this.props.salepercentage}
              </p>
            </div>

            <p className="discounted-salepercentage">
              {this.props.salepercentage} Discount
            </p>
            <Button className="btn-see-promotions">e-wallet Details</Button>
          </center>
        </div>
        {this.props.preffered ? (
          <img
            src={require("../Images/prefferedstripe2.png")}
            className="discounted-preffered-stripe2"
          ></img>
        ) : (
          ""
        )}
        {this.props.bestchoice ? (
          <img
            src={require("../Images/bestchoicestripe2.png")}
            className="discounted-preffered-stripe2"
          ></img>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DiscountedWalletCard;
