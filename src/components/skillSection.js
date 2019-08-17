import React, { Component } from "react";
import "./css/skillSection.css";
import SkillCard from "../components/SkillCard.js";
import data from "../data";

export default class SkillSection extends Component {
  render() {
    return (
      <div>
        <div className="skill-sec">
          <h2>{data.Section[1].title}</h2>
          {data.Section[1].items.map(skill => {
            return <SkillCard skill={skill} className="card" />;
          })}
        </div>
      </div>
    );
  }
}
