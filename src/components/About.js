import React from 'react';
import DevIcon from 'devicon-react-svg';



const About = () => {
    return (
        <>
        <section id ="about">
        
        <h1 className = "title">Hello,</h1>
        <div className = "about-body">
        <p>I'm Scott Coupar - a full-stack developer based in Glasgow, Scotland. Having recently graduated from an intensive Professional Software Development course at CodeClan, I'm looking for opportunites to continue developing both software and myself.</p>
        <br></br>
        <p>I have experience with Java, JavaScript and Python and I'm comfortable working on both front and back end applications. You can see some of my work in the projects section below.</p>
        {/* <button className = "button2">Projects</button> */}
        <div className ="devicon-container">
        <DevIcon icon ="python" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="java" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="javascript" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="html5" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="css3" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="npm" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="visualstudio" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="postgresql" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="mongodb" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="git" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="github_badge" height = {50} fill="whitesmoke"/>
        </div>
        

        </div>
        
    
        </section>
        </>
    )
}

export default About;