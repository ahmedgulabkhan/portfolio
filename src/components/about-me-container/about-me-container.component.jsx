import React from "react";
import './about-me-container.styles.scss';
import Fade from 'react-reveal/Fade';

const AboutMeContainer = () => {

    var getAngle = (x1, y1, x2, y2) => {

        var diffX = Math.abs(x1 - x2);
        var diffY = Math.abs(y1 - y2);
        var atan = Math.atan(diffY / diffX) * 180 / Math.PI;
        if(x1>x2 && y1>y2)
        {
            return 180 - atan;
        }
        if(x1<x2 && y1<y2)
        {
            return 360 -atan;
        }
        if(x1>x2 && y1<y2)
        {
            return 180 + atan;
        }
        if(x1<x2 && y1>y2)
        {
            return atan;
        }
    }

    const handleImageDisplay = (event) => {
        var image = document.getElementById("animoji");
        var rect = image.getBoundingClientRect();
        var cx = rect.left + rect.width * 0.5;
        var cy = rect.top + rect.height * 0.5;

        var angle = getAngle(cx, cy, event.clientX, event.clientY);
        console.log(angle);
        
        if(event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
            document.getElementById("animoji").src = "assets/animoji-front.png";
        }
        else if(angle > 337.5 || angle <= 22.5) {
            document.getElementById("animoji").src = "assets/animoji-right.png";
        }
        else if(angle > 22.5 && angle <= 67.5) {
            document.getElementById("animoji").src = "assets/animoji-right-up.png";
        }
        else if(angle > 67.5 && angle <= 112.5) {
            document.getElementById("animoji").src = "assets/animoji-up.png";
        }
        else if(angle > 112.5 && angle <= 157.5) {
            document.getElementById("animoji").src = "assets/animoji-left-up.png";
        }
        else if(angle > 157.5 && angle <= 202.5) {
            document.getElementById("animoji").src = "assets/animoji-left.png";
        }
        else if(angle > 202.5 && angle <= 247.5) {
            document.getElementById("animoji").src = "assets/animoji-left-down.png";
        }
        else if(angle > 247.5 && angle <= 292.5) {
            document.getElementById("animoji").src = "assets/animoji-down.png";
        }
        else if(angle > 292.5 && angle <= 337.5) {
            document.getElementById("animoji").src = "assets/animoji-right-down.png";
        }
    }

    return(
        <div id="about" className="about-me-container container-fluid">
            <div className="row">
                <div className="col-md about-me-left">
                    <div className="inner">
                        <Fade left>
                            <div className="about-me-left-header">Hey there! ✌</div>
                            <br />
                            <div className="about-me-left-text">
                                My name is Ahmed Gulab Khan.
                                I am an undergrad currently pursuing my B. Tech in Electronics and Communication 
                                Engineering from National Institute of Technology, Warangal (Batch of 2020). 
                                I have a great passion towards Programming, Software Development and 
                                Artificial Intelligence.
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-md about-me-right" onMouseMove={handleImageDisplay} >
                    <div className="inner-right">
                        <Fade right>
                            <img src="assets/animoji-front.png" alt="About Image" id="animoji" className="about-me-img" />
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
                            <div className="btn-container">
                                <a type="button" href="#contact" className="btn">CONTACT ME</a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeContainer;