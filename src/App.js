import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import AppRoutes from "./AppRoutes";
import { connect } from "react-redux";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppRoutes />
      </div>
    );
  }
}

export default App;
