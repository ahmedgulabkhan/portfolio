import React from 'react';
import './footer.styles.scss';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return(
        <div className="footer-container container-fluid">
            <Fade bottom>
                Made with ❤️ by Ahmed Gulab Khan
            </Fade>
        </div>
    );
}

export default Footer;