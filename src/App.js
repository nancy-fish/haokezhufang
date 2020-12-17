//项目根组件
import React, { Component } from "react";

import { Button } from "antd-mobile";
// import { Button, WhiteSpace, WingBlank } from "antd-mobile";

export default class App extends Component {
  render() {
    return (
      <div>
        首页
        <Button type="primary">primary</Button>
      </div>
    );
  }
}
