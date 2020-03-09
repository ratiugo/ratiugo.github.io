import React from "react";
import "./SpotifyCard.css";

const SpotifyCard = ({onClick, title}) => {
    return (
        <div className="ma3 bg-black-30 br3 dimension2 ba b--black-10 pointer dim flex spotify-app-image"
             onClick = {onClick} >
            <div className = "h-100 flex justify-center items-start">
                <div className = "bg-black-70 br3 pa3">
                    <p className = "i white f6">Spotify Recently Played Playlist web app</p>
                </div>
            </div>
        </div>
    );
}

export default SpotifyCard;