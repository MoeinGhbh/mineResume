import React, { Component } from "react";
import "./css/SwitchTheme.css";
import IconChange from './img/changeThem.png';

export default class SwitchTheme extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    //const { icon } = this.props;
    const { onClick } = this.props;
    return (
    
      <img
        src={IconChange}
        style={{
          maxWidth: "40px",
          float: "left",
          
        }}
        onClick={onClick}
        alt=""
      />
     
    );
  }
}
