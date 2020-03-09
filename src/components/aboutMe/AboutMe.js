import React from "react";
import picture from "../../images/climb3.jpeg";
import Resume from "../../coltonwilliams.resume.feb2020.pdf";

import "./AboutMe.css";

const AboutMe = ({id}) => {
    return (
        <div className = "center mt5" id = {id}>
            <h1 className = "tc pt5 fw5">About Me</h1>
            <div className = "bb w-50 center">
            </div>
                <div className = "flex flex-wrap justify-center items-center mt3">
                        <div className = " o-90 imgWrapper flex flex-wrap items-end ma2 justify-center">
                            <img src = {picture}
                                className="br3 ba b--black-10 content dim"
                                alt = ""/>
                            <div className = "text white-90 i pa2 hidden">
                                <h2>Squamish, BC</h2>
                                <h3>Grand Wall Base Area</h3>
                                <p>Arrowroot, 5.10b</p>
                            </div>
                        </div>



                    <div className = "infoText flex flex-column ma2">
                        <h4 className = "ma2 i">Hi, I'm Colton.</h4><br/>
                        <p className = "lh-copy ma2 i">I'm a self-taught web developer, with an educational background in various programming languages (C, Verilog, Assembly), computer hardware, and electronics. I've been spending the last few months teaching myself HTML/CSS/Javascript, React, and a number of Amazon's web services, and I'll be updating what I'm currently working on in my blog below.</p><br/>
                        <p className = "lh-copy ma2 i">I love doing stuff outside, and especially climbing granite cracks in Squamish. I'm up there nearly every weekend I can during the season. I've been playing guitar for over 10 years, I built an acoustic guitar from scratch in high school, and I've been having a lot of fun tinkering with my own guitar pedal designs lately.</p><br/>
                        <p className = "lh-copy ma2 i ">This is my first major web project, but I'm always interested in building things. If there's any sort of project you'd like me to work on, or want to know any more info, feel free to contact me below!</p><br/><br/>
                        <a href={Resume} download className = "b noLink background-color black i ma4 flex justify-center pa2 shadow-2 br-pill link dim"><p>Download my resume!</p></a>
                    </div>
                </div>

        </div>
    );
}

export default AboutMe;