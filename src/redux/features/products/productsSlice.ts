import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (arg: any) => {
    const { LIMIT, currentPage, searchParams } = arg;
    const { data } = await axios(
        `https://64a2eabcb45881cc0ae5e05e.mockapi.io/products?limit=${LIMIT}&page=${currentPage}${searchParams}`,
    );
    return data;
});

export type ProductItem = {
    id: number;
    imageUrl: string;
    title: string;
    packing: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

interface ProductsSliceState {
    products: ProductItem[];
    isLoading: boolean;
}

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

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
