import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        itemFound.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += price * quantity;
    },
    removeItemCart: (state, action) => {
      const itemId = action.payload; 
      const itemFound = state.items.find((item) => item.id === itemId);
      if (itemFound) {
        state.total -= itemFound.price * itemFound.quantity; 
        state.items = state.items.filter((item) => item.id !== itemId); 
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
