import React from 'react';
import logo from '../../images/logo.png';
import './loading.css';

export const Loading = () => {
    return (
    <div id="loading">
        <div id="loading-container">
            <img src={logo} alt="" />
        </div>
        <p>Loading...</p>
    </div>
    );
}