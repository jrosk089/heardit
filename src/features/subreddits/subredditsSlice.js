import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: [
        'Sub1', 'Sub2', 'Sub3', 'Sub4', 'Sub5'
    ],

});

export default subredditsSlice.reducer;