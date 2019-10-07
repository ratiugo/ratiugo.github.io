import React from "react";
import ContactMeForm from "../contactMeForm/ContactMeForm";
import MediaQuery from "react-responsive";

import "./Contact.css";

const Contact = ({id}) => {
    return(
            <div className = "vh-100 mt5" id = {id}>
                <h1 className = "tc pt5 fw5 center">Contact Me</h1>
                    <div className = "bb w-50 center">
                    </div>
                    <div className = "">
                        <div className = " flex flex-wrap justify-around">
                            <ContactMeForm />

                            {/*media query for different info layout for large devices*/}
                            <MediaQuery query="(min-width: 768px)">
                                <div className = "w-75 flex flex-wrap items-center justify-center">
                                    <p className="pt3 pb3 f4-ns black ml4 i">Colton Williams</p>
                                    <p className="pt3 pb3 f4-ns black ml4 i">coltontfw@gmail.com</p>
                                    <a href = "https://www.linkedin.com/in/colton-williams-a1b020134/"
                                       target = "blank"
                                       className = "pt3 pb3 f4-ns pa2 background-color black ml4 i shadow-2 br-pill link dim">
                                       linkedin
                                    </a>
                                    <a href = "https://github.com/ratiugo"
                                       target = "blank"
                                       className = "pt3 pb3 f4-ns pa2 background-color black ml4 i shadow-2 br-pill link dim">
                                       github
                                    </a>
                                </div>
                            </MediaQuery>

                            {/*media query for different info layout for small devices*/}
                            <MediaQuery query="(max-width: 768px)">
                                <div className = "w-75 flex flex-wrap items-center justify-start">
                                    <p className="pt3 pb3 f4-ns black ml4 i">Colton Williams</p>
                                    <p className="pt3 pb3 f4-ns black ml4 i">coltontfw@gmail.com</p>
                                    <a href = "https://www.linkedin.com/in/colton-williams-a1b020134/"
                                       target = "blank"
                                       className = "pt3 pb3 f4-ns pa2 background-color black ml4 i shadow-2 br-pill link dim">
                                       linkedin
                                    </a>
                                    <a href = "https://github.com/ratiugo"
                                       target = "blank"
                                       className = "pt3 pb3 f4-ns pa2 background-color black ml4 i shadow-2 br-pill link dim">
                                       github
                                    </a>
                                </div>
                            </MediaQuery>

                        </div>
                    </div>
                <br/>
                <footer className = "pt2 center w-75">Made By Colton Williams</footer>
                    <div className = "bb mt2 mb4 w-75 center">
                    </div>
            </div>
    );
}

export default Contact;