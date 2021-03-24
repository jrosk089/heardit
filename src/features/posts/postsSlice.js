import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk('posts/loadPosts', async ( subreddit, {rejectWithValue} ) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
        const json = await response.json();

        return json
    } catch(error) { 
        return rejectWithValue(error)}
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoadingPosts: false,
        failedToLoadPosts: false,
        data: []
    },
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.data = (action.payload.data !== undefined) ? action.payload.data.children
            .filter(item => item.data.domain === 'youtu.be' || item.data.domain === 'youtube.com')
            .map(item => {
                return {
                    id: item.data.id,
                    author: item.data.author,
                    subreddit: item.data.subreddit,
                    title: item.data.title,
                    text: item.data.selftext,
                    embedId: item.data.url.includes('watch') ? 
                        item.data.url.slice((item.data.url.indexOf('=') + 1), (item.data.url.indexOf('=') + 12))
                        : item.data.url.slice(-11),
                    upvotes: item.data.ups,
                    numComments: item.data.num_comments
                }
            }) : 'failed';
        },
        [loadPosts.rejected]: (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true
        }
    }
});


export default postsSlice.reducer;