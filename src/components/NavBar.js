import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

const NavBar = () => {
    return(
        <div className = "navbar-container">
            <div className = "navbar-button">
                <NavHashLink smooth to = "/#about"
                scroll ={(el) => el.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                About
                </NavHashLink>

            </div>
        </div>
        
    )
}

export default NavBar;