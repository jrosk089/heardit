import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: [
        'listentothis', 'music', 'classicalmusic', 'contemporary', 'Rap', 'Rock', 'metal', 'jazz', 'WorldMusic'
    ],

});

export default subredditsSlice.reducer;