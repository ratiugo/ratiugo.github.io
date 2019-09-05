import React from 'react';
import './ExampleProject.css';

const ExampleProject = ({backtohomeview}) => {
    return(
            <div className = 'scroll br3 shadow-5 b--dark-gray'>
                <div className = 'vh-75 outer fl flex items-start ma3'>
                    <div className = 'pointer dim shadow-1 background-color br-pill pa2'
                         onClick = {backtohomeview} >
                        Back
                    </div>
                </div>
            </div>
 );
}

export default ExampleProject;