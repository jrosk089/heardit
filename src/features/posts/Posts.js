import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './postsSlice';
import { SimplePost } from './SimplePost';
import { setSearch } from '../searchBar/searchBarSlice';

import { Loading } from '../../components/loading/Loading';

export const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.data);
    const loading = useSelector(state => state.posts.isLoadingPosts);
    const failed = useSelector(state => state.posts.failedToLoadPosts);
    const subreddit = useSelector(state => state.selectedSubreddit);
    const searchBar = useSelector(state => state.searchBar);

    useEffect(() => { dispatch(loadPosts(subreddit))}, [dispatch, subreddit]);

    const resetSearch = () => {
        dispatch(setSearch(''));
    };

    if (loading) { return <Loading /> };
    if (failed) { return <p style={{textAlign: 'center'}}>Oh no! Something went wrong :( Try another subreddit?</p>};

    if (searchBar) {
        const filteredPosts = posts.filter(post => post.title.includes(searchBar));

        return (
            <div className="posts">
            <h2 className="subreddit">r/{subreddit}</h2>
            <p style={{textAlign: 'center'}}>Search results for "{searchBar}"</p>
            <div className="posts-container">
            {(filteredPosts.length < 1) ? 
                <div>
                    <p>No posts :(</p>
                    <button onClick={resetSearch}>Clear search</button>
                </div> : 
                filteredPosts.map(post => {
                    return <SimplePost post={post} key={post.id} />
                })}
                
            </div>
        </div>
        )
    };

    return (
        <div className="posts">
            <h2 className="subreddit">r/{subreddit}</h2>
            <div className="posts-container">
            {(posts.length < 1) ? 'No posts :(' : posts.map(post => {
                return <SimplePost post={post} key={post.id} />
            })}
            </div>
        </div>
    )
};