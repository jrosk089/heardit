import React from 'react';
import './simplePost.css';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const SimplePost = ({ post }) => {
    const { subreddit, title, text, embedId, upvotes, numComments, id } = post;

    return (
        <div id="post">
            <Link to={`/${id}`} style={{'textDecoration': 'none'}}>
            <div id="post-header">
                <h2 id="post-subreddit">r/{subreddit}</h2>
                <h2 id="post-title">{title}</h2>
            </div>
            <p id="post-text"><ReactMarkdown>{text}</ReactMarkdown></p>
            <iframe
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <div id="post-footer">
                <span id="post-upvotes">Upvotes: {upvotes}</span>
                <span id="post-comment-num">Comments: {numComments}</span>
            </div>
            </Link>
        </div>
    )
};