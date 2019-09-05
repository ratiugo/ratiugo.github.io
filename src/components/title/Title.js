import React from 'react';
import './Title.css';
import Colton from '../../images/colton.jpeg';

const Title = () => {
    return(
              <div className="vh-50 dt w-100 tc title">
                <div className="dtc v-mid">
                  <div className="pt5 tc">
                      <img
                          src={Colton}
                          className="br-100 h5 w5 shadow-5 ba" alt="avatar" />
                  </div>
                  <p className=" black fw3 font pa1 width center b">Hi, I'm Colton.</p>
                </div>
              </div>

 );
}

export default Title;