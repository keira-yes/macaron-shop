import { createSlice } from '@reduxjs/toolkit';

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
            const sameItem = state.items
                .filter((item) => item.id === action.payload.id)
                .find(
                    (item) =>
                        item.packing === action.payload.packing &&
                        item.size === action.payload.size,
                );
            if (sameItem) {
                sameItem.counter++;
            } else {
                action.payload.counter = 1;
                state.items.push(action.payload);
            }
        },
    },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
