import React, { Component } from 'react';

import { Transition } from "react-transition-group";
import {animateScroll as scroll, Link} from "react-scroll";

import "./DropDownNavbar.css";

class DropDownNavbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      show: true,
      scrollPos: 0
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
  }

  /*set scroll position and "show" properties

  scrollPos is simply the top position of the Navbar component, initially grabbed from current state
  - begins at 0 and decreases with downward scrolling

  show: "true" if current scrollPos is greater than previous (i.e. upward scrolling)
        "false" if current scrollPos is less than previous (i.e. downward scrolling)
  */
  handleScroll() {
      const { scrollPos } = this.state;
      this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
      });
  }

  //react-scroll function
  scrollToTop() {
      scroll.scrollToTop();
  }

  render() {

    //react scroll configuration to set duration of scroll
    const duration = 750;

    //react transition group configuration to set transition effect
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    //react transition group configuration to set transition state properties
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 0 },
    };

    return (
    <Transition in = {this.state.show} timeout = {duration}>
      {state => (
          <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
          }}>
        <div className = "w-100 ph3 pv3 pv4-ns ph4-m ph5-l navbar">

            <button
              onClick={this.showMenu}
              className="mobileNavWidth link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color f6 fw6 ttu">
                ≡
            </button>

            {
              this.state.showMenu
                ? (

                  <div
                    className="menu"
                    ref={(element) => {
                      this.dropdownMenu = element;
                    }}
                  >

                    <button
                      className="mobileNavItemWidth ma2 link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color f6 fw6 ttu">
                        {/*react-scroll component*/}
                        <Link   activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {duration}>
                        about
                        </Link>
                    </button><br/>

                    <button
                      className="mobileNavItemWidth ma2 link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color f6 fw6 ttu">
                        {/*react-scroll component*/}
                        <Link   activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {duration}>
                        blog
                        </Link>
                    </button><br/>

                    <button
                      className="mobileNavItemWidth ma2 link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color f6 fw6 ttu">
                        {/*react-scroll component*/}
                        <Link   activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {duration}>
                        portfolio
                        </Link>
                    </button><br/>

                    <button
                      className="mobileNavItemWidth ma2 link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill nav-color f6 fw6 ttu">
                        {/*react-scroll component*/}
                        <Link   activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {duration}>
                        contact
                        </Link>
                    </button>

                </div>
              )
              : (
                null
              )
          }
        </div>
        </div>
        )}
    </Transition>
    );
  }
}

export default DropDownNavbar;