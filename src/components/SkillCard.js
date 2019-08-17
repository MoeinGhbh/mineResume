import React, { Component } from "react";
import data from "../data";
import "./css/SkillCard.css";

class SkillCard extends Component {
  render() {
    let { skill } = this.props;

    return (
      <div className="Card">
        <h3>{skill.content.title}</h3>
        <img src={skill.content.image} height="42" width="42" />
        <p>{skill.content.Description}</p>
      </div>
    );
  }
}

export default SkillCard;
