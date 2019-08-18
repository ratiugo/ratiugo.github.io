import React from 'react';
import './Portfolio.css';


const Portfolio = ({id}) => {
    return(
            <div className = 'vh-100 w-100 center mt5' id={id}>
                <div className = 'w-75 center'>
                    <h1 className = 'tc pt5 fw5 underline'>Portfolio</h1>
                    <div className = 'vh-75 ba br3 shadow-5 b--dark-gray'>
                    </div>
                </div>
            </div>
 );
}

export default Portfolio;