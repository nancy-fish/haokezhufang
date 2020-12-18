import React from "react";
import { TabBar } from "antd-mobile";
import "./index.css";

import { Route } from "react-router-dom";
import Index from "../Index/index.js";
import Find from "../Find/index.js";
import Message from "../Message/index.js";
import User from "../User/index.js";

const navs = [
  { title: "首页", icon: "icon-ind", path: "/home" },
  { title: "找房", icon: "icon-findHouse", path: "/home/find" },
  { title: "资讯", icon: "icon-infom", path: "/home/message" },
  { title: "我的", icon: "icon-my", path: "/home/user" },
];
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      location: { pathname },
    } = this.props;
    return (
      <div className="home">
        <Route exact path="/home" component={Index} />
        <Route path="/home/find" component={Find} />
        <Route path="/home/message" component={Message} />
        <Route path="/home/user" component={User} />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {navs.map((item) => (
            <TabBar.Item
              title={item.title}
              key={item.path}
              icon={<i className={`iconfont ${item.icon}`}></i>}
              selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
              selected={pathname === item.path}
              onPress={() => this.props.history.push(item.path)}
            />
          ))}
        </TabBar>
      </div>
    );
  }
}
