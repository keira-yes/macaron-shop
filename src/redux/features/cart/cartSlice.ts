import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getLocalStorageCart } from '../../../utils/getLocalStorageCart';
import { CartItem, CartItemRemoved, CartSliceState } from './cartTypes';

const { cartItems, totalCounter, totalSumm } = getLocalStorageCart();

const initialState: CartSliceState = {
    items: cartItems,
    totalQty: totalCounter,
    totalPice: totalSumm,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const cartItem = state.items
                .filter((item) => item.id === action.payload.id)
                .find(
                    (item) =>
                        item.packing === action.payload.packing &&
                        item.size === action.payload.size,
                );
            if (cartItem && cartItem.counter) {
                cartItem.counter += 1;
            } else {
                action.payload.itemId = nanoid();
                action.payload.counter = 1;
                state.items.push(action.payload);
            }
            state.totalQty += 1;
            state.totalPice += action.payload.price;
        },
        increment: (state, action: PayloadAction<string>) => {
            const cartItem = state.items.find((item) => item.itemId === action.payload);
            if (cartItem && cartItem.counter) {
                cartItem.counter += 1;
                state.totalQty += 1;
                state.totalPice += cartItem.price;
            }
        },
        decrement: (state, action: PayloadAction<string>) => {
            const cartItem = state.items.find((item) => item.itemId === action.payload);
            if (cartItem && cartItem.counter) {
                if (cartItem.counter === 1) return;
                cartItem.counter -= 1;
                state.totalQty -= 1;
                state.totalPice -= cartItem.price;
            }
        },
        removeItem: (state, action: PayloadAction<CartItemRemoved>) => {
            state.items = state.items.filter((item) => item.itemId !== action.payload.itemId);
            if (action.payload.counter) {
                state.totalQty -= action.payload.counter;
                state.totalPice -= action.payload.counter * action.payload.price;
            }
        },
        clear: (state) => {
            state.items = [];
            state.totalQty = 0;
            state.totalPice = 0;
        },
    },
});

export const { addItem, increment, decrement, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
