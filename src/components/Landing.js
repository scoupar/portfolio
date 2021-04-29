import React from 'react';
import headshot from "../static/images/scott.jpeg";
import Typical from 'react-typical';

const Landing = () => {
    return (
        <>
        
        <div className = "landing-text">
        <img className = "headshot"src = {headshot} alt = "headshot" height = "400px"/>
        <Typical className ="name"
        steps ={['S _ C O U P A R']}
        loop ={1}
        wrapper = "h1"
        />
        <Typical className = "job-title"
        steps = {['restaurant manager', 10, 'musician', 10, 'software developer']}
        loop = {1}
        wrapper = 'h2'
        />
        <button className = "button">hi!</button>
        </div>
        
        
        </>
    )
}

export default Landing;