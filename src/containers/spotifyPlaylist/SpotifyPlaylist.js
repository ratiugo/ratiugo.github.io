import React, {Component} from "react";
import "./SpotifyPlaylist.css";

class SpotifyPlaylist extends Component {

    goBack = () => {
        this.props.goBack();
    }

    constantUpdate = () => {
        this.props.update();
    }

    stop = () => {
        this.props.update(false);
    }

    render(){

        let loggedIn = this.props.loggedIn;

        return(
                <div className = "scroll">
                    <div className = "vh-75 outer fl flex flex-column items-start ma3">
                        <div className = "pointer dim mid-gray b background-color br-pill pa2"
                             onClick = {this.goBack} >
                            Back
                        </div>
                            <div className="App flex flex-column center mt3">

                                    <p className = "ma4">
                                        Hi, thanks for checking this app out. I've designed a simple app
                                        where with the click of a button, you can create an auto-updating Spotify
                                        playlist of your 50 most recently played tracks. Currently, there is no way
                                        to see your recently played tracks on Spotify mobile. This is a fairly
                                        hidden feature already within the Spotify desktop app, and I expect
                                        the ability to view your recently played tracks will come to mobile soon,
                                        but for now, having an auto-updating playlist is the closest you can get!
                                    </p>
                                    <br />
                                    <p className = "ma4">
                                        The app requires a bunch of permissions in order to create and edit playlists, and as a
                                        warning, the only way to stop the playlist currently is by clicking the "Stop Updating"
                                        button once you're logged in. I'm still playing around with it a lot, but if you want to
                                        try it out, simply log in to Spotify and hit the "Create / Reset Playlist" button that
                                        pops up. Feel free to email me if you have any questions.
                                    </p>

                                    <div className = "center">
                                        <a
                                            href="http://localhost:8888/login"
                                            className="br-pill ba ma3 pa3 dib link dim white fw7 spotifyGreen"
                                        > Login to Spotify </a>
                                    </div>

                                    {loggedIn &&
                                        <div className="center mt3">
                                            <button
                                                onClick={this.constantUpdate}
                                                className="f6 link dim br-pill ph3 pv2 mb2 dib ma3"
                                            >
                                                Create / Reset Playlist
                                            </button>
                                            <button
                                                onClick={this.stop}
                                                className="f6 link dim br-pill ph3 pv2 mb2 dib ma3"
                                            >
                                                Stop Updating
                                            </button>
                                        </div>
                                    }
                                    <br />
                            </div>
                    </div>
                </div>
        );
    }
}

export default SpotifyPlaylist;