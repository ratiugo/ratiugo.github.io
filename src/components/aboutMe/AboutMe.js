import React from 'react';
import './AboutMe.css';

const AboutMe = ({id}) => {
    return(
            <div className = 'vh-100 w-75 center mt5' id = {id}>
                <div className = 'border-height'>
                    <h1 className = 'tc pt5 fw5 underline'>About Me</h1>
                </div>
            </div>
 );
}

export default AboutMe;