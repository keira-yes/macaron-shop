import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (arg) => {
    const { LIMIT, currentPage, searchParams } = arg;
    const { data } = await axios(
        `https://-64a2eabcb45881cc0ae5e05e.mockapi.io/products?limit=${LIMIT}&page=${currentPage}${searchParams}`,
    );
    return data;
});

const initialState = {
    products: [],
    isLoading: true,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
            state.search = '';
            state.currentPage = 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.products = [];
            state.isLoading = false;
        });
    },
});

export const { setActiveCategory } = productsSlice.actions;

export default productsSlice.reducer;
