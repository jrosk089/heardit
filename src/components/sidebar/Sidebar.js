import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit } from '../../features/subreddits/selectedSubredditSlice';

import './sidebar.css';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(state => state.subreddits);
    const selectedSub = useSelector(state => state.selectedSubreddit);

    return (
        <div id="sidebar">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => 
                <li key={subreddit} 
                    onClick={() => dispatch(selectedSubreddit({subreddit}))}
                    className={(subreddit === selectedSub) ? 'selected' : 'unselected'}
                    >
                    {subreddit}
                </li>)}
            </ul>
        </div>
    )
};