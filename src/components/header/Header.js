import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import logo from '../../images/logo.png';
import './header.css';

export const Header = () => {
    const showNav = () => {
        const sidebar = document.getElementById('sidebar');

        sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
    };

    return (
        <div className='header'>
            <Link to="/">
            <img src={logo} alt='Heardit' id='logo' />
            </Link>
            <div className='title'>
                <h1>Heardit</h1>
                <h2>Find new music with Reddit</h2>
            </div>
            <button id="nav" onClick={showNav}><FontAwesomeIcon icon={faBars} /></button>
        </div>
    )
};