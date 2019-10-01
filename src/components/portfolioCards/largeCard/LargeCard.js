import React from "react";
import "./LargeCard.css";

const LargeCard = ({onClick, title}) => {
    return (
        <div className="ma4 bg-black-30 br3 dimension pointer dim flex justify-center items-center"
             onClick = {onClick} >
            <p>{title}</p>
        </div>
    );
}

export default LargeCard;