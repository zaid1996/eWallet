import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "antd/dist/antd.css";
import "./style.css";
import { Input, Menu, Row, Col, Divider } from "antd";
import StarRatings from "react-star-ratings";
import { Button } from "antd";
import { Select } from "antd";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import {getPromotions} from "../../Actions/HomeAction"
const { Search } = Input;
const { Option } = Select;
class Promotions extends React.Component {
  state = {
    pageId: "2",
  };

  componentDidMount = () => {
    this.setState({
      pageId: "2"
    });
    this.props.getPromotions()
  };

  render() {
    return (
      <div>
        <NavBar
          selected={this.state.pageId}
          active_page={"Promotions"}
          active_icon={"Images/promotions_org.png"}
        />
        <center>
          <div className="main-div">
            <div className="main-content-div">
              <Row gutter={[16, 48]}>
                <Col xs={0} xl={5}>
                  <div className="filtr-main-div">
                    <p className="filter-main-heading">Filter</p>
                    <p className="search-filter-q1">
                      What do you spend on most very month?
                    </p>
                    <Select
                      defaultValue="Shopping, Groceries"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">
                      How would you like your e-wallet to reward you?
                    </p>
                    <Select
                      defaultValue="Reward Point"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">
                      What other services would you like to have?
                    </p>
                    <Select
                      defaultValue="Withdrawal"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">
                      in Which location do you spend most of your time?
                    </p>
                    <Select
                      defaultValue="Kuala Lampur"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Button className="btn-search-filter" block>
                      Search
                    </Button>
                  </div>
                </Col>
                <Col xs={24} xl={14} style={{}}>
                  <div>
                    <Row gutter={[16, 48]}>
                      {this.props.home.promotions.map((Item, index) => {
                        if (index == 4) {
                          return (
                            <div>
                              <Col xs={24} xl={0}>
                                <div className="ads-main-div-mbl"></div>
                              </Col>
                              <Col xs={12} lg={8}>
                                <div className="ewalletSearch-card-main-div">
                                  <center>
                                    <img
                                      className="ewalletSearch-brand-imaage"
                                      src={Item.imaage_link}
                                    ></img>
                                    <h3 className="ewalletSearch-brand-name">
                                      {Item.name}
                                    </h3>
                                    <StarRatings
                                      starRatedColor="rgb(249, 109, 0)"
                                      numberOfStars={5}
                                      name="rating"
                                      starDimension="12px"
                                      rating={Item.rating}
                                    />
                                    <p className="ewalletSearch-brand-reviews">
                                      {Item.rviews} reviews
                                    </p>
                                    <Button
                                      block
                                      className="btnSearch-see-promotions"
                                    >
                                      See Promotions
                                    </Button>
                                    <Button
                                      
                                      className="btn-view-ewalletSearch-details"
                                      block
                                    >
                                     <Link to="/walletProfile">View e-Wallet Details</Link>
                                    </Button>
                                  </center>
                                </div>
                              </Col>
                            </div>
                          );
                        } else {
                          return (
                            <Col xs={12} lg={8}>
                              <div className="ewalletSearch-card-main-div">
                                <center>
                                  <img
                                    className="ewalletSearch-brand-imaage"
                                    src={Item.imaage_link}
                                  ></img>
                                  <h3 className="ewalletSearch-brand-name">
                                    {Item.name}
                                  </h3>
                                  <StarRatings
                                    starRatedColor="rgb(249, 109, 0)"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="12px"
                                    rating={Item.rating}
                                  />
                                  <p className="ewalletSearch-brand-reviews">
                                    {Item.rviews} reviews
                                  </p>
                                  <Button
                                    block
                                    className="btnSearch-see-promotions"
                                  >
                                    See Promotions
                                  </Button>
                                  <Button
                                    className="btn-view-ewalletSearch-details"
                                    block
                                  >
                                    <Link to="/walletProfile">View e-Wallet Details</Link>
                                  </Button>
                                </center>
                              </div>
                            </Col>
                          );
                        }
                      })}
                      <center>
                        <Button className="btn-search-again">
                          Search Again
                        </Button>
                      </center>
                    </Row>
                  </div>
                </Col>
                <Col xs={0} xl={5}>
                  <div className="ads-main-div"></div>
                </Col>
              </Row>
            </div>
          </div>
        </center>
        <div style={{ marginTop: "20%" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, { getPromotions })(Promotions);
