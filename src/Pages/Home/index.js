import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { connect } from 'react-redux'
import { Row, Col, Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import PromotionCard from "../../Components/PromotionCard";
import {getTopWallets, getTopFoodPromotions, getTopTravelPromotions} from "../../Actions/HomeAction"

class Home extends React.Component {
  state = {
    pageId:'1',
  };

  componentDidMount=()=>{
      let date = 25
      let month = 1
      let cur_date = new Date().getDate();
      let cur_month = (new Date().getMonth()+1)
      
      console.log(date,cur_date)
      this.setState({
          pageId:'1'
      })
      this.props.getTopWallets();
      this.props.getTopFoodPromotions();
      this.props.getTopTravelPromotions()
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
      }
    };
    return (
      <div className="App">
        {/* <EWalletComparison/> */}
        <NavBar
        selected={this.state.pageId}
        active_page={"Home"}
        active_icon={"Images/home_org.png"}
        />
        <Row className="main-header">
          <Col xs={24} lg={5}>
            <img
              id="mobile-header-image"
              src={require("../Images/bachi.png")}
            />
          </Col>
          <Col xs={24} lg={9}>
            <h1>
              Get the Best Bang <br />
              for your Ringgit
            </h1>
            <p>
              We help you pick the most rewarding eWallet to use at your
              favourite store at Malaysia.
            </p>
            <Button>Sign Up Now</Button>
          </Col>
          <Col xs={0} lg={10}>
            <img src={require("../Images/bachi.png")} />
          </Col>
        </Row>
        <Row className="section1">
          <Col lg={24}>
            <h3>Top 5 eWallet Promotions</h3>
          </Col>
          <Row>
            <Col xs={24} md={0} lg={0} xl={0}>
              <Carousel
                className="responsive-slider"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {this.props.home.topWallets.map((item, index) => {
                  return (
                    <center>
                      <div className="ewallet-card-main-div">
                        <PromotionCard
                          name={item.name}
                          image_link={item.image_link}
                          cashback={item.cashback}
                          sale_date={item.sale_date}
                        />
                      </div>
                    </center>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <div className="top5">
              {this.props.home.topWallets.map((item, index) => {
                return (
                  <Col className="ewallet-card-main-div" xs={0} sm={12} lg={6}>
                    <PromotionCard
                      name={item.name}
                      image_link={item.image_link}
                      cashback={item.cashback}
                      sale_date={item.sale_date}
                    />
                  </Col>
                );
              })}
            </div>
            <center>
              <Col xs={22} lg={21}>
                <Button className="bigBtn">See All e-Wallet Promotions</Button>
              </Col>
            </center>
          </Row>
        </Row>
        <Row className="section2">
          <Col lg={24}>
            <h3>Top 5 Food Promotions</h3>
          </Col>
          <Row>
            <Col xs={24} md={0} lg={0} xl={0}>
              <Carousel
                className="responsive-slider"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {this.props.home.topFoodPromotions.map((item, index) => {
                  return (
                    <center>
                      <div className="ewallet-card-main-div">
                        <PromotionCard
                          name={item.name}
                          image_link={item.image_link}
                          cashback={item.cashback}
                          sale_date={item.sale_date}
                        />
                      </div>
                    </center>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <div className="top5">
              {this.props.home.topFoodPromotions.map((item, index) => {
                return (
                  <Col className="ewallet-card-main-div" xs={0} sm={12} lg={6}>
                    <PromotionCard
                      name={item.name}
                      image_link={item.image_link}
                      cashback={item.cashback}
                      sale_date={item.sale_date}
                    />
                  </Col>
                );
              })}
            </div>
            <center>
              <Col xs={22} lg={21}>
                <Button className="bigBtn">See All Food Promotions</Button>
              </Col>
            </center>
          </Row>
        </Row>
        <Row className="section3">
          <Col lg={24}>
            <h3>Top 5 Travel Promotions</h3>
          </Col>
          <Row>
            <Col xs={24} md={0} lg={0} xl={0}>
              <Carousel
                className="responsive-slider"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {this.props.home.topFoodPromotions.map((item, index) => {
                  return (
                    <center>
                      <div className="ewallet-card-main-div">
                        <PromotionCard
                          name={item.name}
                          image_link={item.image_link}
                          cashback={item.cashback}
                          sale_date={item.sale_date}
                        />
                      </div>
                    </center>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <div className="top5">
              {this.props.home.topFoodPromotions.map((item, index) => {
                return (
                  <Col className="ewallet-card-main-div" xs={0} sm={12} lg={6}>
                    <PromotionCard
                      name={item.name}
                      image_link={item.image_link}
                      cashback={item.cashback}
                      sale_date={item.sale_date}
                    />
                  </Col>
                );
              })}
            </div>
            <Col xs={22} lg={21}>
              <center>
                <Button className="bigBtn">See All Travel Promotions</Button>
              </center>
            </Col>
          </Row>
        </Row>
        <Row className="section4">
          <Col xs={0} lg={2}></Col>
          <Col xs={12} lg={4}>
            <img src={require("../Images/electronics.png")} />
            <p>Electronics</p>
          </Col>
          <Col xs={12} lg={4}>
            <img src={require("../Images/cosmetics.png")} />
            <p>Beauty & Health</p>
          </Col>
          <Col xs={12} lg={4}>
            <img src={require("../Images/living.png")} />
            <p>Home & Living</p>
          </Col>
          <Col xs={12} lg={4}>
            <img src={require("../Images/fashion.png")} />
            <p>Fashion</p>
          </Col>
          <Col xs={0} lg={6}></Col>
          <center>
            <Col xs={24} lg={19}>
              <Button>See All Promotions</Button>
            </Col>
          </center>
        </Row>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
   home: state.home
})

export default connect(mapStateToProps, { getTopWallets, getTopFoodPromotions, getTopTravelPromotions })(Home);
