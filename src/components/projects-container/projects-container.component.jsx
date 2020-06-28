import React from 'react';
import './projects-container.styles.scss';
import Fade from 'react-reveal/Fade';

const ProjectsContainer = () => {

    const handleClick = () => {
        window.location.href="https://github.com/ahmedgulabkhan?tab=repositories";
    }
    
    return(
        <div id="projects" className="projects-container container-fluid">
            <div className="inner">
                <Fade bottom>
                    <div className="projects-header">Some of my Projects ⚡</div>
                    <div className="row">
                        <a href="https://github.com/ahmedgulabkhan/GroupChatApp" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;GroupChatApp</span>
                            <br />
                            <br />
                            <div className="project-details">
                                Developed a Group chat application using Flutter and Firebase, where users 
                                can register and create groups or join already existing groups and start conversing 
                                with each other.
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> Dart &emsp; ☆85 &emsp; <i className="fa fa-code-fork" aria-hidden="true"></i>21</span>
                        </a>
                        <a href="https://github.com/ahmedgulabkhan/Foodspace" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;Foodspace</span>
                            <br />
                            <br />
                            <div className="project-details">
                                Foodspace is an app made using Flutter, where people can register and start 
                                exploring wide categories of restaurants present in their cities and also check 
                                the reviews and feedback...
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> Dart &emsp; ☆46 &emsp; <i className="fa fa-code-fork" aria-hidden="true"></i>17</span>
                        </a>
                    </div>
                    <div className="row">
                        <a href="https://github.com/ahmedgulabkhan/MovieGo" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;MovieGo</span>
                            <br />
                            <br />
                            <div className="project-details">
                                A Website implemented using MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack, 
                                which allows users to sign-in/register and book movie tickets online.
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> JavaScript &emsp; ☆12 &emsp; <i className="fa fa-code-fork" aria-hidden="true"></i>1</span>
                        </a>
                        <a href="https://github.com/ahmedgulabkhan/GitTrends" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;GitTrends</span>
                            <br />
                            <br />
                            <div className="project-details">
                                GitTrends is an app made using Flutter which displays all the trending 
                                repositories, developers for the current day, week or month. 
                                The GitHub mobile app does not support the feature...
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> Dart &emsp; ☆9</span>
                        </a>
                    </div>
                    <div className="row">
                        <a href="https://github.com/ahmedgulabkhan/TEI2S" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;TEI2S</span>
                            <br />
                            <br />
                            <div className="project-details">
                                TEI2S is a project which is really helpful for the visually impaired, in a sense 
                                that it takes an image containing text embedding as...
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> Dart &emsp; ☆8 &emsp; <i className="fa fa-code-fork" aria-hidden="true"></i>2</span>
                        </a>
                        <a href="https://github.com/ahmedgulabkhan/Pokedex" className="col-lg project-containers">
                            <span className="project-name"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;Pokedex</span>
                            <br />
                            <br />
                            <div className="project-details">
                                Pokedex is an app made using Flutter which shows a list of pokemons and their 
                                details.
                            </div>
                            <br />
                            <br />
                            <span><i className="fa fa-circle" aria-hidden="true"></i> Dart</span>
                        </a>
                    </div>
                    <div className="more-projects">
                        <button type="button" onClick={handleClick} className="btn">MORE PROJECTS &nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default ProjectsContainer;

