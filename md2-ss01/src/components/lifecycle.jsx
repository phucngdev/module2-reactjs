import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    console.log("componentt willmou");
  }
  componentDidMount() {
    console.log("component did mou");
  }
  componentWillReceiveProps() {}
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {
    console.log("will update");
  }
  componentDidUpdate() {
    console.log("did update");
  }
  componentWillUnmount() {
    console.log("will un mou");
  }
  render() {
    console.log("componentt  render");

    return <div>username: {this.props.username}</div>;
  }
}
