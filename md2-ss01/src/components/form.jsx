import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  };
  render() {
    return (
      <>
        <h2>username: {this.state.username}</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input name="username" onChange={this.handleValue} type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input name="email" onChange={this.handleValue} type="email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              name="password"
              onChange={this.handleValue}
              type="password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
