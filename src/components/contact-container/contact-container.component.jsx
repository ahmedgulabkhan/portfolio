import React from 'react';
import './contact-container.styles.scss';
import Fade from 'react-reveal/Fade';

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
                                <img src="assets/circular-image.jpeg" alt="Circular Image" className="circular-image" />
                            </div>
                            <div className="social-media-container">
                                <a href="https://github.com/ahmedgulabkhan" >
                                    <img src="assets/github-logo.png" alt="Github" className="social-imgs" />
                                </a>
                                <a href="https://www.linkedin.com/in/ahmedgulabkhan/" >
                                    <img src="assets/linkedin-logo.png" alt="Linkedin" className="social-imgs" />
                                </a>
                                <a href="https://www.facebook.com/ahmedgulabkhan" >
                                    <img src="assets/facebook-logo.png" alt="Facebook" className="social-imgs" />
                                </a>
                                <a href="https://www.instagram.com/gulab_khan__/" >
                                    <img src="assets/instagram-logo.jpg" alt="Instagram" className="social-imgs" />
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
                        <img src="assets/contact-image.svg" alt="About Image" className="contact-img" />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default ContactContainer;