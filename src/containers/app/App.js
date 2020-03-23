import React, {Component} from "react";
import "./App.css";

//libraries
import MediaQuery from "react-responsive";

//containers
import Navbar from "../../containers/navbar/Navbar";
import Blog from "../../containers/blog/Blog";
import DropDownNavbar from "../../containers/dropDownNavbar/DropDownNavbar";
import Portfolio from "../../containers/portfolio/Portfolio";

//components
import Title from "../../components/title/Title";
import MiniBio from "../../components/minibio/MiniBio";
import AboutMe from "../../components/aboutMe/AboutMe";
import Contact from "../../components/contact/Contact";

// main app component rendered in index.js
class App extends Component {

  render(){

    return (
            <div>

              <MediaQuery query="(min-width: 768px)">
                <Navbar />
              </MediaQuery>

              <MediaQuery query="(max-width: 768px)">
                <DropDownNavbar />
              </MediaQuery>

              <Title />

              <MiniBio />

              <AboutMe id = "aboutme" />

              <Portfolio id = "portfolio" />

              <Contact id = "contact" />

            </div>
    );
  }
}

export default App;
