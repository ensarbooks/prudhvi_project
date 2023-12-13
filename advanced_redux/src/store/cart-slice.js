// cart-slice.js
import { createSlice } from '@reduxjs/toolkit';
const initialStateFromStorage = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  totalQuantity: 0,
  changed: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateFromStorage,

  reducers: {
    replaceCart(state, action) {
      if (!action.payload) {
        return initialStateFromStorage;
      }
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.items = action.payload.items;
      state.changed = false;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
      localStorage.removeItem('cart'); // Clear cart state from localStorage
    },
  },
});

export const cartActions = cartSlice.actions;// cart-slice.js
export const { resetCart } = cartSlice.actions;
export default cartSlice;