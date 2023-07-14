import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeCategory: 0,
    activeSort: 'noSort',
    search: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setActiveSort: (state, action) => {
            state.activeSort = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { setActiveCategory, setActiveSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
