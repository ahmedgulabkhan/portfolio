import React from 'react';
import './contact-container.styles.scss';
import Fade from 'react-reveal/Fade';
import circularImage from '../../assets/circular-image.jpeg';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';
import facebookLogo from '../../assets/facebook-logo.png';
import instagramLogo from '../../assets/instagram-logo.jpg';
import contactImage from '../../assets/contact-image.svg';

const ContactContainer = () => {
    return(
        <div id="contact" className="contact-container container-fluid">
            <div className="row">
                <div className="col-md contact-left">
                    <div className="inner">
                        <Fade left>
                            <div className="contact-left-header">Give me a Buzz! 📳</div>
                            <div className="contact-left-text">
                                Want to discuss about Tech, Software Development or A.I? Count me in.
                            </div>
                            <div className="contact-left-img">
                                <img src={circularImage} alt="Circular Image" className="circular-image" />
                            </div>
                            <div className="social-media-container">
                                <a href="https://github.com/ahmedgulabkhan" >
                                    <img src={githubLogo} alt="Github" className="social-imgs" />
                                </a>
                                <a href="https://www.linkedin.com/in/ahmedgulabkhan/" >
                                    <img src={linkedinLogo} alt="Linkedin" className="social-imgs" />
                                </a>
                                <a href="https://www.facebook.com/ahmedgulabkhan" >
                                    <img src={facebookLogo} alt="Facebook" className="social-imgs" />
                                </a>
                                <a href="https://www.instagram.com/gulab_khan__/" >
                                    <img src={instagramLogo} alt="Instagram" className="social-imgs" />
                                </a>
                            </div>
                            <div className="location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> Hyderabad, India.
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-md contact-right">
                    <Fade right>
                        <img src={contactImage} alt="About Image" className="contact-img" />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default ContactContainer;