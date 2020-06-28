import React from 'react';
import './skills-container.styles.scss';
import Fade from 'react-reveal/Fade';
import skillsImage from '../../assets/skills-image.svg';
import html5 from '../../assets/html-5.png';
import css3 from '../../assets/css-3.png';
import bootstrap from '../../assets/bootstrap.png';
import javascript from '../../assets/javascript.png';
import reactjs from '../../assets/reactjs.png';
import nodejs from '../../assets/nodejs.png';
import flutter from '../../assets/flutter.png';
import firebase from '../../assets/firebase.png';
import python from '../../assets/python.png';
import mongodb from '../../assets/mongodb.png';

const SkillsContainer = () => {
    return(
        <div id="skills" className="skills-container container-fluid">
            <div className="row">
                <div className="col-md skills-left">
                    <Fade left>
                        <img src={skillsImage} alt="Skills Image" className="skills-img" />
                    </Fade>
                </div>
                <div className="col-md skills-right">
                    <div className="inner">
                        <Fade right>
                            <div className="skills-right-header">Tech I Know 💻</div>
                            <br />
                            <div className="skills-right-imgs container-fluid">
                                <img src={html5} className="skills-icon html-5" />
                                <img src={css3} className="skills-icon css-3" />
                                <img src={bootstrap} className="skills-icon bootstrap" />
                                <img src={javascript} className="skills-icon javascript" />
                                <img src={reactjs} className="skills-icon reactjs" />
                                <img src={nodejs} className="skills-icon nodejs" />
                                <img src={flutter} className="skills-icon flutter" />
                                <img src={firebase} className="skills-icon firebase" />
                                <img src={python} className="skills-icon python" />
                                <img src={mongodb} className="skills-icon mongodb" />                
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsContainer;