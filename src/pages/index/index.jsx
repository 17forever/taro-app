import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Form, Switch, Input } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import { fetchHomeData } from '../../actions/home'
import PickView from '../../components/PickView'
import wx from '../../lib/wx'
import './index.scss'

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
  },
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
    console.log(wx)
    console.log(this.props)
    this.props.fetchHomeData({
      page: 'home',
    })
  }

  componentDidHide() {}

  formSubmit = (e) => {
    console.log(e)
  }

  formReset = (e) => {
    console.log(e)
  }

  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.minus}>
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
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View className="example-body">
            <Switch name="switch" className="form-switch"></Switch>
          </View>
          <Button formType="submit">提交</Button>
        </Form>
        <PickView />
      </View>
    )
  }
}

export default Index
