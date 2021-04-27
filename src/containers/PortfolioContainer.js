import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBar from '../components/NavBar';
import Logo from '../components/Logo';

const PortfolioContainer = () => {
    return(
        <>
        <header>
            <Logo/>
            <NavBar/>
        </header>
        </>
        
    )
}

export default PortfolioContainer;