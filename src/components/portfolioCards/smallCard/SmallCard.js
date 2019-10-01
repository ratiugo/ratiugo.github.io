import React from "react";
import "./SmallCard.css";

const SmallCard = ({onClick, title}) => {
    return (
        <div className="ma3 bg-black-30 br3 dimension2 ba b--black-10 pointer dim flex justify-center items-center"
             onClick = {onClick} >
            <p>{title}</p>
        </div>
    );
}

export default SmallCard;