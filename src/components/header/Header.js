import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='Heardit' id='logo' />
            <div className='title'>
                <h1>Heardit</h1>
                <h2>Your favourite music from Reddit</h2>
            </div>
        </div>
    )
};