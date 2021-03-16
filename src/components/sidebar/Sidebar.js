import React from 'react';
import { useSelector } from 'react-redux';
import './sidebar.css';

export const Sidebar = () => {
    const subreddits = useSelector(state => state.subreddits);
    return (
        <div id="sidebar">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => <li>{subreddit}</li>)}
            </ul>
        </div>
    )
};