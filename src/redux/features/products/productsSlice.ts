import { createSlice } from '@reduxjs/toolkit';
import { ProductsSliceState } from './productsTypes';
import { fetchProducts } from './productsAsyncActions';

const initialState: ProductsSliceState = {
    products: [],
    isLoading: true,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
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

export default productsSlice.reducer;
