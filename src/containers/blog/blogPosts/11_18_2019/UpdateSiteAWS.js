import React, {Component} from "react";
import "./UpdateSiteAWS.css"

import MediaQuery from "react-responsive";

class UpdateSiteAWS extends Component {

  goBack = () => {
         this.props.blogCallback("home");
  }

    render(){
      return(
              <div className = "vh-75 w-100 outer fl flex flex-wrap scroll items-start ma3">

                  <div className = "pointer dim mid-gray b background-color br-pill pa3"
                       onClick = {this.goBack} >
                      Back
                  </div>
                  <div className = "break">
                  </div>

                  <MediaQuery query="(min-width: 768px)">
                    <div className = "w-75 center mt5">
                      <div className = "fw5 w-100">

                        <span>
                          I recently updated my website (everything done with AWS) with a simple blog, and accidentally deleted my bucket www.coltontfwilliams.com that
                          holds the code for my website, and had a bit of a headache getting everything up and running again, so I thought
                          I'd write about what to do in case that happens again.
                        </span>
                        <br/><br/><br/>

                        <span>
                          I'm using an S3 bucket to host my website, and Cloudfront to use my custom domain name (coltontfwilliams.com) which
                          I purchased from Route 53.
                        </span>
                        <br/><br/>

                        <span>
                          In order to ensure both "www.coltontfwilliams.com" and "coltontfwilliams.com" point to my
                          site, I'm using two buckets. One, "www.coltontfwilliams.com", which holds all the files and code for the site and is
                          set up for static hosting, and a second bucket, "coltontfwilliams.com", which is simply set to redirect to the
                          "www.coltontfwilliams.com" bucket.
                        </span>
                        <br/><br/>


                        <span>
                          To set up the redirect, follow this document:
                        </span>
                        <br/><br/>
                          <span>
                            <a
                                href = "https://aws.amazon.com/blogs/aws/root-domain-website-hosting-for-amazon-s3/"
                                target = "blank">
                                https://aws.amazon.com/blogs/aws/root-domain-website-hosting-for-amazon-s3/
                            </a>
                          </span>
                        <br/><br/>

                        <span>
                          Because you cannot update existing files in an S3 bucket, I found it easiest to remove the files from the bucket,
                          and upload the updated files. To remove bucket contents, use "aws s3 rm --recursive s3://www.coltontfwilliams.com"
                          in the command line.
                        </span>
                        <br/><br/>

                        <span>
                          Next, upload the new files by navigating to the root directory, in my case /Users/coltonwilliams/websites/personal/personal-website,
                          and use "aws s3 cp ~/Websites/personal/personal-website s3://www.coltontfwilliams.com --recursive"
                        </span>
                        <br/><br/>

                        <span>
                          To configure the bucket, navigate to S3 -> Properties -> Static website hosting, and click "Use this bucket to host a website". Enter the index document,
                          (usually index.html), and click save.
                        </span>
                        <br/><br/>

                        <span>
                          Finally, to enable public access, navigate to S3 -> Permissions -> Bucket Policy, and enter the following policy:
                        </span>
                        <br/><br/>

                        <pre><code><span className = "code-font-large">{`{"Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource":
      "arn:aws:s3:::your-bucket/*"
    }
  ]
}
                          `}
                        </span></code></pre>
                        <br/>

                        <span>
                          Next, update the origin domain name and path for the Cloudfront distribution by navigating to
                          Cloudfront -> your_distribution -> Origins and Origin Groups. Select your distribution and click "edit".
                        </span>
                        <br/><br/>

                        <span>
                          In Origin Settings, under Origin Domain Name, do not select your bucket from the drop down menu.
                          Instead, enter the endpoint URL found in the main bucket, in my case "www.coltontfwilliams.com",
                          found in S3 -> your_bucket -> Properties -> Static website hosting.
                        </span>
                        <br/><br/>

                        <span>
                          To finish the update, the last step is to update the alias target for the redirect bucket in Route 53. To do this, navigate to
                          Route 53 -> Hosted Zones -> your_domain (coltontfwilliams.com in my case). Select, or create the A - IPv4 address record,
                          and select the redirect bucket under Alias Target. Save the record set, and you should be done!
                        </span>
                        <br/><br/>

                        <span>
                          Thanks for reading!<br/><br/>
                          Cheers,<br/>
                          Colton
                        </span>
                      </div>
                    </div>
                  </MediaQuery>

                  {/*Widen text on mobile*/}
                  <MediaQuery query="(max-width: 768px)">
                    <div className = "w-100 center mt5">
                      <div className = "fw5 w-100">

                        <span>
                          I recently updated my website with a simple blog, and accidentally deleted my bucket www.coltontfwilliams.com that
                          holds the code for my website, and had a bit of a headache getting everything up and running again, so I thought
                          I'd write about what to do in case that happens again.
                        </span>
                        <br/><br/><br/>

                        <span>
                          I'm using an S3 bucket to host my website, and Cloudfront to use my custom domain name (coltontfwilliams.com) which
                          I purchased from Route 53.
                        </span>
                        <br/><br/>

                        <span>
                          In order to ensure both "www.coltontfwilliams.com" and "coltontfwilliams.com" point to my
                          site, I'm using two buckets. One, "www.coltontfwilliams.com", which holds all the files and code for the site and is
                          set up for static hosting, and a second bucket, "coltontfwilliams.com", which is simply set to redirect to the
                          "www.coltontfwilliams.com" bucket.
                        </span>
                        <br/><br/>


                        <span>
                          To set up the redirect, follow this document:
                        </span>
                        <br/><br/>
                          <span>
                            <a
                                href = "https://aws.amazon.com/blogs/aws/root-domain-website-hosting-for-amazon-s3/"
                                target = "blank">
                                https://aws.amazon.com/blogs/aws/root-domain-website-hosting-for-amazon-s3/
                            </a>
                          </span>
                        <br/><br/>

                        <span>
                          Because you cannot update existing files in an S3 bucket, I found it easiest to remove the files from the bucket,
                          and upload the updated files. To remove bucket contents, use "aws s3 rm --recursive s3://www.coltontfwilliams.com"
                          in the command line.
                        </span>
                        <br/><br/>

                        <span>
                          Next, upload the new files by navigating to the root directory, in my case /Users/coltonwilliams/websites/personal/personal-website,
                          and use "aws s3 cp ~/Websites/personal/personal-website s3://www.coltontfwilliams.com --recursive"
                        </span>
                        <br/><br/>

                        <span>
                          To configure the bucket, navigate to S3 -> Properties -> Static website hosting, and click "Use this bucket to host a website". Enter the index document,
                          (usually index.html), and click save.
                        </span>
                        <br/><br/>

                        <span>
                          Finally, to enable public access, navigate to S3 -> Permissions -> Bucket Policy, and enter the following policy:
                        </span>
                        <br/><br/>

                        <pre><code><span className = "code-font-small">{`{"Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource":
      "arn:aws:s3:::your-bucket/*"
    }
  ]
}
                          `}
                        </span></code></pre>
                        <br/>

                        <span>
                          Next, update the origin domain name and path for the Cloudfront distribution by navigating to
                          Cloudfront -> your_distribution -> Origins and Origin Groups. Select your distribution and click "edit".
                        </span>
                        <br/><br/>

                        <span>
                          In Origin Settings, under Origin Domain Name, do not select your bucket from the drop down menu.
                          Instead, enter the endpoint URL found in the main bucket, in my case "www.coltontfwilliams.com",
                          found in S3 -> your_bucket -> Properties -> Static website hosting.
                        </span>
                        <br/><br/>

                        <span>
                          To finish the update, the last step is to update the alias target for the redirect bucket in Route 53. To do this, navigate to
                          Route 53 -> Hosted Zones -> your_domain (coltontfwilliams.com in my case). Select, or create the A - IPv4 address record,
                          and select the redirect bucket under Alias Target. Save the record set, and you should be done!
                        </span>
                        <br/><br/>

                        <span>
                          Thanks for reading!<br/><br/>
                          Cheers,<br/>
                          Colton
                        </span>
                      </div>
                    </div>
                  </MediaQuery>
              </div>
      );
    }
}

export default UpdateSiteAWS;