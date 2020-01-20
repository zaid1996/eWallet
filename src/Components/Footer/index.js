import React from "react";
import { Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./style.css";
const { Footer } = Layout;
class BottomBar extends React.Component {
  render() {
    return (
      <div>
        <Footer className="footer" >
          <div>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions </li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-logo" >
            <img src={require("../Images/facebook_icon.png")} />
            <img src={require("../Images/instagram_icon.png")} />
            <img src={require("../Images/youtube_icon.png")} />
            <img src={require("../Images/twitter_icon.png")} />
            <img src={require("../Images/pinterest_icon.png")} />
            <img src={require("../Images/brand_icon.png")} />
          </div>
          <p>©2019 eWallet limited.All Rights Reserved</p>
        </Footer>
        <Footer className="smallFooter" style={{ textAlign: "center" }}>
          <div>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions </li>
              <li>Privacy Policy</li>
              <li>Contact</li>
              </ul>
          </div>
          <div className="footer-logo" >
            <img src={require("../Images/facebook_icon.png")} />
            <img src={require("../Images/instagram_icon.png")} />
            <img src={require("../Images/youtube_icon.png")} />
            <img src={require("../Images/twitter_icon.png")} />
            <img src={require("../Images/pinterest_icon.png")} />
            <img src={require("../Images/brand_icon.png")} />
          </div>
          <p>©2019 eWallet limited.All Rights Reserved</p>
        </Footer>
      </div>
    );
  }
}

export default BottomBar;
