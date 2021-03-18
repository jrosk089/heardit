import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './postsSlice';
import { SimplePost } from './SimplePost';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.data);
    const loading = useSelector(state => state.posts.isLoadingPosts);
    const subreddit = useSelector(state => state.selectedSubreddit);

    useEffect(() => { dispatch(loadPosts(subreddit))}, [dispatch, subreddit]);

    if (loading) { return <h2>Loading</h2> };

    return (
        <div className="posts-container">
            <h2 className="subreddit">r/{subreddit}</h2>
            {(posts.length < 1) ? 'No posts :(' : posts.map(post => {
                return <SimplePost post={post} key={post.id} />
            })}
        </div>
    )
};