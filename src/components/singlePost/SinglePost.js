import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadComments } from '../../features/comments/commentsSlice';
import { Comment } from '../comment/Comment';
import './singlePost.css';

export const SinglePost = ({ match }) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.data.find(post => post.id === match.params.id));
    const { subreddit, title, text, embedId, upvotes, id } = post;

    useEffect(() => { dispatch(loadComments({subreddit, id}))}, [dispatch, subreddit, id]);

    const { isLoadingComments, data } = useSelector(state => state.comments);

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
            { isLoadingComments ? 
            <p>Loading...</p> :
            data.map(comment => <Comment comment={comment} key={comment.id} />) 
            }
            <p><Link to="/">Back</Link></p>
        </article>
    )
};