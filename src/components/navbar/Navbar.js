import React from 'react';
import {Link} from 'react-scroll'

const Navbar = ({scrollToTop}) => {
    return(
            <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
              <nav className="f6 fw6 ttu tracked">

                    <li onClick = {scrollToTop}
                        className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill">
                        home
                    </li>

                    <li className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill">
                        <Link   activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {750}>
                        about
                        </Link>
                    </li>

                    <li className="link dim mid-gray dib mr2 pointer pa1 shadow-2 br-pill">
                        <Link   activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {750}>
                        portfolio
                        </Link>
                    </li>

                    <li className="link dim mid-gray dib mr1 pointer pa1 fr shadow-2 br-pill">
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
 );
}

export default Navbar;