import React, { Component } from "react";
import {connect} from "react-redux";
import { Row, Col } from "antd";
import "./style.css";
import { Button } from "antd";
import { createRequire } from "module";
import Card from "../../Components/RatingCard";
import { Menu, Dropdown, Icon } from "antd";
import { Input } from "antd";
import { Rate } from "antd";
import Footer from "../../Components/Footer"
import NavBar from "../../Components/NavBar";
import {getWalletProfile} from "../../Actions/ProfileAction"

const menu = (
  <Menu>
    <Menu.Item key="0">1st menu item</Menu.Item>
    <Menu.Item key="1">2nd menu item</Menu.Item>
    <Menu.Item key="2">3rd menu item</Menu.Item>
  </Menu>
);

class WalletProfile extends Component {
  state = {
    pageId:'2'
  };

  getData(e) {
    return (
      <div className="comment-box">
        <Row>
          <Col xxl={1} xl={1} l={1} md={1} sm={1} xs={1}>
            <img
              style={{
                height: "8px",
                width: "8px",
                marginTop: "90%",
                marginLeft: "40%"
              }}
              src={require("../Images/circle.png")}
            ></img>
          </Col>
          <Col xxl={21} xl={21} l={21} md={20} sm={20} xs={20}>
            <div className="comments">
              {" "}
              <p className="reviewer-name">{e.name}</p>
              <p className="reviewer-comment">{e.comment}</p>
            </div>
          </Col>
          <Col xxl={2} xl={2} l={2} md={3} sm={3} xs={3}>
            <div className="comment-star-align">
              {" "}
              <img
                className="comment-star"
                src={require("../Images/star.png")}
              ></img>
              <p className="rating">{e.rating}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      pageId: "2"
    });
    this.props.getWalletProfile()
  };

  render() {
    return (
      <div>
        <NavBar
        />
        <Row>
          <Col xxl={3} xl={3} l={3} md={1} sm={1} xs={1}></Col>
          <Col xxl={18} xl={18} l={18} md={22} sm={22} xs={22}>
            <div className="orange-box"></div>
          </Col>
          <Col xxl={3} xl={3} l={3} md={1} sm={1} xs={1}></Col>
        </Row>

        <Row gutter={[1, 30]}>
          <Col xxl={9} xl={9} l={9} md={7} sm={7} xs={7}></Col>
          <Col xxl={6} xl={6} l={6} md={10} sm={10} xs={10}>
            <center>
              <div className="outer-boxx">
                <img src={require("../Images/facpic.png")}></img>
              </div>
            </center>
          </Col>
          <Col xxl={9} xl={9} l={9} md={7} sm={7} xs={7}></Col>
        </Row>

        <Row></Row>

   <Row>
          <Col xxl={9} xl={9} l={9} md={1} sm={1} xs={1}></Col>
          <Col xxl={2} xl={2} l={2} md={7} sm={7} xs={7}>
            <img
              className="link-img"
              src={require("../Images/linkIMG.png")}
            ></img>
          </Col>
          <Col xxl={2} xl={2} l={2} md={7} sm={7} xs={7}>
            <center>
              {" "}
              <p className="title-txt">Fave Pay</p>
            </center>{" "}
          </Col>
          <Col xxl={2} xl={2} l={2} md={7} sm={7} xs={7}>
            {" "}
            <div className="alignn">
              {" "}
              <img
                className="rating-img"
                src={require("../Images/star.png")}
              ></img>
              <p className="rating">4.9</p>
            </div>
          </Col>
          <Col xxl={9} xl={9} l={9} md={1} sm={1} xs={1}></Col>
        </Row> 



        <Row>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
          <Col xxl={6} xl={6} l={6} md={16} sm={16} xs={16}>
            <center>
              <p className="category-txt">
                • Eat • Beauty • Massage • Services • Travel • Fitness • Fashion
              </p>
            </center>
          </Col>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
        </Row>

        <Row>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
          <Col xxl={6} xl={6} l={6} md={16} sm={16} xs={16}>
            <center>
              {" "}
              <p className="discription-txt">
                Get up to 50% cashback at 10,000+ shops.
              </p>
              <p className="discription-txt" style={{ marginTop: "-15px" }}>
                {" "}
                It’s fast, easy, and secure.
              </p>
            </center>
          </Col>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
        </Row>

        <Row>
          <Col xxl={9} xl={9} l={9} md={3} sm={3} xs={3}></Col>
          <Col xxl={2} xl={3} l={3} md={9} sm={9} xs={9}>
            <Button className="apple-btn">
              {" "}
              <img
                className="btn-img"
                src={require("../Images/apple-img.png")}
              ></img>
              App Store
            </Button>
          </Col>
          <Col xxl={2} xl={3} l={3} md={9} sm={9} xs={9}>
            <Button className="google-btn">
              {" "}
              <img
                className="btn-img"
                src={require("../Images/google-img.png")}
              ></img>
              Google Play
            </Button>
          </Col>
          <Col xxl={9} xl={9} l={9} md={3} sm={3} xs={3}></Col>
        </Row>

        <Row>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
          <Col xxl={6} xl={6} l={6} md={16} sm={16} xs={16}>
            <center>
              {" "}
              <Button className="promotion-btn">See Promotions</Button>
            </center>
          </Col>
          <Col xxl={9} xl={9} l={9} md={4} sm={4} xs={4}></Col>
        </Row>

        <div className="big-data">
          <Row>
            <Col xxl={5} xl={5} l={5} md={1} sm={1} xs={1}></Col>
            <Col xxl={14} xl={14} l={14} md={1} sm={1} xs={1}>
              <div className="card-align">
                <Card title={"Since"} value={"2011"} />
                <Card title={"Rating"} value={"4.9"} />
                <Card title={"Marchants"} value={"32k"} />
                <Card title={"Installs"} value={"554k"} />
                <Card title={"Active Users"} value={"222k"} />
              </div>
            </Col>
            <Col xxl={5} xl={5} l={5} md={1} sm={1} xs={1}></Col>
          </Row>
        </div>

        <div className="main-div-wallet">
          <div className="upper-div">
            <Card title={"Since"} value={"2011"} />
            <Card title={"Rating"} value={"4.9"} />
            <Card title={"Marchants"} value={"32k"} />
          </div>
          <div className="lower-div">
            <Card title={"Installs"} value={"554k"} />
            <Card title={"Active Users"} value={"222k"} />
          </div>
          <center>
            <img
              className="spliter"
              src={require("../Images/spliter.png")}
            ></img>
          </center>
        </div>

        <Row>
          <Col xxl={7} xl={7} l={7} md={1} sm={1} xs={1}></Col>
          <Col xxl={3} xl={3} l={3} md={7} sm={7} xs={7}>
            <div className="card-align">
              <img
                className="star-img"
                src={require("../Images/star.png")}
              ></img>
              <p className="rating">4.9</p>
            </div>
          </Col>
          <Col xxl={3} xl={3} l={3} md={7} sm={7} xs={7}>
            <center>
              {" "}
              <p className="review-txt">REVIEWS</p>
            </center>
          </Col>
          <Col xxl={3} xl={3} l={3} md={8} sm={8} xs={8}>
            <div className="dropBox">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a className="ant-dropdown-link" href="#">
                  Most Recent <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Col>
          <Col xxl={7} xl={7} l={7} md={1} sm={1} xs={1}></Col>
        </Row>

        <Row>
          <Col xxl={6} xl={6} l={6} md={1} sm={1} xs={1}></Col>
          <Col xxl={12} xl={12} l={12} md={22} sm={22} xs={22}>
            {this.props.profile.profileData.map((item, index) => this.getData(item))}
          </Col>
          <Col xxl={6} xl={6} l={6} md={1} sm={1} xs={1}></Col>
        </Row>

        <Row>
          <Col xxl={6} xl={6} l={6} md={1} sm={1} xs={1}></Col>
          <Col xxl={12} xl={12} l={12} md={22} sm={22} xs={22}>
            <div className="give-review">
              <Input
                className="give-review-input"
                placeholder="•     Write Your Review"
              />
              <div className="submit-star">
                <Rate className="rate" />
                <Button className="review-btn">Done</Button>{" "}
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={6} l={6} md={1} sm={1} xs={1}></Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getWalletProfile })(WalletProfile);

