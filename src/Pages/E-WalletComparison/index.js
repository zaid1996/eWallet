import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { Row, Col, Button, Tag, Modal, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { connect } from 'react-redux'
import {getAllEwallets} from "../../Actions/CompareAction.js"

class EwalletComparison extends React.Component {
  state = {
    pageId:'4',
    modalVisible: false,
    visible: true,
    compare: false,
    tags: []
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
      visible: true,
      tags: []
    });
  };

  onChange = e => {
    if (e.target.checked) {
      this.state.tags.push({ name: e.target.value });
      console.log(`checked = ${e.target.value}`);
    } else {
      this.state.tags = this.state.tags.filter(item => {
        return item.name != e.target.value;
      });
      console.log(`checked = ${e.target.value}`);
    }
    console.log("====>", this.state.tags);
  };

  componentDidMount=()=>{
    this.setState({
        pageId:'4'
    })
    this.props.getAllEwallets()
}

  render() {
    return (
      <div>
        <NavBar
        selected={this.state.pageId}
        active_page={"Compare"}
        active_icon={"Images/compare_org.png"}
        />
        <Row className="compare-sec1">
          <Col lg={24}>
            <h1>e-WALLET COMPARISON</h1>
            <p>
              Compare on-going deals, promotions and pick the most rewarding
              eWallet
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="rightImage" xs={24} lg={0}>
            <center>
              <img
                style={{ height: "180px" }}
                src={require("../Images/banda.png")}
              />
            </center>
          </Col>
        </Row>
        <Row className="compare-sec2">
          <Col lg={14}>
            <Button onClick={this.showModal} className="button1">
              + Choose e-Wallet
            </Button>
            <br />
            <div className="tags">
              {this.state.tags.map(item => {
                return (
                  <Tag
                    className="pill"
                    visible={this.state.visible}
                    onClose={() => this.setState({ visible: false })}
                  >
                    {item.name}
                  </Tag>
                );
              })}
            </div>
            <br />
            <Button
              disabled={this.state.tags.length == 0 ? true : false}
              onClick={e => {
                this.setState({ compare: true });
              }}
              className="button2"
            >
              Compare
            </Button>
          </Col>
          <Col className="rightImage" xs={0} lg={10}>
            <img src={require("../Images/banda.png")} />
          </Col>
        </Row>
        {this.state.compare? <Row className="comparisonTable">
          {this.props.compare.eWalletList.map((item,index) => {
            let block = true;
            this.state.tags.map(tags => {
              if (item.name == tags.name) {
                block = false;
              }
            });
            if (!block) {
              return (
                <div>
                  <Col xs={6} lg={0}>
                    <div
                      style={{ fontFamily: "AxiformaBold", color: "#242a33" }}
                      className="cell"
                    >
                      <img src={item.image_link} />
                      <br />
                      {item.name}
                    </div>
                    {index==0?<span style={{fontSize:'15px'}}>Type:</span>:<span style={{fontSize:'15px',color:'white'}}>Type:</span>}
                    <div className="cell">{item.type}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Supported Os:</span>:<span style={{fontSize:'15px',color:'white'}}>Supported Os:</span>}
                    <div className="cell">{item.os}</div>
                    {index==0?<span style={{fontSize:'15px'}}>No. Of Merchants:</span>:<span style={{fontSize:'15px',color:'white'}}>No. Of Merchants:</span>}
                    <div className="cell">{item.merchants}</div>
                    {index==0?<span style={{fontSize:'15px'}}>No. Of Ongoing Promotions:</span>:<span style={{fontSize:'15px',color:'white'}}>No. Of Ongoing Promotions:</span>}
                    <div className="cell">{item.promotions}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Services:</span>:<span style={{fontSize:'15px',color:'white'}}>Services:</span>}
                    
                    <div style={{ height: "150px" }} className="cell">
                      {item.services.map(item => {
                        return <p>{item.name}</p>;
                      })}
                    </div>
                    {index==0?<span style={{fontSize:'15px'}}>Reward Schemes:</span>:<span style={{fontSize:'15px',color:'white'}}>Reward Schemes:</span>}
                    <div className="cell">{item.rewardScheme}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Min Reload:</span>:<span style={{fontSize:'15px',color:'white'}}>Min Reload:</span>}
                    <div className="cell">{item.minReload}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Max Reload:</span>:<span style={{fontSize:'15px',color:'white'}}>Max Reload:</span>}
                    <div className="cell">{item.maxReload}</div>
                    {index==0?<span style={{fontSize:'15px'}}>P2P Transfer:</span>:<span style={{fontSize:'15px',color:'white'}}>P2P Transfer:</span>}
                    <div className="cell">{item.p2pTransfer}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Support Withdrawal:</span>:<span style={{fontSize:'15px',color:'white'}}>Support Withdrawal:</span>}
                    <div className="cell">{item.supportWithdrawal}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Online Payment:</span>:<span style={{fontSize:'15px',color:'white'}}>Online Payment:</span>}
                    <div className="cell">{item.onlinePayment}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Merchant Payment:</span>:<span style={{fontSize:'15px',color:'white'}}>Merchant Payment:</span>}
                    <div className="cell">{item.merchantPayment}</div>
                    {index==0?<span style={{fontSize:'15px'}}>Website:</span>:<span style={{fontSize:'15px',color:'white'}}>Website:</span>}
                    
                    <div className="cell">
                      <a target="_blank" href={item.website}>
                        Visit Website{" "}
                        <img
                          style={{ height: "20px" }}
                          src={require("../Images/visit.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </div>
              );
            }
          })}
        </Row>:''}
        {this.state.compare ? (
          <Row gutter={8} className="comparisonTable">
            <Col xs={0} lg={2}></Col>
            <Col xs={0} lg={4}>
              <div style={{ height: "110px" }} className="mainCell">Name</div>
              <div className="mainCell">Type</div>
              <div className="mainCell">Supported OS</div>
              <div className="mainCell">No. Of Merchants</div>
              <div className="mainCell">No. Of Ongoing Promtoions</div>
              <div style={{ height: "150px" }} className="mainCell">
                Services
              </div>
              <div className="mainCell">Reward Schemes</div>
              <div className="mainCell">Min Reload</div>
              <div className="mainCell">Max Reload</div>
              <div className="mainCell">P2P Transfer</div>
              <div className="mainCell">Support Withdrawal</div>
              <div className="mainCell">Online Payment</div>
              <div className="mainCell">Merchant Payment</div>
              <div className="mainCell">Website</div>
            </Col>
            {this.props.compare.eWalletList.map(item => {
              let block = true;
              this.state.tags.map(tags => {
                if (item.name == tags.name) {
                  block = false;
                }
              });
              if (!block) {
                return (
                  <div>
                    <Col xs={0} lg={4}>
                      <div
                        style={{ fontFamily: "AxiformaBold", color: "#242a33", height:'110px' }}
                        className="cell"
                      >
                        <img src={item.image_link} />
                        <br />
                        {item.name}
                      </div>
                      <div className="cell">{item.type}</div>
                      <div className="cell">{item.os}</div>
                      <div className="cell">{item.merchants}</div>
                      <div className="cell">{item.promotions}</div>
                      <div style={{ height: "150px" }} className="cell">
                        {item.services.map(item => {
                          return <p>{item.name}</p>;
                        })}
                      </div>
                      <div className="cell">{item.rewardScheme}</div>
                      <div className="cell">{item.minReload}</div>
                      <div className="cell">{item.maxReload}</div>
                      <div className="cell">{item.p2pTransfer}</div>
                      <div className="cell">{item.supportWithdrawal}</div>
                      <div className="cell">{item.onlinePayment}</div>
                      <div className="cell">{item.merchantPayment}</div>
                      <div className="cell">
                        <a target="_blank" href={item.website}>
                          Visit Website{" "}
                          <img
                            style={{ height: "20px" }}
                            src={require("../Images/visit.png")}
                          />
                        </a>
                      </div>
                    </Col>
                  </div>
                );
              }
            })}
          </Row>
        ) : (
          <div></div>
        )}
        <div>
          <Modal
            title="Basic Modal"
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            {this.props.compare.eWalletList.map(item => {
              return (
                <Checkbox value={item.name} onChange={this.onChange}>
                  {item.name}
                </Checkbox>
              );
            })}
          </Modal>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  compare: state.compare
})

export default connect(mapStateToProps, { getAllEwallets })(EwalletComparison);