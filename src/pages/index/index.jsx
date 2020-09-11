import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";

import { add, minus, asyncAdd } from "../../actions/counter";
import { fetchHomeData } from "../../actions/home";

import "./index.scss";

@connect(
  ({ counter, home }) => ({
    counter,
    home,
  }),
  {
    add,
    minus,
    asyncAdd,
    fetchHomeData,
  }
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    console.log(this.props);
    this.props.fetchHomeData({
      page: "home",
    });
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>{this.props.home.list.map((item) => item?.name)}</Text>
        </View>
      </View>
    );
  }
}

export default Index;
