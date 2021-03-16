import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const SinglePost = ({ match }) => {
    const post = useSelector(state => state.posts.find(post => post.id === Number(match.params.id)));
    const { subreddit, title, text, upvotes, comments, } = post;

    return (
        <div>
            <h2>{title}</h2>
            <h3>{subreddit}</h3>
            <h4>Upvotes: {upvotes}</h4>
            <p>{text}</p>
            <ul>
            {comments.map(comment => <li>{comment}</li>)}
            </ul>
            <p><Link to="/">Back</Link></p>
        </div>
    )
};