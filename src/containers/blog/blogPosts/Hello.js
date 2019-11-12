import React from "react";

const Hello = ({onClick}) => {
    return(
            <div className = "vh-75 outer fl flex flex-column items-start ma3">

                <div className = "pointer dim mid-gray b background-color br-pill pa2"
                     onClick = {onClick} >
                    Back
                </div>

                <div className = "scroll">
                <div className = "w-100">
                        <div className = "w-75 center">
                            <p className = "fw5">
                                Hello!

                                <br/><br/><br/>

                                This is my first post in my blog, where I'll write about what I'm working on,
                                what I've learnt and where I'm at in my career.

                                <br/><br/>

                                As I'm learning, it's helpful for me to log my progress, especially with trickier roadblocks,
                                and hopefully it will become useful for other learning developers in the future.

                                <br/><br/>

                               I've only recently published this website, as it was my first major personal software project.
                               I'm using React.js for the front-end, mostly using Tachyons for styling. The only back-end I've had
                               to implement so far is sending myself messages through my contact form, which I used Node.js for in an Amazon
                               Lambda function.

                               <br/><br/>

                               Getting my contact form to work was probably the most challenging aspect of this project, and I chose
                               to use Amazon Web Services' (AWS) tools to do most of the heavy lifting. On a successful submission of
                               the contact form, the form data is POSTed to the AWS API Gateway, which invokes my Lambda function, which
                               simply sends the form data to me via email using the Simple Email Service (SES). To make integration simple,
                               I also chose to purchase my domain and host the site through AWS.

                               <br/><br/>

                               For the most part, I found learning AWS simply takes time and a willingness to carefully read the docs,
                               but I'll link a few articles I found really helpful along the way.

                               <br/><br/>
                                            <a
                                                href = "https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/"
                                                target = "blank">
                                                Amazon blog on creating a serverless contact form.
                                            </a>

                               <br/><br/>
                                            <a
                                                href = "https://medium.com/calyx/serverless-contact-forms-with-aws-lambda-79959cd1a6cd"
                                                target = "blank">
                                                Medium blog on the same thing, but I found using both the most helpful.
                                            </a>

                                <br/><br/>

                                Moving forward, first I'm figuring out how to write and publish my own RSS feed for this blog, and I'll
                                write a detailed post once I'm done that. I'm also working on building a simple personal website for my co-worker to promote his music, which
                                will functionally be very similar to my own site, so I expect that it should go quite smoothly. In order to
                                dig deeper in to back-end development, I'd like to try automating the creation of a personal spotify playlist.
                                I plan on basically making a little app that monitors the song I've listened to most in a week, and adding it
                                to the playlist. Once I get that working, I'll be able to take it in a ton of different directions, and I
                                haven't quite decided what I'll do from there.

                                <br/><br/>

                                Thanks for reading!<br/><br/>
                                Cheers,<br/>
                                Colton

                            </p>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Hello;