import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface FilterSliceState {
    activeCategory: number;
    activeSort: string;
    search: string;
    currentPage: number;
}

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
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
            state.search = '';
            state.currentPage = 1;
        },
        setActiveSort: (state, action) => {
            state.activeSort = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            state.currentPage = 1;
            state.activeCategory = 0;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setActiveCategory, setActiveSort, setSearch, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
