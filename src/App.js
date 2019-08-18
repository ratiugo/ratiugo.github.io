import React, {Component} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import Navbar from './components/navbar/Navbar';
import Title from './components/title/Title';
import MiniBio from './components/minibio/MiniBio';
import AboutMe from './components/aboutMe/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


class App extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render(){
    return (
            <div>
              <Navbar scrollToTop = {this.scrollToTop}/>
              <Title />
              <MiniBio />
              <AboutMe id = 'aboutme' />
              <Portfolio id = 'portfolio' />
              <Contact id = 'contact' />
            </div>
  );
 }
}

export default App;
