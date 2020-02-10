import React from "react";
import "./ItemStorageCard.css";

const ItemStorageCardLarge = ({onClick, title}) => {
    return (
        <div className="0-20 ma4 bg-black-30 br3 dimension pointer dim flex justify-center items-center itemStorage-image"
             onClick = {onClick} >
            <div className = "h-100 flex justify-center items-start">
                <div className = "bg-black-70 br3 pa3">
                    <p className = "i white">Item Storage PHP/SQL app</p>
                </div>
            </div>
        </div>
    );
}

export default ItemStorageCardLarge;