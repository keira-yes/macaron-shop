import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from './features/filter/filterSlice';
import cartSlice from './features/cart/cartSlice';
import productsSlice from './features/products/productsSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        products: productsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
