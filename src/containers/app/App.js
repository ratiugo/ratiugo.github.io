import React, {Component} from "react";
import "./App.css";

//libraries
import Particles from "react-particles-js";
import MediaQuery from "react-responsive";
import SpotifyWebApi from "spotify-web-api-js";
import { Base64 } from 'js-base64';

//containers
import Navbar from "../../containers/navbar/Navbar";
import Blog from "../../containers/blog/Blog";
import DropDownNavbar from "../../containers/dropDownNavbar/DropDownNavbar";
import Portfolio from "../../containers/portfolio/Portfolio";
import SpotifyPlaylist from "../../containers/spotifyPlaylist/SpotifyPlaylist";

//components
import Title from "../../components/title/Title";
import MiniBio from "../../components/minibio/MiniBio";
import AboutMe from "../../components/aboutMe/AboutMe";
import LargeCard from "../../components/portfolioCards/largeCard/LargeCard";
import SpotifyCardLarge from "../../components/portfolioCards/spotifyCard/SpotifyCardLarge";
import SmallCard from "../../components/portfolioCards/smallCard/SmallCard";
import Contact from "../../components/contact/Contact";
import ExampleProject from "../../components/exampleProject/ExampleProject";

// settings for animated background particles
const particlesOptions = {

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 710.2328774690454
      }
    },
    opacity: {
      value: 0.04008530152163807,
      random: false,
    },
    size: {
      value: 0,
      random: true,
      anim: {
        enable: false,
        speed: 26.79854800594439,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 144.30708547789706,
      color: "#ffffff",
      opacity: 0.07215354273894853,
      width: 3.206824121731046
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
        onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  "retina_detect": true
};

const spotifyApi = new SpotifyWebApi();
const client_id = ""; // Your client id
const client_secret = ""; // Your secret
let interval;

// main app component rendered in index.js
class App extends Component {

  constructor(props){
    super(props);

    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    // initialize state to change project view within the portfolio
    this.state = {
        "portfolio": "homeview",
        token: token,
        id: "",
        loggedIn: token ? true : false,
        trackUris: [],
        playlistUris: [],
        playlistId: ""
    };
  }

  getNewToken = async function(url = "https://accounts.spotify.com/api/token"){
    const params = this.getHashParams();
    const refreshToken = params.refresh_token;

    let body = {
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    };

    let formBody = [];

    for (let property in body) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let auth = Base64.encode(client_id + ":" + client_secret);

    const response = await fetch(url, {
      method: "POST",
      body: formBody,
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic "+auth
      }
    });

    await response.json().then(data => {
      this.setState({token: data.access_token});
    });
  }

  //to decode authentication token
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  //create new playlist called "Recently Played"
  createRecentlyPlayedPlaylist = async function(url = "https://api.spotify.com/v1/users/"+this.state.id+"/playlists", data = {}){
    const authToken = this.state.token;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: "Recently Played",
        description: "recent_tracks",
        public: false
      }),
      headers: {
        "Authorization": "Bearer "+authToken,
        "Content-Type": "application/json"
      }
    });
  }

  //get user id
  getUserId = async function(url = "https://api.spotify.com/v1/me", data = {}){
    await this.getNewToken();
    const authToken = this.state.token;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+authToken,
      }
    });

    await response.json().then(data => {
      this.setState({id: data.id});
    });

  }

  //get playlist id
  getPlaylistId = async function(url = "https://api.spotify.com/v1/users/"+this.state.id+"/playlists?limit=50", data = {}){
    const authToken = this.state.token;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+authToken,
        "Content-Type": "application/json"
      }
    });

    await response.json().then(data => {

      let playlistId = "";
      data.items.forEach(item => {
        if(item.description === "recent_tracks"){
          playlistId = item.id
        }
      });

      this.setState({
        playlistId: playlistId
      });

    });
  }

  //grab trackUris of 50 most recently played tracks
  getRecentlyPlayedTracks = async function(url = "https://api.spotify.com/v1/me/player/recently-played?limit=50", data = {}){
    const authToken = this.state.token;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+authToken,
      }
    });

    await response.json().then(data => {

      let trackUris = [];

      data.items.forEach(item => {
        trackUris.push(item.track.uri);
      });

      this.setState({trackUris:trackUris});

    });
  }

  // add recently played tracks to playlist
  addRecentlyPlayedTracks = async function(url = "https://api.spotify.com/v1/playlists/"+this.state.playlistId+"/tracks", data = {}){
    const authToken = this.state.token;
    let trackUris = JSON.stringify(this.state.trackUris);
    await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "Bearer "+authToken,
        "Content-Type": "application/json"
      },
      body: trackUris
    });
  }

  //get uris of tracks currently in the recently played playlist
  getPlaylistUris = async function(url = "https://api.spotify.com/v1/playlists/"+this.state.playlistId+"/tracks?limit=50", data = {}){
    const authToken = this.state.token;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+authToken
      }
    });

    await response.json().then(data => {
      let playlistUris = [];

      data.items.forEach(item => {
        playlistUris.push(item.track.uri);
      });

      this.setState({playlistUris: playlistUris});

    });

  }

  //clear playlist - for updating so that the playlist doesn't get massive
  clearRecentlyPlayedTracks = async function(url = "https://api.spotify.com/v1/playlists/"+this.state.playlistId+"/tracks", data = {}){
    const authToken = this.state.token;
    this.getPlaylistUris();
    let playlistUris = this.state.playlistUris;
    let tracks = [];

    playlistUris.forEach(uri => {
      let trackObject = {
        uri: uri
      }
      tracks.push(trackObject);
    });

    await fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer "+authToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      "tracks": tracks
      })
    });

  }

  //create playlist if it doesn't already exist
  //clear playlist contents
  //fill with recently played
  update = async function(){
    await this.getUserId();
      if(this.state.id){
        await this.getPlaylistId()
          if(!this.state.playlistId){
            await this.createRecentlyPlayedPlaylist();
            await this.getPlaylistId();
            await this.getRecentlyPlayedTracks();
            await this.addRecentlyPlayedTracks();
          }
          else {
            await this.getPlaylistId();
            await this.getPlaylistUris();
            await this.clearRecentlyPlayedTracks();
            await this.getRecentlyPlayedTracks();
            await this.addRecentlyPlayedTracks();
          }
      }
  }

  updateInterval = () => {
    console.log("updateInterval")
    let that = this;
    that.update();
    that.getNewToken();
  }

  constantUpdate = (update = true) => {
    if(update === true){
      if(this.state.loggedIn){
        interval = setInterval(this.updateInterval, 3000);
      }
      else fetch("http://localhost:8888/login");
    }
    else {
      clearInterval(interval);
    }
  }

  // change portfolio state when a project card is clicked
  cardClicked = (cardSelected = "") => {
    this.setState({
      "portfolio": cardSelected
    });
  }

  // change portfolio state back to home when back button is clicked
  backtohomeview = () => {
    this.setState({
      "portfolio": "homeview"
    });
  }

  choosePortfolioDisplay = () => {
    switch(this.state.portfolio){
      case("homeview"):
        return(
          <Portfolio
            cardClicked = {this.cardClicked}/>
        );
      case("spotify"):
        return(
          <SpotifyPlaylist
            goBack = {this.backtohomeview}
            update = {this.constantUpdate}
            loggedIn = {this.state.loggedIn}/>
        );
      case("example"):
        return(
          <ExampleProject onClick = {this.backtohomeview}/>
        );
      default: return (<Portfolio cardClicked = {this.cardClicked}/>);

    }
  }

  render(){

    // assign portfolio state to an easier to use variable
    const {portfolio} = this.state;

    return (
            <div>

              <Particles className = "particles"
                params = {particlesOptions}
              />

              <MediaQuery query="(min-width: 768px)">
                <Navbar />
              </MediaQuery>

              <MediaQuery query="(max-width: 768px)">
                <DropDownNavbar />
              </MediaQuery>

              <Title />

              <MiniBio />

              <AboutMe id = "aboutme" />

              <Blog id = "blog" />

              {/*portfolio component - in this file for state changes*/}
              <div className = "vh-100 w-100 center mt5" id= "portfolio">
                <div className = "w-75 center">
                  <div className = "pa3">
                    <h1 className = "tc pt3 fw5">Portfolio</h1>
                    <div className = "bb w-75 center">
                    </div>
                  </div>
                  <div>
                    {this.choosePortfolioDisplay()}
                  </div>
                </div>
              </div>
              <Contact id = "contact" />
            </div>
    );
  }
}

export default App;
