import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterSliceState } from './filterTypes';

const initialState: FilterSliceState = {
    activeCategory: 0,
    activeSort: 'noSort',
    search: '',
    currentPage: 1,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload;
            state.search = '';
            state.currentPage = 1;
        },
        setActiveSort: (state, action: PayloadAction<string>) => {
            state.activeSort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.currentPage = 1;
            state.activeCategory = 0;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setActiveCategory, setActiveSort, setSearch, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
