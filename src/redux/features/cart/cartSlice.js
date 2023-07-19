import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    items: [],
    totalQty: 0,
    totalPice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.items
                .filter((item) => item.id === action.payload.id)
                .find(
                    (item) =>
                        item.packing === action.payload.packing &&
                        item.size === action.payload.size,
                );
            if (cartItem) {
                cartItem.counter += 1;
            } else {
                action.payload.itemId = nanoid();
                action.payload.counter = 1;
                state.items.push(action.payload);
            }
            state.totalQty += 1;
            state.totalPice += action.payload.price;
        },
        increment: (state, action) => {
            const cartItem = state.items.find((item) => item.itemId === action.payload);
            cartItem.counter += 1;
            state.totalQty += 1;
            state.totalPice += cartItem.price;
        },
        decrement: (state, action) => {
            const cartItem = state.items.find((item) => item.itemId === action.payload);
            if (cartItem.counter === 1) return;
            cartItem.counter -= 1;
            state.totalQty -= 1;
            state.totalPice -= cartItem.price;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.itemId !== action.payload.itemId);
            state.totalQty -= action.payload.counter;
            state.totalPice -= action.payload.counter * action.payload.price;
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
