import React, {Component} from "react";

import MediaQuery from "react-responsive";

import "./Blog.css";

import Hello from "./blogPosts/Hello";


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


    render(){

        const {blog} = this.state;
        let blogPost = null;

        //route clicked blog to be rendered
        switch (this.state.blog) {
            case "10/28/2019":
                blogPost = <Hello onClick = {this.returnToBlogList}/>;
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
                                            <div className = "flex">
                                                <ul>
                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("10/28/2019")}
                                                    >
                                                        11/12/2019 - Hello!
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>

                                    <MediaQuery query="(min-width: 768px)">
                                        <div className = "w-75 center">
                                            <div className = "flex justify-start">
                                                <ul>
                                                    <li
                                                        className = "pointer underline dim"
                                                        onClick = {() => this.setBlogStateTo("10/28/2019")}
                                                    >
                                                        11/12/2019 - Hello!
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </MediaQuery>
                                </div>
                        </div>
                    :
                        <div>
                            {blogPost}
                        </div>
                    }

                </div>
            );
    }
}

export default Blog;