import React, { Component } from "react";
import "./css/navigationSection.css";
import logo from "./img/profile.jpg";
import logoWhite from "./img/logo-white.png";
import "./css/bootstrap/bootstrap.min.css";
//import data from "../data";
//import { SocialIcon } from "react-social-icons";
import MenuItem from "../components/MenuItem";

export default class NavagationSection extends Component {
  render() {
    return (
      <div>
        <session>
          {/* <h1>{data.title}</h1>
        <h4>{data.Subtitle}</h4>
        <div>
          {Object.keys(data.links).map(key => {
            return <SocialIcon url={data.links[key]} className="Social" />;
          })}
        </div> */}

          {/* <ul className="Menu">
            { data.navigation.map(submenu => {
              return (
                <MenuItem link={submenu}>
              )
            })}
            </ul> */}

          <nav
            class="navbar navbar-expand-lg navbar-dark fixed-top"
            id="sideNav"
          >
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <span class="d-block d-lg-none  mx-0 px-0">
                <img src={logoWhite} alt="" class="img-fluid" />
              </span>
              <span class="d-none d-lg-block">
                <img
                  class="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src={logo}
                  alt=""
                />
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#experience">
                    Experience
                  </a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li> */}
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#Projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </session>
      </div>
    );
  }
}
