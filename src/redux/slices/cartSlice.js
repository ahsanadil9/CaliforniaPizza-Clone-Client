import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const item = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);
      console.log("item id(cartSlice): ", id);

      console.log("quantity (cartSlice)", quantity);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cartItems.cartItems;

export default cartSlice.reducer;
