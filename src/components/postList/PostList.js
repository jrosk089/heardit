import React from 'react';
import './postList.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Posts } from '../../features/posts/Posts';
import { SinglePost } from '../singlePost/SinglePost';

export const PostList = () => {
    return (
        <Router>
        <section className="post-list">
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route path="/:id" component={SinglePost} />
            </Switch>
        </section>
        </Router>
    )
};