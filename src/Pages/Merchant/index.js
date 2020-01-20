import React from "react";
import logo from "../../logo.svg";
import "./style.css";
import "antd/dist/antd.css";
import { Input, Menu, Row, Col, Divider } from "antd";
import StarRatings from "react-star-ratings";
import { Button } from "antd";
import { Select } from "antd";
import { Item } from "rc-menu";
import MerchantsCard from "../../Components/MerchantsCard";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { connect } from "react-redux";
import { getAllMerchants } from "../../Actions/MerchantAction";
const { Search } = Input;
const { Option } = Select;

class Merchants extends React.Component {
  state = {
    pageId: "3"
  };

  componentDidMount = () => {
    this.setState({
      pageId: "3"
    });
    this.props.getAllMerchants();
  };

  render() {
    return (
      <div>
        <NavBar
          selected={this.state.pageId}
          active_page={"Merchants"}
          active_icon={"Images/merchant_org.png"}
        />
        <center>
          <div className="main-div">
            <div className="main-content-div">
              <Row gutter={[48, 48]}>
                <Col xs={0} xl={5}>
                  <div className="filtr-main-div">
                    <p className="filter-main-heading">Filter</p>
                    <p className="search-filter-q1">Sort by</p>
                    <Select
                      defaultValue="New Merchants"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">Accepted e-wallets</p>
                    <Select
                      defaultValue="Any"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">Category</p>
                    <Select
                      defaultValue="All Field"
                      className="search-filter-select1"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <p className="search-filter-q1">Location</p>
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
                    <Button className="btn-merchant-search-filter" block>
                      Done
                    </Button>
                  </div>
                </Col>
                <Col xs={24} xl={14} style={{}}>
                  <div>
                    <Row gutter={[0, 48]}>
                      {this.props.merchant.merchants.map((Item, index) => {
                        if (index == 4) {
                          return (
                            <div>
                              <Col xs={24} xl={0}>
                                <div className="ads-main-div-mbl"></div>
                              </Col>
                              <Col xs={12} lg={8}>
                                <MerchantsCard
                                  image_link={Item.imaage_link}
                                  rating={Item.rating}
                                  reviews={Item.rviews}
                                  name={Item.name}
                                  location={Item.location}
                                  preffered={Item.preffered}
                                ></MerchantsCard>
                              </Col>
                            </div>
                          );
                        } else {
                          return (
                            <Col xs={12} lg={8} md={8} xl={8}>
                              <MerchantsCard
                                image_link={Item.imaage_link}
                                rating={Item.rating}
                                reviews={Item.rviews}
                                name={Item.name}
                                location={Item.location}
                                preffered={Item.preffered}
                              ></MerchantsCard>
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  </div>
                </Col>
                <Col xs={0} xl={5}>
                  <div className="ads-main-div"></div>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Row>
              <Col lg={24}>
                <center>
                  <Button className="btn-search-again">Search Again</Button>
                </center>
              </Col>
            </Row>
          </div>
        </center>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  merchant: state.merchant
});

export default connect(mapStateToProps, { getAllMerchants })(Merchants);
