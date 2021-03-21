import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { loadComments } from '../../features/comments/commentsSlice';
import { Comment } from '../comment/Comment';
import './singlePost.css';

export const SinglePost = ({ match }) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.data.find(post => post.id === match.params.id));
    const { subreddit, title, author, text, embedId, upvotes, id } = post;

    useEffect(() => { dispatch(loadComments({subreddit, id}))}, [dispatch, subreddit, id]);

    const { isLoadingComments, data } = useSelector(state => state.comments);

    return (
        <article id="single-post">
            <div id="back-button"><Link to="/"><FontAwesomeIcon icon={faUndo} /></Link></div>
            <h2>{title}</h2>
            <h3>r/{subreddit}</h3>
            <p>posted by {author}</p>
            <p>{text}</p>
            <iframe
                width="50%"
                height="250"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <p><FontAwesomeIcon icon={faArrowUp} />{upvotes}</p>
            { isLoadingComments ? 
            <p>Loading...</p> :
            data.map(comment => <Comment comment={comment} key={comment.id} />) 
            }
        </article>
    )
};