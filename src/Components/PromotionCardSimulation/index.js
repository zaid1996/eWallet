import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import { Button, Card } from "antd";
import StarRatings from "react-star-ratings";

import CountDownTimer from "../CountDownTimer";
class PromotionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log("DATA", this.props.image_link);
  };
  render() {
    return (
      <center>
        <div className="simulation-promotion-main div">
          <img
            className="ewallet-brand-imaage"
            src={this.props.image_link}
          ></img>
          <h3 className="ewallet-brand-name"> Grab UpTo</h3>
          <h3 className="ewallet-brand-name">
            {" "}
            {this.props.cashback}% Cashback
          </h3>
          <CountDownTimer sale_date={this.props.sale_date} />
          <div className="simulation-promo-rating2">
            <StarRatings
              starRatedColor="rgb(249, 109, 0)"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              rating={this.props.rating}
            />
          </div>

          <p className="ewallet-brand-reviews">{this.props.reviews} reviews</p>
          <Button block className="btn-see-promotions">
            See Promotions
          </Button>
          <Button className="btn-view-ewallet-details" block>
            <Link to="/walletProfile">View e-Wallet Details</Link>
          </Button>
        </div>
      </center>
    );
  }
}

export default PromotionCard;
