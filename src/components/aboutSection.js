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
          <h1>{data.Section[0].title}</h1>
          <h1>{data.title}</h1>
          <div id="DivSum">
            <p className="Summery">{data.Subtitle}</p>
          </div>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} className="Social" />;
            })}
          </div>

          <div>
            <div>
              {data.Section[0].item.map(statment => {
                return statment.Content;
              })}

              <a href="#">THEMSBIT</a>
            </div>

            <ul>
              <li>
                <a href="http://github.com/moeinghbh">
                  <span>
                    <i moein ghobbeh has github soace />
                    <i />
                  </span>
                  moein ghobbeh has github soace
                </a>
              </li>
              <li>
                <a href="moein.ghobbeh@gmail.com">
                  <span>
                    <i class="fa fa-circle fa-stack-2x" />
                    <i class="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                  E-MailAddress
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/moein-ghobbeh">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x" />
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse" />
                  </span>
                  My Linkedin
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x" />
                    <i />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
