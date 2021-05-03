import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import logo from '../static/images/logo.png';

const NavBar = () => {
    return(
        
        <div className = "navbar-container">
        <div id = "logo">
        <a href = "./">
            <img className = "logo" src ={logo} alt ="logo" height = "75px"/>
        </a>
        </div>
            <div className = "navbar-button">
                <NavHashLink smooth to = "/#about"
                scroll ={(el) => el.scrollIntoView({behavior: 'smooth', block: 'center'})}
                className = "item"
                activeClassName = "activeRoute">
                About
                </NavHashLink>
            </div>
            <div className = "navbar-button">
                <NavHashLink smooth to = "/#projects"
                scroll ={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}
                className = "item"
                activeClassName = "activeRoute">
                Projects
                </NavHashLink>
            </div>
            <div className = "navbar-button">
                <NavHashLink smooth to = "/#contact"
                scroll ={(el) => el.scrollIntoView({behavior: 'smooth', block: 'center'})}
                className = "item"
                activeClassName = "activeRoute">
                Contact
                </NavHashLink>
            </div>
        </div>
        
    )
}

export default NavBar;