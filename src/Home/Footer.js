import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <div className="footer">
            <h3>For more Information contact us:</h3>
            <div className="social-media">
            <SocialIcon className="fb" url="https://facebook.com/in/jaketrent" />
            <SocialIcon className="insta" url="https://instagram.com/in/jaketrent" />
            <h4>Our phone number:</h4>
            <p>+216 56 541 541</p>
            <p>Credits goes to Rami Tounsi</p>
            </div>
        </div>
    )
}

export default Footer
