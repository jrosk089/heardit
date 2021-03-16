import { createSlice } from '@reduxjs/toolkit';

export const selectedSubredditSlice = createSlice({
    name: 'selectedSubreddit',
    initialState: [],
    reducers: {
        selectedSubreddit: (state, action) => {
            return state = action.payload.subreddit
        },
        clearSelection: (state) => state = []
    }
});

export const { selectedSubreddit, clearSelection } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;