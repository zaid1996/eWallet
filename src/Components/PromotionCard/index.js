import React from 'react'
import './style.css'
import {Link} from "react-router-dom"
import {Button, Card} from 'antd'
import CountDownTimer from "../CountDownTimer"
class PromotionCard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount=()=>{
        console.log("DATA", this.props.image_link)
    }
    render(){
        return(
            <center>
            <img
              className="ewallet-brand-imaage"
              src={this.props.image_link}
            ></img>
            <h3 className="ewallet-brand-name">
              {" "}
             Grab UpTo {this.props.cashback}% Cashback
            </h3>
            <CountDownTimer
            sale_date={this.props.sale_date}
            />
            <p className="ewallet-brand-reviews">1240 reviews</p>
            <Button block className="btn-see-promotions">
              See Promotions
            </Button>
            <Button className="btn-view-ewallet-details" block>
            <Link to="/walletProfile">View e-Wallet Details</Link>
            </Button>
          </center>
        );
    }
}

export default PromotionCard