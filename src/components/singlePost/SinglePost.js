import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './singlePost.css';
import image from '../../features/posts/video_placeholder.jpg';

export const SinglePost = ({ match }) => {
    const post = useSelector(state => state.posts.find(post => post.id === Number(match.params.id)));
    const { subreddit, title, text, upvotes, comments } = post;

    return (
        <article id="single-post">
            <h2>{title}</h2>
            <h3>{subreddit}</h3>
            <p>{text}</p>
            <img src={image} alt="" />
            <p>Upvotes: {upvotes}</p>
            {comments.map(comment => {
                return (
                <div className="individual-comment">
                    <h4>{comment.author}</h4>
                    <p>{comment.text}</p>
                </div>
                )
            })}
            <p><Link to="/">Back</Link></p>
        </article>
    )
};