import React, { Component } from "react";
import "./css/aboutSection.css";
import "./img/portfolio/p-1.jpg";
import data from "../data";
import { SocialIcon } from "react-social-icons";

export default class AboutSection extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <table>
            <tr>
              <td>
                <h4>{data.Section[0].title}</h4>
                <h1>{data.title}</h1>
              </td>
              <td>
                <div id="DivSum">
                  <p className="Summery">{data.Subtitle}</p>
                </div>
              </td>
            </tr>
          </table>
          <div className="divSocial">
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} className="Social" />;
            })}
          </div>

          <div>
            <div>
              {data.Section[0].item.map(statment => {
                return statment.Content;
              })}
            </div>

            <ul>
              <li>
                <a href="https://reactjs.org/">
                  <span>
                    <i />
                    <i />
                  </span>
                  Get start with React js
                </a>
              </li>
              <li>
                <a href="https://www.javascript.com/">
                  <span>
                    <i class="fa fa-circle fa-stack-2x" />
                    <i class="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                  Get start with JavaScript
                </a>
              </li>
              <li>
                <a href="https://git-scm.com/">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x" />
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse" />
                  </span>
                  Get start with Git
                </a>
              </li>
              <li>
                <a href="https://www.python.org/">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x" />
                    <i />
                  </span>
                  Get Start with Python
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
