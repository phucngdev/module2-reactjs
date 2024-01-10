import React, { Component } from "react";

export default class Parent_Component extends Component {
  // khởi tạo constructor con class component
  constructor() {
    // để kế thừa tất cả các thuộc tính và phương thức trong component
    super();
    // cú pháp khởi tạo state
    this.state = {
      id: 1,
      name: "abc",
    };
  }
  // khi state thay đổi thì component bị re-render lại
  handleClick = () => {
    this.setState({
      id: this.state.id + 1,
    });
  };
  render() {
    return (
      <>
        <h1>id: {this.state.id}</h1>
        <button onClick={this.handleClick}>up</button>
        <table>
          {this.props.user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
