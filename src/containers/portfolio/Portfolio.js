import React, {Component} from "react"
import MediaQuery from "react-responsive";

import SmallCard from "../../components/portfolioCards/smallCard/SmallCard";
import LargeCard from "../../components/portfolioCards/largeCard/LargeCard";
import SpotifyCardLarge from "../../components/portfolioCards/spotifyCard/SpotifyCardLarge";
import SpotifyCardSmall from "../../components/portfolioCards/spotifyCard/SpotifyCardSmall";

class Portfolio extends Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-width: 768px)">
                  <div className = "scroll">
                    <div className = "vh-75 outer fl flex items-center">
                      <SpotifyCardLarge
                            onClick = {() => this.props.cardClicked("spotify")}
                            className = " "
                            title = ""/>
                      <LargeCard
                            onClick = {() => this.props.cardClicked("example")}
                            className = " "
                            title = ""/>
                      <LargeCard
                            onClick = {() => this.props.cardClicked("example")}
                            className = " "
                            title = ""/>
                    </div>
                  </div>
                </MediaQuery>

                <MediaQuery query="(max-width: 768px)">
                  <div className = "vh-75 flex items-center">
                    <div className = "scroll">
                      <div className = "vh-50 outer fl flex items-center">
                          <SpotifyCardSmall
                                onClick = {() => this.props.cardClicked("spotify")}
                                className = " "
                                title = ""/>
                          <SmallCard
                                onClick = {() => this.props.cardClicked("example")}
                                className = " "/>
                          <SmallCard
                                onClick = {() => this.props.cardClicked("example")}
                                className = " "/>
                      </div>
                    </div>
                  </div>
                </MediaQuery>
              </div>
        );
    }
}

export default Portfolio;