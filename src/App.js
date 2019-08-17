import React, { Component } from "react";
import "./App.css";
import AboutSection from "./components/aboutSection";
import HeaderSSection from "./components/HeaderSection";
import NavagationSection from "./components/navigationSection";
import SkillSection from "./components/skillSection";
import changeTheme from "./components/changeThem";
import data from './data';

export default class App extends Component {


  constructor(){
    super();
    this.state={
      theme: "dark"
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(){
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }

  render() {
    return (
      <div className="App">
      
        <HeaderSSection />
        <NavagationSection />
         <AboutSection /> 
        <changeTheme  onclick={this.changeTheme }/>
        {/* <SkillSection /> */}
        
      </div>
    );
  }
}


