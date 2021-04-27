import React from 'react';
import logo from '../static/images/logo.png';


const Logo = () => {
    return (
        <div id = "logo">
        <a href = "./">
            <img className = "logo" src ={logo} alt ="logo" height = "100px"/>
        </a>
        </div>
    )
}

export default Logo;