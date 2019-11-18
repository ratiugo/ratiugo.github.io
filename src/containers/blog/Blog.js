import React, {Component} from "react";

import MediaQuery from "react-responsive";

import "./Blog.css";

import Hello from "./blogPosts/Hello";
import UpdateSiteAWS from "./blogPosts/UpdateSiteAWS";


class Blog extends Component {

    constructor() {
        super();

        //initialize state for navigating blog
        this.state = {
            blog: "main-view"
        }
    }

    //set blog state to date of entry
    setBlogStateTo = (receivedState) => {
        this.setState({
            blog: receivedState
        });
    }

    //return to the entry list after clicking the back button inside an entry
    returnToBlogList = () => {
        this.setState({
            blog: "main-view"
        });
    }

    returnToBlogListSmart = (blogData) => {
        this.setState({
            blog: blogData
        })
    }


    render(){

        const {blog} = this.state;
        let blogPost = null;

        //route clicked blog to be rendered
        switch (this.state.blog) {
            case "11/12/2019":
                blogPost = <Hello onClick = {this.returnToBlogList}/>;
                break;
            case "11/18/2019":
                blogPost = <UpdateSiteAWS blogCallback = {this.returnToBlogListSmart}/>;
                break;
            default:
                blogPost = null;
        }



            return (
                <div className = "vh-100 w-100 center mt5" id= "blog">

                    {blog === "main-view" ?
                        <div className = "w-75 center">
                            <div className = "pa3">
                                <h1 className = "tc pt3 fw5">Blog</h1>
                                <div className = "bb w-75 center">
                                </div>
                            </div>

                                <div>
                                    <MediaQuery query="(max-width: 768px)">
                                        <div className = "w-75 center">
                                            <div className = "flex scroll">
                                                <ul>
                                                {/*
                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("11/18/2019")}
                                                    >
                                                        11/18/2019 - Updating website hosted with AWS
                                                    </li><br/><br/>
                                                */}

                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("11/12/2019")}
                                                    >
                                                        11/12/2019 - Hello!
                                                    </li><br/><br/>

                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>

                                    <MediaQuery query="(min-width: 768px)">
                                        <div className = "w-75 center">
                                            <div className = "flex justify-start scroll">
                                                <ul>
                                                {/*
                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("11/18/2019")}
                                                    >
                                                        11/18/2019 - Updating website hosted with AWS
                                                    </li><br/><br/>
                                                */}

                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("11/12/2019")}
                                                    >
                                                        11/12/2019 - Hello!
                                                    </li><br/><br/>

                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>
                                </div>
                        </div>
                    :
                        <div className = "w-100 center">
                            <div className = "pa3">
                                <h1 className = "tc pt3 fw5">Blog</h1>
                                <div className = "bb w-50 center">
                                </div>
                            </div>

                                <div>
                                    {blogPost}
                                </div>
                        </div>
                    }

                </div>
            );
    }
}

export default Blog;