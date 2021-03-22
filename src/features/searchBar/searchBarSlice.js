import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: '',
    reducers: {
        setSearch: (state, action) => (state = action.payload),
    }
});

export const { setSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;
