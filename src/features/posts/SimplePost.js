import React from 'react';

export const SimplePost = ({ post }) => {
    const { subreddit, title, text, upvotes, comments } = post;

    return (
        <div id="post">
            <div id="post-header">
                <h2 id="post-subreddit">{subreddit}</h2>
                <h2 id="post-title">{title}</h2>
            </div>
            <p id="post-text">{text}</p>
            <div id="post-footer">
                <span id="post-upvotes">Upvotes: {upvotes}</span>
                <span id="post-comment-num">Comments: {comments.length}</span>
            </div>
        </div>
    )
};