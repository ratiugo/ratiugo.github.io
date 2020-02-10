import React, {Component} from "react";

import MediaQuery from "react-responsive";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Blog.css";

import Hello from "./blogPosts/11_12_2019/Hello";
import UpdateSiteAWS from "./blogPosts/11_18_2019/UpdateSiteAWS";
import SpotifyApp from "./blogPosts/01_13_2020/SpotifyApp";


class Blog extends Component {

    constructor() {
        super();

        //initialize state for navigating blog
        this.state = {
            view: "home"
        }

        this.setState = this.setState.bind(this);
        this.returnToBlogList = this.returnToBlogList.bind(this);
    }

    returnToBlogList = () => {
        console.log("return to blog list");
        this.setState({
            view: "home"
        });
            console.log(this.state)
    }

    returnToBlogListSmart = (blogData) => {
        this.setState({
            view: blogData
        })
    }


    render(){

        let that = this;

        let {view} = this.state;

            return (
                <Router>
                    <div className = "w-75 center vh-100">

                        <div className = "pa3">
                            <h1
                                className = "tc pt3 fw5"
                                id = "target">
                                    Blog
                            </h1>
                            <div className = "bb w-75 center">
                            </div>
                        </div>

                        {view === "home" ?
                            <div className = "vh-100 w-100 center mt5" id= "blog">
                                <div>
                                    <MediaQuery query="(max-width: 768px)">
                                        <div className = "w-75 center">
                                            <div className = "flex scroll">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            to = "/blog/01132020"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "spotifyApp"});
                                                                }
                                                            }
                                                        >
                                                        01/13/2020 - Recently Played Spotify App
                                                        </Link>
                                                    </li><br/><br/>

                                                    <li>
                                                        <Link
                                                            to = "/blog/11182019"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "updateSiteAWS"});
                                                                }
                                                            }
                                                        >
                                                        11/18/2019 - Updating website hosted with AWS
                                                        </Link>
                                                    </li><br/><br/>

                                                    <li>
                                                        <Link
                                                            to = "/blog/11122019"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "hello"});
                                                                }
                                                            }
                                                        >
                                                        11/12/2019 - Hello!
                                                        </Link>
                                                    </li><br/><br/>
                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>

                                    <MediaQuery query="(min-width: 768px)">
                                        <div className = "w-75 center">
                                            <div className = "flex justify-start scroll">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            to = "/blog/01132020"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "spotifyApp"});
                                                                }
                                                            }
                                                        >
                                                        01/13/2020 - Recently Played Spotify App
                                                        </Link>
                                                    </li><br/><br/>

                                                    <li>
                                                        <Link
                                                            to = "/blog/11182019"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "updateSiteAWS"});
                                                                }
                                                            }
                                                        >
                                                        11/18/2019 - Updating website hosted with AWS
                                                        </Link>
                                                    </li><br/><br/>

                                                    <li>
                                                        <Link
                                                            to = "/blog/11122019"
                                                            className = "pointer underline dim"
                                                            onClick = {
                                                                function(){
                                                                    that.setState({view: "hello"});
                                                                }
                                                            }
                                                        >
                                                        11/12/2019 - Hello!
                                                        </Link>
                                                    </li><br/><br/>
                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>
                                </div>
                            </div>
                        :

                            <Switch>

                                <Route path = "/blog/01132020">
                                    <SpotifyApp onClick = {that.returnToBlogList}/>
                                </Route>

                                <Route
                                    path = "/blog/11182019"
                                >
                                    <UpdateSiteAWS blogCallback = {that.returnToBlogListSmart}/>
                                </Route>

                                <Route path = "/blog/11122019">
                                    <Hello onClick = {that.returnToBlogList}/>
                                </Route>

                            </Switch>
                        }

                    </div>

                </Router>
            );
    }
}

export default Blog;