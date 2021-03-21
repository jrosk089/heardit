import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import './header.css';

export const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <img src={logo} alt='Heardit' id='logo' />
            </Link>
            <div className='title'>
                <h1>Heardit</h1>
                <h2>Find new music with Reddit</h2>
            </div>
        </div>
    )
};