import React, { Component } from "react";
import data from "../data";
import "./css/experienceSection.css";

class experienceSection extends Component {
  render() {
    return (
      <div className="divExp">
        <h2>EXPERIENCE</h2>
        <div>
          <h3>{data.experience.First.Title}</h3>
          <p>{data.experience.First.Explaine}</p>
        </div>
        <div>
          <h3>{data.experience.Second.Title}</h3>
          <p>{data.experience.Second.Explaine}</p>
        </div>
      </div>
    );
  }
}
export default experienceSection;
