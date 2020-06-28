import React from 'react';
import './skills-container.styles.scss';
import Fade from 'react-reveal/Fade';

const SkillsContainer = () => {
    return(
        <div id="skills" className="skills-container container-fluid">
            <div className="row">
                <div className="col-md skills-left">
                    <Fade left>
                        <img src="assets/skills-image.svg" alt="Skills Image" className="skills-img" />
                    </Fade>
                </div>
                <div className="col-md skills-right">
                    <div className="inner">
                        <Fade right>
                            <div className="skills-right-header">Tech I Know 💻</div>
                            <br />
                            <div className="skills-right-imgs container-fluid">
                                <img src="assets/html-5.png" className="skills-icon html-5" />
                                <img src="assets/css-3.png" className="skills-icon css-3" />
                                <img src="assets/bootstrap.png" className="skills-icon bootstrap" />
                                <img src="assets/javascript.png" className="skills-icon javascript" />
                                <img src="assets/reactjs.png" className="skills-icon reactjs" />
                                <img src="assets/nodejs.png" className="skills-icon nodejs" />
                                <img src="assets/flutter.png" className="skills-icon flutter" />
                                <img src="assets/firebase.png" className="skills-icon firebase" />
                                <img src="assets/python.png" className="skills-icon python" />
                                <img src="assets/mongodb.png" className="skills-icon mongodb" />                
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsContainer;