import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [{
        id: 1,
        subreddit: 'Sub1',
        title: 'Title 1',
        text: 'This is the first pretend post',
        upvotes: 100,
        comments: [
            'Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'
        ]
    },
    {
        id: 2,
        subreddit: 'Sub2',
        title: 'Title 2',
        text: 'This is the second pretend post',
        upvotes: 200,
        comments: [
            'Comment 1', 'Comment 2', 'Comment 3',
        ]
    },
    {
        id: 3,
        subreddit: 'Sub3',
        title: 'Title 3',
        text: 'This is the third pretend post',
        upvotes: 300,
        comments: [
            'Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'
        ]
    },
    {
        id: 4,
        subreddit: 'Sub4',
        title: 'Title 4',
        text: 'This is the fourth pretend post',
        upvotes: 400,
        comments: [
            'Comment 1', 'Comment 2', 'Comment 3', 'Comment 4', 'Comment 5'
        ]
    },
    {
        id: 5,
        subreddit: 'Sub5',
        title: 'Title 5',
        text: 'This is the fifth pretend post',
        upvotes: 300,
        comments: [
            'Comment 1'
        ]
    }
    ]
});


export const { filterPosts } = postsSlice.actions;
export default postsSlice.reducer;