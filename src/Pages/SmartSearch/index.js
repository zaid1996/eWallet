import React, { Component } from "react";
import {connect} from "react-redux"
import { Row, Col } from "antd";
import "./style.css";
import QuestionBox from "../../Components/QuestionBox";
import { Button } from 'antd';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer"
import {Link} from "react-router-dom"
import {getSearchQuestions} from "../../Actions/SearchAction"

class SmartSearch extends Component {
  state = {
    pageId:"5"
  };


  makeItem(e,index) {
    return (
      <div>
      <Row>
      <Col xxl={4} xl={4} l={4} md={1} sm={1} xs={1}>
      
      </Col>
      <Col xxl={16} xl={16} l={16} md={22} sm={22} xs={22}>
      <div className="outer-box">
        <p className="questions">
          {e.question}
        </p>
        <div className="radioButtonMargin">
          <Row>            
              {e.options.map((item, index) => this.makeOption(item,index))} 
         </Row>
        </div>
      </div>
      </Col>
      <Col xxl={4} xl={4} l={4} md={1} sm={1} xs={1}>
      
      </Col>
    </Row>
          
      </div>

    );
  }



  makeOption(e,index) {
    return (
    <div>
          <Col xxl={4} xl={4} l={4} md={8} sm={8} xs={8}>
         <QuestionBox  id={e.id} name={e.name} text={e.txt}/>
         </Col>
      </div>
    );
  }
  componentDidMount = () =>{
    this.setState({
      pageId:'5'
    })
    this.props.getSearchQuestions()
  }
  render() {
    return (
      <div>
        <NavBar
        selected={this.state.pageId}
        active_page={"Search"}
        active_icon={"Images/search_org.png"}
        />
        <center>
          <div className="distance-txt">
            <p className="heading-h1">SMART SEARCH</p>
            <p className="simple-txt">
              Finding the right e-wallet needs a bit more information
            </p>
          </div>

                  {this.props.search.searchQuestions.map((item, index) => this.makeItem(item,index))} 
         
   



          <Row className="avaiable-row">
            <Col xxl={10} xl={10} l={10} md={1} sm={1} xs={1}></Col>
            <Col xxl={4} xl={4} l={4} md={22} sm={22} xs={22}>
              <div className="available-box">
                <p className="txtt">Available e-wallets</p>
                <p className="wallerNbr">06</p>
              </div>
            </Col>
            <Col xxl={10} xl={10} l={10} md={1} sm={1} xs={1}></Col>
          </Row>
          <Row className="avaiableBtn-row">
            <Col xxl={10} xl={10} l={10} md={1} sm={1} xs={1}></Col>
            <Col xxl={4} xl={4} l={4} md={22} sm={22} xs={22}>
              <div className="showBtn">
                <Button ><Link to="/searchResult">Show me the best e-wallets</Link></Button>
              </div>
            </Col>
            <Col xxl={10} xl={10} l={10} md={1} sm={1} xs={1}></Col>
          </Row>
        </center>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, { getSearchQuestions })(SmartSearch);
