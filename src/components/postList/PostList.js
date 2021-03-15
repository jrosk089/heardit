import React from 'react';
import './postList.css';
import Posts from '../../features/posts/Posts';

export const PostList = () => {
    return (
        <section className="post-list">
            <Posts />
        </section>
    )
};