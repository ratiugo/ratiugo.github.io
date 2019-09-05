import React from 'react';
import './SmallCard.css';

const SmallCard = ({card}) => {
    return (
        <div className="ma3 bg-white br3 dimension2 ba b--black-10 pointer dim flex justify-center items-center"
             onClick = {card} >
            <p>Example Project</p>
        </div>
 );
}

export default SmallCard;