import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './singlePost.css';

export const SinglePost = ({ match }) => {
    const post = useSelector(state => state.posts.data.find(post => post.id === match.params.id));
    const { subreddit, title, text, embedId, upvotes } = post;

    return (
        <article id="single-post">
            <h2>{title}</h2>
            <h3>{subreddit}</h3>
            <p>{text}</p>
            <iframe
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <p>Upvotes: {upvotes}</p>
            <p>Comments will go here</p>
            <p><Link to="/">Back</Link></p>
        </article>
    )
};