import React, {Component} from "react"
import MediaQuery from "react-responsive";

import SmallCard from "../../components/portfolioCards/smallCard/SmallCard";
import LargeCard from "../../components/portfolioCards/largeCard/LargeCard";
import SpotifyCardLarge from "../../components/portfolioCards/spotifyCard/SpotifyCardLarge";
import SpotifyCardSmall from "../../components/portfolioCards/spotifyCard/SpotifyCardSmall";

class Portfolio extends Component{
    render(){
        return(
          <div className = "vh-100 w-100 center mt5" id = {this.props.id}>
            <div className = "w-75 center">
              <div className = "pa3">
                <h1 className = "tc pt3 fw5">Portfolio</h1>
                  <div className = "bb w-75 center">
                  </div>
              </div>
                <div>
                  <div>
                      <MediaQuery query="(min-width: 768px)">
                        <div className = "scroll">
                          <div className = "vh-75 outer fl flex items-center">
                            <SpotifyCardLarge
                              onClick = {function(){window.location.href = 'http://recently-played-app.s3-website-us-west-2.amazonaws.com/'}}
                            />
                            <LargeCard />
                            <LargeCard />
                          </div>
                        </div>
                      </MediaQuery>

                      <MediaQuery query="(max-width: 768px)">
                        <div className = "vh-75 flex items-center">
                          <div className = "scroll">
                            <div className = "vh-50 outer fl flex items-center">
                                <SpotifyCardSmall
                                  onClick = {function(){window.location.href = 'http://recently-played-app.s3-website-us-west-2.amazonaws.com/'}}
                                />
                                <SmallCard />
                                <SmallCard />
                            </div>
                          </div>
                        </div>
                      </MediaQuery>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Portfolio;