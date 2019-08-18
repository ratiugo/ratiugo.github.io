import React from 'react';
import './Title.css';
import Colton from '../../images/colton.jpeg';

const Title = () => {
    return(
              <div className="vh-50 dt w-100 tc title">
                <div className="dtc v-mid">
                  <div class="pt5 tc">
                      <img
                          src={Colton}
                          class="br-100 h5 w5 shadow-5 ba" alt="avatar" />
                  </div>
                  <p className=" black fw3 font pa1 br-pill width center shadow-2">COLTON WILLIAMS</p>
                </div>
              </div>

 );
}

export default Title;