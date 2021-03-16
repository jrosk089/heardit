import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit, clearSelection } from '../../features/subreddits/selectedSubredditSlice';

import './sidebar.css';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(state => state.subreddits);

    return (
        <div id="sidebar">
            <h2>Subreddits</h2>
            <ul>
                <li onClick={() => dispatch(clearSelection())}>All</li>
                {subreddits.map(subreddit => 
                <li key={subreddit} 
                    onClick={() => dispatch(selectedSubreddit({subreddit}))}>
                    {subreddit}
                </li>)}
            </ul>
        </div>
    )
};