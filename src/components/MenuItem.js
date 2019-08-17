import React, { Component } from "react";
import "./css/MenuItem.css";

export default class MenuItem extends Component {
  render() {
    let { link } = this.props;
    return (
      <li>
        <a href="#"> {link.content} </a>
      </li>
    );
  }
}
