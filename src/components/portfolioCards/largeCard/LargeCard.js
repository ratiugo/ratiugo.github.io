import React from 'react';
import './LargeCard.css';

const LargeCard = ({card}) => {
    return (
        <div className="ma4 bg-white br3 dimension ba b--black-10 pointer dim flex justify-center items-center"
             onClick = {card} >
            <p>Example Project</p>
        </div>
 );
}

export default LargeCard;