import React, {Component} from 'react';

import './Navbar.css';

import {animateScroll as scroll, Link} from 'react-scroll';
import { Transition } from 'react-transition-group';

class Navbar extends Component {


    constructor(props){
        super(props);
        this.state = {
          show: true,
          scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    scrollToTop = () => {
    scroll.scrollToTop();
    }

    render(){

        console.log(this.state.show);

        const duration = 300;

        const defaultStyle = {
          transition: `opacity ${duration}ms ease-in-out`,
          opacity: 0,
        }

        const transitionStyles = {
          entering: { opacity: 1 },
          entered:  { opacity: 1 },
          exiting:  { opacity: 1 },
          exited:  { opacity: 0 },
        };

        return(
            <Transition in = {this.state.show} timeout = {duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l navbar">
                      <nav className="f6 fw6 ttu tracked">

                            <li onClick = {this.scrollToTop}
                                className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color">
                                home
                            </li>

                            <li className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color">
                                <Link   activeClass="active"
                                        to="aboutme"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration= {750}>
                                about
                                </Link>
                            </li>

                            <li className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color">
                                <Link   activeClass="active"
                                        to="portfolio"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration= {750}>
                                portfolio
                                </Link>
                            </li>

                            <li className="link dim mid-gray dib mr1 pointer pa1 fr shadow-2 br-pill nav-color">
                                <Link   activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration= {750}>
                                contact me
                                </Link>
                            </li>

                      </nav>
                    </header>
                </div>
                )}
            </Transition>


  );
 }
}

export default Navbar


