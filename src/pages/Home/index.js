import React from "react";
import { TabBar } from "antd-mobile";
import "./index.css";

import { Route } from "react-router-dom";
import Index from "../Index/index.js";
import Find from "../Find/index.js";
import Message from "../Message/index.js";
import User from "../User/index.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  render() {
    const {
      location: { pathname },
    } = this.props;
    return (
      <div className="home">
        <Route path="/home/index" component={Index}></Route>
        <Route path="/home/find" component={Find}></Route>
        <Route path="/home/message" component={Message}></Route>
        <Route path="/home/user" component={User}></Route>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={pathname === "/home/index"}
            // badge={1}
            onPress={() => {
              console.log(this.props.history);

              this.props.history.push("/home/index");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="Koubei"
            // badge={"new"}
            selected={pathname === "/home/find"}
            onPress={() => {
              this.props.history.push("/home/find");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="Friend"
            // dot
            selected={pathname === "/home/message"}
            onPress={() => {
              this.props.history.push("/home/message");
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={pathname === "/home/user"}
            onPress={() => {
              this.props.history.push("/home/user");
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
