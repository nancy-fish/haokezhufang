//项目根组件
import React, { Component } from "react";
import { HashRouter, BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./pages/Home/index.js";
import Citylist from "./pages/CityList/index.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route path="/" component={Home}></Route>
          <Route path="/citylist" component={Citylist}></Route>
        </HashRouter>
      </div>
    );
  }
}
