import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: [
        'listentothis', 'music', 'jazz', 'classicalmusic', 'folkmusic'
    ],

});

export default subredditsSlice.reducer;