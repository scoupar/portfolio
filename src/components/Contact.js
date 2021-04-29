import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Contact = () => {
    return (
        <>
        <section id="contact">
            <h1 className ="title">Contact</h1>
            <div className = "social-icons">
            <SocialIcon url ="https://github.com/scoupar" target ="_blank" network = "github" bgColor ="#ffbd59" className ="icon" style={{height:100, width:100}}/>
            <SocialIcon url = "https://www.linkedin.com/in/scott-coupar/" target ="_blank" network = "linkedin" bgColor ="#ffbd59" className ="icon" style={{height:100, width:100}}/>
            <SocialIcon url = "mailto:scott.coupar@googlemail.com" target ="_blank" network = "email" bgColor ="#ffbd59" className ="icon" style={{height:100, width:100}}/>
            </div>
        </section>
        <footer>
            <p className = "footer-text">© Scott Coupar 2021</p>
        </footer>
        </>
    )
}

export default Contact;

