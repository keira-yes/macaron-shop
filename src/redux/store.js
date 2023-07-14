import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
    },
});
