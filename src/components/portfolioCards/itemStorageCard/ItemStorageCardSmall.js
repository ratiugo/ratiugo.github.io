import React from "react";
import "./ItemStorageCard.css";

const ItemStorageCardSmall = ({onClick, title}) => {
    return (
        <div className="ma3 bg-black-30 br3 dimension2 ba b--black-10 pointer dim flex justify-center items-center itemStorage-image"
             onClick = {onClick} >
            <div className = "h-100 flex justify-center items-start">
                <div className = "bg-black-70 br3 pa3">
                    <p className = "i white f6">Item Storage PHP/SQL app</p>
                </div>
            </div>
        </div>
    );
}

export default ItemStorageCardSmall;