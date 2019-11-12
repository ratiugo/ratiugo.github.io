import React, {Component} from "react";
import "./App.css";

import Particles from "react-particles-js";
import MediaQuery from "react-responsive";

import Navbar from "../../containers/navbar/Navbar";
import Blog from "../../containers/blog/Blog";
import DropDownNavbar from "../../containers/dropDownNavbar/DropDownNavbar";

import Title from "../../components/title/Title";
import MiniBio from "../../components/minibio/MiniBio";
import AboutMe from "../../components/aboutMe/AboutMe";
import LargeCard from "../../components/portfolioCards/largeCard/LargeCard";
import SmallCard from "../../components/portfolioCards/smallCard/SmallCard";
import Contact from "../../components/contact/Contact";
import ExampleProject from "../../components/exampleProject/ExampleProject";

// settings for animated background particles
const particlesOptions = {

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 710.2328774690454
      }
    },
    opacity: {
      value: 0.04008530152163807,
      random: false,
    },
    size: {
      value: 0,
      random: true,
      anim: {
        enable: false,
        speed: 26.79854800594439,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 144.30708547789706,
      color: "#ffffff",
      opacity: 0.07215354273894853,
      width: 3.206824121731046
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
        onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  "retina_detect": true
};

// main app component rendered in index.js
class App extends Component {

  constructor(){
    super();

    // initialize state to change project view within the portfolio
    this.state = {
        "portfolio": "homeview"
    };
  }

  // change portfolio state when a project card is clicked
  cardClicked = () => {
    this.setState({
      "portfolio": "card"
    });
  }

  // change portfolio state back to home when back button is clicked
  backtohomeview = () => {
    this.setState({
      "portfolio": "homeview"
    });
  }

  render(){

    // assign portfolio state to an easier to use variable
    const {portfolio} = this.state;

    return (
            <div>

              <Particles className = "particles"
                params = {particlesOptions}
              />

              <MediaQuery query="(min-width: 768px)">
                <Navbar />
              </MediaQuery>

              <MediaQuery query="(max-width: 768px)">
                <DropDownNavbar />
              </MediaQuery>

              <Title />

              <MiniBio />

              <AboutMe id = "aboutme" />

              <Blog id = "blog" />

              {/*portfolio component - in this file for state changes*/}
              <div className = "vh-100 w-100 center mt5" id= "portfolio">
                <div className = "w-75 center">
                  <div className = "pa3">
                    <h1 className = "tc pt3 fw5">Portfolio</h1>
                    <div className = "bb w-75 center">
                    </div>
                    <p className = "tc">Coming Soon!</p>
                  </div>
                    {portfolio === "homeview" ?

                      <div>
                        <MediaQuery query="(min-width: 768px)">
                          <div className = "scroll">
                            <div className = "vh-75 outer fl flex items-center">
                              <LargeCard  onClick = {this.cardClicked}
                                          className = " "
                                          title = ""/>
                              <LargeCard  onClick = {this.cardClicked}
                                          className = " "
                                          title = ""/>
                              <LargeCard  onClick = {this.cardClicked}
                                          className = " "
                                          title = ""/>
                            </div>
                          </div>
                        </MediaQuery>

                        <MediaQuery query="(max-width: 768px)">
                          <div className = "vh-75 flex items-center">
                            <div className = "scroll">
                              <div className = "vh-50 outer fl flex items-center">
                                  <SmallCard  onClick = {this.cardClicked}
                                              className = " "
                                              title = ""/>
                                  <SmallCard  onClick = {this.cardClicked}
                                              className = " "/>
                                  <SmallCard  onClick = {this.cardClicked}
                                              className = " "/>
                              </div>
                            </div>
                          </div>
                        </MediaQuery>
                      </div>

                      :
                        <ExampleProject onClick = {this.backtohomeview} />
                    }
                </div>
              </div>
              <Contact id = "contact" />
            </div>
    );
  }
}

export default App;
