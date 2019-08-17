import React, { Component } from "react";
import "./css/SwitchTheme.css";

export default class changeThem extends Component {
  render(){

      let {onclick} = this.props;

      return(
          <img onclick={onclick}   src="img/python.png"   alt=""/>
       )
  }
}