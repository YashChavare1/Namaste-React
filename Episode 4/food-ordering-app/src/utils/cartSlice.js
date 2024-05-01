import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // reducer fn
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // reducer fn
        removeItem: (state) => {
            state.items.pop();
        },
        // reducer fnf
        clearCart: (state) => {
            state.items.length = 0;
        }       
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;  // we are accessing using "actions" because the function in reducers are actions.
export default cartSlice.reducer;