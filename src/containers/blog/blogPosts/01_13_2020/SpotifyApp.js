import React from "react";

import MediaQuery from "react-responsive";

const SpotifyApp = ({onClick}) => {
    return(
            <div className = "vh-75 outer fl flex flex-column items-start ma3">

                <div className = "pointer dim mid-gray b background-color br-pill pa3"
                     onClick = {onClick} >
                    Back
                </div>

                <MediaQuery query="(min-width: 768px)">
                  <div className = "scroll mt5">
                    <div className = "w-75 center">
                      <div className = "fw5">
                          Hello!

                          <br/><br/><br/>

                          I have just finished my first major back-end project, a Spotify app which allows you
                          to create a playlist that is instantly filled with the 50 most recently played tracks
                          on your account, and I thought I'd write a little about the experience. Currently, there
                          is only a feature to view your recently played tracks on the desktop Spotify app. I'm
                          assuming it is coming soon to the mobile app, as the key API endpoint I'm using is in beta as
                          of now, but I thought this would be a great way to start learning some back-end!

                          <br/><br/>

                          Initially, I designed the app to be constantly auto-updating, so that I would always
                          be able to see my recently played songs in real-time, but as this was just a fun little project,
                          I didn't want to spend any money to keep hosting it somewhere other than my laptop, and I've
                          just made it refreshable for open use instead. Also, the Spotify tokens are simply used as URL
                          query strings, which is completely not secure, and I'll change that eventually if I or my friends
                          use this enough.

                          <br/><br/>

                          Basically, the process I used to do this is as follows, all done through calls to the Spotify Web API:<br/>
                          1) Create a playlist with the title "Recently Played"<br/>
                          2) Get and store the ID of the playlist<br/>
                          3) Get and store the 50 most recently played tracks of the user<br/>
                          4) Add those tracks to the playlist

                          <br/><br/>

                          All of the above are relatively simple API calls, and I've posted the code here:
                            <a
                              href = "https://github.com/ratiugo/recently-played-spotify-app"
                              target = "blank">
                              https://github.com/ratiugo/recently-played-spotify-app
                            </a>

                          <br/><br/>

                          The most challenging part of all of this was learning OAuth2.0 to authenticate Spotify users,
                          and then hosting the server which does this cheaply somewhere. I won't go through the details of OAuth as there's plenty
                          of resources online (although I discovered the service auth0 after all of this work), but I
                          ended up hosting it as a Lambda function in AWS, using Claudia.js to do most of the
                          heavy lifting setting up my express server as a serverless Lambda function. With the amount
                          of use this app will be getting, hosting it should now be entirely free, which is what I was
                          looking for.

                          <br/><br/>

                          Thanks for reading!<br/><br/>
                          Cheers,<br/>
                          Colton

                      </div>
                    </div>
                </div>
              </MediaQuery>

              {/*Widen text on mobile*/}
              <MediaQuery query="(max-width: 768px)">
                <div className = "scroll mt5">
                  <div className = "w-100 center">
                    <div className = "fw5">
                        Hello!

                        <br/><br/><br/>

                        I have just finished my first major back-end project, a Spotify app which allows you
                        to create a playlist that is instantly filled with the 50 most recently played tracks
                        on your account, and I thought I'd write a little about the experience. Currently, there
                        is only a feature to view your recently played tracks on the desktop Spotify app. I'm
                        assuming it is coming soon to the mobile app, as the key API endpoint I'm using is in beta as
                        of now, but I thought this would be a great way to start learning some back-end!

                        <br/><br/>

                        Initially, I designed the app to be constantly auto-updating, so that I would always
                        be able to see my recently played songs in real-time, but as this was just a fun little project,
                        I didn't want to spend any money to keep hosting it somewhere other than my laptop, and I've
                        just made it refreshable for open use instead. Also, the Spotify tokens are simply used as URL
                        query strings, which is completely not secure, and I'll change that eventually if I or my friends
                        use this enough.

                        <br/><br/>

                        Basically, the process I used to do this is as follows, all done through calls to the Spotify Web API:<br/>
                        1) Create a playlist with the title "Recently Played"<br/>
                        2) Get and store the ID of the playlist<br/>
                        3) Get and store the 50 most recently played tracks of the user<br/>
                        4) Add those tracks to the playlist

                        <br/><br/>

                        All of the above are relatively simple API calls, and I've posted the code here:
                            <a
                              href = "https://github.com/ratiugo/recently-played-spotify-app"
                              target = "blank">
                              https://github.com/ratiugo/recently-played-spotify-app
                            </a>

                        <br/><br/>

                        The most challenging part of all of this was learning OAuth2.0 to authenticate Spotify users,
                        and then hosting the server which does this cheaply somewhere. I won't go through the details of OAuth as there's plenty
                        of resources online (although I discovered the service auth0 after all of this work), but I
                        ended up hosting it as a Lambda function in AWS, using Claudia.js to do most of the
                        heavy lifting setting up my express server as a serverless Lambda function. With the amount
                        of use this app will be getting, hosting it should now be entirely free, which is what I was
                        looking for.

                        <br/><br/>

                        Thanks for reading!<br/><br/>
                        Cheers,<br/>
                        Colton

                    </div>
                  </div>
                </div>
              </MediaQuery>

            </div>
    );
}

export default SpotifyApp;