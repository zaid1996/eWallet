import React from "react";
import logo from "../Images/logo.png";
import home_org from "../Images/home_org.png";
import home_icon from "../Images/home_icon.png";
import promo_org from "../Images/promo_org.png";
import promo_icon from "../Images/promo_icon.png";
import merchant_org from "../Images/merchant_org.png";
import merchant_icon from "../Images/merchant_icon.png";
import compare_org from "../Images/compare_org.png";
import compare_icon from "../Images/compare_icon.png";
import search_org from "../Images/search_org.png";
import search_icon from "../Images/search_icon.png";
import wallet_org from "../Images/wallet_org.png";
import wallet_icon from "../Images/wallet_icon.png";
import "antd/dist/antd.css";
import { Input, Menu, Row, Col } from "antd";
import "./style.css";
import { Link, Redirect } from "react-router-dom";

const { Search } = Input;
let homeSrc = home_icon;
let promoSrc = promo_icon;
let merchantSrc = merchant_icon;
let compareSrc = compare_icon;
let searchSrc = search_icon;
let walletSrc = wallet_icon;
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconChange: false,
      iconChange2: true
    };
  }

  componentDidMount = () => {
    if (this.props.selected == "1") {
      homeSrc = home_org;
    }

    if (this.props.selected == "2") {
      promoSrc = promo_org;
    }

    if (this.props.selected == "3") {
      merchantSrc = merchant_org;
    }

    if (this.props.selected == "4") {
      compareSrc = compare_org;
    }

    if (this.props.selected == "5") {
      searchSrc = search_org;
    }
  };

  changeIcon = e => {
    if (e == "home") {
      localStorage.setItem("selected", "1");
      homeSrc = home_org;
      promoSrc = promo_icon;
      merchantSrc = merchant_icon;
      compareSrc = compare_icon;
      searchSrc = search_icon;
      compareSrc = compare_icon;
      walletSrc = wallet_icon;
    }

    if (e == "promo") {
      localStorage.setItem("selected", "2");
      promoSrc = promo_org;
      homeSrc = home_icon;
      merchantSrc = merchant_icon;
      compareSrc = compare_icon;
      searchSrc = search_icon;
      compareSrc = compare_icon;
      walletSrc = wallet_icon;
    }

    if (e == "merchant") {
      localStorage.setItem("selected", "3");
      merchantSrc = merchant_org;
      promoSrc = promo_icon;
      homeSrc = home_icon;
      compareSrc = compare_icon;
      searchSrc = search_icon;
      walletSrc = wallet_icon;
    }

    if (e == "compare") {
      localStorage.setItem("selected", "4");
      compareSrc = compare_org;
      merchantSrc = merchant_icon;
      promoSrc = promo_icon;
      homeSrc = home_icon;
      searchSrc = search_icon;
      walletSrc = wallet_icon;
    }

    if (e == "search") {
      localStorage.setItem("selected", "5");
      searchSrc = search_org;
      merchantSrc = merchant_icon;
      promoSrc = promo_icon;
      homeSrc = home_icon;
      compareSrc = compare_icon;
      walletSrc = wallet_icon;
    }

    if (e == "wallet") {
      localStorage.setItem("selected", "6");
      walletSrc = wallet_org;
      merchantSrc = merchant_icon;
      promoSrc = promo_icon;
      homeSrc = home_icon;
      searchSrc = search_icon;
      compareSrc = compare_icon;
    }

    this.setState({
      iconChange: true
    });
  };
  openNav = () => {document.getElementById("mySidepanel").style.width = "250px"}

  closeNav= () => {document.getElementById("mySidepanel").style.width = "0"}

  render() {
    let siteLogo = <img className="App-logo" src={logo} />;
    return (
      <div style={{ backgroundColor: "#f2f2f2", textAlign: "center" }}>
        <Row>
          <Col xs={6} sm={8} md={8} lg={8} xl={8}>
            {siteLogo}
          </Col>
          <div className="topMain" style={{ padding: "20px" }}>
            <Col xs={18} sm={8} md={8} lg={8} xl={8}>
              <Search
                className="topSearch"
                placeholder="Search"
                onSearch={value => console.log(value)}
                style={{ width: "95%" }}
              />
            </Col>
            <Col xs={0} sm={8} md={8} lg={8} xl={8}>
              <img
                style={{ height: "3vmin" }}
                src={require("../Images/notification.png")}
              />
              <img
                style={{
                  height: "4vmin",
                  marginLeft: "30px"
                }}
                src={require("../Images/profile.png")}
              />
            </Col>
          </div>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={0} lg={24}>
            <Menu
              className="subNav"
              mode="horizontal"
              selectedKeys={[this.props.selected]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item onClick={e => this.changeIcon("home")} key="1">
                <Link to="/">
                  <img src={homeSrc} />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item onClick={e => this.changeIcon("promo")} key="2">
              <Link to="/promotions">
                  <img src={promoSrc} />
                  Promotions
                </Link>
              </Menu.Item>
              <Menu.Item onClick={e => this.changeIcon("merchant")} key="3">
              <Link to="/merchants">
                  <img src={merchantSrc} />
                  Merchants
                </Link>
              </Menu.Item>
              <Menu.Item onClick={e => this.changeIcon("compare")} key="4">
                <Link to="/compare">
                  <img src={compareSrc} />
                  Compare
                </Link>
              </Menu.Item>
              <Menu.Item onClick={e => this.changeIcon("search")} key="5">
                <Link to="/smartSearch">
                  <img src={searchSrc} />
                  Smart Search
                </Link>
              </Menu.Item>
              <Menu.Item onClick={e => this.changeIcon("wallet")} key="6">
                <img src={walletSrc} />
                e-Wallet Guide
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Row style={{ padding: "10px" }} className="mobileNav">
        <div id="mySidepanel" class="sidepanel">
          <a class="closebtn" onClick={this.closeNav}>
            ×
          </a>
          <Link to="/">Home</Link>
          <Link to="/promotions" >Promotion</Link>
          <Link to="/merchants">Merchants</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/smartSearch">Smart Search</Link>
          <Link >e-Wallet Guide</Link>
        </div>
          <Col xs={4} lg={0} xl={0}>
            <img onClick={this.openNav} src={require("../Images/berger.png")} />
          </Col>
          <Col xs={14} md={0} lg={0} xl={0}>
            <span>
              <img style={{height:'30px'}} src={this.props.active_icon} />
              &nbsp;&nbsp;{this.props.active_page}
            </span>
          </Col>
          <Col xs={6} lg={0} xl={0}>
            <img
              style={{ height: "20px", marginLeft: "25px" }}
              src={require("../Images/mobile_notification.png")}
            />
            <img
              style={{
                height: "25px",
                marginLeft: "5px"
              }}
              src={require("../Images/mobile_profile.png")}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavBar;
