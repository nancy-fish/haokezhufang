//项目根组件
import React, { Component } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home/index.js";
import Citylist from "./pages/CityList/index.js";
import Mymap from "./pages/MapFind/index.js";
import Nopages from "./pages/Nopage/index.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {/* Switch标签只要匹配一个就返回不再匹配 */}
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/citylist" component={Citylist} />
            <Route path="/map" component={Mymap} />
            <Route path="*" component={Nopages} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
