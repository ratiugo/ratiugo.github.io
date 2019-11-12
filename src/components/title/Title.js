import React from "react";
import "./Title.css";
import Colton from "../../images/colton.jpeg";

import MediaQuery from "react-responsive";

const Title = () => {
    return(
              <div className="vh-50 dt w-100 tc title">
                <div className="dtc v-mid">

                  <MediaQuery query="(min-width: 768px)">
                    <div className="pt5 tc">
                        <img
                            src={Colton}
                            className="br-100 h5 w5 shadow-5 ba" alt="avatar" />
                    </div>
                  </MediaQuery>

                  <MediaQuery query="(max-width: 768px)">
                    <div className="pt1 tc">
                        <img
                            src={Colton}
                            className="br-100 h5 w5 shadow-5 ba" alt="avatar" />
                    </div>
                  </MediaQuery>


                  <p className=" black fw3 font pa1 width center b">Hi, I'm Colton.</p>
                </div>
              </div>

 );
}

export default Title;