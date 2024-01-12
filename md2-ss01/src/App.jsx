import "./App.css";
import React, { Component } from "react";
import Lifecycle from "./components/lifecycle";
import Form from "./components/form";

export default class App extends Component {
  arr = [];
  constructor() {
    super();
    this.state = {
      number: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const findCode = this.arr.find((code) => code == this.state.number);
    if (findCode) {
      const user = {
        number: this.state.number,
      };
      this.arr.push(user);
    }
    console.log(this.arr);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input name="number" onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
