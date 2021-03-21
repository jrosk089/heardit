import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';

import './simplePost.css';

export const SimplePost = ({ post }) => {
    const { title, author, embedId, upvotes, numComments, id } = post;

    return (
        <div id="post">
            <div id="post-header">
                <h2 id="post-title">{title}</h2>
            </div>
            <p id="post-author">posted by {author}</p>
            <div id="iframe-container">
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div id="post-footer">
                <span id="post-upvotes"><FontAwesomeIcon icon={faArrowUp} /> {upvotes}</span>
                <Link to={`/${id}`}>
                <span id="post-comments"><FontAwesomeIcon icon={faComment} /> {numComments}</span>
                </Link>
            </div>
        </div>
    )
};