import React from 'react';
import { useSelector } from 'react-redux';
import { SimplePost } from './SimplePost';

const Posts = () => {
    const posts = useSelector(state => state.posts);

    return (
        <div className="posts-container">
            {(posts.length < 1) ? 'No posts :(' : posts.map(post => {
                return <SimplePost post={post} />
            })}
        </div>
    )
};

export default Posts;