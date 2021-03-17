import React from 'react';
import './simplePost.css';
import { Link } from 'react-router-dom';
import image from './video_placeholder.jpg';

export const SimplePost = ({ post }) => {
    const { subreddit, title, text, upvotes, comments, id } = post;

    return (
        <div id="post">
            <Link to={`/${id}`} style={{'textDecoration': 'none'}}>
            <div id="post-header">
                <h2 id="post-subreddit">{subreddit}</h2>
                <h2 id="post-title">{title}</h2>
            </div>
            <p id="post-text">{text}</p>
            <img src={image} alt="" />
            <div id="post-footer">
                <span id="post-upvotes">Upvotes: {upvotes}</span>
                <span id="post-comment-num">Comments: {comments.length}</span>
            </div>
            </Link>
        </div>
    )
};