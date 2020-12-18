import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import axios from "axios";

export default class App extends Component {
  state = {
    data: ["1", "2", "3"],
    swipers: [],
    // imgHeight: 176,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI",
        ],
      });
    }, 100);
    this.getSwipersData();
  }
  async getSwipersData() {
    const res = await axios.get("http://localhost:8080/home/swiper");
    console.log(res);
    this.setState({
      swipers: res.data.body,
    });
  }
  render() {
    return (
      <div>
        {this.state.swipers.length ? (
          <Carousel autoplay={true} infinite>
            {this.state.swipers.map((val) => (
              <a
                key={val.id}
                href="http://itcast.cn/"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: 212,
                }}
              >
                <img
                  src={`http://localhost:8080${val.imgSrc}`}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
        ) : null}
      </div>
    );
  }
}
