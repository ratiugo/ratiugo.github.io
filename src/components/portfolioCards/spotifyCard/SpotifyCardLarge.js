import React from "react";
import "./SpotifyCard.css";

const SpotifyCardLarge = ({onClick, title}) => {
    return (
        <div className="ma4 bg-black-30 br3 dimension pointer dim flex justify-center items-center"
             onClick = {onClick} >
            <div className = "w-75 h-75 flex justify-center items-start">
                <p className = "">Spotify Recently Played Playlist</p>
            </div>
        </div>
    );
}

export default SpotifyCardLarge;