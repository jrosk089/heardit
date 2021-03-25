import './sidebar.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectedSubreddit } from '../../features/subreddits/selectedSubredditSlice';

import { SearchBar } from '../../features/searchBar/SearchBar';

export const Sidebar = () => {
    const dispatch = useDispatch();
    
    const subreddits = useSelector(state => state.subreddits);
    const selectedSub = useSelector(state => state.selectedSubreddit);
    
    const sidebar = document.getElementById('sidebar');

    return (
        <div id="sidebar">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => 
                <Link key={subreddit} to="/">
                <li onClick={() => {
                        dispatch(selectedSubreddit({subreddit}));
                        if (sidebar.style.display !== null){
                            if (sidebar.style.display === 'block'){
                                sidebar.style.display = 'none'
                            }
                        }   
                    }}
                    className={(subreddit === selectedSub) ? 'selected' : 'unselected'}
                    >
                    {subreddit}
                </li>
                </Link>)}
            </ul>
            <SearchBar />
        </div>
    )
};