import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './features/posts/postsSlice';
import subredditsReducer from './features/subreddits/subredditsSlice';

export default configureStore({
    reducer: { 
        posts: postsReducer,
        subreddits: subredditsReducer
    }
});