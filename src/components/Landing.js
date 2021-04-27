import React from 'react';
import headshot from "../static/images/scott.jpeg";

const Landing = () => {
    return (
        <>
        
        <div className = "landing-text">
        <img className = "headshot"src = {headshot} alt = "headshot" height = "400px"/>
        <h1 className = "name">S _ C O U P A R</h1>
        <h2 className ="job-title">software developer</h2>
        <button className = "button">hello.</button>
        </div>
        
        
        </>
    )
}

export default Landing;