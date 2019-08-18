import React from 'react';
import ContactMeForm from '../contactMeForm/ContactMeForm';
import './Contact.css';

const Contact = ({id}) => {
    return(
            <div className = 'vh-100 mt5' id = {id}>
                <h1 className = 'tc pt5 fw5 underline center'>Contact Me</h1>
                    <div className = ''>
                        <div className = 'pt3 flex flex-wrap justify-around'>
                            <ContactMeForm className = 'contactForm' />
                            <div className = 'ma2 br3 shadow-5 infoBox'>
                                <p className="pt3 pb3 f4-ns black ml4 b">Colton Williams</p>
                                <p className="pt3 pb3 f4-ns black ml4 i">coltontfw@gmail.com</p>
                                <p className="pt3 pb3 f4-ns black ml4 i">778-240-9616</p>
                                <a href = 'https://www.linkedin.com/in/colton-williams-a1b020134/'
                                   target = 'blank'
                                   className = 'pt3 pb3 f4-ns pa2 background-color black ml4 i shadow-2 br-pill link dim'>
                                   linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                <br/>
             <footer className = 'pt2 center w-75'>Made By Colton Williams</footer>
                <div className = 'bb mt2 mb4 w-75 center'>
                </div>
            </div>
 );
}

export default Contact;