import React from 'react';
import { useSelector } from 'react-redux';
import { SimplePost } from './SimplePost';

export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const selectedSubreddit = useSelector(state => state.selectedSubreddit);

    const filteredPosts = (selectedSubreddit.length > 0) ? posts.filter(post => post.subreddit === selectedSubreddit) : posts;

    return (
        <div className="posts-container">
            {(posts.length < 1) ? 'No posts :(' : filteredPosts.map(post => {
                return <SimplePost post={post} key={post.id} />
            })}
        </div>
    )
};