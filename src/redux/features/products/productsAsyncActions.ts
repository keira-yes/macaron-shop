import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProductsArg, ProductItem } from './productsTypes';

export const fetchProducts = createAsyncThunk<ProductItem[], FetchProductsArg>(
    'products/fetchProducts',
    async (arg) => {
        const { LIMIT, currentPage, searchParams } = arg;
        const { data } = await axios(
            `https://64a2eabcb45881cc0ae5e05e.mockapi.io/products?limit=${LIMIT}&page=${currentPage}${searchParams}`,
        );
        return data;
    },
);
