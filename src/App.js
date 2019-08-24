import React, { Component } from "react";
import "./App.css";
import AboutSection from "./components/aboutSection";
import HeaderSSection from "./components/HeaderSection";
import NavagationSection from "./components/navigationSection";
import SkillSection from "./components/skillSection";
import SwitchTheme from "./components/SwitchTheme";
import data from "./data";
import ExperienceSection from './components/experienceSection';
import Project from './components/ProjectSection';
import Contact from './components/ContactSection';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "App-night"
    };
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme() {
    this.setState({
      theme: this.state.theme === "App-night" ? "App-day" : "App-night"
    });
  }

  render() {
    return (
      <div className={this.state.theme}>
        {/* I can't send image addresses to component ??? */}
        <SwitchTheme icon={data.icons.switch} onClick={this.changeTheme} />
        <HeaderSSection />
        <NavagationSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <Project />
        <Contact />
      </div>
    );
  }
}
