import React from 'react';
import picture from '../../images/climb3.jpeg';
import Resume from '../../Resume.pdf';

import './AboutMe.css';

const AboutMe = ({id}) => {
    return(
            <div className = 'center mt5' id = {id}>
                    <h1 className = 'tc pt5 fw5'>About Me</h1>
                    <div className = 'bb w-50 center'>
                    </div>
                        <div className = 'flex flex-wrap justify-center items-start mt3'>
                                <div className = ' o-90 imgWrapper flex flex-wrap items-end ma2 justify-center'>
                                    <img src = {picture}
                                         className="br3 ba b--black-10 content dim"
                                         alt = ''/>
                                    <div className = 'text white-90 i pa2 hidden'>
                                        <h2>Squamish, BC</h2>
                                        <h3>Grand Wall Base Area</h3>
                                        <p>Arrowroot, 5.10b</p>
                                    </div>
                                </div>



                            <div className = 'infoText flex flex-column shadow-5 ma2'>
                                <h4 className = 'ma2 i'>Hi, I'm Colton.</h4><br/>
                                <p className = 'lh-copy ma2 i'>I'm a 23 year old UBC electrical engineering grad from Vancouver. I love learning new things, building things, music, technology, and climbing. Right now I'm workng for Kingsley Amplifiers, a local tube guitar amplifier and pedal company, hand wiring guitar pedals.</p><br/>
                                <p className = 'lh-copy ma2 i'>I've been spending most of the summer climbing and camping in Squamish and teaching myself how to build web apps with React. My favourite part of my degree was always programming, and building websites has been incredibly fun.</p><br/>
                                <p className = 'lh-copy ma2 i '>If you like my work, I'd love to try taking on any sort of project I can! This is my first website, but you can check out some other projects I've done below, or email me if you have any questions!</p><br/><br/>
                                <a href={Resume} download className = 'b noLink background-color black i ma4 flex justify-center pa2 shadow-2 br-pill link dim'><p>Download my resume!</p></a>
                            </div>
                        </div>

            </div>
 );
}

export default AboutMe;