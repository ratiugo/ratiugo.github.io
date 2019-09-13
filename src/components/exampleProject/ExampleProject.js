import React from "react";
import "./ExampleProject.css";

const ExampleProject = ({onClick}) => {
    return(
            <div className = "scroll">
                <div className = "vh-75 outer fl flex items-start ma3">
                    <div className = "pointer dim mid-gray b background-color br-pill pa2"
                         onClick = {onClick} >
                        Back
                    </div>
                </div>
            </div>
 );
}

export default ExampleProject;